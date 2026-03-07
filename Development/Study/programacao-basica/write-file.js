import { writeFile } from 'node:fs'

writeFile('message.txt', "Oi, mãe!", (err) => {
  if (err) throw err
  console.log('The file has been saved!')
})
