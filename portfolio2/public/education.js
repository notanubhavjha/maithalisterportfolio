document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.timeline-item');

    items.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.querySelector('.timeline-content').classList.add('glow');
        });

        item.addEventListener('mouseout', () => {
            item.querySelector('.timeline-content').classList.remove('glow');
        });
    });
});
