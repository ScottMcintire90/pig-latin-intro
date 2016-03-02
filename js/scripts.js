var piglatin = function(lowerCase) {
  if (first === (('a')||('e')||('i')||('o')||('u'))) {
      $("#result").text(lowerCase + 'ay');
  } else {
    $("#result").text(lowerCase.slice(1,lowerCase.length) + first + 'ay');
  };
}

$(document).ready(function() {
  $("form#translate").submit(function(event) {
    var userWord = $("input#userWord").val();
    var lowerCase = userWord.toLowerCase();
    var first = lowerCase.slice(0,1);
    var result = piglatin(lowerCase);

    event.preventDefault();
 });
});
//result = (userWord.slice(1,userWord.length)+userWord.charAt(0)+'ay');
//(userWord.charAt(0) === (('a')||('e')||('i')||('o')||('u'))) {
//result = (userWord + 'ay');
