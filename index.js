<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RAPZ STORE PAYMENT</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;500;600;700&display=swap');
        
        :root {
            --neon-blue: #00f3ff;
            --neon-pink: #ff00ff;
            --neon-purple: #bd00ff;
            --neon-green: #00ff66;
            --dark-bg: #0a0a16;
            --text-color: #ffffff;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Rajdhani', sans-serif;
        }
        
        body {
            background: var(--dark-bg);
            color: var(--text-color);
            min-height: 100vh;
            overflow-x: hidden;
            background-image: 
                radial-gradient(circle at 10% 20%, rgba(189, 0, 255, 0.1) 0%, transparent 20%),
                radial-gradient(circle at 90% 70%, rgba(0, 243, 255, 0.1) 0%, transparent 20%),
                linear-gradient(to bottom, #0a0a16, #000000);
            padding: 20px;
        }
        
        .cyberpunk-grid {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: 
                linear-gradient(rgba(0, 243, 255, 0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 243, 255, 0.05) 1px, transparent 1px);
            background-size: 30px 30px;
            z-index: -1;
            perspective: 500px;
        }
        
        .container {
            max-width: 900px;
            margin: 0 auto;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        
        .profile-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 20px;
            position: relative;
        }
        
        .profile-frame {
            width: 150px;
            height: 150px;
            border-radius: 50%;
            border: 3px solid var(--neon-blue);
            padding: 5px;
            box-shadow: 0 0 15px var(--neon-blue), 
                        inset 0 0 15px var(--neon-blue);
            animation: pulse 3s infinite alternate;
            overflow: hidden;
            position: relative;
        }
        
        .profile-img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            object-fit: cover;
        }
        
        .social-icons {
            display: flex;
            justify-content: center;
            gap: 15px;
            margin-top: 15px;
        }
        
        .social-icon {
            color: var(--text-color);
            font-size: 20px;
            transition: all 0.3s ease;
            text-shadow: 0 0 5px var(--neon-pink);
        }
        
        .social-icon:hover {
            color: var(--neon-pink);
            transform: translateY(-3px);
            text-shadow: 0 0 10px var(--neon-pink);
        }
        
        .title-container {
            text-align: center;
            margin: 20px 0;
            position: relative;
        }
        
        .main-title {
            font-family: 'Orbitron', sans-serif;
            font-weight: 900;
            font-size: 3.5rem;
            text-transform: uppercase;
            margin-bottom: 10px;
            position: relative;
            color: transparent;
            background: linear-gradient(45deg, var(--neon-blue), var(--neon-pink), var(--neon-purple));
            -webkit-background-clip: text;
            background-clip: text;
            text-shadow: 0 0 10px rgba(189, 0, 255, 0.5);
            animation: flicker 5s infinite alternate;
        }
        
        .lightning {
            position: absolute;
            width: 5px;
            background: var(--neon-blue);
            box-shadow: 0 0 10px 2px var(--neon-blue);
            opacity: 0;
            z-index: -1;
        }
        
        .social-usernames {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin: 15px 0 30px;
            flex-wrap: wrap;
        }
        
        .username {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 1rem;
            color: var(--neon-blue);
        }
        
        .username i {
            color: var(--neon-pink);
        }
        
        .quote {
            font-style: italic;
            font-size: 1.5rem;
            text-align: center;
            margin: 20px 0 40px;
            color: var(--neon-blue);
            text-shadow: 0 0 5px var(--neon-blue);
            position: relative;
            padding: 0 10px;
        }
        
        .quote::before, .quote::after {
            content: '"';
            color: var(--neon-pink);
            font-size: 2rem;
        }
        
        .payment-section {
            width: 100%;
            margin-bottom: 40px;
        }
        
        .section-title {
            font-family: 'Orbitron', sans-serif;
            font-size: 2rem;
            color: var(--neon-green);
            margin-bottom: 20px;
            text-align: center;
            text-shadow: 0 0 10px var(--neon-green);
            position: relative;
            padding-bottom: 10px;
        }
        
        .section-title::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 100px;
            height: 3px;
            background: linear-gradient(90deg, transparent, var(--neon-green), transparent);
        }
        
        .payment-methods {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 30px;
        }
        
        .payment-card {
            background: rgba(10, 10, 22, 0.8);
            border: 1px solid var(--neon-blue);
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 0 15px rgba(0, 243, 255, 0.3);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            backdrop-filter: blur(5px);
        }
        
        .payment-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 0 20px rgba(0, 243, 255, 0.5);
        }
        
        .payment-title {
            font-family: 'Orbitron', sans-serif;
            font-size: 1.5rem;
            color: var(--neon-pink);
            margin-bottom: 15px;
            text-align: center;
            text-shadow: 0 0 5px var(--neon-pink);
        }
        
        .payment-details {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;
        }
        
        .payment-info {
            font-size: 1.2rem;
            color: var(--text-color);
            background: rgba(0, 0, 0, 0.3);
            padding: 10px 20px;
            border-radius: 5px;
            width: 100%;
            text-align: center;
            border: 1px solid rgba(0, 243, 255, 0.3);
            transition: all 0.3s ease;
        }
        
        .payment-info:hover {
            background: rgba(0, 243, 255, 0.1);
            border-color: var(--neon-blue);
        }
        
        .qris-container {
            display: flex;
            justify-content: center;
            margin-top: 15px;
        }
        
        .qris-img {
            max-width: 250px;
            border-radius: 10px;
            border: 2px solid var(--neon-purple);
            box-shadow: 0 0 15px var(--neon-purple);
        }
        
        .guide-container {
            background: rgba(10, 10, 22, 0.8);
            border: 1px solid var(--neon-purple);
            border-radius: 10px;
            padding: 25px;
            margin-top: 30px;
            backdrop-filter: blur(5px);
            box-shadow: 0 0 20px rgba(189, 0, 255, 0.3);
        }
        
        .guide-title {
            font-family: 'Orbitron', sans-serif;
            font-size: 1.5rem;
            color: var(--neon-blue);
            margin-bottom: 20px;
            text-align: center;
            text-shadow: 0 0 5px var(--neon-blue);
        }
        
        .guide-steps {
            display: flex;
            flex-direction: column;
            gap: 15px;
            counter-reset: step-counter;
        }
        
        .guide-step {
            display: flex;
            align-items: flex-start;
            gap: 15px;
            padding: 15px;
            background: rgba(0, 0, 0, 0.3);
            border-radius: 8px;
            border-left: 3px solid var(--neon-green);
        }
        
        .guide-step::before {
            counter-increment: step-counter;
            content: counter(step-counter);
            background: var(--neon-green);
            color: var(--dark-bg);
            width: 30px;
            height: 30px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            flex-shrink: 0;
            box-shadow: 0 0 10px var(--neon-green);
        }
        
        .note-container {
            background: rgba(255, 0, 0, 0.1);
            border: 1px solid rgba(255, 0, 0, 0.5);
            border-radius: 10px;
            padding: 20px;
            margin-top: 30px;
            backdrop-filter: blur(5px);
            box-shadow: 0 0 15px rgba(255, 0, 0, 0.3);
        }
        
        .note-title {
            font-family: 'Orbitron', sans-serif;
            font-size: 1.3rem;
            color: #ff3366;
            margin-bottom: 15px;
            text-align: center;
            text-shadow: 0 0 5px rgba(255, 51, 102, 0.7);
        }
        
        .note-text {
            color: #ff9999;
            text-align: center;
            font-size: 1.1rem;
            line-height: 1.5;
        }
        
        .cyberpunk-elements {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
        }
        
        .glowing-circle {
            position: absolute;
            width: 200px;
            height: 200px;
            border-radius: 50%;
            background: radial-gradient(circle, var(--neon-purple), transparent);
            filter: blur(40px);
            opacity: 0.2;
            animation: float 15s infinite ease-in-out;
        }
        
        .circle-1 {
            top: 20%;
            left: 10%;
            animation-delay: 0s;
        }
        
        .circle-2 {
            bottom: 30%;
            right: 15%;
            background: radial-gradient(circle, var(--neon-blue), transparent);
            animation-delay: -5s;
        }
        
        @keyframes pulse {
            0% {
                box-shadow: 0 0 15px var(--neon-blue), 
                            inset 0 0 15px var(--neon-blue);
            }
            100% {
                box-shadow: 0 0 25px var(--neon-pink), 
                            inset 0 0 25px var(--neon-pink);
            }
        }
        
        @keyframes flicker {
            0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
                text-shadow: 0 0 10px rgba(189, 0, 255, 0.5),
                             0 0 20px rgba(189, 0, 255, 0.3),
                             0 0 30px rgba(189, 0, 255, 0.2);
            }
            20%, 24%, 55% {
                text-shadow: none;
            }
        }
        
        @keyframes float {
            0%, 100% {
                transform: translate(0, 0) scale(1);
            }
            50% {
                transform: translate(20px, -20px) scale(1.2);
            }
        }
        
        /* Responsiveness */
        @media (max-width: 768px) {
            .main-title {
                font-size: 2.5rem;
            }
            
            .payment-methods {
                gap: 20px;
            }
            
            .social-usernames {
                flex-direction: column;
                align-items: center;
                gap: 10px;
            }
            
            .quote {
                font-size: 1.2rem;
            }
            
            .section-title {
                font-size: 1.7rem;
            }
            
            .guide-step {
                flex-direction: column;
                text-align: center;
            }
        }
    </style>
