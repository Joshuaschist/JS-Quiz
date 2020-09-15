function tabulateresults() {
  const o1score = 0;
  const o2score = 0;
  const o3score = 0;

  const options = documentByTagName('input');
  for (var i = 0; i < options.length; i++) {
   if (options[i].checked) {
    
    if (options[i].value == 'o1') {
      o1score = o1score + 1;
    }

    if (options[i].value == 'o2') {
      o1score = o1score + 1;
    }

    if (options[i].value == 'o3') {
      o1score = o1score + 1;
    }

  }
}

  const maxscore = Math.max(o1score,o2score,o3score);
  const resultsbox = document.getElementById('results');
    if (o1score == maxscore) {
      resultsbox.innerHTML = "You are talented!";
    }

    if (o2score == maxscore) {
      resultsbox.innerHTML = "You are Great, never give up";
    }

    if (o3score == maxscore) {
      resultsbox.innerHTML = "You ae Smart!";
    }
}

function resetResults() {
  const resultsbox = document.getElementById('results');
  resultsbox.innerHTML = "Your result will show up here";
}