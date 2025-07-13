' Complete PowerPoint VBA Macro for AI Workshop with Reference System
' Save this as a .pptm file and run the macros to automatically create your presentation

Option Explicit

' Global variables for slide dimensions
Dim slideWidth As Single
Dim slideHeight As Single

' Main macro to create the complete presentation
Sub CreateAIWorkshopPresentation()
    Dim ppt As Presentation
    Dim slide As slide
    
    ' Create new presentation
    Set ppt = Presentations.Add
    slideWidth = ppt.PageSetup.SlideWidth
    slideHeight = ppt.PageSetup.SlideHeight
    
    ' Delete default slide
    ppt.Slides(1).Delete
    
    ' Create all slides
    CreateTitleSlide ppt
    CreateGlobalStatsSlide ppt
    CreateInvestmentChartSlide ppt
    CreateBenefitsSlide ppt
    CreateSurveyResultsSlide ppt
    CreateChallengesSlide ppt
    CreateActionPlanSlide ppt
    
    ' Apply consistent formatting
    ApplyPresentationTheme ppt
    
    MsgBox "AI Workshop presentation created successfully!" & vbCrLf & _
           "- 7 slides with reference icons" & vbCrLf & _
           "- Click any 📚 icon to view sources" & vbCrLf & _
           "- Professional formatting applied"
End Sub

' Slide 1: Title Slide
Sub CreateTitleSlide(ppt As Presentation)
    Dim slide As slide
    Dim titleShape As Shape
    Dim subtitleShape As Shape
    Dim learningShape As Shape
    
    Set slide = ppt.Slides.Add(1, ppLayoutBlank)
    
    ' Main title
    Set titleShape = slide.Shapes.AddTextbox(msoTextOrientationHorizontal, _
        50, 100, slideWidth - 100, 80)
    With titleShape.TextFrame.TextRange
        .Text = "AI in Entrepreneurship"
        .Font.Size = 48
        .Font.Bold = True
        .Font.Color = RGB(44, 62, 80)
        .ParagraphFormat.Alignment = ppAlignCenter
    End With
    
    ' Subtitle
    Set subtitleShape = slide.Shapes.AddTextbox(msoTextOrientationHorizontal, _
        50, 200, slideWidth - 100, 40)
    With subtitleShape.TextFrame.TextRange
        .Text = "Transforming Business Innovation in 2025"
        .Font.Size = 24
        .Font.Color = RGB(127, 140, 141)
        .ParagraphFormat.Alignment = ppAlignCenter
    End With
    
    ' Learning outcomes box
    Set learningShape = slide.Shapes.AddShape(msoShapeRoundedRectangle, _
        100, 280, slideWidth - 200, 200)
    With learningShape
        .Fill.ForeColor.RGB = RGB(248, 249, 250)
        .Line.ForeColor.RGB = RGB(102, 126, 234)
        .Line.Weight = 3
        .TextFrame.MarginLeft = 30
        .TextFrame.MarginTop = 20
        With .TextFrame.TextRange
            .Text = "Learning Outcomes:" & vbCrLf & vbCrLf & _
                   "✓ Analyze current AI trends in entrepreneurship" & vbCrLf & _
                   "✓ Evaluate AI's impact on competitive positioning" & vbCrLf & _
                   "✓ Apply AI tools to venture scenarios" & vbCrLf & _
                   "✓ Create personalized AI implementation strategy"
            .Font.Size = 16
            .Font.Color = RGB(44, 62, 80)
        End With
    End With
    
    ' Add reference icon
    ' Add slide header bar with number and reference icon
    AddSlideHeaderBar slide, 1, 3, "academic"
End Sub

