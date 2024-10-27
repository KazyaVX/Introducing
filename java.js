const professions = ["Naufal Lutfy N.", "Programmer", "UI/UX"];
        let index = 0;
        let charIndex = 0;
        let deleting = false;

        function type() {
            const currentText = professions[index];
            const typingContainer = document.getElementById("typing");

            if (!deleting && charIndex <= currentText.length) {
                // Menulis teks
                typingContainer.textContent = currentText.slice(0, charIndex++);
                setTimeout(type, 100);
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