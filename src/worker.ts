interface Env {
	ASSETS: Fetcher;
}

interface ProtectedContent {
	paths: string[];
	passwordHash: string;
	cookieName: string;
	title: string;
}

// Add entries here to password-protect additional content
const PROTECTED: ProtectedContent[] = [
	{
		paths: [
			'/whitepapers/optimus-network-analysis',
			'/whitepapers/optimus_network_analysis.pdf',
			'/whitepapers/optimus_network_analysis.md',
		],
		passwordHash: 'e04140dcc702c689081da7530b16b68e282110e872ede2cf5b2fe784e35df802',
		cookieName: '__auth_optimus',
		title: 'The Optimus Network',
	},
];

async function sha256(str: string): Promise<string> {
	const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(str));
	return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2, '0')).join('');
}

function findProtected(pathname: string): ProtectedContent | null {
	const clean = pathname.replace(/\/$/, '') || '/';
	for (const p of PROTECTED) {
		if (p.paths.some(path => clean === path.replace(/\/$/, ''))) {
			return p;
		}
	}
	return null;
}

function passwordPage(title: string, error = false): string {
	return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Protected - ${title}</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{min-height:100vh;display:flex;align-items:center;justify-content:center;background:#1a1a2e;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#e5e7eb}
.gate{background:#16213e;border:1px solid rgba(255,255,255,.1);border-radius:1rem;padding:2.5rem;max-width:420px;width:90%;text-align:center;box-shadow:0 25px 50px rgba(0,0,0,.4)}
h1{font-size:1.5rem;font-weight:700;color:#fff;margin-bottom:.5rem}
.sub{color:#9ca3af;font-size:.9rem;margin-bottom:1.5rem}
.err{color:#f87171;font-size:.85rem;margin-bottom:1rem;padding:.5rem;background:rgba(248,113,113,.1);border-radius:.5rem}
form{display:flex;flex-direction:column;gap:.75rem}
input[type=password]{background:#1a1a2e;border:1px solid rgba(255,255,255,.15);border-radius:.5rem;padding:.75rem 1rem;color:#fff;font-size:1rem;outline:none;transition:border-color .2s}
input[type=password]:focus{border-color:#f0a500}
button{background:#f0a500;color:#1a1a2e;font-weight:700;border:none;border-radius:.5rem;padding:.75rem;font-size:1rem;cursor:pointer;transition:background .2s}
button:hover{background:#d4940a}
.back{margin-top:1.25rem}
.back a{color:#9ca3af;font-size:.85rem;text-decoration:none}
.back a:hover{color:#fff}
</style>
</head>
<body>
<div class="gate">
<h1>${title}</h1>
<p class="sub">This content is password protected.</p>
${error ? '<p class="err">Incorrect password. Please try again.</p>' : ''}
<form method="POST">
<input type="password" name="password" placeholder="Enter password" autofocus required />
<button type="submit">Access</button>
</form>
<div class="back"><a href="/whitepapers/">&larr; Back to White Papers</a></div>
</div>
</body>
</html>`;
}

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const url = new URL(request.url);
		const gate = findProtected(url.pathname);

		if (!gate) {
			return env.ASSETS.fetch(request);
		}

		// Check auth cookie
		const cookies = request.headers.get('Cookie') || '';
		const match = cookies.match(new RegExp(`${gate.cookieName}=([^;]+)`));
		if (match && match[1] === gate.passwordHash) {
			return env.ASSETS.fetch(request);
		}

		// Handle password submission
		if (request.method === 'POST') {
			const form = await request.formData();
			const password = form.get('password') as string;
			const hash = await sha256(password || '');

			if (hash === gate.passwordHash) {
				return new Response(null, {
					status: 302,
					headers: {
						'Location': url.pathname,
						'Set-Cookie': `${gate.cookieName}=${gate.passwordHash}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=86400`,
					},
				});
			}

			return new Response(passwordPage(gate.title, true), {
				status: 401,
				headers: { 'Content-Type': 'text/html' },
			});
		}

		// Show password form
		return new Response(passwordPage(gate.title), {
			status: 401,
			headers: { 'Content-Type': 'text/html' },
		});
	},
} satisfies ExportedHandler<Env>;
