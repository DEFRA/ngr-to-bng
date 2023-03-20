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

const getPart1 = ngr => {
  let part1 = ngr.charCodeAt(1) - 65
  if (part1 > 8) {
    part1 -= 1
  }
  return part1
}

const getPart2 = ngr => ngr.substr(2)

const getPart3 = part2 => {
  let part3 = part2.substr(0, part2.length / 2)
  while (part3.length < 5) {
    part3 += '0'
  }
  return part3
}

const getPart4 = part2 => {
  let part4 = part2.substr(part2.length / 2)
  while (part4.length < 5) {
    part4 += '0'
  }
  return part4
}

const ngrToBng = ngr => {
  ngr = ngr.toUpperCase().replace(/\s+/g, '')
  const point = getBaseValues(ngr)

  if (isNaN(point.easting) || isNaN(point.northing) || ngr.charAt(1) === 'I') {
    return {}
  }

  const part1 = getPart1(ngr)

  point.easting += (part1 % 5) * 100000
  point.northing += (4 - Math.floor(part1 / 5)) * 100000

  const part2 = getPart2(ngr)
  if ((part2.length % 2) === 1 || part2.length > 10) {
    return {}
  }

  const part3 = getPart3(part2)

  point.easting += parseInt(part3, 10)

  const part4 = getPart4(part2)

  point.northing += parseInt(part4, 10)

  if (isNaN(point.easting) || isNaN(point.northing)) {
    return {}
  }

  return point
}

export default ngrToBng
