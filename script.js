const intersectionCallback = (entries) => {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            entry.target.classList.add("trigger-animation");
        }
    }
}

const observer = new IntersectionObserver(intersectionCallback);

const items = document.querySelectorAll(".wfp-text");
    for (const item of items) {
        observer.observe(item);
}