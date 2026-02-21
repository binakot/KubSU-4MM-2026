chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "sendTitle") {
        console.log("Получен заголовок от контент-скрипта:", request.title);
    }
});
