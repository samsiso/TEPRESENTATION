# PowerPoint Reference Icons - Step-by-Step Guide

## Quick Setup for Each Slide

### Step 1: Create Reference Icon Shape
1. **Insert → Shapes → Rounded Rectangle**
2. **Size:** Width: 70px, Height: 25px
3. **Position:** Bottom-right corner (15px from edges)
4. **Color:** Choose based on source type:
   - 🟢 **Academic Sources:** RGB(40, 167, 69) - Green
   - 🔵 **Industry Reports:** RGB(23, 162, 184) - Blue  
   - 🟠 **Mixed Sources:** RGB(253, 126, 20) - Orange
   - 🟣 **Primary Data:** RGB(102, 126, 234) - Purple

### Step 2: Add Reference Text
1. **Right-click shape → Edit Text**
2. **Text:** `📚 X` (where X = number of sources)
3. **Font:** Segoe UI, 11pt, Bold, White color
4. **Alignment:** Center both horizontally and vertically

### Step 3: Make It Clickable (Optional)
1. **Right-click shape → Hyperlink**
2. **Link to:** Place in This Document → Create new slide with references
3. **Or:** Link to external document with full reference list

## Reference Count by Slide Type

### Slide Templates with Reference Counts

#### **Slide 1: Title/Introduction**
```
Shape Text: 📚 3
Color: Academic Green
Sources: Course framework, methodology, overview studies
```

#### **Slide 2: Market Statistics** 
```
Shape Text: 📚 5
Color: Mixed Orange
Sources: Industry reports + academic data
```

#### **Slide 3: Charts/Data Visualization**
```
Shape Text: 📚 8
Color: Industry Blue
Sources: Multiple data sources feeding the chart
```

#### **Slide 4: Key Benefits/ROI**
```
Shape Text: 📚 6
Color: Academic Green
Sources: Research studies on AI performance
```

#### **Slide 5: Survey Results**
```
Shape Text: 📚 4
Color: Primary Purple
Sources: Your survey + benchmarking data
```

#### **Slide 6: Challenges/Risks**
```
Shape Text: 📚 7
Color: Mixed Orange
Sources: Academic ethics + industry implementation studies
```

#### **Slide 7: Action Plan/Next Steps**
```
Shape Text: 📚 5
Color: Academic Green
Sources: Best practices frameworks
```

## PowerPoint VBA Automation (Advanced)

### Macro to Add Icons to All Slides
```vba
Sub AddReferenceIconsToAll()
    Dim slide As Slide
    Dim refShape As Shape
    Dim refCounts As Variant
    Dim i As Integer
    
    ' Define reference counts for each slide
    refCounts = Array(3, 5, 8, 6, 4, 7, 5)
    
    For i = 1 To ActivePresentation.Slides.Count
        Set slide = ActivePresentation.Slides(i)
        
        ' Remove existing reference icon if present
        On Error Resume Next
        slide.Shapes("RefIcon" & i).Delete
        On Error GoTo 0
        
        ' Create new reference icon
        Set refShape = slide.Shapes.AddShape(msoShapeRoundedRectangle, _
            slide.Master.Width - 85, slide.Master.Height - 40, 70, 25)
        
        With refShape
            .Name = "RefIcon" & i
            .TextFrame.TextRange.Text = "📚 " & refCounts(i - 1)
            .TextFrame.TextRange.Font.Size = 11
            .TextFrame.TextRange.Font.Bold = True
            .TextFrame.TextRange.Font.Color = RGB(255, 255, 255)
            .TextFrame.HorizontalAnchor = msoAnchorCenter
            .TextFrame.VerticalAnchor = msoAnchorMiddle
            
            ' Color coding based on slide content
            Select Case i
                Case 1, 4, 7: .Fill.ForeColor.RGB = RGB(40, 167, 69)  ' Academic
                Case 3: .Fill.ForeColor.RGB = RGB(23, 162, 184)        ' Industry
                Case 5: .Fill.ForeColor.RGB = RGB(102, 126, 234)       ' Primary
                Case Else: .Fill.ForeColor.RGB = RGB(253, 126, 20)     ' Mixed
            End Select
            
            .Line.Visible = False
            .Shadow.Type = msoShadow21
        End With
    Next i
    
    MsgBox "Reference icons added to all slides!"
End Sub
```

