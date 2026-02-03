/*
 * Dr. Organic Men - Interactive Systems
 * Modules: Cursor, Parallax, Data Loader
 */

document.addEventListener('DOMContentLoaded', () => {
    initCustomCursor();
    initParallax();
    initSystemBoot();
});

/* 1. Custom Precision Cursor */
function initCustomCursor() {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    const cursorDot = document.createElement('div');
    cursorDot.classList.add('cursor-dot');
    document.body.appendChild(cursorDot);

    document.addEventListener('mousemove', (e) => {
        // Main circle (delayed)
        cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        // Center dot (instant)
        cursorDot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    });

    // Hover effects
    const interactiveElements = document.querySelectorAll('a, button, .log-item');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-hover');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-hover');
        });
    });
}

/* 2. 3D Parallax Effect */
function initParallax() {
    const bottle = document.querySelector('.bottle-parallax-wrapper');
    const headline = document.querySelector('.hero-text');
    const bg = document.querySelector('.bg-texture');

    document.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth - e.pageX * 2) / 100;
        const y = (window.innerHeight - e.pageY * 2) / 100;

        // Bottle moves opposite to mouse for depth
        if (bottle) {
            bottle.style.transform = `translateX(${x}px) translateY(${y}px)`;
        }

        // Headline moves slightly less
        if (headline) {
            headline.style.transform = `translateY(-50%) translateX(${x * 0.5}px) translateY(${y * 0.5}px)`;
            // Note: translateY(-50%) preserves the original centering
        }

        // Background moves very slowly
        if (bg) {
            bg.style.transform = `scale(1.05) translateX(${x * 0.2}px) translateY(${y * 0.2}px)`;
        }
    });
}

/* 3. Sidebar System Boot Effect */
function initSystemBoot() {
    const logItems = document.querySelectorAll('.log-item');

    // Staggered reveal
    logItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.animation = `slideInRight 0.5s ease forwards ${0.8 + (index * 0.2)}s`;
    });

    // Simulation Removed - Data is now static for immediate view
    // const fetchingText = document.querySelector('.log-item span[style*="grey"]');
    // if (fetchingText) { ... }
}
