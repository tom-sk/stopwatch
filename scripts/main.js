var timer = document.getElementById('timer');
var toggleBtn = document.getElementById('toggle');
var resetBtn = document.getElementById('reset');

var watch = new Stopwatch(timer);




toggleBtn.addEventListener('click', function(){
    if(watch.isOn){
        watch.stop();
    } else{
        watch.start();
    }

    if(toggleBtn.textContent == "Start"){
        toggleBtn.textContent = "Stop";
    } else if (toggleBtn.textContent == "Stop"){
        toggleBtn.textContent = "Start";
    }
});

resetBtn.addEventListener('click', function(){
    watch.reset();
});