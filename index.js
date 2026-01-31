<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>WEB BUG RARAA - VVIP</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&family=Rajdhani:wght@300;400;500;600&display=swap" rel="stylesheet">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    :root {
      --neon-blue: #00f3ff;
      --neon-purple: #b300ff;
      --neon-red: #ff003c;
      --dark-bg: #0a0a14;
      --darker-bg: #05050a;
      --panel-bg: rgba(10, 15, 25, 0.8);
      --glow-blue: 0 0 10px rgba(0, 243, 255, 0.7);
      --glow-purple: 0 0 10px rgba(179, 0, 255, 0.7);
      --glow-red: 0 0 10px rgba(255, 0, 60, 0.7);
    }

    body {
      background-color: var(--dark-bg);
      background-image: 
        radial-gradient(circle at 10% 20%, rgba(179, 0, 255, 0.1) 0%, transparent 20%),
        radial-gradient(circle at 90% 80%, rgba(0, 243, 255, 0.1) 0%, transparent 20%),
        radial-gradient(circle at 50% 50%, rgba(255, 0, 60, 0.05) 0%, transparent 30%);
      min-height: 100vh;
      font-family: 'Rajdhani', sans-serif;
      color: #fff;
      overflow-x: hidden;
      position: relative;
    }

    /* Scanlines effect */
    body::before {
      content: "";
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        to bottom,
        transparent 50%,
        rgba(0, 243, 255, 0.03) 50%
      );
      background-size: 100% 4px;
      pointer-events: none;
      z-index: 9999;
      opacity: 0.3;
    }

    /* Floating particles */
    body::after {
      content: "";
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: 
        radial-gradient(1px 1px at 20% 30%, rgba(0, 243, 255, 0.5) 1px, transparent 2px),
        radial-gradient(1px 1px at 40% 70%, rgba(179, 0, 255, 0.5) 1px, transparent 2px),
        radial-gradient(1px 1px at 60% 20%, rgba(255, 0, 60, 0.5) 1px, transparent 2px),
        radial-gradient(1px 1px at 80% 50%, rgba(0, 243, 255, 0.5) 1px, transparent 2px),
        radial-gradient(1px 1px at 30% 80%, rgba(179, 0, 255, 0.5) 1px, transparent 2px);
      background-size: 200px 200px;
      z-index: -1;
      animation: float 20s infinite linear;
    }

    @keyframes float {
      0% { background-position: 0 0; }
      100% { background-position: 200px 200px; }
    }

    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      position: relative;
      z-index: 1;
    }

    .header {
      text-align: center;
      margin-bottom: 30px;
      padding: 20px;
      border-bottom: 1px solid rgba(0, 243, 255, 0.3);
      position: relative;
    }

    .header h1 {
      font-family: 'Orbitron', sans-serif;
      font-size: 2.8rem;
      font-weight: 900;
      letter-spacing: 3px;
      color: transparent;
      background: linear-gradient(90deg, var(--neon-blue), var(--neon-purple));
      -webkit-background-clip: text;
      background-clip: text;
      text-shadow: var(--glow-blue);
      margin-bottom: 10px;
      position: relative;
      display: inline-block;
    }

    .header h1::after {
      content: "VVIP";
      position: absolute;
      top: -10px;
      right: -50px;
      font-size: 1rem;
      color: var(--neon-red);
      text-shadow: var(--glow-red);
      animation: pulse 2s infinite;
    }

    .subtitle {
      font-size: 1.1rem;
      color: #aaa;
      letter-spacing: 2px;
      text-transform: uppercase;
    }

    .card {
      background: var(--panel-bg);
      border-radius: 12px;
      padding: 30px;
      margin-bottom: 25px;
      border: 1px solid rgba(0, 243, 255, 0.2);
      box-shadow: 
        0 0 20px rgba(0, 0, 0, 0.5),
        inset 0 0 20px rgba(0, 243, 255, 0.05);
      backdrop-filter: blur(10px);
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;
    }

    .card::before {
      content: "";
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 2px;
      background: linear-gradient(90deg, transparent, var(--neon-blue), transparent);
      animation: scan 3s infinite;
    }

    @keyframes scan {
      0% { left: -100%; }
      100% { left: 100%; }
    }

    .card:hover {
      border-color: rgba(0, 243, 255, 0.5);
      box-shadow: 
        0 0 30px rgba(0, 243, 255, 0.2),
        inset 0 0 30px rgba(0, 243, 255, 0.1);
    }

    .card-title {
      font-family: 'Orbitron', sans-serif;
      font-size: 1.5rem;
      margin-bottom: 20px;
      color: var(--neon-blue);
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .card-title::before {
      content: "▶";
      color: var(--neon-red);
      font-size: 1.2rem;
    }

    .form-group {
      margin-bottom: 20px;
    }

    .form-label {
      display: block;
      margin-bottom: 8px;
      font-weight: 600;
      color: #ccc;
      font-size: 0.9rem;
      text-transform: uppercase;
      letter-spacing: 1px;
    }

    .form-input {
      width: 100%;
      padding: 14px 16px;
      background: rgba(5, 10, 20, 0.7);
      border: 1px solid rgba(0, 243, 255, 0.3);
      border-radius: 6px;
      color: #fff;
      font-family: 'Rajdhani', sans-serif;
      font-size: 1rem;
      transition: all 0.3s;
    }

    .form-input:focus {
      outline: none;
      border-color: var(--neon-blue);
      box-shadow: var(--glow-blue);
    }

    .btn {
      display: inline-block;
      padding: 14px 24px;
      background: linear-gradient(90deg, var(--neon-blue), var(--neon-purple));
      color: #000;
      border: none;
      border-radius: 6px;
      font-family: 'Orbitron', sans-serif;
      font-weight: 700;
      font-size: 1rem;
      text-transform: uppercase;
      letter-spacing: 1px;
      cursor: pointer;
      transition: all 0.3s;
      position: relative;
      overflow: hidden;
      z-index: 1;
    }

    .btn::before {
      content: "";
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      transition: left 0.5s;
      z-index: -1;
    }

    .btn:hover::before {
      left: 100%;
    }

    .btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(0, 243, 255, 0.4);
    }

    .btn-danger {
      background: linear-gradient(90deg, var(--neon-red), #ff0066);
    }

    .btn-danger:hover {
      box-shadow: 0 5px 15px rgba(255, 0, 60, 0.4);
    }

    .btn-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
      gap: 15px;
      margin-top: 25px;
    }

    .status-panel {
      background: rgba(5, 10, 20, 0.8);
      border-radius: 8px;
      padding: 15px;
      margin-top: 25px;
      border-left: 4px solid var(--neon-blue);
    }

    .status {
      font-family: 'Orbitron', sans-serif;
      font-size: 0.9rem;
      color: #7CFC00;
      text-shadow: 0 0 8px #7CFC00;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .status::before {
      content: "";
      width: 10px;
      height: 10px;
      background-color: #7CFC00;
      border-radius: 50%;
      box-shadow: 0 0 10px #7CFC00;
      animation: pulse 2s infinite;
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }

    .terminal {
      background: rgba(0, 0, 0, 0.8);
      border-radius: 8px;
      padding: 20px;
      margin-top: 25px;
      border: 1px solid rgba(0, 243, 255, 0.3);
      font-family: monospace;
      font-size: 0.9rem;
      color: #0f0;
      max-height: 200px;
      overflow-y: auto;
      line-height: 1.5;
    }

    .terminal-line {
      margin-bottom: 5px;
    }

    .terminal-line::before {
      content: "> ";
      color: var(--neon-blue);
    }

    .hidden {
      display: none !important;
    }

    .sender-config {
      background: rgba(10, 20, 30, 0.9);
      border-radius: 8px;
      padding: 20px;
      margin-top: 20px;
      border: 1px solid rgba(179, 0, 255, 0.3);
    }

    .sender-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px;
      background: rgba(5, 10, 20, 0.7);
      border-radius: 6px;
      margin-bottom: 10px;
      border-left: 3px solid var(--neon-purple);
    }

    .sender-name {
      font-weight: 600;
      color: #fff;
    }

    .sender-url {
      font-size: 0.8rem;
      color: #aaa;
      font-family: monospace;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 200px;
    }

    .sender-actions {
      display: flex;
      gap: 10px;
    }

    .action-btn {
      padding: 5px 10px;
      background: transparent;
      border: 1px solid rgba(0, 243, 255, 0.5);
      border-radius: 4px;
      color: var(--neon-blue);
      font-size: 0.8rem;
      cursor: pointer;
      transition: all 0.3s;
    }

    .action-btn:hover {
      background: rgba(0, 243, 255, 0.1);
    }

    .warning {
      color: var(--neon-red);
      font-size: 0.9rem;
      margin-top: 5px;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    .warning::before {
      content: "⚠";
    }

    footer {
      text-align: center;
      margin-top: 40px;
      padding: 20px;
      color: #666;
      font-size: 0.9rem;
      border-top: 1px solid rgba(0, 243, 255, 0.2);
    }

    .login-card {
      max-width: 500px;
      margin: 50px auto;
    }

    .logo {
      text-align: center;
      margin-bottom: 30px;
    }

    .logo img {
      max-width: 120px;
      filter: drop-shadow(0 0 10px rgba(0, 243, 255, 0.7));
    }

    .glitch {
      position: relative;
      display: inline-block;
    }

    .glitch::before,
    .glitch::after {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    .glitch::before {
      left: 2px;
      text-shadow: -2px 0 var(--neon-red);
      animation: glitch-1 2s infinite linear alternate-reverse;
    }

    .glitch::after {
      left: -2px;
      text-shadow: 2px 0 var(--neon-blue);
      animation: glitch-2 3s infinite linear alternate-reverse;
    }

    @keyframes glitch-1 {
      0% { clip-path: inset(40% 0 61% 0); }
      100% { clip-path: inset(92% 0 1% 0); }
    }

    @keyframes glitch-2 {
      0% { clip-path: inset(25% 0 58% 0); }
      100% { clip-path: inset(80% 0 5% 0); }
    }
  </style>
</head>
<body>
  <div class="container">
    <!-- Halaman Login -->
    <div id="login-page" class="login-card card">
      <div class="logo">
        <div class="glitch" data-text="RARAA">
          <h1>RARAA</h1>
        </div>
        <div class="subtitle">SYSTEM ACCESS CONTROL</div>
      </div>
      
      <h2 class="card-title">AUTHENTICATION REQUIRED</h2>
      
      <div class="form-group">
        <label class="form-label">USERNAME</label>
        <input type="text" id="username" class="form-input" placeholder="Enter username">
      </div>
      
      <div class="form-group">
        <label class="form-label">PASSWORD</label>
        <input type="password" id="password" class="form-input" placeholder="Enter password">
      </div>
      
      <button class="btn" onclick="login()" style="width: 100%; margin-bottom: 15px;">ACCESS SYSTEM</button>
      
      <div style="text-align: center; margin: 20px 0; color: #666; position: relative;">
        <span style="background: var(--panel-bg); padding: 0 10px;">CREATE FREE ACCOUNT</span>
        <div style="height: 1px; background: rgba(0, 243, 255, 0.3); position: absolute; top: 50%; left: 0; right: 0; z-index: -1;"></div>
      </div>
      
      <div class="form-group">
        <input type="text" id="newUser" class="form-input" placeholder="New username">
      </div>
      
      <div class="form-group">
        <input type="password" id="newPass" class="form-input" placeholder="New password">
      </div>
      
      <button class="btn" onclick="buatAkun()" style="width: 100%;">CREATE ACCOUNT</button>
    </div>
    
    <!-- Halaman Tools (Awalnya Tersembunyi) -->
    <div id="tools-page" class="hidden">
      <div class="header">
        <h1>WEB BUG RARAA</h1>
        <div class="subtitle">VVIP SYSTEM - DARK MODE ACTIVATED</div>
      </div>
      
      <!-- Panel Target -->
      <div class="card">
        <h2 class="card-title">TARGET SELECTION</h2>
        <div class="form-group">
          <label class="form-label">TARGET NUMBER (62xxxx)</label>
          <input type="text" id="targetNumber" class="form-input" placeholder="62xxxxxxxxxxx">
        </div>
        
        <div class="status-panel">
          <div class="status">STATUS: SERVER ACTIVE • READY FOR DEPLOYMENT</div>
        </div>
      </div>
      
      <!-- Panel Sender Configuration -->
      <div class="card">
        <h2 class="card-title">SENDER CONFIGURATION</h2>
        <p style="color: #aaa; margin-bottom: 15px; font-size: 0.9rem;">Configure API endpoints for bug deployment</p>
        
        <div class="form-group">
          <label class="form-label">SENDER NAME</label>
          <input type="text" id="senderName" class="form-input" placeholder="e.g., Primary API">
        </div>
        
        <div class="form-group">
          <label class="form-label">API ENDPOINT URL</label>
          <input type="text" id="senderUrl" class="form-input" placeholder="https://api.example.com/send">
        </div>
        
        <div class="warning">Only add trusted API endpoints. Malicious URLs may compromise system.</div>
        
        <button class="btn" onclick="addSender()" style="margin-top: 15px;">ADD SENDER</button>
        
        <div id="sender-list" class="sender-config" style="margin-top: 20px;">
          <h3 style="color: var(--neon-purple); margin-bottom: 15px; font-size: 1.1rem;">ACTIVE SENDERS</h3>
          <!-- Sender list will be populated here -->
        </div>
      </div>
      
      <!-- Panel Attack Methods -->
      <div class="card">
        <h2 class="card-title">DEPLOYMENT METHODS</h2>
        <p style="color: #aaa; margin-bottom: 15px; font-size: 0.9rem;">Select attack vector for target</p>
        
        <div class="btn-grid">
          <button class="btn" onclick="launchAttack('force')">FORCE CLOSE</button>
          <button class="btn" onclick="launchAttack('blank')">BLANK UI</button>
          <button class="btn" onclick="launchAttack('fcin')">FC INVISIBLE</button>
          <button class="btn" onclick="launchAttack('delay')">DELAY INVISIBLE</button>
          <button class="btn btn-danger" onclick="launchAttack('crip')">CRASH IPHONE</button>
          <button class="btn btn-danger" onclick="launchAttack('mass')">MASS DEPLOY</button>
        </div>
      </div>
      
      <!-- Terminal Output -->
      <div class="card">
        <h2 class="card-title">SYSTEM TERMINAL</h2>
        <div class="terminal" id="terminal">
          <div class="terminal-line">System initialized...</div>
          <div class="terminal-line">Dark mode activated</div>
          <div class="terminal-line">Awaiting user commands...</div>
        </div>
      </div>
      
      <footer>
        &copy; 2023 DEVELOPER RARAAIMUPP • FOR EDUCATIONAL PURPOSES ONLY
      </footer>
    </div>
  </div>

  <script>
    // Data storage
    let akun = JSON.parse(localStorage.getItem("akunList")) || [];
    let senders = JSON.parse(localStorage.getItem("senderList")) || [
      { name: "Primary API", url: "https://api1.example.com/send" },
      { name: "Backup API", url: "https://api2.example.com/send" }
    ];
    let terminal = document.getElementById("terminal");
    
    // Initialize
    document.addEventListener('DOMContentLoaded', function() {
      updateSenderList();
      logToTerminal("System ready. Authentication required.");
    });
    
    // Terminal logging function
    function logToTerminal(message) {
      const timestamp = new Date().toLocaleTimeString();
      const line = document.createElement('div');
      line.className = 'terminal-line';
      line.textContent = `[${timestamp}] ${message}`;
      terminal.appendChild(line);
      terminal.scrollTop = terminal.scrollHeight;
    }
    
    // Account creation
    function buatAkun() {
      let u = document.getElementById("newUser").value.trim();
      let p = document.getElementById("newPass").value.trim();
      
      if (u === "" || p === "") {
        logToTerminal("ERROR: Username and password required");
        alert("Username dan Password wajib diisi!");
        return;
      }
      
      // Check if user exists
      if (akun.find(item => item.username === u)) {
        logToTerminal(`ERROR: Username "${u}" already exists`);
        alert("Username sudah digunakan!");
        return;
      }
      
      akun.push({ username: u, password: p });
      localStorage.setItem("akunList", JSON.stringify(akun));
      
      logToTerminal(`SUCCESS: Account "${u}" created`);
      alert("Akun berhasil dibuat!");
      
      document.getElementById("newUser").value = "";
      document.getElementById("newPass").value = "";
    }
    
    // Login function
    function login() {
      let u = document.getElementById("username").value.trim();
      let p = document.getElementById("password").value.trim();
      
      let cari = akun.find(item => item.username === u && item.password === p);
      
      if (cari) {
        document.getElementById("login-page").classList.add("hidden");
        document.getElementById("tools-page").classList.remove("hidden");
        
        logToTerminal(`ACCESS GRANTED: User "${u}" authenticated`);
        logToTerminal(`Welcome back, ${u}. System controls unlocked.`);
      } else {
        logToTerminal("ACCESS DENIED: Invalid credentials");
        alert("Username atau Password salah!");
      }
    }
    
    // Sender management
    function updateSenderList() {
      const senderList = document.getElementById("sender-list");
      let html = '<h3 style="color: var(--neon-purple); margin-bottom: 15px; font-size: 1.1rem;">ACTIVE SENDERS</h3>';
      
      if (senders.length === 0) {
        html += '<div style="color: #666; text-align: center; padding: 20px;">No senders configured</div>';
      } else {
        senders.forEach((sender, index) => {
          html += `
            <div class="sender-item">
              <div>
                <div class="sender-name">${sender.name}</div>
                <div class="sender-url">${sender.url}</div>
              </div>
              <div class="sender-actions">
                <button class="action-btn" onclick="testSender(${index})">Test</button>
                <button class="action-btn" onclick="removeSender(${index})" style="color: var(--neon-red); border-color: rgba(255, 0, 60, 0.5);">Remove</button>
              </div>
            </div>
          `;
        });
      }
      
      senderList.innerHTML = html;
    }
    
    function addSender() {
      const name = document.getElementById("senderName").value.trim();
      const url = document.getElementById("senderUrl").value.trim();
      
      if (name === "" || url === "") {
        logToTerminal("ERROR: Sender name and URL required");
        alert("Nama dan URL sender wajib diisi!");
        return;
      }
      
      // Basic URL validation
      if (!url.startsWith("http://") && !url.startsWith("https://")) {
        logToTerminal("ERROR: Invalid URL format");
        alert("URL harus dimulai dengan http:// atau https://");
        return;
      }
      
      senders.push({ name, url });
      localStorage.setItem("senderList", JSON.stringify(senders));
      
      logToTerminal(`SUCCESS: Sender "${name}" added`);
      
      document.getElementById("senderName").value = "";
      document.getElementById("senderUrl").value = "";
      
      updateSenderList();
    }
    
    function removeSender(index) {
      const senderName = senders[index].name;
      senders.splice(index, 1);
      localStorage.setItem("senderList", JSON.stringify(senders));
      
      logToTerminal(`REMOVED: Sender "${senderName}" deleted`);
      updateSenderList();
    }
    
    function testSender(index) {
      const sender = senders[index];
      logToTerminal(`TESTING: Sender "${sender.name}"...`);
      
      // Simulate API test
      setTimeout(() => {
        const success = Math.random() > 0.3;
        if (success) {
          logToTerminal(`SUCCESS: Sender "${sender.name}" is active`);
        } else {
          logToTerminal(`WARNING: Sender "${sender.name}" may be offline`);
        }
      }, 1000);
    }
    
    // Attack launch function
    function launchAttack(type) {
      const target = document.getElementById("targetNumber").value.trim();
      
      // Validate target
      if (!target.startsWith("62") || target.length < 10) {
        logToTerminal("ERROR: Invalid target number format");
        alert("Masukkan nomor target yang valid (dimulai dengan 62)!");
        return;
      }
      
      // Validate senders
      if (senders.length === 0) {
        logToTerminal("ERROR: No senders configured");
        alert("Harap tambahkan sender terlebih dahulu!");
        return;
      }
      
      const attackNames = {
        'force': 'Force Close',
        'blank': 'Blank UI',
        'fcin': 'Fc Invisible',
        'delay': 'Delay Invisible',
        'crip': 'Crash iPhone',
        'mass': 'Mass Deployment'
      };
      
      const attackName = attackNames[type] || 'Unknown Attack';
      logToTerminal(`INITIATING: ${attackName} against target ${target}`);
      
      // Simulate attack progress
      let progress = 0;
      const progressInterval = setInterval(() => {
        progress += 10;
        logToTerminal(`PROGRESS: ${attackName} - ${progress}% complete`);
        
        if (progress >= 100) {
          clearInterval(progressInterval);
          
          // Send to all configured senders
          senders.forEach((sender, index) => {
            logToTerminal(`DEPLOYING: Via sender "${sender.name}"`);
            
            // Simulate API call
            setTimeout(() => {
              const success = Math.random() > 0.2;
              
              if (success) {
                logToTerminal(`SUCCESS: ${attackName} deployed via "${sender.name}"`);
              } else {
                logToTerminal(`FAILED: ${attackName} failed via "${sender.name}"`);
              }
            }, 500 * (index + 1));
          });
          
          logToTerminal(`COMPLETED: ${attackName} deployment finished for target ${target}`);
        }
      }, 300);
    }
    
    // Individual attack functions for backward compatibility
    function Force() { launchAttack('force'); }
    function Blank() { launchAttack('blank'); }
    function FcIn() { launchAttack('fcin'); }
    function Delay() { launchAttack('delay'); }
    function Crip() { launchAttack('crip'); }
    (/script)
(/body)
(/html)