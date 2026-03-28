import path from 'path'
import yaml from 'js-yaml'
import { readFileSync } from 'fs'

const parseFile = (filepath) => {
  const absolutePath = path.resolve(process.cwd(), filepath)
  const extension = path.extname(absolutePath).toLowerCase()
  const content = readFileSync(absolutePath, 'utf-8')
  switch (extension) {
    case '.json':
      return JSON.parse(content)
    case '.yaml':
    case '.yml':
      return yaml.load(content)
    default:
      throw new Error(`Unsupported file format: ${extension}`)
  }
}
export default parseFile
