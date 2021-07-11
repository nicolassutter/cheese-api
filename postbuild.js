const fs = require('fs')
const fsPromises = fs.promises
const path = require('path')

const directoryPath = path.join(__dirname, 'cheeses')
const extension = '.json'

/**
 * Get every file in giver directory, with given extension
 */
const getAllCheeses = async () => {
  try {
    const promises = await fsPromises.readdir(directoryPath)
    const files = promises.filter((file) => file.endsWith(extension))
  
    return files
  } catch (_) {
    return []
  }
}

/**
 * Copy the static files to cheeses directory
 */
getAllCheeses().then((res) => {
  fs.mkdir('./build/cheeses', err => {
    if (!err) {
      res.forEach(cheese => {
        fs.copyFile(`./cheeses/${cheese}`, `./build/cheeses/${cheese}`, err => err && console.log(err))
      })
    }
  })
})