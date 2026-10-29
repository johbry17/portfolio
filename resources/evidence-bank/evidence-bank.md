# Master Evidence Bank — Bryan C. Johns

> **Purpose:** A structured, honest inventory of every piece of career evidence available for job applications, interview preparation, and professional positioning.
>
> **Last updated:** October 2026

---

## Index

- [Labeling Conventions](#labeling-conventions)
- [Section 1: Technical Skills](#section-1-technical-skills)
- [Section 2: Analytical Projects & Accomplishments](#section-2-analytical-projects--accomplishments)
- [Section 3: Research Methods & Subject-Matter Expertise](#section-3-research-methods--subject-matter-expertise)
- [Section 4: Environmental Policy, Sustainable Development, Tourism, International Affairs](#section-4-environmental-policy-sustainable-development-tourism-international-affairs)
- [Section 5: Education and International Experience](#section-5-education-and-international-experience)
- [Section 6: Transferable Professional Skills](#section-6-transferable-professional-skills)
- [Section 7: Hospitality and Operational Experience](#section-7-hospitality-and-operational-experience)
- [Section 8: Communication, Writing, Visualization, Stakeholder Engagement](#section-8-communication-writing-visualization-stakeholder-engagement)
- [Section 9: Problem-Solving, Learning Under Pressure, and Judgment Examples](#section-9-problem-solving-learning-under-pressure-and-judgment-examples)
- [Appendix A: Quantifiable Facts Table](#appendix-a-quantifiable-facts-table)
- [Appendix B: Procedure for Adding New Evidence](#appendix-b-procedure-for-adding-new-evidence)

---

## Labeling Conventions

| Label | Meaning |
|---|---|
| **VERIFIED** | Directly documented in a project README, CV, published thesis, or other primary source. Can be cited as-is. |
| **ASSERT – CONFIRM** | Stated by Bryan as his own account; plausible but not independently documented. Confirm with records or recollection before using in interviews or applications. |
| **REQUIRES YOUR INPUT** | Information not present in any source; must be supplied by Bryan before this entry can be used. |
| **UNAVAILABLE** | Fact that would be valuable but was not captured and may not be recoverable. |

---

## Section 1: Technical Skills

### 1.1 Programming Languages

| Skill | Evidence | Strongest Defensible Wording | Applications | Caveats |
|---|---|---|---|---|
| **Python** | Used as primary language across Floodlines, Capital Crashpad, Salifort, Walk to Mordor, Waypoints, Utilities-313, Red-Light-Green-Light | "Python (primary language across 7+ projects: ETL pipelines, ML modeling, GIS analysis, Flask/Django web apps)" | All data analyst, research analyst, data science, policy analyst roles | Do not claim expert-level; proficiency demonstrated by delivered output, not certifications |
| **R** | Used for Cyclistic Analytics; tools include tidyverse, sf, ggspatial, leaflet, R Markdown | "R (Cyclistic Analytics capstone: bikeshare EDA, spatial analysis, R Markdown reporting)" | Research analyst, academic-adjacent, environmental policy | Two-year analysis; not used as primary language across portfolio |
| **SQL** | Listed on CV; PostgreSQL used in Capital Crashpad | "SQL / PostgreSQL (Capital Crashpad longitudinal panel database design)" | Data analyst, business intelligence, backend-adjacent | Depth of SQL use beyond Capital Crashpad is not documented in READMEs |
| **JavaScript** | D3.js and Leaflet.js used in Floodlines, Capital Crashpad, Walk to Mordor, Utilities-313 | "JavaScript (D3.js interactive visualizations, Leaflet.js choropleth and route maps)" | Data visualization, front-end-adjacent, web analytics | Not full-stack JS; used for visualization layer specifically |

### 1.2 Data Visualization

**VERIFIED.** Tools documented in project READMEs.

- **Python:** Matplotlib, Seaborn, Plotly
- **R:** ggplot2
- **JavaScript:** D3.js (custom interactive charts), Leaflet.js (interactive maps with choropleth, quadrant, scatter layers)
- **BI:** Tableau (listed on CV; no portfolio project uses Tableau as primary tool — **REQUIRES YOUR INPUT** to cite a specific example)

**Strongest defensible wording:** "End-to-end visualization pipeline: Python EDA (Matplotlib/Seaborn/Plotly) → interactive public dashboards (D3.js, Leaflet.js); R spatial visualization (ggplot2, ggspatial)."

**Potential applications:** Any role requiring data communication to nontechnical audiences; public policy visualization; dashboarding.

**Limitations:** Tableau usage is not demonstrated in portfolio projects currently live. Cannot claim Tableau proficiency from the CV entry alone without a specific example.

### 1.3 Machine Learning and Statistical Modeling

**VERIFIED** from Salifort README and Floodlines README.

| Technique | Evidence | Where |
|---|---|---|
| Logistic Regression | Predicting funding access (Floodlines); baseline comparison model (Salifort) | Floodlines, Salifort |
| Decision Tree | Model comparison (Salifort) | Salifort |
| Random Forest | Model comparison (Salifort) | Salifort |
| XGBoost | Best model (Salifort): ROC AUC 0.982, F₂ 0.925 | Salifort |
| SHAP | Interpretability for all 4 models (Salifort) | Salifort |
| OLS Regression | Predicting funding amounts (Floodlines) | Floodlines |
| Composite index / sensitivity analysis | 20+ model specs, LOVO, weight perturbation, normalization comparison | Floodlines |
| Spatial autocorrelation (Moran's I) | Clustering analysis for need index vs. funding | Floodlines |
| GridSearchCV / RandomizedSearchCV | Hyperparameter tuning (Salifort) | Salifort |
| Stratified K-Fold CV | Cross-validation (Salifort) | Salifort |
| CNN image classification | Road sign classification (GTSRB) | Red-Light-Green-Light |
| TensorFlow/Keras | Model building and training | Red-Light-Green-Light |
| scikit-learn Pipeline | Used throughout Salifort | Salifort |

**Strongest defensible wording:** "Applied supervised ML (logistic regression, decision trees, random forest, XGBoost) and deep learning (CNN with TensorFlow/Keras); used SHAP for model interpretability; evaluated models against domain-appropriate metrics (F₂ score for imbalanced churn dataset)."

**Potential applications:** Data science, ML engineering, research analyst, quantitative policy analysis.

**Limitations:** All ML work is on public/synthetic/open datasets. No production deployment is documented. Do not claim ML engineering experience.

### 1.4 Geospatial Analysis

**VERIFIED** from Floodlines and Cyclistic README.

- Python: GeoPandas, GeoJSON processing, FEMA/Census spatial data
- R: sf, ggspatial, Leaflet (interactive maps)
- JavaScript: Leaflet.js, D3.js, SVG route geometry (Walk to Mordor)

**Strongest defensible wording:** "Geospatial data processing and visualization (GeoPandas, sf); interactive choropleth mapping (Leaflet.js); spatial autocorrelation (Moran's I); integration of GIS, Census, and administrative data at municipal level."

### 1.5 Data Engineering and ETL

**VERIFIED** from Floodlines and Utilities-313 READMEs.

- Reproducible ETL pipeline: OpenFEMA API, Census ACS API, NFIP, NRI → integrated GIS dataset
- Automated build pipeline: Google Sheets → CSV → EDA HTML with injected metadata (Utilities-313)
- Google Sheets → Python (UUID assignment, geocoding, GeoJSON generation) → static files (Waypoints)

**Strongest defensible wording:** "Built reproducible, multi-source ETL pipelines integrating government APIs (OpenFEMA, Census ACS), GIS data, and administrative records; automated reporting pipelines (single-command build from raw source to published output)."

### 1.6 Web Development

**VERIFIED** from READMEs.

- Flask and Django backends documented (Capital Crashpad: legacy versions archived; Walk to Mordor)
- REST API consumption documented (Floodlines, Waypoints)
- GitHub Pages deployment (Floodlines interactive dashboard)
- BeautifulSoup: listed on CV; no current README example — **REQUIRES YOUR INPUT**

---

## Section 2: Analytical Projects & Accomplishments

### Project 1: Floodlines — Vermont Flood Mitigation Analysis

**VERIFIED.** Flagship project. URL: informedwanderer.com/workshop/floodlines

#### 1. Problem / Question / Responsibility
Does federal FEMA Hazard Mitigation Assistance (HMA) funding align with actual flood risk and community vulnerability across Vermont's 250+ municipalities? Fully independent project; Bryan is sole owner of all design, analysis, and communication decisions.

#### 2. Specific Contribution and Ownership Level
100% independent. All decisions — research question, data acquisition, methodology, index design, model selection, sensitivity analysis, visualization, published dashboard, narrative article, technical appendix — made by Bryan alone.

#### 3. Tools, Methods, Domain Knowledge
- **Python, GeoPandas, Leaflet.js, D3.js**
- **APIs:** OpenFEMA API, Census ACS API
- **Data:** NFIP (National Flood Insurance Program), FEMA National Risk Index, GIS flood zone and river corridor data
- **Methods:** ETL pipeline design, composite index construction, rank-based normalization, z-score normalization, LOVO sensitivity analysis, weight perturbation, Moran's I spatial autocorrelation, logistic regression, OLS regression, Spearman correlation
- **Domain:** FEMA Hazard Mitigation Assistance programs, Social Vulnerability (poverty, age, vehicle access via ACS), flood insurance economics, inflation adjustment

#### 4. Scale and Scope
- **250+ Vermont municipalities** analyzed
- **Multiple datasets** integrated from government APIs and GIS sources
- **20+ model specifications** tested across two normalization methods
- Inflation adjustment of all HMA funding to 2025 dollars
- Interactive public dashboard with choropleth maps, quadrant maps, scatter plots, model switcher, town detail panel, and narrative guided tour

#### 5. Findings and Outputs
- **>52% of Vermont municipalities received NO FEMA HMA funding** (VERIFIED)
- **Spearman correlation of need index vs. funding: ~0.10–0.30** across model specifications (weak — system is not allocating based on modeled need) (VERIFIED)
- **Spearman correlation of past insured claims vs. funding: ~0.55** (strong — system is reactive, not proactive) (VERIFIED)
- Finding robust across 20+ model specifications (rank-vs-z-score correlation: 0.89–1.00) (VERIFIED)
- **Logistic regression AUC ~0.70** for predicting whether a town receives any funding (VERIFIED)
- **OLS regression R² ≈ 0** for predicting funding amounts — structural funding model cannot explain amount variation (VERIFIED)
- Modeled need shows significant spatial clustering (Moran's I); funding does not (VERIFIED)
- Published: interactive dashboard (GitHub Pages), technical appendix, narrative article

#### 6. Analytical Judgment, Validation, Trade-offs, Limitations
- Explicitly designed to test robustness: 20+ model specs, two normalization methods, LOVO, weight perturbation
- AUC 0.70 and R² ≈ 0 are honest presentations of model limitations — Bryan did not overstate predictive power
- Observational design: causality cannot be attributed
- Composite index design inherently involves value choices (variable weights) — this is documented and tested, not hidden

#### 7. Communication, Initiative, Problem-Solving
- Fully self-directed from problem framing through publication
- Built public-facing dashboard with narrative guided tour (designed for non-expert audiences)
- Wrote narrative article AND technical appendix (dual-audience communication)
- Project required synthesizing multiple government data programs (FEMA HMA, NFIP, NRI, ACS) — no single combined dataset existed

#### 8. Job Family Relevance
Policy analyst, research analyst, data analyst, federal/state government analyst, environmental data analyst, public interest data roles, program evaluation roles

#### 9. Likely Employer Questions This Answers
- "Do you have experience with government data?"
- "Can you design and execute an independent research project?"
- "How do you handle data quality and robustness concerns?"
- "Can you present technical findings to a nontechnical audience?"
- "Give me an example of a project you drove from start to finish."

#### 10. Missing Details Worth Recovering
- What were the specific ACS variables selected for the vulnerability index and why? (methodological depth question)
- Were there any organizations or stakeholders in Vermont engaged with or aware of this work?
- Did this project receive any recognition, shares, or citations? (**REQUIRES YOUR INPUT**)
- How long did the project take from start to publication? (**REQUIRES YOUR INPUT**)

---

### Project 2: Capital Crashpad — DC Airbnb Analysis

**VERIFIED.** URL: informedwanderer.com/workshop/capital-crashpad

#### 1. Problem / Question / Responsibility
How did Washington DC's Airbnb market change following Airbnb's 2024 platform-wide verification and quality enforcement expansion? Fully independent project; Bryan is sole owner.

#### 2. Specific Contribution and Ownership Level
100% independent. Longitudinal panel design; Bryan collected 11 quarterly snapshots from Inside Airbnb (Q2 2023 – Q2 2026).

#### 3. Tools, Methods, Domain Knowledge
- **Python, PostgreSQL, Leaflet.js**
- **Data:** Inside Airbnb quarterly snapshots
- **Methods:** Longitudinal panel analysis, market structure analysis, revenue proxy estimation, geographic distribution analysis
- **Domain:** Short-term rental (STR) market dynamics, DC STR licensing law (30-night threshold), Airbnb platform enforcement mechanisms

#### 4. Scale and Scope
- **11 quarterly snapshots**, Q2 2023 – Q2 2026
- DC-wide geographic coverage (nearly every neighborhood)
- Longitudinal panel design (not a one-time snapshot)

#### 5. Findings and Outputs
- **~1,800 listings disappeared at Q2 2024** (~26% decline, from ~6,700 to ~4,900) — consistent with Airbnb's reported 200,000+ national removals (VERIFIED)
- **~1,200 of the ~1,800 decline = 31+ night minimum-stay listings**, aligning with DC's 30-night STR threshold (VERIFIED)
- Share of licensed listings increased post-contraction (VERIFIED)
- Revenue per listing declined, most sharply for 31+ night listings (VERIFIED)
- Revenue concentration among top hosts was unchanged — market shrank and became more licensed but did not democratize (VERIFIED)
- Decline was geographically broad (nearly every DC neighborhood) (VERIFIED)

#### 6. Analytical Judgment, Validation, Trade-offs, Limitations
- Explicitly documented as observational, not causal
- Revenue metric is an upper-bound proxy (price × (365 - availability)) — stated explicitly
- "Likely commercial" classification is a heuristic — stated explicitly
- Design caveats are documented in the README, not buried or omitted

#### 7. Communication, Initiative, Problem-Solving
- Self-directed longitudinal tracking — Bryan collected each quarterly snapshot over 3+ years
- Active development; project evolves as new data becomes available
- Flask and Django versions were built and then deliberately archived (iteration and judgment documented)

#### 8. Job Family Relevance
Market research analyst, policy analyst, housing/real estate analyst, urban data analyst, government compliance/regulatory analyst

#### 9. Likely Employer Questions This Answers
- "Can you work with longitudinal data?"
- "How do you handle methodological limitations in your analysis?"
- "Can you connect data findings to real-world policy or market mechanisms?"

#### 10. Missing Details Worth Recovering
- Were any specific policy recommendations developed or published? (**REQUIRES YOUR INPUT**)
- Any engagement with DC policy audiences, journalists, or housing advocates? (**REQUIRES YOUR INPUT**)

---

### Project 3: Classified: At Risk — Salifort Employee Churn

**VERIFIED.** Google Advanced Data Analytics Capstone. URL: informedwanderer.com/workshop/salifort-employee-churn

#### 1. Problem / Question / Responsibility
Predict employee attrition for a fictional automaker (synthetic dataset) using ML classification; select a business-appropriate performance metric; provide actionable retention recommendations.

#### 2. Specific Contribution and Ownership Level
Independent capstone project. Bryan made all modeling, metric, and communication decisions. Dataset and scenario provided by Google/Coursera.

#### 3. Tools, Methods, Domain Knowledge
- **Python, scikit-learn, XGBoost, SHAP**
- scikit-learn Pipeline objects used throughout
- **Methods:** Logistic Regression, Decision Tree, Random Forest, XGBoost; GridSearchCV and RandomizedSearchCV; stratified K-Fold CV; SHAP feature importance; class imbalance handling; custom metric selection (F₂ score)
- **Domain:** HR analytics, employee retention, feature importance for business decision-making

#### 4. Scale and Scope
- 14,999 raw records; 3,008 duplicates removed → **11,991 records** analyzed
- 17% attrition rate (imbalanced classification)
- All 4 models compared with held-out test set evaluation

#### 5. Findings and Outputs
**Best model (XGBoost, holdout test set — VERIFIED):**
- Recall: **0.940** (374 of 398 true leavers identified; 24 false negatives)
- Precision: **0.872** (55 false positives)
- F₂ Score: **0.925**
- F₁ Score: **0.904**
- Accuracy: **0.967**
- PR AUC: **0.967**
- ROC AUC: **0.982**

Key findings from SHAP: satisfaction_level + tenure ≈ 83–84% of feature importance across tree models; bimodal attrition pattern (burnout vs. disengaged groups); critical retention window at 4–5 year tenure; every employee with 7 projects left (VERIFIED)

#### 6. Analytical Judgment, Validation, Trade-offs, Limitations
- Explicitly chose F₂ score over accuracy/F₁ — justified by business context (cost of missing a leaver > cost of false flag)
- Dataset is synthetic/fictional — acknowledged; findings cannot be extrapolated to real organizations
- Used Pipeline objects for reproducibility and to prevent data leakage
- All 4 models compared, not just the winner
- SHAP used for all models, not just the best performer

#### 7. Communication, Initiative, Problem-Solving
- Demonstrated metric judgment (F₂ rationale) — shows business thinking, not just technical skill
- Results presented in context of actionable retention recommendations

#### 8. Job Family Relevance
Data scientist, HR analytics, business intelligence analyst, operations analyst, any role involving predictive modeling on people/process data

#### 9. Likely Employer Questions This Answers
- "Have you worked with imbalanced classification problems?"
- "How do you choose an evaluation metric?"
- "Can you explain SHAP values to a nontechnical audience?"

#### 10. Missing Details Worth Recovering
- What were the specific retention recommendations made? (**REQUIRES YOUR INPUT** — likely recoverable from the project notebook)
- Was a confusion matrix interpretation written up for a business audience? (**REQUIRES YOUR INPUT**)

---

### Project 4: Walk to Mordor — Personal Data Storytelling

**VERIFIED.** Repo: github.com/johbry17/Walk-to-Mordor

#### 1. Problem / Question / Responsibility
Track personal walking challenges against Tolkien geography using a dual-timeline system; visualize journey position on an interactive Tolkien map in real time.

#### 2. Specific Contribution and Ownership Level
Fully independent and personally motivated. Bryan designed the dual-timeline architecture, reconstructed Tolkien movement chronology from primary text, hand-traced SVG route geometry, and implemented all technical components.

#### 3. Tools, Methods, Domain Knowledge
- **Python, Flask/Django, D3.js, custom Shire Calendar implementation**
- 331 GeoJSON route files; hand-traced SVG geometry
- Dual-clock architecture: My Time (real dates) and Middle-earth Time (Shire Calendar from Tolkien chronology) — both resolve to the same map output via journey_id + cumulative_miles → SVG position

#### 4. Scale and Scope
- **5,196 total miles walked** over 806 calendar days (Mar 2024 – Jun 2026) (VERIFIED)
- Three challenges completed: Walk to Mordor (1,815 mi), Return of the King (1,482 mi), The Hobbit (1,100 mi)
- All three challenges exceeded Conqueror targets (VERIFIED)
- 4,465 challenge miles over 628 active days (VERIFIED)

#### 5. Findings and Outputs
Interactive visualization: D3.js rendering, Shire Calendar implementation, dual-clock map position system

#### 6. Analytical Judgment
Engineering challenge was real: mapping two incompatible time systems to a single coordinate output required designing an abstraction layer (journey_id + cumulative_miles). This is a genuine architectural problem, not a cosmetic exercise.

#### 7. Communication, Initiative, Problem-Solving
Demonstrates: initiative (self-directed, personal motivation), creative problem-solving, sustained execution over 800+ days, ability to translate a complex narrative domain (Tolkien chronology) into a formal data model.

#### 8. Job Family Relevance
Shows character, persistence, and personal storytelling — valuable in any interview. Technical depth (SVG geometry, custom calendar, dual-clock architecture) is relevant for data visualization roles.

#### 9. Likely Employer Questions This Answers
- "Tell me about a project you worked on outside of school/work."
- "What does 'data storytelling' mean to you?"

---

### Project 5: Waypoints — Personal Biogeography

**VERIFIED.** In active development. Repo: github.com/johbry17/Waypoints

#### Summary
Interactive map of 47 major life waypoints and 327 routes across 5 transport modes and 35 activity types. Pipeline: Google Sheets → Python (UUID assignment, geocoding, GeoJSON generation) → Leaflet.js. Six basemap options; Shepherd.js guided tour; responsive mobile layout.

**Evidence value:** Demonstrates pipeline design (Sheets → Python → GeoJSON → Leaflet), data modeling for personal narrative, and ongoing development discipline.

---

### Project 6: Utilities-313 — Personal Dashboard

**VERIFIED.** Repo: github.com/johbry17/utilities-313

Automated household utility data pipeline: single command (Google Sheets → CSV → EDA HTML with injected metadata). Tools: Python, Pandas, D3.js, Plotly.js, Google Sheets API, Bootstrap.

**Evidence value:** Demonstrates automation thinking — built a production-quality pipeline for personal use.

---

### Project 7: Cyclistic Analytics — Google Data Analytics Capstone (R)

**VERIFIED.** Repo: github.com/johbry17/Cyclistic-Analytics

Bikeshare ridership analysis (Divvy data, Chicago). Two years analyzed: 2019 and 2024. Casual rider vs. member behavior comparison. Strategic recommendations for member conversion. Interactive Leaflet maps, ggplot2 visualizations, R Markdown reports.

**Evidence value:** R proficiency; spatial analysis; business recommendation framing; capstone for the Google Data Analytics Certificate.

---

### Project 8: Red-Light-Green-Light — CS50 AI Capstone

**VERIFIED.** Repo: github.com/johbry17/Red-Light-Green-Light

CNN image classification of German road signs (GTSRB dataset). End-to-end pipeline: preprocessing, augmentation, model building, training/validation/testing, confusion matrix, misclassification analysis. Tools: Python, TensorFlow/Keras.

**Evidence value:** Demonstrates deep learning capability (CNN, TensorFlow/Keras); CS50 AI capstone.

---

## Section 3: Research Methods & Subject-Matter Expertise

### 3.1 Quantitative Methods (VERIFIED from projects and coursework)

- Composite index construction with sensitivity analysis (LOVO, weight perturbation)
- Rank-based and z-score normalization comparison
- Spearman correlation analysis
- Logistic regression (binary classification)
- OLS regression (continuous outcome)
- Spatial autocorrelation (Moran's I)
- Supervised machine learning (LR, DT, RF, XGBoost)
- Cross-validation (stratified K-Fold)
- Hyperparameter tuning (GridSearchCV, RandomizedSearchCV)
- Metric selection for imbalanced classification (F₂, PR AUC, ROC AUC)
- Longitudinal panel design (Capital Crashpad)
- Revenue proxy construction with stated upper-bound limitations

### 3.2 Qualitative Methods (VERIFIED from AU coursework)

- Logic models and program evaluation frameworks (Project & Program Evaluation course)
- Developmental evaluation
- Key informant interviewing
- Focus groups
- Participatory Learning and Action (PLA/PRA)
- Appreciative inquiry
- Qualitative interviewing design and tools (Research Tools for Qualitative Interviewing course)
- Formal research proposal design (UPeace Research Methods course)

### 3.3 Policy Analysis Methods (VERIFIED from AU coursework)

- Risk assessment and comparative risk assessment
- Cost-benefit analysis (CBA)
- Trend assessment
- Critical literacy in policy-analytic techniques (Policy Analysis for Global Environmental Politics — described as "gold" course)

### 3.4 Graduate-Level Research (VERIFIED — published thesis)

- Independent research design and execution to graduate-school standard
- Comparative case analysis (Costa Rica PES vs. REDD+)
- Environmental economics valuation frameworks
- Published SRP: "PES and REDD+: The Case of Costa Rica" — listed under Publications in CV
- URL: https://www.american.edu/sis/gep/upload/johns_bryan_srp-the-big-kahuna.pdf

---

## Section 4: Environmental Policy, Sustainable Development, Tourism, International Affairs

### 4.1 Climate and Carbon Policy (VERIFIED from AU/UPeace coursework)

- UNFCCC architecture, Kyoto Protocol, carbon markets, CDM, REDD+
- Copenhagen/Cancun outcomes; climate finance mechanisms
- Indigenous rights and equity dimensions of carbon markets
- Costa Rica case study (PES program, FONAFIFO history)
- PES (Payments for Ecosystem Services): design, political economy, incentive structures

### 4.2 Conservation and Development (VERIFIED from UPeace coursework)

- Fortress conservation vs. participatory approaches
- Common-pool resources (Ostrom)
- Adaptive management
- Monteverde case study
- Participatory development frameworks
- Forests, forestry, and poverty linkages
- Indigenous Peoples' Rights Law (international law dimension)

### 4.3 International Development Economics (VERIFIED from AU coursework)

- Washington Consensus critique; structural adjustment programs
- Dependency theory; post-development critique (Esteva)
- Sachs, Easterly, Sen, Collier, Moyo frameworks
- Human Development Index (HDI); capabilities approach (Sen/Nussbaum)
- Microfinance: evidence base, critiques
- Aid effectiveness debates (ODA, conditionality)

### 4.4 Environmental Economics (VERIFIED from AU coursework using Tietenberg)

- Environmental valuation methods (contingent valuation, hedonic pricing, travel cost)
- Externalities and market failure
- Natural resource management (energy, water, agriculture, forests, fisheries)
- Air pollution economics
- Waste economics
- EU ETS analysis (undergraduate)

### 4.5 Future Research Interests (VERIFIED as stated interests, not current portfolio)

Bryan has documented research interest and background knowledge in:
- SIDS tourism economics
- ODA/development finance (OECD CRS)
- World Bank project analysis
- Costa Rica development trajectory
- USVI tourism and hurricane recovery
- Caribbean/Pacific development

> **NOTE:** These are potential future analytical directions, not current portfolio projects. Do not cite as accomplishments.

---

## Section 5: Education and International Experience

### 5.1 Formal Degrees (VERIFIED from CV)

| Degree | Institution | Notes |
|---|---|---|
| M.A. International Affairs | American University, Washington DC | Dual-degree program |
| M.A. Natural Resources & Sustainable Development | UN University for Peace, Costa Rica | UN-mandated institution; dual-degree with AU |
| B.A. International Development | Evergreen State College, WA | Study abroad: India (Jaipur) |

### 5.2 Technical Training (VERIFIED from CV)

| Program | Institution | Capstone |
|---|---|---|
| GWU Data Analytics Boot Camp | George Washington University | — |
| Google Advanced Data Analytics Certificate | Coursera | Salifort (employee churn) |
| Statistical Learning | ISLP – Stanford curriculum | — |
| CS50x: Introduction to Computer Science | HarvardX | Harvest-Party |
| CS50 AI: Intro to AI with Python | HarvardX | Red-Light-Green-Light |
| Google Data Analytics Certificate | Coursera | Cyclistic Analytics |

### 5.3 International Experience (VERIFIED and ASSERT–CONFIRM)

| Experience | Location | Evidence Level |
|---|---|---|
| One year of graduate study | Costa Rica (UPeace, Osa Peninsula) | VERIFIED |
| Study abroad: International Development fieldwork | India (Jaipur and rural villages) | VERIFIED — program documented |
| Internship: Rupayan Sansthan (folk instrument research) | India | ASSERT – CONFIRM (own account) |
| Internship: Sukshma Vikas Sansthan (watershed management) | India | ASSERT – CONFIRM (own account) |
| Environmental education project at local library | Puerto Jimenez, Costa Rica | ASSERT – CONFIRM (own account) |
| Observation of conservation/sustainable tourism operations | Osa Peninsula, Costa Rica | ASSERT – CONFIRM (own account) |

**Strongest defensible wording (VERIFIED portion):** "Graduate study at a UN-mandated institution in Costa Rica with an internationally diverse student body; academic fieldwork in Rajasthan, India."

**Strongest defensible wording (ASSERT portion, pending confirmation):** "Interned with NGOs in Rajasthan supporting rural watershed management and cultural documentation [ASSERT – confirm with records/recollection]."

---

## Section 6: Transferable Professional Skills

### 6.1 Independent Project Management
**VERIFIED** by portfolio. Floodlines and Capital Crashpad were designed, executed, and published entirely by Bryan. No supervisor, team, or deadline imposed. This requires self-direction, problem framing, quality judgment, and follow-through.

**Defensible wording:** "Designed and executed multiple independent analytical projects from problem framing to published output."

### 6.2 Longitudinal Discipline
**VERIFIED** by Capital Crashpad (11 quarterly snapshots collected over 3+ years) and Walk to Mordor (806 calendar days of data collection). These are not one-shot analyses.

### 6.3 Audience-Aware Communication (Dual Register)
**VERIFIED** by Floodlines: Bryan wrote both a narrative article (general audience) and a technical appendix (expert audience) for the same project. This demonstrates deliberate audience analysis.

### 6.4 Methodological Transparency and Honesty
**VERIFIED** by explicit caveats in multiple READMEs: Capital Crashpad explicitly documents its observational design, revenue proxy as upper-bound estimate, and heuristic classifications. Floodlines explicitly states AUC and R² results without overstating predictive power. This is an evidence-based character signal, not just a skill claim.

### 6.5 Learning Velocity and Self-Directed Skill Acquisition
**VERIFIED** structurally: Bryan completed GWU Bootcamp, Google Advanced Data Analytics, Statistical Learning (ISLP), CS50x, CS50 AI, and Google Data Analytics, and built a portfolio of 8 projects. The breadth and depth of this self-directed curriculum is documented.

---

## Section 7: Hospitality and Operational Experience

### 7.1 Core Role (VERIFIED from CV)

**Supervisor and Lead Bartender — Tonic Restaurant LLC, Washington DC (2012–Present)**

**VERIFIED facts:**
- Supervisor and Lead Bartender title
- Washington DC location
- 2012–Present duration (~14 years at time of writing)
- Operational responsibility for teams of up to 20

**ASSERT – CONFIRM facts (Bryan's own account; confirm before citing as metrics):**
- Nightly revenue up to $25,000 [ASSERT – confirm with records]
- 25% slow-night revenue growth — identified underperforming time slot, designed community event, built operational habits to sustain [ASSERT – confirm]
- 25% staffing cost reduction — adjusted scheduling practices [ASSERT – confirm; CV does not specify whether this is dollars or headcount; clarify before using]
- Trained and mentored new staff; rebuilt team post-COVID [ASSERT – confirm scope and outcome]

### 7.2 Transferable Signals from Hospitality

| Signal | Evidence | Application |
|---|---|---|
| High-pressure real-time judgment | Fast-paced, high-stakes operational environment | Project management, operational roles |
| Team supervision | Teams of up to 20 | Management-track positions |
| Revenue accountability | Nightly revenue up to $25,000 [ASSERT] | Operations, business analyst roles |
| Process improvement | Two 25% improvements [ASSERT – confirm] | Operations, consulting |
| Staff development | Training and mentorship | People-management roles |
| Continuity and reliability | 14 years at same employer | Shows consistency; rebuts "job hopper" concerns |

### 7.3 Limitations / Caveats
The hospitality experience is operationally substantial and long-tenured, but it is not directly connected to Bryan's target data/analytics roles. Use it primarily to demonstrate: supervision, judgment under pressure, reliability, operational improvement, and business acumen. Do not oversell as "data analysis experience" unless a concrete data-driven decision can be documented with specifics.

---

## Section 8: Communication, Writing, Visualization, Stakeholder Engagement

### 8.1 Technical Writing
- Published technical appendix (Floodlines) — describes methodology for expert audience
- Published SRP thesis: "PES and REDD+: The Case of Costa Rica" — AU SIS publication
- Project READMEs: all projects have documented, structured READMEs with methodology, findings, and caveats

### 8.2 Public/Narrative Writing
- Published narrative article (Floodlines) — designed for general public
- Personal branding statement: "Data Storyteller & Analyst — Bridging Data, People, and Purpose"

### 8.3 Data Visualization for Communication
- Interactive public dashboards with guided narrative tours (Floodlines: choropleth, quadrant map, model switcher, town detail panel, narrative tour)
- Dual-audience design: expert technical appendix + accessible narrative article

### 8.4 Stakeholder Engagement (ASSERT – CONFIRM)
- Key informant interviewing and focus group methods studied formally (AU coursework)
- Field visits to conservation/tourism organizations in Costa Rica [ASSERT]
- [No documented formal stakeholder engagement for the data portfolio projects — **REQUIRES YOUR INPUT** if any occurred]

---

## Section 9: Problem-Solving, Learning Under Pressure, and Judgment Examples

### 9.1 "The dual-timeline architecture" (Walk to Mordor)
**Situation:** Two incompatible time systems (real calendar and Tolkien's Shire Calendar) needed to resolve to the same map position.
**What Bryan did:** Designed an abstraction layer (journey_id + cumulative_miles → SVG position) that allows both clocks to drive the same output.
**Judgment demonstrated:** Identified the core architectural problem, designed a formal data model solution, and executed it rather than using a workaround.
*Useful for:* "Tell me about a technical challenge you solved" questions.

### 9.2 "20+ model specifications" (Floodlines)
**Situation:** Any single composite index for flood risk could be criticized for arbitrary weight choices.
**What Bryan did:** Tested 20+ model specifications across two normalization methods and performed LOVO and weight perturbation sensitivity analysis. Reported the range of results (Spearman r ~0.10–0.30) rather than cherry-picking the best correlation.
**Judgment demonstrated:** Methodological rigor, intellectual honesty, robustness-first design.
*Useful for:* "How do you handle uncertainty in your analysis?" and "How do you know your results are valid?"

### 9.3 "Choosing F₂ over accuracy" (Salifort)
**Situation:** Imbalanced classification dataset (17% attrition). Default accuracy of ~83% achievable by predicting "no one leaves."
**What Bryan did:** Selected F₂ score as primary metric — explicitly justified by the asymmetric business cost of missing a true leaver vs. a false alarm.
**Judgment demonstrated:** Business thinking applied to metric selection; refuses to use misleading defaults.
*Useful for:* "How do you approach a modeling problem?" and "Tell me about a time you had to make a judgment call."

### 9.4 "Documenting caveats before being asked" (Capital Crashpad)
**Situation:** Revenue metric is an upper-bound proxy, not actual revenue. "Likely commercial" classification is a heuristic.
**What Bryan did:** Explicitly documented both limitations in the README without being asked or required to.
**Judgment demonstrated:** Proactive methodological transparency; trustworthiness as an analyst.
*Useful for:* Any question about analytical limitations or integrity.

### 9.5 "Rebuilding the team post-COVID" (Tonic, ASSERT – CONFIRM)
**Situation:** [ASSERT – confirm details] Post-pandemic staff rebuilding.
**What Bryan did:** [ASSERT – confirm scope and outcome before citing]
**Judgment demonstrated (pending confirmation):** Leadership in organizational disruption.

---

## Appendix A: Quantifiable Facts Table

| # | Fact | Label | Source / How to Verify |
|---|---|---|---|
| 1 | >52% of Vermont municipalities received NO FEMA HMA funding | **VERIFIED** | Floodlines README |
| 2 | Spearman r (need index vs. funding): ~0.10–0.30 across model specs | **VERIFIED** | Floodlines README |
| 3 | Spearman r (past insured claims vs. funding): ~0.55 | **VERIFIED** | Floodlines README |
| 4 | 20+ model specifications tested | **VERIFIED** | Floodlines README |
| 5 | Rank-vs-z-score correlation: 0.89–1.00 (robustness check) | **VERIFIED** | Floodlines README |
| 6 | Logistic regression AUC ~0.70 (funding access prediction) | **VERIFIED** | Floodlines README |
| 7 | OLS regression R² ≈ 0 (funding amount prediction) | **VERIFIED** | Floodlines README |
| 8 | 250+ Vermont municipalities analyzed | **VERIFIED** | Floodlines README |
| 9 | ~1,800 DC Airbnb listings disappeared at Q2 2024 (~26% decline) | **VERIFIED** | Capital Crashpad README |
| 10 | ~6,700 → ~4,900 DC listings (Q2 2024 contraction) | **VERIFIED** | Capital Crashpad README |
| 11 | ~1,200 of the ~1,800 decline = 31+ night minimum-stay listings | **VERIFIED** | Capital Crashpad README |
| 12 | 11 quarterly snapshots analyzed (Q2 2023 – Q2 2026) | **VERIFIED** | Capital Crashpad README |
| 13 | XGBoost recall: 0.940 (Salifort holdout) | **VERIFIED** | Salifort README |
| 14 | XGBoost precision: 0.872 (Salifort holdout) | **VERIFIED** | Salifort README |
| 15 | XGBoost F₂: 0.925 (Salifort holdout) | **VERIFIED** | Salifort README |
| 16 | XGBoost ROC AUC: 0.982 (Salifort holdout) | **VERIFIED** | Salifort README |
| 17 | XGBoost PR AUC: 0.967 (Salifort holdout) | **VERIFIED** | Salifort README |
| 18 | 11,991 records analyzed after deduplication (Salifort) | **VERIFIED** | Salifort README |
| 19 | 3,008 duplicates removed (Salifort) | **VERIFIED** | Salifort README |
| 20 | 17% attrition rate (Salifort dataset) | **VERIFIED** | Salifort README |
| 21 | satisfaction_level + tenure ≈ 83–84% of feature importance (SHAP, Salifort) | **VERIFIED** | Salifort README |
| 22 | 5,196 total miles walked (Walk to Mordor, Mar 2024 – Jun 2026) | **VERIFIED** | Walk to Mordor README |
| 23 | 806 calendar days of data collection (Walk to Mordor) | **VERIFIED** | Walk to Mordor README |
| 24 | 4,465 challenge miles over 628 active days | **VERIFIED** | Walk to Mordor README |
| 25 | 331 GeoJSON route files (Walk to Mordor) | **VERIFIED** | Walk to Mordor README |
| 26 | 47 major life waypoints (Waypoints) | **VERIFIED** | Waypoints README |
| 27 | 327 routes, 5 transport modes, 35 activity types (Waypoints) | **VERIFIED** | Waypoints README |
| 28 | Teams of up to 20 supervised (Tonic) | **VERIFIED** | CV |
| 29 | 2012–Present at Tonic (~14 years) | **VERIFIED** | CV |
| 30 | Nightly revenue up to $25,000 (Tonic) | **ASSERT – CONFIRM** | Confirm with records; CV entry |
| 31 | 25% slow-night revenue growth (Tonic) | **ASSERT – CONFIRM** | Confirm with records; CV entry |
| 32 | 25% staffing cost reduction (Tonic; unit unclear — $ or headcount) | **ASSERT – CONFIRM** | Confirm and clarify unit before citing |
| 33 | 8 portfolio projects completed and published | **VERIFIED** | Portfolio at informedwanderer.com |
| 34 | 6 technical training programs / certificates completed | **VERIFIED** | CV |
| 35 | Dual master's degrees (AU + UPeace) | **VERIFIED** | CV |
| 36 | Published graduate thesis (AU SIS) | **VERIFIED** | AU SIS URL in CV |
| 37 | All 3 Tolkien walking challenges exceeded Conqueror targets | **VERIFIED** | Walk to Mordor README |
| 38 | Every employee with 7 projects left (Salifort finding) | **VERIFIED** | Salifort README |
| 39 | Critical retention window at 4–5 year tenure (Salifort) | **VERIFIED** | Salifort README |
| 40 | Total time from first project to current portfolio | **UNAVAILABLE** | Recoverable from Git commit history |

---

## Appendix B: Procedure for Adding New Evidence

Use this procedure after completing a project, finishing a course, completing an interview, or having a significant work experience.

**Step 1: Capture raw evidence immediately.**
Before memory fades: write down the problem, what you did, what tools you used, what the outcome was, and any numbers available. Save this in a dedicated raw notes file. Do not wait until a job application to reconstruct this.

**Step 2: Classify the evidence type.**
Determine whether this is: a Technical Skill, a Project/Accomplishment, Research Methods, Domain Knowledge, a Professional Experience, or a Communication artifact. Match to the appropriate section of this bank.

**Step 3: Apply the labeling convention.**
Is the evidence VERIFIED (documented in a README, transcript, or record)? ASSERT–CONFIRM (your own account, not yet externally documented)? Does it REQUIRE YOUR INPUT to complete?

**Step 4: Extract the numbers.**
For any project or experience: list every quantifiable fact. Record the number, what it measures, and where to verify it. Add to Appendix A.

**Step 5: Write the strongest defensible wording.**
Draft an honest, precise 1–2 sentence description. Do not inflate. Do not use vague language ("contributed to," "helped with") when stronger language is accurate. Do not use stronger language than the evidence supports.

**Step 6: Identify the job family applications.**
Note which roles or job families this evidence is useful for. This saves time during targeting.

**Step 7: Flag anything that needs confirmation before use.**
If any number, outcome, or claim is ASSERT–CONFIRM, note what needs to be confirmed and how (records, supervisor, recollection). Do not use ASSERT–CONFIRM claims in formal applications until confirmed.

**Step 8: Connect to existing evidence.**
Does this new evidence reinforce, expand, or qualify existing bank entries? Update existing entries if needed. Note cross-references.

**Step 9: Update Appendix A.**
Add any new quantifiable facts to the table with correct labels.

**Step 10: Review annually or before a major job search.**
At least once per year, review all ASSERT–CONFIRM entries and either confirm or downgrade them. Review all REQUIRES YOUR INPUT entries and supply missing information or remove them if no longer relevant.
