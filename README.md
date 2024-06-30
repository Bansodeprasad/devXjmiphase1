# devXjmiphase1
# SmartAgriHealth

## Overview
SmartAgriHealth is an IoT-based solution designed to improve efficiency and control in healthcare and agriculture by providing real-time monitoring and management.

## Technology Stack
- IoT Sensors: ESP8266, DHT11
- Backend: Node.js, Express, MongoDB, MQTT
- Frontend: React

## Installation Instructions

### IoT Sensor
1. Install the Arduino IDE.
2. Install the ESP8266 board and required libraries (DHT, PubSubClient).
3. Upload the provided firmware to the ESP8266.

### Backend
1. Clone the repository: `git clone https://github.com/Bansodeprasad/devXjmiphase1.git`
2. Install dependencies: `cd backend && npm install`
3. Start the server: `node server.js`

### Frontend
1. Navigate to the frontend directory: `cd frontend`
2. Install dependencies: `npm install`
3. Start the React app: `npm start`

## Usage
1. Ensure the IoT sensor is connected and publishing data.
2. Start the backend server to collect data from the sensor.
3. Open the frontend app to visualize the data.

## Contributing
Feel free to submit issues and pull requests for any improvements or bug fixes.

## License
This project is licensed under the MIT License.
