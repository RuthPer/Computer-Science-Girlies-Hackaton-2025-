# 🌞 Heat Wave Weather Detector – Chrome Extension

A lightweight, real-time Chrome extension that helps you *not* get caught off guard by extreme heat — with UV tracking, 7-day forecasts, and even a lame joke to make your day slightly less sweaty.

---

## 🚀 What is this?

**Heat Wave Weather Detector** is a Chrome extension that checks your local weather and gives you immediate heat alerts with a clean, color-coded UI. It grabs your geolocation, pulls in real-time data like temperature, humidity, UV index, and a 7-day forecast — all from reliable weather APIs. It even includes a built-in lame joke generator to keep things light when the heat isn’t.

----

## 🌟 Features

- 📍 **Real-Time Location Weather:** Automatically detects your current location and shows key info like current temperature, feels-like temp, and humidity.
- 🌡️ **Heat Alerts:** Clearly shows if it's a normal day, a hot day, or an *extreme heat* day using background colors and banner alerts.
- ☀️ **UV Index Tracking:** Includes both current UV index descriptions and an **hourly UV graph** to help you plan your day safely.
- 📅 **7-Day Forecast:** See daily highs, lows, and weather moods using fun emojis.
- 😂 **Lame Joke Generator:** A random joke every time you open the popup – because weather updates don’t have to be boring.
- 🧩 **Chrome Extension UI:** All this wrapped in a compact, responsive popup right from your Chrome toolbar.

---

## 💡 Inspiration

This honestly started with me walking outside and realizing how *hot* it was — like way hotter than I expected. I hadn’t checked the weather, and it hit me: what if there was a lightweight tool that made it *obvious* when it's dangerously hot outside — right from your browser? That little moment turned into this full project.

---

## 🛠️ How We Built It

- **Frontend:** HTML, CSS, and JavaScript
- **Weather Data:** [Open-Meteo API](https://open-meteo.com)
- **Graphing:** Chart.js (for the hourly UV index)
- **Jokes:** A public joke API (because why not?)
- **Chrome Extension Setup:** Built using Manifest v3, background scripts, and popup.html

---

## 🧗 Challenges We Faced

- Getting hourly UV data to render properly on the graph
- Working around Chrome extension permissions and fetch limitations
- Designing a UI that fits inside a small popup but still feels useful and readable

---

## 🎉 What We’re Proud Of

- Smoothly integrating **two APIs** (weather + jokes)
- Dynamic temperature-based visuals (background color + banner)
- Making a UV graph work (it actually looks nice!)
- Creating something genuinely helpful — and fun to use

---

## 🧠 What We Learned

- How to build and debug a Chrome extension from scratch
- How to handle real-time API data and update the UI dynamically
- That small touches like color shifts or a joke can really enhance the user experience

---

## 🔮 What’s Next?

- 💧 Add hydration tips/reminders on hot days
- 📏 Let users choose between Fahrenheit and Celsius
- 🌫️ Possibly add air quality or pollen data
- 🌈 Add weather themes (rainy, cloudy, etc.)
- 🔔 Push notifications for sudden temperature spikes


## 👩‍💻 Team

Built with ❤️ at a hackathon by Ruthper & T-Sasmi.

---

## 📦 Installation

Want to try it out?

1. Clone or download this repo.
2. Go to `chrome://extensions/` in your browser.
3. Enable **Developer Mode**.
4. Click **Load unpacked** and select the folder with the extension files.
5. Pin it to your Chrome toolbar, open it up, and enjoy the (hopefully not extreme) weather!


