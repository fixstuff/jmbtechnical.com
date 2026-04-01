# Functional Equivalence and the Limits of Law:
## How Artificial Intelligence Will Fundamentally Disrupt Copyright and Patent Law

**James M. Belcher**  
Founder, JMB Technical Services LLC  
April 2026

---

## Executive Summary

### The Scenario

On April 1, 2026, proprietary source code from a major AI platform became publicly accessible through an inadvertent exposure of TypeScript source map files — debugging artifacts left reachable on production infrastructure. Within hours the code was forked. Within 48 hours, AI systems had rewritten it in Python. Within days, a second AI pass produced a Rust implementation. The Rust code was compiled to a native binary, debug symbols stripped, and the resulting executable made available — a fully functional equivalent of a multi-year, hundred-million-dollar software investment, with no line of the original code visible anywhere in the artifact that shipped.

Most people's instinct is that this is obviously illegal. That instinct is ethically correct. Legally, it is far more complicated — and the complication reveals a structural failure in intellectual property law that artificial intelligence has converted from a theoretical vulnerability into an operational weapon.

### The Legal Reality

Copyright law protects expression, not function. When AI rewrites code in a different language, it produces entirely new expression while preserving all function — defeating the primary test for infringement. Patent law protects function directly, but software patents require two to four years to obtain, cost $15,000 to $50,000 to prosecute, and are routinely invalidated under the Supreme Court's 2014 Alice decision. By the time a patent issues, the harm is complete. Trade secret law provides the strongest existing claim — but only against actors who knew the information was improperly disclosed, only for as long as the secret remains meaningful, and only against defendants amenable to US jurisdiction.

The deeper problem is structural. AI has destroyed the three assumptions on which all IP doctrine rests: that copying requires effort, that translation between forms requires skill and time, and that similarity can be assessed by comparing surface expression. When a compiled binary is all that ships, there is no surface expression to compare. When AI performs the translation in hours, there is no effort to deter. The doctrinal framework does not bend under this pressure. It collapses.

### The Strategic Reality

This is not merely a legal problem. It is a national security problem that IP law has been asked to solve — and AI has made the inadequacy of that substitution impossible to ignore.

North Korea's Lazarus Group — a state operation controlled by Pyongyang's Reconnaissance General Bureau — stole $2.02 billion in cryptocurrency in 2025 alone, representing approximately 60% of all global cryptocurrency theft that year. A UN Security Council report found these operations generate roughly half of North Korea's foreign currency income and fund an estimated 40% of its weapons of mass destruction programs. The February 2025 Bybit exchange compromise — $1.5 billion in Ethereum, the largest single financial theft in recorded history — was executed through exploitation of a software supply chain vulnerability, laundered at a speed blockchain analysts described as previously unimaginable. This is what state-sponsored economic warfare looks like before AI amplification.

AI multiplies that capability by orders of magnitude while collapsing its cost. A nation with 25 million people and a $20 billion GDP — unable to field a competitive military — can now operate an AI-enabled economic warfare capability that inflicts damage on a $25 trillion economy measurable in hundreds of billions annually. The military-economic correlation that stabilized the post-WWII international order for seventy years has been severed. The international order has not yet noticed.

In 1999, two senior colonels of the People's Liberation Army published "Unrestricted Warfare" — a strategic doctrine arguing that a technologically inferior nation could defeat a militarily superior opponent by conducting warfare across every non-kinetic domain simultaneously while remaining permanently below the threshold that triggers recognized military response. That doctrine has found its weapon. AI-enabled economic warfare is unrestricted warfare with precision instruments — invisible, deniable, faster than any legal or diplomatic response.

### What This Paper Argues

This paper traces the logical chain from a specific IP law gap to its terminus in geopolitical security. It argues three things simultaneously:

- Intellectual property law must be fundamentally reformed — not amended at the margins — to address AI-enabled functional reimplementation. The specific proposals are a Fast-Track Functional Architecture Registration system, expedited injunctive relief procedures, mandatory AI provenance tracking, and a functional copyright doctrine protecting software architecture against language-agnostic reproduction.
- For state-sponsored actors, IP law was never the right framework. The appropriate response toolkit operates through export controls under IEEPA, CFIUS review, the Economic Espionage Act, and explicit threshold recognition of AI-enabled economic warfare as a category of aggression under international law.
- The international community faces a pre-framework moment analogous to 1945 — when the dominant technology of conflict outran the institutional capacity to govern it — but without the catastrophic visibility that forced action after Hiroshima. AI economic warfare leaves no mushroom cloud.

> **Ultimate Finding:** AI has made economic warfare as potentially existential as kinetic warfare — while making it simultaneously cheaper, faster, more deniable, and less governable than any form of conflict in human history. Intellectual property law is not equipped to address this. The international legal order is not equipped to recognize it. The governance frameworks that protect innovation, sustain competitive markets, and underwrite geopolitical stability were all built for a world in which this capability did not exist. That world is gone.

---

## Abstract

Current intellectual property law operates on assumptions rooted in human cognitive limitations: that copying requires significant effort, that translation between forms requires skill and time, and that substantial similarity can be assessed by comparing surface-level expression. Artificial intelligence shatters all three assumptions simultaneously. This paper examines a specific and timely scenario — the unauthorized disclosure of proprietary source code followed by rapid AI-assisted reimplementation in functionally identical but syntactically distinct languages — to argue that copyright and patent law are structurally unprepared for the AI era. We analyze the doctrinal gaps in existing law, explore the ethical dimension that law has historically ignored, and propose a framework for reform centered on the concept of "functional equivalence" as a legally cognizable harm. The central thesis is this: when AI can convert any expression into any other expression while preserving all functional meaning, the classical distinction between idea and expression collapses, and intellectual property law must be fundamentally reconceived — not merely amended.

