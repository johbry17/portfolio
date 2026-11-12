# DC Shady Streets

Dataset 1 — Pedestrian Friendliness Index

DC's census-block-level walkability scores, published by the District Department of Transportation. The dataset describes relative pedestrian friendliness based on factors such as connectivity, sidewalks, intersections, and block size.  
[Pedestrian Friendliness Index Census Blocks](https://catalog.data.gov/dataset/pedestrian-friendliness-index-census-blocks)   
[DCGIS_DATA/MoveDC - All Layers and Tables](https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/MoveDC/MapServer/layers)

[Download GeoJSON](https://opendata.dc.gov/api/download/v1/items/fa01258a60314a6094dca3597bca5e78/geojson)

[Download CSV](https://opendata.dc.gov/api/download/v1/items/fa01258a60314a6094dca3597bca5e78/csv)

Metadata and alternate formats: [DC Open Data](https://opendata.dc.gov/datasets/DCGIS::pedestrian-friendliness-index-census-blocks)

Dataset 2 — Urban Tree Canopy by Census Block (2020)

Tree canopy measurements summarized at census-block level, making this a promising candidate for comparison with the pedestrian-friendliness data.  
[Data.gov](https://catalog.data.gov/dataset/urban-tree-canopy-by-census-block-in-2020)


[Download GeoJSON](https://opendata.dc.gov/api/download/v1/items/cd2da0109c1b46c3a2ec9890e44623d3/geojson)

[Download CSV](https://opendata.dc.gov/api/download/v1/items/cd2da0109c1b46c3a2ec9890e44623d3/csv)

Metadata and alternate formats: [Urban Tree Canopy by Census Block](https://opendata.dc.gov/datasets/DCGIS::pedestrian-friendliness-index-census-blocks)

Which format should you download?
- GeoJSON: Best if you want to retain boundaries and make maps.
- CSV: Best for a quick statistical EDA, provided the fields you need are included. A CSV may omit the polygon geometries, which means it won't necessarily be sufficient for spatial analysis.

I'd download both GeoJSON files first. Claude can inspect the attributes, and Python can read the geographic features directly. You can always export simplified CSVs for the statistical analysis.

One caveat: the pedestrian index was last updated in the city's catalog in 2022, while the canopy data represent 2020. That doesn't automatically invalidate the comparison, but Claude should check the dates, definitions, and geographic units before interpreting any relationship.

# Claude prompt (proposed)

# Preliminary EDA: Is DC's Walkability–Shade Gap Worth Investigating?

## Context

I'm evaluating a potential data-analysis portfolio project for Field Notes, my independent data analysis and visualization portfolio.

The proposed research question is:

**Where in Washington, DC, do pedestrian-friendly environments coincide with relatively low tree-canopy coverage?**

The idea is to investigate whether areas that score well on the city's Pedestrian Friendliness Index (PFI) also have substantial tree canopy, and to identify potential mismatches worth investigating further.

This is a preliminary feasibility study, not the final project.

## Attached data

1. `pedestrian_friendliness_index.geojson` — DC Pedestrian Friendliness Index at census-block level.
2. `urban_tree_canopy_census_block_2020.geojson` — DC Urban Tree Canopy by Census Block in 2020.

These filenames are illustrative; use the actual uploaded filenames.

Official sources:
- PFI: https://catalog.data.gov/dataset/pedestrian-friendliness-index-census-blocks
- Tree canopy: https://catalog.data.gov/dataset/urban-tree-canopy-by-census-block-in-2020

## Your task

Act as an experienced data analyst conducting a rapid, rigorous exploratory data analysis to determine whether this project is worth pursuing.

Use Python and, where appropriate, pandas, GeoPandas, NumPy, SciPy, Matplotlib, and Seaborn.

**First, inspect the data. Do not assume that the datasets are directly joinable.**

### 1. Data audit

For each dataset, report:

- Number of records and columns.
- Field names, data types, and a few representative values.
- Available measures of pedestrian friendliness and tree canopy.
- Missing values, duplicate records, suspicious values, and relevant outliers.
- Geographic coverage and coordinate reference system.
- Any census-block identifiers, geographic identifiers, or other plausible join keys.
- Available metadata about measurement dates, definitions, and methods.

Determine whether the datasets represent compatible geographic units and periods. Identify any differences in boundaries, census vintages, or measurement definitions that could affect the analysis.

### 2. Assess whether the datasets can be combined

Investigate possible join keys and their reliability.

If a direct identifier-based join is not defensible, determine whether a spatial join or geographic aggregation would be appropriate.

Check for:
- One-to-one, one-to-many, and unmatched records.
- Duplicate or mismatched geographic units.
- Differences in geographic boundaries.
- Whether canopy percentages and PFI scores use comparable denominators or scales.

Do not silently force a join. If a reliable combination is not possible with these files, explain what additional data or processing would be needed.

### 3. Conduct an exploratory analysis

If the data can be combined defensibly:

- Examine distributions of PFI and canopy measures.
- Calculate descriptive statistics and missingness.
- Plot PFI against canopy coverage.
- Calculate Pearson and Spearman correlations where appropriate.
- Examine nonlinear patterns and potential outliers.
- Identify areas with relatively high PFI and low canopy, and the converse.
- Compare results under more than one reasonable threshold or classification method.

If a PFI score is ordinal, categorical, or otherwise unsuitable for a particular statistic, explain that and choose an appropriate alternative.

Do not confuse a correlation with causation. Do not interpret the city's relative walkability score as a direct measure of comfort, safety, accessibility, or actual walking behavior.

### 4. Produce a small set of useful visualizations

Create, at minimum, if the data support them:

1. Distributions of PFI and canopy coverage.
2. A scatterplot of PFI versus canopy, including a trend line if appropriate.
3. A map showing the spatial distribution of the combined measures.
4. A map or table identifying high-PFI/low-canopy areas.

Use readable labels, meaningful units, appropriate geographic boundaries, and clear legends. Save the figures as PNG files.

Do not produce a large collection of redundant plots.

### 5. Evaluate the research opportunity

The basic question of which DC neighborhoods have the most shade has already been addressed publicly, including by Casey Trees:

https://caseytrees.org/2026/07/mapping-dcs-most-and-least-shaded-neighborhoods/

The potential contribution here is the intersection of pedestrian friendliness and canopy, not simply another shade map.

Assess:

- Whether the relationship is interesting or sufficiently unexpected to merit investigation.
- Whether the data allow a defensible analysis at the available geographic scale.
- What this analysis adds beyond a straightforward comparison of two existing maps.
- Whether the results could support a useful, evidence-based narrative.
- What additional data might materially improve the project.

Distinguish actual findings from hypotheses and ideas for future research. Do not invent findings or claim novelty without evidence.

### 6. Deliverables

Provide:

**A. Executive summary:** A concise assessment of whether this project is worth pursuing.

**B. Data audit:** Key findings about data quality, compatibility, limitations, and join feasibility.

**C. Analytical results:** The most meaningful statistics, patterns, and visualizations, with cautious interpretations.

**D. Recommended next step:** Choose one:
- Proceed with the project as proposed.
- Proceed, but substantially refine the question.
- Acquire additional data before proceeding.
- Abandon this particular approach.

**E. Reproducible code:** Supply a complete, runnable Python script or notebook, including imports, file loading, validation, analysis, visualizations, and output saving. Use the uploaded filenames and document any dependencies.

**F. Research alternatives:** If the initial approach is weak, suggest up to three more distinctive questions that could be answered with these data or modest additions.

## Working principles

- Prioritize a fast, informative feasibility assessment over a polished final product.
- Make defensible analytical decisions and explain consequential assumptions.
- Do not download additional datasets or expand the scope unnecessarily.
- If an important data issue prevents a valid analysis, report the blocker rather than manufacturing a result.
- Keep the analysis understandable to a developing data analyst who is comfortable with Python and pandas but still learning geospatial analysis.

Finish with a clear verdict: Is there enough here for a distinctive Field Notes project, and what is the strongest next step?