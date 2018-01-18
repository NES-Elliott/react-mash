import React, { Component } from "react"
import { Card } from "./BSComponents"
import API from "../modules/API"

class ArticleComp extends Component {
  state = {
    articles: [],
    source: ""
  }

  componentDidMount() {
    this.initialPopulate()
  }

  initialPopulate = () => {
    API.getArticles()
    .then(res => {
      this.setState({
        articles: res.data,
        source: "all"
      })
    })
  }

  populateArticles = (source) => {
    if (source === "all") {
      API.getArticles()
      .then(res => {
        this.setState({
          articles: res.data
        })
      })
    } else {
      API.getArticlesBySource(source)
      .then(res => {
        this.setState({
          articles: res.data
        })
      })
    }
  }

  refreshArticles = (refresh) => {
    if (refresh === "refresh") {
      API.scrapeNewArticles()
    }
  }

  handleSourceValue = sourceValue => {
    this.setState({
      source: sourceValue
    })
    switch (sourceValue) {
      case "all":
        this.populateArticles(this.state.source)
        break
      case "gamespot":
        this.populateArticles(this.state.source)
        break
      case "kotaku":
        this.populateArticles(this.state.source)
        break
      case "pcgamer":
        this.populateArticles(this.state.source)
        break
      case "polygon":
        this.populateArticles(this.state.source)
        break
      default:
        this.populateArticles(this.state.source)
    }
  }

  render() {
    return (
      <div>
        <h2 className="section-header">Latest News</h2>
        <p className="section-subheader">This list will refresh every 24 hours.</p>
        <div className="btn-group" role="group" aria-label="Source Group">
          <button type="button" className="btn btn-secondary" onClick={() => this.handleSourceValue("all")}>All</button>
          <button type="button" className="btn btn-secondary" onClick={() => this.handleSourceValue("gamespot")}>Gamespot</button>
          <button type="button" className="btn btn-secondary" onClick={() => this.handleSourceValue("kotaku")}>Kotaku</button>
          <button type="button" className="btn btn-secondary" onClick={() => this.handleSourceValue("pcgamer")}>PCGamer</button>
          <button type="button" className="btn btn-secondary" onClick={() => this.handleSourceValue("polygon")}>Polygon</button>
          <button type="button" className="btn btn-secondary" onClick={() => this.refreshArticles("refresh")}>Refresh Articles</button>
        </div>
        <div>
          {
            this.state.articles.map((article, x) => {
              if (article.title) {
                x+1
                return (
                  <Card
                    title={article.title}
                    author={article.author}
                    source={article.source}
                    link={article.link}
                    timePublished={article.timePublished}
                    id={article._id}
                    key={x}
                    user={this.props.user}
                    loggedIn={this.props.loggedIn}
                  />
                )
              }
            })
          }
        </div>
      </div>
    )
  }
}

export default ArticleComp




// loadArticles = () => {
//   API.getArticles()
//   .then(res => {
//     this.setState({ articles: [] })
//     this.setState({ articles: res.data })
//   })

//   // LOAD ARTICLES BY SOURCE
// }

// saveArticle = () => {
//   if (this.props.user) {
//     API.getUser(this.props.user.id)
//     .then(res =>
//       console.log(res)
//     )
//   }
// }





// <Col size="xs-6">
//           <Row>
//             <h1>Latest News</h1>
//           </Row>
//           <Row>
//             <div className="btn-group" role="group" aria-label="Source Group">
//               <button type="button" className="btn btn-secondary">All</button>
//               <button type="button" className="btn btn-secondary">Gamespot</button>
//               <button type="button" className="btn btn-secondary">Kotaku</button>
//               <button type="button" className="btn btn-secondary">PCGamer</button>
//               <button type="button" className="btn btn-secondary">Polygon</button>
//               <button type="button" className="btn btn-secondary">Refresh Articles</button>
//             </div>
//           </Row>
//           <Row>
//           {
//             this.state.articles.map(function(article) {
//               return (
//                 <Card
//                   title={article.title}
//                   author={article.author}
//                   source={article.source}
//                   link={article.link}
//                   timePublished={article.timePublished}
//                   key={article._id}
//                 />
//               )
//             })
//           }
//           </Row>
//         </Col>