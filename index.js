<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>♫ lyrical whispers · animasi lirik</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            background: #0a0b14;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: 'Inter', 'Segoe UI', system-ui, -apple-system, sans-serif;
            padding: 1.2rem;
            position: relative;
            overflow-x: hidden;
        }

        /* decorative background elements */
        body::before {
            content: '';
            position: fixed;
            width: 100vw;
            height: 100vh;
            background: radial-gradient(circle at 20% 30%, rgba(180, 120, 210, 0.15) 0%, transparent 30%),
                        radial-gradient(circle at 80% 70%, rgba(255, 140, 180, 0.12) 0%, transparent 35%),
                        repeating-linear-gradient(45deg, rgba(255,255,255,0.01) 0px, rgba(255,255,255,0.01) 2px, transparent 2px, transparent 8px);
            pointer-events: none;
            z-index: 0;
        }

        /* floating glass orbs */
        .orb {
            position: fixed;
            border-radius: 50%;
            background: radial-gradient(circle at 30% 30%, rgba(255, 200, 230, 0.4), rgba(180, 130, 200, 0.1));
            filter: blur(45px);
            z-index: 0;
            animation: floatOrb 18s infinite alternate ease-in-out;
        }

        .orb-1 {
            width: 350px;
            height: 350px;
            top: -100px;
            left: -100px;
            background: radial-gradient(circle at 20% 20%, #ffb3c6, #b38b9d);
            opacity: 0.25;
            animation-duration: 25s;
        }

        .orb-2 {
            width: 400px;
            height: 400px;
            bottom: -150px;
            right: -100px;
            background: radial-gradient(circle at 70% 70%, #c4a0ff, #785a9c);
            opacity: 0.2;
            animation-duration: 22s;
            animation-delay: -5s;
        }

        .orb-3 {
            width: 200px;
            height: 200px;
            top: 40%;
            right: 15%;
            background: #ffb7c5;
            opacity: 0.15;
            filter: blur(60px);
            animation: floatOrb2 14s infinite alternate;
        }

        @keyframes floatOrb {
            0% { transform: translate(0, 0) scale(1); }
            100% { transform: translate(80px, 40px) scale(1.2); }
        }

        @keyframes floatOrb2 {
            0% { transform: translate(0, 0) scale(1); }
            100% { transform: translate(-60px, 30px) scale(1.3); }
        }

        /* main card - luxury glass */
        .card {
            background: rgba(18, 16, 28, 0.65);
            backdrop-filter: blur(16px) saturate(180%);
            -webkit-backdrop-filter: blur(16px) saturate(180%);
            border-radius: 3.5rem;
            border: 1px solid rgba(255, 220, 240, 0.2);
            box-shadow: 0 40px 70px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 200, 230, 0.15) inset,
                        0 0 40px rgba(180, 130, 220, 0.3);
            padding: 2.8rem 2.5rem;
            max-width: 800px;
            width: 100%;
            position: relative;
            z-index: 10;
            transition: box-shadow 0.4s;
        }

        .card:hover {
            box-shadow: 0 45px 80px rgba(0, 0, 0, 0.9), 0 0 0 2px rgba(255, 180, 210, 0.25) inset,
                        0 0 60px rgba(210, 140, 255, 0.4);
        }

        /* header with elegant divider */
        .header {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1.5rem;
            margin-bottom: 2.2rem;
        }

        .header-line {
            height: 1px;
            width: 15%;
            background: linear-gradient(90deg, transparent, rgba(255, 180, 210, 0.6), rgba(200, 160, 250, 0.6), transparent);
        }

        h2 {
            font-weight: 300;
            font-size: 2rem;
            letter-spacing: 6px;
            text-transform: uppercase;
            color: #fff1f5;
            text-shadow: 0 0 12px #ff9ec0, 0 0 30px #b794d4;
            font-family: 'Inter', 'Segoe UI', sans-serif;
            white-space: nowrap;
        }

        h2 span {
            font-weight: 200;
            color: #e2c4ff;
            font-size: 1.5rem;
            letter-spacing: 4px;
            margin: 0 0.2rem;
        }

        /* stage area dengan efek neon halus */
        .stage {
            background: rgba(8, 6, 16, 0.6);
            border-radius: 2.8rem;
            padding: 2.2rem 1.8rem;
            box-shadow: inset 0 8px 18px rgba(0, 0, 0, 0.8), 0 15px 30px rgba(0, 0, 0, 0.6);
            border: 1px solid rgba(200, 150, 200, 0.3);
            backdrop-filter: blur(4px);
        }

        #lyricBox {
            background: rgba(5, 3, 12, 0.7);
            border-radius: 2.5rem;
            padding: 2.5rem 2rem;
            min-height: 210px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid rgba(230, 140, 200, 0.6);
            box-shadow: 0 0 35px #c274b0, 0 0 10px #ffa3c0 inset, 0 0 30px rgba(180, 100, 200, 0.6);
            margin-bottom: 2.5rem;
            transition: box-shadow 0.5s, border-color 0.3s;
            position: relative;
        }

        #lyricBox::after {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: 2.5rem;
            padding: 2px;
            background: linear-gradient(145deg, rgba(255, 200, 240, 0.5), rgba(160, 120, 200, 0.2));
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            pointer-events: none;
            opacity: 0.5;
        }

        #animatedText {
            font-size: 2.2rem;
            font-weight: 400;
            color: #fdedff;
            text-shadow: 0 0 15px #ffb0cf, 0 0 40px #cc7eb3, 2px 2px 4px rgba(0,0,0,0.5);
            line-height: 1.5;
            word-break: break-word;
            text-align: center;
            font-family: 'Courier New', 'Fira Code', 'JetBrains Mono', monospace;
            letter-spacing: 1.5px;
            transition: text-shadow 0.3s;
            min-height: 4rem;
        }

        /* container tombol lebih elegan */
        .controls {
            display: flex;
            justify-content: center;
            gap: 2rem;
            flex-wrap: wrap;
            margin: 0.5rem 0 1rem;
        }

        button {
            background: rgba(25, 20, 35, 0.7);
            border: none;
            border-radius: 4rem;
            padding: 1.1rem 2.8rem;
            font-size: 1.4rem;
            font-weight: 400;
            color: #ffeaf2;
            letter-spacing: 2px;
            cursor: pointer;
            box-shadow: 0 10px 0 #090613, 0 15px 30px #00000080, 0 0 20px #ff99bb50;
            transition: all 0.12s cubic-bezier(0.2, 0.9, 0.3, 1.2);
            border: 1px solid rgba(255, 170, 200, 0.7);
            display: inline-flex;
            align-items: center;
            gap: 0.8rem;
            backdrop-filter: blur(8px);
            font-family: 'Inter', sans-serif;
            text-transform: uppercase;
            font-size: 1.2rem;
        }

        button:hover:not(:disabled) {
            background: rgba(40, 30, 50, 0.8);
            border-color: #ffc0d0;
            box-shadow: 0 8px 0 #0a0718, 0 18px 35px black, 0 0 35px #ffaac0;
            transform: translateY(-2px);
        }

        button:active {
            transform: translateY(6px);
            box-shadow: 0 4px 0 #0a0718, 0 12px 25px black;
        }

        button:disabled {
            opacity: 0.4;
            transform: translateY(5px);
            box-shadow: 0 5px 0 #0a0718, 0 8px 15px black;
            pointer-events: none;
            filter: grayscale(0.6);
            border-color: #a5738b;
        }

        /* ikon custom dalam button (opsional) */
        .btn-icon {
            font-size: 1.6rem;
            line-height: 1;
            filter: drop-shadow(0 0 5px #ffa7c4);
        }

        /* footer aesthetic dengan ornament */
        .footer-note {
            color: #b09fba;
            margin-top: 2.2rem;
            text-align: center;
            font-size: 1.1rem;
            font-weight: 300;
            font-style: italic;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            border-top: 1px solid rgba(200, 150, 200, 0.25);
            padding-top: 1.5rem;
            position: relative;
        }

        .footer-note i {
            color: #ffb5cf;
            font-style: italic;
            text-shadow: 0 0 8px #f7a1bd;
        }

        .footer-decoration {
            font-size: 1.4rem;
            opacity: 0.7;
            filter: drop-shadow(0 0 6px #ff99bb);
            animation: gentlePulse 3s infinite;
        }

        @keyframes gentlePulse {
            0% { opacity: 0.5; }
            50% { opacity: 1; }
            100% { opacity: 0.5; }
        }

        /* extra detail: subtle glow on text container */
        .glow-corner {
            position: absolute;
            width: 120px;
            height: 120px;
            background: radial-gradient(circle at 30% 30%, rgba(255, 200, 230, 0.2), transparent 70%);
            border-radius: 50%;
            filter: blur(30px);
            z-index: 5;
            pointer-events: none;
        }

        /* resposive touch */
        @media (max-width: 550px) {
            .card { padding: 1.8rem; }
            h2 { font-size: 1.5rem; letter-spacing: 3px; }
            #animatedText { font-size: 1.7rem; }
            button { padding: 0.9rem 1.8rem; font-size: 1rem; }
        }
    </style>
</head>
<body>
    <!-- decorative orbs floating background -->
    <div class="orb orb-1"></div>
    <div class="orb orb-2"></div>
    <div class="orb orb-3"></div>

    <div class="card">
        <div class="header">
            <div class="header-line"></div>
            <h2>🎜<span> lyrical </span>whispers 🎝</h2>
            <div class="header-line"></div>
        </div>

        <div class="stage">
            <div id="lyricBox">
                <div id="animatedText">💗</div>
            </div>
            <div class="controls">
                <button id="playBtn">
                    <span class="btn-icon">▶</span> mulai melodi
                </button>
                <button id="resetBtn" disabled>
                    <span class="btn-icon">↺</span> recitate
                </button>
            </div>
        </div>

        <div class="footer-note">
            <span class="footer-decoration">✧</span>
            <i>janganlah kau tinggalkan diriku</i>
            <span class="footer-decoration">✧</span>
        </div>
    </div>

    <script>
        (function() {
            // ---- data lirik original ----
            const lyrics = [
                { text: "janganlah kau tinggalkan diriku", speed: 0.1 },
                { text: "tak kan mampu menghadapi semua", speed: 0.12 },
                { text: "hanya bersama mu ku akan bisa", speed: 0.11 },
                { text: "kau adalah darah ku", speed: 0.10 },
                { text: "kau adalah jantung ku", speed: 0.10 },
                { text: "kau adalah hidup ku lengkapi diri ku", speed: 0.10 },
                { text: "oh sayang ku kau begitu", speed: 0.1 },
                { text: "sempurnaaaaaaaaaaaaaaaaaa", speed: 0.1 }
            ];

            const delays = [0.3, 4.5, 9.3, 14.1, 18.8, 23.0, 28.0, 34.5];

            // DOM
            const animatedDiv = document.getElementById('animatedText');
            const playBtn = document.getElementById('playBtn');
            const resetBtn = document.getElementById('resetBtn');

            // state
            let activeTimeouts = [];
            let isPlaying = false;
            let globalTimer = null;
            let currentAnimationTimer = null; // untuk mengetik

            // helper: bersihkan semua timeout & interval
            function clearAllTimeouts() {
                for (let id of activeTimeouts) {
                    clearTimeout(id);
                }
                activeTimeouts = [];
                if (globalTimer) {
                    clearTimeout(globalTimer);
                    globalTimer = null;
                }
                if (currentAnimationTimer) {
                    clearTimeout(currentAnimationTimer);
                    currentAnimationTimer = null;
                }
            }

            // reset penuh
            function fullReset(resetToHeart = true) {
                clearAllTimeouts();
                isPlaying = false;
                playBtn.disabled = false;
                resetBtn.disabled = true;
                if (resetToHeart) {
                    animatedDiv.innerHTML = '💗';
                }
                // sembunyikan kemungkinan kursor berkedip (tak ada)
            }

            // mengetik per karakter dengan keindahan
            function typeTextToElement(finalText, charDelayMs, callback) {
                let index = 0;
                animatedDiv.innerHTML = ''; 

                function type() {
                    if (index < finalText.length) {
                        animatedDiv.innerHTML += finalText.charAt(index);
                        index++;
                        currentAnimationTimer = setTimeout(type, charDelayMs);
                    } else {
                        // selesai
                        currentAnimationTimer = null;
                        if (callback) callback();
                    }
                }
                type();
            }

            // jadwal lirik
            function scheduleLyric(lyricObj, delaySec) {
                const timerId = setTimeout(() => {
                    // hapus dari daftar aktif
                    const idx = activeTimeouts.indexOf(timerId);
                    if (idx > -1) activeTimeouts.splice(idx, 1);

                    // mulai animasi ketik
                    typeTextToElement(lyricObj.text, lyricObj.speed * 1000, () => {});
                }, delaySec * 1000);
                activeTimeouts.push(timerId);
            }

            // mulai semua
            function startSong() {
                if (isPlaying) return;
                fullReset(false);           // bersihkan tapi jangan ganti icon (nanti ditimpa)
                isPlaying = true;
                playBtn.disabled = true;
                resetBtn.disabled = false;
                animatedDiv.innerHTML = ''; // kosongkan, siap ngetik

                // jadwalkan semua lirik
                for (let i = 0; i < lyrics.length; i++) {
                    scheduleLyric(lyrics[i], delays[i]);
                }

                // perkiraan akhir lagu (sama seperti sebelumnya)
                const lastDelay = delays[delays.length - 1];
                const lastLyric = lyrics[lyrics.length - 1];
                const lastDuration = lastLyric.text.length * lastLyric.speed + 0.7; 
                const totalDuration = (lastDelay + lastDuration) * 1000 + 400;

                globalTimer = setTimeout(() => {
                    if (isPlaying) {
                        isPlaying = false;
                        playBtn.disabled = false;
                        resetBtn.disabled = true;
                    }
                    globalTimer = null;
                }, totalDuration);
            }

            // event
            playBtn.addEventListener('click', startSong);
            resetBtn.addEventListener('click', () => {
                fullReset(true);
            });

            // inisialisasi
            fullReset(true);
        })();
    </script>
    <!-- subtle extra notes: tampilan dreamy, dark aesthetic, hati berdetak -->
</body>
</html>