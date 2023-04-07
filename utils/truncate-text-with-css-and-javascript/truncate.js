function truncateText() {
  var text = document.getElementById("text").innerHTML;
  var truncated = text.substring(0, 50) + "...";
  document.getElementById("text").innerHTML = truncated;
}

module.exports = truncateText;
