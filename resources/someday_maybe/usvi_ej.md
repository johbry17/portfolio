# Regulated, But Protected?
### Environmental Regulation, Compliance, and Environmental Justice in the U.S. Virgin Islands

**Project type:** Field Note / Studies  
**Status:** Someday / Maybe — Future Candidate  
**Subject areas:** Environmental policy, environmental justice, regulatory enforcement, sustainable development, geospatial analysis  
**Geographic scope:** U.S. Virgin Islands (St. Croix, St. Thomas, St. John)  
**Primary technologies:** Python or R, EPA ECHO API, `echor`, `tidycensus`, `sf`, `geopandas`, `ggplot2` / Plotly

---

## 1. Project Overview

### Concept

An investigation into the geographic distribution of environmentally regulated facilities, regulatory compliance, enforcement activity, and the socioeconomic characteristics of surrounding communities in the U.S. Virgin Islands.

The EPA's Enforcement and Compliance History Online (ECHO) database provides publicly accessible information about regulated facilities, environmental permits, inspections, violations, enforcement actions, and assessed penalties.

An initial exploration of the ECHO API identified **658 regulated facilities in the USVI**, including:

- 247 facilities associated with the Clean Water Act.
- 122 associated with the Clean Air Act.
- 139 facilities reported as currently in violation.
- Approximately $8 million in assessed penalties.

These are preliminary figures from the initial extraction, not independently revalidated project findings. Regulatory program counts may overlap because individual facilities can be regulated under multiple statutes.

Combining ECHO records with American Community Survey (ACS) demographic data and Census geography creates an opportunity to investigate the relationship between environmental regulation, compliance, enforcement, and community vulnerability.

The project would examine whether environmental regulatory burdens and compliance problems are geographically concentrated, and whether those patterns correspond with socioeconomic differences between communities.

### Central premise

Environmental regulation and environmental protection are not necessarily the same thing.

A facility can be regulated without being inspected frequently. Violations can be identified without resulting in formal enforcement. Penalties can be assessed without necessarily indicating that environmental harm has been remedied.

The project investigates what public regulatory records can tell us about environmental oversight and the communities living alongside regulated activities.

The goal is not to presume environmental injustice, but to investigate whether the available evidence reveals geographic or socioeconomic disparities that warrant further examination.

---

## 2. Research Questions

### Primary research question

**How are environmentally regulated facilities, compliance problems, and enforcement activity distributed across the U.S. Virgin Islands, and what is their relationship to the socioeconomic characteristics of surrounding communities?**

### Supporting questions

**A. The regulatory landscape**
- Where are EPA-regulated facilities located across St. Croix, St. Thomas, and St. John?
- Which environmental programs account for the largest share of regulated facilities?
- Are particular islands or communities disproportionately represented?
- Which industries and facility types dominate the regulatory landscape?

**B. Environmental compliance**
- Where are facilities with identified violations concentrated?
- Which regulatory programs account for the most violations?
- Are violations persistent or isolated?
- What proportion of facilities have recent inspections or compliance evaluations?
- Are there differences in compliance patterns between islands or facility types?

**C. Regulatory enforcement**
- How frequently do identified violations result in enforcement actions?
- How are enforcement actions and assessed penalties distributed across regulatory programs?
- Are facilities with repeated compliance problems receiving additional regulatory attention?
- What can inspection and enforcement histories reveal about regulatory oversight?

**D. Environmental justice**
- What are the socioeconomic characteristics of communities surrounding regulated facilities?
- Are facilities with identified violations disproportionately located in lower-income communities?
- Do communities near regulated facilities differ in poverty, income, housing, age, or other demographic characteristics?
- Are there geographic concentrations where multiple regulated facilities and socioeconomic vulnerabilities overlap?

**E. Environmental policy and governance**
- What does the distribution of regulatory activity reveal about environmental oversight in a small island territory?
- What can public federal compliance data tell us about the relationship between federal environmental regulation and local environmental governance?
- Where are the gaps between regulatory coverage, documented compliance, and meaningful environmental protection?

---

## 3. Research Design and Analytical Approach

The investigation would proceed through four analytical stages.

### Stage 1: Map the regulatory footprint

Extract and clean facility-level ECHO records for the USVI.

Classify facilities by:
- Environmental regulatory program.
- Facility type and industry, where available.
- Island and geographic location.
- Operating status.
- Permit status.

Produce a geographic inventory of regulated facilities.

Important: Distinguish unique facilities from regulatory program records. A single facility may appear under multiple environmental statutes.

