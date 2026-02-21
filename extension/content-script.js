//console.log('Hello, World!');
//alert('Hello, World!');

//const pageTitle = document.title;
//console.log("Заголовок страницы:", pageTitle);

chrome.runtime.sendMessage({action: "sendTitle", title: document.title});