## Google Slides Setup

### Manual Method
1. **Insert → Shape → Rounded Rectangle**
2. **Resize:** Small rectangle in bottom-right
3. **Fill color:** Choose from color scheme above
4. **Add text:** Click shape → Type `📚 X`
5. **Text formatting:** Bold, white color, center aligned

### Google Apps Script (Advanced)
```javascript
function addReferenceIcons() {
  const presentation = SlidesApp.getActivePresentation();
  const slides = presentation.getSlides();
  const refCounts = [3, 5, 8, 6, 4, 7, 5];
  
  slides.forEach((slide, index) => {
    const pageWidth = 720; // Standard slide width
    const pageHeight = 540; // Standard slide height
    
    const shape = slide.insertShape(
      SlidesApp.ShapeType.ROUND_RECTANGLE,
      pageWidth - 85, pageHeight - 40, 70, 25
    );
    
    shape.getText().setText(`📚 ${refCounts[index]}`);
    shape.getText().getTextStyle()
      .setBold(true)
      .setForegroundColor('#FFFFFF')
      .setFontSize(11);
    
    // Color coding
    const colors = ['#28a745', '#fd7e14', '#17a2b8', '#28a745', '#667eea', '#fd7e14', '#28a745'];
    shape.getFill().setSolidFill(colors[index]);
  });
}
```

## Reference Data Organization

### Create Reference Slide for Each Icon

#### Example: Slide 3 References (📚 8)
```
Sources for Slide 3: AI Investment Trends

PRIMARY SOURCES (2):
[1] Team AI Usage Survey 2025 - Google Forms (n=15)
[2] Workshop Pre-Assessment Data - Internal

ACADEMIC SOURCES (3):
[3] McKinsey Global AI Survey (2024) - 1,491 participants, 101 countries
[4] Stanford AI Index 2025 - Annual peer-reviewed report  
[5] CB Insights AI Investment Analysis - Q4 2024 data

INDUSTRY SOURCES (3):
[6] PwC AI Predictions 2025 - 1,000+ executives surveyed
[7] Deloitte AI State of Play - 2,880 business leaders
[8] Gartner AI Market Research - Enterprise adoption trends

LIMITATIONS:
• Industry sources may overstate benefits
• Survey sample skews tech-forward
• 6-12 month academic publication lag
```

## Quick Copy-Paste Icons

### For PowerPoint/Google Slides Text Boxes:
- **3 Sources:** `📚 3`
- **4 Sources:** `📚 4`  
- **5 Sources:** `📚 5`
- **6 Sources:** `📚 6`
- **7 Sources:** `📚 7`
- **8 Sources:** `📚 8`

### Color Hex Codes:
- **Academic Green:** `#28a745`
- **Industry Blue:** `#17a2b8`
- **Mixed Orange:** `#fd7e14`
- **Primary Purple:** `#667eea`

## Quality Checklist

✅ **Every slide has visible reference count**
✅ **Icons positioned consistently (bottom-right)**
✅ **Color coding matches source types**
✅ **Font size readable but not distracting**
✅ **Reference backup slides/documents prepared**
✅ **Hyperlinks working (if using clickable icons)**

## Benefits for Your Presentation

✅ **Addresses feedback:** "unclear origins, generation methods"
✅ **Shows academic rigor:** Transparent source counting
✅ **Professional appearance:** Consistent visual system
✅ **Easy verification:** One-click access to source details
✅ **Credibility boost:** Demonstrates thorough research

## Implementation Timeline

**15 minutes before presentation:**
1. Add reference icons to all slides (5 mins)
2. Create reference backup slides (5 mins)  
3. Test any hyperlinks (3 mins)
4. Quick visual consistency check (2 mins)

This system directly addresses the "unclear source origins" feedback while adding professional polish to every slide.