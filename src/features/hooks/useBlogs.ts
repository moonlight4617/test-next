import axios from 'axios';
import { useEffect, useState } from 'react';
const { XMLParser } = require("fast-xml-parser");

// type Props = {}

export function useBlogs() {
  const [postsList, setPostsList] = useState<any>([]);

  useEffect(() => {
    const xp = new XMLParser();
    if (typeof window !== 'undefined') {
      const fetchPosts = async () => {
        try {
          await fetch('/api/endPoint')
            .then(res => res.text())
            .then(data => {
              // console.log(data)
              const parsedData = xp.parse(data)
              // console.log(parsedData.feed)
              let parsedDataList = []
              for (let i = 0; i < 10; i++) {
                if (parsedData.feed.entry[i].title.indexOf('下書き') === -1) {
                  parsedDataList.push(parsedData.feed.entry[i])
                }
              }
              // console.log(typeof(parsedDataList[0]))
              const dataList = Object.entries(parsedDataList)
              setPostsList(dataList)
              // console.log({...dataList})
              // console.log([obj.entry.title, obj.entry.published])
            })
            .catch(err => console.log(err));
        } catch {
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