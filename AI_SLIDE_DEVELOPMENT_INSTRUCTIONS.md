# AI Slide Development Instructions

## 📋 Overview
These instructions are for AI agents tasked with creating slides for the AI Entrepreneurship Workshop presentation. Follow this format exactly to ensure consistency and maintainability across all 30 slides.

## 🎯 Project Requirements
- **Total Slides:** 30 slides
- **Current Status:** 7 slides completed (slides 1-7)
- **Remaining:** 23 slides to be created (slides 8-30)
- **Reference System:** Every slide MUST have reference icons with source counts
- **Academic Standards:** Mix of primary data, academic sources, and industry reports

## 📁 Required File Structure

```
TEPRESENTATION/
├── src/
│   ├── slides/
│   │   ├── slide-01-title.html ✅ COMPLETED
│   │   ├── slide-02-global-stats.html ✅ COMPLETED
│   │   ├── slide-03-investment-trends.html ✅ COMPLETED
│   │   ├── slide-04-benefits.html ✅ COMPLETED
│   │   ├── slide-05-team-survey.html ✅ COMPLETED
│   │   ├── slide-06-challenges.html ✅ COMPLETED
│   │   ├── slide-07-action-plan.html ✅ COMPLETED
│   │   ├── slide-08-[TOPIC].html ❌ TO CREATE
│   │   ├── slide-09-[TOPIC].html ❌ TO CREATE
│   │   ├── ...
│   │   └── slide-30-[TOPIC].html ❌ TO CREATE
│   ├── components/
│   │   ├── header-bar.html
│   │   ├── reference-panel.html
│   │   └── slide-templates/
│   ├── styles/
│   │   ├── main.css
│   │   └── slides.css
│   ├── scripts/
│   │   ├── presentation.js
│   │   └── references.js
│   └── data/
│       ├── slide-config.json
│       ├── references.json
│       └── content/
│           ├── slide-08.json
│           ├── slide-09.json
│           └── ...
├── build/
│   └── presentation.html (final compiled file)
└── tools/
    ├── build-presentation.js
    └── add-slide.js
```

## 🧩 Slide Template Format

### Individual Slide File Structure
Each slide MUST follow this exact HTML structure:

```html
<!-- slide-XX-[topic-name].html -->
<div class="slide" data-slide="XX" data-theme="[academic|industry|mixed|primary]" data-refs="X">
    <!-- REQUIRED: Header bar with slide number and reference icon -->
    <div class="slide-header-bar">
        <div class="slide-number">Slide XX</div>
        <div class="ref-icon [academic|industry|mixed|primary]" onclick="showRefs(XX)">
            📚 X
        </div>
    </div>
    
    <!-- REQUIRED: Main content area -->
    <div class="slide-header">
        <div class="slide-title">[MAIN TITLE]</div>
        <div class="slide-subtitle">[SUBTITLE]</div>
    </div>
    
    <!-- REQUIRED: Content section -->
    <div class="slide-content">
        <!-- Content varies by slide type - see templates below -->
    </div>
</div>
```

