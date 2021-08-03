var h = document.getElementById("hrs");
var m = document.getElementById("mins");
var s = document.getElementById("secs");

var srt = document.getElementById("start");
var stp = document.getElementById("stop");
var rst = document.getElementById("reset");
// h.value = 0;
// m.value = 0;

let interval;
function stop() {
  clearInterval(interval);
  stp.disabled = true;
  srt.disabled = false;
}

srt.addEventListener("click", () => {
  srt.disabled = true;
  stp.disabled = false;

  if (s.value > 59) {
    let a = parseInt(s.value) % 60;
    let b = Math.floor(parseInt(s.value) / 60);
    if (isNaN(parseInt(m.value))) {
      m.value = 0;
    }
    m.value = parseInt(m.value) + b;
    s.value = a;
  }
  
  if (m.value > 59) {
    let a = parseInt(m.value) % 60;
    let b = Math.floor(parseInt(m.value) / 60);
    if (isNaN(parseInt(h.value))) {
      h.value = 0;
    }
    h.value = parseInt(h.value) + b;
    m.value = a;
  }
  

  interval = setInterval(() => {
    if (s.value != 0) {
      s.value = parseInt(s.value) - 1;
    } else if (m.value != 0) {
      s.value = 59;
      mins.value = parseInt(m.value) - 1;
    } else if (h.value != 0) {
      s.value = 59;
      m.value = 59;
      h.value = parseInt(h.value) - 1;
    } else stop();
  }, 1000);
});

stp.addEventListener("click", stop);
rst.addEventListener("click", () => {
  srt.disabled = false;
  stp.disabled = false;

  h.value = "";
  m.value = "";
  s.value = "";
});
