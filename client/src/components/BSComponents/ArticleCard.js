import React from "react"

export const ArticleCard = ({ title, author, source, link, timePublished }) => {

  return (
    <div className="card">
      <div className="card-body">
        <a href={link}><h3 className="article-header"> {title} </h3></a>
        <h6 className="section-subheader">by {author} from {source}</h6>
        <p className="text-muted">{timePublished}</p>
        <a className="btn btn-warning" role="button"><span className="basic-text">Delete this Article</span></a>
      </div>
    </div>
  )
}