import ngrToBng from '../index.js'
import { readFileSync } from 'fs'
const data = JSON.parse(readFileSync('./__tests__/data.json'))

describe('NGR to BNG', () => {
  it('Should convert all test grid references to BNG points', done => {
    data.forEach((item) => {
      console.log('convert', item)
      const point = ngrToBng(item.ngr)
      expect(point.easting).toEqual(item.easting)
      expect(point.northing).toEqual(item.northing)
    })
    done()
  })
})
