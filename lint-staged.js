module.exports = {
  "*.{js,jsx,ts,tsx}": [
    "eslint --max-warnings=40",
    "react-scripts test --bail --watchAll=false --findRelatedTests --passWithNoTests",
    () => "tsc-files --noEmit",
  ],
};
