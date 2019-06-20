const { exec } = require('child_process')

const currentNodeVersion = process.version
const edgeVersion = 7.7
const debugArg = Number(currentNodeVersion.substr(1, 3)) < edgeVersion ? 'debug' : 'inspect'

console.log(`Node version: ${currentNodeVersion}`) // eslint-disable-line no-console
exec(`node --${debugArg}-brk ./node_modules/jest/bin/jest.js --config jest.config.js`).stderr.pipe(process.stderr)
