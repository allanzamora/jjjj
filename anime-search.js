let db;
    const GITHUB_DB_URL = "https://raw.githubusercontent.com/allanzamora/jjjj/main/anime_v31.db";

    async function loadDatabase() {
      try {
        const SQL = await initSqlJs({
          locateFile: file => `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.8.0/${file}`
        });

        const savedDbArray = await localforage.getItem('anime_db_storage');

        if (savedDbArray) {
          db = new SQL.Database(savedDbArray);
        } else {
          // 2. Fetch fresh from GitHub if not cached
          await downloadFreshDB(SQL);
        }

      } catch (err) {
        console.error("Error loading DB: " + err.message);
        db = new SQL.Database();
        db.run("CREATE TABLE IF NOT EXISTS categories (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT NOT NULL, url TEXT UNIQUE NOT NULL, img TEXT);");
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

        btn.textContent = "Update complate!";
        
        //const query = document.getElementById('searchInput').value;
        //renderEntriesUI(query);

      } catch (err) {
        alert("Failed to update database: " + err.message);
        btn.textContent = "Error: " + err.message;
      } finally {
        setTimeout(() => {
          btn.textContent = originalText;
          btn.disabled = false;
        }, 2000);
      }
    }

    async function persistDatabaseLocally() {
      if (!db) return;
      const binaryArray = db.export();
      await localforage.setItem('anime_db_storage', binaryArray);
    }

    function renderEntriesUI(searchKeyword = '') {
      const container = document.getElementById('show_reult');
      container.innerHTML = '';

      const query = searchKeyword.trim();

      if (query.length <= 2) {
        return;
      }

      try {
        let res;
        
        const stmt = db.prepare("SELECT id, title, url, img FROM categories WHERE title LIKE :query ORDER BY id ASC");
        stmt.bind({ ':query': `%${query}%` });
        
        const rows = [];
        while (stmt.step()) {
          rows.push(stmt.get());
        }
        stmt.free();

        if (rows.length > 0) {
          res = [{ values: rows }];
        } else {
          res = [];
        }

        if (res.length > 0 && res[0].values.length > 0) {
          const ul = document.createElement('ul');
          ul.className = 'entry-list';

          res[0].values.forEach(row => {
            const [id, title, url, img] = row;
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
          container.innerHTML = `<p style="text-align: center; color: #9ca3af; padding: 20px;">No results found for "${query}"</p>`;
        }
      } catch (e) {
        console.error("Database Query Error: " + e.message);
      }
    }

    document.getElementById('searchForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const query = document.getElementById('searchInput').value;
      renderEntriesUI(query);
    });

    document.getElementById('searchInput').addEventListener('input', function(e) {
      renderEntriesUI(e.target.value);
    });

    loadDatabase();