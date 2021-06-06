import axios from 'axios'
import React, {useEffect, useState} from 'react'
import Article from './Article'
import ArticleForm from './ArticleForm'

const Articles = () => {
  const [articles, setArticles] = useState([])
  const [showForm, setShowForm] = useState(false)

  useEffect(()=>{
    getArticles()
  },[])

  const getArticles = async () => {
    let res = await axios.get(`/api/articles`)
    setArticles(res.data)
  }

  const renderArticles = () => {
    return articles.map (article => <Article key={article.id} {...article}/>)
  }

  const addArticle = (article) => {
    setArticles([article, ...articles])
  }

  return (
    <div style={{textAlign: 'center'}}>
      <h1>DPL Mall Articles</h1>
      <button onClick={()=>setShowForm(!showForm)}>Add Article</button>
      {showForm && <ArticleForm addArticle={addArticle}/>}
      {renderArticles()}
    </div>
  )
}

export default Articles