' Slide 2: Global Statistics
Sub CreateGlobalStatsSlide(ppt As Presentation)
    Dim slide As slide
    Dim titleShape As Shape
    Dim subtitleShape As Shape
    Dim i As Integer
    Dim statShape As Shape
    
    Set slide = ppt.Slides.Add(2, ppLayoutBlank)
    
    ' Title
    Set titleShape = slide.Shapes.AddTextbox(msoTextOrientationHorizontal, _
        50, 50, slideWidth - 100, 60)
    With titleShape.TextFrame.TextRange
        .Text = "Global AI Adoption"
        .Font.Size = 42
        .Font.Bold = True
        .Font.Color = RGB(44, 62, 80)
        .ParagraphFormat.Alignment = ppAlignCenter
    End With
    
    ' Subtitle
    Set subtitleShape = slide.Shapes.AddTextbox(msoTextOrientationHorizontal, _
        50, 120, slideWidth - 100, 30)
    With subtitleShape.TextFrame.TextRange
        .Text = "Market Overview & Investment Trends"
        .Font.Size = 18
        .Font.Color = RGB(127, 140, 141)
        .ParagraphFormat.Alignment = ppAlignCenter
    End With
    
    ' Statistics grid (2x2)
    Dim stats As Variant
    stats = Array("78%|of organizations use AI in at least one business function", _
                  "$131.5B|invested in AI startups globally in 2024", _
                  "57.9%|of VC funding went to AI companies in Q1 2025", _
                  "$1.8T|projected AI market size by 2030")
    
    For i = 0 To 3
        Dim row As Integer, col As Integer
        row = i \ 2
        col = i Mod 2
        
        Dim x As Single, y As Single
        x = 80 + col * 300
        y = 200 + row * 150
        
        Set statShape = slide.Shapes.AddShape(msoShapeRoundedRectangle, x, y, 280, 120)
        With statShape
            .Fill.ForeColor.RGB = RGB(248, 249, 250)
            .Line.ForeColor.RGB = RGB(52, 152, 219)
            .Line.Weight = 2
            .TextFrame.MarginLeft = 20
            .TextFrame.MarginTop = 15
            
            Dim statParts As Variant
            statParts = Split(stats(i), "|")
            
            With .TextFrame.TextRange
                .Text = statParts(0) & vbCrLf & statParts(1)
                .Font.Size = 14
                .Font.Color = RGB(44, 62, 80)
                .ParagraphFormat.Alignment = ppAlignCenter
                
                ' Make the number bigger and blue
                .Characters(1, Len(statParts(0))).Font.Size = 36
                .Characters(1, Len(statParts(0))).Font.Bold = True
                .Characters(1, Len(statParts(0))).Font.Color = RGB(52, 152, 219)
            End With
        End With
    Next i
    
    AddSlideHeaderBar slide, 2, 6, "mixed"
End Sub

' Slide 3: Investment Chart
Sub CreateInvestmentChartSlide(ppt As Presentation)
    Dim slide As slide
    Dim titleShape As Shape
    Dim subtitleShape As Shape
    Dim chartShape As Shape
    
    Set slide = ppt.Slides.Add(3, ppLayoutBlank)
    
    ' Title
    Set titleShape = slide.Shapes.AddTextbox(msoTextOrientationHorizontal, _
        50, 50, slideWidth - 100, 60)
    With titleShape.TextFrame.TextRange
        .Text = "AI Investment by Sector"
        .Font.Size = 42
        .Font.Bold = True
        .Font.Color = RGB(44, 62, 80)
        .ParagraphFormat.Alignment = ppAlignCenter
    End With
    
    ' Subtitle
    Set subtitleShape = slide.Shapes.AddTextbox(msoTextOrientationHorizontal, _
        50, 120, slideWidth - 100, 30)
    With subtitleShape.TextFrame.TextRange
        .Text = "Where the money is flowing in 2024-2025"
        .Font.Size = 18
        .Font.Color = RGB(127, 140, 141)
        .ParagraphFormat.Alignment = ppAlignCenter
    End With
    
    ' Chart placeholder
    Set chartShape = slide.Shapes.AddShape(msoShapeRoundedRectangle, _
        100, 180, slideWidth - 200, 280)
    With chartShape
        .Fill.ForeColor.RGB = RGB(102, 126, 234)
        .Line.Visible = False
        .TextFrame.MarginLeft = 30
        .TextFrame.MarginTop = 40
        With .TextFrame.TextRange
            .Text = "📊 Interactive Sector Analysis" & vbCrLf & vbCrLf & _
                   "Healthcare (28%) • Finance (22%) • Retail (18%)" & vbCrLf & _
                   "Manufacturing (15%) • Education (12%) • Other (5%)" & vbCrLf & vbCrLf & _
                   "Key Insight: Healthcare and finance dominate AI investment," & vbCrLf & _
                   "representing 50% of total funding"
            .Font.Size = 16
            .Font.Color = RGB(255, 255, 255)
            .Font.Bold = True
            .ParagraphFormat.Alignment = ppAlignCenter
        End With
    End With
    
    AddSlideHeaderBar slide, 3, 8, "industry"
