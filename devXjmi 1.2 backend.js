const express = require('express');
const bodyParser = require('body-parser');
const mqtt = require('mqtt');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/smartagrihealth', { useNewUrlParser: true, useUnifiedTopology: true });

const DataSchema = new mongoose.Schema({
  temperature: Number,
  humidity: Number,
  timestamp: { type: Date, default: Date.now }
});

const Data = mongoose.model('Data', DataSchema);

const client = mqtt.connect('mqtt://your-MQTT-BROKER', {
  username: 'your-MQTT-USERNAME',
  password: 'your-MQTT-PASSWORD'
});

client.on('connect', () => {
  client.subscribe('sensor/data');
});

client.on('message', (topic, message) => {
  if (topic === 'sensor/data') {
    const data = JSON.parse(message.toString());
    const newData = new Data(data);
    newData.save().then(() => console.log('Data saved to MongoDB'));
  }
});

app.get('/api/data', async (req, res) => {
  const data = await Data.find().sort({ timestamp: -1 }).limit(10);
  res.json(data);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
