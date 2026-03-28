import path from 'path'
import { genDiff } from '../src/index.js'
import result from '../__fixtures__/result.js'
import resultYaml from '../__fixtures__/resultYAML.js'

const resolvePath = filePath => path.resolve(process.cwd(), `__fixtures__/`, filePath)

test('Check flat JSON', () => {
  expect(genDiff(resolvePath('file1.json'), resolvePath('file2.json'))).toEqual(result)
})
test('Check YAML', () => {
  expect(genDiff(resolvePath('file1.yaml'), resolvePath('file2.yaml'))).toEqual(resultYaml)
})
test('Check YML', () => {
  expect(genDiff(resolvePath('file1.yml'), resolvePath('file2.yml'))).toEqual(resultYaml)
})
