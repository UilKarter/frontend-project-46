import buildTree from './buildTree.js'
import parseFIle from './parsers.js'
import stylish from './formatters/stylish.js'

export function genDiff(filepath1, filepath2, format = 'stylish') {
  const data1 = parseFIle(filepath1)
  const data2 = parseFIle(filepath2)
  const tree = buildTree(data1, data2)
  switch (format) {
    case 'stylish':
      return stylish(tree)
    default: throw new Error(`Unknown format type: ${format}`)
  }
}