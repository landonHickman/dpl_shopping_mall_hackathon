import axios from 'axios'
import React, {useEffect, useState} from 'react'
import Article from './Article'

const Articles = () => {
  const [articles, setArticles] = useState([])

  useEffect(()=>{
    getArticles()
  },[])

  const getArticles = async () => {
    let res = await axios.get(`/api/articles`)
    setArticles(res.data)
    console.log('look here', res.data)
  }

  const renderArticles = () => {
    return articles.map (article => <Article key={article.id} {...article}/>)
  }

  return (
    <div style={{textAlign: 'center'}}>
      <h1>DPL Mall Articles</h1>
      {renderArticles()}
    </div>
  )
}

export default Articles