### Reference Icon Color Coding
**CRITICAL:** Use correct theme colors:
- `academic` = Green (#27ae60) - For research-heavy slides
- `industry` = Blue (#2980b9) - For business/market data
- `mixed` = Orange (#fd7e14) - For combined sources
- `primary` = Purple (#8e44ad) - For survey/original data

## 📊 Content Templates

### Template 1: Statistics Grid (2x2 or 2x3)
```html
<div class="slide-content">
    <div class="stats-grid">
        <div class="stat-box">
            <span class="stat-number">78%</span>
            <div class="stat-label">descriptive text here</div>
        </div>
        <div class="stat-box">
            <span class="stat-number">$131.5B</span>
            <div class="stat-label">descriptive text here</div>
        </div>
        <!-- Add more stat-box divs as needed -->
    </div>
</div>
```

### Template 2: Benefits/Features Grid
```html
<div class="slide-content">
    <div class="benefits-grid">
        <div class="benefit-item">
            <div class="benefit-icon">🚀</div>
            <div class="benefit-text">
                <div class="benefit-title">Main Benefit Title</div>
                <div class="benefit-description">Detailed description text</div>
            </div>
        </div>
        <!-- Repeat for each benefit -->
    </div>
</div>
```

### Template 3: Chart/Visual Container
```html
<div class="slide-content">
    <div class="chart-container">
        <div class="chart-title">📊 Chart Title Here</div>
        <div class="chart-description">
            Detailed explanation of the chart data<br>
            Key insights and takeaways<br><br>
            <strong>Key Insight:</strong> Main conclusion
        </div>
    </div>
</div>
```

### Template 4: Challenge/Problem List
```html
<div class="slide-content">
    <div class="challenges-list">
        <div class="challenge-item">
            <div class="challenge-icon">🔒</div>
            <div>
                <div class="benefit-title">Challenge Title</div>
                <div class="benefit-description">Description with statistics</div>
            </div>
        </div>
        <!-- Repeat for each challenge -->
    </div>
</div>
```

### Template 5: Action Steps/Process
```html
<div class="slide-content">
    <div class="action-plan">
        <h3 style="color: #27ae60; margin-bottom: 20px;">Framework Title</h3>
        <div class="action-steps">
            <div class="action-step">
                <div class="step-number">1</div>
                <div class="benefit-title">Step Title</div>
                <div class="benefit-description">Step description</div>
            </div>
            <!-- Repeat for each step -->
        </div>
    </div>
</div>
```

## 📚 Reference System Requirements

### Reference Icon Requirements
**EVERY SLIDE MUST HAVE:**
1. Reference count in top-right corner
2. Clickable reference icon with proper color coding
3. Corresponding reference data in references.json

### Reference Count Guidelines
- **3-5 sources:** Basic slides with standard research
- **6-8 sources:** Data-heavy slides with multiple datasets  
- **9-12 sources:** Complex analysis slides with comprehensive research
- **13+ sources:** Major topic slides requiring extensive backing

### Reference Data Structure
For each slide, create corresponding entry in `data/references.json`:

```json
{
  "slide-XX": {
    "title": "Slide Title",
    "total_refs": X,
    "primary_sources": [
      {
        "id": 1,
        "title": "Source Title",
        "type": "primary",
        "method": "Research method",
        "sample": "Sample size/details",
        "date": "2025",
        "access": "Link or internal"
      }
    ],
    "academic_sources": [
      {
        "id": 2,
        "title": "Academic Paper Title", 
        "authors": "Author names",
        "year": 2024,
        "type": "academic",
        "sample": "Study details",
        "url": "https://link-to-source.com",
        "credibility": "Tier 1",
        "methodology": "Research methodology"
      }
    ],
    "industry_sources": [
      {
        "id": 3,
        "title": "Industry Report Title",
        "organization": "Company/Organization",
        "year": 2025,
        "type": "industry", 
        "url": "https://link-to-report.com",
        "credibility": "Tier 2",
        "bias_note": "Potential bias description"
      }
    ],
    "limitations": [
      "Limitation 1: Description of research limitation",
      "Limitation 2: Bias or methodology concern",
      "Limitation 3: Data recency or scope limitation"
    ]
  }
}
```

## 🎨 Styling Guidelines

### Color Palette
- **Primary Text:** #2c3e50 (Dark blue-gray)
- **Secondary Text:** #7f8c8d (Gray)
- **Accent Blue:** #3498db (Statistics, highlights)
- **Background:** #ffffff (White)
- **Success Green:** #27ae60 (Academic sources)
- **Industry Blue:** #2980b9 (Business sources)
- **Warning Orange:** #fd7e14 (Mixed sources)
- **Primary Purple:** #8e44ad (Original data)

### Typography
- **Titles:** Segoe UI, 42pt, Bold
- **Subtitles:** Segoe UI, 18pt, Regular
- **Body Text:** Segoe UI, 16pt, Regular
- **Statistics:** Segoe UI, 36-48pt, Bold
- **Reference Icons:** Segoe UI, 10pt, Bold

## 📋 Content Creation Checklist

For each new slide, ensure:

### ✅ File Structure
- [ ] HTML file named: `slide-XX-[topic].html`
- [ ] JSON content file: `data/content/slide-XX.json`
- [ ] References entry in: `data/references.json`
- [ ] Slide config entry in: `data/slide-config.json`

### ✅ HTML Requirements
- [ ] Correct slide number in header bar
- [ ] Proper reference icon with correct color theme
- [ ] Reference count matches actual sources
- [ ] Consistent CSS classes used
- [ ] onclick="showRefs(XX)" function call

### ✅ Content Standards
- [ ] Title and subtitle present
- [ ] Content follows appropriate template
- [ ] Statistics include source attribution
- [ ] Professional language used
- [ ] Key insights highlighted

### ✅ Reference Requirements
- [ ] Minimum 3 sources per slide
- [ ] Mix of source types (primary, academic, industry)
- [ ] Proper citations with methodology
- [ ] Links to accessible sources
- [ ] Limitations and biases noted
- [ ] Source credibility ratings included

## 🚀 Suggested Slide Topics (Slides 8-30)

### AI Tools & Implementation (Slides 8-12)
- Slide 8: AI Tools Landscape by Category
- Slide 9: Cost-Benefit Analysis of AI Tools
- Slide 10: Implementation Timeline & Milestones
- Slide 11: AI Integration Best Practices
- Slide 12: ROI Measurement Framework

### Market Analysis (Slides 13-17)
- Slide 13: Competitive Analysis Framework
- Slide 14: Market Opportunity Sizing
- Slide 15: Customer Segmentation with AI
- Slide 16: Pricing Strategy Optimization
- Slide 17: Geographic Market Differences

### Technical Deep Dive (Slides 18-22)
- Slide 18: AI Architecture for Startups
- Slide 19: Data Requirements & Management
- Slide 20: Security & Privacy Considerations
- Slide 21: Scalability Planning
- Slide 22: Technology Stack Recommendations

### Case Studies & Examples (Slides 23-27)
- Slide 23: Successful AI Startup Case Study 1
- Slide 24: Successful AI Startup Case Study 2
- Slide 25: Failure Analysis & Lessons Learned
- Slide 26: Industry-Specific Applications
- Slide 27: Future Trends & Predictions

### Workshop Conclusion (Slides 28-30)
- Slide 28: Key Takeaways Summary
- Slide 29: Action Planning Workshop
- Slide 30: Resources & Next Steps

## 🔧 Build Process

### Development Workflow
1. Create individual slide HTML file
2. Create corresponding JSON content file
3. Add references to references.json
4. Update slide-config.json
5. Test reference links and functionality
6. Validate HTML structure and CSS classes

### Quality Assurance
- Check reference icon positioning and color
- Verify source count matches actual sources
- Test clickable reference functionality
- Validate professional content quality
- Ensure consistent styling across slides

### File Naming Convention
- Slide files: `slide-XX-[topic-kebab-case].html`
- Content files: `slide-XX.json`
- Topics: Use descriptive, hyphenated names
- Numbers: Always two digits (01, 02, ..., 30)

## ⚠️ Critical Requirements

### MUST HAVE for every slide:
1. **Reference system** - Icon with correct count and color
2. **Professional content** - No casual language or typos
3. **Source attribution** - All statistics properly cited
4. **Consistent structure** - Follow templates exactly
5. **Academic standards** - Mix of credible source types

### MUST AVOID:
1. ❌ No reference icons or counts
2. ❌ Inconsistent CSS classes or structure
3. ❌ Unsourced statistics or claims
4. ❌ Casual or unprofessional language
5. ❌ Broken reference links or missing data

## 📞 Final Notes

This document ensures consistency and quality across all 30 slides. Every AI agent working on this project should reference this document before creating new slides. The modular approach allows multiple slides to be developed simultaneously while maintaining the professional standard established in slides 1-7.

For questions about specific templates or requirements, refer to the existing completed slides (1-7) as working examples of the expected quality and format.