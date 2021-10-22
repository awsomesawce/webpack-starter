# Parsing JS Objects into json5 and yaml

It's a beautiful thing.


```javascript
// Get a yaml file from the system, parse it, convert it to various file types.

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const json5 = require('json5');

const os = require('os')

const myPath = `${process.env.USERPROFILE}\\scoop\\buckets\\main`
const fileOne = `${myPath}\\appveyor.yml`
/* Not working
const result = fs.readFile(fileOne, 'utf-8', (err, data) => {
    if (err) {console.error(err)}
    return data
})
*/
const fileText = fs.readFileSync(fileOne).toLocaleString()

const parsedYaml = yaml.load(fileText)
const json5String = json5.stringify(parsedYaml)
/**
 * Now to write stringified object to a file
 */
function writeToFile () {
    let dirName = path.resolve("..\\data")
    let fileName = path.resolve(`${dirName}\\parsedJson.json5`)
    if (json5String) {
        console.log(`Writing json5String to ${fileName}`)
        fs.writeFileSync(`${fileName}`, json5String);
    } else {
        console.error("No json5String");
        return 1
    }
    return 0
}
(writeToFile() === 0) ? (console.log('No errors')) : (console.log('There was an error'));

//console.log(json5String)
```
