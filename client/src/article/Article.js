import React, {useState} from 'react'
import ArticleForm from './ArticleForm'

const Article = (props) => {
  const {id, title, author, body, editArticle, deleteArticle} = props
  const [showForm, setShowForm] = useState(false)

  return (
    <div style={{textAlign: 'center'}}>
      <h2>{title}</h2>
      <h3>{author}</h3>
      <h4>{body}</h4>
      <button onClick={()=>setShowForm(!showForm)}>Edit Article</button>
      <button onClick={()=>deleteArticle(id)}>Delete</button>
      {showForm && <ArticleForm {...props} editArticle={editArticle}/>}
    </div>
  )
}

export default Article