</head>
<body>
    <div class="cyberpunk-grid"></div>
    <div class="cyberpunk-elements">
        <div class="glowing-circle circle-1"></div>
        <div class="glowing-circle circle-2"></div>
    </div>
    
    <div class="container">
        <div class="profile-container">
            <div class="profile-frame">
                <img src="https://c.termai.cc/i69/4WfytR.jpg" alt="RAPZ Store" class="profile-img">
            </div>
            
            <div class="social-icons">
                <a href="#" class="social-icon"><i class="fab fa-tiktok"></i></a>
                <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
                <a href="#" class="social-icon"><i class="fab fa-telegram"></i></a>
            </div>
        </div>
        
        <div class="title-container">
            <h1 class="main-title">RAPZ STORE PAYMENT</h1>
            
            <div class="social-usernames">
                <div class="username">
                    <i class="fab fa-tiktok"></i> @style.fomo34
                </div>
                <div class="username">
                    <i class="fab fa-instagram"></i> @rapz_yoaimo
                </div>
                <div class="username">
                    <i class="fab fa-telegram"></i> @rapzzxtamz
                </div>
            </div>
        </div>
        
        <p class="quote">JANGAN BERFIKIR KAU DI ATAS KU.</p>
        
        <div class="payment-section">
            <h2 class="section-title">METODE PEMBAYARAN</h2>
            
            <div class="payment-methods">
                <div class="payment-card">
                    <h3 class="payment-title">DANA</h3>
                    <div class="payment-details">
                        <div class="payment-info">0895-0790-7919</div> A/N AYU LESTARI
                    </div>
                </div>
                
                <div class="payment-card">
                    <h3 class="payment-title">GOPAY</h3>
                    <div class="payment-details">
                        <div class="payment-info">0831-7229-9901</div> A/N RAPZ STORE
                    </div>
                </div>
                
                <div class="payment-card">
                    <h3 class="payment-title">QRIS</h3>
                    <div class="payment-details">
                        <div class="qris-container">
                            <img src="https://files.catbox.moe/9ufaxv.jpg" alt="QRIS Payment" class="qris-img">
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="guide-container">
                <h3 class="guide-title">PANDUAN PEMBAYARAN</h3>
                <div class="guide-steps">
                    <div class="guide-step">
                        Pilih metode pembayaran yang ingin Anda gunakan (DANA, GOPAY, atau QRIS)
                    </div>
                    <div class="guide-step">
                        Transfer sesuai dengan jumlah pembayaran yang harus Anda bayarkan
                    </div>
                    <div class="guide-step">
                        Simpan bukti transfer yang valid (screenshot atau foto)
                    </div>
                    <div class="guide-step">
                        Kirim bukti transfer ke admin melalui WhatsApp atau media sosial yang tersedia
                    </div>
                    <div class="guide-step">
                        Tunggu konfirmasi dari admin bahwa pembayaran Anda telah diterima
                    </div>
                </div>
            </div>
            
            <div class="note-container">
                <h3 class="note-title">PENTING!</h3>
                <p class="note-text">JIKA TIDAK ADA BUKTI TRANSFER MAKA AKAN KU ANGGAP TIDAK ADA PEMBAYARAN.</p>
            </div>
        </div>
    </div>

    <script>
        // Function to create lightning effects
        function createLightning() {
            const title = document.querySelector('.main-title');
            const titleRect = title.getBoundingClientRect();
            
            for (let i = 0; i < 5; i++) {
                const lightning = document.createElement('div');
                lightning.classList.add('lightning');
                
                // Random position and size
                const left = Math.random() * titleRect.width;
                const height = 50 + Math.random() * 100;
                const top = -height;
                
                lightning.style.left = `${left}px`;
                lightning.style.top = `${top}px`;
                lightning.style.height = `${height}px`;
                
                // Random color
                const colors = ['#00f3ff', '#ff00ff', '#bd00ff'];
                const color = colors[Math.floor(Math.random() * colors.length)];
                lightning.style.background = color;
                lightning.style.boxShadow = `0 0 10px 2px ${color}`;
                
                document.querySelector('.title-container').appendChild(lightning);
                
                // Animate lightning
                const delay = Math.random() * 5;
                
                setTimeout(() => {
                    lightning.style.opacity = '1';
                    lightning.style.transition = 'opacity 0.1s';
                    
                    setTimeout(() => {
                        lightning.style.opacity = '0';
                        lightning.style.transition = 'opacity 0.5s';
                        
                        setTimeout(() => {
                            lightning.remove();
                        }, 500);
                    }, 100);
                }, delay * 1000);
            }
        }
        
        // Create lightning effects periodically
        setInterval(createLightning, 3000);
        
        // Initial lightning
        createLightning();
    </script>
</body>
</html>