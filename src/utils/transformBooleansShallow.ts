function transformBooleans(values: Object | []): Object | [] {
  if (Array.isArray(values)) {
    return values.map(val => typeof val === 'object' ? transformBooleans(val) : val)
  }

  const result = {}
  Object.keys(values).forEach(key => {
    const val = values[key]

    if (Array.isArray(val) || typeof val === 'object') {
      result[key] = transformBooleans(val)
    } else if (typeof val === 'boolean') {
      result[key] = val ? 1 : 0
    } else {
      result[key] = val
    }
  })

  return result
}

export default transformBooleans