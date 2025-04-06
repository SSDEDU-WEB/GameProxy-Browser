function launchProxy() {
  const input = document.getElementById("urlInput").value.trim();

  if (!input) {
    alert("Please enter a URL!");
    return;
  }

  let formattedURL = input.startsWith("http") ? input : `https://${input}`;

  // Ultraviolet public instance (can be changed later)
  const proxyURL = `https://uv.deno.dev/service/${btoa(formattedURL)}`;

  // Open in new tab (or you can use iframe too)
  window.open(proxyURL, "_blank");
}
