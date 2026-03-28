import buildTree from './buildTree.js'
import parseFile from './parsers.js'
import getFormatter from './formatters/index.js'

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  try {
    const data1 = parseFile(filepath1)
    const data2 = parseFile(filepath2)
    const tree = buildTree(data1, data2)
    return getFormatter(format, tree)
  } catch (error) {
    return error.message
  }
}

export default genDiff
