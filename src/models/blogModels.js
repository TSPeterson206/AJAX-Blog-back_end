const posts = require('../db/blog.js')
const uuid = require('uuid')


/////// Post Functions
function create(newPost) {
    const error = []
    const {
        id,
        body
    } = newPost

    if (!body) {
        error.push('Please Provide Content To Create')
    }

    if (error.length) return {
        error
    }
    newPost.id=uuid()
    posts.push(newPost)
    return posts
}

function modify(postId, newPost) {
    const error = []
    const postidx = posts.findIndex(ele => ele.id === postId)
    if (postidx === -1) {
        error.push('Not Found')
    }

    const {
        id,
        body
    } = newPost

    posts[postidx].body = body

    if (!body) {
        error.push("Please add content to post body")
    }
    if (error.length) return {
        error
    }

    return  posts[postidx] 
}

function getAll() {
    return posts
}

function getOne(postId) {

    const post = posts.find(ele => ele.id === postId)

    if (!post) {
        return {
            error: ['post not found']
        }
    }

    return post
}

function remove(postId) {
    const postidx = posts.findIndex(ele => ele.id === postId)

    if (postidx === -1) return {
        error: ['Not Found']
    }

    const savedPost = posts[postidx]

    posts.splice(postidx, 1)

    return savedPost
}

module.exports = {
    create,
    getAll,
    getOne,
    remove,
    modify
}