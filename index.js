<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edukasi Pengelolaan Sampah</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            background-color: #f0f9f0;
            color: #333;
            line-height: 1.6;
        }

        header {
            background: linear-gradient(to right, #2E7D32, #4CAF50);
            color: white;
            padding: 1.5rem;
            text-align: center;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }

        .logo-container {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 10px;
        }

        .logo-container i {
            font-size: 2.5rem;
            margin-right: 15px;
        }

        h1 {
            font-size: 2.2rem;
            margin-bottom: 0.5rem;
        }

        .tagline {
            font-size: 1.1rem;
            opacity: 0.9;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }

        .intro {
            background-color: white;
            border-radius: 10px;
            padding: 25px;
            margin-bottom: 30px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }

        .intro img {
            max-width: 100%;
            border-radius: 10px;
            margin-bottom: 20px;
            max-height: 300px;
            object-fit: cover;
        }

        .intro p {
            font-size: 1.1rem;
            margin-bottom: 15px;
            max-width: 800px;
        }

        .stats {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            margin: 25px 0;
            gap: 15px;
        }

        .stat-box {
            background-color: white;
            border-radius: 10px;
            padding: 20px;
            width: 200px;
            text-align: center;
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
            transition: transform 0.3s;
        }

        .stat-box:hover {
            transform: translateY(-5px);
        }

        .stat-box i {
            font-size: 2.5rem;
            color: #4CAF50;
            margin-bottom: 10px;
        }

        .stat-box h3 {
            font-size: 1.8rem;
            color: #2E7D32;
            margin-bottom: 5px;
        }

        .content-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 25px;
            margin-bottom: 30px;
        }

        .card {
            background-color: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
            transition: transform 0.3s;
        }

        .card:hover {
            transform: translateY(-5px);
        }

        .card-img {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }

        .card-content {
            padding: 20px;
        }

        .card h3 {
            color: #2E7D32;
            margin-bottom: 15px;
            font-size: 1.4rem;
        }

        .card ul {
            padding-left: 20px;
            margin-bottom: 15px;
        }

        .card li {
            margin-bottom: 8px;
        }

        .jenis-sampah {
            background-color: white;
            border-radius: 10px;
            padding: 25px;
            margin-bottom: 30px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        }

        .jenis-sampah h2 {
            color: #2E7D32;
            margin-bottom: 20px;
            text-align: center;
            font-size: 1.8rem;
        }

        .jenis-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
        }

        .jenis-item {
            flex: 1;
            min-width: 250px;
            max-width: 300px;
            text-align: center;
            padding: 15px;
            border-radius: 10px;
            color: white;
        }

        .organik {
            background-color: #4CAF50;
        }

        .anorganik {
            background-color: #2196F3;
        }

        .b3 {
            background-color: #f44336;
        }

        .jenis-icon {
            font-size: 3rem;
            margin-bottom: 15px;
        }

        .tips {
            background-color: white;
            border-radius: 10px;
            padding: 25px;
            margin-bottom: 30px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        }

        .tips h2 {
            color: #2E7D32;
            margin-bottom: 20px;
            text-align: center;
            font-size: 1.8rem;
        }

        .tips-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
        }

        .tip {
            display: flex;
            align-items: flex-start;
            gap: 15px;
        }

        .tip i {
            color: #4CAF50;
            font-size: 1.5rem;
            margin-top: 5px;
        }

        footer {
            background-color: #2E7D32;
            color: white;
            text-align: center;
            padding: 25px;
            margin-top: 30px;
        }

        .footer-content {
            max-width: 800px;
            margin: 0 auto;
        }

        .social-icons {
            margin-top: 15px;
        }

        .social-icons a {
            color: white;
            font-size: 1.5rem;
            margin: 0 10px;
            transition: color 0.3s;
        }

        .social-icons a:hover {
            color: #C8E6C9;
        }

        @media (max-width: 768px) {
            .content-grid {
                grid-template-columns: 1fr;
            }
            
            .stats {
                flex-direction: column;
                align-items: center;
            }
            
            .stat-box {
                width: 100%;
                max-width: 300px;
            }
        }
    </style>
