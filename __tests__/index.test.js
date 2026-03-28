import path from 'path'
import genDiff from '../src/index.js'
import resultStylish from '../__fixtures__/resultStylish.js'
import resultPlain from '../__fixtures__/resultPlain.js'
import resultJSON from '../__fixtures__/resultJSON.js'

const resolvePath = filepath => path.resolve(process.cwd(), '__fixtures__/', filepath)
const formats = ['json', 'yaml', 'yml']

describe('gendiff', () => {
  describe.each(formats)('Format: %s', (format) => {
    const filepath1 = resolvePath(`file1.${format}`)
    const filepath2 = resolvePath(`file2.${format}`)

    test('stylish format (default)', () => {
      expect(genDiff(filepath1, filepath2)).toEqual(resultStylish)
      expect(genDiff(filepath1, filepath2, 'stylish')).toEqual(resultStylish)
    })

    test('plain format', () => {
      expect(genDiff(filepath1, filepath2, 'plain')).toEqual(resultPlain)
    })

    test('json format', () => {
      expect(genDiff(filepath1, filepath2, 'json')).toEqual(resultJSON)
    })
  })

  test('fake format should return error message', () => {
    const filepath1 = resolvePath('file1.json')
    const filepath2 = resolvePath('file2.json')
    expect(genDiff(filepath1, filepath2, 'fake')).toEqual('Unknown format: fake')
  })
})
