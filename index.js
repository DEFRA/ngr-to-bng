'use strict'

module.exports = function (ngr) {
  let easting, northing

  ngr = ngr.toUpperCase()

  let bits = ngr.split(' ')
  ngr = ''
  for (let i = 0; i < bits.length; i++) {
    ngr += bits[i]
  }

  switch (ngr.charAt(0)) {
    case 'S':
      easting = 0
      northing = 0
      break
    case 'T':
      easting = 500000
      northing = 0
      break
    case 'N':
      easting = 0
      northing = 500000
      break
    case 'O':
      easting = 500000
      northing = 500000
      break
    case 'H':
      easting = 0
      northing = 1000000
      break
    default:
      return end()
  }

  if (ngr.charAt(1) === 'I') {
    return end()
  }

  let i = ngr.charCodeAt(1) - 65
  if (i > 8) {
    i -= 1
  }

  easting += (i % 5) * 100000
  northing += (4 - Math.floor(i / 5)) * 100000

  let ii = ngr.substr(2)
  if ((ii.length % 2) === 1 || ii.length > 10) {
    return end()
  }

  let iii = ii.substr(0, ii.length / 2)
  while (iii.length < 5) {
    iii += '0'
  }

  easting += parseInt(iii, 10)

  if (isNaN(easting)) {
    return end()
  }

  let iv = ii.substr(ii.length / 2)

  while (iv.length < 5) {
    iv += '0'
  }

  northing += parseInt(iv, 10)

  if (isNaN(northing) || isNaN(easting)) {
    return end()
  }

  return end(easting, northing)

  function end (easting, northing) {
    return {
      easting: easting,
      northing: northing
    }
  }
}
