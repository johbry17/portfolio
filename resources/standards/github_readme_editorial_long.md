# Field Notes: GitHub README Editorial Standard

## 1. Purpose and philosophy

The GitHub README is an **introductory layer and technical gateway** to a Field Note. It introduces the research, communicates its principal findings, establishes its credibility, and helps interested readers navigate the underlying work.

It is not a fifth research document.

The README serves a somewhat different audience from the published Field Note. The general public will usually encounter a project through its portfolio page or Overview. The README is principally for readers who want to understand the project as a piece of research: its scope, evidence, analytical approach, data sources, limitations, and reproducibility.

A good README should let a reader answer five questions:

1. What question does this project investigate?
2. What did the analysis find?
3. What data and analytical approach support those findings?
4. What are the important limitations?
5. How can I inspect or reproduce the work?

### Guiding principles

- **Consistent architecture, flexible expression.** Field Notes should share recognizable conventions without being forced into identical structures.
- **Research first, technology second.** Explain the question and findings before listing tools and packages.
- **Transparency over performance.** Document weaknesses, uncertainty, and inconvenient results rather than presenting an artificially polished account.
- **Appropriate technical depth.** Provide enough information to establish credibility and guide further investigation, while leaving detailed documentation to the published research pages.
- **Project-specific character.** The subject, narrative, methods, and complexity of each project should determine its README's emphasis and length.

---

## 2. Relationship to the published Field Note

The README should link prominently to the four published research pages:

| Page | Purpose |
|---|---|
| **Overview** | Accessible, standalone account of the research question, findings, evidence, and conclusion |
| **Analysis** | Detailed analytical results, figures, diagnostics, and interpretation |
| **Data** | Data sources, variables, definitions, coverage, units, and source limitations |
| **Methods** | Research design, data processing, analytical choices, assumptions, limitations, and reproducibility |

The README should summarize these documents, not duplicate them.

A reader should be able to understand the project's purpose and principal findings without leaving GitHub. Someone who wants more detail should have an obvious path to the relevant research page.

The README can link to additional resources when useful, but the four research pages form the standard publication architecture.

---

## 3. Recommended README structure

The following is a recommended outline, not a mandatory sequence of headings. Sections should be included, omitted, combined, or expanded according to the project.

### A. Project title and subtitle

Use the project's established title and a concise descriptive subtitle.

A short framing question or italicized introductory sentence is welcome when it adds something to the title and subtitle.

### B. Published Field Note

Place links to the published site near the beginning of the README.

A compact table is generally effective:

| Page | Content |
|---|---|
| Overview | Narrative overview and principal findings |
| Analysis | Detailed analytical results |
| Data | Sources and data documentation |
| Methods | Research design and reproducibility |

Include the main publication link as well.

### C. Project overview

A short introduction explaining:

- The subject and context.
- The research question or central problem.
- The geographic and temporal scope.
- The principal data or evidence.
- The broad analytical approach.
- The project's contribution or reason for investigation.

This section should be understandable to an informed reader who has not yet visited the published site.

Avoid reproducing the full Overview narrative. The README's purpose is orientation, not a second public-facing essay.

### D. Key findings

Include the most important results, normally three to six, depending on the project.

Findings should be substantive rather than promotional. Where appropriate, include:

- Quantitative results and relevant units.
- Comparisons, trends, or relationships.
- The relevant sample or population.
- Statistical significance or uncertainty.
- Important qualifications.

Distinguish clearly between observed results, interpretations, and possible explanations.

Not every project needs a fixed number of findings. A descriptive mapping project, for example, may communicate its contribution through spatial patterns rather than statistical results.

Findings should reflect the final analysis, not preliminary expectations. During development, this section can remain provisional or be omitted.

### E. Research design

Provide a concise account of how the project approaches its research question.

Depending on the project, this may include:

- Unit of analysis.
- Geographic and temporal scope.
- Candidate universe and final analytical sample.
- Primary and complementary indicators.
- Outcome variables.
- Analytical or statistical techniques.
- Comparison groups or baseline periods.
- Sensitivity analyses and robustness checks.
- Important definitions and distinctions.

Use a compact table when it makes the design easier to understand.

The README should communicate the logic of the research design, not reproduce the full methodology. Detailed specifications, assumptions, and implementation belong in Methods.

For projects without formal statistical modeling, explain the analytical framework or organizing logic instead.

### F. Data sources

Identify the principal datasets and their providers.

A compact table is generally useful:

| Dataset | Source | Purpose | Coverage |
|---|---|---|---|

Include links to original sources wherever possible.

The README should identify the data that materially support the analysis, not necessarily every intermediate file or supplementary dataset.

Call attention to important source characteristics, such as:

