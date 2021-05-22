const dankColors = require('./dankcolors.json');
const dankerColors = require('@primer/primitives/dist/json/colors_v2/dark.json');

function getColors(theme) {
  if (theme === "dank") {
    return dankColors;
  } else if (theme === "danker") {
    return dankerColors;
  }
};

module.exports = {
  getColors,
};