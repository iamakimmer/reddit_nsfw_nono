$(document).ready(function() {
  $(".nsfw-stamp").closest("ul").siblings().find("a").contents().unwrap().wrap("<span class='nonono' />");
});