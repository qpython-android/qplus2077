// Main JavaScript file for Q+2077: Code Frontier website

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Highlight the current section in the navigation
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Mobile hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Optional: Add touch feedback for mobile devices
if ('ontouchstart' in window) {
    document.addEventListener('touchstart', function (e) {
        e.target.classList.add('touched');
    });

    document.addEventListener('touchend', function (e) {
        e.target.classList.remove('touched');
    });
}

// 移动端导航菜单控制
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.querySelector('.navbar');
    
    // 创建遮罩层
    const overlay = document.createElement('div');
    overlay.className = 'nav-overlay';
    document.body.appendChild(overlay);
    
    // 汉堡菜单点击事件
    hamburger.addEventListener('click', function() {
        toggleMobileMenu();
    });
    
    // 遮罩层点击关闭菜单
    overlay.addEventListener('click', function() {
        closeMobileMenu();
    });
    
    // 导航链接点击事件
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // 移除其他链接的active类
            navLinks.forEach(l => l.classList.remove('active'));
            // 添加当前链接的active类
            this.classList.add('active');
            
            // 在移动端点击链接后关闭菜单
            if (window.innerWidth <= 768) {
                closeMobileMenu();
            }
        });
    });
    
    // 监听窗口大小变化
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
    });
    
    // 滚动时隐藏移动端菜单
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // 向下滚动时隐藏导航栏
            navbar.style.transform = 'translateY(-100%)';
            closeMobileMenu();
        } else {
            // 向上滚动时显示导航栏
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
    
    function toggleMobileMenu() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        overlay.classList.toggle('active');
        
        // 防止背景滚动
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
    
    function closeMobileMenu() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // ESC键关闭菜单
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeMobileMenu();
        }
    });
});