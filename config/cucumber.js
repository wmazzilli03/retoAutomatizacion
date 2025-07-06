module.exports ={
    default: {
        timeout: 50000,  
        paths: [
             "coordinadora/features/**/*.feature" 
        ], 
        dryRun: false,
        format: [
            "progress-bar",
            "summary",
            "json:reports/cucumber-report.json", 
            "html:reports/cucumber-report.html",
            'allure-cucumberjs/reporter' 
        ],
        formatOptions: {
            colorsEnabled: true,
            snippetInterface: "async-await",
            resultsDir: 'allure-results'
        },
        require: [
            "coordinadora/step-definitions/*.ts",
            "coordinadora/support/*.ts"
        ],
        requireModule: [
            "ts-node/register"
        ]
    } 
}  