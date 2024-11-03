const professions = ["Lutfy"];
        let index = 0;
        let charIndex = 0;
        let deleting = true;

        function type() {
            const currentText = professions[index];
            const typingContainer = document.getElementById("typing");

            if (!deleting && charIndex <= currentText.length) {
                // Menulis teks
                typingContainer.textContent = currentText.slice(0, charIndex++);
                setTimeout(type, 10);
            } else if (deleting && charIndex > 0) {
                // Menghapus teks
                typingContainer.textContent = currentText.slice(0, charIndex--);
                setTimeout(type, 50);
            } else if (!deleting && charIndex === currentText.length) {
                // Menunggu sebelum menghapus
                deleting = true;
                setTimeout(type, 1000);
            } else if (deleting && charIndex === 0) {
                // Pindah ke kata berikutnya setelah dihapus semua
                deleting = false;
                index = (index + 1) % professions.length;
                setTimeout(type, 200);
            }
        }

        document.addEventListener("DOMContentLoaded", type);

        function getGreeting() {
            const now = new Date();
            const hours = now.getHours();
            let greeting;

            if (hours >= 5 && hours < 12) {
                greeting = "Selamat Pagi!";
            } else if (hours >= 12 && hours < 17) {
                greeting = "Selamat Siang!";
            } else if (hours >= 17 && hours < 21) {
                greeting = "Selamat Malam!";
            } else {
                greeting = "Selamat Malam!";
            }

            // Untuk menampilkan pesan berdasarkan jam spesifik
            if (hours === 7) {
                greeting += "Selamat Pagi Awal!";
            }

            document.getElementById("greeting").innerText = greeting;
        }

        // Panggil fungsi untuk menampilkan greeting saat halaman dimuat
        window.onload = getGreeting;