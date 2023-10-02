document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel'),
    firstImg = carousel.querySelectorAll('img')[0];
    arrowIcons = document.querySelectorAll('.product-thumbnails i');

    let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;
    let firstImgWidth = firstImg.clientWidth;

    arrowIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            carousel.scrollLeft += icon.id == 'left' ? -firstImgWidth : firstImgWidth;
        });
    });

    const autoSlide = () => {
        if(carousel.scrollLeft == (carousel.scrollWidth - carousel.clientWidth)) return;

        positionDiff = Math.abs(positionDiff);
        let firstImgWidth = firstImg.clientWidth;
        let valDifference = firstImgWidth - positionDiff;

        if (carousel.scrollLeft > prevScrollLeft) {
            return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
        }

        carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff
    }

    const dragStart = (e) => {
        isDragStart = true;
        prevPageX = e.pageX || e.touches[0].pageX;
        prevScrollLeft = carousel.scrollLeft;
    }

    const dragging = (e) => {
        if(!isDragStart) return;
        e.preventDefault();
        isDragging = true;
        carousel.classList.add('dragging');
        positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
        carousel.scrollLeft = prevScrollLeft - positionDiff;
    }

    const dragStop = () => {
        isDragStart = false;
        carousel.classList.remove('dragging');

        if (!isDragging) return;
        isDragging = false;
        autoSlide();
    }

    carousel.addEventListener('mousedown', dragStart);
    carousel.addEventListener('mousemove', dragging);
    carousel.addEventListener('mouseup', dragStop);
    carousel.addEventListener('mouseleave', dragStop);

    carousel.addEventListener('touchstart', dragStart);
    carousel.addEventListener('touchmove', dragging);
    carousel.addEventListener('touchend', dragStop);
});