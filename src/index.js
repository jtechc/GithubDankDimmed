const fs = require('fs').promises;
const getTheme = require('./theme');

const dankDimmedTheme = getTheme({
  theme: 'dank',
  name: 'Github Dank Dimmed'
});

fs.mkdir('./themes', { recursive: true }).then(() => Promise.all([
  fs.writeFile('./themes/dank-dimmed.json', JSON.stringify(dankDimmedTheme, null, 2))
])).catch(() => process.exit(1));