---

## 1. Introduction: The Scenario That Breaks Existing Law

On April 1, 2026, a significant quantity of proprietary source code — allegedly originating from Anthropic's Claude Code platform — became publicly accessible through an inadvertent exposure of TypeScript source map files. These map files, intended as debugging aids, contained human-readable representations of minified or compiled JavaScript/TypeScript code. Within hours, the code was forked on public repositories. Within days, AI systems had rewritten it — first in Python, then in Rust — producing functionally equivalent implementations in languages wholly distinct from the original.

This scenario presents intellectual property law with a challenge it was not designed to meet. A sophisticated human programmer could, in theory, accomplish the same outcome — but only over weeks or months, involving deep reading, comprehension, architectural analysis, and deliberate reimplementation. That temporal friction historically served as a practical deterrent, and courts have long assumed it as a background condition when crafting doctrine. AI eliminates that friction entirely. What once required months now requires hours. What once required a team now requires a prompt.

> **The Core Problem:** The law has never had to confront a technology that can instantaneously translate any expression into a functionally identical but formally distinct expression. Copyright protects expression, not function. Patent law protects function, but only for hardware and process inventions — not software logic in most jurisdictions. AI-assisted reimplementation falls into the gap between both.

The immediate instinct is to say that this reimplementation is clearly illegal. After all, the originating code was proprietary, accessed without authorization, and the resulting work reproduces its entire functional architecture. This instinct is ethically sound. Legally, however, the situation is far murkier, and the murkiness reveals deep structural problems in our IP framework that AI has merely made impossible to ignore.

---

## 2. The Current Legal Landscape: Copyright Law

### 2.1 The Idea-Expression Dichotomy

Copyright law in the United States, and in most jurisdictions following the Berne Convention, protects the expression of ideas but not ideas themselves. This principle — codified in 17 U.S.C. § 102(b) — is the bedrock of copyright doctrine. A software developer cannot copyright the algorithm for sorting a list; she can only copyright the specific code she wrote to implement it.

This distinction has always been philosophically unstable at the margins. The Second Circuit's seminal *Computer Associates v. Altai* (1992) decision introduced the "abstraction-filtration-comparison" test precisely because software blurs the line between idea and expression at every level of analysis.

> **Altai's Abstraction-Filtration-Comparison Test:** Under Altai, courts analyze software at multiple levels of abstraction, filter out unprotectable elements (ideas, elements dictated by efficiency, public domain material), and compare whatever expression remains. AI-generated reimplementation defeats this test by ensuring that nothing in the filtration stage's "expression" layer survives to the comparison stage — because every line has been rewritten.

When AI rewrites code in a different language, what is left to compare? The variable names are different. The syntax is different. The idiomatic patterns are different. The file structure may be entirely reorganized. The function is identical. The code is not.

### 2.2 The Clean Room Defense and Its AI-Era Collapse

Courts have long recognized a "clean room" defense in software copyright cases. If a defendant can demonstrate that its implementation was developed by engineers who had no access to the plaintiff's code — working only from a functional specification — copyright infringement is typically not established.

> **⚠ The AI Collapse of Clean Room Logic:** With AI, a bad actor can take disclosed source code, prompt an LLM to "rewrite this in Python preserving all functionality," and receive — in minutes — a clean room equivalent. The AI has performed the abstraction and re-expression simultaneously, at machine speed, with no human engineer ever reading the original code carefully enough to retain it. The clean room defense was designed to protect good-faith independent development. AI weaponizes its logic.

### 2.3 Derivative Works, Substantial Similarity, and Language Translation

Copyright protection extends to derivative works. Translation is explicitly listed as a form of derivative work under 17 U.S.C. § 101. But when code is translated from TypeScript to Python to Rust, courts face uncharted territory. The "substantial similarity" test — asking whether an "ordinary observer" would find the works substantially similar — was developed with human-perceivable similarity in mind. An ordinary observer looking at TypeScript and Rust implementations of the same system would not find them similar at all.

### 2.4 Trade Secret Law: The Stronger Claim

Here is where the analysis shifts significantly from popular understanding. The scenario described in this paper is almost certainly not "technically legal" as commonly assumed — but the applicable law is trade secret law, not copyright law. The Defend Trade Secrets Act (DTSA, 2016) provides protection for information that derives economic value from not being generally known, provided reasonable measures are taken to keep it secret.

> **The Trade Secret Bridge:** Even where copyright fails to reach AI-assisted reimplementation, trade secret law may provide a remedy — provided the originating information was a genuine trade secret and the disclosure was unauthorized. Courts have held that third parties who knowingly use information they have reason to know was improperly disclosed can be liable even without being the original discloser.

---

## 3. The Current Legal Landscape: Patent Law

### 3.1 What Patent Law Protects — And What It Does Not

Patent law directly protects functional innovation, granting exclusive rights for twenty years from filing. For software, patent law is theoretically the natural home of functional protection — a patent on a specific method would be infringed by a Python reimplementation just as much as by a TypeScript one. In practice, two major obstacles exist: patentable subject matter restrictions under Alice, and the speed at which AI can generate variations.

### 3.2 The Software Patent Crisis: Alice and Its Aftermath

The Supreme Court's 2014 decision in *Alice Corp. v. CLS Bank International* dramatically narrowed patentable subject matter for software. Under the Alice two-step test, a software patent claim is invalid if directed to an abstract idea without adding "significantly more." The practical effect has been widespread invalidation — estimates range from 30% to over 60% of software patent applications in certain technology classes.

