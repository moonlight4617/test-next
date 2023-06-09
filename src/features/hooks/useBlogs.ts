import axios from 'axios';
import { useState } from 'react';
// import { blog } from '../../pages/api/blog'

type Props = {}

export async function useBlogs() {
  const [posts, setPosts] = useState([]);
  // axios.get('/api/blog/', {
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   auth: {
  //     username: 'fluid_27',
  //     password: 'spsq4vc7f8'
  //   }
  // })
  fetch('http://localhost:3000/api/blog/')
    .then((data) => console.log(data))
    .catch(error => {
      console.error('Error:', error);
    });

  return (
    null
  )
}