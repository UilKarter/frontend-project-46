import fs from 'fs'
import path from 'path'

export function genDiff(filepath1, filepath2) {
  const cont1 = JSON.parse(fs.readFileSync(path.resolve(filepath1), 'utf-8'))
  const cont2 = JSON.parse(fs.readFileSync(path.resolve(filepath2), 'utf-8'))
  return `file1: ${JSON.stringify(cont1)}\nfile2: ${JSON.stringify(cont2)})`
}