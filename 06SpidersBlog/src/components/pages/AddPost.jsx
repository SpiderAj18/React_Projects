import React,{useState, useEffect} from 'react'
import { Container, PostCard } from 'react-dom'
import service from '../../appwrite/config2'

function AddPost() {
  const [posts, setPosts]= useState([]
    service.getPost([]))
  return (
    <div>AddPost</div>
  )
}

export default AddPost