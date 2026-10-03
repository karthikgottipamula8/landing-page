/**
 * Central Content Configuration for "Salary Worth & Negotiation Playbook"
 * Matches direct-response conversion copywriting architecture.
 */

export const CONTENT = {
  // Global & Navbar
  nav: {
    categoryBadge: "SALARY NEGOTIATION PLAYBOOK",
    links: [
      { label: "The Problem", href: "#problem" },
      { label: "5-Number Method", href: "#method" },
      { label: "What's Inside", href: "#inside" },
      { label: "HR Scripts", href: "#scripts" },
      { label: "Readiness Score", href: "#readiness" },
      { label: "FAQ", href: "#faq" },
    ],
    ctaText: "GET THE PLAYBOOK — ₹299",
  },

  // SECTION 1 — ABOVE THE FOLD
  hero: {
    badge: "SALARY NEGOTIATION PLAYBOOK",
    mainHeadline: "KNOW YOUR NUMBER BEFORE HR GIVES YOU THEIRS.",
    subheadline:
      "Find your realistic market salary, calculate your negotiation range, build your evidence, and know exactly what to say when asking HR for more.",
    priceTag: "₹299 LAUNCH PRICE",
    purchaseType: "One-time purchase",
    ctaPrimary: "GET THE PLAYBOOK — ₹299",
    microcopy: "Instant digital access • Practical worksheets • Salary negotiation scripts",
    trustLine: "Built for your next appraisal, promotion, or job offer conversation.",
  },

  // SECTION 2 — PAIN / RELATABILITY
  pain: {
    headline: "BEFORE YOU ASK FOR A HIKE, ASK YOURSELF ONE QUESTION:",
    largeQuestion: "“What am I actually worth in the current market?”",
    scenario: {
      earningLabel: "You are currently earning:",
      earningAmount: "₹6 LPA",
      thoughtLabel: "And you're stuck in this silent mental loop:",
    },
    internalQuestions: [
      "“Am I underpaid?”",
      "“What are people with my experience actually earning?”",
      "“Should I ask for 15%? 25%? 40%?”",
      "“What if HR asks for my expected CTC?”",
      "“What if they say there is no budget?”",
      "“How do I prove that my work justifies more?”",
      "“What if I ask for too much and jeopardize my position?”",
    ],
    punchlineLead: "The problem isn't always confidence.",
    punchlineHighlight: "Sometimes, it's not knowing your number.",
  },

  // SECTION 3 — REFRAME THE PROBLEM
  reframe: {
    headline: "DON'T NEGOTIATE FROM A GUESS.",
    bodyTop: `Most people start a salary conversation by picking a random percentage.
“I'll ask for 20%.”
“Maybe 30%.”
“My friend got 40%.”`,
    bodyPivot: "But a better negotiation starts somewhere else:",
    formula: [
      { step: "MARKET", label: "Market Data", desc: "Real comparable salary benchmarks for your role & city" },
      { step: "VALUE", label: "Your Contribution", desc: "The measurable impact and responsibilities you carry" },
      { step: "EVIDENCE", label: "Documented Proof", desc: "Structured business proof that makes saying 'no' irrational" },
      { step: "NEGOTIATION", label: "Calm Execution", desc: "A planned opening ask, walkaway floor, and ready scripts" },
    ],
    takeaway: "The playbook turns an emotional salary conversation into a structured preparation process.",
  },

  // SECTION 4 — INTRODUCE THE PRODUCT
  productIntro: {
    headline: "MEET THE SALARY WORTH & NEGOTIATION PLAYBOOK",
    subheadline:
      "A practical step-by-step system to help you understand your market position, decide what number to negotiate, and prepare for the conversation.",
    walkAwayHeading: "WHAT YOU'LL WALK AWAY WITH",
    cards: [
      {
        number: "01",
        title: "Your Market Salary Range",
        description: "Understand how to research comparable compensation across Indian tech, product, and services firms.",
        highlight: "Benchmark reliably",
      },
      {
        number: "02",
        title: "Your Salary Gap",
        description: "Compare your current compensation with your researched market range to see the exact differential.",
        highlight: "Quantify the gap",
      },
      {
        number: "03",
        title: "Your Negotiation Range",
        description: "Set your minimum, target, and opening ask so you never accept or anchor blindly.",
        highlight: "3 distinct anchors",
      },
      {
        number: "04",
        title: "Your Evidence",
        description: "Turn your everyday work, ticket resolution, and extra initiatives into a defensible salary case.",
        highlight: "Evidence beats emotion",
      },
      {
        number: "05",
        title: "Your Words",
        description: "Use practical scripts for HR and manager objections without freezing or getting defensive.",
        highlight: "Word-for-word scripts",
      },
    ],
  },

  // SECTION 5 — THE CORE MECHANISM
  mechanism: {
    headline: "THE 5-NUMBER SALARY METHOD",
    subheadline:
      "Our proprietary compensation framework designed to eliminate guesswork before you ever sit across from HR.",
    steps: [
      {
        id: "current",
        number: "1",
        title: "CURRENT",
        subtitle: "Baseline Compensation",
        desc: "What you earn today (fixed + variable breakdown). Your starting datum.",
      },
      {
        id: "floor",
        number: "2",
        title: "MARKET FLOOR",
        subtitle: "Lower Market Bound",
        desc: "The conservative lower end of verified comparable compensation in your industry & tier.",
      },
      {
        id: "range",
        number: "3",
        title: "MARKET RANGE",
        subtitle: "Broader Benchmark Band",
        desc: "The realistic band supported by cross-verified peers, hiring trends, and market data.",
      },
      {
        id: "target",
        number: "4",
        title: "TARGET",
        subtitle: "Targeted Outcome",
        desc: "The realistic outcome you want to actively negotiate toward based on your documented evidence.",
      },
      {
        id: "minimum",
        number: "5",
        title: "MINIMUM",
        subtitle: "Walkaway Floor",
        desc: "The lowest revised package you would seriously consider accepting based on your current circumstances.",
      },
    ],
    anchorConcept: {
      title: "OPENING ASK / ANCHOR",
      badge: "SEPARATE NEGOTIATION CONCEPT",
      desc: "A defensible starting position placed slightly above your target that gives strategic room for concession without dropping below your true objective.",
    },
    disclaimer:
      "Important: These numbers are planning and negotiation instruments, not guaranteed universal market truths. They give you structure and conversational composure.",
  },

  // SECTION 6 — SHOW THE TRANSFORMATION WITH AN EXAMPLE
  example: {
    headline: "SEE THE TRANSFORMATION IN ACTION",
    subheadline: "How a software professional earning ₹7 LPA transformed complete confusion into an exact negotiation battleplan.",
    badge: "ILLUSTRATIVE EXAMPLE — NOT A UNIVERSAL SALARY BENCHMARK",
    disclaimer:
      "Actual compensation depends on role, experience, geography, industry, company tier, skills, performance, market demand, and compensation structure.",
    before: {
      tag: "BEFORE THE PLAYBOOK",
      currentCTC: "₹7.0 LPA",
      status: "Confused & Hesitant",
      quotes: [
        "“Do I ask for ₹8L? Or is ₹9L too greedy?”",
        "“What if HR gets angry and pulls the appraisal?”",
        "“I don't know how to prove I deserve more than 8%.”",
      ],
      resultText: "Result: Walks into appraisal meeting with zero prepared numbers, accepts standard 7% increment.",
    },
    after: {
      tag: "AFTER RUNNING THE PLAYBOOK",
      currentCTC: "₹7.0 LPA",
      marketRange: "₹8.5L – ₹10.5L",
      marketMidpoint: "₹9.5L",
      salaryGap: "₹2.5L",
      negotiationPlan: {
        minimum: "₹9.0 LPA (Walkaway baseline)",
        target: "₹10.0 LPA (Target objective)",
        openingAsk: "₹10.5 LPA (Defensible anchor)",
      },
      resultText:
        "Result: Opened at ₹10.5L with documented evidence of 3 major delivered initiatives. Settled comfortably at ₹9.8L.",
    },
  },

  // SECTION 7 — WHAT'S INSIDE THE PLAYBOOK
  inside: {
    headline: "EVERYTHING YOU NEED BEFORE THE CONVERSATION",
    subheadline:
      "15 structured worksheets, frameworks, calculators, and script packs engineered to take you from uncertain to fully prepared.",
    items: [
      {
        title: "Current Compensation Worksheet",
        desc: "Dissect fixed base, performance bonus, PF, gratuity, and ESOPs to know your real baseline.",
        tag: "Audit",
      },
      {
        title: "Salary Market Research Worksheet",
        desc: "Step-by-step sources to extract trustworthy comparable numbers without relying on vague rumors.",
        tag: "Research",
      },
      {
        title: "Salary Gap Calculator Framework",
        desc: "Mathematically compute your exact differential against median market roles.",
        tag: "Calculator",
      },
      {
        title: "Target Salary Worksheet",
        desc: "Determine your personal financial goals and defensible upside expectations.",
        tag: "Planning",
      },
      {
        title: "Minimum / Target / Opening Ask Planner",
        desc: "Set your 3 tactical numbers so you never hesitate when asked for your expected CTC.",
        tag: "Framework",
      },
      {
        title: "Evidence Bank",
        desc: "A categorized repository to catalog delivered tickets, cost-savings, team velocity, and leadership wins.",
        tag: "Documentation",
      },
      {
        title: "3-Proof Salary Case Framework",
        desc: "Format your accomplishments into undeniable business impact proof.",
        tag: "Strategy",
      },
      {
        title: "Salary Negotiation Readiness Score",
        desc: "A 100-point diagnostic to evaluate if your preparation is bulletproof before scheduling the talk.",
        tag: "Diagnostic",
      },
      {
        title: "HR Objection Planner",
        desc: "Pre-empt company budget limits, internal band constraints, and hiring freezes.",
        tag: "Tactics",
      },
      {
        title: "Total Compensation Comparison",
        desc: "Compare competing offers side-by-side: Fixed vs Variable vs Benefits vs Equity.",
        tag: "Evaluation",
      },
      {
        title: "Negotiation Preparation Sheet",
        desc: "Pre-meeting mental checklist, breathing techniques, and posture cues for the talk.",
        tag: "Mindset",
      },
      {
        title: "Final One-Page Salary Negotiation Sheet",
        desc: "The single cheat-sheet you keep in front of you during your 1-on-1 discussion.",
        tag: "Cheat Sheet",
      },
      {
        title: "Salary Negotiation Script Pack",
        desc: "Word-for-word scripts for the 10 most uncomfortable salary situations.",
        tag: "Scripts",
      },
      {
        title: "Email Templates",
        desc: "Professional templates to request salary reviews, summarize verbal agreements, and submit counter-proposals.",
        tag: "Templates",
      },
      {
        title: "Follow-Up Templates",
        desc: "Gentle yet firm follow-up messages for when HR delays or promises to 'revisit next quarter'.",
        tag: "Follow-up",
      },
    ],
  },

  // SECTION 8 — EVIDENCE SECTION
  evidence: {
    headline: "DON'T JUST SAY YOU WORK HARD.",
    headlineSecond: "SHOW WHAT CHANGED BECAUSE OF YOUR WORK.",
    intro:
      "HR and managers hear 'I worked very hard this year' from 100% of employees. Evidence is the only thing that separates requests that get approved from requests that get dismissed.",
    comparisons: [
      {
        weak: "“I work very hard.”",
        stronger: "“I reduced our team's deployment turnaround time by 30% across 4 production releases.”",
        label: "Impact Proof",
      },
      {
        weak: "“I have taken on more work.”",
        stronger: "“I took full ownership of three additional microservices previously handled by a senior engineer.”",
        label: "Responsibility Proof",
      },
      {
        weak: "“I have improved a lot.”",
        stronger: "“I completed 14 critical client escalations, introduced an automated QA process, and saved ~18 hours of manual weekly work.”",
        label: "Performance Proof",
      },
    ],
    ruleTitle: "THE 3-PROOF RULE",
    ruleSubtitle: "Every defensible salary case must anchor on these three pillars:",
    pillars: [
      {
        title: "BUSINESS IMPACT",
        question: "What changed because of your work?",
        detail: "Revenue enabled, costs cut, bugs prevented, clients retained, or cycle times compressed.",
      },
      {
        title: "RESPONSIBILITY GROWTH",
        question: "What do you handle now that you didn't before?",
        detail: "Mentorship, cross-functional ownership, on-call escalations, and unblocking team members.",
      },
      {
        title: "SKILL / PERFORMANCE GROWTH",
        question: "What measurable improvement demonstrates your development?",
        detail: "Certifications applied directly to production, higher velocity points, or zero defect escapes.",
      },
    ],
    cta: "BUILD YOUR SALARY CASE",
  },

  // SECTION 9 — HR OBJECTIONS
  objections: {
    headline: "WHAT IF HR PUSHES BACK?",
    subheadline:
      "When HR raises an objection, it is not an immediate rejection — it is simply the starting point of negotiation. Here is how you respond with calm, evidence-based professionalism.",
    toneNote: "Tone formula: Calm + Evidence-based + Professional + Assertive",
    cards: [
      {
        hrSays: "“That's too high.”",
        context: "Initial shock anchor to test your resolve",
        youSay:
          "“I understand. My expectation is based on the scope of the role, the results I've delivered over the past 12 months, and the comparable market range for this responsibility level. I'm very open to discussing the overall package structure and finding a number that works for both sides.”",
      },
      {
        hrSays: "“We don't have the budget.”",
        context: "Standard company constraint deflection",
        youSay:
          "“I completely understand budget cycles. Given the impact and savings my recent work generated, where does the budget currently stand for this role? If the base salary has fixed ceilings right now, could we explore a structured review in six months tied to agreed deliverables, or adjust the variable / performance bonus component?”",
      },
      {
        hrSays: "“We can only give you 10%.”",
        context: "Standard percentage policy limit",
        youSay:
          "“Thank you for sharing the company guideline. I appreciate the team's recognition. However, looking at the expansion of my responsibilities from handling X to leading Y, a 10% adjustment still keeps my compensation below market parity. What flexibility exists for high-impact contributors who have taken on wider scope?”",
      },
      {
        hrSays: "“What makes you think you deserve that salary?”",
        context: "Direct challenge to test your preparation",
        youSay:
          "“I'm glad you asked. Over the last year, my work contributed directly to [Key Achievement 1], reducing turnaround by 30%, and I took ownership of [Key Responsibility 2]. Based on those quantifiable business outcomes and comparable market data for this output, that is the value I'm delivering to the company.”",
      },
    ],
  },

  // SECTION 10 — SCRIPT PACK
  scriptPack: {
    headline: "YOU DON'T HAVE TO FIGURE OUT THE WORDS ALONE.",
    subheadline:
      "Get practical, field-tested language for the exact moments where salary conversations usually become uncomfortable.",
    scripts: [
      {
        scenario: "“What are your salary expectations?”",
        tag: "Early Interview / Pre-screen",
        script: "“Based on the research I've done for this role, its scope, and the deliverables we discussed, I'm targeting a range between ₹X and ₹Y LPA. However, right now I'm primarily focused on confirming strong mutual fit, and I'm open to discussing the total compensation structure once we reach that stage.”",
      },
      {
        scenario: "“What is your current CTC?”",
        tag: "Salary History Inquiry",
        script: "“My current package is ₹X LPA with a mix of fixed and variable. However, my current compensation reflects my responsibilities from two years ago, whereas my next role will involve [Key Skill/Leadership]. I'd prefer to discuss compensation based on the scope and value of this specific role.”",
      },
      {
        scenario: "“Why do you expect this number?”",
        tag: "Justification Challenge",
        script: "“My expectation reflects three things: first, market data for professionals managing this scope; second, my track record of delivering [Metric/Result]; and third, my ability to hit the ground running without an extended onboarding curve.”",
      },
      {
        scenario: "“That's outside our budget.”",
        tag: "Hard Ceiling Pushback",
        script: "“I appreciate your transparency on the budget. What is the maximum band approved for this role? Let's see how close we are and whether components like signing bonus, milestone review, or benefits can bridge the gap.”",
      },
      {
        scenario: "“We can only offer 10%.”",
        tag: "Internal Policy Cap",
        script: "“I understand standard policy guidelines exist. At the same time, given that my scope expanded to cover [Responsibility], I would love to explore an exception or review mechanism that reflects my actual business contribution.”",
      },
      {
        scenario: "“Let's discuss this next year.”",
        tag: "Postponement Tactic",
        script: "“I appreciate that timing can be tight right now. Can we agree on the specific performance benchmarks needed between now and then, and document a formal mid-year review date in writing so we stay aligned?”",
      },
      {
        scenario: "“Your current salary doesn't justify that expectation.”",
        tag: "Past Salary Anchoring",
        script: "“I understand why looking at past salary is customary. However, compensation should match the market value and output of the work being performed here today, rather than what another company negotiated previously.”",
      },
      {
        scenario: "“This is our final offer.”",
        tag: "Take-It-Or-Leave-It",
        script: "“Thank you for laying this out clearly. I'm very excited about this role and the team. Could I have 24 hours to review the detailed offer letter and breakdown so I can give you my complete and considered response?”",
      },
      {
        scenario: "“Do you have another offer?”",
        tag: "Leverage Probe",
        script: "“I am actively in conversation with a couple of other teams where discussions are progressing well. However, this opportunity remains my top preference because of the team and mission, which is why I'm working to make the numbers work here first.”",
      },
      {
        scenario: "“Can we revisit your compensation after six months?”",
        tag: "Conditional Promise",
        script: "“I would be very happy with a six-month review! To make sure we're completely aligned, let's agree on the top 2-3 specific measurable targets to achieve during this period and put that review milestone in the offer terms.”",
      },
    ],
    cta: "GET THE SCRIPT PACK",
  },

  // SECTION 11 — TOTAL COMPENSATION
  totalComp: {
    headline: "DON'T LET A BIG CTC NUMBER FOOL YOU.",
    subheadline:
      "In India, a higher headline CTC can often mean lower monthly take-home pay if the compensation structure is packed with variable pay, deferred retention bonuses, or inflated perks.",
    offerA: {
      name: "OFFER A",
      total: "₹12.0 LPA",
      fixed: "₹9.0 LPA Fixed",
      variable: "₹3.0 LPA Variable (Performance / Discretionary)",
      takeHomeNote: "Monthly in-hand calculated only on ₹9L base",
      riskLevel: "Higher Risk / Variable heavy",
    },
    offerB: {
      name: "OFFER B",
      total: "₹11.5 LPA",
      fixed: "₹11.0 LPA Fixed",
      variable: "₹0.5 LPA Variable",
      takeHomeNote: "Predictable, high monthly in-hand bank credit",
      riskLevel: "Lower Risk / Guaranteed base heavy",
    },
    explanation:
      "Headline CTC isn't always enough to understand the actual compensation structure. The playbook provides a complete Total Compensation Comparison Worksheet.",
    components: [
      "Fixed Base Pay",
      "Variable / Performance Pay",
      "Annual Bonus & Gratuity",
      "ESOPs / RSUs & Vesting Cliff",
      "Medical & Term Insurance Coverage",
      "Joining / Retention Bonuses & Clawbacks",
      "Meal, Travel & Remote Allowances",
      "Leave Encashment & Retirement Benefits",
    ],
    closingNote:
      "We do not tell you which offer is universally better — we give you the tools to evaluate offers according to your personal financial commitments and risk appetite.",
  },

  // SECTION 12 — SALARY NEGOTIATION READINESS SCORE
  readinessScore: {
    headline: "ARE YOU ACTUALLY READY TO NEGOTIATE?",
    subheadline:
      "Use our visual 100-point diagnostic to audit your negotiation readiness before you schedule your appraisal or interview conversation.",
    pillars: [
      { name: "Market Evidence", maxScore: 20, desc: "You have verified 3+ comparable salary data points for your role and experience tier." },
      { name: "Performance Evidence", maxScore: 20, desc: "You have quantified at least 3 business impact metrics or cost/time savings." },
      { name: "Responsibility Growth", maxScore: 20, desc: "You have documented the increased scope and tasks you own beyond your initial JD." },
      { name: "Skill Growth", maxScore: 20, desc: "You can articulate the advanced technical or process capabilities you acquired this year." },
      { name: "Negotiation Preparation", maxScore: 20, desc: "You have set your 5 numbers (Current, Floor, Range, Target, Minimum, Opening Ask) and reviewed scripts." },
    ],
    totalLabel: "TOTAL READINESS SCORE",
    totalMax: "/ 100",
    disclaimer:
      "Note: This measures how prepared you are for the conversation — not your personal worth as a human or a guaranteed salary outcome.",
  },

  // SECTION 13 — WHO THIS IS FOR
  whoItsFor: {
    headline: "THIS PLAYBOOK IS FOR YOU IF…",
    subheadline: "If you recognize yourself in any of these situations, the playbook was built specifically for you.",
    items: [
      "You have an upcoming appraisal or annual increment meeting.",
      "You suspect you are underpaid compared to peers in the market.",
      "You don't know what exact salary number to ask for.",
      "You are preparing for a promotion or band elevation discussion.",
      "You are actively planning or navigating a job switch.",
      "You are negotiating a new offer and don't want to leave money on the table.",
      "You freeze or hesitate when HR asks: 'What is your expected CTC?'",
      "You struggle to justify your salary request without feeling awkward or greedy.",
      "You want word-for-word scripts instead of vague motivational advice.",
      "You want to negotiate calmly, professionally, and without burning bridges.",
    ],
  },

  // SECTION 14 — WHO IT IS NOT FOR
  whoItsNotFor: {
    headline: "THIS IS NOT A MAGIC HACK.",
    subheadline: "We believe in radical honesty. This product is intentionally NOT for everyone.",
    notForList: [
      "People looking for guaranteed salary increase percentages",
      "People wanting manipulative psychological tricks or fake HR 'loopholes'",
      "People who want to threaten to quit as a reckless bluffing tactic",
      "“Say this magical sentence and you'll definitely get 50% more” formulas",
      "Anyone seeking an overnight career shortcut without doing the preparation work",
    ],
    forInstead:
      "This is for professionals who want to understand the market, prepare their evidence, choose a defensible number, and communicate it with calm, professional assertiveness.",
  },

  // SECTION 15 — PRODUCT PREVIEW
  preview: {
    headline: "PRACTICAL TOOLS. NOT JUST INFORMATIONAL THEORY.",
    subheadline:
      "Take a look inside the worksheets and battle-tested frameworks you will download and use immediately.",
    tabs: [
      {
        id: "worksheet-research",
        label: "Market Research Worksheet",
        title: "Worksheet 02: Market Salary Research Matrix",
        desc: "Structured framework to cross-verify peer salaries across Glassdoor, AmbitionBox, Levels.fyi, and recruiter networks.",
        fields: ["Job Title / Level", "Tier (Services vs Product)", "Experience Band", "City / Remote Band", "Low / Mid / High CTC"],
      },
      {
        id: "worksheet-gap",
        label: "Salary Gap Framework",
        title: "Worksheet 03: Salary Gap Calculator",
        desc: "Mathematically isolates your current fixed compensation from market median and projects your annual deficit.",
        fields: ["Current Fixed CTC", "Market Median Base", "Calculated Annual Gap", "Compounding 3-Yr Cost"],
      },
      {
        id: "worksheet-range",
        label: "Negotiation Range Planner",
        title: "Worksheet 05: The 5-Number Tactical Grid",
        desc: "Maps out your Current, Market Floor, Market Range, Target, Minimum walkaway, and Opening Anchor.",
        fields: ["Opening Anchor Ask", "Target Objective", "Walkaway Minimum Floor", "Concession Buffer"],
      },
      {
        id: "worksheet-evidence",
        label: "Evidence Bank",
        title: "Worksheet 06: Quantified Impact Repository",
        desc: "Transforms daily tasks into measurable business value using the 3-Proof rule.",
        fields: ["Delivered Initiative", "Before vs After Metric", "Business Impact / Cost Saved", "Scope Expansion"],
      },
      {
        id: "worksheet-objection",
        label: "HR Objection Planner",
        title: "Worksheet 09: Objection Response Matrix",
        desc: "Pre-empts 'no budget', 'policy caps', and 'above band' with calm, prepared conversational pivots.",
        fields: ["Anticipated Objection", "Underlying Constraint", "Prepared Script", "Alternative Concession"],
      },
      {
        id: "worksheet-prep",
        label: "Final One-Page Sheet",
        title: "Worksheet 12: The 1-Page Meeting Cheat Sheet",
        desc: "The single sheet of paper to keep beside your laptop during the conversation for instant clarity.",
        fields: ["3 Core Proof Points", "Target & Anchor Numbers", "Key Response Phrases", "Meeting Objective"],
      },
    ],
  },

  // SECTION 16 — VALUE STACK
  valueStack: {
    headline: "ONE PLAYBOOK. ONE CONVERSATION. A LOT MORE CLARITY.",
    subheadline:
      "Everything you need to step into your next appraisal or offer conversation prepared, collected into a single practical bundle.",
    items: [
      "Market salary research framework & verified sources",
      "Salary gap calculator & compounding cost worksheet",
      "The 5-Number Salary Method (Proprietary framework)",
      "Target salary planner & tactical anchor builder",
      "Evidence-building framework & quantified impact bank",
      "The 3-Proof Rule implementation guide",
      "100-Point Salary Negotiation Readiness Score diagnostic",
      "HR objection planner & calm counter-response scripts",
      "Complete 10-Scenario Salary Negotiation Script Pack",
      "Professional email templates for salary reviews & counter-offers",
      "Follow-up templates for delayed or deferred review responses",
      "Total compensation comparison worksheet (Fixed vs Variable)",
      "Final one-page salary negotiation cheat-sheet",
    ],
    pricing: {
      tag: "LAUNCH PRICE",
      price: "₹299",
      subtext: "One-Time Purchase • No Subscription • Instant Digital Access",
      cta: "GET THE PLAYBOOK — ₹299",
    },
    transparencyNote:
      "We do not use fake crossed-out prices (like ₹4,999 crossed out to ₹299). ₹299 is our straightforward, honest launch price designed to be accessible to every working professional.",
  },

  // SECTION 17 — OBJECTION HANDLING (FAQ)
  faq: {
    headline: "FREQUENTLY ASKED QUESTIONS",
    subheadline: "Clear, direct answers to help you decide if this playbook is right for you.",
    items: [
      {
        q: "Is this only for people asking for a hike?",
        a: "No. The framework works equally well for annual appraisals, internal promotion discussions, job switchers negotiating new offers, and professionals who simply want to understand their market standing before their next career move.",
      },
      {
        q: "What if I don't know my market salary?",
        a: "That is precisely one of the primary problems this playbook solves. Section 1 of the playbook guides you through a step-by-step market research framework so you can identify reliable comparable compensation data for your role, location, and experience tier.",
      },
      {
        q: "Does this guarantee a salary increase?",
        a: "No. Anyone promising a guaranteed salary hike is being dishonest. Salary outcomes depend on your employer's financial health, department budget, market conditions, your individual performance, company compensation bands, and your alternatives. What this playbook guarantees is thorough preparation, clarity on your numbers, and the scripts to negotiate professionally.",
      },
      {
        q: "Is this useful for early-career professionals & freshers?",
        a: "Yes, with realistic expectations. Early-career professionals benefit immensely from the evidence-building worksheets, understanding total compensation structures (fixed vs variable), and learning how to avoid anchoring too low in their first job switch.",
      },
      {
        q: "What if HR says there is no budget?",
        a: "The playbook includes dedicated strategies and scripts specifically for the 'no budget' scenario. It shows you how to respectfully explore alternative levers — such as performance bonuses, joining bonuses, accelerated six-month reviews in writing, or flexible benefits.",
      },
      {
        q: "Is this only useful in India?",
        a: "The examples, terminology (CTC, LPA, Fixed vs Variable, Appraisals), and market context are built primarily around the Indian employment landscape. However, the core negotiation psychology, evidence-building rules, and conversation frameworks are globally applicable.",
      },
      {
        q: "How will I receive the playbook?",
        a: "Immediately after completing your purchase, you will be redirected to an instant download screen to save the PDF and companion worksheets. You will also receive an email with direct download links so you can access it on any device whenever you need it.",
      },
    ],
  },

  // SECTION 18 — FINAL CTA
  finalCta: {
    headline: "BEFORE YOUR NEXT SALARY CONVERSATION…",
    bigStatement: "KNOW YOUR NUMBER.",
    steps: [
      "Research your market.",
      "Build your evidence.",
      "Choose your target.",
      "Prepare your responses.",
      "Walk into the conversation with a plan.",
    ],
    price: "₹299",
    cta: "GET THE SALARY PLAYBOOK",
    microcopy: "Instant digital access • Practical worksheets • Negotiation scripts",
  },

  // SECTION 19 — FUTURE PRODUCT
  futureProduct: {
    badge: "COMING SOON",
    headline: "SOMETHING BIGGER IS COMING.",
    title: "THE INTERACTIVE SALARY WORTH CALCULATOR",
    desc: "We are currently engineering a companion interactive software tool designed to automate salary research and calculation in seconds.",
    inputsLabel: "Planned Inputs:",
    inputs: ["Role & Domain", "Years of Experience", "Location / Tier", "Industry / Company Type", "Current CTC & Structure", "Key Skills & Responsibilities"],
    outputsLabel: "Generated Outputs:",
    outputs: ["Estimated Market Range", "Exact Salary Gap", "Target & Anchor Recommendations", "Custom Evidence Checklist", "Prepared Negotiation Sheet"],
    note: "The calculator is currently in active development. Buying the playbook today gives you first access when it launches.",
  },

  // SECTION 20 — FOOTER
  footer: {
    productName: "SALARY WORTH & NEGOTIATION PLAYBOOK",
    description: "A practical preparation framework, evidence bank, and script pack for Indian working professionals navigating appraisals, promotions, and job offers.",
    copyright: "© 2026 Salary Worth & Negotiation Playbook. All rights reserved.",
    disclaimer: "Disclaimer: This product is an educational and strategic preparation guide. It does not provide legal, financial, or employment advice, nor does it guarantee specific salary increases. Compensation decisions are solely between you and your employer.",
    links: [
      { label: "Terms of Use", id: "terms" },
      { label: "Privacy Policy", id: "privacy" },
      { label: "Refund Policy", id: "refund" },
      { label: "Support & Contact", id: "contact" },
    ],
  },
};
