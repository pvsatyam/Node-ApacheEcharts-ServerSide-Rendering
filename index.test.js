import test from 'ava'
import echarts from './index'
import option from './demo/pie'
import { readFileSync, unlinkSync } from 'fs'

const testImage = readFileSync('.\\demo\\pie.png') 

test('save file', async (t) => {
  const path = __dirname + '\\pie.png'

  echarts({
    path,
    width: 1000,
    height: 500,
    option
  })

  const file = readFileSync(path)

  t.is(file.length, testImage.length)

  unlinkSync(path)
})

test('return buffer instead of write file', async (t) => {
  const data = await echarts({
    width: 1000,
    height: 500,
    option
  })

  t.is(data.length, testImage.length)
})