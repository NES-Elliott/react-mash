module.exports = {
  scrape: function(axios, cheerio, res, articleController) {
    axios.get("https://kotaku.com/").then(function(response) {
      var $ = cheerio.load(response.data);
      $("div .post-wrapper").each(function(i, element) {
        var result = {};
        result.title = $(this)
          .children("article")
          .children("header")
          .children(".headline")
          .children("a")
          .text();
        result.author = $(this)
          .children("article")
          .children("header")
          .children(".meta--pe")
          .children(".author")
          .text();
        result.source = "kotaku";
        result.link = $(this)
          .children("article")
          .children("header")
          .children(".headline")
          .children("a")
          .attr("href");
        result.image = $(this)
          .children("article")
          .children(".item__content")
          .children("figure")
          .children("a")
          .children(".img-wrapper")
          .children("picture")
          .children("source")
          .attr("srcset");
        result.timePublished = $(this)
          .children("article")
          .children("header")
          .children(".meta--pe")
          .children(".meta__container")
          .children(".meta__time")
          .attr("datetime");
        articleController.createArticle(result, res);
      });
    });
  }
};
