const path = require('path')
const express = require('express')
const multer = require('multer')
const e = require('express')
const router = express.Router()

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

const upload = multer({ storage: fileStorage, fileFilter: fileFilter })

router.post('/', upload.single('image'), (req, res) => {
  console.log('I MADE ITTTTTT!!!!!!!!!!!!!', req.file)
  const path = req.file.path.split('/').slice(1).join('/')
  console.log(path)

  res.send(`/${path}`)
})

module.exports = router
