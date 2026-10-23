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

    // --- CONVERT JSON RESPONSE TO XML FORMAT ---
    let xmlOutput = '<?xml version="1.0" encoding="utf-8"?>\n<home_data>\n';

    if (Array.isArray(result.data)) {
      // Assuming your data can be grouped or listed under items
      xmlOutput += `    <season>\n        <se_name>${tit || 'Season 1'}</se_name>\n`;
      
      result.data.forEach(item => {
        const itemTitle = item.title || item.name || 'Untitled';
        const itemUrl = item.url || 'https://example.com';
        
        xmlOutput += `        <item>\n`;
        xmlOutput += `            <title>${escapeXml(itemTitle)}</title>\n`;
        xmlOutput += `            <url>${escapeXml(itemUrl)}</url>\n`;
        xmlOutput += `        </item>\n`;
      });
      
      xmlOutput += `    </season>\n`;

    } else if (typeof result.data === "object" && result.data !== null) {
      // Handles generic JSON objects into XML tags
      xmlOutput += `    <item>\n`;
      for (const [key, value] of Object.entries(result.data)) {
        xmlOutput += `        <${key}>${escapeXml(String(value))}</${key}>\n`;
      }
      xmlOutput += `    </item>\n`;
    } else {
      // Handles plain text strings
      xmlOutput += `    <content>${escapeXml(String(result.data))}</content>\n`;
    }

    xmlOutput += '</home_data>';

    // Render the generated XML safely as code/text in a <pre> block
    bodyEl.innerHTML = `<pre style="background:#1e1e1e; color:#d4d4d4; padding:15px; border-radius:6px; overflow-x:auto; font-family:monospace; text-align:left;">${escapeXml(xmlOutput)}</pre>`;

  } catch (err) {
    bodyEl.innerHTML = `<div class="error-msg">Failed to load content: ${err.message}</div>`;
  }
})();

// Helper function to prevent HTML/XML injection breaking tags
fn = escapeXml = function(str) {
  return str.replace(/[<>&'"]/g, function (c) {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
    }
  });
};