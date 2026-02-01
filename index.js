<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Halaman Login Sederhana</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
</head>
<body>
    <div class="container">
        <div class="login-container">
            <div class="header">
                <h1><i class="fas fa-user-circle"></i> Login</h1>
                <p class="subtitle">Masukkan kredensial Anda untuk mengakses akun</p>
            </div>
            
            <form id="loginForm">
                <div class="input-group">
                    <label for="username"><i class="fas fa-user"></i> Username</label>
                    <div class="input-with-icon">
                        <input type="text" id="username" name="username" placeholder="Masukkan username" autocomplete="off">
                        <i class="fas fa-user input-icon"></i>
                    </div>
                    <div class="error-message" id="usernameError"></div>
                </div>
                
                <div class="input-group">
                    <label for="password"><i class="fas fa-lock"></i> Password</label>
                    <div class="input-with-icon">
                        <input type="password" id="password" name="password" placeholder="Masukkan password">
                        <i class="fas fa-lock input-icon"></i>
                        <button type="button" class="toggle-password" id="togglePassword">
                            <i class="fas fa-eye"></i>
                        </button>
                    </div>
                    <div class="error-message" id="passwordError"></div>
                </div>
                
                <div class="remember-forgot">
                    <div class="remember-me">
                        <input type="checkbox" id="remember" name="remember">
                        <label for="remember">Ingat saya</label>
                    </div>
                    <a href="#" class="forgot-password">Lupa password?</a>
                </div>
                
                <button type="submit" class="login-btn" id="loginBtn">
                    <span>Login</span>
                    <i class="fas fa-sign-in-alt"></i>
                </button>
                
                <div class="divider">
                    <span>atau login dengan</span>
                </div>
                
                <div class="social-login">
                    <button type="button" class="social-btn google">
                        <i class="fab fa-google"></i> Google
                    </button>
                    <button type="button" class="social-btn facebook">
                        <i class="fab fa-facebook-f"></i> Facebook
                    </button>
                </div>
                
                <div class="register-link">
                    Belum punya akun? <a href="#">Daftar di sini</a>
                </div>
            </form>
            
            <div class="notification" id="notification">
                <i class="fas fa-check-circle"></i>
                <span>Login berhasil! Mengalihkan...</span>
            </div>
        </div>
        
        <div class="welcome-panel">
            <div class="welcome-content">
                <h2>Selamat Datang!</h2>
                <p>Masuk ke akun Anda untuk mengakses dashboard dan fitur eksklusif lainnya.</p>
                <div class="features">
                    <div class="feature">
                        <i class="fas fa-shield-alt"></i>
                        <div>
                            <h3>Keamanan Terjamin</h3>
                            <p>Data Anda dilindungi dengan enkripsi tingkat tinggi.</p>
                        </div>
                    </div>
                    <div class="feature">
                        <i class="fas fa-bolt"></i>
                        <div>
                            <h3>Akses Cepat</h3>
                            <p>Navigasi mudah ke semua fitur dengan satu login.</p>
                        </div>
                    </div>
                    <div class="feature">
                        <i class="fas fa-headset"></i>
                        <div>
                            <h3>Dukungan 24/7</h3>
                            <p>Tim support kami siap membantu kapan saja.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <script src="script.js"></script>
</body>
</html>