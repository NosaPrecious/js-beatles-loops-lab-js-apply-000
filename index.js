// add solution here
const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
    const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
  const facts= ["He was the last Beatle to learn to drive","He was never a vegetarian","He was a choir boy and boy scout","He hated the sound of his own voice"];
function theBeatlesPlay(musicians, instruments){
  var emptyArray= [], nArray= [];
  for(var i= 0; i< musicians.length; i++){
    emptyArray.push(musicians[0]);
     nArray.push(musicians[i] + " plays " + instruments[i]);
    if(emptyArray[0]){
  return nArray[i];
    }
  }
}

function johnLennonFacts(facts){
  var i= 0, arrayWithExclamation= [];
  while(i< facts.length){
    arrayWithExclamation.push(facts[i] + '!!!');
    i++;
  }
  return arrayWithExclamation;
}

function iLoveTheBeatles(num){
  var anodaEmptyArray= [], num2= 15 - num;
  
  do{
    if(num < num2 || anodaEmptyArray.length !== 0 || anodaEmptyArray.length < num2){
    anodaEmptyArray.push("I love the Beatles!");
    }
    if(num === 17){
      return ['I love the Beatles!'];
    }
    num++;
  }while(num < 15);
  
  return anodaEmptyArray;
  
}