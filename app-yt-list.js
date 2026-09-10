
const _0x4a12 = "WU9VUl9ORVdfR09PR0xFX0FQSTBLRVk=";
const apiKey = atob(_0x4a12);

let tit = "", vidss = "";

if (window.location.hash) {
  const params = new URLSearchParams(window.location.hash.substring(1));
  tit = params.get('tit') || "Tagalog Anime";
  vidss = params.get('sss') || "";
}

document.getElementById('xtitx').innerHTML = tit;

(async function loadChannelVideos() {
  const resultEl = document.getElementById('content');
  if (!vidss) {
    resultEl.innerHTML = `<div class="error-msg">No Channel Handle/ID specified in URL (#sss=).</div>`;
    return;
  }

  let channelParam = "", channelValue = vidss.trim();

  if (channelValue.startsWith('@')) {
    channelParam = `forHandle=${encodeURIComponent(channelValue)}`;
  } else if (channelValue.startsWith('UC')) {
    channelParam = `id=${encodeURIComponent(channelValue)}`;
  } else {
    channelParam = `forHandle=${encodeURIComponent('@' + channelValue)}`;
  }

  try {
    const channelApiUrl = `https://www.googleapis.com/youtube/v3/channels?key=${apiKey}&${channelParam}&part=contentDetails,id`;
    const channelResponse = await fetch(channelApiUrl);
    if (!channelResponse.ok) throw new Error('API connection error');

    const channelData = await channelResponse.json();
    if (!channelData.items || channelData.items.length === 0) {
      resultEl.innerHTML = `<div class="error-msg">Error: Channel "${channelValue}" not found.</div>`;
      return;
    }

    const uploadsPlaylistId = channelData.items[0].contentDetails.relatedPlaylists.uploads;
    const playlistApiUrl = `https://www.googleapis.com/youtube/v3/playlistItems?key=${apiKey}&playlistId=${uploadsPlaylistId}&part=snippet&maxResults=50`;

    const playlistResponse = await fetch(playlistApiUrl);
    const playlistData = await playlistResponse.json();

    if (!playlistData.items || playlistData.items.length === 0) {
      resultEl.innerHTML = `<div class="error-msg">No videos found for this channel.</div>`;
      return;
    }

    let generatedHtml = "";
    playlistData.items.forEach((item) => {
      const videoId = item.snippet.resourceId.videoId;
      const title = item.snippet.title
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

      generatedHtml += `
        <a class="ytme" href="https://ako-si-finger.blogspot.com/hshfhj2i/?m=1#vid=${videoId}" target="_blank">
          <img src="https://img.youtube.com/vi/${videoId}/mqdefault.jpg" alt="thumbnail"/>
          <p class="video-title">${title}</p>
        </a>
      `;
    });

    resultEl.innerHTML = generatedHtml;

  } catch (err) {
    resultEl.innerHTML = `<div class="error-msg">Error: ${err.message}</div>`;
  }
})();