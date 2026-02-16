<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TITLE</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        body {
            background-color: #0d1117;
            color: #e6edf3;
            min-height: 100vh;
            padding: 20px;
            background-image: radial-gradient(#1a2332 1px, transparent 1px);
            background-size: 20px 20px;
        }
        
        .container {
            max-width: 900px;
            margin: 0 auto;
            padding: 30px;
        }
        
        header {
            text-align: center;
            margin-bottom: 50px;
            padding-bottom: 30px;
            border-bottom: 1px solid #30363d;
        }
        
        .main-title {
            font-size: 2.8rem;
            color: #58a6ff;
            margin-bottom: 10px;
            letter-spacing: 1px;
            text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        .sub-title {
            font-size: 1.8rem;
            color: #f0f6fc;
            margin-top: 10px;
            font-weight: 300;
            letter-spacing: 0.5px;
        }
        
        .team-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 25px;
            margin-top: 40px;
        }
        
        .team-card {
            background-color: #161b22;
            border-radius: 12px;
            padding: 25px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            border: 1px solid #30363d;
            position: relative;
            overflow: hidden;
        }
        
        .team-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
        }
        
        .team-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 5px;
            height: 100%;
            background: linear-gradient(to bottom, #58a6ff, #1f6feb);
        }
        
        .role {
            font-size: 0.9rem;
            color: #8b949e;
            margin-bottom: 8px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        
        .name {
            font-size: 1.4rem;
            color: #f0f6fc;
            font-weight: 600;
        }
        
        .highlight {
            color: #58a6ff;
        }
        
        .owner-section {
            display: flex;
            justify-content: center;
            gap: 40px;
            margin-bottom: 50px;
            flex-wrap: wrap;
        }
        
        .owner-card {
            background: linear-gradient(145deg, #1a2332, #161b22);
            border-radius: 12px;
            padding: 30px;
            width: 280px;
            text-align: center;
            box-shadow: 0 6px 15px rgba(0, 0, 0, 0.25);
            border: 1px solid #30363d;
        }
        
        .owner-title {
            font-size: 1.2rem;
            color: #8b949e;
            margin-bottom: 15px;
        }
        
        .owner-name {
            font-size: 1.8rem;
            color: #f0f6fc;
            font-weight: 700;
        }
        
        .section-title {
            font-size: 1.5rem;
            color: #58a6ff;
            margin: 40px 0 20px;
            padding-bottom: 10px;
            border-bottom: 1px solid #30363d;
        }
        
        .footer {
            text-align: center;
            margin-top: 60px;
            padding-top: 30px;
            border-top: 1px solid #30363d;
            color: #8b949e;
            font-size: 0.9rem;
        }
        
        @media (max-width: 768px) {
            .container {
                padding: 15px;
            }
            
            .main-title {
                font-size: 2.2rem;
            }
            
            .sub-title {
                font-size: 1.4rem;
            }
            
            .owner-section {
                gap: 20px;
            }
            
            .team-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1 class="main-title">TITLE</h1>
            <h2 class="sub-title">𝐀𝐒𝐓𝐀𝐑 𝐀𝐍𝐃𝐑𝐘𝐗</h2>
        </header>
        
        <div class="owner-section">
            <div class="owner-card">
                <div class="owner-title">OWNER BOYS</div>
                <div class="owner-name highlight">𝐑𝐚𝐩𝐳𝐗𝐲𝐳</div>
            </div>
            
            <div class="owner-card">
                <div class="owner-title">OWNER GIRLS</div>
                <div class="owner-name highlight">NOVA</div>
            </div>
        </div>
        
        <h3 class="section-title">Administrasi Tim</h3>
        <div class="team-grid">
            <div class="team-card">
                <div class="role">ADMIN UTAMA</div>
                <div class="name highlight">𝐓𝐀𝐀</div>
            </div>
            
            <div class="team-card">
                <div class="role">STAF ADMIN 1</div>
                <div class="name highlight">𝐓𝐈𝐊𝐀</div>
            </div>
            
            <div class="team-card">
                <div class="role">STAF ADMIN 2</div>
                <div class="name highlight">𝐑𝐀𝐙𝐙</div>
            </div>
            
            <div class="team-card">
                <div class="role">STAF ADMIN 3</div>
                <div class="name highlight">𝐏𝐔𝐓𝐑𝐈</div>
            </div>
        </div>
        
        <h3 class="section-title">Petinggi Tim</h3>
        <div class="team-grid">
            <div class="team-card">
                <div class="role">PETINGGI BOYS</div>
                <div class="name highlight">𝐒𝐋𝐎𝐓 -𝟏</div>
            </div>
            
            <div class="team-card">
                <div class="role">PETINGGI BOYS</div>
                <div class="name highlight">𝐒𝐋𝐎𝐓 -𝟏</div>
            </div>
            
            <div class="team-card">
                <div class="role">PETINGGI GIRLS</div>
                <div class="name highlight">𝐒𝐘𝐈𝐅𝐀</div>
            </div>
            
            <div class="team-card">
                <div class="role">PETINGGI GIRLS</div>
                <div class="name highlight">𝐒𝐋𝐎𝐓 -𝟏</div>
            </div>
        </div>
        
        <h3 class="section-title">Editor</h3>
        <div class="team-grid">
            <div class="team-card">
                <div class="role">EDITOR</div>
                <div class="name highlight">𝐒𝐋𝐎𝐓 -𝟏</div>
            </div>
        </div>
        
        <div class="footer">
            <p>ASTAR ANDRYX Team • Tema Dark Elegant</p>
        </div>
    </div>
    
    <script>
        // Efek animasi sederhana saat halaman dimuat
        document.addEventListener('DOMContentLoaded', function() {
            const cards = document.querySelectorAll('.team-card, .owner-card');
            
            cards.forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 100 * index);
            });
        });
    </script>
</body>
</html>