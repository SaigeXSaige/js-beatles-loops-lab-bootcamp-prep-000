function theBeatlesPlay(musicians , instruments){
  var array = [];
  for(let i = 0; i < 4; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array;
}
function johnLennonFacts(facts){
  let i = 0;
  while (facts.length > i){
    facts[i] += '!!!';
    i++;
  }
  return facts;
}
function iLoveTheBeatles(n){
  var array = [];
  
}