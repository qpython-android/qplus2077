// 响应式交互增强
document.addEventListener('DOMContentLoaded', function() {
    const backToTopBtn = document.getElementById('backToTop');
    
    // 返回顶部按钮控制
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    
    // 返回顶部功能
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // 响应式布局检测
    function checkScreenSize() {
        const isMobile = window.innerWidth <= 768;
        const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024;
        
        // 根据屏幕尺寸调整动画
        const techItems = document.querySelectorAll('.tech-item');
        const statItems = document.querySelectorAll('.stat-item');
        
        if (isMobile) {
            // 移动端优化
            techItems.forEach(item => {
                item.style.minHeight = 'auto';
            });
            statItems.forEach(item => {
                item.style.minHeight = 'auto';
            });
        }
    }
    
    // 初始检查和窗口大小变化监听
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    // 触摸设备优化
    if ('ontouchstart' in window) {
        const hoverElements = document.querySelectorAll('.tech-item, .stat-item, .social-link');
        
        hoverElements.forEach(element => {
            element.addEventListener('touchstart', function() {
                this.classList.add('touch-active');
            });
            
            element.addEventListener('touchend', function() {
                setTimeout(() => {
                    this.classList.remove('touch-active');
                }, 150);
            });
        });
    }
});