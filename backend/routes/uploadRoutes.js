const path = require('path')
const express = require('express')
const router = express.Router()

const multer = require('multer')
const { uploadFile, getFileStream } = require('../util/s3')
const fs = require('fs')
const util = require('util')
const unlinkFile = util.promisify(fs.unlink)

// Set Storage Engine
const fileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'backend/images/')
  },
  filename: (req, file, cb) => {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    )
  },
})

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/jpeg'
  ) {
    cb(null, true)
  } else {
    cb(null, false)
  }
}

// const upload = multer({ storage: fileStorage, fileFilter: fileFilter })

const upload = multer({ dest: 'images/', fileFilter: fileFilter })

router.get('/:key', (req, res) => {
  const key = req.params.key
  const readStream = getFileStream(key)
  console.log('HELLOO I AM WORKING NOW')
  readStream.pipe(res)
})

router.post('/', upload.single('image'), async (req, res) => {
  // const path = req.file.path.split('/').slice(1).join('/')
  const file = req.file
  const result = await uploadFile(file)
  await unlinkFile(file.path)
  console.log(result)
  // res.send(`/${path}`)
  res.send({ imageKey: `/api/uploads/${result.Key}` })
  // res.send(result)
})

module.exports = router
