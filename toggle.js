document.addEventListener('DOMContentLoaded', function () {
    const checkbox = document.getElementById('check');
    const aside = document.querySelector('aside');
    const menuIcon = document.querySelector('.menu i');

    function hideIcon() {
        return new Promise((resolve) => {
            menuIcon.addEventListener('transitionend', function hide() {
                menuIcon.removeEventListener('transitionend', hide);
                resolve();
            });

            menuIcon.style.visibility = 'hidden';
        });
    }

    function moveAside() {
        return new Promise((resolve) => {
            setTimeout(function () {
                aside.style.transform = 'translateX(0)';
                resolve();
            }, 100); // Adjust the delay if needed
        });
    }

    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            hideIcon().then(() => {
                // Add a delay before starting moveAside
                setTimeout(moveAside, 50);
            });
        } else {
            menuIcon.style.visibility = 'visible';
            aside.style.transform = 'translateX(-18vw)';
        }
    });
});
