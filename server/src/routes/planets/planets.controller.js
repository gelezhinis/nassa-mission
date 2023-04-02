const {getAllPlanets} = require('../../models/planets.model');

const httpGetAllPlanets = async (req, res) => {
  console.log('Planets is getting loaded..')
  return res.status(200).json(await getAllPlanets());
}

module.exports = {
  httpGetAllPlanets,
};
