/**
 * OTP Generator JavaScript
 * Fungsi untuk menghasilkan kode OTP berdasarkan email yang dimasukkan
 */

document.addEventListener("DOMContentLoaded", function() {
    // Ambil elemen-elemen yang diperlukan
    const button = document.getElementById("otp-button");
    const emailInput = document.getElementById("otp-email");
    const otpResult = document.getElementById("otp-result");
    const otpOutput = document.getElementById("otp-output");
    const otpError = document.getElementById("otp-error");
    
    // Konfigurasi - email yang diharapkan dan panjang OTP
    const expectedEmail = "stephaniestudio@motionisme.io";
    const otpLength = 6;
    
    // Fungsi untuk menghasilkan OTP random
    function generateOTP(length) {
        let otp = "";
        for (let i = 0; i < length; i++) {
            otp += Math.floor(Math.random() * 10);
        }
        return otp;
    }
    
    // Fungsi untuk menampilkan hasil
    function showResult(message, isSuccess = true) {
        if (isSuccess) {
            otpOutput.textContent = message;
            otpResult.style.display = "block";
            otpError.style.display = "none";
        } else {
            otpError.textContent = message;
            otpError.style.display = "block";
            otpResult.style.display = "none";
        }
    }
    
    // Fungsi untuk menyembunyikan semua hasil
    function hideResults() {
        otpResult.style.display = "none";
        otpError.style.display = "none";
    }
    
    // Fungsi untuk memvalidasi email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Event listener untuk tombol generate
    if (button && emailInput) {
        button.addEventListener("click", function() {
            // Reset tampilan hasil sebelumnya
            hideResults();
            
            // Ambil nilai email dan bersihkan
            const email = emailInput.value.trim().toLowerCase();
            
            // Validasi email kosong
            if (!email) {
                showResult("Silakan masukkan alamat email terlebih dahulu.", false);
                return;
            }
            
            // Validasi format email
            if (!isValidEmail(email)) {
                showResult("Format email tidak valid. Silakan periksa kembali.", false);
                return;
            }
            
            // Cek apakah email sesuai dengan yang diharapkan
            if (email === expectedEmail.toLowerCase()) {
                // Generate OTP
                const otp = generateOTP(otpLength);
                
                // Ambil teks sukses dari elemen tersembunyi (untuk i18n)
                let successText = document.querySelector('[data-i18n="otp.success"]');
                successText = successText ? successText.textContent : "Kode OTP Anda adalah:";
                
                // Tampilkan hasil
                showResult(`${successText} ${otp}`, true);
                
                // Tambahkan efek animasi
                otpResult.style.animation = "fadeInUp 0.5s ease";
                
            } else {
                // Email tidak sesuai
                let invalidText = document.querySelector('[data-i18n="otp.invalid"]');
                invalidText = invalidText ? invalidText.textContent : "Email tidak valid. Hanya email stephaniestudio@motionisme.io yang didukung.";
                
                showResult(invalidText, false);
                
                // Tambahkan efek shake pada input
                emailInput.style.animation = "shake 0.5s ease";
                setTimeout(() => {
                    emailInput.style.animation = "";
                }, 500);
            }
        });
        
        // Event listener untuk Enter key pada input email
        emailInput.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                button.click();
            }
        });
        
        // Event listener untuk membersihkan hasil saat mengetik
        emailInput.addEventListener("input", function() {
            hideResults();
        });
    }
    
    // Mobile menu toggle (jika ada)
    const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
    const mainNav = document.querySelector(".main-nav");
    
    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener("click", function() {
            mainNav.classList.toggle("active");
            this.classList.toggle("active");
        });
    }
});

// CSS Animations (ditambahkan via JavaScript untuk kompatibilitas)
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
        20%, 40%, 60%, 80% { transform: translateX(5px); }
    }
    
    .main-nav.active {
        display: block !important;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        padding: 1rem;
    }
    
    .main-nav.active ul {
        flex-direction: column;
        gap: 1rem;
    }
    
    .mobile-menu-toggle.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .mobile-menu-toggle.active span:nth-child(2) {
        opacity: 0;
    }
    
    .mobile-menu-toggle.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
`;
document.head.appendChild(style);

// Fungsi utilitas untuk debugging (bisa dihapus di production)
window.otpDebug = {
    expectedEmail: "stephaniestudio@motionisme.io",
    testOTP: function() {
        console.log("Testing OTP generation...");
        const testOTP = Math.random().toString().substr(2, 6);
        console.log("Generated OTP:", testOTP);
        return testOTP;
    }
};
