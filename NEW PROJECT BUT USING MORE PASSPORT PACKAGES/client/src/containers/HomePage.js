import React, { Component } from "react"
import { Container, Row, Col } from "../components/BSGrid"
import { ArticleCard, Alert } from "../components/BSComponents"
import API from "../modules/API"

// HANDLES OUR CONTENT: ARTICLES AND MARKETPLACE
// FINISH ARTICLES HOWEVER MOCK UP THE MARKETPLACE


class HomePage extends Component {
  state = {
    articles: [],
    source: null
  };

  componentDidMount() {
    this.loadArticles()
  }

  componentDidUpdate() {
    // this.saveArticle()
  }

  loadArticles = () => {
    API.getArticles()
    .then(res => {
      this.setState({ articles: [] })
      this.setState({ articles: res.data })
    })

    // LOAD ARTICLES BY SOURCE
  }

  saveArticle = () => {
    if (this.props.user) {
      API.getUser(this.props.user.id)
      .then(res =>
        console.log(res)
      )
    }
  }

  render() {
    return (
      <Container>
        <Row>
          <h1>Welcome { this.props.user ? this.props.user.username : "Guest" }</h1>
        </Row>
        <Row>
          <Col size="xs-6">
            <Row>
              <h1>Cool Articles</h1>
            </Row>
            <Row>
              <Alert
                status={true}
                success="success"
                failure="danger"
                messageSuccess="Thank you for passing. :)"
                messageFailure="Oh no! There was an error. :("
              />
              <div className="btn-group" role="group" aria-label="Source Group">
                <button type="button" className="btn btn-secondary">All</button>
                <button type="button" className="btn btn-secondary">Gamespot</button>
                <button type="button" className="btn btn-secondary">Kotaku</button>
                <button type="button" className="btn btn-secondary">PCGamer</button>
                <button type="button" className="btn btn-secondary">Polygon</button>
                <button type="button" className="btn btn-secondary">Refresh Articles</button>
              </div>
            </Row>
            <Row>
            {
              this.state.articles.map(function(article) {
                return (
                  <ArticleCard
                    title={article.title}
                    author={article.author}
                    source={article.source}
                    link={article.link}
                    timePublished={article.timePublished}
                    key={article._id}
                  />
                )
              })
            }
            </Row>
          </Col>
          <Col size="xs-6">
            <h1>Market Place</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HomePage
