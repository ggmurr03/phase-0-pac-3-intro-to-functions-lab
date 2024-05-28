function shout(string) {
  console.log(string.toUpperCase());
    return string.toUpperCase();
  };
  function whisper(string) {
    console.log(string.toLowerCase());
    return string.toLowerCase();
  }; 


function logShout(string) {console.log(shout(string));};
function logWhisper(string) {console.log(whisper(string));};
function sayHiToHeadphonedRoommate(string){
  if(string===string.toLowerCase()) {
    return "I can't hear you!"}
  else if(string===string.toUpperCase()){
    return "YES INDEED!"}
  else if(string==="Let's have dinner together!"){
    return"I would love to!"}
  };
  let callOut = 'ho!'
  sayHiToHeadphonedRoommate(callOut)