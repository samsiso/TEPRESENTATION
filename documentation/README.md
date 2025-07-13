# Enterprise AI 2032 Interactive Presentation

An interactive web-based presentation about Enterprise AI predictions and business models for 2032.

## Features

✅ **Interactive Navigation**
- Click-based slide navigation (Previous/Next buttons)
- Keyboard navigation (Arrow keys)
- Progress bar showing presentation progress
- Slide counter

✅ **Data Visualizations**
- Market growth charts
- Investment landscape visualization
- Market opportunity breakdown
- Interactive charts using Chart.js

✅ **Siso Brand Design**
- Siso brand colors (black, orange, yellow fade)
- Key points sidebar layout
- Glass morphism and modern effects
- Inter font typography
- Responsive layout for all screen sizes
- Smooth transitions and animations

✅ **Image Support**
- Add images to any slide by placing them in an `images/` folder
- Reference images in slides using the image container class

## How to Run

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   This will open the presentation at `http://localhost:3000`

3. **Navigate through slides:**
   - Use the "Previous" and "Next" buttons
   - Use left/right arrow keys on your keyboard

## Deploy to Vercel

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.

## Adding Images

To add images to slides:

1. Create an `images/` folder in this directory
2. Add your image files (PNG, JPG, GIF, etc.)
3. Modify the slide content in `presentation.js` to include:
   ```html
   <div class="image-container">
       <img src="images/your-image.png" alt="Description">
   </div>
   ```

## Customizing Content

- **Edit slides:** Modify the `initializeSlides()` method in `presentation.js`
- **Add new slides:** Add new slide objects to the slides array
- **Modify styling:** Edit `styles.css`
- **Add new charts:** Use Chart.js configuration in slide objects

## Slide Structure

Each slide is an object with:
```javascript
{
    title: "Slide Title",           // Appears in header
    content: "HTML content",        // Main slide content
    hasChart: true/false,          // Optional: if slide has charts
    chartConfig: {                 // Optional: Chart.js configuration
        id: "chart-canvas-id",
        options: { /* Chart.js config */ }
    }
}
```

## Technologies Used

- **HTML5/CSS3/JavaScript** - Core technologies
- **Chart.js** - Data visualization library
- **Responsive Design** - Works on desktop, tablet, and mobile

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

## File Structure

```
TEPRESENTATION/
├── index.html              # Main presentation file
├── styles.css              # Styling and layout
├── presentation.js         # Presentation logic and content
├── README.md              # This file
├── images/                # (Create this folder for images)
└── enterprise_ai_2032_presentation.md  # Source content
```