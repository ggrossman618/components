module.exports = {
  displayName: "@altronix/components",
  // preset: '../../altronix-workspace/jest.preset.js',
  transform: {
    "^.+\\.[tj]sx?$": [
      "babel-jest",
      { cwd: __dirname, configFile: "./babel-jest.config.json" },
    ],
  },
  testEnvironment: "jsdom",
  moduleNameMapper: { "^.+\\.(css|less|scss)$": "babel-jest" },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  coverageDirectory: "../../../coverage/projects/material/components-react",
};
