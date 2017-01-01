function Stopwatch(elem){
//   Time vars
  var time = 0;
  var interval;
  var offset;
  var lapArray = [0000];
  var counter = 0;
  //Updates time using delta function
  //formats time
  function update(){
      if(this.isOn){
          time += delta();
      }
    
      var formatedTime = timeFormatter(time);
      elem.textContent = formatedTime;
  }
//calculates time passed by subtracting the now Date object from the ofset Date object
  function delta(){
      var now = Date.now();
      var timePassed = now - offset;
      offset = now;
      return timePassed;
  }
//formats time by adding correct about of 0s
  function timeFormatter(timeInMilliseconds) {
    var time = new Date(timeInMilliseconds);
    var minutes = time.getMinutes().toString();
    var seconds = time.getSeconds().toString();
    var milliseconds = time.getMilliseconds().toString();

    if (minutes.length < 2) {
      minutes = '0' + minutes;
    }

    if (seconds.length < 2) {
      seconds = '0' + seconds;
    }

    while (milliseconds.length < 3) {
      milliseconds = '0' + milliseconds;
    }

    return minutes + ' : ' + seconds + ' . ' + milliseconds;
  }
  
  this.isOn = false;
  
  this.start = function() {
    if(!this.isOn){
      //calls update every 10ms
      //bins 'this' to the update function
      interval = setInterval(update.bind(this), 10);
      offset = Date.now();
      this.isOn = true;
    }
  };
  
  this.stop = function() {
      if(this.isOn){
        //clears interval previously set by setInterval
        //this stops the stopwatch
          clearInterval(interval);
          interval = null;
          this.isOn = false;
      }
  };
  
  this.reset = function(){
      elem.textContent = '00 : 00 . 000';
      time = 0;
      lapArray = [0000];
      counter = 0;
  };
  
  this.lap = function(){
    var li = document.createElement('li');
    
    
    lapArray.push(time);
    console.log(lapArray[counter + 1] - lapArray[counter])
    
    var newTime = Math.abs(lapArray[counter + 1] - lapArray[counter]);
    var formatedTime = timeFormatter(newTime);
     counter++;
    
    
    li.innerText = formatedTime;
    document.getElementById('list').appendChild(li);
  }
  
  this.clearLaps = function(){
      
    var myNode = document.getElementById("list");
    while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
}
    
  }
  
}