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
    
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const body = document.body;
    
    // 创建遮罩层
    let overlay = document.querySelector('.nav-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'nav-overlay';
        body.appendChild(overlay);
    }
    
    // 汉堡菜单点击事件
    if (hamburger) {
        hamburger.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            toggleMenu();
        });
    }
    
    // 遮罩层点击关闭菜单
    overlay.addEventListener('click', function() {
        closeMenu();
    });
    
    // 导航链接点击事件
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // 检查是否在移动端视图
            if (window.innerWidth <= 768) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                
                // 更新活动状态
                navLinks.forEach(navLink => navLink.classList.remove('active'));
                this.classList.add('active');
                
                // 关闭菜单
                closeMenu();
                
                // 延迟滚动到目标位置
                setTimeout(() => {
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        const navbar = document.querySelector('.navbar');
                        const navbarHeight = navbar ? navbar.offsetHeight : 70;
                        const offsetTop = targetElement.offsetTop - navbarHeight;
                        
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                }, 300);
            }
        });
    });
    
    // 窗口大小改变时重置菜单状态
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });
    
    // ESC键关闭菜单
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            closeMenu();
        }
    });
    
    // 点击菜单外部关闭菜单
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768 && 
            navMenu.classList.contains('active') && 
            !navMenu.contains(e.target) && 
            !hamburger.contains(e.target)) {
            closeMenu();
        }
    });
    
    // 切换菜单函数
    function toggleMenu() {
        const isActive = navMenu.classList.contains('active');
        
        if (isActive) {
            closeMenu();
        } else {
            openMenu();
        }
    }
    
    // 打开菜单函数
    function openMenu() {
        hamburger.classList.add('active');
        navMenu.classList.add('active');
        overlay.classList.add('active');
        body.classList.add('menu-open');
        
        // 防止背景滚动
        const scrollY = window.scrollY;
        body.style.position = 'fixed';
        body.style.top = `-${scrollY}px`;
        body.style.width = '100%';
    }
    
    // 关闭菜单函数
    function closeMenu() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        overlay.classList.remove('active');
        body.classList.remove('menu-open');
        
        // 恢复背景滚动
        const scrollY = body.style.top;
        body.style.position = '';
        body.style.top = '';
        body.style.width = '';
        if (scrollY) {
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }
    }
    
    // 触摸滑动关闭菜单功能
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;
    
    navMenu.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });
    
    navMenu.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
        const deltaX = touchEndX - touchStartX;
        const deltaY = Math.abs(touchEndY - touchStartY);
        
        // 如果水平滑动距离大于垂直滑动距离，且向右滑动超过50px
        if (Math.abs(deltaX) > deltaY && deltaX > 50) {
            closeMenu();
        }
    }
    
    // 滚动时更新导航高亮（桌面端）
    if (window.innerWidth > 768) {
        const sections = document.querySelectorAll('section[id]');
        
        window.addEventListener('scroll', function() {
            if (window.innerWidth > 768) {
                const scrollPos = window.scrollY + 100;
                
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;
                    const sectionId = section.getAttribute('id');
                    
                    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                        navLinks.forEach(link => {
                            link.classList.remove('active');
                            if (link.getAttribute('href') === `#${sectionId}`) {
                                link.classList.add('active');
                            }
                        });
                    }
                });
            }
        });
    }
});