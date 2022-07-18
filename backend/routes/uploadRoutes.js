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

router.post('/', upload.array('image'), async (req, res) => {
  // const path = req.file.path.split('/').slice(1).join('/')
  const files = req.files
  const imagesFromS3 = []
  for (let i = 0; i < files.length; i++) {
    const result = await uploadFile(files[i])
    console.log(result)

    const imageKey = await `/api/uploads/${result.Key}`
    imagesFromS3.push(imageKey)
  }
  // await unlinkFile(file.path)

  res.send(imagesFromS3)
  // res.send({ imageKey: `/api/uploads/${result.Key}` })
})

module.exports = router