- Different definitions of seemingly similar indicators.
- Incompatible units or measurement approaches.
- Institutional or geographic coverage.
- Missing observations or incomplete time series.
- Retrieval dates or data snapshots.
- Important source revisions or known anomalies.

The Data page should contain the full documentation: variables, definitions, transformations, coverage, units, and source limitations.

### G. Principal figures

Include a selection of the project's most informative figures.

Three to six principal figures is a useful default, not a quota. Select figures that help a reader understand the central question, findings, and analytical contribution.

For each figure, provide a short descriptive caption.

Figures should:
- Be legible at the size displayed on GitHub.
- Use meaningful filenames.
- Have descriptive captions or alt text where appropriate.
- Link to the published analysis when further interpretation is needed.

Do not reproduce every figure from the Analysis page. The README should provide a visual introduction, not a figure archive.

Infographics and other custom explanatory graphics are optional. They should be used when they genuinely clarify a complex subject, process, or relationship—not because every project needs one.

### H. Tools and technologies

List the principal tools, languages, libraries, and publication technologies.

Examples include R, Python, SQL, GIS software, Quarto, and major analytical or visualization packages.

Focus on technologies that materially contributed to the project. Avoid exhaustive package inventories unless they are useful for reproducing the analysis.

### I. Pipeline and reproducibility

Explain how the analysis can be reproduced.

Depending on the project, include:

- Required software and versions.
- Package or dependency installation.
- Data acquisition instructions.
- Script execution order.
- Rendering or publication commands.
- Expected outputs.
- Important assumptions about working directories or file paths.

Be explicit about what happens automatically and what requires manual action.

For example, distinguish between:
- Data retrieved dynamically from an API.
- Fixed source files downloaded at a particular date.
- Locally processed datasets.
- Precomputed outputs used by the publication.

A reader should not be left assuming that rendering a Quarto document will automatically rerun an entire analytical pipeline when it does not.

For simple projects, a short set of instructions is sufficient. More complicated projects may need a fuller reproduction guide.

### J. Repository structure

Provide a concise directory tree showing the major components of the project.

The tree should help readers locate source code, data, outputs, documentation, and publication files.

Include only directories and files that help explain the project's organization. A README should not become a complete inventory of every file.

Repository structure should reflect the actual project, not an idealized template.

### K. Limitations and data quality

Document the limitations that materially affect the research or interpretation.

Depending on the project, these may include:

- Missing or incomplete data.
- Measurement limitations.
- Inconsistent definitions across sources.
- Sample selection and coverage restrictions.
- Outliers and influential observations.
- Temporal mismatches.
- Data-quality anomalies.
- Preliminary or unrevised figures.
- Statistical uncertainty.
- Limits on causal interpretation.

Distinguish between limitations of the underlying data and limitations of the analytical design.

When an issue materially changes the analysis, explain how it was handled. For example, state whether an anomalous observation was excluded, set to missing, retained, or treated through a sensitivity analysis.

The README should summarize the most consequential issues. Full documentation belongs in Data and Methods.

### L. References

List the principal external sources used in the research, with links to original providers or documentation.

This section is particularly useful when the project draws on multiple institutions, publications, or methodological references.

Avoid duplicating the entire data-source inventory if the Data section already provides it. References should add context or identify important underlying documentation.

### M. License

State the licensing arrangements clearly.

Where appropriate, distinguish among:
- Original analysis code.
- Original narrative, documentation, and figures.
- Third-party datasets and assets.

Do not imply that a project's license automatically applies to third-party data or materials.

The README should explain which license governs which materials and direct readers to the relevant license files or source terms.

### N. Author

A brief author line and links to relevant professional profiles or portfolio resources are appropriate.

For example:

- Author and publication date.
- Portfolio.
- LinkedIn.
- GitHub.

An email address is optional. The closing should be unobtrusive and consistent across projects.

---

## 4. Required, recommended, and optional elements

The following distinctions preserve consistency without imposing unnecessary content.

### Core elements

Every finished Field Note README should normally include:

- Project title and descriptive framing.
- Links to the published Field Note.
- Project overview.
- Key findings or principal contributions.
- Principal data sources.
- Tools and technologies.
- Repository structure.
- Important limitations.
- Licensing information.
- Author attribution.

### Recommended when relevant

Include these when they add meaningful information:

- Research design.
- Principal figures.
- Pipeline and reproduction instructions.
- References.
- Detailed data-quality notes.
- Statistical diagnostics and robustness checks.
- Institutional or geographic scope distinctions.
- Data retrieval dates and version information.

### Optional

Use only when justified by the project:

