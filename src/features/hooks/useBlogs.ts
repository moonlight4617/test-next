import axios from 'axios';
import { useEffect, useState } from 'react';
const { XMLParser } = require("fast-xml-parser");

type Props = {}

export function useBlogs() {
  const [postsList, setPostsList] = useState([]);
  // console.log(typeof window)

  // const xmlParse = async (data) => {
  //   // return await new XMLparser().parseFromString(data); 
  //   const result = await new XMLparser().parseFromString(data); 
  //   console.log(result)
  // }

  useEffect(() => {
    const xp = new XMLParser();
    if (typeof window !== 'undefined') {
    const fetchPosts = async () => {
      try{
        await fetch('/api/endPoint')
        .then(res => res.text())
        .then(data => {
          // console.log(data)
          const parsedData = xp.parse(data)
          // console.log(parsedData.feed)
          let parsedDataList = []
          for (let i = 0; i < 3; i++){
            // console.log(parsedData.feed.entry[i])
            parsedDataList.push(parsedData.feed.entry[i])
          }
          // console.log(typeof(parsedDataList[0]))
          const dataList = Object.entries(parsedDataList)
          setPostsList(dataList)
          // console.log({...dataList})
          // setPostsList(objList)
          // console.log([obj.entry.title, obj.entry.published])
        })
        .catch(err => console.log(err));
      }catch{
        setPostsList(null)
      }
    };
    fetchPosts();
  }
  }, [typeof window])

  return (
    postsList
  )
}