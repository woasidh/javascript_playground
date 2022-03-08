const images = document.querySelectorAll('.img');

const option = {
    threshold: 1
}

const callback = (entries, observer) => {
    for (const entry of entries) {
        console.log(entry);
        if (entry.isIntersecting) {
            console.log(entry.target.id);
            observer.unobserve(entry.target);
            setTimeout(() => {
                // entry.target.src = entry.target.dataset.src;
            }, 500)
        }
    }
}

const observer = new IntersectionObserver(callback, option);

for (const image of images) {
    observer.observe(image);
}