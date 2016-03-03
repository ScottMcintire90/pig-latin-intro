var piglatin = function(lowerCase) {
  if (lowerCase[0] === 'a' || lowerCase === 'u' || lowerCase === 'e' || lowerCase === 'i' || lowerCase === 'o') {
      return lowerCase + "ay";
  } else {
    return lowerCase.slice(1) + lowerCase[0] + "ay";

  }
};

$(document).ready(function() {
  $("form#translate").submit(function(event) {
    var userWord = $("input#userWord").val();
    var lowerCase = userWord.toLowerCase();
    var result = piglatin(lowerCase);
debugger;
    $("#result").append(result)
  
    event.preventDefault();

 });
});
