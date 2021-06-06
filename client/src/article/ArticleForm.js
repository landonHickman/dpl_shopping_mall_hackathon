import axios from 'axios'
import React, {useState} from 'react'

const ArticleForm = (props) => {
  const {id, addArticle} = props 
  const [title, setTitle] = useState(props.title ? props.title : '')
  const [author, setAuthor] = useState(props.author ? props.author : '')
  const [body, setBody] = useState(props.body ? props.body : '')
  
  const handleSubmit = async (e) => {
    e.preventDefault()

    try{
      if(id){

      }else{
        let res = await axios.post('/api/articles', {title, author, body})
        addArticle(res.data)
      }
    } catch(err){
      alert('err')
      console.log(err)
    }
  }

  return (
    <div>
      <h2>{id ? 'Edit Article' : 'Add Article' }</h2>
      <form onSubmit={handleSubmit}>
        <p>Title</p>
        <input value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <p>Author</p>
        <input value={author} onChange={(e)=>setAuthor(e.target.value)}/>
        <p>Body</p>
        <input value={body} onChange={(e)=>setBody(e.target.value)}/>
        <p></p>
        <button>{id ? 'Edit' : 'Add'}</button>
      </form>
    </div>
  )
}

export default ArticleForm