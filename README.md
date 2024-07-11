# Word counter

This project is a simple web application that provides real-time text analysis and allows users to change the background image and color dynamically.

## Features

1. **Text Analysis**
   - Count letters (including digits)
   - Count digits separately
   - Count symbols (excluding spaces)
   - Count words
   - Count sentences

2. **Dynamic Background**
   - Change background image randomly
   - Change background color randomly

## How to Use

1. Open the `index.html` file in a web browser.
2. Enter or paste text into the textarea.
3. The text analysis results will update automatically as you type.
4. Click the "Change background image and color" button to randomly change the background.

## File Structure

- `index.html`: The main HTML file containing the structure of the web page.
- `script.js`: JavaScript file with the logic for text analysis and background changing.
- `style.css`: CSS file for styling the web page (not provided in the given code).

## Functions

### Text Analysis

The `counter()` function performs the following analyses:

- Counts letters and digits
- Counts only digits
- Counts symbols (excluding spaces)
- Counts words
- Counts sentences

This function is called every 100 milliseconds to provide real-time updates.

### Background Changer

The `bgChanger()` function:

- Generates a random color
- Sets a random background image from picsum.photos
- Changes the background color to the generated random color

## Dependencies

This project uses vanilla JavaScript and doesn't require any external libraries or frameworks.

## Browser Compatibility

This application should work in most modern web browsers that support ES6+ JavaScript.

## License

[Add your chosen license here]

## Author

[Your Name]

## Contributing

If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.
