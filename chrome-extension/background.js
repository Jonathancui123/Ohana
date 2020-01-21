upload = function(word) {
    const API_URL = "https://paste-dog-server.herokuapp.com/";
    const PAGE_URL = "https://pastepal.ca/"

    fetch(API_URL + "upload", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            data: word.selectionText
        })
    })
        .then(response => response.json())
        .then(responseJson => {
            // copy paste pal link
            let text = document.createElement("textarea");
            document.body.appendChild(text);
            text.textContent = PAGE_URL + responseJson.id;
            text.select();
            document.execCommand("copy");
            document.body.removeChild(text);
        })
        .catch(err => console.log(err));
};

chrome.contextMenus.create({
    title: "Copy with Paste Pal",
    contexts: ["selection"], // text selection
    onclick: upload // callback
});
