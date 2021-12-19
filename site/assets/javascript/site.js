function relocate(chat, subscribe) {
  const channelName = document.getElementById("channelName").value.toLowerCase();
  if (channelName == "") {
    channelName = "dexbonus";
  }
  if (chat) {
    window.location = `https://www.twitch.tv/popout/${channelName}/chat?no-mobile-redirect=true`;
  } else if(subscribe) {
    window.location = `https://www.twitch.tv/subs/${channelName}`;
  } else {
    window.location = `http://go.twitch.tv/${channelName}`;
  }
}

//creates a listener for when you press a key
window.onkeyup = e => if (e.keyCode == 13) { relocate() }
