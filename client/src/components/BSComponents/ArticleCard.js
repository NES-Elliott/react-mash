import React from "react"

export const ArticleCard = ({ title, author, source, link, timePublished }) => {

  return (
    <div className="card">
      <div className="card-body">
        <a href={link}><h3 className="card-title"> {title} </h3></a>
        <h6 className="card-subtitle mb-2 text-muted">by {author} from {source}</h6>
        <p className="text-muted">{timePublished}</p>
        <a className="btn btn-light" role="button">Delete this Article</a>
      </div>
    </div>
  )
}