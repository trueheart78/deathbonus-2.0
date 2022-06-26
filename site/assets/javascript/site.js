function channel() {
  let channelName = document.getElementById("channelName").value.toLowerCase();
  if (channelName == "") {
    channelName = "dexbonus";
  }
  
  return channelName;
}

function about() {
  window.location = `https://www.twitch.tv/${channel()}/about`;
}

function chat() {
  window.location = `https://www.twitch.tv/popout/${channel()}/chat?no-mobile-redirect=true`;
}

function subscribe() {
  window.location = `https://www.twitch.tv/subs/${channel()}`;
}

function videos() {
  window.location = `https://www.twitch.tv/${channel()}/videos`;
}

function watch() {
  window.location = `http://go.twitch.tv/${channel()}`;
}

//creates a listener for when you press a key
window.onkeyup = keyup;
function keyup(e) {
  if (e.keyCode == 13) {
    relocate()
  }
}
