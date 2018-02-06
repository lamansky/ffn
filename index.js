'use strict'

module.exports = function ffn (f) {
  const type = typeof f
  if (type === 'function') return f
  if (type === 'undefined') return x => !!x
  if (Array.isArray(f)) return x => f.includes(x)
  return x => x === f
}
