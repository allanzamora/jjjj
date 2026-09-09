let tit = "";
let vidss = "";

if (window.location.hash) {
  const hashString = window.location.hash.substring(1);
  const params = new URLSearchParams(hashString);
  tit = params.get('tit') || "";
  vidss = params.get('sss') || "";
}

// Update title if present
if (tit) {
  document.getElementById('xtitx').innerHTML = tit;
}

(async function() {
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxdLgdcuKN1qgN3NUTQBAAuGSIaCrMBDOHGoDlRscOE2z7oVJ3MkkWJp9TGWB4SijK7/exec";
  const bodyEl = document.getElementById("content");

  if (!vidss) {
    bodyEl.innerHTML = `<div class="error-msg">No File ID provided in URL hash (#sss=)</div>`;
    return;
  }

  try {
    const response = await fetch(`${SCRIPT_URL}?g=${encodeURIComponent(vidss)}`);
    if (!response.ok) throw new Error("Server communication error");

    const result = await response.json();

    if (result.error) {
      throw new Error(result.error);
    }

    // Render output dynamically based on data response type
    if (Array.isArray(result.data)) {
      // Handles JSON arrays of links/items
      let listHtml = "<ul>";
      result.data.forEach(item => {
        listHtml += `<li><a href="${item.url || '#'}" class="url_bold">${item.title || item.name || 'Untitled'}</a></li>`;
      });
      listHtml += "</ul>";
      bodyEl.innerHTML = listHtml;

    } else if (typeof result.data === "object" && result.data !== null) {
      // Handles JSON objects
      bodyEl.innerHTML = `<pre style="background:#f4f4f4; padding:12px; border-radius:6px; overflow-x:auto;">${JSON.stringify(result.data, null, 2)}</pre>`;

    } else {
      // Handles plain text, HTML, or raw strings
      bodyEl.innerHTML = `<div>${result.data}</div>`;
    }

  } catch (err) {
    bodyEl.innerHTML = `<div class="error-msg">Failed to load content: ${err.message}</div>`;
  }
})();