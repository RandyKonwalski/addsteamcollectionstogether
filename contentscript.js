var collectionview = document.getElementsByClassName("collectionChildren")[1].getElementsByClassName("workshopBrowseRow");
for (var iterator = 0; iterator < collectionview.length; iterator++) {
    var workshopItems = collectionview[iterator].getElementsByClassName("workshopItem");
    for (var iterator1 = 0; iterator1 < workshopItems.length; iterator1++) {
        var url = workshopItems[iterator1].getElementsByTagName("a")[0].href;
        console.log(url);
        chrome.runtime.sendMessage({ type: 0, url_workshopsubcollection: url });
    }
}