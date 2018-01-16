import React from "react"

export const ArticleCard = ({ title, author, source, link, timePublished, id, save }) => {
  return (
    <div className="card" data-id={id}>
      <div className="card-block">
        <a href={link}><h3 className="card-header"> {title} </h3></a>
        <h6 className="card-subtitle mb-2 text-muted">by {author} from {source}</h6>
        <a onClick={save} className="btn btn-primary">Save to Account</a>
      </div>
      <div className="card-footer text-muted">
        {timePublished}
      </div>
    </div>
  )
}