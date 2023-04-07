const pluckPropertyFromArrayOfObjects = (objs, key) => {
  return objs.map(obj => obj[key])
}
