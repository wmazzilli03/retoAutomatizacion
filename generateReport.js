const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonFile: 'reports/cucumber-report.json',
  output: 'reports/cucumber-report.html',
  reportSuiteAsScenarios: true,
  launchReport: true,
  metadata: {
    "Project": "Coordinadora + Cucumber",
    "Executed": "Local",
    "Environment": "QA",
    "Platform": "Windows"
  }
};

 
reporter.generate(options);
  