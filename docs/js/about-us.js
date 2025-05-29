// 关于我们区域的交互动画
document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.querySelector('#about-us');
    const techItems = document.querySelectorAll('.tech-item');
    const statItems = document.querySelectorAll('.stat-item');
    const teamSections = document.querySelectorAll('.team-section');
    
    // 数字动画
    function animateNumbers() {
        statItems.forEach(item => {
            const numberElement = item.querySelector('.stat-number');
            const targetNumber = numberElement.textContent;
            const isKFormat = targetNumber.includes('K');
            const isPlusFormat = targetNumber.includes('+');
            
            let numericValue = parseFloat(targetNumber.replace(/[K+]/g, ''));
            if (isKFormat) numericValue *= 1000;
            
            let currentNumber = 0;
            const increment = numericValue / 60; // 60帧动画
            
            const timer = setInterval(() => {
                currentNumber += increment;
                if (currentNumber >= numericValue) {
                    currentNumber = numericValue;
                    clearInterval(timer);
                }
                
                let displayNumber = Math.floor(currentNumber);
                if (isKFormat && displayNumber >= 1000) {
                    displayNumber = (displayNumber / 1000).toFixed(1) + 'K';
                }
                if (isPlusFormat) {
                    displayNumber += '+';
                }
                
                numberElement.textContent = displayNumber;
            }, 16);
        });
    }
    
    // 技术图标旋转动画
    techItems.forEach((item, index) => {
        const icon = item.querySelector('.tech-icon');
        
        item.addEventListener('mouseenter', () => {
            icon.style.transform = 'rotate(360deg) scale(1.1)';
            icon.style.transition = 'transform 0.6s ease';
        });
        
        item.addEventListener('mouseleave', () => {
            icon.style.transform = 'rotate(0deg) scale(1)';
        });
        
        // 延迟显示动画
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, index * 100);
    });
    
    // 团队区域悬停效果
    teamSections.forEach(section => {
        section.addEventListener('mouseenter', () => {
            section.style.background = 'rgba(0, 255, 159, 0.05)';
        });
        
        section.addEventListener('mouseleave', () => {
            section.style.background = 'rgba(255, 255, 255, 0.02)';
        });
    });
    
    // 滚动触发动画
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateNumbers();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    if (aboutSection) {
        observer.observe(aboutSection);
    }
    
    // 初始化技术项目透明度
    techItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.6s ease';
    });
});