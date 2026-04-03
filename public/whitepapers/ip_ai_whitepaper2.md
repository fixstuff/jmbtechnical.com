# The Scenario Was Not Hypothetical:
## The Claude Code Incident as a Live Case Study in AI-Era Intellectual Property Law Failure

**James M. Belcher**  
Founder, JMB Technical Services LLC  
April 3, 2026

*A follow-up to: "Functional Equivalence and the Limits of Law" (April 1, 2026)*

---

## Executive Summary

On April 1, 2026, this author published a whitepaper titled "Functional Equivalence and the Limits of Law," arguing that intellectual property law was structurally unprepared for AI-enabled functional reimplementation of proprietary software. The paper's central scenario described the accidental exposure of proprietary source code via TypeScript source map files, followed by AI-assisted reimplementation in Python, then Rust, then a compiled binary — defeating copyright law's substantial similarity test at every stage.

The scenario had already happened.

On March 31, 2026 — the day before the paper's publication — Anthropic accidentally shipped 512,000 lines of proprietary TypeScript source code for Claude Code inside an npm package via a misconfigured source map file. Within hours, it was mirrored across thousands of repositories. By sunrise, a developer in Korea had already ported the core architecture to Python using an AI coding agent. Within 24 hours, a Rust port was underway. The repository — named claw-code — reached 100,000 GitHub stars in a single day, the fastest-growing repository in GitHub history. Anthropic filed DMCA takedowns against direct mirrors. The Python and Rust rewrites claimed clean-room status and remained available. A stripped version was uploaded to IPFS, beyond DMCA reach entirely.

This paper is not an analysis of a hypothetical. It is a post-mortem of a live event that activated, in real time, every legal doctrine, governance gap, and enforcement failure that the original paper predicted.

> **The Central Finding:** The original paper predicted a scenario. The scenario happened the day before the paper published. Every element — source map exposure, AI-assisted language chain rewrite, DMCA response, jurisdictional fracture via IPFS, clean-room defense claim, compiled binary distribution — manifested exactly as analyzed. The paper's reforms are not theoretical. They are urgent. The case is no longer hypothetical. It is Anthropic v. the Internet, and the Internet is winning.

---

## 1. The Incident: A Technical and Legal Timeline

### 1.1 The Mechanism: How 512,000 Lines Escaped

Claude Code is Anthropic's flagship AI coding agent. As of early 2026, it had achieved an annualized recurring revenue of approximately $2.5 billion, with enterprise adoption accounting for roughly 80% of that figure.

On March 31, 2026, version 2.1.88 of @anthropic-ai/claude-code was published to the npm registry. The package included, inadvertently, a 59.8 megabyte JavaScript source map file. Source maps are debugging artifacts — they translate minified, bundled production code back into readable source so that stack traces reference the original files rather than incomprehensible minified output. They are not supposed to ship in public packages.

The root cause was a missing entry in the .npmignore configuration file. One line. The omission caused the build toolchain to include the source map in the published package, and the source map contained a reference to a zip archive hosted on Anthropic's Cloudflare R2 storage bucket. That archive, publicly accessible, contained the full unobfuscated TypeScript source: approximately 1,900 files, 512,000 lines of code, 44 feature flags gating unreleased capabilities, internal model codenames, system prompts, and a complete roadmap Anthropic had never intended to publish.

