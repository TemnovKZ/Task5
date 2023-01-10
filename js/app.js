

document.querySelectorAll('.dropdown__title').forEach((item) =>
    item.addEventListener('click', () => {
        let parent = item.parentNode;

        if (parent.classList.contains('open')) {
            parent.classList.remove('open');
        } else {
            document
                .querySelectorAll('.dropdown__item')
                .forEach((child) => child.classList.remove('open'))

            parent.classList.toggle('open');
        }
    })
)