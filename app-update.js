const updateUrl = "https://example.com/download/app-latest.apk"; 

const updateContainer = document.getElementById('update');

if (version < 2) {
  updateContainer.innerHTML = `
    <div class="update-banner">
      <div class="update-info">
        <span class="update-icon">🚀</span>
        <span class="update-text">A new version is available!</span>
      </div>
      <a href="site:${updateUrl}" class="btn-update">
        Update Now
      </a>
    </div>
  `;
}