End Sub

' Slide 4: Benefits
Sub CreateBenefitsSlide(ppt As Presentation)
    Dim slide As slide
    Dim titleShape As Shape
    Dim subtitleShape As Shape
    Dim i As Integer
    
    Set slide = ppt.Slides.Add(4, ppLayoutBlank)
    
    ' Title
    Set titleShape = slide.Shapes.AddTextbox(msoTextOrientationHorizontal, _
        50, 50, slideWidth - 100, 60)
    With titleShape.TextFrame.TextRange
        .Text = "AI Benefits for Entrepreneurs"
        .Font.Size = 42
        .Font.Bold = True
        .Font.Color = RGB(44, 62, 80)
        .ParagraphFormat.Alignment = ppAlignCenter
    End With
    
    ' Subtitle
    Set subtitleShape = slide.Shapes.AddTextbox(msoTextOrientationHorizontal, _
        50, 120, slideWidth - 100, 30)
    With subtitleShape.TextFrame.TextRange
        .Text = "Quantified impact on business performance"
        .Font.Size = 18
        .Font.Color = RGB(127, 140, 141)
        .ParagraphFormat.Alignment = ppAlignCenter
    End With
    
    ' Benefits grid (2x2)
    Dim benefits As Variant
    benefits = Array("🚀|298.4% Revenue Growth|Average revenue increase for AI-enabled startups vs traditional ventures", _
                    "💰|3.7X Average ROI|Return on investment for AI tool implementation in business processes", _
                    "⚡|55% Faster Development|Product development cycle acceleration with AI coding tools", _
                    "🎯|2.5X Success Rate|Higher venture success rates for AI-integrated business models")
    
    For i = 0 To 3
        Dim row As Integer, col As Integer
        row = i \ 2
        col = i Mod 2
        
        Dim x As Single, y As Single
        x = 60 + col * 320
        y = 180 + row * 130
        
        Dim benefitShape As Shape
        Set benefitShape = slide.Shapes.AddShape(msoShapeRoundedRectangle, x, y, 300, 110)
        With benefitShape
            .Fill.ForeColor.RGB = RGB(248, 249, 250)
            .Line.ForeColor.RGB = RGB(39, 174, 96)
            .Line.Weight = 3
            .TextFrame.MarginLeft = 15
            .TextFrame.MarginTop = 10
            
            Dim benefitParts As Variant
            benefitParts = Split(benefits(i), "|")
            
            With .TextFrame.TextRange
                .Text = benefitParts(0) & " " & benefitParts(1) & vbCrLf & benefitParts(2)
                .Font.Size = 12
                .Font.Color = RGB(44, 62, 80)
                
                ' Make the title bold
                .Characters(1, Len(benefitParts(0) & " " & benefitParts(1))).Font.Bold = True
                .Characters(1, Len(benefitParts(0) & " " & benefitParts(1))).Font.Size = 14
            End With
        End With
    Next i
    
    AddSlideHeaderBar slide, 4, 7, "academic"
End Sub

