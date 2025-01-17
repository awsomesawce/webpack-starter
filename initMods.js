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