</head>
<body>
    <header>
        <div class="logo-container">
            <i class="fas fa-recycle"></i>
            <div>
                <h1>Edukasi Pengelolaan Sampah</h1>
                <p class="tagline">Mari bersama menjaga bumi dengan mengelola sampah dengan bijak</p>
            </div>
        </div>
    </header>

    <div class="container">
        <section class="intro">
            <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Pengelolaan Sampah">
            <p>Setiap hari, Indonesia menghasilkan sekitar 64 juta ton sampah. Tanpa pengelolaan yang tepat, sampah dapat mencemari lingkungan, merusak ekosistem, dan membahayakan kesehatan manusia.</p>
            <p>Edukasi ini bertujuan untuk meningkatkan kesadaran tentang pentingnya pengelolaan sampah yang baik dan benar.</p>
        </section>

        <div class="stats">
            <div class="stat-box">
                <i class="fas fa-trash-alt"></i>
                <h3>64 Juta Ton</h3>
                <p>Sampah per tahun di Indonesia</p>
            </div>
            <div class="stat-box">
                <i class="fas fa-recycle"></i>
                <h3>60%</h3>
                <p>Sampah organik yang bisa dikompos</p>
            </div>
            <div class="stat-box">
                <i class="fas fa-tree"></i>
                <h3>400 Tahun</h3>
                <p>Plastik terurai di alam</p>
            </div>
        </div>

        <section class="content-grid">
            <div class="card">
                <img class="card-img" src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80" alt="Dampak Sampah">
                <div class="card-content">
                    <h3>Dampak Buruk Sampah</h3>
                    <ul>
                        <li>Pencemaran tanah dan air</li>
                        <li>Penyebaran penyakit</li>
                        <li>Banjir akibat saluran tersumbat</li>
                        <li>Kerusakan ekosistem laut</li>
                        <li>Emisi gas metana dari TPA</li>
                    </ul>
                </div>
            </div>

            <div class="card">
                <img class="card-img" src="https://images.unsplash.com/photo-1604187351574-c75ca79f5807?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Manfaat Daur Ulang">
                <div class="card-content">
                    <h3>Manfaat Pengelolaan Sampah</h3>
                    <ul>
                        <li>Lingkungan yang lebih bersih</li>
                        <li>Penghematan sumber daya alam</li>
                        <li>Penciptaan lapangan kerja baru</li>
                        <li>Pengurangan emisi gas rumah kaca</li>
                        <li>Peningkatan kesehatan masyarakat</li>
                    </ul>
                </div>
            </div>

            <div class="card">
                <img class="card-img" src="https://images.unsplash.com/photo-1558640476-437a2e9b7c7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Bank Sampah">
                <div class="card-content">
                    <h3>Konsep 3R</h3>
                    <ul>
                        <li><strong>Reduce:</strong> Kurangi penggunaan barang sekali pakai</li>
                        <li><strong>Reuse:</strong> Gunakan kembali barang yang masih bisa dipakai</li>
                        <li><strong>Recycle:</strong> Daur ulang sampah menjadi barang baru</li>
                    </ul>
                    <p>Dengan menerapkan 3R, kita dapat mengurangi jumlah sampah yang berakhir di TPA.</p>
                </div>
            </div>
        </section>

        <section class="jenis-sampah">
            <h2>Jenis-Jenis Sampah</h2>
            <div class="jenis-container">
                <div class="jenis-item organik">
                    <div class="jenis-icon">
                        <i class="fas fa-leaf"></i>
                    </div>
                    <h3>Sampah Organik</h3>
                    <p>Sampah yang berasal dari makhluk hidup, seperti sisa makanan, daun, dan kayu. Dapat diolah menjadi kompos.</p>
                </div>

                <div class="jenis-item anorganik">
                    <div class="jenis-icon">
                        <i class="fas fa-wine-bottle"></i>
                    </div>
                    <h3>Sampah Anorganik</h3>
                    <p>Sampah yang tidak mudah terurai, seperti plastik, kaca, dan logam. Dapat didaur ulang.</p>
                </div>

                <div class="jenis-item b3">
                    <div class="jenis-icon">
                        <i class="fas fa-radiation-alt"></i>
                    </div>
                    <h3>Sampah B3</h3>
                    <p>Sampah berbahaya dan beracun, seperti baterai, obat kadaluarsa, dan limbah kimia. Perlu penanganan khusus.</p>
                </div>
            </div>
        </section>

        <section class="tips">
            <h2>Tips Mengelola Sampah di Rumah</h2>
            <div class="tips-grid">
                <div class="tip">
                    <i class="fas fa-check-circle"></i>
                    <div>
                        <h3>Pilah Sampah</h3>
                        <p>Pisahkan sampah organik, anorganik, dan B3 sejak dari rumah.</p>
                    </div>
                </div>
                <div class="tip">
                    <i class="fas fa-check-circle"></i>
                    <div>
                        <h3>Buat Kompos</h3>
                        <p>Olahlah sampah organik menjadi kompos untuk tanaman.</p>
                    </div>
                </div>
                <div class="tip">
                    <i class="fas fa-check-circle"></i>
                    <div>
                        <h3>Kurangi Plastik</h3>
                        <p>Gunakan tas belanja reusable dan hindari kemasan sekali pakai.</p>
                    </div>
                </div>
                <div class="tip">
                    <i class="fas fa-check-circle"></i>
                    <div>
                        <h3>Daur Ulang Kreatif</h3>
                        <p>Manfaatkan sampah anorganik untuk kerajinan atau barang berguna.</p>
                    </div>
                </div>
                <div class="tip">
                    <i class="fas fa-check-circle"></i>
                    <div>
                        <h3>Bank Sampah</h3>
                        <p>Ikuti program bank sampah untuk menukar sampah dengan manfaat.</p>
                    </div>
                </div>
                <div class="tip">
                    <i class="fas fa-check-circle"></i>
                    <div>
                        <h3>Edukasi Keluarga</h3>
                        <p>Ajak seluruh anggota keluarga untuk peduli terhadap sampah.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>

    <footer>
        <div class="footer-content">
            <p><strong>Edukasi Pengelolaan Sampah</strong> - Mari bersama menjaga bumi untuk generasi mendatang</p>
            <p>© 2023 - Semua hak cipta dilindungi</p>
            <div class="social-icons">
                <a href="#"><i class="fab fa-facebook"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
                <a href="#"><i class="fab fa-youtube"></i></a>
            </div>
            <p style="margin-top: 15px; font-size: 0.9rem;">Sumber gambar: Unsplash.com</p>
        </div>
    </footer>

    <script>
        // Animasi sederhana untuk stat-box
        document.addEventListener('DOMContentLoaded', function() {
            const statBoxes = document.querySelectorAll('.stat-box');
            
            statBoxes.forEach(box => {
                box.addEventListener('mouseenter', function() {
                    this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
                });
                
                box.addEventListener('mouseleave', function() {
                    this.style.boxShadow = '0 5px 15px rgba(0,0,0,0.05)';
                });
            });
            
            // Menambahkan tahun saat ini di footer
            const currentYear = new Date().getFullYear();
            const footerParagraph = document.querySelector('footer p:nth-child(2)');
            footerParagraph.innerHTML = `© ${currentYear} - Semua hak cipta dilindungi`;
        });
    </script>
</body>
</html>