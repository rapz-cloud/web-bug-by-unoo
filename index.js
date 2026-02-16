<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TITLE</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        body {
            background-color: #0a0a0a;
            color: #fff;
            background-image: 
                radial-gradient(circle at 10% 20%, rgba(255, 50, 0, 0.05) 0%, transparent 20%),
                radial-gradient(circle at 90% 80%, rgba(0, 100, 255, 0.05) 0%, transparent 20%);
            min-height: 100vh;
            line-height: 1.6;
            overflow-x: hidden;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        
        /* Header Styles */
        header {
            text-align: center;
            padding: 30px 20px;
            position: relative;
            margin-bottom: 40px;
        }
        
        .header-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(45deg, #ff3a00, #0a58ca, #ff3a00);
            opacity: 0.1;
            z-index: -1;
        }
        
        .main-title {
            font-size: 4.5rem;
            font-weight: 900;
            text-transform: uppercase;
            letter-spacing: 3px;
            margin-bottom: 10px;
            background: linear-gradient(to right, #ff3a00, #ffcc00, #0a58ca);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            text-shadow: 0 0 15px rgba(255, 58, 0, 0.3);
        }
        
        .subtitle {
            font-size: 2.2rem;
            font-weight: 700;
            color: #ffcc00;
            margin-bottom: 30px;
            position: relative;
            display: inline-block;
        }
        
        .subtitle::after {
            content: "";
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 150px;
            height: 3px;
            background: linear-gradient(to right, transparent, #ff3a00, #0a58ca, transparent);
        }
        
        /* Jakarta Theme Elements */
        .jakarta-elements {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 20px;
            margin-bottom: 40px;
        }
        
        .element {
            background: rgba(20, 20, 30, 0.8);
            border-radius: 10px;
            padding: 10px 20px;
            font-weight: 600;
            border: 1px solid rgba(255, 58, 0, 0.3);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .element i {
            color: #ffcc00;
        }
        
        /* Content Grid */
        .content-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 25px;
            margin-bottom: 50px;
        }
        
        .card {
            background: rgba(20, 20, 30, 0.9);
            border-radius: 15px;
            padding: 25px;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.6);
            border: 1px solid rgba(255, 58, 0, 0.2);
            transition: transform 0.3s, box-shadow 0.3s;
            position: relative;
            overflow: hidden;
        }
        
        .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(255, 58, 0, 0.2);
        }
        
        .card::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 5px;
            background: linear-gradient(to right, #ff3a00, #ffcc00, #0a58ca);
        }
        
        .card-title {
            font-size: 1.4rem;
            font-weight: 700;
            color: #ffcc00;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .card-title i {
            font-size: 1.2rem;
        }
        
        .person-list {
            list-style-type: none;
        }
        
        .person-list li {
            padding: 12px 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            display: flex;
            align-items: center;
            gap: 15px;
            font-size: 1.1rem;
        }
        
        .person-list li:last-child {
            border-bottom: none;
        }
        
        .person-icon {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: linear-gradient(45deg, #ff3a00, #0a58ca);
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            color: white;
        }
        
        .slot {
            color: #ff3a00;
            font-weight: 700;
        }
        
        /* Footer */
        footer {
            text-align: center;
            padding: 30px;
            border-top: 1px solid rgba(255, 58, 0, 0.3);
            margin-top: 40px;
            background: rgba(10, 10, 15, 0.9);
            border-radius: 15px 15px 0 0;
        }
        
        .footer-text {
            font-size: 1rem;
            color: #aaa;
        }
        
        .footer-highlight {
            color: #ffcc00;
            font-weight: 700;
        }
        
        /* Responsive */
        @media (max-width: 768px) {
            .main-title {
                font-size: 3rem;
            }
            
            .subtitle {
                font-size: 1.8rem;
            }
            
            .content-grid {
                grid-template-columns: 1fr;
            }
            
            .element {
                padding: 8px 15px;
                font-size: 0.9rem;
            }
        }
        
        @media (max-width: 480px) {
            .main-title {
                font-size: 2.5rem;
            }
            
            .subtitle {
                font-size: 1.5rem;
            }
            
            .card {
                padding: 20px;
            }
        }
        
        /* Animation */
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .fade-in {
            animation: fadeIn 0.8s ease-out forwards;
        }
        
        /* Decorative elements */
        .street-sign {
            position: absolute;
            width: 60px;
            height: 60px;
            background: #ff3a00;
            color: white;
            font-weight: bold;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 5px;
            transform: rotate(15deg);
            opacity: 0.7;
            z-index: -1;
        }
        
        .sign-1 {
            top: 10%;
            left: 5%;
        }
        
        .sign-2 {
            bottom: 10%;
            right: 5%;
            transform: rotate(-15deg);
            background: #0a58ca;
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <div class="header-bg"></div>
            <h1 class="main-title fade-in">TITLE</h1>
            <div class="subtitle fade-in">𝐀𝐒𝐓𝐀𝐑 𝐀𝐍𝐃𝐑𝐘𝐗</div>
            
            <div class="jakarta-elements fade-in">
                <div class="element"><i class="fas fa-city"></i> Jakarta Street Culture</div>
                <div class="element"><i class="fas fa-music"></i> Urban Vibes</div>
                <div class="element"><i class="fas fa-users"></i> Community</div>
            </div>
        </header>
        
        <div class="content-grid">
            <!-- Owner Card -->
            <div class="card fade-in">
                <h2 class="card-title"><i class="fas fa-crown"></i> OWNERS</h2>
                <ul class="person-list">
                    <li>
                        <div class="person-icon">B</div>
                        <div>OWNER BOYS : <span class="slot">𝐑𝐚𝐩𝐳𝐗𝐲𝐳</span></div>
                    </li>
                    <li>
                        <div class="person-icon">G</div>
                        <div>OWNER GIRLS : <span>NOVA</span></div>
                    </li>
                </ul>
            </div>
            
            <!-- Admin Card -->
            <div class="card fade-in">
                <h2 class="card-title"><i class="fas fa-user-shield"></i> ADMIN TEAM</h2>
                <ul class="person-list">
                    <li>
                        <div class="person-icon">A</div>
                        <div>ADMIN UTAMA : <span class="slot">𝐓𝐀𝐀</span></div>
                    </li>
                    <li>
                        <div class="person-icon">S1</div>
                        <div>STAF ADMIN 1 : <span class="slot">𝐓𝐈𝐊𝐀</span></div>
                    </li>
                    <li>
                        <div class="person-icon">S2</div>
                        <div>STAF ADMIN 2 : <span class="slot">𝐑𝐀𝐙𝐙</span></div>
                    </li>
                    <li>
                        <div class="person-icon">S3</div>
                        <div>STAF ADMIN 3 : <span class="slot">𝐏𝐔𝐓𝐑𝐈</span></div>
                    </li>
                </ul>
            </div>
            
            <!-- Petinggi Card -->
            <div class="card fade-in">
                <h2 class="card-title"><i class="fas fa-star"></i> PETINGGI</h2>
                <ul class="person-list">
                    <li>
                        <div class="person-icon">PB</div>
                        <div>PETINGGI BOYS : <span class="slot">𝐒𝐋𝐎𝐓 -𝟏</span></div>
                    </li>
                    <li>
                        <div class="person-icon">PB</div>
                        <div>PETINGGI BOYS : <span class="slot">𝐒𝐋𝐎𝐓 -𝟏</span></div>
                    </li>
                    <li>
                        <div class="person-icon">PG</div>
                        <div>PETINGGI GIRLS : <span>𝐒𝐘𝐈𝐅𝐀</span></div>
                    </li>
                    <li>
                        <div class="person-icon">PG</div>
                        <div>PETINGGI GIRLS : <span class="slot">𝐒𝐋𝐎𝐓 -𝟏</span></div>
                    </li>
                </ul>
            </div>
            
            <!-- Editor Card -->
            <div class="card fade-in">
                <h2 class="card-title"><i class="fas fa-edit"></i> EDITOR</h2>
                <ul class="person-list">
                    <li>
                        <div class="person-icon">E</div>
                        <div>EDITOR : <span class="slot">𝐒𝐋𝐎𝐓 -𝟏</span></div>
                    </li>
                </ul>
                <div style="margin-top: 30px; padding: 15px; background: rgba(255, 58, 0, 0.1); border-radius: 10px; border-left: 4px solid #ffcc00;">
                    <p style="font-style: italic; color: #ffcc00;">
                        <i class="fas fa-quote-left"></i> Komunitas anak muda Jakarta dengan semangat urban dan kreativitas tanpa batas.
                    </p>
                </div>
            </div>
        </div>
        
        <footer class="fade-in">
            <p class="footer-text">
                ASTAR ANDRYX - Komunitas Urban Jakarta <span class="footer-highlight">© 2024</span>
            </p>
            <p class="footer-text" style="margin-top: 10px;">
                Tema: Anak Jalanan Modern - Kekinian tapi tetap menjaga identitas asli Jakarta
            </p>
        </footer>
    </div>
    
    <!-- Decorative street signs -->
    <div class="street-sign sign-1">JKT</div>
    <div class="street-sign sign-2">ASX</div>
    
    <script>
        // Add fade-in animation on scroll
        document.addEventListener('DOMContentLoaded', function() {
            const fadeElements = document.querySelectorAll('.fade-in');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = 1;
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, { threshold: 0.1 });
            
            fadeElements.forEach(el => {
                el.style.opacity = 0;
                el.style.transform = 'translateY(20px)';
                el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                observer.observe(el);
            });
            
            // Add hover effect to cards
            const cards = document.querySelectorAll('.card');
            cards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    const icon = this.querySelector('.person-icon');
                    if (icon) {
                        icon.style.transform = 'scale(1.1)';
                        icon.style.transition = 'transform 0.3s ease';
                    }
                });
                
                card.addEventListener('mouseleave', function() {
                    const icon = this.querySelector('.person-icon');
                    if (icon) {
                        icon.style.transform = 'scale(1)';
                    }
                });
            });
        });
    </script>
</body>
</html>