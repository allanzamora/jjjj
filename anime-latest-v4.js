let db;
const STORAGE_KEY = "anime_db_storage"; 
const GITHUB_DB_URL = "https://raw.githubusercontent.com/allanzamora/jjjj/main/anime_v4.db";

    async function loadDatabase() {
      const container = document.getElementById('show_reult');
      try {
        const SQL = await initSqlJs({
          locateFile: file => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/${file}`
        });

        const savedDbArray = await localforage.getItem(STORAGE_KEY);

        if (savedDbArray) {
          db = new SQL.Database(savedDbArray);
        } else {
          await localforage.removeItem('anime_db_storage');
          await downloadFreshDB(SQL);
        }

        loadCategoryData();

      } catch (err) {
        //container.innerHTML = `<div class="debug-msg" style="color: #f87171;">Failed to load DB: ${err.message}</div>`;
      }
    }

async function refreshDatabaseFromGitHub() {
      const btn = document.getElementById('refreshBtn');
      const originalText = btn.textContent;
      btn.disabled = true;
      btn.textContent = "Updating...";

      try {
        await localforage.removeItem('anime_db_storage');

        const SQL = await initSqlJs({
          locateFile: file => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/${file}`
        });

        await downloadFreshDB(SQL);

        btn.textContent = "Updated!";
        
        const query = document.getElementById('searchInput').value;
        renderEntriesUI(query);

      } catch (err) {
        alert("Failed to update database: " + err.message);
        btn.textContent = "Error";
      } finally {
        setTimeout(() => {
          btn.textContent = originalText;
          btn.disabled = false;
        }, 2000);
      }
    }
    
    
    
    

    async function downloadFreshDB(SQL) {
      const response = await fetch(GITHUB_DB_URL + "?nocache=" + new Date().getTime());
      if (!response.ok) {
        throw new Error(`HTTP Error ${response.status}`);
      }

      const buffer = await response.arrayBuffer();
      db = new SQL.Database(new Uint8Array(buffer));
      await persistDatabaseLocally();
    }

    async function persistDatabaseLocally() {
      if (!db) return;
      const binaryArray = db.export();
      await localforage.setItem(STORAGE_KEY, binaryArray);
    }

    function loadCategoryData() {
      const container = document.getElementById('show_reult');

      try {
        const stmt = db.prepare("SELECT id, title, url, img, cat FROM categories WHERE cat LIKE :catKey ORDER BY id DESC");
        stmt.bind({ ':catKey': `%${keyme}%` });
        
        const rows = [];
        while (stmt.step()) {
          rows.push(stmt.get());
        }
        stmt.free();

        if (rows.length > 0) {
          container.innerHTML = '';
          const ul = document.createElement('ul');
          ul.className = 'entry-list';

          rows.forEach(row => {
            const [id, title, url, img, cat] = row;
            const imagePath = (img && img !== 'pic/nopic') ? img : 'pic/nopic';

            const li = document.createElement('li');
            li.className = 'entry-item';
            li.innerHTML = `
              <a href="${url}">
                <img src="${imagePath}" class="picoo" onerror="this.src='ic_launcher.png'">
                <div class="entry-info">
                  <div class="entry-title">${title}</div>
                </div>
              </a>
            `;
            ul.appendChild(li);
          });

          container.appendChild(ul);
        } else {
          //container.innerHTML = `<div class="debug-msg">No items matched key: "${keyme}"</div>`;
        }
      } catch (e) {
        // Display SQL execution errors directly on screen
        //container.innerHTML = `<div class="debug-msg" style="color: #f87171;">SQL Query Error: ${e.message}</div>`;
      }
    }

    loadDatabase();