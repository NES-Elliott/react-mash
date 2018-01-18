import React from "react"
import API from "../../modules/API"

export const Card = ({ title, author, source, link, timePublished, id, user, loggedIn }) => {
  const renderIfLoggedIn = () => {
    if (loggedIn) {
      return (
        <a onClick={save} className="btn btn-light" role="button">Save to Account</a>
      )
    }
  }

  let article
  const save = () => {
    API.getArticleById(id)
    .then(res => {
      article = res.data
      updateUser()
    })
  }

  const updateUser = () => {
    API.saveToUser(user.id, {$push:{savedArticles: article}})
    .then(res => {
      console.log(res)
    })
  }

  return (
    <div className="card">
      <div className="card-body">
        <a href={link}><h3 className="card-title"> {title} </h3></a>
        <h6 className="card-subtitle mb-2 text-muted">by {author} from {source}</h6>
        <p className="text-muted">{timePublished}</p>
        {renderIfLoggedIn()}
      </div>
    </div>
  )
}