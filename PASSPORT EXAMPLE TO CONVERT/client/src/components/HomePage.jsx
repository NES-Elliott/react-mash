import React, { Component } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Auth from '../modules/Auth';
import API from "../modules/API"

class HomePage extends Component {
  state = {
    articles: []
  }

  componentDidMount() {
    // update authenticated state on logout
    this.props.toggleAuthenticateStatus()
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
      <div>
        <Card className="container">
          <CardTitle title="Welcome to Mash" subtitle="This is the home page for Mash." />
            {Auth.isUserAuthenticated() ? (
              <CardText style={{ fontSize: '16px', color: 'green' }}>Welcome! You are logged in.</CardText>
            ) : (
              <CardText style={{ fontSize: '16px', color: 'green' }}>You are not logged in.</CardText>
            )}
        </Card>

        <div className="container">
          <div>
            <h2>Articles</h2>

            <div>
              {
                this.state.articles.map(function(article) {
                  return (
                    <h4>{article.title}</h4>
                    <h6>{article.author}</h6>
                    <h6>{article.source}</h6>
                    <a href={article.link}>Link</a>
                    <p>{article.timePublished}</p>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default HomePage;