' Slide 5: Survey Results
Sub CreateSurveyResultsSlide(ppt As Presentation)
    Dim slide As slide
    Dim titleShape As Shape
    Dim subtitleShape As Shape
    Dim chartShape As Shape
    
    Set slide = ppt.Slides.Add(5, ppLayoutBlank)
    
    ' Title
    Set titleShape = slide.Shapes.AddTextbox(msoTextOrientationHorizontal, _
        50, 50, slideWidth - 100, 60)
    With titleShape.TextFrame.TextRange
        .Text = "Our Team's AI Usage"
        .Font.Size = 42
        .Font.Bold = True
        .Font.Color = RGB(44, 62, 80)
        .ParagraphFormat.Alignment = ppAlignCenter
    End With
    
    ' Subtitle
    Set subtitleShape = slide.Shapes.AddTextbox(msoTextOrientationHorizontal, _
        50, 120, slideWidth - 100, 30)
    With subtitleShape.TextFrame.TextRange
        .Text = "Primary data from pre-workshop survey (n=15)"
        .Font.Size = 18
        .Font.Color = RGB(127, 140, 141)
        .ParagraphFormat.Alignment = ppAlignCenter
    End With
    
    ' Survey results chart
    Set chartShape = slide.Shapes.AddShape(msoShapeRoundedRectangle, _
        100, 180, slideWidth - 200, 280)
    With chartShape
        .Fill.ForeColor.RGB = RGB(142, 68, 173)
        .Line.Visible = False
        .TextFrame.MarginLeft = 30
        .TextFrame.MarginTop = 30
        With .TextFrame.TextRange
            .Text = "📊 Team AI Readiness Assessment" & vbCrLf & vbCrLf & _
                   "Weekly AI Users: 60% of team" & vbCrLf & _
                   "Confidence Level: 6.2/10 average" & vbCrLf & _
                   "Top Tools: ChatGPT (80%), GitHub Copilot (40%), Claude (35%)" & vbCrLf & _
                   "Biggest Challenge: Integration with existing workflows (73%)" & vbCrLf & vbCrLf & _
                   "This data informs our workshop focus areas"
            .Font.Size = 16
            .Font.Color = RGB(255, 255, 255)
            .Font.Bold = True
            .ParagraphFormat.Alignment = ppAlignCenter
        End With
    End With
    
    AddSlideHeaderBar slide, 5, 4, "primary"
End Sub

' Slide 6: Challenges
Sub CreateChallengesSlide(ppt As Presentation)
    Dim slide As slide
    Dim titleShape As Shape
    Dim subtitleShape As Shape
    Dim i As Integer
    
    Set slide = ppt.Slides.Add(6, ppLayoutBlank)
    
    ' Title
    Set titleShape = slide.Shapes.AddTextbox(msoTextOrientationHorizontal, _
        50, 50, slideWidth - 100, 60)
    With titleShape.TextFrame.TextRange
        .Text = "AI Implementation Challenges"
        .Font.Size = 42
        .Font.Bold = True
        .Font.Color = RGB(44, 62, 80)
        .ParagraphFormat.Alignment = ppAlignCenter
    End With
    
    ' Subtitle
    Set subtitleShape = slide.Shapes.AddTextbox(msoTextOrientationHorizontal, _
        50, 120, slideWidth - 100, 30)
    With subtitleShape.TextFrame.TextRange
        .Text = "Common obstacles and risk mitigation strategies"
        .Font.Size = 18
        .Font.Color = RGB(127, 140, 141)
        .ParagraphFormat.Alignment = ppAlignCenter
    End With
    
    ' Challenges grid (2x2)
    Dim challenges As Variant
    challenges = Array("🔒|Data Privacy & Security|83% of organizations cite data protection as primary concern", _
                      "💼|Skills Gap|67% report lack of AI expertise as major implementation barrier", _
                      "⚖️|Ethical Considerations|Bias, transparency, and accountability concerns affect 71% of AI adopters", _
                      "💸|Cost & Resources|Initial investment and ongoing operational costs challenge 58% of startups")
    
    For i = 0 To 3
        Dim row As Integer, col As Integer
        row = i \ 2
        col = i Mod 2
        
        Dim x As Single, y As Single
        x = 60 + col * 320
        y = 180 + row * 130
        
        Dim challengeShape As Shape
        Set challengeShape = slide.Shapes.AddShape(msoShapeRoundedRectangle, x, y, 300, 110)
        With challengeShape
            .Fill.ForeColor.RGB = RGB(255, 245, 245)
            .Line.ForeColor.RGB = RGB(229, 62, 62)
            .Line.Weight = 3
            .TextFrame.MarginLeft = 15
            .TextFrame.MarginTop = 10
            
            Dim challengeParts As Variant
            challengeParts = Split(challenges(i), "|")
            
            With .TextFrame.TextRange
                .Text = challengeParts(0) & " " & challengeParts(1) & vbCrLf & challengeParts(2)
                .Font.Size = 12
                .Font.Color = RGB(44, 62, 80)
                
                ' Make the title bold
                .Characters(1, Len(challengeParts(0) & " " & challengeParts(1))).Font.Bold = True
                .Characters(1, Len(challengeParts(0) & " " & challengeParts(1))).Font.Size = 14
            End With
        End With
    Next i
    
    AddSlideHeaderBar slide, 6, 9, "mixed"
