require('dotenv').config();
const http = require('http');

const app = require('./app');
const {connectMongoose} = require('./services/mongo');
const {loadPlanetsData} = require('./models/planets.model');
const {loadLaunchData} = require('./models/launches.model');

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
  await connectMongoose();
  await loadPlanetsData();
  await loadLaunchData();
  server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
}

startServer();



