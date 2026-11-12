### F4 — Two Lifelines: Remittances vs. ODA

This is intellectually interesting and could be a good development-research piece. It examines two different ways external resources reach small island economies.

Concern: The proposed indicators use different denominators: remittances as a percentage of GDP and aid as a percentage of GNI. That's not an apples-to-apples comparison. It needs a consistent normalization and a careful distinction between describing two flows and claiming that one substitutes for the other.

Verdict: Strong backup if you want a more explicitly development-oriented project.

### F2 — Aid to the Islands

This could be valuable for international development roles, especially if you want to demonstrate familiarity with donor data and development finance.

Concern: OECD Creditor Reporting System data can become a much larger data-cleaning task than the brief implies. Donor concentration, sectors, recipients, and 20-plus years of records are a lot for a compact EDA.

Verdict: Keep it as a future project or a replacement for F3 if development-finance roles become your immediate priority.

### F6 — European Hotel Seasonality

This probably has the cleanest starting dataset and is a natural fit for R and ggplot2. It could produce an attractive report with monthly patterns and small multiples.

Concern: The question is less personally distinctive, and tourism seasonality is an established research topic. The proposed Gini-based seasonality index also needs a clear rationale and interpretation.

Verdict: Your low-risk fallback if one of the other projects gets stuck on data access.

# Original Assessment, with completed projects removed

I have comprehensive data from four research streams. Let me compile the complete brief now — I have everything needed for a rigorous, fully-cited response.

---

# Field Notes Research Brief: Six Feasible Original EDA Candidates

**Research conducted:** October 28, 2026. Direct URL verification, API testing, and four parallel research agents investigating data sources. All verified URLs were tested in this session; unverified sources are explicitly labeled.

---

## Part I: Candidate Landscape

**Data verification summary before screening:**

| Source | Access | Format | Verified |
|--------|--------|--------|----------|
| WDI bulk ZIP (`databank.worldbank.org/data/download/WDI_csv.zip`) | Free, no auth | ~100MB ZIP/CSV | ✅ Binary content confirmed |
| WDI individual indicator ZIPs (`api.worldbank.org/v2/en/indicator/{code}?downloadformat=csv`) | Free | ZIP/CSV | ✅ ST.INT.ARVL, ST.INT.RCPT.XP.ZS confirmed |
| `wbstats` R package | CRAN, free | R API | ✅ CRAN page confirmed |
| `WDI` R package (Vincent Arelbundock) | CRAN, free | R API | ✅ CRAN + GitHub confirmed |
| OWID tourism-gdp-proportion-of-total-gdp.csv | Free, direct URL | CSV | ✅ Data rows confirmed (~150 countries, 2008-2023, USVI and SIDS data visible) |
| OWID international-tourist-trips.csv | Free, direct URL | CSV | ✅ Confirmed |
| OWID spending-by-international-visitors.csv | Free, direct URL | CSV | ✅ Confirmed |
| OECD CRS per-year ZIPs (`webfs-dcd.oecd.org/files/dotStat/DSD_CRS/`) | Free, direct URL | Pipe-delimited ZIP | ✅ README confirmed live; ZIP URLs extracted from SDMX metadata |
| World Bank Projects API (`search.worldbank.org/api/v2/projects`) | Free, no auth | JSON | ✅ 72 Costa Rica projects returned |
| Eurostat tour_occ_nim API | Free, no auth | TSV | ✅ Monthly hotel nights returned for multiple EU countries |
| USVIBER PDFs (`usviber.org/wp-content/uploads/`) | Free, PDF-only | PDF | ✅ Directory indexed; 2022-2026 monthly reports confirmed |
| NPS IRMA Stats portal (`irma.nps.gov/Stats/`) | Free, portal UI | SSRS/CSV export | ✅ Portal confirmed; direct API/CSV URL unconfirmed |
| BEA territorial GDP | Free, API key required | JSON/CSV | ⚠️ DEMO_KEY rejected; free registration required |
| Costa Rica ICT statistics | Free, JS-rendered | PDF/Excel | ⚠️ Site confirmed live; download links require browser |
| SINAC national parks | ❌ 404 | — | ❌ Dead URL |
| AidData GCDF | ❌ 404 | Was CSV | ❌ URL broken after site migration to Webflow |
| Caribbean Tourism Organization | Paywalled | — | ❌ $45-495/report |
| UNWTO direct download | Paywalled | — | ❌ 403 on all endpoints |

---

### Candidate Comparison Table

