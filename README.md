# 🌦️ Weather Forcast
## 📖 About  
The **Weather Information Center** is a Salesforce Lightning Web Component (LWC) project that provides real-time weather details for any city using the **OpenWeather API**. This project integrates backend logic with a clean and responsive user interface to deliver an intuitive and visually appealing user experience.  

---

## ✨ Features  
### 🌟 Core Functionalities  
- **City-Specific Weather Details**: Displays weather information such as:  
  - Temperature 🌡️  
  - Feels Like 🌬️  
  - Humidity 💧  
  - Pressure 📏  
  - Min & Max Temperatures 🌡️📉📈  
  - General Climate Condition ☁️  

- **Dynamic Weather-Based Videos**:  
  - Autoplaying, muted, and looping videos that align with the current weather condition.  

- **Responsive Design**:  
  - Equal-sized and well-aligned components for a consistent user experience.  

### 🔗 API Integration  
- **OpenWeather API**:  
  - Fetches real-time weather details for any city worldwide.  

### 🚀 Technologies Used  
- **Salesforce Lightning Web Components (LWC)**  
- **Apex** for backend logic and API integration  
- **SLDS (Salesforce Lightning Design System)** for responsive and clean UI  
- **Static Resources** for video assets  

---

## 📂 Project Structure  
```plaintext
|-- force-app
|   |-- main
|       |-- default
|           |-- aura
|           |-- lwc
|               |-- Weather
|                   |-- Weather.js            # JavaScript logic for the component
|                   |-- Weather.html          # Template file for the UI
|                   |-- Weather.css           # Custom styling
|           |-- staticresources
|               |-- MyVideos                 # Folder containing weather-based videos
