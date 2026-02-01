/* Reset dan dasar */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body {
    background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.container {
    display: flex;
    max-width: 1000px;
    width: 100%;
    background-color: white;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
}

/* Panel login */
.login-container {
    flex: 1;
    padding: 40px;
    max-width: 500px;
}

.header {
    margin-bottom: 30px;
    text-align: center;
}

.header h1 {
    color: #333;
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.header h1 i {
    color: #4a6cf7;
}

.subtitle {
    color: #666;
    font-size: 14px;
}

/* Form */
#loginForm {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.input-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.input-group label {
    font-weight: 500;
    color: #444;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 8px;
}

.input-with-icon {
    position: relative;
}

.input-with-icon input {
    width: 100%;
    padding: 14px 45px 14px 45px;
    border: 2px solid #e1e5ee;
    border-radius: 10px;
    font-size: 15px;
    transition: all 0.3s;
    outline: none;
}

.input-with-icon input:focus {
    border-color: #4a6cf7;
    box-shadow: 0 0 0 3px rgba(74, 108, 247, 0.1);
}

.input-icon {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: #777;
}

.toggle-password {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: #777;
    cursor: pointer;
    font-size: 16px;
}

.error-message {
    color: #e74c3c;
    font-size: 13px;
    min-height: 18px;
    margin-top: 4px;
}

/* Remember me dan lupa password */
.remember-forgot {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;
}

.remember-me {
    display: flex;
    align-items: center;
    gap: 8px;
}

.remember-me input {
    width: 16px;
    height: 16px;
    cursor: pointer;
}

.remember-me label {
    font-size: 14px;
    color: #555;
    cursor: pointer;
}

.forgot-password {
    font-size: 14px;
    color: #4a6cf7;
    text-decoration: none;
    transition: color 0.3s;
}

.forgot-password:hover {
    color: #2a4bd7;
    text-decoration: underline;
}

/* Tombol login */
.login-btn {
    background: linear-gradient(to right, #4a6cf7, #6a11cb);
    color: white;
    border: none;
    padding: 15px;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition: all 0.3s;
    margin-top: 10px;
}

.login-btn:hover {
    background: linear-gradient(to right, #3a5ce5, #5a0bb5);
    transform: translateY(-2px);
    box-shadow: 0 7px 15px rgba(74, 108, 247, 0.3);
}

.login-btn:active {
    transform: translateY(0);
}

/* Divider */
.divider {
    display: flex;
    align-items: center;
    text-align: center;
    margin: 20px 0;
    color: #888;
    font-size: 14px;
}

.divider::before,
.divider::after {
    content: "";
    flex: 1;
    border-bottom: 1px solid #e1e5ee;
}

.divider span {
    padding: 0 15px;
}

/* Login sosial */
.social-login {
    display: flex;
    gap: 15px;
}

.social-btn {
    flex: 1;
    padding: 12px;
    border-radius: 10px;
    border: 2px solid #e1e5ee;
    background: white;
    font-weight: 500;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition: all 0.3s;
}

.social-btn.google:hover {
    background-color: #f8f9fa;
    border-color: #ddd;
}

.social-btn.facebook {
    color: #3b5998;
}

.social-btn.facebook:hover {
    background-color: #f0f2f5;
    border-color: #3b5998;
}

/* Link pendaftaran */
.register-link {
    text-align: center;
    margin-top: 25px;
    font-size: 14px;
    color: #666;
}

.register-link a {
    color: #4a6cf7;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
}

.register-link a:hover {
    text-decoration: underline;
    color: #2a4bd7;
}

/* Panel welcome */
.welcome-panel {
    flex: 1;
    background: linear-gradient(135deg, #4a6cf7 0%, #6a11cb 100%);
    padding: 40px;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.welcome-content h2 {
    font-size: 32px;
    margin-bottom: 15px;
    font-weight: 600;
}

.welcome-content p {
    margin-bottom: 30px;
    line-height: 1.6;
    opacity: 0.9;
}

.features {
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-top: 20px;
}

.feature {
    display: flex;
    gap: 15px;
    align-items: flex-start;
}

.feature i {
    font-size: 22px;
    background: rgba(255, 255, 255, 0.2);
    padding: 12px;
    border-radius: 10px;
    margin-top: 5px;
}

.feature h3 {
    font-size: 18px;
    margin-bottom: 5px;
}

.feature p {
    font-size: 14px;
    opacity: 0.8;
    margin-bottom: 0;
}

/* Notification */
.notification {
    position: fixed;
    top: 20px;
    right: 20px;
    background: #2ecc71;
    color: white;
    padding: 15px 20px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    transform: translateX(150%);
    transition: transform 0.5s ease;
    z-index: 1000;
}

.notification.show {
    transform: translateX(0);
}

/* Responsive */
@media (max-width: 900px) {
    .container {
        flex-direction: column;
        max-width: 500px;
    }
    
    .welcome-panel {
        order: -1;
        padding: 30px;
    }
    
    .welcome-content h2 {
        font-size: 26px;
    }
    
    .social-login {
        flex-direction: column;
    }
}

@media (max-width: 480px) {
    .login-container {
        padding: 30px 20px;
    }
    
    .welcome-panel {
        padding: 25px 20px;
    }
    
    .remember-forgot {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }
}