// Mengambil elemen DOM
const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const togglePasswordBtn = document.getElementById('togglePassword');
const loginBtn = document.getElementById('loginBtn');
const usernameError = document.getElementById('usernameError');
const passwordError = document.getElementById('passwordError');
const notification = document.getElementById('notification');

// Data dummy untuk validasi
const dummyCredentials = {
    username: "user123",
    password: "password123"
};

// Event listener untuk toggle password visibility
togglePasswordBtn.addEventListener('click', function() {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    
    // Ganti ikon mata
    const eyeIcon = this.querySelector('i');
    eyeIcon.classList.toggle('fa-eye');
    eyeIcon.classList.toggle('fa-eye-slash');
});

// Validasi form input
function validateForm() {
    let isValid = true;
    
    // Reset pesan error
    usernameError.textContent = '';
    passwordError.textContent = '';
    
    // Validasi username
    const username = usernameInput.value.trim();
    if (!username) {
        usernameError.textContent = 'Username harus diisi';
        isValid = false;
    } else if (username.length < 3) {
        usernameError.textContent = 'Username minimal 3 karakter';
        isValid = false;
    }
    
    // Validasi password
    const password = passwordInput.value.trim();
    if (!password) {
        passwordError.textContent = 'Password harus diisi';
        isValid = false;
    } else if (password.length < 6) {
        passwordError.textContent = 'Password minimal 6 karakter';
        isValid = false;
    }
    
    return isValid;
}

// Simulasi proses login
function login(username, password) {
    // Simulasi delay jaringan
    loginBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Memproses...';
    loginBtn.disabled = true;
    
    setTimeout(() => {
        // Validasi kredensial (dalam aplikasi nyata, ini akan dilakukan di server)
        if (username === dummyCredentials.username && password === dummyCredentials.password) {
            // Login sukses
            showNotification('Login berhasil! Mengalihkan...', true);
            
            // Simulasi pengalihan ke halaman lain
            setTimeout(() => {
                alert(`Login berhasil! Selamat datang, ${username}.`);
                resetForm();
            }, 2000);
        } else {
            // Login gagal
            showNotification('Username atau password salah', false);
            loginBtn.innerHTML = '<span>Login</span><i class="fas fa-sign-in-alt"></i>';
            loginBtn.disabled = false;
            
            // Tampilkan pesan error spesifik
            if (username !== dummyCredentials.username) {
                usernameError.textContent = 'Username tidak ditemukan';
            } else {
                passwordError.textContent = 'Password salah';
            }
        }
    }, 1500);
}

// Menampilkan notifikasi
function showNotification(message, isSuccess) {
    const icon = notification.querySelector('i');
    const text = notification.querySelector('span');
    
    // Set pesan dan warna berdasarkan status
    text.textContent = message;
    
    if (isSuccess) {
        notification.style.backgroundColor = '#2ecc71';
        icon.className = 'fas fa-check-circle';
    } else {
        notification.style.backgroundColor = '#e74c3c';
        icon.className = 'fas fa-exclamation-circle';
    }
    
    // Tampilkan notifikasi
    notification.classList.add('show');
    
    // Sembunyikan setelah 3 detik
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Reset form
function resetForm() {
    loginForm.reset();
    usernameError.textContent = '';
    passwordError.textContent = '';
    passwordInput.type = 'password';
    togglePasswordBtn.querySelector('i').className = 'fas fa-eye';
    loginBtn.innerHTML = '<span>Login</span><i class="fas fa-sign-in-alt"></i>';
    loginBtn.disabled = false;
}

// Event listener untuk submit form
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (validateForm()) {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        login(username, password);
    }
});

// Validasi real-time untuk username
usernameInput.addEventListener('input', function() {
    const username = this.value.trim();
    
    if (username.length > 0 && username.length < 3) {
        usernameError.textContent = 'Username minimal 3 karakter';
    } else {
        usernameError.textContent = '';
    }
});

// Validasi real-time untuk password
passwordInput.addEventListener('input', function() {
    const password = this.value.trim();
    
    if (password.length > 0 && password.length < 6) {
        passwordError.textContent = 'Password minimal 6 karakter';
    } else {
        passwordError.textContent = '';
    }
});

// Event listener untuk tombol login sosial
document.querySelector('.social-btn.google').addEventListener('click', function() {
    showNotification('Fitur login dengan Google belum tersedia', false);
});

document.querySelector('.social-btn.facebook').addEventListener('click', function() {
    showNotification('Fitur login dengan Facebook belum tersedia', false);
});

// Event listener untuk lupa password
document.querySelector('.forgot-password').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Fitur lupa password: Silakan hubungi administrator untuk mereset password Anda.');
});

// Event listener untuk link pendaftaran
document.querySelector('.register-link a').addEventListener('click', function(e) {
    e.preventDefault();
    alert('Fitur pendaftaran akun belum tersedia. Silakan coba lagi nanti.');
});

// Inisialisasi
console.log('Halaman login siap digunakan!');