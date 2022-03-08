const new_date = "1 mar 2022";
function coutdown(){
  const date = new Date(new_date);
  const cur_date  =new Date();
  const second = Math.floor((date - cur_date) / 1000);
  const days = Math.floor(second/(3600*24));
  const hour = Math.floor((second/(3600))%24);
  const minute = Math.floor((second/60)%60);
  const sec = Math.floor(second%60);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hr").innerHTML = formatTime(hour);
  document.getElementById("min").innerHTML = formatTime(minute);
  document.getElementById("sec").innerHTML = formatTime(sec);
}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

setInterval(coutdown,1000);