/**
 * Documentation Template Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
    // Back to Top functionality
    const backToTop = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    const roadmapItems = document.querySelectorAll('.roadmap-item');
    roadmapItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('completed');
        });
    });

    console.log('Documentation template initialized.');
});