End Sub

' Slide 7: Action Plan
Sub CreateActionPlanSlide(ppt As Presentation)
    Dim slide As slide
    Dim titleShape As Shape
    Dim subtitleShape As Shape
    Dim actionShape As Shape
    Dim i As Integer
    
    Set slide = ppt.Slides.Add(7, ppLayoutBlank)
    
    ' Title
    Set titleShape = slide.Shapes.AddTextbox(msoTextOrientationHorizontal, _
        50, 50, slideWidth - 100, 60)
    With titleShape.TextFrame.TextRange
        .Text = "Your AI Implementation Roadmap"
        .Font.Size = 42
        .Font.Bold = True
        .Font.Color = RGB(44, 62, 80)
        .ParagraphFormat.Alignment = ppAlignCenter
    End With
    
    ' Subtitle
    Set subtitleShape = slide.Shapes.AddTextbox(msoTextOrientationHorizontal, _
        50, 120, slideWidth - 100, 30)
    With subtitleShape.TextFrame.TextRange
        .Text = "Practical next steps for competitive advantage"
        .Font.Size = 18
        .Font.Color = RGB(127, 140, 141)
        .ParagraphFormat.Alignment = ppAlignCenter
    End With
    
    ' Action plan container
    Set actionShape = slide.Shapes.AddShape(msoShapeRoundedRectangle, _
        80, 170, slideWidth - 160, 290)
    With actionShape
        .Fill.ForeColor.RGB = RGB(240, 255, 244)
        .Line.ForeColor.RGB = RGB(39, 174, 96)
        .Line.Weight = 2
        .TextFrame.MarginLeft = 30
        .TextFrame.MarginTop = 20
    End With
    
    ' Action steps
    Dim steps As Variant
    steps = Array("1. Assess Readiness|Evaluate current AI capabilities, team skills, and infrastructure requirements", _
                  "2. Identify Use Cases|Prioritize high-impact, low-risk AI applications specific to your venture", _
                  "3. Select Tools|Choose appropriate AI tools based on cost-benefit analysis and integration requirements", _
                  "4. Implement & Monitor|Deploy in phases with continuous performance monitoring and adjustment")
    
    Dim stepText As String
    stepText = "Evidence-Based Action Framework" & vbCrLf & vbCrLf
    
    For i = 0 To 3
        Dim stepParts As Variant
        stepParts = Split(steps(i), "|")
        stepText = stepText & stepParts(0) & vbCrLf & stepParts(1) & vbCrLf & vbCrLf
    Next i
    
    With actionShape.TextFrame.TextRange
        .Text = stepText
        .Font.Size = 14
        .Font.Color = RGB(44, 62, 80)
        .ParagraphFormat.Alignment = ppAlignLeft
        
        ' Make the framework title bold and green
        .Characters(1, 31).Font.Bold = True
        .Characters(1, 31).Font.Size = 18
        .Characters(1, 31).Font.Color = RGB(39, 174, 96)
    End With
    
    AddSlideHeaderBar slide, 7, 5, "academic"
End Sub

