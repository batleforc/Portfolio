const scanner = require("sonarqube-scanner");

scanner(
  {
    serverUrl: "https://qube.weebo.fr",
    token: "7a2cd9d80c9c233f3970a4cce4cbd916be35b83d",
    option: {
      "sonar.projectName": "PortfolioV2",
      "sonar.sources": "client",
      "sonar.tests": "client/src/test",
    },
  },
  () => process.exit()
);