### Stage 2: Examine compliance and enforcement

Investigate:
- Facilities with identified violations.
- Significant or high-priority noncompliance classifications.
- Inspection and compliance evaluation histories.
- Enforcement actions.
- Assessed penalties.
- Repeat violations and historical compliance patterns.

Compare compliance and enforcement indicators across regulatory programs, islands, and facility types.

Where possible, distinguish between:
- Any identified violation.
- Significant noncompliance.
- Current compliance status.
- Historical violations.
- Resolved violations.
- Formal enforcement actions.

Avoid treating every violation as equivalent or assuming that an absence of recorded violations establishes compliance.

### Stage 3: Integrate socioeconomic and demographic data

Join facility locations to Census geography using geographic coordinates and spatial analysis.

Use ACS five-year estimates at the census-tract level to examine:
- Poverty rates.
- Median household income.
- Racial composition.
- Age distribution.
- Educational attainment.
- Employment and unemployment.
- Housing tenure and characteristics.

Compare census tracts containing regulated facilities with those without them.

Where sample sizes and geographic coverage permit, investigate demographic differences between communities near facilities with identified violations and other communities.

Potential secondary analysis:
- Calculate the number of regulated facilities per tract.
- Calculate facilities per 1,000 residents.
- Calculate the proportion of facilities with identified violations.
- Compare socioeconomic characteristics across facility-density categories.

### Stage 4: Spatial proximity analysis

As a stretch goal, calculate residential population within one- and three-mile buffers around regulated facilities.

Potential comparisons:
- Population near all regulated facilities.
- Population near facilities with identified violations.
- Population near facilities with significant noncompliance.
- Population near facilities with historical enforcement actions.

Use these comparisons to identify potential patterns of unequal proximity to regulated activities.

**Methodological distinction:** Proximity is not exposure. Facility locations alone do not establish pollutant exposure, environmental harm, or adverse health outcomes. Demonstrating those relationships would require additional environmental monitoring, emissions, water-quality, and potentially health data.

---

## 4. Data Sources

### Primary: EPA ECHO

**EPA Enforcement and Compliance History Online**

https://echo.epa.gov/

Core source for:
- Facility identification and locations.
- Regulatory program participation.
- Permits.
- Inspections.
- Compliance status.
- Violations.
- Enforcement actions.
- Assessed penalties.

Useful documentation:

- ECHO Web Services: https://echo.epa.gov/tools/web-services
- About the Data: https://echo.epa.gov/resources/echo-data/about-the-data
- ECHO FAQ: https://echo.epa.gov/resources/general-info/echo-faq
- Detailed Facility Report Data Dictionary: https://echo.epa.gov/help/reports/dfr-data-dictionary

The ECHO API provides public REST-style services with JSON output and does not require API registration.

The `echor` R package is a potential shortcut for accessing ECHO data:
https://github.com/USGS-R/echor

Verify package maintenance, API compatibility, and available functions when implementation begins.

### Demographic: American Community Survey

**U.S. Census Bureau — American Community Survey (ACS)**

https://www.census.gov/programs-surveys/acs

Use five-year ACS estimates for greater geographic coverage and more stable estimates in relatively small USVI communities.

Potential tools:
- `tidycensus` (R): https://walker-data.com/tidycensus/
- Census API: https://www.census.gov/data/developers/data-sets/acs-5year.html
- Census data portal: https://data.census.gov/

Potential variables include poverty, income, race, age, education, employment, and housing.

Document ACS margins of error and avoid overstating differences between small populations.

### Geographic: Census TIGER/Line

**Census Bureau geographic boundaries**

https://www.census.gov/geographies/mapping-files/time-series/geo/tiger-line-file.html

Use census tract boundaries and geographic identifiers to join ACS demographic data to facility locations.

Potential supplementary geography:
- Island boundaries.
- Municipal and administrative boundaries.
- Coastlines and water bodies.

### Optional Environmental Data

These sources could add environmental context beyond regulatory compliance.

**EPA ATTAINS — Water Quality**
https://www.epa.gov/attains

Potential use:
- Impaired water bodies.
- Water-quality assessments.
- Total Maximum Daily Loads (TMDLs).

**EPA Toxics Release Inventory (TRI)**
https://www.epa.gov/toxics-release-inventory-tri-program

Potential use:
- Reported toxic chemical releases.
- Facility-level releases and transfers.
- Comparison between regulated facilities and reported releases.

**EPA National Emissions Inventory**
https://www.epa.gov/air-emissions-inventories