> **⚠ The Alice Trap:** The legal doctrine most hostile to software patents creates an unintended vulnerability in the AI era. Innovations too abstract for patent protection, too functional for copyright protection, and too publicly disclosed for trade secret protection exist in a legal void. AI-assisted reimplementation exploits precisely this void.

### 3.3 The Doctrine of Equivalents: Patent Law's Closest Tool

The doctrine of equivalents extends patent protection to implementations that perform substantially the same function, in substantially the same way, to achieve substantially the same result. This is conceptually the most promising existing tool for addressing AI-assisted reimplementation. The practical obstacles are significant: it applies only to patented inventions, the "way" element is interpreted to require implementation-level similarity, and the doctrine was designed for human-scale trivial modifications, not AI-scale comprehensive reimplementations.

### 3.4 The Speed Problem: Prior Art Generation by AI

A sophisticated adversary with AI tools could generate and timestamp thousands of variations of a technology before a patent application is filed, potentially defeating novelty or non-obviousness requirements. Patent offices have not developed any framework for addressing AI-generated prior art, its authentication, or its weight in examination proceedings.

---

## 4. The Patent Cost Barrier: A System That Protects Incumbency, Not Innovation

### 4.1 The Structural Economics of Patent Prosecution

A complete utility patent application costs between $15,000 and $50,000 for a moderately complex software invention. Maintenance fees add another $10,000 to $15,000 over the patent's life. Patent litigation through trial costs an average of $3 million to $5 million per side. For a small software company or independent inventor, these figures are not merely burdensome — they are prohibitive.

> **⚠ The Means Test the Statute Does Not Impose:** Congress intended the patent system to serve all inventors equally. The economic reality is a system where effective patent protection is available as a practical matter only to entities with patent departments, litigation budgets, and organizational staying power. Small innovators are not merely disadvantaged; they are effectively excluded from the system's protective function.

### 4.2 The Timeline Paradox: Protection That Arrives After the Harm

The average time from patent filing to issuance is 23 to 26 months for applications without significant examination challenges. AI can replicate the functional architecture of a software product in 48 hours. The mismatch is not marginal. It is a difference of five orders of magnitude in timescale. A legal protection mechanism that operates at 730-day latency against a threat that operates at 48-hour latency is not providing protection — it is providing the illusion of protection.

### 4.3 The Alice Trap Amplified

An independent software inventor who invests $25,000 and three years in patent prosecution has no guarantee of receiving any protection at all. For a large corporation with a portfolio strategy, individual application failures are absorbed across hundreds of filings. For the independent inventor or small company, a single failed prosecution can represent an existential financial loss.

> **The Expected Value Problem:** When the cost of prosecution is $25,000, the probability of successful issuance is uncertain due to Alice, the time to protection is 2-4 years, and the cost of enforcement is $3-5 million, the expected value of a software patent application for a small innovator is often negative.

### 4.4 AI Democratizes the Threat While Patents Remain Oligopolistic

The cost of AI-enabled reimplementation is measured in dollars. The cost of patent defense is measured in tens of thousands. This asymmetry systematically transfers value from innovative small actors to replicating large actors — the precise inverse of the patent system's constitutional purpose under Article I, Section 8, Clause 8.

### 4.5 The Fast-Track Registration Proposal

The reform needed is the creation of a **Fast-Track Functional Architecture Registration** — a new administrative mechanism positioned between copyright registration and full patent prosecution in both cost and protection scope:

- Cost in the range of $65 to $500, not $15,000-$50,000
- Examination timeline of weeks, not years
- Protection scope limited to functional architecture — the logical design, algorithmic approach, and component relationships
- Term of 7 to 10 years, immediately enforceable upon registration
- Standing to seek emergency injunctive relief against AI-assisted functional reimplementation
- Public registry creating constructive notice

> **The Open Source Boundary:** Fast-track registration should not override express grants in open source licenses. Code released under MIT, Apache, GPL, or similar licenses carries an express grant of rights. The system proposed here targets proprietary innovations whose creators have chosen not to grant general use rights. Open source developers who rewrite a permissively licensed codebase in a different language are doing exactly what the license authorizes.

---

## 5. The Ethical Dimension: Where Law Falls Short

### 5.1 The Law-Ethics Gap in IP

AI eliminates the cost side of the deterrence equation. What was once expensive is now nearly free. The legal gray zone that existed as a theoretical vulnerability is now an operational capability. The ethical problem — taking the fruits of another's innovation without authorization — remains exactly as severe. The legal exposure has paradoxically decreased because courts look for expressive similarity that AI reimplementation deliberately eliminates.

### 5.2 Why "It's Legal" Is Not a Defense

There is a cultural pathology in the technology industry that treats legality as moral absolution. Many of the most significant corporate ethical failures of the modern era involved conduct that was, at the time, arguably legal. The AI reimplementation scenario sits precisely at this junction. The technical legality exists because the law has not caught up with the technology. That lag is not ethical permission.

### 5.3 The Functional Equivalence Concept as an Ethical Standard

The ethical harm is not that the Rust code looks like the TypeScript code. The ethical harm is that the Rust code does everything the TypeScript code does, for the benefit of the party that reproduced it, depriving the original creator of the economic benefit of her innovation. Law must eventually incorporate functional equivalence as a harm-causing act independent of formal expression.

---

## 6. The AI-Specific Legal Challenges

### 6.1 Who Is the Infringer? Attribution in AI-Assisted Reproduction

