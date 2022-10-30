export function isNonNullObject(value: unknown) {
  return !!value && typeof value === 'object'
}

export function isSpecial(value: unknown) {
  const stringValue = Object.prototype.toString.call(value)

  return stringValue === '[object RegExp]' || stringValue === '[object Date]'
}

export function isMergeableObject(value: unknown) {
  return isNonNullObject(value) && !isSpecial(value)
}
