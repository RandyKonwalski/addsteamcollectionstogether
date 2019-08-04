var modsview = document.getElementsByClassName("collectionChildren")[0].getElementsByClassName("collectionItem");
for (var iterator = 0; iterator < modsview.length; iterator++) {
    var publishid = modsview[iterator].id;
    chrome.runtime.sendMessage({ type: 1, id: publishid.split("_")[1] });
}