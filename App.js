window.onload =function() {
    var seconds = 00;
    var tens = 00;
    var minutes= 00;
    var appendTens = document.getElementById("tens");
    var appendSeconds = document.getElementById("seconds");
    var appendMinutes = document.getElementById("minutes")
    var buttonStart = document.getElementById("start");
    var buttonStop = document.getElementById("stop");
    var buttonReset = document.getElementById("reset");
    var Interval ;

    buttonStart.onclick = function() {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }

    buttonStop.onclick = function(){
        clearInterval(Interval);
    }

    buttonReset.onclick = function(){
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
        }

        function startTimer(){
            tens++;

            if(tens <= 9){
                appendTens.innerHTML = "0" + tens;
            }

            if(tens > 9){
                appendTens.innerHTML = tens;
            }

            if(tens > 99 ){
                seconds++;
                appendSeconds.innerHTML = "0" + seconds;
                tens = 0;
                appendTens.innerHTML ="0" + tens;
            }

            if(seconds > 9){
                appendSeconds.innerHTML = seconds;
            }

            if(seconds > 59){
                seconds=0;
                appendSeconds.innerHTML = "0" + seconds;
                minutes++;
                appendMinutes.innerHTML = "0" + minutes;
                }

            if(minutes > 9 ){
                appendMinutes.innerHTML = minutes;
            }
        }
    
}