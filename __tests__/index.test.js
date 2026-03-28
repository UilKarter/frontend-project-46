import path from 'path'
import { genDiff } from '../src/index.js'
import resultJSON from '../__fixtures__/resultJSON.js'
import resultYaml from '../__fixtures__/resultYAML.js'
import resultPlain from '../__fixtures__/resultPlain.js'

const resolvePath = filePath => path.resolve(process.cwd(), `__fixtures__/`, filePath)

test('Check nested JSON', () => {
  expect(genDiff(resolvePath('file1.json'), resolvePath('file2.json'))).toEqual(resultJSON)
})
test('Check YAML', () => {
  expect(genDiff(resolvePath('file1.yaml'), resolvePath('file2.yaml'))).toEqual(resultYaml)
})
test('Check YML', () => {
  expect(genDiff(resolvePath('file1.yml'), resolvePath('file2.yml'))).toEqual(resultYaml)
})
test('Check plain', () => {
  expect(genDiff(resolvePath('file1.json'), resolvePath('file2.json'), 'plain')).toEqual(resultPlain)
})
test('Check fake format', () => {
  expect(genDiff(resolvePath('file1.json'), resolvePath('file2.json'), 'fake')).toEqual(`Unknown format: fake`)
})

