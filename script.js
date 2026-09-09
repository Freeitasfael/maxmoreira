document.addEventListener('DOMContentLoaded', () => {
    // Inicializar ícones Lucide
    lucide.createIcons();

    // Scroll suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Observer para animações de fade-in ao fazer scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Opcional: parar de observar após a animação
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Selecionar todos os elementos com a classe fade-in
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // Se a página carregar no topo, forçar a classe visible nos primeiros elementos
    setTimeout(() => {
        const firstElements = document.querySelectorAll('#hero, .nav-menu');
        firstElements.forEach(el => {
            el.classList.add('visible');
        });
    }, 100);
});