The chain of actors in this scenario — whoever exposed the source maps, whoever forked the repository, whoever prompted the AI, the AI model itself, whoever compiled and shipped the binary — has no coherent liability framework. AI models have no legal personhood and cannot be liable. Secondary liability theories — contributory infringement, vicarious liability — were developed for human intermediaries. Applying them to AI providers who have no specific knowledge of particular infringing uses will require significant doctrinal development.

### 6.2 The Velocity Problem: Law vs. Machine Speed

Law operates at 730-day latency. AI operates at 48-hour latency. By the time any court could issue a preliminary injunction, the harm may be complete, the code distributed globally, and the practical ability to enforce any judgment severely diminished. This velocity asymmetry is not a practical inconvenience. It represents a structural failure of law's ability to govern AI-enabled conduct.

### 6.3 The Jurisdictional Fracture

The source map exposure may have occurred in the US. The forking may have occurred across multiple countries. The AI rewriting may have used models hosted abroad. The compiled binary may be distributed through global repositories. No international treaty framework addresses AI-assisted IP misappropriation comprehensively.

---

## 7. Proposed Framework: Functional Equivalence as a Legal Standard

### 7.1 The Core Proposal: Functional Copyright

This paper proposes a doctrine of "functional copyright" — protection that attaches not to a specific expressive form but to the functional architecture of a software system, when that architecture represents genuine creative and innovative effort. Functional copyright would protect logical design against AI-assisted reproduction regardless of target language.

Functional copyright protection would require affirmative registration, extend for 10 to 15 years, define scope in terms of functional specifications rather than code, and treat AI-generated reimplementation that reproduces a registered functional architecture as infringement regardless of target language.

### 7.2 The Functional Equivalence Test

**Behavioral Equivalence Testing** — two systems are functionally equivalent if they produce the same outputs for the same inputs across a comprehensive test suite. Already used in software engineering for formal verification.

**Architectural Fingerprinting** — analysis of high-level architecture in a language-agnostic representation capturing principal components, data flow relationships, and algorithmic category.

**AI-Assisted Equivalence Analysis** — AI itself used to assess functional equivalence, operating at machine speed and potentially enabling faster preliminary relief.

> **The Irony of Using AI to Police AI:** Deploying AI systems to detect AI-assisted IP misappropriation suggests that AI is not merely a threat to be regulated but a tool that must be incorporated into the regulatory apparatus itself. Law in the AI age cannot afford to be AI-illiterate.

### 7.3 Expedited Preliminary Relief: Injunctions at Machine Speed

- Emergency TRO procedures with hearing timelines measured in days rather than weeks
- Specialized AI and IP courts or court divisions with technical backgrounds
- Pre-registered technical specifications held in escrow for immediate evidentiary foundation
- International mutual recognition agreements for AI-related IP emergency orders

### 7.4 Mandatory Provenance Tracking for AI-Generated Code

Mandatory provenance tracking would enable tracing of AI-assisted reimplementation to source inputs, create accountability for AI service providers, and shift incentive structures. Any regime must be carefully designed with access controls, purpose limitations, and deletion schedules balancing IP enforcement against privacy interests.

---

## 8. Can the Law Actually Change? Political Economy of IP Reform

### 8.1 Historical Precedents

The history of IP law includes episodes of fundamental reform in response to technological disruption — photography prompting extension of copyright, radio prompting mechanical licensing, digital networks prompting the DMCA. The AI challenge is larger than any of these precedents, but the pattern is established.

### 8.2 The Stakeholder Landscape

Large incumbents want robust IP protection for existing codebases. AI companies have conflicting interests — protecting their own model weights while resisting constraints on code generation. Open source communities oppose software patents. Academic institutions favor broad access. Nations with large software export industries have different positions based on comparative advantage. Reform requires sufficient alignment among these competing interests to achieve legislative majority — a high bar.

### 8.3 The International Coordination Problem

AI-assisted reimplementation is inherently cross-border. National IP law that robustly protects against functional equivalence is defeated if reimplementation can be performed in a non-participating jurisdiction. This creates race-to-the-bottom dynamics. Realistic near-term approaches are bilateral or plurilateral agreements among aligned jurisdictions — potentially built on existing trade agreement foundations.

---

## 9. Technical Dimensions: What the Law Must Understand

### 9.1 Source Maps: A Technical Vulnerability and Legal Artifact

Source maps are files generated by build tooling that map positions in compiled or minified output code back to positions in original source code. When source maps are inadvertently exposed to the public internet, the original source code becomes accessible to anyone who knows to look for it.

> **Legal Significance of Source Map Exposure:** Source map files are almost certainly trade secret information when associated with proprietary software. Their inadvertent exposure likely does not constitute publication or dedication to the public domain. A party who discovers exposed source maps and deliberately uses them to reconstruct proprietary code has almost certainly committed trade secret misappropriation.

### 9.2 The Language Translation Capability: What AI Actually Does

Modern LLMs trained on large code corpora understand not just syntax but idiomatic patterns, design patterns, and common algorithms across multiple languages. When asked to translate a TypeScript codebase to Python, a capable model understands the functional intent of each component and produces Python code using Python idioms. The result may look almost nothing like the original at the surface level — but the functional behavior is reproduced with high fidelity.

### 9.3 The Rust Rewrite: An Additional Layer

Each additional language in the transformation chain puts more distance between the original source and the final artifact. Rust's ownership model, lifetime system, and zero-cost abstractions produce code that looks radically different from both TypeScript and Python implementations of the same functionality. Progressive distancing through chained AI transformation may become a deliberate evasion strategy — a form of legal arbitrage that existing law cannot prevent.

---

