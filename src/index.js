import fs from 'fs'
import path from 'path'
import _ from 'lodash'

export function genDiff(filepath1, filepath2) {
  const data1 = JSON.parse(fs.readFileSync(path.resolve(filepath1), 'utf-8'))
  const data2 = JSON.parse(fs.readFileSync(path.resolve(filepath2), 'utf-8'))
  const keys = _.union(Object.keys(data1), Object.keys(data2)).sort()
  const lines = keys.map((key) => {
    if (!Object.hasOwn(data2, key)) return `  - ${key}: ${data1[key]}`
    if (!Object.hasOwn(data1, key)) return `  + ${key}: ${data2[key]}`
    if (data1[key] === data2[key]) return `    ${key}: ${data1[key]}`
    return [
      `  - ${key}: ${data1[key]}`,
      `  + ${key}: ${data2[key]}`,
    ];
  }).flat()

  return `{\n${lines.join('\n')}\n}`
}