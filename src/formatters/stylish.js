import _ from 'lodash'

const space = ' '
const spaceMultiplier = 4
const getIndent = depth => space.repeat(spaceMultiplier * depth - 2)
const getClosingIndent = depth => space.repeat(spaceMultiplier * depth - spaceMultiplier)

const formatLines = (lines, depth) => [
  '{',
  ...lines,
  `${getClosingIndent(depth)}}`,
].join('\n')

const stringify = (data, depth) => {
  if ((!_.isObject(data)) || (data === null)) {
    return String(data)
  }
  const keys = _.keys(data)
  const lines = keys.map(key => `${getIndent(depth)}  ${key}: ${stringify(data[key], depth + 1)}`)
  return formatLines(lines, depth)
}

const stylish = (tree) => {
  const processNode = (node, depth) => {
    switch (node.type) {
      case 'root': {
        const result = node.children.flatMap(child => processNode(child, depth))
        return formatLines(result, depth)
      }
      case 'nested': {
        const children = node.children.flatMap(child => processNode(child, depth + 1))
        return `${getIndent(depth)}  ${node.key}: ${formatLines(children, depth + 1)}`
      }
      case 'added': {
        return `${getIndent(depth)}+ ${node.key}: ${stringify(node.value, depth + 1)}`
      }
      case 'deleted': {
        return `${getIndent(depth)}- ${node.key}: ${stringify(node.value, depth + 1)}`
      }
      case 'changed': {
        return [
          `${getIndent(depth)}- ${node.key}: ${stringify(node.oldValue, depth + 1)}`,
          `${getIndent(depth)}+ ${node.key}: ${stringify(node.newValue, depth + 1)}`,
        ]
      }
      case 'unchanged': {
        return `${getIndent(depth)}  ${node.key}: ${stringify(node.value, depth + 1)}`
      }
      default: {
        throw Error(`Unknown node type: ${node.type}`)
      }
    }
  }
  return processNode(tree, 1)
}

export default stylish
