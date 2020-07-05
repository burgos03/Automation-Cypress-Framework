const cypress = require('cypress')
const yargs = require('yargs')
const { merge } = require('mochawesome-merge')
const marge = require('mochawesome-report-generator')
const rm = require('rimraf')
const cypressConfig = require('./cypress')
const ls = require('ls')
const fs = require('fs');

const argv = yargs.options({
    'browser': {
        alias: 'b',
        describe: 'choose browser that you wanna run tests on',
        default: 'chrome',
        choices: ['chrome', 'electron']
    },
    'spec': {
        alias: 's',
        describe: 'run test with specific spec file',
        default: 'cypress/integration/*.spec.js'
    }
}).help()
  .argv

const reportDir = cypressConfig.reporterOptions.reportDir
const reportFiles = `${reportDir}/*.json`

// remove JSON Reports 
removeJsonReports()

cypress.run({
    browser: argv.browser,
    spec: argv.spec
}).then((results) => {
        const reporterOptions = {
            reportDir: results.config.reporterOptions.reportDir
        }
        modifyStepsInJsonReports()
        generateReport(reporterOptions)
        removeJsonReports()
        console.log("Open the report from: \n" + reportDir + "mochawesome.html")
    }).catch((error) => {
        console.error('errors: ', error)
        process.exit(1)
});

function generateReport(options) {
    return merge(options).then((report) => {
        marge.create(report, options);
    });
}

function modifyStepsInJsonReports() {
    ls(reportFiles, { recurse: true }, file => {
        let rawData = fs.readFileSync(file.full);
        let report = JSON.parse(rawData);

        for (const result of report.results) {
        for (const suite of result.suites) {
            for (const test of suite.tests) {
            let code = test.code.replace(/\./g, '\n  .');
            test.code = code;
            }
        }
        }
        
        let data = JSON.stringify(report, null, 2);
        fs.writeFileSync(file.full, data);
    });
}

function removeJsonReports() {
    // list all of existing report files
    ls(reportFiles, { recurse: true }, file => console.log(`removing ${file.full}`));

    // delete all existing report files
    rm(reportFiles, (error) => {
        if (error) {
            console.error(`Error while removing existing report files: ${error}`);
            process.exit(1);
        }
        console.log('Removing all existing report files successfully!');
    });
}
