import stylish from "./stylish.js"
import plain from "./plain.js"

const formatters = {
  stylish,
  plain,
  json: JSON.stringify,
}

export default (format, tree) => {
  const formatter = formatters[format]
  if (!formatter) {
    throw new Error(`Unknown format: ${format}`)
  }
  return formatter(tree)
}