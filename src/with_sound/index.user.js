    // ==UserScript==
// @name        Auto Redeem Twitch Bonus
// @version     1.0
// @match       https://www.twitch.tv/*
// @author      Felipe GM
// @description this code will do all the work of clicking on the twitch channel points chest, this version contains a sound when collecting the bonus
// @updateURL   https://github.com/Felipefury/Auto-Redeem-Twitch-Bonus/raw/master/index.user.js
// @run-at      document-start
   // ==/UserScript==

TwitchBonus = function() {
    const bonus = document.querySelector(".claimable-bonus__icon");
    if (bonus) {
		bonus.click();

		console.log("Bonus successfully collected", new Date().toTimeString().slice(0, 8));

        var chat = document.querySelector(".chat-scrollable-area__message-container");

        var audio = new Audio('https://freesound.org/data/previews/263/263133_2064400-lq.mp3');

        audio.play();

		var div = document.createElement("div");
		div.innerHTML = `<div class="chat-line__message" data-a-target="chat-line-message" data-test-selector="chat-line-message"><span class="chat-author__display-name" style="color: rgb(220, 0, 0);">[${new Date().toTimeString().slice(0, 8)}] Bonus collected.</span><span> (only you can see it)</span></div>`
		chat.appendChild(div);
	}
}

setInterval(TwitchBonus, 1000);
