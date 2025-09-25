// Плавная прокрутка к секциям
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Анимация для кнопки
document.querySelector('.cta-button').addEventListener('click', function() {
    document.querySelector('#about').scrollIntoView({
        behavior: 'smooth'
    });
});

// Изменение фона навигации при скролле
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(44, 62, 80, 0.95)';
    } else {
        header.style.background = '#2c3e50';
    }
});