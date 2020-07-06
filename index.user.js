    // ==UserScript==
// @name        Auto Redeem Twitch Bonus
// @version     1.0
// @match       https://www.twitch.tv/*
// @author      Felipe GM
// @description this code will do all the work of clicking on the twitch channel points chest
// @updateURL   https://github.com/Felipefury/Auto-Redeem-Twitch-Bonus/raw/master/index.user.js
// @run-at      document-start
   // ==/UserScript==

var chat = document.querySelector(".chat-scrollable-area__message-container");

TwitchBonus = function() {
    const bonus = document.querySelector(".claimable-bonus__icon");
    if (bonus) {
		bonus.click();

		console.log("Bonus successfully collected", new Date().toTimeString().slice(0, 8));

		var div = document.createElement("div");
		div.innerHTML = `<div class="chat-line__message" data-a-target="chat-line-message" data-test-selector="chat-line-message"><span class="chat-author__display-name" style="color: rgb(220, 0, 0);">[${new Date().toTimeString().slice(0, 8)}] Bonus collected.</span><span> (only you can see it)</span></div>`
		chat.appendChild(div);
	}
}

setInterval(TwitchBonus, 1000);
