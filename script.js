let activeTab = 0;
let tabs = [];

function checkUrl() {
    const urlInput = document.getElementById("url-bar").value;
    if (urlInput.includes("https://") || urlInput.includes("http://")) {
        document.getElementById("go-btn").disabled = false;
    } else {
        document.getElementById("go-btn").disabled = true;
    }
}

function goToSite() {
    const url = document.getElementById("url-bar").value;
    const iframe = document.getElementById("viewer");
    iframe.src = url.startsWith("http") ? url : `https://${url}`;
}

function openNewTab() {
    const newTabId = tabs.length + 1;
    const newTabButton = document.createElement("button");
    newTabButton.classList.add("tab");
    newTabButton.innerText = `Tab ${newTabId}`;
    newTabButton.onclick = () => switchTab(newTabId);
    document.querySelector(".tabs").appendChild(newTabButton);
    
    tabs.push(newTabId);
    switchTab(newTabId);
}

function switchTab(tabId) {
    activeTab = tabId;
    document.getElementById("viewer").src = `https://example.com`;
    document.querySelectorAll(".tab").forEach((tab, index) => {
        tab.style.backgroundColor = index === tabId - 1 ? "#555" : "#333";
    });
}
