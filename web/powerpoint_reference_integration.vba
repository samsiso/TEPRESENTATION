' PowerPoint VBA Macro for Interactive Reference System
' Save this in PowerPoint as a macro-enabled presentation (.pptm)

' Global variables
Dim refPanel As Shape
Dim isPanelVisible As Boolean

' Main function to add reference counter to current slide
Sub AddReferenceCounter()
    Dim slide As slide
    Dim counter As Shape
    Dim slideNumber As Integer
    Dim refCount As Integer
    
    Set slide = Application.ActiveWindow.View.slide
    slideNumber = slide.SlideIndex
    refCount = GetReferenceCount(slideNumber)
    
    ' Remove existing counter if present
    On Error Resume Next
    slide.Shapes("RefCounter").Delete
    On Error GoTo 0
    
    ' Create reference counter button
    Set counter = slide.Shapes.AddShape(msoShapeRoundedRectangle, _
        slide.Master.Width - 120, slide.Master.Height - 60, 100, 40)
    
    With counter
        .Name = "RefCounter"
        .TextFrame.TextRange.Text = "📚 " & refCount & " refs"
        .TextFrame.TextRange.Font.Size = 12
        .TextFrame.TextRange.Font.Bold = True
        .TextFrame.TextRange.Font.Color = RGB(255, 255, 255)
        .Fill.ForeColor.RGB = RGB(102, 126, 234)
        .Fill.Transparency = 0
        .Line.Visible = False
        .Shadow.Type = msoShadow21
        .ActionSettings(ppMouseClick).Action = ppActionRunMacro
        .ActionSettings(ppMouseClick).Run = "ShowReferencePanel"
    End With
    
    MsgBox "Reference counter added to slide " & slideNumber & " with " & refCount & " sources"
End Sub

' Function to show the reference panel
Sub ShowReferencePanel()
    Dim slide As slide
    Dim slideNumber As Integer
    
    Set slide = Application.ActiveWindow.View.slide
    slideNumber = slide.SlideIndex
    
    If isPanelVisible Then
        HideReferencePanel
    Else
        CreateReferencePanel slideNumber
        isPanelVisible = True
    End If
End Sub

' Function to create the reference panel
Sub CreateReferencePanel(slideNumber As Integer)
    Dim slide As slide
    Dim panelWidth As Single
    Dim panelHeight As Single
    Dim panelX As Single
    Dim panelY As Single
    
    Set slide = Application.ActiveWindow.View.slide
    
    ' Panel dimensions
    panelWidth = 400
    panelHeight = 500
    panelX = slide.Master.Width - panelWidth - 20
    panelY = slide.Master.Height - panelHeight - 100
    
    ' Remove existing panel if present
    On Error Resume Next
    slide.Shapes("RefPanel").Delete
    slide.Shapes("RefPanelHeader").Delete
    slide.Shapes("RefPanelContent").Delete
    slide.Shapes("CloseButton").Delete
    On Error GoTo 0
    
    ' Create panel background
    Set refPanel = slide.Shapes.AddShape(msoShapeRoundedRectangle, panelX, panelY, panelWidth, panelHeight)
    With refPanel
        .Name = "RefPanel"
        .Fill.ForeColor.RGB = RGB(255, 255, 255)
        .Line.ForeColor.RGB = RGB(200, 200, 200)
        .Line.Weight = 1
        .Shadow.Type = msoShadow21
        .ZOrder msoBringToFront
    End With
    
    ' Create panel header
    Dim header As Shape
    Set header = slide.Shapes.AddShape(msoShapeRectangle, panelX, panelY, panelWidth, 50)
    With header
        .Name = "RefPanelHeader"
        .Fill.ForeColor.RGB = RGB(102, 126, 234)
        .Line.Visible = False
        .TextFrame.TextRange.Text = "References - Slide " & slideNumber
        .TextFrame.TextRange.Font.Color = RGB(255, 255, 255)
        .TextFrame.TextRange.Font.Size = 14
        .TextFrame.TextRange.Font.Bold = True
        .TextFrame.VerticalAnchor = msoAnchorMiddle
        .TextFrame.MarginLeft = 20
        .ZOrder msoBringToFront
    End With
    
    ' Create close button
    Dim closeBtn As Shape
    Set closeBtn = slide.Shapes.AddShape(msoShapeOval, panelX + panelWidth - 40, panelY + 10, 30, 30)
    With closeBtn
        .Name = "CloseButton"
        .Fill.ForeColor.RGB = RGB(255, 100, 100)
        .Line.Visible = False
        .TextFrame.TextRange.Text = "×"
        .TextFrame.TextRange.Font.Color = RGB(255, 255, 255)
        .TextFrame.TextRange.Font.Size = 16
        .TextFrame.TextRange.Font.Bold = True
        .TextFrame.HorizontalAnchor = msoAnchorCenter
        .TextFrame.VerticalAnchor = msoAnchorMiddle
        .ActionSettings(ppMouseClick).Action = ppActionRunMacro
        .ActionSettings(ppMouseClick).Run = "HideReferencePanel"
        .ZOrder msoBringToFront
    End With
    
    ' Create content area
    Dim content As Shape
    Set content = slide.Shapes.AddShape(msoShapeRectangle, panelX + 10, panelY + 60, panelWidth - 20, panelHeight - 70)
    With content
        .Name = "RefPanelContent"
        .Fill.ForeColor.RGB = RGB(255, 255, 255)
        .Line.Visible = False
        .TextFrame.TextRange.Text = GetReferenceContent(slideNumber)
        .TextFrame.TextRange.Font.Size = 10
        .TextFrame.TextRange.Font.Name = "Segoe UI"
        .TextFrame.VerticalAnchor = msoAnchorTop
        .TextFrame.MarginLeft = 10
        .TextFrame.MarginTop = 10
        .ZOrder msoBringToFront
    End With
