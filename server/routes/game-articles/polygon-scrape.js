module.exports = {
  scrape: function(axios, cheerio, res, articleController) {
    axios.get("https://polygon.com/").then(function(response) {
      var $ = cheerio.load(response.data);
      $("div .c-entry-box--compact").each(function(i, element) {
        var result = {};
        result.title = $(this)
          .children("div")
          .children("h2")
          .children("a")
          .text();
        result.author = $(this)
          .children("div")
          .children("div")
          .children("span")
          .children("a")
          .text();
        result.source = "polygon";
        result.link = $(this)
          .children("a")
          .attr("href");
        result.image = $(this)
          .children("a")
          .children("div")
          .children("img")
          .attr("src");
        result.timePublished = $(this)
          .children("div")
          .children("div")
          .children("span")
          .children("time")
          .text();
        articleController.createArticle(result, res);
      });
    });
  }
};
