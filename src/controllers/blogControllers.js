const blogModel = require('../models/blogModels')

function createPost(req, res, next){
    const newPost = blogModel.create(req.body)
  
    if(newPost.error) return next( { status: 400, message: newPost })
    
    res.status(201).send({ data: newPost })
  }
  
  function modifyPost(req, res, next){
    const newPost = blogModel.modify(req.params.postId, req.body)
  
    if(newPost.error) return next( { status: 400, message: newPost })
    
    res.status(201).send({ data: newPost })
  }
  
  function readAllPosts(req, res, next){
    const posts = blogModel.getAll()
    
    res.send({data: posts})
  }
  
  
  function readOnePost(req, res, next){
    const post = blogModel.getOne(req.params.postId)
  
    if(!post) return next({status: 404, message: post })
  
    res.status(200).send(post)
  }
  
  function removePost(req, res, next){
    const post = blogModel.remove(req.params.postId)
  
    if(!post) return next({status: 404, message: post })
  
    res.status(200).send(post)
  }
  

  module.exports = { createPost, readAllPosts, readOnePost, removePost, modifyPost }