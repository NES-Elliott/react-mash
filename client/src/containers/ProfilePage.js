import React, { Component } from "react"
import { ArticleCard } from "../components/BSComponents"
import API from "../modules/API"

class ProfilePage extends Component {

  state = {
    username: "",
    savedArticles: []
  }

  getUserData = () => {
    API.getUser(this.props.user.id)
      .then(res =>
        this.setState({
          username: res.data.username,
          savedArticles: res.data.savedArticles
        })
      )
  }

  componentDidMount() {
    this.getUserData()
  }

  render() {
    return (
      <div className="container">
        <h1 className="section-header">{this.state.username}'s Profile</h1>
        <h3 className="section-subheader">Your Saved Articles</h3>
        {
          this.state.savedArticles.map((article, x) => {
            if (article.title) {
              x+1
              return (
                <ArticleCard
                  title={article.title}
                  author={article.author}
                  source={article.source}
                  link={article.link}
                  timePublished={article.timePublished}
                  key={x}
                />
              )
            }
          })
        }
      </div>
    );
  }
}

export default ProfilePage