## 10. The Compiled Binary Problem: The Perfect Evidentiary Void

The analysis in prior sections contains an assumption so fundamental it went unstated — and that assumption is wrong. The functional equivalence testing, architectural fingerprinting, behavioral comparison, and AI-assisted similarity analysis proposed in Section 7 all rest on one premise: that someone can examine the allegedly infringing implementation. In the real world of compiled software, that premise fails catastrophically.

When Rust source code is compiled to a native binary, the resulting artifact is machine code. Function names become memory addresses. Variable names disappear entirely. The elegant architectural decisions, the algorithmic choices, the component relationships — all rendered into an opaque binary blob that reveals nothing about its origin.

> **⚠ The Enforcement Void:** Every legal theory discussed in this paper requires some ability to examine and compare implementations. A compiled binary without source code access is, for practical enforcement purposes, a black box. The bad actor who ships only a compiled Rust binary derived from leaked proprietary TypeScript has, in a very real sense, laundered the evidence of infringement out of existence.

### 10.1 What Compilation Does — and Does Not — Hide

**Effectively concealed:** All source-level identifiers, all architectural organization, all language-specific idioms, development history, and any AI prompts used during reimplementation.

**May survive with significant effort:** Broad algorithmic structure identifiable by binary signatures, numerical constants and magic values, partial control flow graphs reconstructed by decompilers, and string literals not compiled away.

### 10.2 The Money Laundering Analogy: Structured Transformation as Evasion

The chained AI transformation — TypeScript → Python → Rust → compiled binary — is structurally identical to money laundering through layered transactions. Each step adds distance from the original. A sophisticated bad actor's playbook: obtain source code through any means; feed it to an AI in a jurisdiction with weak IP enforcement; generate Python; generate Rust from the Python; compile to binary; strip debug symbols; ship. The only artifact that exists in the world is machine code with no visible lineage.

---

## 11. The Governance Gap: When Law Cannot Move at Machine Speed

### 11.1 The False Premise

Law is one governance mechanism among several — and the slowest. The question is not how to make law fast enough to prevent harm. It cannot be made fast enough. The question is what fills the governance gap while law develops.

> **Law as Ratification, Not Prevention:** Technology creates the practice, leading actors establish norms, and law eventually codifies and universalizes those norms. The DMCA's notice-and-takedown system ratified what platforms were already doing voluntarily. The urgency is in establishing norms now, before bad practices become so entrenched that even ratification becomes politically impossible.

### 11.2 The Non-Law Governance Toolkit

**Platform Governance:** GitHub, npm, PyPI, AWS, Cloudflare are chokepoints through which virtually all software distribution flows. These platforms already enforce terms of service at machine speed. Platform governance could extend to AI-enabled IP misappropriation through expanded terms of service and automated detection systems.

**AI Provider Governance:** Anthropic, OpenAI, Google, and others can implement governance unilaterally through acceptable use policies — prohibiting the use of their systems to process disclosed proprietary code for reimplementation purposes. This is a policy decision, not a technical limitation.

**Technical Standards:** Standards bodies — IEEE, IETF, NIST — move faster than legislatures. A technical standard for AI-generated code provenance watermarking could be drafted and adopted within 18 to 24 months.

### 11.3 The Barn Is Already Open: The Horses That Do Not Come Back

When a small innovative company is driven out of business by AI-assisted competitive misappropriation — its revenue collapsing faster than its legal remedies can materialize, its engineers dispersing, its investors writing off their positions — the harm is not merely to that company. The harm is to the innovation ecosystem from which the next generation of technology would have grown.

> **⚠ The Irreversibility Problem:** Legal systems can award damages. They cannot reconstitute dissolved companies, reassemble dispersed engineering teams, restore lost market positions, or compensate for innovations that were never built because the company that would have built them no longer exists.

### 11.4 The China Parallel: State-Sponsored Economic Warfare at AI Speed

The Commission on the Theft of American Intellectual Property estimated in its 2017 report that Chinese theft of American IP costs between $225 billion and $600 billion annually. *(Note: This figure has been subject to methodological critique regarding underlying data sources. It is presented as the most widely cited official estimate.)* China's long-game IP theft followed a recognizable pattern: identify strategic sectors; acquire technology through espionage, forced joint ventures, or cyber intrusion; establish domestic manufacturers with the acquired technology, subsidized by state capital; systematically undercut original innovators until they lost market share and exited. American solar panel manufacturers, advanced materials companies, and semiconductor firms all experienced versions of this playbook.

> **The Acceleration Factor:** China's multi-decade IP theft campaign required years at each stage — creating windows for detection, diplomatic response, and policy adjustment. AI eliminates those windows. The acquisition stage collapses from years to hours. The reimplementation stage collapses from months to days. The entire campaign that took China a decade can now be executed in a quarter.

### 11.5 Two Threat Models, Two Response Frameworks

**Threat Model A: Commercial Misappropriation** — private actors motivated by competitive advantage, subject to legal jurisdiction, deterred by liability risk. Response: reformed IP law, platform governance, AI provider restrictions, provenance standards.

**Threat Model B: State-Sponsored Economic Warfare** — foreign state or state-backed entities executing geopolitical strategy, immune from US court orders, not deterred by commercial liability. Response: export controls under EAR/IEEPA, CFIUS review, USTR Section 301, counterintelligence, diplomatic pressure.

Conflating these two threat models is a policy error that leads to under-response on both fronts.

### 11.6 The Legislative Vehicles: Where Hooks Already Exist

