var shortlink;
fetch("https://api.shrtco.de/v2/shorten?url=example.org/very/long/link.html")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    shortlink = data.result.short_link;
    console.log(shortlink)
  })
//   console.log(shortlink)