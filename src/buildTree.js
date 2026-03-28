import _ from 'lodash'

const buildChildren = (obj1, obj2) => {
  const keys = _.sortBy(_.union(Object.keys(obj1), Object.keys(obj2)))

  return keys.map((key) => {
    const value1 = obj1[key]
    const value2 = obj2[key]
    if (_.isPlainObject(value1) && _.isPlainObject(value2)) {
      return {
        type: 'nested',
        key,
        children: buildChildren(value1, value2),
      }
    }
    if (!_.has(obj1, key)) {
      return { type: 'added', key, value: value2 }
    }
    if (!_.has(obj2, key)) {
      return { type: 'deleted', key, value: value1 }
    }
    if (!_.isEqual(value1, value2)) {
      return {
        type: 'changed',
        key,
        oldValue: value1,
        newValue: value2,
      }
    }
    if (_.isEqual(value1, value2)) {
      return {
        type: 'unchanged',
        key,
        value: value1,
      }
    }
    else throw new Error(`Unknown changes`)
  })
}

const buildTree = (obj1, obj2) => ({
  type: 'root',
  children: buildChildren(obj1, obj2),
})

export default buildTree