- **IEEPA / EAR:** Executive order authority exists today to extend export control frameworks to AI-assisted functional reimplementation in the state-sponsored threat context
- **GAIN AI Act:** Pending legislation creating momentum toward a comprehensive AI national security framework
- **Remote Access Security Act:** Passed by the House in January 2026, expanding export controls to cloud-based AI service provision — directly relevant to AI-assisted reimplementation
- **CFIUS:** Expanded by FIRRMA 2018 to cover foreign investment in critical technology; could be extended to foreign-funded ventures commercially exploiting AI-assisted reimplementation
- **Economic Espionage Act:** Already criminalizes trade secret theft for the benefit of a foreign government, carrying penalties up to 15 years imprisonment

### 11.7 The Honest Assessment

Reformed IP law can deter rational commercial actors. It cannot reach state-sponsored actors. Platform and provider governance can raise friction costs for actors dependent on mainstream infrastructure. Export controls can address state-sponsored theft as a national security matter. Provenance watermarking can create forensic trails. No governance framework can prevent all harms during the transition period.

The Clean Air Act of 1970 did not immediately stop industrial air pollution. It established a framework within which enforcement became progressively more effective over decades. That is the realistic aspiration for AI-era IP governance: not justice for the first victims, but a framework that prevents the last ones.

---

## 12. The Geopolitical Equalizer: AI Economic Warfare, Small State Power Projection, and the Collapse of the Military-Economic Correlation

### 12.1 The Question Nobody in Policy Will Say Out Loud

At what point does systematic, AI-accelerated economic destruction constitute an act of war — and what are nations entitled to do in response?

The absence of a defined legal and strategic framework for responding to AI-accelerated economic warfare is not a neutral condition. It is a one-sided advantage for aggressors. An actor who knows their economic warfare will never be recognized as armed aggression faces no deterrence constraint. They can escalate indefinitely.

### 12.2 The Power Asymmetry Reversal

Military power has historically required population, industrial base, sustained economic output, geographic depth, alliances, and massive capital investment. AI severs every single one of those correlations simultaneously.

North Korea's Lazarus Group has demonstrated exactly what AI-amplified economic warfare looks like at the pre-AI frontier. Between 2021 and 2025, the group stole over $6.75 billion in cryptocurrency — with $2.02 billion stolen in 2025 alone, a 51% increase year-over-year, representing approximately 60% of all global cryptocurrency theft. The February 2025 Bybit compromise alone yielded $1.5 billion in Ethereum. Within 48 hours, $160 million had been laundered — a speed of financial obfuscation that would have been unimaginable a year earlier.

> **The Strategic Arithmetic:** North Korea's GDP is estimated at approximately $18 billion annually. The Lazarus Group's 2025 cryptocurrency theft alone — $2.02 billion — represents roughly 11% of the entire national economy, generated through a handful of technical operators, no conventional military engagement, and no supply chain exposure. A UN Security Council sanctions committee report found that North Korea's cyberattacks generate approximately 50% of the country's foreign currency income and fund an estimated 40% of its weapons of mass destruction programs.

### 12.3 The AI Leap: From Cyber Theft to Comprehensive Economic Warfare

AI enables at minimum five distinct economic warfare weapon categories, each deployable below the threshold of recognized armed conflict: automated IP extraction and reimplementation at scale; AI-enabled financial market warfare; supply chain infiltration through AI-generated compromised code; AI-accelerated social and economic destabilization; and autonomous economic attrition combining all four simultaneously.

### 12.4 Unrestricted Warfare: The Doctrine That Predicted This

In February 1999, two senior PLA colonels — Qiao Liang and Wang Xiangsui — published "Unrestricted Warfare," arguing that a technologically inferior nation could defeat a militarily superior opponent by conducting warfare across every non-kinetic domain simultaneously while remaining permanently below the threshold that triggers recognized response. The book has been required reading at West Point.

AI transforms unrestricted warfare from a theoretical framework requiring patient human execution across decades into an operational capability executable at machine speed. The doctrine has found its weapon.

### 12.5 The Colt Revolver Moment: AI as the Geopolitical Equalizer

The Colt revolver was marketed in the 1830s as "the equalizer." AI is the geopolitical equalizer for the economic warfare domain — a nation with 25 million people and a $20 billion GDP can now operate an economic warfare capability that causes damage to a $25 trillion economy measurable in hundreds of billions annually.

Every previous technology that significantly equalized military power — gunpowder, nuclear weapons — produced a period of strategic instability before the international order adapted. Nuclear weapons produced four decades of Cold War and multiple near-misses before a stable deterrence architecture emerged. AI-enabled economic warfare is potentially more destabilizing because it lacks the visibility, attribution clarity, and defined threshold that made nuclear deterrence ultimately workable.

### 12.6 The Existential Equivalence Question

How is AI-accelerated economic warfare existentially different from war over oil or water rights?

Nations may use military force to defend against existential threats to their capacity to sustain themselves. Wars have been fought over oil supply, water access, and strategic territory. The legal and moral justification rests on one foundation: the threat is existential to the nation's capacity to sustain itself and its people.

Systematic destruction of a nation's innovative capacity destroys its ability to generate wealth in sectors critical to future economic and military power. The terminal outcome of unchecked AI economic warfare, at sufficient scale and duration, is indistinguishable from the terminal outcome of a sustained conventional military campaign against a nation's economic foundations.

> **⚠ The Uncomfortable Logical Conclusion:** If a nation that loses control of its oil supply faces economic collapse — recognized as justifying military response — and a nation that loses its strategic technology sector through systematic AI-enabled warfare faces the same terminal outcomes, then the legal and strategic framework that justifies military response to oil supply threats should, by logical extension, apply to systematic AI-enabled economic destruction. It does not, because that framework was written before the capability existed.