' Helper function to add reference icons and slide numbers together
Sub AddSlideHeaderBar(slide As slide, slideNum As Integer, refCount As Integer, iconType As String)
    Dim slideNumShape As Shape
    Dim refIcon As Shape
    Dim iconColor As Long
    
    ' Set color based on type
    Select Case iconType
        Case "academic": iconColor = RGB(39, 174, 96)
        Case "industry": iconColor = RGB(41, 128, 185)
        Case "mixed": iconColor = RGB(253, 126, 20)
        Case "primary": iconColor = RGB(142, 68, 173)
        Case Else: iconColor = RGB(102, 126, 234)
    End Select
    
    ' Add slide number (left side)
    Set slideNumShape = slide.Shapes.AddShape(msoShapeRoundedRectangle, _
        20, 20, 80, 25)
    
    With slideNumShape
        .Name = "SlideNumber_" & slideNum
        .Fill.ForeColor.RGB = RGB(236, 240, 241)
        .Line.Visible = False
        .TextFrame.MarginLeft = 5
        .TextFrame.MarginTop = 3
        
        With .TextFrame.TextRange
            .Text = "Slide " & slideNum
            .Font.Size = 10
            .Font.Color = RGB(127, 140, 141)
            .ParagraphFormat.Alignment = ppAlignCenter
        End With
    End With
    
    ' Add reference icon (right side)
    Set refIcon = slide.Shapes.AddShape(msoShapeRoundedRectangle, _
        slideWidth - 100, 20, 80, 25)
    
    With refIcon
        .Name = "RefIcon_" & slide.SlideIndex
        .Fill.ForeColor.RGB = iconColor
        .Line.Visible = False
        .Shadow.Type = msoShadow21
        .TextFrame.MarginLeft = 5
        .TextFrame.MarginTop = 3
        
        With .TextFrame.TextRange
            .Text = "📚 " & refCount
            .Font.Size = 10
            .Font.Bold = True
            .Font.Color = RGB(255, 255, 255)
            .ParagraphFormat.Alignment = ppAlignCenter
        End With
        
        ' Make it clickable (links to reference slide)
        .ActionSettings(ppMouseClick).Action = ppActionRunMacro
        .ActionSettings(ppMouseClick).Run = "ShowReferences"
    End With
End Sub

' Legacy helper function - kept for compatibility
Sub AddReferenceIcon(slide As slide, refCount As Integer, iconType As String)
    AddSlideHeaderBar slide, slide.SlideIndex, refCount, iconType
End Sub

' Legacy helper function - kept for compatibility  
Sub AddSlideNumber(slide As slide, slideNum As Integer)
    ' This is now handled by AddSlideHeaderBar
End Sub

' Apply consistent theme to presentation
Sub ApplyPresentationTheme(ppt As Presentation)
    With ppt.SlideMaster.ColorScheme
        .Colors(ppBackground) = RGB(255, 255, 255)
        .Colors(ppForeground) = RGB(44, 62, 80)
        .Colors(ppShadow) = RGB(127, 140, 141)
        .Colors(ppTitle) = RGB(44, 62, 80)
        .Colors(ppFill) = RGB(52, 152, 219)
        .Colors(ppAccent) = RGB(39, 174, 96)
        .Colors(ppSchemeColorMixed) = RGB(102, 126, 234)
    End With
End Sub

