$.getJSON("/articles", function(data) {
  for (var i = 0; i < data.length; i++) {
    if (!(data[i].articleTitle === "")) {
      $("#articles")
      .append(`<br /><br /><p"><a href="${data[i].articleLink}">${data[i].articleTitle}</a><br />by <a href="${data[i].authorLink}">${data[i].articleAuthor}</a></p>`)
      .append(`<button class="comment-btn btn btn-primary" data-id="${data[i]._id}">Comment on this article</button>`)
      .append(`<button class="see-comments btn btn-success" data-id="${data[i]._id}">See this articles comments</button>`)
    };
  };
});

$(document).on("click", ".comment-btn", function() {
  $("#comments").empty();
  var articleId = $(this).attr("data-id");

  $.ajax({
    method: "GET",
    url: "/articles/" + articleId
  })
    .done(function(data) {
      $("#comments").append(`<h2>${data.articleTitle}</h2>`);
      $("#comments").append(`<input id=commentAuthor name="user" placeholder="Enter your username here">`);
      $("#comments").append(`<textarea id="commentBody" name="body" placeholder="What would you like to say?"></textarea>`);
      $("#comments").append(`<button class="btn" id="savecomment" data-id="${data._id}">Post Comment</button>`);
    });
});

$(document).on("click", "#savecomment", function() {
  var articleId = $(this).attr("data-id");

  $.ajax({
    method: "POST",
    url: "/articles/" + articleId,
    data: {
      title: $("#commentAuthor").val(),
      body: $("#commentBody").val()
    }
  })
    .done(function(data) {
      console.log(data);
      $("#comments").empty();
    });

  $("#commentAuthor").val("");
  $("#commentBody").val("");
});

$(document).on("click", ".see-comments", function() {
  $("#showArticleComments").empty();
  var articleId = $(this).attr("data-id");

  $.ajax({
    method: "GET",
    url: "/articles/" + articleId
  })
    .done(function(data) {
      $("#showArticleComments")
        .append(`<h2>See last comment on ${data.articleTitle}</h2>`)
        .append(`<p>${data.comments.body} by ${data.comments.title}</p>`);
    });
});