### 12.7 The International Law Framework and Its AI-Era Inadequacy

The Tallinn Manual — the authoritative academic treatment of international law applicable to cyber operations, produced at the invitation of the NATO Cooperative Cyber Defence Centre of Excellence — runs to two volumes. Its threshold analysis for what constitutes a "use of force" under Article 2(4) of the UN Charter focuses on physical damage and death, not economic harm. The 1945 UN Charter drafting conference explicitly rejected inclusion of economic coercion as a "use of force." That decision now creates a structural gap: systematic AI-enabled economic destruction that causes no physical damage but hollows out a nation's strategic industrial capacity does not trigger the framework's recognition as armed aggression.

NATO has recognized that the cumulative impact of sustained malicious cyber activities could invoke Article 5. But the threshold remains deliberately undefined. Adversaries who understand this ambiguity exploit it systematically, operating permanently below whatever threshold might trigger collective response. The Tallinn Manual 3.0 process, inaugurated in 2021, has not yet addressed the specific combination of AI speed, scale, attribution difficulty, and economic destruction magnitude that constitutes the threat this paper analyzes.

### 12.8 The Three Questions International Law Must Resolve

**The Recognition Question:** At what cumulative economic damage threshold does AI-enabled economic warfare constitute an act of aggression? The answer cannot be "never." Some European nations — notably Norway and France, as assessed by international law scholars — have indicated that large-scale cyber operations against their national economy would qualify as uses of force. The United States has not taken a clear position.

**The Attribution Question:** Who is responsible when AI operations are routed through multiple jurisdictions, executed by nominally private entities, and leave no forensic trail? New attribution standards are necessary — potentially including presumptive attribution based on capability, pattern, and beneficiary analysis.

**The Response Question:** If AI economic warfare is recognized as aggression and attributed to a state actor, what responses are proportionate and legal? The current response toolkit is structurally inadequate against maximally-sanctioned state actors with domestic AI capability. The legal and policy framework for offensive cyber operations as a proportionate response needs to be developed and publicly articulated as a deterrence signal.

### 12.9 The Deepest Strategic Reality

AI has fundamentally altered the relationship between technological capability and geopolitical power in a way that the international order has not yet recognized, incorporated, or begun to govern. The military-economic correlation that stabilized the post-WWII order for seventy years is broken. AI allows states with minimal resources to project devastating economic force against the wealthiest nations. It compresses timescales of economic destruction from decades to weeks. It defeats attribution frameworks. And it exploits the gap between AI-speed harm and legal-speed response — a gap that may be structural rather than merely transitional.

*And the window for establishing frameworks — legal, technical, diplomatic, and strategic — that might govern this new reality before it governs us is closing. Not slowly. At machine speed.*

---

## 13. Conclusions and Recommendations

### 13.1 Summary of Findings: A Stratified Assessment

#### Near Term (1-3 Years): What Can Actually Move

- Platform governance and AI provider acceptable use policies require no legislation. GitHub, major cloud providers, and AI API providers can implement provenance logging and reimplementation restrictions unilaterally today.
- Trade secret law, robustly applied under DTSA, provides the strongest existing legal claim against commercial misappropriation. Courts need cases, technical experts, and willingness to extend doctrine to new facts — not new legislation.
- Executive order authority under IEEPA exists today to extend export control frameworks to AI-assisted functional reimplementation in the state-sponsored context.
- Copyright registration of source code for $65 creates immediate standing for statutory damages. Low-hanging fruit available to every software company today.

#### Medium Term (3-7 Years): Legislative and Administrative Reform

- Fast-track Functional Architecture Registration requires Congressional action but has a viable political pathway through the bipartisan consensus on China technology threat.
- Expedited preliminary relief procedures for AI-enabled IP cases can be developed through court rulemaking and legislative amendment.
- Provenance watermarking standards through NIST and IEEE can be developed within this timeframe.
- Regulatory guidance under the Remote Access Security Act and existing EAR authority can extend the export control framework without new primary legislation.

#### Long Term (7-15 Years): Structural Reform

- Functional copyright doctrine requires Supreme Court doctrinal evolution or comprehensive Congressional IP reform — a generational undertaking.
- International coordination on provenance standards requires multilateral treaty negotiation measured in decades.
- Recognition of AI-enabled economic warfare as a category of aggression requires new customary international law norms — a process that begins with consistent state practice and explicit threshold articulation.

#### What May Never Be Fully Addressed

- State-sponsored AI-enabled economic warfare by maximally-sanctioned actors using domestically-developed open source AI against compiled binary targets with no forensic trail. Against this threat, IP law is irrelevant, export controls have limited reach, and the response toolkit requires capabilities that exist outside the legal framework this paper has analyzed.
- The fundamental power asymmetry that AI creates between small state offensive capability and large state defensive capacity. This asymmetry is a feature of the technology, not a bug correctable by governance.

### 13.2 Recommendations for Different Stakeholders

**For Legislators:**
- Commission a comprehensive study of AI-enabled IP misappropriation with technical expert input
- Introduce expedited preliminary relief procedures for AI-enabled IP cases
- Explore a functional copyright regime through interagency coordination among the Copyright Office, USPTO, and NIST
- Engage in bilateral and multilateral diplomatic efforts to establish international AI provenance standards

**For Courts:**
- Develop technical competency in AI systems through court-appointed experts and dedicated technical staff
- Apply trade secret law robustly in AI-enabled reimplementation cases
- Extend the doctrine of equivalents to explicitly address AI-generated functional equivalents
- Develop preliminary injunction standards appropriate for AI-velocity harms