Potential use:
- Air pollutant emissions.
- Geographic distribution of reported emissions.
- Additional context for air-regulated facilities.

These are optional extensions, not prerequisites for the initial Field Note.

---

## 5. Proposed Visualizations and Outputs

Target: Three to four substantive visualizations, accompanied by a concise research narrative.

### Figure 1 — The Regulatory Landscape

Map of all EPA-regulated facilities across the USVI.

- Symbolize facilities by environmental program.
- Distinguish St. Croix, St. Thomas, and St. John.
- Identify geographic concentrations.
- Show overlapping regulatory designations where practical.

Purpose: Establish the geographic footprint of environmental regulation.

### Figure 2 — Compliance and Enforcement

Analytical comparison of:
- Facilities with identified violations.
- Significant noncompliance.
- Inspection activity.
- Enforcement actions.
- Assessed penalties.

Break down results by regulatory program and island where the data support meaningful comparisons.

Purpose: Examine the relationship between documented compliance problems and regulatory response.

### Figure 3 — Environmental Justice and Community Demographics

Map of regulated facilities overlaid on census tracts shaded by a socioeconomic indicator, such as poverty rate or median household income.

Highlight facilities with identified violations.

Purpose: Investigate whether facilities with compliance problems are concentrated in communities with particular socioeconomic characteristics.

### Figure 4 — Who Lives Near Regulated Facilities?

Compare demographic characteristics of populations living near facilities with those of the broader territory.

Potential approaches:
- One- and three-mile proximity buffers.
- Population-weighted facility proximity.
- Comparisons by violation status.
- Comparisons by regulatory program.

Purpose: Translate facility-level regulatory data into a more community-centered environmental justice analysis.

### Deliverables

- Quarto HTML Field Note.
- Reproducible R or Python analysis.
- Cleaned and documented analytical datasets.
- Interactive or static maps.
- Data dictionary and methodology documentation.
- Source links and reproducibility instructions.

---

## 6. Storytelling Angles

The project has several possible narratives. The final story should emerge from the analysis rather than being selected in advance.

### Angle A: Regulated, But Protected?

The central environmental justice narrative.

Investigate whether the geographic distribution of regulated facilities and documented violations corresponds with socioeconomic disparities.

Underlying question: Does the presence of environmental regulation translate into equitable environmental protection?

### Angle B: The Geography of Enforcement

A regulatory governance narrative.

Examine where violations occur, where inspections take place, and how enforcement actions and penalties are distributed.

Underlying question: What does the geography of environmental enforcement reveal about regulatory oversight?

### Angle C: Environmental Governance on an Island

A public policy and institutional capacity narrative.

Explore the relationship between federal environmental regulation, territorial geography, local governance, and the distinctive challenges of administering environmental policy in a small island jurisdiction.

Underlying question: How does environmental regulation function in a geographically constrained island territory?

### Angle D: Development and Environmental Burden

A sustainable development narrative.

Connect regulated industrial, infrastructure, and commercial activities with the socioeconomic characteristics of surrounding communities.

Potentially explore the tension between economic development, environmental protection, and community well-being.

Underlying question: Who benefits from economic activity, and who lives alongside its environmental consequences?

---

## 7. Methodological Considerations and Limitations

These issues should be incorporated into the research design from the beginning.

**ECHO coverage**
- ECHO is a compliance and enforcement database, not a comprehensive inventory of environmental hazards.
- Coverage differs by regulatory program and facility type.
- Some smaller facilities and state-level inspection records may be incompletely represented.
- The absence of a recorded violation does not establish that a facility is fully compliant.

**Interpreting violations**
- Identified violations are not necessarily final legal adjudications.
- Some violations may have been corrected but remain flagged pending verification.
- Violation definitions and reporting periods differ among regulatory programs.
- Historical and current compliance indicators must be distinguished.

**Interpreting penalties**
- Assessed penalties are not necessarily penalties collected.
- Enforcement cases may cover multiple facilities, meaning case-level penalties cannot automatically be attributed to an individual facility.

**Spatial analysis**
- Facility proximity does not establish exposure.
- Census tracts are imperfect proxies for communities.
- Geographic boundaries do not necessarily correspond to lived community boundaries.
- Population density and residential distribution should be considered when interpreting proximity.

**Demographic analysis**
- ACS five-year estimates have margins of error.
- Small populations can produce unstable estimates.
- Demographic correlations do not establish discrimination or causation.
- Avoid simplistic interpretations of racial composition or socioeconomic vulnerability.