| # | Working Title | Research Question | Primary Gap | Scope | Likely Datasets | Approach | Est. Hours | Feasibility | Contribution |
|---|---|---|---|---|---|---|---|---|---|
| 1 | **Tourism Dependence and the COVID Cliff** | Which SIDS were most tourism-dependent in 2019, and did higher dependence predict deeper economic contractions in 2020? | R + Tourism + Dev | ~35 Caribbean + Pacific SIDS | OWID tourism-GDP CSV, WDI arrivals + receipts | Scatter plots, bar charts, correlation analysis, country profiles | 5–7 | HIGH ✅ | COVID natural experiment; SIDS subset uncommon in portfolio EDA |
| 2 | **Aid to the Islands: ODA Flows to SIDS** | How have official development assistance flows to small island states evolved since 2000, which donors dominate, and what sectors receive funding? | R + Dev | ~45 Caribbean + Pacific SIDS | OECD CRS per-year ZIPs | Trend lines, donor concentration, sector breakdown, Lorenz analysis | 6–8 | HIGH ✅ | Sector + donor breakdown at SIDS level; OECD CRS rarely used in portfolio EDA |
| 3 | **World Bank Lending in Costa Rica, 1990–2024** | How has World Bank project lending to Costa Rica shifted across sectors over 30 years, and what do project patterns reveal about evolving development priorities? | R + Dev + Place | Costa Rica | World Bank Projects API | Timeline, sector decomposition, loan volume trends, key policy eras | 5–7 | HIGH ✅ | Project-level WB lending story for one country across time; personal geographic connection |
| 4 | **Two Lifelines: Remittances vs. ODA in Pacific Islands** | For Pacific SIDS, has remittance income displaced or complemented official aid, and do they flow to structurally different countries within the region? | R + Dev | ~14 Pacific SIDS | WDI (remittances, ODA, GDP per capita, population) | Time series, cross-sectional scatter, country profiles | 5–6 | HIGH ✅ | Pacific focus more specific than Caribbean; remittance vs. ODA trade-off is policy-relevant |
| 5 | **After the Storm: USVI Tourism Recovery** | How did tourism at Virgin Islands National Park and in the USVI broadly change after Hurricanes Irma and Maria in 2017, and how does the recovery compare to pre-storm baselines? | Tourism + Place | U.S. Virgin Islands | NPS IRMA visitation + USVIBER monthly PDFs (2022–2026) + WDI for context | Time series, pre/post comparison, benchmark analysis | 7–10 | MEDIUM ⚠️ | Personal USVI background; hurricane recovery framing is specific; NPS data back to 1979 |
| 6 | **European Hotel Seasonality: Sun, Snow, and COVID** | How extreme is seasonal concentration of hotel demand across European tourism markets, and did the COVID-19 shock and recovery alter established seasonal patterns? | R + Tourism | 8–10 European countries | Eurostat `tour_occ_nim` (monthly, confirmed) | Seasonal decomposition, heatmaps, pre/COVID/post comparison | 5–7 | HIGH ✅ | Monthly data + COVID disruption angle; Eurostat API underused in portfolio work |
| 7 | **Aid Fragmentation in Small States** | How many official donors operate in each SIDS, has the number changed over 2000–2022, and is there evidence of aid fragmentation? | R + Dev | ~45 SIDS | OECD CRS | Donor counts per country-year, Herfindahl index, trends | 6–8 | HIGH ✅ | Policy-relevant question; less flashy than #2 but complementary |
| 8 | **Climate Finance vs. Climate Vulnerability in SIDS** | Is climate-tagged ODA proportional to climate vulnerability across small island states, or do donor preferences dominate? | R + Dev + Env | SIDS globally | OECD CRS (climate markers) + ND-GAIN vulnerability index | Scatter, regression, donor analysis | 8–12 | MEDIUM-HIGH ⚠️ | Highly topical; climate marker inconsistencies add risk |
| 9 | **Costa Rica's Development Trajectory** | How does Costa Rica's multi-indicator development path compare to structural peers across health, income, education, and environment from 1990–2022? | R + Dev + Place | Costa Rica + 5–8 peers | WDI (all indicators) | Multi-panel time series, parallel coordinates | 5–7 | HIGH ✅ | Generic WDI EDA risk; differentiated only by Costa Rica focus |
| 10 | **Tourism Value vs. Volume: Receipts Per Arrival** | Which tourist destinations earn the most per visitor, and has that relationship changed over time? | R + Tourism | ~60 countries | OWID receipts + arrivals CSVs | Scatter, ratio analysis, trends | 4–6 | HIGH ✅ | Interesting but limited analytical depth; could work as supplemental analysis |
| 11 | **USVI Economic Structure Before and After Irma** | How did the sectoral composition of USVI's economy shift after the 2017 hurricane season? | R + Place | U.S. Virgin Islands | BEA territorial GDP (free API key required) + USVIBER | Time series, sector pie changes, USVI vs. Puerto Rico | 7–10 | MEDIUM ⚠️ | USVI-specific; BEA API registration required; personal story |
| 12 | **Pacific SIDS: Structural Profiles and Vulnerability** | What distinguishes economically vulnerable Pacific island states from more resilient ones across multiple WDI indicators? | R + Dev | ~14 Pacific SIDS | WDI | Cluster-style comparison, radar charts | 5–7 | HIGH ✅ | Useful R showcase but risks generic "country comparison" framing |
| 13 | **The Cruise Dependency Problem in the Caribbean** | Have Caribbean destinations become more or less cruise-dependent relative to stay-over tourism, and does cruise concentration affect economic benefits? | Tourism + Dev | Caribbean | WDI arrivals + receipts | Ratio analysis, country comparison | 5–7 | MEDIUM ⚠️ | Cruise vs. stay-over distinction not cleanly separable in WDI; would need UNWTO (paywalled) |

