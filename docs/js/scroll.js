// This file manages scroll-related functionalities, including parallax effects and scroll-triggered animations.

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Parallax effect for the hero section
    const heroSection = document.querySelector('.hero-section');
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        heroSection.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    });

    // Scroll-triggered animations using GSAP
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 50,
            duration: 1
        });
    });

    // 滚动指示器交互效果
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const scrollText = document.querySelector('.scroll-text');
    const scrollArrow = document.querySelector('.scroll-arrow');
    
    let lastScrollY = window.scrollY;
    let scrollDirection = 'down';
    let contentSections = ['#hero', '#about-game', '#how-it-works', '#about-us'];
    let currentSection = 0;
    
    // 滚动文字内容数组
    const scrollTexts = [
        '向下探索',
        '了解游戏',
        '查看运作',
        '认识团队',
        '返回顶部'
    ];
    
    // 滚动监听
    window.addEventListener('scroll', function() {
        const scrollY = window.scrollY;
        scrollDirection = scrollY > lastScrollY ? 'down' : 'up';
        lastScrollY = scrollY;
        
        // 检测当前在哪个区域
        const newSection = getCurrentSection();
        
        if (newSection !== currentSection) {
            currentSection = newSection;
            updateScrollText();
        }
        
        // 滚动时添加活跃状态
        if (Math.abs(scrollY - lastScrollY) > 5) {
            scrollIndicator.classList.add('scroll-active');
            
            setTimeout(() => {
                scrollIndicator.classList.remove('scroll-active');
            }, 300);
        }
        
        // 根据滚动位置隐藏/显示滚动指示器
        if (scrollY > window.innerHeight * 0.8) {
            scrollIndicator.style.opacity = '0.3';
        } else {
            scrollIndicator.style.opacity = '1';
        }
    });
    
    // 点击滚动指示器
    scrollIndicator.addEventListener('click', function() {
        const nextSection = getNextSection();
        if (nextSection) {
            nextSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
            
            // 触发文字变大动画
            triggerTextZoom();
        }
    });
    
    // 获取当前所在区域
    function getCurrentSection() {
        const scrollY = window.scrollY + window.innerHeight / 2;
        
        for (let i = contentSections.length - 1; i >= 0; i--) {
            const section = document.querySelector(contentSections[i]);
            if (section && scrollY >= section.offsetTop) {
                return i;
            }
        }
        return 0;
    }
    
    // 获取下一个区域
    function getNextSection() {
        if (currentSection < contentSections.length - 1) {
            return document.querySelector(contentSections[currentSection + 1]);
        } else {
            // 如果是最后一个区域，返回顶部
            return document.querySelector('#hero');
        }
    }
    
    // 更新滚动文字
    function updateScrollText() {
        const newText = scrollTexts[Math.min(currentSection + 1, scrollTexts.length - 1)];
        
        // 添加变化动画
        scrollText.classList.add('content-change');
        
        setTimeout(() => {
            scrollText.textContent = newText;
        }, 300);
        
        setTimeout(() => {
            scrollText.classList.remove('content-change');
        }, 600);
    }
    
    // 触发文字放大动画
    function triggerTextZoom() {
        scrollText.classList.add('content-change');
        
        setTimeout(() => {
            scrollText.classList.remove('content-change');
        }, 600);
    }
    
    // 鼠标进入时的额外效果
    scrollIndicator.addEventListener('mouseenter', function() {
        scrollText.style.transform = 'scale(1.2)';
        scrollText.style.color = '#00ff9f';
        scrollArrow.style.transform = 'scale(1.1)';
    });
    
    scrollIndicator.addEventListener('mouseleave', function() {
        scrollText.style.transform = 'scale(1)';
        scrollText.style.color = 'rgba(255, 255, 255, 0.7)';
        scrollArrow.style.transform = 'scale(1)';
    });
    
    // 键盘快捷键支持
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowDown' || e.key === 'Space') {
            e.preventDefault();
            scrollIndicator.click();
        }
    });
    
    // 初始化文字
    scrollText.textContent = scrollTexts[0];
});