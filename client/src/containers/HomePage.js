import React, { Component } from "react"
import { Container, Row, Col } from "../components/BSGrid"
import { ArticleCard } from "../components/BSComponents"
import API from "../utils/API"

class HomePage extends Component {
  state = {
    articles: [],
    source: "kotaku"
  };

  componentDidMount() {
    this.loadArticles()
  }

  loadArticles = () => {
    API.getArticles()
      .then(res =>
        this.setState({ articles: res.data })
      )
  }

  loadArticlesBySource = () => {
    API.getArticlesBySource(this.state.source)
      .then(res =>
        this.setState({ articles: res.data })
      )
  }

  render() {
    return (
      <Container>
        <Row>
          <Col size="xs-6">
            <Row>
              <h1>Cool Articles</h1>
            </Row>
            <Row>
              <ul>
                <li><button>All Sources</button></li>
                <li><button>Kotaku</button></li>
                <li><button>Gamespot</button></li>
                <li><button>PCGamer</button></li>
                <li><button>Polygon</button></li>
                <li><button>Refresh Articles</button></li>
              </ul>
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
