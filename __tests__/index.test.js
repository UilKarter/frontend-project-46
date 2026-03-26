import { genDiff } from '../src/index.js';
import result from '../__fixtures__/result.js';

test('Check flat JSON', () => {
  expect(genDiff('file1.json', 'file2.json')).toEqual(result);
})