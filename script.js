document.addEventListener('DOMContentLoaded', () => {
    const videoWindows = document.querySelectorAll('.video-window');
    const mask = document.querySelector('#hole-mask');
    const container = document.querySelector('.container');

    function updateMask() {
        const containerRect = container.getBoundingClientRect();
        mask.innerHTML = '<rect width="100%" height="100%" fill="white" />';

        videoWindows.forEach(window => {
            const rect = window.getBoundingClientRect();
            const x = rect.left - containerRect.left;
            const y = rect.top - containerRect.top;
            
            const hole = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            hole.setAttribute('x', x);
            hole.setAttribute('y', y);
            hole.setAttribute('width', rect.width);
            hole.setAttribute('height', rect.height);
            hole.setAttribute('fill', 'black');
            mask.appendChild(hole);
        });
    }

    window.addEventListener('resize', () => {
        requestAnimationFrame(updateMask);
    });

    updateMask();
});