**Screened out:** Candidate 13 (cruise/stay-over split not available in free WDI data), Candidate 8 (complexity likely exceeds 12-hour ceiling given CRS climate marker complexity), Candidate 12 (risks generic country-comparison framing that adds nothing to portfolio), Candidate 9 (similar risk to 12), Candidate 7 (too narrow standalone; could merge into #2 as a section).

---

## Part II: Six Detailed Field Note Briefs

---

### Field Note F1: Tourism Dependence and the COVID Cliff

Completed

---

### Field Note F2: Aid to the Islands

**Working Title:** *Aid to the Islands: Official Development Assistance to Caribbean and Pacific Small Island States, 2000–2023*

**Research Question:**
- **Primary:** How have ODA flows to Caribbean and Pacific SIDS evolved since 2000, which donors dominate, and what sectors receive the most funding?
- **Secondary:** How concentrated are ODA flows — do a handful of donors supply most of the funding to each recipient?

---

**Significance**

Small island developing states face outsized development challenges relative to their size: climate vulnerability, limited economic diversification, high import costs, and constrained domestic revenue. Official development assistance is a critical external resource, but the pattern of who gives what to whom — and whether it addresses actual development needs — is rarely examined at the SIDS-subset level in accessible public analyses. The OECD CRS is the gold-standard dataset for bilateral and multilateral ODA, and it has been freely downloadable in a new pipe-delimited format since 2023. This project uses it at a specific and underexplored geographic scale.

Organizations that would value this: OECD DAC, Pacific Islands Forum, Caribbean Community (CARICOM), UN Development Programme, aid transparency advocates, SIDS bilateral development agencies.

---

**Geographic and Temporal Scope**

- **Unit of analysis:** Activity (project) level, aggregated to country-year-donor-sector
- **Recipients:** ~30–45 SIDS (Caribbean + Pacific). DAC recipient list codes can be filtered directly in the CRS data.
- **Years:** 2000–2023 (one CSV per year; download 3–5 key years for most analysis, full range for trend)
- **Donors:** All OECD-DAC members (approximately 30 bilateral donors + multilateral channels)

The SIDS-level analysis is manageable: even with 24 years of data, the total number of project-level rows for just SIDS recipients is in the tens of thousands, not millions.

---

**Verified Data Inventory**

| Dataset | Direct URL | Key Variables | Coverage | Access | Notes |
|---------|-----------|---------------|----------|--------|-------|
| OECD CRS 2023 | `https://webfs-dcd.oecd.org/files/dotStat/DSD_CRS/CRS%202023%20data.zip` | Donor, recipient, year, commitment USD, sector (CRS 5-digit), flow type, channel | 2023, all OECD-DAC flows | Free, direct ZIP | **Confirmed in session.** Pipe-delimited `|` with `""` quoting, UTF-8. |
| OECD CRS 2000–2022 | Same pattern, replace year in URL | Same variables | 2000–2022, all OECD-DAC flows | Free, direct ZIP | ✅ URL pattern confirmed from SDMX metadata; individual years not all individually tested |
| OECD CRS README | `https://webfs-dcd.oecd.org/files/dotStat/DSD_CRS/crs%20readme_en.txt` | Format docs, changelog | — | Free, direct TXT | **Confirmed in session.** Updated October 16, 2026. |
| OECD CRS Parquet (full) | `https://webfs-dcd.oecd.org/files/dotStat/DSD_CRS/CRS.parquet` | All variables, all years | Full dataset | Free, direct | ✅ URL confirmed from SDMX metadata |

**Key caveats:** 
- Rows with `Bi_Multi = 2` (added April 9, 2026) represent multilateral outflows and must be excluded to avoid double-counting bilateral flows — documented in the confirmed README.
- Some years may have coverage gaps for certain non-DAC donors.
- China does not publish to OECD CRS or IATI; Chinese development finance to SIDS is not in this dataset.
- SIDS recipient codes must be filtered using DAC recipient country list; some jurisdictions (USVI, Guam) are U.S. territories and receive no ODA.

---

**Proposed EDA**

**Language: R** (`readr`, `dplyr`, `ggplot2`, `tidyr`, `countrycode`, `scales`)

R is appropriate: the CRS pipe-delimited format is easy to read with `readr::read_delim()`, and the analysis is fundamentally a multi-table aggregation and visualization task well-suited to the `tidyverse`. The large file sizes (each year is a substantial CSV) benefit from lazy loading and dplyr filtering.

**Steps:**
1. **Download and inspect (30 min):** Download CRS 2023 ZIP. Open README. Read with `readr::read_delim(delimiter="|")`. Count rows, check column names, identify SIDS recipient codes (filter `RecipientCode` against a SIDS country list).
2. **SIDS filter and multi-year load (60 min):** Download 2000, 2005, 2010, 2015, 2020, 2023 (or all available years). Bind rows, filter to SIDS recipients, exclude `Bi_Multi==2`. Create a `year-donor-recipient-sector` summary table.
3. **Trend analysis (45 min):** Total ODA to SIDS by year. Area chart showing Caribbean vs. Pacific breakdown. Compare to total global ODA trend (puts SIDS share in context).
4. **Donor analysis (45 min):** Top 10 donors to SIDS by total commitment, 2000–2023. Grouped bar chart by region (Caribbean vs. Pacific). Donor concentration: what % of total SIDS ODA comes from top 3 donors?
5. **Sector breakdown (45 min):** Using CRS sector codes, categorize into: social (education, health, water), economic (energy, transport, finance), environment/climate, humanitarian, and other. Stacked bar by year.
6. **Country profiles (30 min):** Top recipients per region. Small multiples showing each country's ODA over time. Flag outliers (e.g., Vanuatu post-Cyclone Pam, Dominica post-Maria).
7. **Interpretation (60 min):** Write narrative noting shifts toward climate/environment sectors, changes in donor landscape, post-disaster spikes.

---

**Originality and Contribution**

Existing work: OECD publishes aggregate SIDS ODA statistics in periodic reports ("Small Island Developing States: Financing for Their Development"). The OECD.Stat portal allows online queries but does not produce the sector + donor + regional breakdown this Field Note would deliver.

**What this adds:** A reproducible R analysis of the OECD CRS at the SIDS subset level, combining donor + sector + trend dimensions in one coherent EDA. The recently confirmed availability of direct ZIP downloads makes this more tractable than ever. The analysis is distinct from the researcher's existing Floodlines (U.S. domestic FEMA grants) project — same spirit of tracing public finance flows, but at international scale.

**What it is not:** A study of aid effectiveness. This is descriptive, not causal. Whether ODA to SIDS produces development outcomes is a separate and harder question.

---

**Feasibility**

| Phase | Estimated Time |
|-------|---------------|
| Data download, README, and initial inspection | 45 min |
| SIDS country code list preparation and multi-year load | 75 min |
| Aggregation and summary statistics | 60 min |
| Visualizations (4–5 charts) | 90 min |
| Interpretation and writing | 75 min |
| Quarto rendering and polish | 45 min |
| **Total** | **~7.5 hours** |

**Most likely obstacle:** File size. Full-year CRS ZIPs can be large. The fallback is to download only 5–6 key years (2000, 2005, 2010, 2015, 2020, 2023) rather than all 24, which reduces scope but preserves the trend analysis. Alternatively, use the full Parquet file if R can handle it (requires `arrow` package).

---

**Hiring Signal**

Demonstrates: R data wrangling with non-standard delimited files; aggregation across multiple files; domain knowledge of international development finance, ODA, and SIDS; sector classification; responsible use of a complex institutional dataset; EDA communication skills.

Relevant roles: development finance analyst, international development data positions (OECD, World Bank, bilateral donors, NGOs), policy research organizations, aid transparency organizations.

---

**Limitations**

- **China excluded:** The OECD CRS covers OECD-DAC donors. China, one of the most significant non-DAC providers of development finance to Pacific SIDS specifically, is not represented.
- **Double-counting risk:** Must carefully exclude `Bi_Multi=2` rows (added April 2026).
- **Commitments vs. disbursements:** The CRS reports commitments (pledges) more completely than actual disbursements; some projects are committed but never fully disbursed.
- **Sector coding:** CRS sector codes are self-reported by donors; climate-related coding in particular has changed definitionally over time.

---

### Field Note F3: World Bank Lending in Costa Rica

Completed

---

### Field Note F4: Two Lifelines — Remittances vs. ODA in Pacific Islands

**Working Title:** *Two Lifelines: Comparing Remittances and Official Aid in Pacific Island Economies, 2000–2022*

**Research Question:**
- **Primary:** For Pacific small island developing states, which external resource flow — remittances or official development assistance — is larger relative to GDP, and how has this ratio changed since 2000?
- **Secondary:** Do remittance-dependent and ODA-dependent Pacific islands differ systematically in income level, population size, or migration patterns?

---

**Significance**

Pacific island nations sit at an unusual intersection: some (Tonga, Samoa, Marshall Islands) rely heavily on remittances from overseas diasporas, while others (Kiribati, Vanuatu) depend more on international aid. These two flows have fundamentally different political economies — remittances are private transfers driven by household relationships, while ODA is disbursed by governments subject to political considerations and conditionality. Understanding which countries rely on which resource, and whether remittances have partially displaced ODA over time, is a substantive question for Pacific development policy. It is also a sharply bounded research question with well-confirmed, clean data.

Organizations that would value this: Pacific Islands Forum, ADB Pacific Department, bilateral donors to the Pacific (Australia, New Zealand, USA, Japan), IMF Pacific Islands desk, academic Pacific studies researchers.

---

**Geographic and Temporal Scope**

- **Unit:** Country-year
- **Countries:** ~14–16 Pacific SIDS with available data (Fiji, Vanuatu, Samoa, Tonga, Kiribati, Marshall Islands, Micronesia, Palau, Papua New Guinea, Solomon Islands, Nauru, Tuvalu, Cook Islands, Niue)
- **Years:** 2000–2022 (WDI coverage for relevant indicators)
- **Temporal scope:** 23 years captures pre-crisis (2000s), global financial crisis (2008–2010), COVID shock (2020), and initial recovery

---

**Verified Data Inventory**

| Dataset | Direct URL | Key Variables | Coverage | Access | Notes |
|---------|-----------|---------------|----------|--------|-------|
| WDI via wbstats | `wb_data(c("BX.TRF.PWKR.DT.GD.ZS","DT.ODA.ODAT.GN.ZS","NY.GDP.PCAP.CD","SP.POP.TOTL"), country=pacific_codes)` | Remittances % GDP; ODA % GNI; GDP per capita; population | Pacific SIDS, 2000–2022 | R package, CRAN confirmed | **Confirmed.** Some Pacific micro-states have sparse WDI coverage. |
| WDI additional | `BX.TRF.PWKR.CD.DT` (remittances, current USD); `DT.ODA.ALLD.CD` (ODA, current USD) | Absolute dollar amounts | Same | Same | Allows normalization by population and GDP |

**Caveats:** Pacific micro-states (Nauru, Tuvalu, Cook Islands, Niue) have the most data gaps in WDI. Tonga and Samoa have good remittance data (both have among the world's highest remittance-to-GDP ratios). PNG has large population and will dominate absolute flow totals; analysis may need to be per-capita. The `DT.ODA.ODAT.GN.ZS` indicator covers net ODA from all OECD-DAC donors and multilaterals, not China.

---

**Proposed EDA**

**Language: R** (`wbstats`, `dplyr`, `ggplot2`, `tidyr`, `countrycode`, `scales`, `ggrepel`)

`wbstats` handles the data pull cleanly. The analysis is inherently comparative and benefits from ggplot2's facet and small-multiple capabilities. The `ggrepel` package prevents label overlapping in scatter plots.

**Steps:**
1. **Data pull (30 min):** Build a vector of Pacific SIDS ISO2 codes. Pull remittances % GDP, ODA % GNI, GDP per capita, and population from `wbstats`. Join on country code. Flag countries with <5 years of data.
2. **Descriptive summary (30 min):** Table: each Pacific island's 2019 average remittances % GDP and ODA % GNI, ranked. This immediately shows the regional landscape.
3. **Time series (45 min):** Line chart for the 8–10 best-covered countries showing both remittances and ODA as % GDP over 2000–2022. Does Tonga's remittance share grow while ODA falls? Does Kiribati show the reverse?
4. **Scatter analysis (45 min):** Scatter plot: remittances % GDP vs. ODA % GNI (using 2019 values, the last pre-COVID year). Label countries. Does a negative relationship emerge — are higher-remittance countries receiving less ODA? Add a trend line with appropriate uncertainty.
5. **COVID shock (30 min):** Remittance expectations during COVID were for a sharp decline (World Bank projection), but in reality remittances to the Pacific proved more resilient than expected in some destinations. Plot 2019–2021 change for each country.
6. **Country profiles (30 min):** Brief text profiles of the two most ODA-dependent (e.g., Kiribati, Tuvalu) and two most remittance-dependent (Tonga, Samoa) countries.
7. **Interpretation (60 min):** Write narrative: what structural features explain the remittance vs. ODA split? Migration networks, diaspora size, distance from labor markets (Australia, New Zealand, USA).

---

**Originality and Contribution**

Existing analyses: The World Bank and IMF publish periodic Pacific economic monitors. Researchers like Richard Bedford and Jack Corbett have analyzed Pacific migration. The World Bank has a global remittances overview. What is uncommon is a concise, reproducible R EDA comparing the two flows side-by-side for Pacific nations specifically.

**What this adds:** The Pacific focus and the comparative two-flow angle are specific. This project is distinct from the SIDS ODA project (F2) because it is narrower (Pacific only), different in scope (private vs. public flows), and focuses on household-level vs. government-level finance. It would not duplicate F2 in a portfolio.

---

**Feasibility**

| Phase | Estimated Time |
|-------|---------------|
| Data pull and quality check | 45 min |
| Summary table and data structuring | 30 min |
| Time series visualizations | 60 min |
| Scatter analysis and country labeling | 45 min |
| COVID section | 30 min |
| Interpretation and writing | 60 min |
| Quarto rendering and polish | 30 min |
| **Total** | **~5.5 hours** |

**Most likely obstacle:** Data sparsity for Pacific micro-states. Tuvalu (population ~11,000) and Nauru (~10,500) may have very limited WDI coverage. The fallback is to acknowledge coverage limits in the limitations section and produce a clean analysis for the 8–10 best-covered Pacific islands, which still constitutes a coherent and interesting Field Note.

---

**Hiring Signal**

Demonstrates: R proficiency with `wbstats`, comparative development economics, Pacific development knowledge, ability to work with an underused geographic region rarely represented in portfolio projects. This project would stand out precisely because most portfolio work focuses on Africa or Latin America for development analytics.

Relevant roles: ADB, Pacific community organizations, Australia Department of Foreign Affairs and Trade, New Zealand MFAT, regional development analysts, academic Pacific studies programs with data support needs.

---

**Limitations**

- **Data sparsity:** Pacific micro-states have poor WDI coverage. The analysis may effectively be a 10–12 country comparison rather than a full 16-country set.
- **Remittance measurement:** WDI remittance data for small islands is based on balance of payments surveys, which are irregular and sometimes estimated.
- **ODA includes China-like flows for some countries:** If a Pacific country receives non-DAC finance (e.g., Chinese grants), this may not appear in the WDI `DT.ODA.ODAT.GN.ZS` indicator, undercounting actual ODA-equivalent flows.
- **Correlation ≠ substitution:** A negative cross-sectional correlation between remittances and ODA does not establish that donors are consciously reducing aid to remittance-rich countries.

---

### Field Note F5: After the Storm — USVI Tourism Recovery

Completed

---

### Field Note F6: European Hotel Seasonality

**Working Title:** *Sun, Snow, and Pandemic: Seasonal Patterns in European Hotel Demand, 2015–2023*

**Research Question:**
- **Primary:** How extreme is seasonal concentration of hotel occupancy across European tourism markets, and do sun-and-sea, cultural, and alpine destinations show distinct seasonal fingerprints?
- **Secondary:** Did the COVID-19 shock and the 2021–2023 recovery alter the established seasonal pattern, or did destinations return to their pre-pandemic profiles?

---

**Significance**

Destination seasonality is one of the most practically important — and frequently mismanaged — dimensions of tourism economics. Extreme peak-trough ratios impose costs: seasonal unemployment, infrastructure over-investment for peak weeks, environmental pressure concentrated in summer months, and low utilization rates in the off-season. European destinations represent the world's most tourism-dense region, and Eurostat's `tour_occ_nim` dataset provides monthly hotel night data for 40+ countries going back to 2012 — one of the most complete and consistent free tourism time series available globally. The COVID-19 disruption provides an unusual natural experiment: did the shock temporarily flatten seasonality (as some travelers spread demand across the year), or did recovery reconcentrate at traditional seasonal peaks?

Organizations that would value this: European tourism boards, destination management organizations, European Commission DG-GROW (tourism), accommodation industry associations, sustainable tourism consultancies.

---

**Geographic and Temporal Scope**

- **Unit:** Country-month-year (nights in tourist accommodation)
- **Countries:** Select 8–10 European countries with distinct seasonal profiles: Italy, Spain, Croatia, Greece (sun-and-sea, extreme summer peaks); Germany, Netherlands (cultural/urban, flatter profiles); Austria, Switzerland (alpine, winter and summer peaks); Iceland (near-midnight sun effect); Cyprus (Mediterranean extreme)
- **Years:** 2015–2023 (includes pre-COVID, COVID collapse, and recovery)
- **Why this scope is manageable:** Monthly data for 10 countries × 9 years = 1,080 rows. Very manageable. The complexity is in the visualization design, not data volume.

---

**Verified Data Inventory**

| Dataset | Direct URL | Key Variables | Coverage | Access | Notes |
|---------|-----------|---------------|----------|--------|-------|
| Eurostat `tour_occ_nim` | `https://ec.europa.eu/eurostat/api/dissemination/sdmx/2.1/data/tour_occ_nim?format=TSV&compressed=false&startPeriod=2015-01&endPeriod=2023-12` | Monthly nights in accommodation (hotels, etc.); domestic vs. foreign residents; accommodation type | 40+ European countries, monthly, 2015+ | Free, no auth | **Confirmed in session.** Actual monthly data returned for Italy, Spain, Germany, Croatia, Cyprus with specific values confirmed. |
| Eurostat via R `eurostat` package | `install.packages("eurostat")` | Same as above; cleaner interface | Same | CRAN, free | ⚠️ Package existence inferred; not individually CRAN-confirmed in this session. Alternative: load TSV directly with `readr::read_tsv()`. |

**Caveats:** Eurostat data covers hotel nights (accommodation registered nights), not unique visitors. A single tourist staying 7 nights contributes 7 to the count. This is a demand-intensity measure, not an arrivals count. The `c_resid` breakdowns (domestic vs. foreign residents) are available but may have gaps. The COVID period (March 2020 – summer 2021) will show near-zero counts in many countries — useful analytically but will dominate visual scales.

---

**Proposed EDA**

**Language: R** (`readr`, `dplyr`, `ggplot2`, `lubridate`, `scales`, `viridis`)

R is ideal: the Eurostat TSV loads directly with `readr::read_tsv()`, `lubridate` handles year-month parsing, and the seasonality visualizations — especially calendar heatmaps, small-multiple line charts, and polar charts — are best executed in ggplot2.

**Steps:**
1. **Data acquisition (20 min):** Construct Eurostat API URL with country and time period parameters. Download TSV. Parse with `readr`. Separate the multi-dimensional ID column (country × accommodation type × resident type) into individual columns using `tidyr::separate()`.
2. **Country selection and filtering (20 min):** Filter to 8–10 target countries, hotels only (`I551`), all residents (`TOTAL`). Convert month-year strings to Date with `lubridate::ym()`.
3. **Seasonal profile charts (60 min):** For each country, plot monthly index (month's share of annual total × 12). Small-multiple line chart comparing 2019 baseline to 2022 recovery. This immediately shows which countries have extreme peaks (Croatia in July/August) and which are flat (Germany).
4. **Heatmap (30 min):** Calendar heatmap showing nights per month per country for 2015–2023. Each row is a country; each column is a month; fill is nights (log-scaled). The COVID collapse and recovery are visually obvious.
5. **Seasonality index (30 min):** Calculate Gini coefficient of monthly hotel nights as a seasonality index. Bar chart ranking countries from most seasonal (Croatia) to least (Germany). Is there a latitude gradient?
6. **COVID comparison (30 min):** For each country, plot the 2019 seasonal curve (monthly %) vs. the 2021 and 2022 recovery curves. Did Croatia's July peak shift to shoulder months? Did Germany's flat profile change?
7. **Interpretation (60 min):** Narrative on seasonality patterns, their drivers (climate, school calendars, infrastructure), and whether the pandemic introduced any durable shifts.

---

**Originality and Contribution**

Existing analyses: Eurostat publishes annual tourism statistics digests. Academic papers on seasonality exist (e.g., Jeff Butterfield on seasonality indices, various Mediterranean tourism studies). The Eurostat data is well-known to European tourism researchers.

**What this adds:** The specific COVID disruption angle — comparing pre/post seasonal curves — is relatively recent. The clean, reproducible R analysis from the Eurostat API would demonstrate data acquisition from a European statistical API, which is relatively uncommon in U.S.-oriented portfolios. The portfolio value is in demonstrating that the researcher can work with international statistical agency APIs, not just WDI.

**Risk:** This project has no personal or geographic connection to the researcher's background (the researcher worked in USVI, not Europe). It is included because the data is excellent and the R skills demonstrated are strong. If the top-3 recommendation includes other strong R projects, F6 may be the weakest fit overall.

---

**Feasibility**

| Phase | Estimated Time |
|-------|---------------|
| API pull and TSV parsing | 30 min |
| Country filtering and data shaping | 30 min |
| Seasonality profile charts (small multiples) | 60 min |
| Heatmap | 30 min |
| COVID comparison section | 45 min |
| Interpretation and writing | 60 min |
| Quarto rendering and polish | 30 min |
| **Total** | **~5 hours** |

**Most likely obstacle:** TSV parsing. The Eurostat TSV has a complex multi-key ID column (concatenated dimension codes) that requires careful `tidyr::separate()` logic to unpack. The fallback is to use the `eurostat` R package if it is confirmed available on CRAN, which handles the parsing automatically.

**Minimum viable deliverable:** 2–3 country seasonal profiles + a heatmap + 2 COVID comparison charts + interpretation. This can be done in 4 hours.

---

**Hiring Signal**

Demonstrates: Eurostat API usage, `lubridate` date handling, advanced ggplot2 (calendar heatmaps, small multiples), seasonality analysis and interpretation, European tourism domain knowledge.

Relevant roles: European tourism consultancies, destination management organizations, Eurostat-facing research positions, European regional development agencies, hotel industry analytics.

---

**Limitations**

- **Hotel nights ≠ visitor arrivals.** Longer stays inflate counts; the measure is demand intensity, not headcount.
- **European only.** No Caribbean, Pacific, or Central American data is in this dataset.
- **No geographic connection** to the researcher's background (USVI, Costa Rica, India).
- **COVID dominates:** The 2020–2021 near-zero values create visualization challenges and may obscure the pre-pandemic seasonal patterns if scale is not handled carefully.
- **Selection bias in country choice:** The 8–10 country selection shapes conclusions. The analysis should acknowledge that results are not representative of all European destinations.

---

## Part III: Rank and Select the Best Three

### Scoring Rubric

Each criterion is scored 1–5. **Scores below 2 on any single criterion trigger a "fatal weakness flag"** — a high mean cannot compensate.

| Criterion | Weight | Rationale |
|-----------|--------|-----------|
| Data availability and reliability | 30% | Confirms the project can start and finish |
| Feasibility within time budget | 20% | 4–8 hours target; maximum ceiling 12 |
| Originality and incremental value | 15% | Is this worth doing? |
| Analytical substance | 10% | Is the question answerable and interesting? |
| R signal | 10% | Demonstrates genuine R proficiency |
| International development signal | 5% | Addresses the gap |
| Tourism signal | 5% | Addresses the gap |
| Place-based relevance | 5% | Specific geography adds credibility |

---

### Scores

| Criterion | Weight | F1 (COVID Cliff) | F2 (ODA to SIDS) | F3 (WB Costa Rica) | F4 (Pacific Lifelines) | F5 (USVI Storm) | F6 (Euro Seasonality) |
|-----------|--------|---------|---------|---------|---------|---------|---------|
| Data availability | 30% | **5** | **5** | **5** | **5** | **3** | **5** |
| Feasibility | 20% | **5** | **4** | **5** | **5** | **3** | **5** |
| Originality/value | 15% | **4** | **4** | **4** | **4** | **5** | **3** |
| Analytical substance | 10% | **5** | **4** | **4** | **4** | **4** | **4** |
| R signal | 10% | **5** | **5** | **4** | **5** | **3** | **5** |
| Int'l dev signal | 5% | **5** | **5** | **5** | **4** | **1** | **1** |
| Tourism signal | 5% | **5** | **2** | **2** | **1** | **5** | **5** |
| Place-based relevance | 5% | **4** | **3** | **5** | **4** | **5** | **2** |
| **Weighted score** | | **4.70** | **4.35** | **4.55** | **4.50** | **3.45** | **4.15** |

**Fatal weakness check:**
- **F5** scores 3 on data availability (PDF extraction + NPS portal = confirmed but not push-button) and 3 on feasibility (7–10 hours; PDF parsing adds uncertainty). Not fatal, but the lowest scores in the most heavily weighted categories.
- **F6** scores 1 on international development and 2 on place-based relevance. Not fatal given the low weight of those criteria — but it means F6 cannot contribute to those portfolio gaps.
- All others pass.

---

### Recommended Three-Project Portfolio

**Recommended: F1 + F3 + F5**

| Project | Role in Portfolio | Primary Gap Covered |
|---------|------------------|---------------------|
| F1: Tourism Dependence and the COVID Cliff | Flagship: R + Tourism + Development in one project | R ✅, Tourism ✅, Int'l Dev ✅ |
| F3: World Bank Lending in Costa Rica | R + Development + Geographic anchor (Central America) | R ✅, Int'l Dev ✅, Place ✅ |
| F5: After the Storm (USVI Recovery) | Personal story + Tourism + Unique place | Tourism ✅, Place ✅, Personal narrative |

**Why this combination works:**

1. **Three distinct geographic anchors** — Caribbean/Pacific SIDS broadly (F1), Costa Rica (F3), U.S. Virgin Islands (F5) — preventing any sense of redundancy. A hiring manager sees the same analyst working at three different geographic scales with three different questions.

2. **R is substantive in two projects (F1 + F3).** Both use R for data acquisition, cleaning, and ggplot2 visualization. F5 can use R as well (pdftools + ggplot2), making it R-capable but with the flexibility to use Python if PDF parsing proves difficult.

3. **International development is addressed in two projects** — F1 examines the economic consequences of tourism dependence for developing island economies, F3 examines World Bank lending as a development finance instrument. Neither is generic.

4. **Tourism is addressed in two projects** — F1 (tourism as economic structure) and F5 (tourism recovery as place story) — covering very different analytical angles.

5. **Personal authenticity.** F5 draws directly on three years of USVI experience. F3 draws on research experience in Costa Rica. F1 draws on international development and environmental economics background. None of these are chosen purely because the data is convenient.

**Advantages of this combination over alternatives:**
- **F1 + F2 + F5** (substituting OECD CRS aid project for Costa Rica) would give stronger development analytics but loses the Costa Rica geographic connection and makes the portfolio feel more technical/less personal.
- **F1 + F3 + F6** (substituting European seasonality for USVI) would be higher feasibility but loses the USVI personal narrative and tourism recovery story — arguably the most distinctive project in the set.
- **F1 + F4 + F5** (substituting Pacific remittances for Costa Rica) gives excellent development analytics but no Central America anchor; F4 and F5 together (two Pacific/Caribbean projects) may feel redundant.

**Trade-offs to acknowledge:**
- F5 (USVI) carries more execution risk than F2 or F6. The NPS data is straightforward; the USVIBER PDF extraction is the variable. If PDFs prove problematic, the minimum viable F5 (NPS time series alone) is publishable in 3–4 hours with a narrower scope.
- F3 (Costa Rica) has a smaller dataset (72 projects) than the others. The analysis is storytelling-dense rather than statistics-dense. For hiring managers who weight "data volume" heavily, F2 (OECD CRS) would be a stronger technical demonstration.
- If the researcher wants to add a fourth project later, F2 (ODA to SIDS) or F4 (Pacific remittances) are both high-confidence additions.

---

## Section 10: Immediate Next Steps for All Six Finalists

---

### F1: Tourism Dependence and the COVID Cliff

-

---

### F2: Aid to the Islands (ODA to SIDS)

**1. First action:**
- Download the 2023 CRS file: `https://webfs-dcd.oecd.org/files/dotStat/DSD_CRS/CRS%202023%20data.zip`
- Read the README first: `https://webfs-dcd.oecd.org/files/dotStat/DSD_CRS/crs%20readme_en.txt`
- Documentation: OECD CRS user guide at `https://www.oecd.org/dac/stats/crs-online-help.htm` (may redirect; search "OECD CRS user guide")

**2. First inspection:**
- Unzip and open in R: `read_delim("CRS 2023 data.txt", delim="|", quote='"')`
- Check: column names, column count, encoding. Note which columns contain `RecipientCode`, `DonorCode`, `SectorCode`, `USD_Commitment_Defl`, `Bi_Multi`.
- Filter to `Bi_Multi != 2` (exclude multilateral outflows). Filter to SIDS recipient codes (need a SIDS recipient code list from DAC).
- Count rows for SIDS recipients in 2023. Expected: tens of thousands of project-level rows for SIDS.

**3. Initial EDA checks:**
1. `table(df$RecipientName)` filtered to SIDS — which SIDS received the most projects in 2023?
2. Total USD commitments to SIDS in 2023, by donor — top 10 donors ranked
3. Sector distribution: count by CRS sector name for SIDS recipients
4. Check for any SIDS with zero rows (no ODA in 2023) — are there any gaps in DAC coverage?
5. Compare 2023 total ODA to SIDS vs. 2000 (download 2000 file) as a simple before/after sanity check

**4. Technical setup:**
```r
library(readr); library(dplyr); library(ggplot2); library(countrycode)

# DAC SIDS recipient codes (partial - verify against official DAC list)
sids_codes <- c(35, 40, 45, 50, 55, 60, # Caribbean examples
                820, 830, 835, 840, 845, 855, 865) # Pacific examples

crs2023 <- read_delim("CRS 2023 data.txt", delim="|", quote='"',
                       locale=locale(encoding="UTF-8"))
sids_oda <- crs2023 %>%
  filter(Bi_Multi != 2, RecipientCode %in% sids_codes)
```
Note: The DAC recipient code list for SIDS must be sourced from `https://www.oecd.org/dac/stats/daclist.htm` or the SDMX code list.

**5. Feasibility test:**
- **GO** if: SIDS-filtered rows are in the range 5,000–100,000 for a single year (manageable in R), sector and donor columns are populated, and the DAC recipient code list correctly identifies SIDS.
- **NO-GO** (or narrow) if: SIDS recipient codes cannot be cleanly identified, or if SIDS rows are <500 (implying minimal ODA flows that won't support interesting analysis).

**6. Time budget:**
- Initial feasibility test: 45–60 minutes (download + parse + filter + check)
- Complete Field Note: 7–8 hours

**7. Minimum viable deliverable:**
A Quarto HTML with: (a) total ODA to SIDS time series (2000–2023, 5–6 key years); (b) top donor bar chart; (c) sector breakdown chart; (d) 400-word interpretation. The trend and donor analysis alone is a publishable EDA.

**8. Principal failure mode:**
SIDS recipient code identification. The CRS uses DAC numeric codes (not ISO2), and mapping them to a SIDS list requires a manual crosswalk. If the crosswalk is ambiguous or the SIDS codes are scattered within a broader "small economies" category, the filter will be imprecise. Fallback: restrict to the 10–15 most important SIDS by tourism + development relevance and hard-code their DAC codes, accepting a narrower but cleaner sample.

---

### F3: World Bank Lending in Costa Rica

-

---

### F4: Two Lifelines — Remittances vs. ODA in Pacific Islands

**1. First action:**
- Open `https://data.worldbank.org/indicator/BX.TRF.PWKR.DT.GD.ZS` in a browser to confirm remittances % of GDP is available for Pacific islands (WDI indicator browser).
- Pull in R immediately: `wb_data("BX.TRF.PWKR.DT.GD.ZS", country="all", start_date=2000, end_date=2022)` filtered to Pacific island codes.

**2. First inspection:**
- Which Pacific SIDS have ≥10 years of non-NA remittance data? Expected: Tonga, Samoa, Fiji, Marshall Islands. Likely absent or sparse: Nauru, Tuvalu, Kiribati.
- Pull `DT.ODA.ODAT.GN.ZS` (ODA % of GNI) for same countries. How does coverage compare?
- For Tonga and Samoa, check the 2019 and 2020 values: are remittances % of GDP among the world's highest?

**3. Initial EDA checks:**
1. Table: 2019 remittances % GDP and ODA % GNI side by side for all Pacific SIDS with data
2. Line chart for Tonga: remittances vs. ODA 2000–2022 — does one grow as the other declines?
3. Scatter: remittances % GDP vs. ODA % GNI, 2019 values, Pacific countries labeled
4. COVID check: 2019 vs. 2020 remittances for Tonga, Samoa, Fiji — did they hold up?
5. Verify: does PNG dominate absolute flows (population effect) and, if so, does it need to be treated separately from the micro-states?

**4. Technical setup:**
```r
pacific <- c("FJ","FM","KI","MH","PG","PW","SB","TO","TV","VU","WS","NR","CK","NU")
flows <- wb_data(c("BX.TRF.PWKR.DT.GD.ZS","DT.ODA.ODAT.GN.ZS",
                   "NY.GDP.PCAP.CD","SP.POP.TOTL"),
                 country=pacific, start_date=2000, end_date=2022)
```

**5. Feasibility test:**
- **GO** if: ≥8 Pacific SIDS have both remittance and ODA data for at least 15 of the 23 years (2000–2022).
- **NARROW** if: Only Tonga, Samoa, Fiji, and 2–3 others have adequate coverage. In that case, do 5–7 country profiles rather than a full panel analysis. Still publishable.

**6. Time budget:**
- Initial feasibility test: 30 minutes
- Complete Field Note: 5–6 hours

**7. Minimum viable deliverable:**
A Quarto HTML with: (a) summary table of 2019 remittances vs. ODA for available Pacific SIDS; (b) time series for the 4–6 best-covered countries; (c) scatter plot with country labels; (d) COVID section; (e) 350-word interpretation. This can be done cleanly in under 5 hours.

**8. Principal failure mode:**
Pacific micro-states have very sparse WDI data. Tuvalu, Nauru, Cook Islands, and Niue may have only a few data points. If the analysis is too data-sparse to support meaningful cross-country comparison, shift the framing to a deeper case study of Tonga (the world's most remittance-dependent country by % GDP) with regional context — an interesting, if narrower, story.

---

### F5: After the Storm (USVI Tourism Recovery)

-

---

### F6: European Hotel Seasonality

**1. First action:**
- Fetch the Eurostat TSV directly in R (no browser needed):
  ```r
  url <- "https://ec.europa.eu/eurostat/api/dissemination/sdmx/2.1/data/tour_occ_nim?format=TSV&compressed=false&startPeriod=2015-01&endPeriod=2023-12"
  raw <- readr::read_tsv(url)
  ```
- Documentation: `https://ec.europa.eu/eurostat/databrowser/view/TOUR_OCC_NIM__custom_14296039/default/table?lang=en` (navigate to dataset page and check variable definitions, especially `c_resid` and `unit` codes)

**2. First inspection:**
- Inspect the multi-key first column (e.g., `"NR,I551,TOTAL,HR,AT"` encodes unit, accommodation type, resident type, and country). Use `tidyr::separate()` to split.
- Check: which countries are present? Which accommodation types? Which years and months?
- Confirmed from session: IT, ES, DE, HR, CY data are present with actual values for 2019 and 2020 months. Verify that the key countries (Italy, Spain, Croatia, Greece, Germany, Austria, Iceland) are all present.

**3. Initial EDA checks:**
1. Filter to `unit = NR` (nights), `c_resid = TOTAL` (all residents), `I551` (hotels only). Check coverage.
2. For Italy: plot monthly nights 2015–2023. COVID collapse visible in March–June 2020?
3. Calendar heatmap for one country (Spain): year on y-axis, month on x-axis, fill = log(nights). Seasonal pattern clear?
4. Compare January and August values for Croatia vs. Germany — is Croatia's ratio >5:1?
5. Check whether the 2022 and 2023 seasonal curves have returned to 2019 shapes

**4. Technical setup:**
```r
library(readr); library(dplyr); library(tidyr); library(ggplot2); library(lubridate)

raw <- read_tsv("https://ec.europa.eu/eurostat/api/dissemination/sdmx/2.1/data/tour_occ_nim?format=TSV&compressed=false&startPeriod=2015-01&endPeriod=2023-12")

# The first column contains all dimension codes concatenated; the rest are time periods
# Separate the key column:
clean <- raw %>%
  separate(col=1, into=c("unit","nace_r2","c_resid","geo"), sep=",") %>%
  pivot_longer(cols=starts_with("20"), names_to="period", values_to="nights") %>%
  mutate(date = ym(period), nights = as.numeric(nights))
```
(Exact column names may differ; verify after first parse.)

**5. Feasibility test:**
- **GO** if: TSV downloads, first-column parsing yields clean country/accommodation/resident splits, and ≥8 target countries have complete monthly data for 2019 and 2020.
- **NO-GO** if: TSV structure has changed and parsing fails. Fallback: use the `eurostat` R package (`get_eurostat("tour_occ_nim")`) if it is available on CRAN.

**6. Time budget:**
- Initial feasibility test: 30 minutes
- Complete Field Note: 5 hours

**7. Minimum viable deliverable:**
A Quarto HTML with: (a) small-multiple seasonal profiles (monthly hotel nights as % of annual total) for 8 countries, 2019 vs. 2022; (b) a seasonality index bar chart ranking countries by Gini coefficient; (c) a COVID collapse heatmap; (d) 350-word interpretation. Can be done in 4 hours.

**8. Principal failure mode:**
The Eurostat TSV API URL format changes or the column structure has been modified since the session's confirmed test. Check the Eurostat Data Browser at `https://ec.europa.eu/eurostat/databrowser/` and search `tour_occ_nim` to confirm the current API URL and dataset structure if the above URL fails.

---

*Research conducted October 28, 2026. Data verification conducted by direct URL testing, API queries, and four parallel research agents. All "confirmed" statuses reflect live session tests. OECD CRS README confirmed live and updated October 16, 2026. OWID tourism CSVs confirmed with actual data rows. WDI bulk ZIP binary content confirmed. World Bank Projects API confirmed returning 72 Costa Rica project records. USVIBER PDF directory confirmed with monthly reports from 2022–2026. Eurostat monthly hotel nights API confirmed with actual numerical data for Italy, Spain, Germany, Croatia, Cyprus.*

# Addendum One

The R and Env Data Sources agent has added several confirmations worth incorporating. Here are the key additions and corrections to the brief above:

---

## Supplementary Findings: R and Environmental Data Sources

### R Package Corrections and Additions

| Package | Status | Note for Brief |
|---------|--------|---------------|
| `echor` | ✅ CRAN confirmed | Enables direct R access to EPA ECHO data — relevant for F5 (USVI) |
| `dataRetrieval` | ✅ CRAN confirmed | USGS water data; USVI has groundwater monitoring stations in St. Croix |
| `rnoaa` | ❌ Removed from CRAN (archived Feb 2024) | **Do not use** — use `rerddap` instead |
| `climateR` | ❌ GitHub only, not CRAN | Install via `remotes::install_github("mikejohnson51/climateR")` |
| `tidyUSDA` | ❌ Removed from CRAN (Jan 2026) | Use `rnassqs` instead |
| `rnassqs` | ✅ CRAN confirmed | Vermont agricultural data via NASS API |

All packages recommended in F1–F6 (`wbstats`, `WDI`, `countrycode`, `ggplot2`, `dplyr`, `tidyr`, `readr`, `lubridate`, `ggrepel`, `scales`, `rnaturalearth`, `jsonlite`) are confirmed active on CRAN.

---

### Originality Confirmation

The agent conducted explicit saturation searches. Two findings directly strengthen the recommendations above:

**🔴 Confirmed over-saturated — do not use:**
- Gapminder life expectancy vs. GDP in ggplot2 (the canonical R for Data Science example, used in literally every ggplot2 tutorial, data frozen at 2007)
- Basic WDI + HDI correlation scatter (common in academic R courses and RPubs)

**🟢 Confirmed low saturation:**
- Tourism dependence analysis for SIDS — no tutorial equivalent found
- USVI EPA environmental compliance EDA — no portfolio equivalent found

---

### Noteworthy Discovery: USVI EPA ECHO Data

The EPA ECHO API confirms **658 regulated facilities in the USVI**, including 247 under the Clean Water Act, 122 under the Clean Air Act, and 139 currently in violation — with $8M in assessed penalties. The `echor` R package provides clean access with no registration. This is an interesting angle for a future environmental justice EDA in the USVI that does **not** duplicate F5 (tourism recovery). It is not recommended as one of the six finalists here, but it is flagged as a strong seventh candidate for a future project — particularly compelling combined with `tidycensus` demographic data for USVI census tracts.

---

### Vermont Note

The `opendata.vermont.gov` URL used in the brief description (Section 1 research) is **obsolete**. The correct URL is `data.vermont.gov` (Socrata-based). Vermont environmental data is less accessible than anticipated; most of the interesting analytical territory (post-flood property values, water quality) requires portal navigation rather than simple API/CSV access. Vermont is appropriately not in any of the six finalists — this confirms that assessment. The existing Floodlines project already occupies the Vermont spatial-policy niche more capably than a follow-on EDA could.

---

### WHO GHO API (Supplemental)

Confirmed working, no registration, OData query syntax:
- Base: `https://ghoapi.azureedge.net/api/`
- No R package required — use `jsonlite::fromJSON()` directly
- Covers SIDS countries; relevant supplemental data for F1 or F4 if health/mortality context is needed

---

## Summary: Research Status

| Component | Status |
|-----------|--------|
| Part I: Candidate Landscape (13 candidates) | ✅ Complete |
| Part II: Six detailed Field Note briefs | ✅ Complete |
| Part III: Scoring and top-3 recommendation | ✅ Complete |
| Section 10: First-step plans for all six | ✅ Complete |
| R package verification | ✅ Complete (all CRAN-confirmed packages verified) |
