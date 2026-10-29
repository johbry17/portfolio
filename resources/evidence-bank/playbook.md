# Application & Interview Playbook — Bryan C. Johns

> **Purpose:** How to translate the evidence bank into specific formats and contexts. A practical reference for every stage of the job search.
>
> **Last updated:** October 2026

---

## Index

- [Part 1: Translating Evidence by Format](#part-1-translating-evidence-by-format)
  - [1.1 Résumé Bullets](#11-résumé-bullets)
  - [1.2 Skills Sections](#12-skills-sections)
  - [1.3 Cover Letters](#13-cover-letters)
  - [1.4 Screening-Question Responses](#14-screening-question-responses)
  - [1.5 Portfolio and Project Descriptions](#15-portfolio-and-project-descriptions)
  - [1.6 Technical Interview Answers](#16-technical-interview-answers)
  - [1.7 Behavioral Interview Answers](#17-behavioral-interview-answers)
  - [1.8 Professional Introductions and Networking Conversations](#18-professional-introductions-and-networking-conversations)
  - [1.9 Performance Reviews and Accomplishment Records](#19-performance-reviews-and-accomplishment-records)
- [Part 2: Evidence Selection by Employer Type](#part-2-evidence-selection-by-employer-type)
- [Part 3: Responsible Quantification Guide](#part-3-responsible-quantification-guide)
- [Part 4: Activities vs. Accomplishments](#part-4-activities-vs-accomplishments)
- [Part 5: Weak vs. Strong Wording](#part-5-weak-vs-strong-wording)
- [Part 6: The 30-Second Introduction](#part-6-the-30-second-introduction)
- [Part 7: Index and Update Procedure](#part-7-index-and-update-procedure)

---

## Part 1: Translating Evidence by Format

Different formats require different translations of the same evidence. The underlying facts do not change; the emphasis, length, and structure do.

---

### 1.1 Résumé Bullets

**The rule:** One bullet = one accomplishment = one claim supported by evidence. Strong bullets answer "so what?" Weak bullets describe tasks.

**Structure to aim for:** [Action verb] + [what you did] + [at what scale/with what tools] + [what resulted or what it demonstrated]

Not every bullet requires a metric. Scope, rigor, and judgment are also evidence.

**What to include for data projects:**
- The analytical problem or question (1–3 words: "flood mitigation equity," "STR market contraction")
- The methods or tools (specific, not generic)
- The finding or output (what actually happened — honest, not inflated)
- Scale where verifiable (250+ municipalities; 11 quarterly snapshots; 14,999 records)

**What to include for hospitality:**
- Specific operational scope (team size, revenue scale — CONFIRM before citing numbers)
- Any documented process improvement (ASSERT–CONFIRM before citing percentages)
- Duration (14 years of consistent performance is itself evidence)

**What to avoid:**
- "Responsible for…" (describes a job, not an accomplishment)
- "Worked on…" (implies a supporting role; use only if that's accurate)
- "Helped to…" (use only if you were genuinely not the lead; otherwise omit "helped")
- Passive voice that obscures your role ("analysis was conducted" — by whom?)
- Vague superlatives ("exceptional," "outstanding") without evidence
- Skills listed in bullets as if they were accomplishments ("Proficient in Python")

---

### 1.2 Skills Sections

**The rule:** Only list what you can defend in a technical interview. A skills section is an invitation to be tested, not a wish list.

**How to structure it:**

Option A (grouped by domain):
```
Languages: Python, R, SQL, JavaScript
ML & Modeling: scikit-learn, XGBoost, TensorFlow/Keras, SHAP
Visualization: Matplotlib, Seaborn, Plotly, D3.js, Leaflet.js, ggplot2
Geospatial: GeoPandas, sf, ggspatial
Data / Databases: pandas, NumPy, PostgreSQL, tidyverse
Web / APIs: Flask, Django, REST APIs
Dev Tools: Git, Jupyter, VS Code, RStudio
```

Option B (tiered by proficiency):
```
Primary: Python, SQL, D3.js / Leaflet.js
Working proficiency: R, JavaScript (visualization), PostgreSQL
Familiar: MongoDB, Django, Flask
```

**Notes:**
- Tableau: listed on CV; confirm you have a specific example before including in a skills section; otherwise remove to avoid a question you can't answer
- BeautifulSoup: listed on CV; confirm a specific use case before citing
- Do not list "Machine Learning" as a skill; list the specific tools/frameworks (scikit-learn, XGBoost, TensorFlow/Keras)

---

### 1.3 Cover Letters

**The rule:** Cover letters answer three questions: Why this role? Why you? Why now? They should not be a prose retelling of the résumé.

**Structure:**

**Paragraph 1 (Hook):** Connect the organization's work to a specific thing you know about it. Or open with the central finding of your most relevant project if it's directly on-topic for the role. Not: "I am writing to apply for the Data Analyst position."

**Paragraph 2 (Relevant evidence — 2–3 things):** Two or three pieces of evidence that are specifically relevant to this role. Not everything. The most relevant two or three. Use specific numbers where verified. Be honest about what was independent work vs. coursework.

**Paragraph 3 (Why this organization specifically):** This must be customized per application. Name something specific about the organization's work, methodology, or mission. Do not use generic praise.

**Paragraph 4 (Close):** What you're asking for (the conversation), not the job offer.

**Cover letter pitfalls:**
- Starting with "I am a passionate data analyst" — opening with a claim the reader cannot yet evaluate
- Listing every skill and project — this is the résumé's job
- Failing to name the organization anywhere in the letter
- Using the letter to explain the career transition at length — one clear sentence is enough; do not over-explain

---

### 1.4 Screening-Question Responses

Screening questions on job applications often ask: "Do you have X years of experience with Y?" or "Describe your experience with [specific tool or domain]."

**Rules:**
1. Answer honestly. Do not inflate.
2. Provide a specific example, not a claim.
3. If the question asks about experience you have via portfolio work, say so: "I developed this skill through independent project work — specifically [project name], where I [what you did]." This is truthful and shows you can explain context.
4. If you don't have the experience, say "No" or "Limited" and follow with the closest relevant experience. Do not pretend.

**Example:**
- Question: "Do you have experience with longitudinal data analysis?"
- Strong response: "Yes — in Capital Crashpad, I designed and maintained an 11-quarter longitudinal panel of Washington DC Airbnb market data (Q2 2023 – Q2 2026), analyzing structural market changes over time."

---

### 1.5 Portfolio and Project Descriptions

Project descriptions on a portfolio site, LinkedIn, or application portal need to answer:
1. What was the question or problem?
2. What did you do (and what was your ownership level)?
3. What did you find or build?
4. What tools / methods did you use?
5. What are the limitations of the work?

**Length guidance:**
- Portfolio site: can be detailed (500–1,500 words); the public audience includes hiring managers who found the site organically
- LinkedIn: 100–200 words per project; link to the full description
- Application "project" field: match the length to the available space; always include at least one specific finding and one specific tool

**Caveats to include (always):**
- If the dataset is synthetic (Salifort): say so clearly
- If the design is observational (Capital Crashpad): say so clearly
- If a metric is a proxy or upper-bound estimate: say so

---

### 1.6 Technical Interview Answers

Technical interviews may be: whiteboard/verbal explanations, live coding, take-home problems, or tool-specific Q&A.

**For verbal technical questions (most common for analyst roles):**
1. Confirm your understanding of the question before answering
2. Explain your approach before diving into details
3. Use a specific example from your portfolio; abstract explanations are weaker than demonstrated ones
4. Name the trade-off: why this method over another?
5. Name the limitation: what would this method miss or get wrong?

**Preparation requirement:** For each major technique in your portfolio (SHAP, composite index, Moran's I, Spearman correlation, logistic regression, XGBoost, F₂ score), prepare:
- A plain-English definition (2–3 sentences, no jargon)
- Why you chose it
- What you found with it
- What it does NOT tell you

**For live coding:**
- Python will be the primary language tested
- SQL joins, aggregations, window functions are common SQL tests
- EDA and data cleaning are more common than model building in analyst interviews

---

### 1.7 Behavioral Interview Answers

Behavioral questions follow the pattern: "Tell me about a time when…"

**The STAR framework (Situation → Task → Action → Result):**
- **Situation:** Brief context (1–3 sentences). What was the environment?
- **Task:** What was your specific responsibility or goal?
- **Action:** The longest part. What did YOU do? Be specific about your choices and reasoning.
- **Result:** What happened? What was learned? Use verified numbers where available; note if the outcome is estimated.

**Rules:**
1. Prepare 6–8 STAR stories before any serious interview process. Each should be usable for multiple question types.
2. Keep the Situation/Task brief. The interviewer wants to hear about your actions and judgment, not backstory.
3. Own the "I" language. In collaborative work, "we did X" obscures your contribution. Say "I did X" for things you actually did; "the team did Y" for shared efforts.
4. Negative outcomes are acceptable if the learning is real and specific. "It didn't work, and here's what I changed" is credible. "It all worked out great" for every story is not.
5. ASSERT–CONFIRM stories from hospitality must be confirmed before use in formal interviews. Do not cite unconfirmed metrics (e.g., 25% revenue growth) in a live answer.

**Bryan's strongest verified STAR anchors:**
- Q8.1: Floodlines end-to-end project ownership
- Q8.2: Dual-audience communication (narrative article + technical appendix)
- Q8.3: Unexpected finding (R² ≈ 0 / weak Spearman r in Floodlines)
- Q9.3: Dual-timeline architecture in Walk to Mordor (engineering problem solved)
- Q9.4: Choosing F₂ over accuracy in Salifort (judgment under ambiguity)

---

### 1.8 Professional Introductions and Networking Conversations

Networking conversations are not interviews. The goal is to be memorable, generate genuine curiosity, and ask good questions — not to pitch yourself.

**Rules:**
1. Have a 30-second version and a 2-minute version ready (see Part 6)
2. Lead with the interesting finding or problem, not with your credentials
3. Have a specific question for the person you're talking to — not "do you have any openings"
4. Follow up within 24 hours with a brief, specific note

**What to avoid in networking:**
- Reciting your résumé
- Ending the conversation without a next step or a specific question
- Making the conversation entirely about your job search (ask about their work)

---

### 1.9 Performance Reviews and Accomplishment Records

When updating your CV, LinkedIn, or performance records after completing significant work:

1. Write the entry immediately, while memory is fresh
2. Apply the evidence bank labeling: is this VERIFIED or ASSERT–CONFIRM?
3. Extract every quantifiable fact and add to Appendix A of the evidence bank
4. Write the strongest defensible wording (honest, precise, not inflated)
5. Connect to at least one job family or application context

---

## Part 2: Evidence Selection by Employer Type

Different employers weigh different evidence. This section tells you which projects and skills to lead with for each major job family. Adapt based on specific job descriptions.

---

### Federal or State Government Analyst

**Lead with:** Floodlines (FEMA data, government APIs, equity analysis, public policy finding); graduate degrees (AU + UPeace); policy analysis and program evaluation coursework; AU thesis.

**Supporting evidence:** Capital Crashpad (regulatory analysis, DC STR policy); quantitative methods; published technical work.

**De-emphasize:** Walk to Mordor, Utilities-313, personal projects (demonstrate character but less relevant to policy roles).

**Key framing:** Position yourself as a policy-oriented analyst who can bring rigorous quantitative methods to public interest questions. The dual master's degrees + Floodlines combination is unusually strong for this context.

---

### Research Analyst (Nonprofit, Think Tank, Academic-Adjacent)

**Lead with:** Floodlines (independent research design, robustness testing, publication); graduate degrees; AU thesis; research methods coursework (formal research proposal, qualitative interviewing, logic models, CBA, risk assessment).

**Supporting evidence:** Capital Crashpad (longitudinal design, market research); Cyclistic Analytics (R, academic-style reporting); domain expertise in environmental policy, international development.

**Key framing:** Emphasize the research methodology and rigor. These employers care about defensible methodology, not just a polished dashboard.

**Important to address:** "All your projects are solo work" — be ready to discuss how your methodology compensates for lack of peer review (robustness testing, explicit limitation documentation).

---

### Data Analyst (Private Sector, Tech, Finance)

**Lead with:** Salifort (ML, metric selection, SHAP, business recommendation framing); Capital Crashpad (market analysis, longitudinal panel, database design); technical breadth (Python, SQL, D3.js).

**Supporting evidence:** Floodlines (end-to-end rigor); full technical skills list; hospitality metrics (operational judgment, revenue accountability — CONFIRM before citing).

**De-emphasize:** Graduate degrees (less relevant than portfolio in this context); policy analysis coursework.

**Key framing:** Emphasize technical depth and business thinking. The F₂ metric selection in Salifort is a strong signal that you apply judgment to analytical choices, not just defaults.

---

### Environmental Organization / Climate / Sustainability

**Lead with:** Graduate degrees (UPeace, AU environmental policy); Floodlines (flood risk, community vulnerability, FEMA); AU thesis (PES and REDD+ in Costa Rica); environmental economics and policy coursework.

**Supporting evidence:** Capital Crashpad (housing/regulatory intersection); international fieldwork [ASSERT–CONFIRM]; stated future research interests in SIDS, Caribbean development.

**Key framing:** This is where the full combination — domain expertise + analytical rigor — is uniquely valuable. Emphasize that you understand the policy questions from the inside, not just as a data technician.

---

### Consulting (Public Sector / Policy / Strategy)

**Lead with:** Floodlines (end-to-end analytical product; independent research; client-facing communication design); hospitality leadership (team management, operational improvement — CONFIRM metrics); graduate policy analysis training.

**Supporting evidence:** Dual-audience communication (narrative article + technical appendix); Capital Crashpad (market analysis deliverable); research methods coursework.

**Key framing:** Consulting values judgment, communication, and the ability to deliver a useful product. The "narrative article + technical appendix" combination for Floodlines demonstrates that you understand your audience.

**Note:** Be prepared for structured case interviews if applying to management consulting. This is a separate preparation domain. Standard interview prep is not sufficient.

---

### Urban Data / Housing / Real Estate Analytics

**Lead with:** Capital Crashpad (DC market analysis, regulatory dynamics, longitudinal panel); geospatial skills (GeoPandas, Leaflet, spatial autocorrelation); DC location and familiarity with local policy.

**Supporting evidence:** Floodlines (community vulnerability, Census ACS data); Cyclistic Analytics (urban transportation data).

---

### Data Visualization / Communication / Journalism

**Lead with:** Floodlines dashboard (interactive choropleth, quadrant map, guided narrative tour, model switcher); Walk to Mordor (SVG route geometry, dual-clock D3.js visualization); Waypoints (pipeline → Leaflet interactive map); personal branding ("Data Storyteller").

**Supporting evidence:** Dual-audience writing (narrative + technical); D3.js and Leaflet.js depth; full visualization toolset.

**Key framing:** Position as someone who thinks about the audience before building the chart — not just a technician who can produce graphics.

---

## Part 3: Responsible Quantification Guide

### Principle: Numbers derive their credibility from how they are presented, not just from their magnitude.

A carefully caveated estimate is more credible than an overconfident claim. An honest "I don't have that number" is more credible than an invented one.

---

### The Four Categories of Numbers

**Category 1: Verified numbers — use freely, cite the source**
These come from project READMEs, published data, or documented records. Always have the source ready.

Examples:
- ">52% of Vermont municipalities received no FEMA HMA funding" — cite Floodlines
- "XGBoost recall of 0.940 on the holdout test set" — cite Salifort README
- "~1,800 listings disappeared in Q2 2024, a 26% decline" — cite Capital Crashpad README
- "5,196 total miles walked over 806 calendar days" — cite Walk to Mordor README

**Category 2: Assert–confirm numbers — confirm before using formally**
These are plausible from Bryan's own account but not yet independently documented.

Examples:
- Nightly revenue up to $25,000 (Tonic)
- 25% slow-night revenue growth (Tonic)
- 25% staffing cost reduction (Tonic — unit still unclear)

**How to present before confirming:** "Our team routinely managed high-volume nights — I'd want to confirm the exact figures before citing them, but nightly revenue was substantial for a DC venue."

**How to present after confirming:** "Nightly revenue up to $25,000, which I managed end-to-end as lead supervisor."

**Category 3: Estimated ranges — use with explicit uncertainty**
When you have a reasonable basis for estimation but no documented figure.

Example: "I estimate the Floodlines project took approximately X months from initial data collection to publication" — say "approximately" and be prepared to explain the basis.

**Category 4: Unavailable — say so honestly**
Some facts simply weren't captured. "I don't have that number in front of me" is a professional answer. "I'd have to go back and look at the records" is also fine.

---

### What the Verified Numbers Actually Support

| Number | What it supports | What it does NOT support |
|---|---|---|
| Spearman r ~0.10–0.30 (Floodlines) | Weak alignment between need and funding | That FEMA is systematically biased (causation claim) |
| AUC ~0.70, R² ≈ 0 (Floodlines) | Model limitation honestly reported | "Sophisticated predictive model" |
| Recall 0.940 (Salifort) | Model performance on synthetic data | Real-world HR prediction capability |
| ~1,800 listings removed (Capital Crashpad) | Correlation with Airbnb's enforcement timeline | Causal attribution to enforcement specifically |
| 5,196 miles / 806 days (Walk to Mordor) | Personal persistence and sustained data collection | Athletic or health claim |
| Teams of up to 20 (Tonic) | Supervisory scope | Management of complex cross-functional teams |

---

### Language for Uncertain Numbers

| Situation | Acceptable language |
|---|---|
| Number is verified | "[X], as documented in [source]" |
| Number is asserted, unconfirmed | "Approximately [X] — I'd want to confirm that against records" |
| Number is estimated | "My estimate is [X]; I can speak to the basis for that estimate" |
| Number is unavailable | "I don't have that figure to hand; I can follow up with specifics" |
| Number was never captured | "That's not something I tracked systematically at the time" |

---

### The "So What" Test

Before including any number, ask: what decision or impression does this number support?

- "Recall of 0.940" → supports: "I built a high-performing classification model AND I chose the right metric for the business problem"
- "11 quarterly snapshots" → supports: "I maintained a longitudinal panel over 3+ years, which requires discipline"
- ">52% received no funding" → supports: "I found a specific and policy-relevant gap in how FEMA's program reaches communities"
- "14 years at same employer" → supports: "I am reliable, consistent, and not a job-hopper"

---

## Part 4: Activities vs. Accomplishments

**The distinction:** An activity describes what you did. An accomplishment describes what resulted — and why it mattered.

Both are necessary. A résumé with only activities reads as a job description. A résumé with only claimed accomplishments (without the activity context) is not credible.

**The test:** Ask "so what?" after every bullet. If the answer is obvious from the bullet itself, it's an accomplishment. If you have to think about it, it might still be an activity.

---

### Before / After Examples Using Bryan's Evidence

**Example 1 — Floodlines analysis**
- Activity: "Analyzed FEMA Hazard Mitigation Assistance funding data for Vermont municipalities."
- Accomplishment: "Found that >52% of Vermont municipalities received no FEMA flood mitigation funding, with modeled community need showing only a weak correlation (Spearman r ~0.10–0.30) with actual allocations — suggesting the program responds to historical claims, not forward-looking risk."

---

**Example 2 — Floodlines robustness**
- Activity: "Tested multiple model specifications for the composite need index."
- Accomplishment: "Validated findings across 20+ model specifications and two normalization methods; rank-vs-z-score correlation of 0.89–1.00 confirmed the weak need-vs-funding finding is robust to methodological choices."

---

**Example 3 — Salifort metric selection**
- Activity: "Selected evaluation metrics for the employee churn classification model."
- Accomplishment: "Chose F₂ score as the primary metric to weight recall 4:1 over precision — explicitly justified by the asymmetric business cost of missing a true leaver; best model achieved recall 0.940 and F₂ 0.925 on the holdout test set."

---

**Example 4 — Capital Crashpad longitudinal design**
- Activity: "Collected quarterly Airbnb listing data for Washington DC."
- Accomplishment: "Built and maintained an 11-quarter longitudinal panel (Q2 2023–Q2 2026), identifying a ~26% listing contraction at Q2 2024 concentrated in 31+ night minimum-stay listings — consistent with DC's STR licensing threshold."

---

**Example 5 — Floodlines communication**
- Activity: "Published a technical appendix and narrative article for Floodlines."
- Accomplishment: "Designed dual-audience communication for the same analysis: a technical appendix for expert reviewers (methodology, assumptions, sensitivity analysis) and a narrative article for the general public — plus an interactive guided dashboard tour for non-expert navigation."

---

**Example 6 — Salifort data cleaning**
- Activity: "Cleaned the Salifort dataset."
- Accomplishment: "Identified and removed 3,008 duplicate records from 14,999 raw entries (20% of the dataset); used Pipeline objects throughout to prevent data leakage during cross-validation."

---

**Example 7 — Walk to Mordor architecture**
- Activity: "Built a dual-timeline system for the Walk to Mordor visualization."
- Accomplishment: "Designed a dual-clock architecture mapping real calendar dates and Tolkien's Shire Calendar to a single map coordinate system via journey_id + cumulative_miles → SVG position; reconstructed movement chronology from primary Tolkien text across 331 GeoJSON route files."

---

**Example 8 — Tonic supervision**
- Activity: "Supervised restaurant staff at Tonic Restaurant."
- Accomplishment [ASSERT – CONFIRM]: "Led a team of up to 20 as Supervisor and Lead Bartender, managing nightly operations with revenue reaching up to $25,000; rebuilt team post-COVID."

---

**Example 9 — Tonic revenue improvement**
- Activity [ASSERT – CONFIRM]: "Identified a slow night and created a community event."
- Accomplishment [ASSERT – CONFIRM]: "Identified an underperforming weeknight time slot, designed and implemented a community-oriented event format, and built operational habits to sustain the improvement — resulting in approximately 25% revenue growth for that time slot. [Confirm before citing.]"

---

**Example 10 — Training portfolio**
- Activity: "Completed multiple data analytics training programs."
- Accomplishment: "Completed six technical training programs (GWU Boot Camp, Google Advanced Data Analytics, Stanford Statistical Learning, CS50x, CS50 AI, Google Data Analytics Certificate), producing capstone projects for three; built an 8-project published portfolio across Python, R, SQL, and JavaScript."

---

## Part 5: Weak vs. Strong Wording

*All examples use Bryan's actual evidence. No generic advice.*

---

| # | Weak | Strong | Why |
|---|---|---|---|
| 1 | "Experienced in Python" | "Python (primary language across 7+ projects: ETL pipelines, supervised ML, GIS analysis, Flask/Django web apps)" | Specificity over claim |
| 2 | "Analyzed FEMA data" | "Integrated OpenFEMA API, Census ACS, NFIP, and FEMA National Risk Index data across 250+ Vermont municipalities into a reproducible ETL pipeline" | Tools + scale + reproducibility |
| 3 | "Built a machine learning model for employee retention" | "Compared 4 classification models (LR, DT, RF, XGBoost); selected XGBoost on a synthetic HR dataset (11,991 records); achieved recall 0.940 and F₂ 0.925 using stratified K-Fold CV" | Specific numbers, honest dataset disclosure |
| 4 | "Performed sensitivity analysis" | "Tested 20+ model specifications across two normalization methods; performed LOVO analysis and weight perturbation; finding held across all reasonable specifications" | Describes what sensitivity analysis actually involved |
| 5 | "Proficient in data visualization" | "End-to-end visualization: Python EDA (Matplotlib/Seaborn) → interactive public dashboards (D3.js choropleth, quadrant maps, model switcher; Leaflet.js)" | Tools + output level + specific features |
| 6 | "Supervised a team" | "Supervised teams of up to 20 as Lead Bartender and Supervisor at a high-volume DC venue (14 years)" | Scale + duration + context |
| 7 | "Analyzed DC Airbnb data" | "Designed and maintained an 11-quarter longitudinal panel of DC Airbnb listings (Q2 2023–Q2 2026); identified ~26% listing contraction at Q2 2024 concentrated in 31+ night minimum-stay listings" | Longitudinal design + specific finding + regulatory interpretation |
| 8 | "Knowledgeable in environmental policy" | "Graduate coursework in climate governance (UNFCCC, carbon markets, REDD+) and environmental economics; published graduate thesis on Costa Rica's PES program vs. REDD+" | Specific content + verified publication |
| 9 | "Great communication skills" | "Designed dual-audience communication for Floodlines: technical appendix for expert reviewers and narrative article for general public; built interactive guided narrative tour in public dashboard" | Demonstrated, not claimed |
| 10 | "Dedicated and hardworking" | Remove entirely; replace with any one specific evidence item | Claims of character without evidence are the weakest possible résumé language |
| 11 | "Passionate about data" | Use only if followed immediately by a specific example; otherwise remove | Unsubstantiated opening claim |
| 12 | "Experience with geospatial analysis" | "Geospatial: GeoPandas (flood zone and municipal boundary processing), sf and ggspatial (R bikeshare analysis), Moran's I spatial autocorrelation (Floodlines), Leaflet.js choropleth mapping" | Every tool named + a project |

---

## Part 6: The 30-Second Introduction

Three versions for different contexts. Calibrate to the room — not every situation requires all three pieces.

---

### Version A: Technical/Data Role Context

"I'm Bryan Johns — a data analyst and researcher based in Washington DC. My work focuses on public policy questions that have a data layer: how resources get allocated, whether programs reach the communities they're supposed to reach. My flagship project analyzed FEMA flood mitigation funding in Vermont and found that more than half of municipalities received nothing, with weak alignment between modeled community need and actual funding. I come from a background in environmental and international policy — two graduate degrees — which is how I got interested in the questions before I had the technical tools to answer them rigorously."

---

### Version B: Policy/Nonprofit Context

"I'm Bryan Johns. I'm in transition from a research and operations background into data analytics — specifically applied to environmental and development policy questions. I just completed a project analyzing whether FEMA's flood mitigation funding in Vermont reaches the communities most at risk. The short answer is: not really. More than half of municipalities got nothing, and the strongest predictor of funding was past insurance claims, not current vulnerability. I have graduate degrees from American University and the UN University for Peace in Costa Rica, and I've been building a technical portfolio to bring quantitative rigor to the kind of policy questions I studied in those programs."

---

### Version C: Casual/Networking Context

"I'm Bryan — I work in data analytics. I just finished a project looking at whether federal flood money in Vermont goes where flood risk actually is. Turns out, mostly no — over half of towns got nothing, and the program responds much more strongly to where floods have already happened than where they might happen next. I came up through environmental policy — I have graduate degrees in that area — and I'm now using the analytical side to work on questions I used to study only qualitatively."

---

### Notes on the 30-Second Introduction

- All three versions open with a specific finding, not a credential list — this is deliberate. Findings are more memorable than degrees.
- Adjust the Floodlines finding to your most recent or relevant project as the portfolio evolves.
- These are starting points for a conversation, not monologues. End with a question for the other person.
- If the specific finding isn't landing (wrong audience), switch to "I work on questions where resource allocation and equity intersect" — broader framing that still has substance.

---

## Part 7: Index and Update Procedure

### Master Document Index

| File | Location | Last Updated |
|---|---|---|
| evidence-bank.md | `resources/evidence-bank/evidence-bank.md` | October 2026 |
| question-bank.md | `resources/evidence-bank/question-bank.md` | October 2026 |
| playbook.md | `resources/evidence-bank/playbook.md` | October 2026 |

### When to Update These Documents

| Trigger | Action Required |
|---|---|
| New project completed | Add to evidence-bank Section 2; update Appendix A; update Part 2 employer targeting in playbook |
| New certification or training | Add to evidence-bank Section 5; update skills lists in playbook Part 1.2 |
| ASSERT–CONFIRM item confirmed | Update label from ASSERT–CONFIRM to VERIFIED in evidence-bank; update Appendix A |
| ASSERT–CONFIRM item found to be inaccurate | Remove or correct; do not retain inaccurate figures |
| Major interview question encountered that isn't in question-bank | Add to appropriate category in question-bank |
| Polished sample answer needs updating | Update in question-bank Polished Sample Answers section |
| New employer type targeted | Add a row to Part 2 of playbook |
| A before/after example becomes outdated | Update Part 4 of playbook |

### Annual Review Checklist

- [ ] Review all ASSERT–CONFIRM entries in evidence-bank Appendix A — confirm or remove
- [ ] Review all REQUIRES YOUR INPUT entries — supply the information or remove the placeholder
- [ ] Update the "last updated" date on all three documents
- [ ] Check that all project URLs still resolve correctly
- [ ] Check that polished sample answers in question-bank still reflect the current portfolio and framing
- [ ] Check that the 30-second introduction versions in playbook Part 6 reflect the current flagship project

### Adding New Evidence: Quick Reference

1. Capture facts immediately after the event
2. Label: VERIFIED / ASSERT–CONFIRM / REQUIRES YOUR INPUT
3. Extract quantifiable facts → add to Appendix A
4. Write strongest defensible wording (honest and precise)
5. Identify job family applications
6. Flag any unconfirmed items for follow-up
7. Connect to existing bank entries
8. Update Appendix A
9. Review annually
