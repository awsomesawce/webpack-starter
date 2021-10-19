let mori = require('mori')
let I = require('immutable')
let R = require('ramda')
let L = require('lodash')
const ajv = require('ajv')
const cosmiconfig = require('cosmiconfig')
const envinfo = require('envinfo')
const yamlModules = ['js-yaml', 'yaml']
const utilModules = ['lodash', 'underscore', 'util', 'node:util']
const confModules = ['conf', 'cosmiconfig', 'ini']
const globModules = ['fast-glob', 'glob', 'globby', 'minimatch', 'micromatch']
const argModules = ['argparse', 'minimist', 'optimist', ['yargs', 'commander']]
const moduleList = {
  'yamlMods': yamlModules,
    'utilMods': utilModules,
      'confMods': confModules,
        'globModules': globModules,
          'argMods': argModules
          };
          const moduleArray = [
            yamlModules,
              utilModules,
                confModules,
                  globModules,
                    argModules
                    ];
                    console.log(`Yaml modules are: ${yamlModules}`);
                    console.log(`All modules are: ${moduleArray}`);
                    console.log(`All modules are also: ${moduleList}`);
                    const jsyaml = require('js-yaml')
                    const yaml = require('yaml')
                    const colorette = require('colorette')
                    const base64 = require('base64-js')
                    const conf = require('conf')
                    const ini = require('ini')
                    const glob = require('fast-glob')
                    const execa = require('execa')
                    const minimist = require('minimist')
                    const nasync = require('neo-async')
                    const jsonParse = require('json-parse-even-better-errors')
                    const sourceMap = require('source-map')
                    const U = require('underscore')
                    const util = require('util')
                    const reusify = require('reusify')
                    const escalade = require('escalade')
                    
reusify.toLocaleString()
constants.X_OK
constants.EBUSY
minimist(['one', 'two', 'three'])
minimist(['--help'])
minimist.toLocaleString()
process.argv
Object.keys(moduleList)
foreach (let i of moduleList) {
for (let i of moduleList) {
for (let i of Object.keys(moduleList)) {
console.log(i)}
Object.values(moduleList)[0]
let mVals = Object.values(moduleList)
mVals[0..3]
Object.isSealed(moduleList)
Object.getPrototypeOf(moduleList.argMods)
let x;
x = Object.getPrototypeOf(moduleList.argMods)
typeof x
typeof argModules
Array.isArray(x)
x
let arr = new Uint8Array([1, 2, 3])
arr
let arr2 = [1, 2, 3]
x.push(1)
x
x.push(2)
x
let arr3 = new Int16Array([4, 5, 6])
arr3.BYTES_PER_ELEMENT
arr2.length
arr
arr.BYTES_PER_ELEMENT
let arr1 = arr
let arrs = new Int16Array([arr1, arr2, arr3])
arrs
arrs = [arr1, arr2, arr3]
arrs[0]
arr1
arr.keys()
let z = arr.keys()
z.toString()
z.next().then(x => {
z.next()
z.next()
mori.get
mori.vector(1, 2, 3)
let vec = mori.vector(4, 5, 6)
mori.toClj(vec)
mori.toJS
mori.toJs
mori.toClj.a.toLocaleString()
mori
mori
let q1 = mori.queue(1, 2)
q1.inspect()
let l1 = mori.list(vec)
l1.inspect()
vec.inspect()
l1 = mori.list(1, 2, 3)
l1.inspect()
l1.toString()
let s1 = mori.set('one', 'two', 'three', 'three')
s1.inspect()
s1 = mori.set(['one', 'two', 'three'])
s1.inspect()
let s2 = I.Set(['one', 'two', 'three'])
s2
I.isSet(s2)
let s3 = new Set([1, 2, 3])
s3
let sets = new Set([s1, s2, s3])
sets
sets.forEach(x => {
console.log(x)})
sets.forEach((x, y) => {
console.log(`${x}: ${y}`)})