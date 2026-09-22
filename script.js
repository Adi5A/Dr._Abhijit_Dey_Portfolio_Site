// 1. Dynamic Footer Year
const yearEl = document.getElementById('year');
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

// 2. Mobile Navigation Menu Toggle
const navToggle = document.getElementById('navToggle');
const navList = document.getElementById('navList');

if (navToggle && navList) {
    navToggle.addEventListener('click', () => {
        const isOpen = navList.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', isOpen);
    });
}

// 3. Interactive Schematic Viewer
document.addEventListener('DOMContentLoaded', () => {
    const listItems = document.querySelectorAll('.schematic-item');
    const viewerImg = document.getElementById('schematic-viewer-img');
    const caption = document.getElementById('schematic-caption');

    // Only run if schematic elements are present on the current page
    if (listItems.length > 0 && viewerImg) {
        listItems.forEach(item => {
            item.addEventListener('click', function () {
                // Remove active state from all items
                listItems.forEach(i => i.classList.remove('active'));

                // Add active state to clicked item
                this.classList.add('active');

                // Get new image path and text
                const newImgSrc = this.getAttribute('data-img');
                const topicTitle = this.querySelector('strong')?.innerText || '';

                // Smooth fade transition
                viewerImg.style.opacity = '0';

                setTimeout(() => {
                    viewerImg.src = newImgSrc;
                    viewerImg.alt = topicTitle + ' Schematic';
                    if (caption) {
                        caption.innerText = topicTitle;
                    }
                    viewerImg.style.opacity = '1';
                }, 200);
            });
        });
    }
});