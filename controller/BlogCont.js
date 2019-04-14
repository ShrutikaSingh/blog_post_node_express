const Blog = require('../models/BlogModels')

const getRoute = async (req, res, next) => {
  const allBlogs = await Blog.find({})
  return res.status(200).send({
    data: allBlogs
  })
}

const postRoute = async (req, res, next) => {
  const input = req.body
  // {
  //   "title": "dodo",
  //   "author": "Duck",
  //   "body": "dodo duck"
  // }
  const newBlog = new Blog(input)
  await newBlog.save()
  return res.status(201).send({
    data: newBlog
  })
}

const updateRoute = async (req, res, next) => {
  const blogId = req.params.id
  let oldBlog = await Blog.findById(blogId)
  // use spread operator instead of object key value pairs
  // oldBlog.body = req.body.body
  // oldBlog.title = req.body.title

  await oldBlog.save()
  return res.status(201).send({
    data: oldBlog
  })
}

const getSingle = async (req, res, next) => {
  const blogId = req.params.id
  let oldBlog
  try {
    oldBlog = await Blog.findById(blogId)
  } catch(e) {
    return res.status(500).send({
      "data": "server error"
    })
  }
  if(!oldBlog) {
    // true !(false)
    return res.status(404).send({
      data: "no data available"
    })
  }
  return res.status(200).send({
    data: oldBlog
  })
}

module.exports = {
  getRoute: getRoute,
  postRoute: postRoute,
  updateRoute,
  getSingle
}