**Temporal alignment**
- ECHO, ACS, and environmental datasets may cover different time periods.
- Historical comparisons require careful alignment of reference years.
- Clearly distinguish current facility status from historical enforcement records.

---

## 8. What This Project Demonstrates

This Field Note would provide evidence of several complementary capabilities.

**Technical**
- Government API retrieval and data engineering.
- Data cleaning and classification.
- Integration of administrative and demographic datasets.
- Geospatial analysis and spatial joins.
- GIS mapping and visualization.
- Reproducible analytical workflows.

**Analytical**
- Environmental data interpretation.
- Regulatory compliance and enforcement analysis.
- Environmental justice research design.
- Socioeconomic and geographic analysis.
- Identification of data limitations and measurement problems.
- Responsible interpretation of observational data.

**Domain knowledge**
- Environmental policy and regulation.
- Environmental justice.
- Sustainable development.
- Small-island governance.
- Federal and territorial institutional relationships.
- Tourism, development, and environmental pressures.

**Communication**
- Translating complex regulatory datasets into accessible public-interest research.
- Communicating policy-relevant findings without overstating evidence.
- Connecting technical analysis to real-world places and communities.

The project would be especially useful as a demonstration of the ability to combine technical data skills with substantive environmental policy knowledge.

---

## 9. Relationship to Existing Portfolio

This would be a natural addition to the Field Notes / Studies series, but it should remain analytically distinct from the USVI tourism recovery project, *After the Storm* (F5).

| Project | Primary subject |
|---|---|
| After the Storm | Tourism, economic recovery, and external shocks |
| Regulated, But Protected? | Environmental regulation, compliance, and environmental justice |

Both use the USVI as a case study, but they investigate different dimensions of the territory.

Together, they demonstrate an ability to examine a place through multiple analytical lenses: economic development, environmental governance, regulatory institutions, and community well-being.

Potential future companion studies:

- **The Island Economy** — Tourism, employment, and economic dependence.
- **Coastal Vulnerability** — Development, climate exposure, and population distribution.

These are possibilities for a broader USVI research collection, not commitments for the initial project.

---

## 10. Suggested Scope and Priorities

### Minimum viable project

1. Extract and validate USVI ECHO facility records.
2. Clean and classify facilities by regulatory program.
3. Analyze violations, inspections, and enforcement actions.
4. Obtain ACS five-year tract-level demographic data.
5. Join facility locations to census tracts.
6. Produce three or four substantive visualizations.
7. Write findings, interpretation, and limitations.

### Stretch goals

- One- and three-mile population proximity analysis.
- Historical enforcement trends.
- Water-quality data from ATTAINS.
- Toxic release data from TRI.
- Air emissions data.
- More sophisticated spatial clustering or statistical analysis.

### Recommended approach

Keep the first version focused on the relationship between regulatory compliance, enforcement, and community demographics.

Do not attempt to build a comprehensive environmental risk assessment. That would require additional data, more extensive methodology, and substantially greater effort.

The initial project should be a compact, rigorous environmental policy investigation.

---

## 11. Professional Positioning

**Potential portfolio description:**

An investigation into the geography of environmental regulation and compliance in the U.S. Virgin Islands. Combining EPA enforcement records, Census demographics, and geospatial analysis, the study examines the distribution of regulated facilities, documented violations, enforcement activity, and the socioeconomic characteristics of surrounding communities.

**Potential professional relevance:**

- Environmental policy analyst.
- Environmental justice researcher.
- GIS / geospatial analyst.
- Research and evaluation analyst.
- Sustainability and ESG data analyst.
- Public-interest data analyst.
- Environmental program analyst.

**Core positioning:** Turning complex government data about people, places, and environments into evidence that supports better decisions.

---

## 12. Project Backlog Notes

**Priority:** Strong future candidate.

**Why revisit it:**
- Distinctive combination of environmental policy and data analysis.
- Directly connects graduate-level subject expertise with technical capabilities.
- Builds on existing knowledge of the USVI.
- Uses accessible, publicly available government data.
- Offers meaningful GIS and demographic analysis.
- Provides a different substantive angle from existing tourism-focused work.

**First step when activated:** Revisit the original ECHO API extraction, verify the 658-facility count and associated statistics, inspect available facility-level fields, and determine which compliance and enforcement variables can be reliably extracted.

**Do not begin with visualization. Begin with data validation and research design.**

**Working title:** *Regulated, But Protected?*

**Working subtitle:** *Environmental Compliance, Enforcement, and Environmental Justice in the U.S. Virgin Islands.*