> **The Build Toolchain Vulnerability:** Claude Code uses Bun as its JavaScript runtime and bundler — a tool Anthropic acquired in late 2025. An open bug in Bun (oven-sh/bun#28001, filed March 11, 2026) reported that source maps appear in production builds even when they shouldn't. If this bug caused the leak, Anthropic's own build toolchain shipped a known unresolved issue that exposed their flagship product. Nobody had to hack anything.

### 1.2 The Spread: Hours, Not Days

Security researcher Chaofan Shou discovered the source map exposure within hours of publication. From that moment, the timeline compressed to machine speed:

- Within minutes: the source was being downloaded by developers worldwide
- Within hours: thousands of GitHub forks and mirrors existed across multiple platforms
- At 4 AM Seoul time: developer Sigrid Jin ported the core architecture to Python from scratch using an AI coding agent called oh-my-codex, completing the port before sunrise
- Within 24 hours: claw-code reached 100,000 GitHub stars — the fastest-growing repository in GitHub history
- Within 48 hours: a Rust port was underway, described as the "definitive version" of the project
- Simultaneously: a stripped version was uploaded to IPFS with all telemetry removed, security guardrails disabled, and experimental features unlocked

Anthropic confirmed: "This was a release packaging issue caused by human error, not a security breach."

### 1.3 What Was Inside: The Unintended Roadmap

- 44 feature flags gating over 20 unshipped capabilities — all fully built, waiting behind flags
- KAIROS — referenced over 150 times — an unreleased autonomous daemon mode where Claude operates as a persistent, always-on background agent
- Internal model codenames including Capybara (also referred to as Mythos)
- The full system prompt shipped inside the CLI
- Anti-distillation features designed to pollute competitor training data extraction
- A critical permission system vulnerability: per-subcommand security analysis is bypassed when a pipeline exceeds 50 subcommands

> **⚠ The Unintended Competitive Intelligence Disclosure:** The leak provided competitors a complete architectural blueprint for building a high-agency, commercially viable AI coding agent. The exposed permission system, sandboxing approach, and multi-agent coordination patterns are now the only fully documented production-grade implementation in the industry. What took Anthropic years to develop and $2.5 billion ARR to validate is now a public reference implementation.

---

## 2. The Legal Framework Activated: Every Doctrine at Once

### 2.1 Copyright Law: The Idea-Expression Dichotomy in Real Time

Anthropic's DMCA strategy was immediately revealing. The company filed takedown notices against repositories hosting the original TypeScript. Those takedowns succeeded on GitHub — direct mirrors came down.

The Python rewrite — claw-code — remained up. Anthropic has not, as of this writing, filed a DMCA notice against it. This is not an oversight. It reflects a legal reality the original paper predicted precisely: the Python rewrite is a new expressive work. It does not reproduce Anthropic's TypeScript. It reproduces the functional architecture in a different language using different idioms, different syntax, and different patterns. The copyright claim against the expression is clear. The copyright claim against the architecture is not.

> **The Altai Test Applied to claw-code:** Under the Computer Associates v. Altai abstraction-filtration-comparison test, a court analyzing claw-code would filter out: the ideas (agent architecture, tool orchestration — not protectable); elements dictated by efficiency (standard patterns for CLI tools); and externally imposed specifications (MCP protocol, standard APIs). What survives filtration for comparison? Possibly very little. The Python code shares no literal expression with the TypeScript. The architecture is the only remaining candidate for protection — and architecture is exactly what the idea-expression dichotomy was designed to exclude from copyright.

### 2.2 The Clean-Room Defense: AI as the New Clean-Room Methodology

Sigrid Jin's account of claw-code's creation is precise and legally significant. He did not copy the TypeScript. He read the architecture, internalized it as a specification, and then used an AI coding agent to produce an implementation. The Python code was generated by oh-my-codex based on Jin's architectural understanding, not by mechanical translation of TypeScript syntax.

This is, technically, a clean-room reimplementation. Under traditional doctrine, a team that works from a functional specification — without access to the original expression — produces a legally independent work. Jin's process is structurally identical: he used the leaked source as a specification, then produced an independent implementation. The AI tool collapsed weeks of traditional clean-room development into hours.

The legal question is genuinely unresolved: does an AI-assisted clean-room rewrite that reproduces functional architecture, completed in hours rather than months, constitute copyright infringement? No court has answered this question.

> **⚠ The Dilemma Anthropic Cannot Win:** If Anthropic argues that the AI-assisted Python rewrite infringes copyright because it reproduces functional architecture, it implicitly endorses the argument that AI-generated outputs from copyrighted inputs constitute infringement — the same argument used against Anthropic in training data copyright cases. If it concedes that the clean-room AI rewrite is non-infringing, it validates the exact mechanism the original paper identified as the fundamental threat to software IP protection. There is no position Anthropic can take in the claw-code litigation that does not damage its interests in another litigation.

### 2.3 Trade Secret Law: The Clock Has Already Started

The Defend Trade Secrets Act protects information that derives economic value from not being generally known, provided reasonable measures are taken to keep it secret. Anthropic's source code was almost certainly a trade secret. Inadvertent disclosure does not automatically eliminate trade secret status — particularly when the owner acts quickly to contain the disclosure. Anthropic filed DMCA notices within hours, pulled the npm package, and issued a corrective statement.

The more difficult question: has the disclosure become so widespread that the information has lost its trade secret character through general public knowledge? At some point, a court may conclude that the genie is so thoroughly out of the bottle that protection has been lost regardless of remediation efforts. That point has not yet been reached legally — but the timeline is compressing.

### 2.4 The IPFS Problem: Jurisdictional Fracture Made Permanent

A stripped version of the Claude Code source — with telemetry removed, guardrails disabled, and experimental features unlocked — was uploaded to IPFS, the InterPlanetary File System. Content on IPFS is stored across thousands of nodes globally, retrieved by content hash, with no single administrator who can receive and comply with a DMCA takedown notice.

> **⚠ IPFS and the Limits of DMCA:** The DMCA notice-and-takedown system presupposes a service provider with a designated agent who can receive notices and remove content from identifiable servers. IPFS has no such agent. Content stored on IPFS cannot be taken down by any single party. Anthropic's DMCA strategy — effective against GitHub and npm — has no operational equivalent against IPFS. The stripped Claude Code source on IPFS is, for practical DMCA purposes, permanent.

---

## 3. The Governance Response: What Worked and What Didn't

### 3.1 Platform Governance at Machine Speed

npm pulled the affected package within hours. GitHub processed DMCA takedowns for direct TypeScript mirrors within the expected 24-48 hour window. These mechanisms worked as designed — for centralized, US-hosted platforms with identifiable administrators.

The limitations were equally revealing. GitHub processed takedowns for direct mirrors. It did not, and could not, take down claw-code — a separate repository containing independently written Python and Rust code. The platform's DMCA compliance mechanism has no tool for evaluating functional equivalence. It compares expression, not function. claw-code does not contain Anthropic's TypeScript. The DMCA mechanism has nothing to act on.

This is the governance gap the original paper identified: the only enforcement mechanism that operates at machine speed is expression-comparison, and AI-assisted reimplementation specifically defeats expression-comparison by design.

### 3.2 Secondary Threats at AI Speed

While Anthropic managed the primary disclosure, threat actors exploited it:

- Typosquatting attacks on npm package names visible in the leaked source
- Malicious GitHub repositories appearing near the top of Google results for "leaked Claude Code," delivering Vidar Stealer and GhostSocks malware via a Rust-based dropper
- Thousands of developers receiving malware from SEO-optimized fake repositories before any human reviewer could intervene

### 3.3 Community Self-Governance

Jin explicitly stated he had become uncomfortable with the legal and ethical questions and transitioned claw-code away from hosting any leaked TypeScript, focusing instead on the Python rewrite he believed represented a legally independent work. This voluntary norm adoption operated faster than any legal or regulatory mechanism could have acted.

> **The Norm Adoption Pattern:** The original paper argued that law's realistic role in AI-era IP governance is norm ratification and universalization — that norms must be established by industry first. The claw-code community's rapid self-organization around the clean-room rewrite norm is exactly this pattern in action. The norm emerged organically within hours. Law did not create it. Law will eventually need to ratify or reject it.

---

## 4. The Unresolved Legal Questions: What Courts Must Now Answer

### 4.1 Does an AI-Assisted Clean-Room Rewrite Infringe Copyright?

The stakes are high for both sides. If clean-room doctrine protects AI-speed rewrites, IP protection for software architecture effectively ends — any motivated actor with an AI coding agent can reproduce any disclosed software architecture in hours and claim clean-room status. If clean-room doctrine does not protect AI-speed rewrites, the doctrine must be rebuilt from first principles on some basis that survives AI capability — but what basis? The effort required? The time elapsed? The number of people involved? None of these have principled legal foundations.

### 4.2 What Is the Scope of Copyright in Software Architecture?

The Claude Code incident forces the question Oracle v. Google raised but never cleanly resolved: to what extent does copyright protect the functional architecture of a software system — the structure of its components, the interfaces between them, the patterns of their interaction — as distinct from the specific expression of that architecture in a particular programming language?

Neither outcome of this question is comfortable. Both are legally defensible under existing doctrine stretched to its limits. The Claude Code case may be the vehicle through which courts are finally forced to choose.

### 4.3 Can DMCA Reach IPFS?

The DMCA safe harbor framework requires a service provider with a registered DMCA agent. IPFS, by design, has no such entity. The practical enforcement reality is that content on IPFS, once uploaded, is effectively beyond the reach of any legal mechanism that operates on the DMCA model. The stripped Claude Code source is on IPFS right now. It will remain there.

### 4.4 The Training Data Recursion Problem

The leaked source code will inevitably be incorporated into future AI training datasets. Is code generated by an AI model trained on leaked proprietary source infringing? The causal chain is: leaked source → training data → model weights → generated code → shipped product. At what point, if any, does the copyright taint from the original disclosure disappear?

> **⚠ The Recursive Contamination Problem:** If AI models trained on leaked proprietary source are deemed to produce infringing outputs, then the Claude Code leak has potentially contaminated every AI coding assistant trained on data collected after March 31, 2026. The scale of that contamination is unknowable and the legal mechanism for addressing it does not exist.

---

## 5. The Reform Framework Revisited

### 5.1 Fast-Track Registration: More Urgent, More Difficult

The incident makes the Fast-Track Functional Architecture Registration proposal both more urgent and more technically difficult. More urgent: the abstract policy argument now has a named incident, a named company, a named repository, and a named developer. More difficult: defining the scope of "functional architecture" for registration purposes is harder than the original paper acknowledged. What exactly would Anthropic register? The agent loop? The tool invocation pattern? The permission model's layering? Each is influenced by prior art, open standards, and publicly documented design patterns.

### 5.2 Platform Governance: The Proved Mechanism and Its Hard Boundary

The incident validates platform governance as the only machine-speed mechanism. It also reveals its hard boundary with precision: platform governance operates on expression comparison. It can take down the TypeScript. It cannot take down the Python. It cannot take down the Rust. It cannot reach IPFS at all. This is a structural feature of how platforms work, not a gap closable by expanding platform governance.

### 5.3 Provenance Tracking: The Dog That Didn't Bark

Jin used oh-my-codex to generate the Python port. These AI-assisted sessions left logs and API call records. A mandatory provenance tracking system could establish a forensic chain linking the Python and Rust code to the architectural inputs — the leaked Claude Code — that informed the generation sessions. Without mandatory provenance tracking, that forensic chain depends entirely on the good faith of a developer who happened to be transparent. That is not a reliable evidentiary foundation.

### 5.4 The Emergency Injunction Gap

Three hours was sufficient for the Axios backdoor to reach 3% of cloud environments. Three hours was sufficient for Jin to produce a functioning Python port. The fastest legal remedy — an emergency TRO — requires days at minimum. By the time any court-ordered relief could issue, the source had been mirrored across thousands of repositories, ported to Python, and uploaded to IPFS. This is not procedural inefficiency. It is a categorical mismatch between AI-era harm speed and legal remedy speed.

---

## 6. Conclusions: What the Incident Proves and What It Demands

### 6.1 The Paper's Predictions: A Report Card

| Prediction | Outcome |
|---|---|
| Source map files as exposure mechanism | ✅ Confirmed: misconfigured source map in npm package |
| AI-assisted language chain rewrite | ✅ Confirmed: TypeScript → Python (AI agent) → Rust, within 24 hours |
| Clean-room defense claimed by reimplementer | ✅ Confirmed: claw-code's explicit legal theory |
| DMCA effective against centralized platforms | ✅ Confirmed: GitHub mirrors taken down |
| DMCA ineffective against functional rewrites | ✅ Confirmed: Python and Rust rewrites untouched |
| Jurisdictional fracture via decentralized distribution | ✅ Confirmed: IPFS upload, beyond DMCA reach |
| Harm irreversible before any legal remedy | ✅ Confirmed: 100,000 stars, thousands of forks, IPFS upload within 24 hours |

### 6.2 What the Incident Demands

- **Immediately:** Mandatory source map exclusion audits for any company shipping proprietary software through package registries. One configuration line prevents the specific exposure mechanism.
- **Within months:** AI provider mandatory provenance logging, implementable through acceptable use policy updates without new legislation.
- **Within 1-3 years:** Fast-Track Functional Architecture Registration legislation, using the Claude Code incident as the documented case for congressional hearings.
- **Within 3-7 years:** A binding legal answer to the clean-room AI rewrite question — either through litigation of the claw-code situation or through legislative clarification.
- **Within 7-15 years:** A framework for the training data recursion problem — some principled legal theory of how copyright interests travel through statistical learning processes.
- **Ongoing:** The IPFS question demands a different framework — possibly technical (content watermarking that survives decentralized distribution), possibly diplomatic, possibly architectural.

### 6.3 The Honest Assessment

The Claude Code incident proves that the scenario described in the original paper was not hypothetical, not theoretical, and not distant. It happened. It happened in hours. It involved one of the most commercially significant AI products in the world, operated by one of the most well-resourced AI companies in the world, with one of the most sophisticated developer communities in the world. And the outcome unfolded before any legal mechanism could respond.

That gap is not closing on its own. It widens with every new AI capability, every new decentralized storage protocol, and every day that the governance frameworks necessary to manage it remain unbuilt.

---

> **The Ultimate Finding of This Follow-Up Paper:**
>
> *The scenario was not hypothetical. It happened the day before the paper predicting it was published. TypeScript to Python to Rust to IPFS, in 24 hours, by one developer with an AI coding agent. Anthropic's DMCA campaign took down the TypeScript. The architecture is on IPFS forever. The law that should have prevented this does not yet exist. Building it is no longer a theoretical policy exercise. It is an emergency.*

---

## References and Sources

**Primary Incident Sources:**
- Anthropic spokesperson statement, March 31, 2026: "This was a release packaging issue caused by human error, not a security breach."
- Boris Cherny, Claude Code engineer: "Mistakes happen. As a team, the important thing is to recognize it's never an individual's fault."
- Sigrid Jin (instructkr), claw-code repository description and README, March 31 – April 2, 2026
- Chaofan Shou, discovery and public disclosure of source map exposure, March 31, 2026

**Secondary Analysis Sources:**
- VentureBeat, "Claude Code's source code appears to have leaked: here's what we know," March 31, 2026
- The Register, "Anthropic accidentally exposes Claude Code source code," March 31, 2026
- The Register, "Fake Claude Code source downloads actually delivered malware," April 2, 2026
- Cybernews, "Leaked Claude Code source spawns fastest growing repository in GitHub's history," April 2, 2026
- Engineer's Codex, "Diving into Claude Code's Source Code Leak," April 1, 2026
- Layer5.io, "The Claude Code Source Leak: 512,000 Lines, a Missing .npmignore, and the Fastest-Growing Repo in GitHub History"
- WaveSpeed AI, "What Is Claw Code? The Claude Code Rewrite Explained," April 2026
- SecurityWeek, "Critical Vulnerability in Claude Code Emerges Days After Source Leak," April 2, 2026
- Adversa AI, technical analysis of permission system vulnerability, April 2026
- Gergely Orosz (The Pragmatic Engineer), analysis of Anthropic's legal dilemma re: claw-code clean-room defense
- Zscaler ThreatLabz, analysis of trojanized Claude Code repositories and malware distribution, April 2026

**Legal Authorities:**
- *Computer Associates International, Inc. v. Altai, Inc.*, 982 F.2d 693 (2d Cir. 1992)
- 17 U.S.C. § 512 — DMCA safe harbor and notice-and-takedown framework
- 18 U.S.C. § 1836 et seq. — Defend Trade Secrets Act (2016)
- *Alice Corp. v. CLS Bank International*, 573 U.S. 208 (2014)

---

**Related:** [KAIROS: At the Right Time](/blog/kairos-claude-code-leak) — a companion blog post exploring what the incident means for AI autonomy and attribution.

*© 2026 JMB Technical Services LLC. All rights reserved.*  
*JMB Technical Services LLC — Industrial Automation & Emerging Technology Consulting*  
*[Back to White Papers](https://jmbtechnical.com/whitepapers/)*
