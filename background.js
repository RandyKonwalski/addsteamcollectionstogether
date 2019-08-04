var startingurl = "";
chrome.browserAction.onClicked.addListener(function (tab) { //Fired when User Clicks ICON
    if (tab.url.indexOf("https://steamcommunity.com/") != -1) { // Inspect whether the place where user clicked matches with our list of URL
        startingurl = tab.url;
        console.log(startingurl);
        chrome.tabs.executeScript(tab.id, {
            "file": "contentscript.js"
        }, function () { // Execute your code
            console.log("Script Executed .. "); // Notification on Completion
        }); 
    }
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.type == 0) {
        chrome.tabs.create({ url: request.url_workshopsubcollection }, tab => {
            chrome.tabs.executeScript(tab.id, {
                "file": "tab.js"
            }, function () { // Execute your code
                chrome.tabs.remove(tab.id); // Notification on Completion
            });
        });
    } else if (request.type == 1) {
        console.log(request);
        var fd = new FormData();
        fd.append("sessionID", "da2266d532f128891a24cc6d");
        fd.append("publishedfileid", request.id);
        fd.append("collections[1666878622][add]", true);
        fd.append("collections[1666878622][title]", "European + City");
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https://steamcommunity.com/sharedfiles/ajaxaddtocollections");
        xhr.send(fd);
        console.log(xhr);
    }

});