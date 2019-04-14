const express = require('express')
const router = express.Router()
const BlogCont = require('../controller/BlogCont')

router.route("/blog")
  .get(BlogCont.getRoute)
  .post(BlogCont.postRoute)

router.route("/blog/:id")
    .put(BlogCont.updateRoute)
    .get(BlogCont.getSingle)

module.exports = router
