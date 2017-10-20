/**
 * format-test.js
 *
 * Tests all JavaScript files except those found in node_modules
 * against formatting outlined in eslintrc
 *
 * @author Edmary Rosado
 */

import glob from 'glob'
import assert from 'assert'
import { CLIEngine } from 'eslint'

const paths  = glob.sync('./{,!(node_modules)/**/}*.js')

const engine = new CLIEngine ({
  env: ['node', 'mocha'],
  useEslintrc: true
})

const results = engine.executeOnFiles(paths).results

describe('ESLint', function(){
  results.forEach((result) => generateTest(result))
})

/**
 * @param {*} result 
 */
function generateTest(result) {

  const {filePath, messages } = result

  it(`format validated for ${filePath}`, function () {
    if (messages.length > 0) {
      assert.fail(false, true, formatMessages(messages))
    }
  })

}

/**
 * @return {*} errors
 * @param {*} messages 
 */
function formatMessages(messages) {

  const errors = messages.map((message) => {
    return `${message.line}:${message.column} ${message.message.slice(0, -1)} - ${message.ruleId}\n`
  })

  return `\n${errors.join('')}`

}

