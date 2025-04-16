const allPaths = document.querySelectorAll('path');

allPaths.forEach((path) => {
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    path.getBoundingClientRect();

    path.style.transition = 'stroke-dashoffset 6s ease-in-out ';
    path.style.strokeDashoffset = '0';
    
});

