<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>14! Uno'o · 血櫻 · Now </title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,200;14..32,300;14..32,400;14..32,500;14..32,600&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            min-height: 100vh;
            background: #030003;
            background-image: radial-gradient(circle at 20% 30%, #2f0a1a 0%, #070009 45%, #000 90%);
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1.5rem;
            position: relative;
            overflow-x: hidden;
            color: #edd6ff;
        }

        /* Optimized dead stars - menggunakan CSS murni tanpa SVG */
        .dead-stars {
            position: fixed;
            inset: 0;
            background: 
                radial-gradient(1px 1px at 3% 8%, #ffaaaa, transparent 1px),
                radial-gradient(1px 1px at 91% 19%, #ff9999, transparent 1px),
                radial-gradient(2px 2px at 73% 84%, #ff8888, transparent 2px),
                radial-gradient(2px 2px at 42% 53%, #ff7777, transparent 2px),
                radial-gradient(1px 1px at 58% 22%, #ffb5b5, transparent 1px),
                radial-gradient(2px 2px at 12% 91%, #ff6b6b, transparent 2px),
                radial-gradient(1px 1px at 88% 67%, #ff8a8a, transparent 1px),
                radial-gradient(2px 2px at 25% 35%, #ff5f5f, transparent 2px),
                radial-gradient(1px 1px at 67% 42%, #ff9d9d, transparent 1px),
                radial-gradient(2px 2px at 81% 93%, #ff7a7a, transparent 2px),
                radial-gradient(1px 1px at 44% 17%, #ffaeae, transparent 1px),
                radial-gradient(2px 2px at 96% 48%, #ff6363, transparent 2px);
            background-repeat: no-repeat;
            background-size: 200% 200%;
            opacity: 0.5;
            pointer-events: none;
            z-index: 0;
        }

        /* Optimized red glow - lebih ringan */
        .red-glow {
            position: fixed;
            inset: 0;
            pointer-events: none;
            z-index: 1;
            opacity: 0.5;
        }
        
        .glow-orb {
            position: absolute;
            width: 600px;
            height: 600px;
            border-radius: 50%;
            background: radial-gradient(circle at 30% 30%, #ff4d4d20, #8b000010, transparent 70%);
            filter: blur(80px);
            animation: floatGlow 15s infinite alternate ease-in-out;
            will-change: transform;
        }
        
        .glow-orb:nth-child(1) {
            top: -200px;
            right: -200px;
            background: radial-gradient(circle, #ff2b2b25, #4a001015, transparent 80%);
        }
        
        .glow-orb:nth-child(2) {
            bottom: -250px;
            left: -150px;
            width: 500px;
            height: 500px;
            background: radial-gradient(circle, #ff3a3a20, #2f001510, transparent 75%);
            animation-duration: 18s;
        }

        @keyframes floatGlow {
            0% { transform: translate(0, 0) scale(1); }
            100% { transform: translate(30px, -30px) scale(1.1); }
        }

        /* Optimized blood moon */
        .blood-moon {
            position: fixed;
            top: 20px;
            right: 30px;
            width: 90px;
            height: 90px;
            border-radius: 50%;
            background: radial-gradient(circle at 35% 35%, #ffd3d3, #b33b3b 70%, #4a0606);
            box-shadow: 0 0 100px #ff4d4d;
            z-index: 2;
            border: 1px solid #ff9e9e;
            animation: moonPulse 4s infinite alternate ease-in-out;
            will-change: transform, box-shadow;
        }
        
        @keyframes moonPulse {
            0% { box-shadow: 0 0 80px #ff4d4d; transform: scale(1); }
            100% { box-shadow: 0 0 120px #ff1a1a; transform: scale(1.05); }
        }

        .blood-moon::after {
            content: '';
            position: absolute;
            top: 20px;
            left: 15px;
            width: 25px;
            height: 25px;
            background: radial-gradient(circle, #fff5f5, #ffb8b8);
            border-radius: 50%;
            opacity: 0.4;
            filter: blur(2px);
        }

        /* Optimized shooting stars - lebih sedikit tapi tetap menarik */
        .shooting-star {
            position: fixed;
            width: 3px;
            height: 3px;
            background: #ff6b6b;
            border-radius: 50%;
            box-shadow: 0 0 30px #ff3b3b;
            z-index: 3;
            opacity: 0;
            animation: shootAcross 12s linear infinite;
            will-change: transform, opacity;
        }
        
        .star1 { top: 15%; left: 85%; animation-delay: 0s; }
        .star2 { top: 70%; left: 10%; animation-delay: 4s; }
        .star3 { top: 30%; left: 75%; animation-delay: 8s; }

        @keyframes shootAcross {
            0% {
                transform: translate(0, 0) scale(1);
                opacity: 0.8;
            }
            30% {
                transform: translate(-250px, 180px) scale(0.7);
                opacity: 0.5;
            }
            70% {
                transform: translate(-500px, 350px) scale(0.3);
                opacity: 0.2;
            }
            100% {
                transform: translate(-750px, 550px) scale(0);
                opacity: 0;
            }
        }

        /* Optimized petals - lebih sedikit tapi efisien */
        .dark-petal-container {
            position: fixed;
            inset: 0;
            pointer-events: none;
            z-index: 4;
            overflow: hidden;
        }

        .dark-petal {
            position: absolute;
            background: rgba(170, 30, 40, 0.25);
            width: 15px;
            height: 20px;
            border-radius: 70% 30% 60% 40% / 50% 40% 60% 50%;
            border: 1px solid #ff6b6b20;
            box-shadow: 0 0 15px #ff3b3b;
            animation: fallDark 15s linear infinite;
            will-change: transform, opacity;
        }

        @keyframes fallDark {
            0% {
                top: -10%;
                transform: rotate(0deg) translateX(0);
                opacity: 0.6;
            }
            50% {
                transform: rotate(180deg) translateX(20px);
            }
            100% {
                top: 110%;
                transform: rotate(360deg) translateX(-20px);
                opacity: 0.1;
            }
        }

        /* Main card - lebih ringan animasinya */
        .glass-card {
            position: relative;
            z-index: 10;
            max-width: 560px;
            width: 100%;
            background: rgba(8, 0, 12, 0.6);
            backdrop-filter: blur(15px);
            -webkit-backdrop-filter: blur(15px);
            border: 1px solid rgba(255, 80, 80, 0.3);
            border-radius: 48px;
            padding: 2.2rem 2rem 2.5rem;
            box-shadow: 0 30px 60px -15px #4f0000, 0 0 0 1px rgba(255, 60, 60, 0.2) inset, 0 0 60px #ff3333;
            text-align: center;
            animation: cardFloat 5s infinite alternate ease-in-out;
            will-change: transform;
        }

        @keyframes cardFloat {
            0% { transform: translateY(0); }
            100% { transform: translateY(-5px); }
        }

        .main-title {
            font-size: clamp(2.5rem, 8vw, 4rem);
            font-weight: 300;
            letter-spacing: 8px;
            text-transform: uppercase;
            color: #fff0f5;
            text-shadow: 0 0 15px #ff6b6b, 0 0 30px #c03939;
            margin-bottom: 0.8rem;
            line-height: 1.1;
        }

        /* Logo ring - lebih ringan */
        .logo-ring {
            margin: 1.8rem auto 2rem auto;
            width: 130px;
            height: 130px;
            border-radius: 50%;
            background: #0a000a;
            box-shadow: 0 0 50px #ff4d4d, 0 0 100px #b30202, 0 0 30px #ffaaaa inset;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid #ff8a8a;
            padding: 5px;
            transition: box-shadow 0.3s ease, transform 0.3s ease;
        }

        .logo-ring:hover {
            box-shadow: 0 0 70px #ff6b6b, 0 0 140px #ff1a1a;
            transform: scale(1.02);
        }

        .logo-ring img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 50%;
            display: block;
            background: #1e001e;
            border: 1px solid #ffb5b5;
            transition: transform 0.5s ease;
        }

        .logo-ring:hover img {
            transform: rotate(180deg);
        }

        /* Contact label */
        .contact-label {
            margin: 2rem 0 1.3rem 0;
        }

        .contact-label span {
            font-size: 0.9rem;
            font-weight: 200;
            text-transform: uppercase;
            letter-spacing: 5px;
            color: #ffd4d4;
            text-shadow: 0 0 12px #ff4d4d;
            background: rgba(60, 0, 0, 0.4);
            padding: 0.3rem 1.8rem;
            border-radius: 60px;
            backdrop-filter: blur(5px);
            border: 1px solid #ff6b6b;
            display: inline-block;
        }

        /* Button grid - minimalis tapi tetap variatif */
        .button-grid {
            display: flex;
            flex-direction: column;
            gap: 0.9rem;
            margin-bottom: 2rem;
        }

        .social-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.8rem;
            padding: 0.9rem 1.2rem;
            background: rgba(15, 0, 10, 0.5);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            border-radius: 40px;
            font-size: 1rem;
            font-weight: 300;
            color: #fff0f5;
            text-decoration: none;
            letter-spacing: 0.3px;
            transition: all 0.2s ease;
            position: relative;
            overflow: hidden;
        }

        /* Variasi border yang lebih subtle */
        .btn-wa-channel { border: 1px solid #ff8a8a; }
        .btn-wa { border: 1px solid #ff7a7a; }
        .btn-telegram { border: 1px dashed #ff9e9e; }
        .btn-tiktok { border: 1px solid #ff8a8a; background: rgba(30, 0, 15, 0.6); }
        .btn-instagram { border: 1px dotted #ffb5b5; }
        .btn-discord { border: 1px solid #ff9e9e; }
        .btn-wa-group { border: 1px double #ff8a8a; }

        /* Icon styling */
        .social-btn i {
            font-style: normal;
            font-size: 1.6rem;
            filter: drop-shadow(0 0 5px #ff8a8a);
            transition: transform 0.2s ease;
        }

        /* Hover effect sederhana */
        .social-btn:hover {
            transform: translateY(-3px);
            background: rgba(100, 0, 30, 0.7);
            border-color: #ffb5b5;
            box-shadow: 0 8px 20px -8px #ff4d4d;
        }

        .social-btn:hover i {
            transform: scale(1.1);
        }

        /* Cosmic note */
        .cosmic-note {
            margin-top: 1rem;
            font-size: 0.9rem;
            color: #ffb5b5;
            opacity: 0.9;
            letter-spacing: 2px;
            border-top: 1px solid #ff6b6b30;
            padding-top: 1.2rem;
            font-weight: 300;
            text-shadow: 0 0 10px #ff3b3b;
        }

        /* Responsive */
        @media (max-width: 450px) {
            .glass-card { padding: 1.5rem 1.2rem; border-radius: 32px; }
            .main-title { letter-spacing: 4px; }
            .blood-moon { width: 70px; height: 70px; top: 10px; right: 15px; }
            .logo-ring { width: 110px; height: 110px; }
            .social-btn { padding: 0.8rem 1rem; font-size: 0.95rem; }
        }
    </style>
</head>
<body>
    <!-- Dead stars background -->
    <div class="dead-stars"></div>

    <!-- Red glow orbs (lebih sedikit) -->
    <div class="red-glow">
        <div class="glow-orb"></div>
        <div class="glow-orb"></div>
    </div>

    <!-- Blood moon -->
    <div class="blood-moon"></div>

    <!-- Shooting stars (3 saja) -->
    <div class="shooting-star star1"></div>
    <div class="shooting-star star2"></div>
    <div class="shooting-star star3"></div>

    <!-- Petals container (dengan jumlah lebih sedikit) -->
    <div class="dark-petal-container" id="dark-petal-container"></div>

    <!-- Main card -->
    <div class="glass-card">
        <h1 class="main-title">14! UNO'O</h1>

        <div class="logo-ring">
            <img src="https://c.termai.cc/i140/64J1.jpg" alt="uno logo" loading="lazy">
        </div>

        <div class="contact-label">
            <span>✧ CONTACT ME ✧</span>
        </div>

        <div class="button-grid">
            <a href="https://whatsapp.com/channel/0029VbCWPlLJUM2Wpg1vXx06" target="_blank" rel="noopener" class="social-btn btn-wa-channel">
                <i>❂</i> CH WA UNO
            </a>
            <a href="https://wa.me/6283172299901" target="_blank" rel="noopener" class="social-btn btn-wa">
                <i>✺</i> WHATSAPP UNO
            </a>
            <a href="https://chat.whatsapp.com/DnuLHL0T20U3KCSJ7ds649?mode=gi_t" target="_blank" rel="noopener" class="social-btn btn-wa-group">
                <i>✡︎</i>GB Los Cinco Carnívoros
            </a>
            <a href="https://t.me/rapzzxtamz" target="_blank" rel="noopener" class="social-btn btn-telegram">
                <i>☯</i> TELEGRAM
            </a>
            <a href="https://discord.gg/Msg57Etvz" target="_blank" rel="noopener" class="social-btn btn-discord">
                <i>◈</i> SERVER DISCORD UNO
            </a>
            <a href="https://www.tiktok.com/@style.fomo34" target="_blank" rel="noopener" class="social-btn btn-tiktok">
                <i>⛧</i> TIKTOK
            </a>
            <a href="https://www.instagram.com/uno.onee1" target="_blank" rel="noopener" class="social-btn btn-instagram">
                <i>ⵔ</i>INSTAGRAM
            </a>
        </div>

        <div class="cosmic-note">
            🜁 血櫻 • 14! Uno'o Is Here • 黑櫻 🜁
        </div>
    </div>

    <script>
        (function() {
            // Generate petals dengan jumlah lebih sedikit (60) untuk performa lebih baik
            const container = document.getElementById('dark-petal-container');
            if (container) {
                // Kosongkan container dulu
                container.innerHTML = '';
                
                for (let i = 0; i < 60; i++) {
                    const petal = document.createElement('div');
                    petal.classList.add('dark-petal');
                    
                    // Ukuran bervariasi tapi tidak ekstrem
                    const size = 10 + Math.floor(Math.random() * 15);
                    petal.style.width = size + 'px';
                    petal.style.height = (size * 1.3) + 'px';
                    petal.style.left = Math.random() * 100 + '%';
                    
                    // Variasi durasi dan delay
                    const duration = 10 + Math.random() * 15;
                    petal.style.animationDuration = duration + 's';
                    petal.style.animationDelay = (Math.random() * -20) + 's';
                    
                    // Variasi opacity
                    petal.style.opacity = 0.2 + Math.random() * 0.3;
                    
                    // Variasi warna untuk beberapa petal
                    if (i % 4 === 0) {
                        petal.style.background = 'rgba(180, 30, 40, 0.3)';
                        petal.style.boxShadow = '0 0 20px #ff4d4d';
                    }
                    
                    container.appendChild(petal);
                }
            }

            // Optimasi performa dengan mengurangi efek pada mobile
            if (window.innerWidth <= 768) {
                // Kurangi jumlah glow orbs di mobile
                const orbs = document.querySelectorAll('.glow-orb');
                orbs.forEach((orb, index) => {
                    if (index > 0) orb.style.opacity = '0.3';
                });
                
                // Matikan animasi blood moon di mobile untuk performa
                document.querySelector('.blood-moon').style.animation = 'none';
            }
        })();
    </script>
</body>
</html>