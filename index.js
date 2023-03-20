const getBaseValues = ngr => {
  const point = {}
  switch (ngr.charAt(0)) {
    case 'S':
      point.easting = 0
      point.northing = 0
      break
    case 'T':
      point.easting = 500000
      point.northing = 0
      break
    case 'N':
      point.easting = 0
      point.northing = 500000
      break
    case 'O':
      point.easting = 500000
      point.northing = 500000
      break
    case 'H':
      point.easting = 0
      point.northing = 1000000
      break
    default:
  }
  return point
}

const ngrToBng = ngr => {
  ngr = ngr.toUpperCase().replace(/\s+/g, '')
  const point = getBaseValues(ngr)

  if (isNaN(point.easting) || isNaN(point.northing) || ngr.charAt(1) === 'I') {
    return {}
  }

  let i = ngr.charCodeAt(1) - 65
  if (i > 8) {
    i -= 1
  }

  point.easting += (i % 5) * 100000
  point.northing += (4 - Math.floor(i / 5)) * 100000

  const ii = ngr.substr(2)
  if ((ii.length % 2) === 1 || ii.length > 10) {
    return {}
  }

  let iii = ii.substr(0, ii.length / 2)
  while (iii.length < 5) {
    iii += '0'
  }

  point.easting += parseInt(iii, 10)

  if (isNaN(point.easting)) {
    return {}
  }

  let iv = ii.substr(ii.length / 2)

  while (iv.length < 5) {
    iv += '0'
  }

  point.northing += parseInt(iv, 10)

  if (isNaN(point.northing)) {
    return {}
  }

  return point
}

export default ngrToBng
