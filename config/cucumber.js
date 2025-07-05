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
            "json:reports/cucumber-report.json", // Generates a JSON report
            "html:reports/cucumber-report.html"
        ],
        formatOptions: {
            colorsEnabled: true,
            snippetInterface: "async-await"
        },
        require: [
            "coordinadora/step-definitions/*.ts" 
        ],
        requireModule: [
            "ts-node/register"
        ]
    } 
}  