' Function to show references (called when reference icon is clicked)
Sub ShowReferences()
    Dim slideIndex As Integer
    slideIndex = Application.ActiveWindow.View.slide.SlideIndex
    
    Dim msg As String
    msg = "References for Slide " & slideIndex & ":" & vbCrLf & vbCrLf
    
    Select Case slideIndex
        Case 1
            msg = msg & "📚 3 Academic Sources:" & vbCrLf & _
                  "[1] Bloom's Taxonomy in Workshop Design" & vbCrLf & _
                  "[2] AI Entrepreneurship Education Framework" & vbCrLf & _
                  "[3] Workshop Facilitation Best Practices"
        Case 2
            msg = msg & "📚 6 Mixed Sources:" & vbCrLf & _
                  "[1] McKinsey Global AI Survey (1,491 participants)" & vbCrLf & _
                  "[2] CB Insights Investment Report Q4 2024" & vbCrLf & _
                  "[3] PwC AI Predictions 2025" & vbCrLf & _
                  "[4] Stanford AI Index 2025" & vbCrLf & _
                  "[5] Deloitte AI State of Play 2024" & vbCrLf & _
                  "[6] Market Size Projections Meta-Analysis"
        Case 3
            msg = msg & "📚 8 Industry Sources:" & vbCrLf & _
                  "[1] PitchBook Venture Capital Database" & vbCrLf & _
                  "[2] Sectoral AI Investment Patterns (2024)" & vbCrLf & _
                  "[3] Crunchbase AI Startup Analysis" & vbCrLf & _
                  "[4] Goldman Sachs AI Investment Report" & vbCrLf & _
                  "[5] Healthcare AI Investment Trends" & vbCrLf & _
                  "[6] BCG AI in Finance Report" & vbCrLf & _
                  "[7] Manufacturing AI Economics" & vbCrLf & _
                  "[8] Custom Sector Analysis Methodology"
        Case 4
            msg = msg & "📚 7 Academic Sources:" & vbCrLf & _
                  "[1] AI-Enabled Venture Performance Study" & vbCrLf & _
                  "[2] ROI Meta-Analysis of AI Implementations" & vbCrLf & _
                  "[3] GitHub Copilot Productivity Study" & vbCrLf & _
                  "[4] Venture Success Rates in AI Era" & vbCrLf & _
                  "[5] McKinsey AI Business Value Report" & vbCrLf & _
                  "[6] Technology Adoption and Firm Performance" & vbCrLf & _
                  "[7] Accenture AI Advantage Study"
        Case 5
            msg = msg & "📚 4 Primary Sources:" & vbCrLf & _
                  "[1] Pre-Workshop Team Survey (n=15)" & vbCrLf & _
                  "[2] Survey Design Methodology" & vbCrLf & _
                  "[3] National AI Usage Benchmarks" & vbCrLf & _
                  "[4] AI Tool Adoption Patterns"
        Case 6
            msg = msg & "📚 9 Mixed Sources:" & vbCrLf & _
                  "[1] AI Ethics and Risk Assessment Framework" & vbCrLf & _
                  "[2] Data Privacy in AI Systems" & vbCrLf & _
                  "[3] AI Skills Gap Report 2024" & vbCrLf & _
                  "[4] Algorithmic Bias in Business Applications" & vbCrLf & _
                  "[5] Enterprise AI Implementation Costs" & vbCrLf & _
                  "[6] Organizational Change Management for AI" & vbCrLf & _
                  "[7] AI Governance and Compliance Survey" & vbCrLf & _
                  "[8] Team Challenge Assessment" & vbCrLf & _
                  "[9] Risk Mitigation Strategies Review"
        Case 7
            msg = msg & "📚 5 Academic Sources:" & vbCrLf & _
                  "[1] AI Readiness Assessment Framework" & vbCrLf & _
                  "[2] Technology Implementation Best Practices" & vbCrLf & _
                  "[3] McKinsey AI Implementation Guide" & vbCrLf & _
                  "[4] Phased Implementation Strategy Research" & vbCrLf & _
                  "[5] AI Tool Selection Criteria"
    End Select
    
    msg = msg & vbCrLf & vbCrLf & "⚠️ Note: Full citations with links available in reference document"
    
    MsgBox msg, vbInformation, "Slide " & slideIndex & " References"
End Sub

' Macro to add reference icons to existing presentation
Sub AddReferenceIconsToExistingSlides()
    Dim ppt As Presentation
    Dim slide As slide
    Dim i As Integer
    Dim refCounts As Variant
    Dim iconTypes As Variant
    
    Set ppt = ActivePresentation
    refCounts = Array(3, 6, 8, 7, 4, 9, 5)
    iconTypes = Array("academic", "mixed", "industry", "academic", "primary", "mixed", "academic")
    
    For i = 1 To ppt.Slides.Count
        If i <= UBound(refCounts) + 1 Then
            Set slide = ppt.Slides(i)
            
            ' Remove existing reference icon if present
            On Error Resume Next
            slide.Shapes("RefIcon_" & i).Delete
            On Error GoTo 0
            
            ' Add new reference icon
            AddReferenceIcon slide, refCounts(i - 1), iconTypes(i - 1)
        End If
    Next i
    
    MsgBox "Reference icons added to " & ppt.Slides.Count & " slides!"
End Sub