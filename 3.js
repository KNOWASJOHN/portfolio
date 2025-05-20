const projectItems = document.querySelectorAll('.project-item');
        const videoPopup = document.querySelector('.video-popup');
        const hoverVideo = document.getElementById('hover-video');

        projectItems.forEach(item => {
            item.addEventListener('mouseenter', (e) => {
                hoverVideo.src = item.getAttribute('data-video');
                videoPopup.style.display = 'block';
            });
            
            item.addEventListener('mouseleave', () => {
                videoPopup.style.display = 'none';
            });
        });

        document.addEventListener('mousemove', (e) => {
            videoPopup.style.left = `${e.pageX + 15}px`;
            videoPopup.style.top = `${e.pageY + 15}px`;
        });