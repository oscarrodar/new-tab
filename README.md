# Elegant New Tab Extension

This browser extension displays the current hour, date, weather, and work week number on your new tab page. It's designed to be simple, elegant, and compatible with Chrome and Edge browsers.

## Features

*   **Current Time:** Shows the current hour and minutes, updating every second.
*   **Current Date:** Displays the full date (e.g., Monday, January 1, 2024).
*   **Work Week Number:** Shows the current ISO 8601 week number.
*   **Weather Information:** Displays the current temperature for your location. (Requires location permission).

## How to Install

Since this is a local development version, you'll need to load it as an unpacked extension in your browser.

### Google Chrome

1.  Open Chrome and navigate to `chrome://extensions`.
2.  Enable **Developer mode** by toggling the switch in the top-right corner.
3.  Click the **Load unpacked** button.
4.  Select the directory where you have cloned or downloaded this extension's files (the directory containing `manifest.json`).
5.  The extension should now be active. Open a new tab to see it in action.

### Microsoft Edge

1.  Open Edge and navigate to `edge://extensions`.
2.  Enable **Developer mode** by toggling the switch in the bottom-left corner.
3.  Click the **Load unpacked** button.
4.  Select the directory where you have cloned or downloaded this extension's files (the directory containing `manifest.json`).
5.  The extension should now be active. Open a new tab to see it in action.

## Permissions

*   **Geolocation:** This permission is required to fetch weather information for your current location. The browser will ask you to approve this permission the first time the extension tries to access your location.

## Customization

*   **Icons:** The extension includes placeholder icons. You can replace the `icon16.png`, `icon48.png`, and `icon128.png` files in the `images` directory with your own custom icons.
*   **Styling:** The appearance can be further customized by editing the `style.css` file.

## Weather API

This extension uses the [Open-Meteo API](https://open-meteo.com/) for weather data. It does not require an API key.

## Development

*   `manifest.json`: The core file that defines the extension's properties, permissions, and actions.
*   `popup.html`: The HTML structure for the new tab page.
*   `style.css`: Contains all the styles for the extension's appearance.
*   `script.js`: Handles the logic for fetching and displaying time, date, week number, and weather.
*   `images/`: Directory containing the extension icons.