**For Industry:**
- Adopt voluntary provenance tracking standards as both ethical practice and litigation risk management
- Establish clear internal policies against using AI systems to process disclosed proprietary code from third parties
- Invest in technical security practices including audit of source map exposure in production deployments

**For AI Developers:**
- Implement input filtering to detect requests to process disclosed proprietary code for reimplementation
- Develop and publish provenance tracking capabilities available for legal proceedings
- Engage with IP policy development proactively

### 13.3 The Ultimate Conclusion

This paper began as an analysis of a specific legal gap: the inability of intellectual property law to reach AI-assisted functional reimplementation of proprietary software. It ends at a question about the architecture of international order.

Intellectual property law was built on three assumptions that AI has simultaneously destroyed — that copying requires significant human effort, that translation between forms requires skill and time, and that similarity can be assessed by comparing surface-level expression. When AI eliminates the effort, compresses the time to hours, and strips all surface expression through compilation to binary, all three assumptions fail at once. The doctrinal framework does not merely bend under this pressure. It collapses.

The collapse of IP doctrine is not merely a legal problem. It is a governance gap — and governance gaps are not neutral conditions. They are strategic opportunities for actors whose interests are served by the absence of enforceable rules.

The governance gap is not merely an economic problem. When the mechanism of harm is AI-accelerated economic destruction — systematic, invisible, deniable, operating permanently below the threshold of recognized armed conflict — it becomes a security problem of the first order.

We are in a pre-framework moment. The technology of conflict has again outrun the institutional capacity to govern it — as it did in 1945 when nuclear weapons forced the construction of an entirely new international order. The difference is that in 1945, the catastrophic visibility of nuclear weapons forced the international community to act. AI economic warfare leaves no mushroom cloud. Its damage accumulates quietly, company by company, sector by sector, below the threshold of recognition and response — until the damage is done and the barn door question is moot.

---

> **The ultimate conclusion this paper reaches:**
>
> *AI has made economic warfare as potentially existential as kinetic warfare — while making it simultaneously cheaper, faster, more deniable, and less governable than any form of conflict in human history. Intellectual property law is not equipped to address this. The international legal order is not equipped to recognize it. The governance frameworks that protect innovation, sustain competitive markets, and underwrite geopolitical stability were all built for a world in which this capability did not exist. That world is gone. The frameworks remain. The gap between them and the reality they were built to govern is where the most consequential conflicts of the next decade will be fought — quietly, invisibly, and at machine speed.*

---

## References and Legal Citations

**Editorial Note on Statistical Citations:** The $225B-$600B annual figure for Chinese IP theft originates from the Commission on the Theft of American Intellectual Property (2017 update). This figure has been subject to methodological critique regarding underlying data sources and attribution methodology. It is presented as the most widely cited official estimate, not as a precisely validated figure. The cryptocurrency theft figures attributed to North Korea's Lazarus Group are drawn from Chainalysis, Elliptic, and TRM Labs blockchain analytics reports, cross-referenced against FBI attribution statements.

### Primary Legal Authorities

- 17 U.S.C. § 102(b) — Exclusion of ideas, procedures, and processes from copyright protection
- 17 U.S.C. § 101 — Definition of derivative works under U.S. Copyright Act
- 35 U.S.C. § 112 — Patent claim requirements and written description
- 18 U.S.C. § 1836 et seq. — Defend Trade Secrets Act (2016)
- *Computer Associates International, Inc. v. Altai, Inc.*, 982 F.2d 693 (2d Cir. 1992)
- *Alice Corp. v. CLS Bank International*, 573 U.S. 208 (2014)
- *Oracle America, Inc. v. Google LLC*, 593 U.S. 1 (2021)
- *Warner-Jenkinson Co. v. Hilton Davis Chemical Co.*, 520 U.S. 17 (1997)

### Secondary Sources and Policy Documents

- Commission on the Theft of American Intellectual Property, Update to the IP Commission Report (2017)
- Qiao Liang and Wang Xiangsui, *Unrestricted Warfare* (PLA Literature and Arts Publishing House, 1999)
- Tallinn Manual on the International Law Applicable to Cyber Warfare (NATO CCD COE, 2013); Tallinn Manual 2.0 (2017); Tallinn Manual 3.0 (in progress, commenced 2021)
- Chainalysis Crypto Crime Report 2025 — DPRK-linked actors stole $2.02 billion in cryptocurrency in 2025
- UN Security Council Sanctions Committee Report (March 2024) — North Korea cyberattacks fund approximately 40% of WMD programs
- Bybit Exchange Breach Attribution, FBI and TRM Labs (February 2025) — $1.5 billion Ethereum theft
- NATO Cyber Coalition 2024 — NATO acknowledgment that cumulative cyber operations could invoke Article 5
- Bureau of Industry and Security, Export Administration Regulations — Advanced Computing IC and AI Model Weight Controls (January 2025)
- Remote Access Security Act, H.R. (2026)
- GAIN AI Act (Guaranteeing Access and Innovation for National Artificial Intelligence Act), proposed 2025-2026
- WIPO, Conversation on Intellectual Property and Artificial Intelligence, ongoing since 2019
- U.S. Copyright Office, Artificial Intelligence and Copyright, NOI Docket No. 2023-6 (2023)
- USPTO, Inventorship Guidance for AI-Assisted Inventions (February 2024)
- TRIPS Agreement, Annex 1C, Marrakesh Agreement (1994)

---

*© 2026 JMB Technical Services LLC. All rights reserved.*  
*JMB Technical Services LLC — Industrial Automation & Emerging Technology Consulting*
