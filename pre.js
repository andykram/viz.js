(define(function() {
function Viz(src, format) {
  var Module = {};
  Module["return"] = "";
  Module["print"] = function(text) {
    Module["return"] += text + "\n";
  }