End Sub

' Function to hide the reference panel
Sub HideReferencePanel()
    Dim slide As slide
    Set slide = Application.ActiveWindow.View.slide
    
    On Error Resume Next
    slide.Shapes("RefPanel").Delete
    slide.Shapes("RefPanelHeader").Delete
    slide.Shapes("RefPanelContent").Delete
    slide.Shapes("CloseButton").Delete
    On Error GoTo 0
    
    isPanelVisible = False
End Sub

' Function to get reference count for a slide
Function GetReferenceCount(slideNumber As Integer) As Integer
    ' Define reference counts for each slide
    Select Case slideNumber
        Case 1: GetReferenceCount = 3
        Case 2: GetReferenceCount = 5
        Case 3: GetReferenceCount = 6
        Case 4: GetReferenceCount = 4
        Case 5: GetReferenceCount = 8
        Case 6: GetReferenceCount = 7
        Case 7: GetReferenceCount = 9
        Case 8: GetReferenceCount = 5
        Case Else: GetReferenceCount = 0
    End Select
End Function

' Function to get reference content for a slide
Function GetReferenceContent(slideNumber As Integer) As String
    Dim content As String
    
    Select Case slideNumber
        Case 5
            content = "📊 PRIMARY SOURCES (2)" & vbCrLf & vbCrLf
            content = content & "[1] Team AI Usage Survey 2025" & vbCrLf
            content = content & "Method: Google Forms survey" & vbCrLf
            content = content & "Sample: 15 team members" & vbCrLf & vbCrLf
            
            content = content & "[2] Workshop Pre-Assessment" & vbCrLf
            content = content & "Internal participant data" & vbCrLf & vbCrLf
            
            content = content & "🎓 ACADEMIC SOURCES (3)" & vbCrLf & vbCrLf
            content = content & "[3] McKinsey Global AI Survey (2024)" & vbCrLf
            content = content & "1,491 participants, 101 countries" & vbCrLf
            content = content & "Tier 1 credibility" & vbCrLf & vbCrLf
            
            content = content & "[4] Stanford AI Index 2025" & vbCrLf
            content = content & "Annual peer-reviewed report" & vbCrLf & vbCrLf
            
            content = content & "[5] AI in Entrepreneurship Review" & vbCrLf
            content = content & "345 studies analyzed" & vbCrLf & vbCrLf
            
            content = content & "🏢 INDUSTRY SOURCES (3)" & vbCrLf & vbCrLf
            content = content & "[6] PwC AI Predictions 2025" & vbCrLf
            content = content & "1,000+ executives surveyed" & vbCrLf & vbCrLf
            
            content = content & "[7] Deloitte AI State of Play" & vbCrLf
            content = content & "2,880 business leaders" & vbCrLf & vbCrLf
            
            content = content & "[8] CB Insights Investment Report" & vbCrLf
            content = content & "Real-time VC tracking" & vbCrLf & vbCrLf
            
            content = content & "⚠️ LIMITATIONS:" & vbCrLf
            content = content & "• Industry bias toward benefits" & vbCrLf
            content = content & "• Tech sector over-representation" & vbCrLf
            content = content & "• 6-12 month academic lag"
            
        Case Else
            content = "References for slide " & slideNumber & " would be displayed here." & vbCrLf & vbCrLf
            content = content & "Each slide would have its own specific set of sources" & vbCrLf
            content = content & "with proper academic and industry citations."
    End Select
    
    GetReferenceContent = content
End Function

' Macro to add reference counters to all slides
Sub AddCountersToAllSlides()
    Dim i As Integer
    Dim presentation As presentation
    Set presentation = Application.ActivePresentation
    
    For i = 1 To presentation.Slides.Count
        presentation.Slides(i).Select
        AddReferenceCounter
    Next i
    
    MsgBox "Reference counters added to all " & presentation.Slides.Count & " slides"
End Sub

' Auto-run macro when presentation opens
Sub Auto_Open()
    MsgBox "Interactive Reference System Loaded!" & vbCrLf & vbCrLf & _
           "Use Alt+F8 and run 'AddReferenceCounter' to add reference buttons to slides." & vbCrLf & _
           "Click any reference button to view sources and citations."
End Sub