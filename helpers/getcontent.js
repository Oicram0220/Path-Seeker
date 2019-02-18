import fs from 'fs'
import path from 'path'
import { createClient } from 'contentful'

const SPACE = process.env.SPACE
const TOKEN = process.env.TOKEN

const client = createClient({
  space: SPACE,
  accessToken: TOKEN
})

const types = [
  'Product'
]

export const getcontent = async () => {
  console.log('> Starting import...')
  for (const type of types) {
    console.log('> Getting content for', type)
    const entries = await client.getEntries()
    if (entries.total >= 1) {
    //   const { fields } = entries.items[0]
      fs.writeFileSync(
        path.join(__dirname, '..', 'data', `${type}.json`),
        JSON.stringify(entries.items)
      )
      console.log('> Content gotten and written for', type)
    }
  }
  return true
}

if (process.argv[2] === 'install') {
  getcontent()
}