- Table of contents.
- Custom infographic.
- Detailed project phases or development milestones.
- Extensive package inventories.
- Full execution logs.
- Additional acknowledgments.
- Detailed change history.
- Supplementary datasets or external resources.

A section should not be included simply because it appears in another Field Note.

---

## 5. Finished projects versus work in progress

The README should reflect the actual state of the project.

### Work in progress

A development README may include:

- Project objectives and working research questions.
- Current development stage.
- Planned analytical work.
- Outstanding data or technical problems.
- Provisional findings.
- Known incomplete components.
- Immediate next steps.

Development status should be clearly labeled. Preliminary results should not be presented as final findings.

A phase table or progress checklist can be useful during active development, particularly for projects with several distinct analytical stages.

### Finished projects

A published README should describe the completed research rather than preserve its development history.

It should:
- Present the final research question and findings.
- Document the actual analytical design.
- Explain how the final results can be reproduced.
- Identify remaining limitations and unresolved issues.
- Remove obsolete plans, completed-task checklists, and temporary development notes.

A finished project may retain a short note about future work if it is genuinely relevant, but a development roadmap should not become a permanent feature by default.

---

## 6. Editorial and presentation conventions

### Writing

- Use clear, direct, professional prose.
- Prefer substantive descriptions over promotional language.
- Explain technical terminology when it first appears.
- Use consistent terminology throughout the README and published pages.
- Be precise about units, periods, samples, and denominators.
- Distinguish association from causation.
- Avoid overstating what the data establish.

The tone should be intellectually curious and accessible without sacrificing analytical rigor.

### Headings and organization

Use a consistent heading hierarchy:

- H1: Project title.
- H2: Major sections.
- H3: Subsections.

Keep sections reasonably concise. Use tables for structured comparisons, lists for discrete items, and prose for explanation.

A table of contents is useful for longer READMEs, but unnecessary for short ones.

### Links

Prefer descriptive link text over raw URLs.

Link to original sources and published research pages rather than relying exclusively on secondary references.

Check that links work and that local figure paths resolve correctly.

### Figures

Use consistent, descriptive filenames and captions. Avoid unnecessary decorative imagery.

The README should display figures that contribute to understanding the research, not merely demonstrate that visualizations exist.

### Terminology and consistency

The README, Overview, Analysis, Data, and Methods pages should agree on:

- Research question and scope.
- Dates and periods.
- Sample sizes.
- Indicator names and definitions.
- Units and denominators.
- Principal findings.
- Data limitations.
- Analytical specifications.

When a project has multiple samples, indicators, or institutional categories, explain the distinctions rather than collapsing them into a single headline figure.

---

## 7. Quality-control checklist

Before publishing or updating a README, check the following.

### Research and findings
- [ ] Does the overview accurately describe the final research?
- [ ] Are the key findings supported by the published analysis?
- [ ] Are sample sizes, dates, and units correct?
- [ ] Are associations, interpretations, and causal claims distinguished?
- [ ] Are important qualifications visible?

### Data and methods
- [ ] Are principal data sources linked to their original providers?
- [ ] Are important differences among indicators explained?
- [ ] Are major data-quality problems documented?
- [ ] Does the research design match the actual analysis?
- [ ] Are limitations accurately described?

### Reproducibility
- [ ] Are software and dependency requirements accurate?
- [ ] Are execution instructions tested?
- [ ] Are dynamic and fixed data sources distinguished?
- [ ] Are expected outputs and rendering steps clear?
- [ ] Does the repository tree reflect the actual files?

### Publication and presentation
- [ ] Do all four research-page links work?
- [ ] Do figures display correctly?
- [ ] Are captions and links descriptive?
- [ ] Is the README consistent with the published pages?
- [ ] Are obsolete development notes removed from the finished README?
- [ ] Are license terms and their scope clear?

---

## 8. Licensing guidance

A practical default for future Field Notes is:

| Material | Suggested license |
|---|---|
| Original code | MIT License |
| Original narrative, documentation, and figures | Creative Commons Attribution 4.0 International (CC BY 4.0) |
| Third-party data and assets | Their respective licenses and terms |

This arrangement permits reuse while making the distinction between software and original research content explicit.

It is a recommendation, not an assumption about the current projects. Each repository should contain the applicable license files, and the README should explain their scope.

References:
- MIT License: https://opensource.org/license/mit
- Creative Commons Attribution 4.0: https://creativecommons.org/licenses/by/4.0/

---

## 9. The standard in one sentence

**Every Field Note README should be a clear, accurate, and audience-aware gateway to the research: introducing the question, communicating the findings, documenting the evidence and approach, acknowledging limitations, and showing readers how to explore or reproduce the work—without duplicating the research publication or sacrificing the character of the individual project.**