import React,{useState, useEffect} from 'react'
import { Container, PostCard } from 'react-dom'
import service from '../appwrite/config2'

function AddPost() {
  const [posts, setPosts]= useState([])
  useEffect(()=>{},[])
  service.getPost([]).then((posts)=>{
    if(posts){
      setPosts(posts.documents)
    }
  })
  return (
    <div className='w-full py-8'>import React from 'react'
     <Container>
        {posts.map((post)=>(
          <PostCard key={post.$id} post={post}/>
        ))}
      </Container>
    </div>
  )
}

export default AddPost