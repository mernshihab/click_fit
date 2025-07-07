$(document).ready(function () {
  $.ajax({
    url: "http://numbersapi.com/1/30/date?json",
    method: "GET",
    success: function (data) {
      $("#fact-area").text(data.text);
    },
  });
});
