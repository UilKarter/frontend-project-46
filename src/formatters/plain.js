import _ from 'lodash'

const getPath = pathParts => pathParts.join('.')

const formatValue = (value) => {
  if (value === null) return 'null'
  if (_.isObject(value)) return '[complex value]'
  if (_.isString(value)) return `'${value}'`
  return String(value)
}

const plainDiff = (nodes, pathParts = []) => {
  return nodes.flatMap((node) => {
    const currentPathParts = [...pathParts, node.key]
    const currentPath = getPath(currentPathParts)

    switch (node.type) {
      case 'nested':
        return plainDiff(node.children, currentPathParts)

      case 'added':
        return `Property '${currentPath}' was added with value: ${formatValue(node.value)}`

      case 'deleted':
        return `Property '${currentPath}' was removed`

      case 'changed':
        return `Property '${currentPath}' was updated. From ${formatValue(node.oldValue)} to ${formatValue(node.newValue)}`

      case 'unchanged':
        return []

      default:
        throw new Error(`Unknown node type: ${node.type}`)
    }
  })
}

const plain = (tree) => {
  const result = plainDiff(tree.children)
  return result.join('\n')
}

export default plain
