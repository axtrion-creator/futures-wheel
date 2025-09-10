# Futures Wheel Visualization

An interactive web-based visualization tool for exploring cascading impacts and consequences of a central phenomenon. This project visualizes the effects of automation in healthcare, specifically focusing on how routine contacts shifting to bots/robots creates a complex web of first, second, and third-order impacts.

## Features

- **Interactive Network Visualization**: Click on any node to explore its connected impacts
- **Multi-level Impact Analysis**: 
  - Central phenomenon (red)
  - First-order impacts (teal) 
  - Second-order impacts (blue)
  - Third-order impacts (green)
- **Dynamic Highlighting**: Selected nodes and their downstream effects are visually highlighted
- **Zoom and Pan**: Navigate the visualization with mouse controls
- **Responsive Design**: Works on desktop and mobile devices

## How to Use

1. Open `index.html` in a web browser
2. Click on any node to explore its connected impacts
3. The visualization will highlight the selected node and all its downstream effects
4. Use the control buttons to:
   - **Reset View**: Clear selection and reset zoom
   - **Center View**: Center the visualization
   - **Toggle Labels**: Show/hide node labels

## Project Structure

```
futures-wheel-project/
├── index.html          # Main HTML file
├── futures-wheel.js    # JavaScript visualization code
└── README.md          # This file
```

## Data Structure

The visualization is built around a central phenomenon: "Rutiinikontaktit siirtyvät boteille/roboteille" (Routine contacts shift to bots/robots), which connects to 5 first-order impacts, each having 2-3 second-order impacts, and those having 2-3 third-order impacts.

## Technical Details

- Built with D3.js v7 for data visualization
- Uses force simulation for natural node positioning
- Responsive CSS with modern styling
- No external dependencies beyond D3.js (loaded from CDN)

## Browser Compatibility

- Modern browsers with ES6 support
- Chrome, Firefox, Safari, Edge (latest versions)

## Customization

To modify the data or add new impacts:

1. Edit the `futuresWheelData` object in `futures-wheel.js`
2. Add new nodes with appropriate `id`, `name`, `level`, and `parent` properties
3. The visualization will automatically update to include new nodes and connections

## License

This project is open source and available under the MIT License.
