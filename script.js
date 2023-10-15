document.addEventListener('DOMContentLoaded', function () {
    // Add an event listener to each navigation icon
    const iconListItems = document.querySelectorAll('nav ul li');

    iconListItems.forEach((listItem) => {
        const icon = listItem.querySelector('img');
        const label = listItem.querySelector('.label');

        icon.addEventListener('mouseenter', () => {
            label.style.display = 'block'; // Show the label on hover
            setTimeout(() => {
                label.style.display = 'none'; // Hide the label after 0.5 seconds
            }, 500);
        });
    });

    // Additional feature: Change background color of the header on click
    const header = document.querySelector('.header');
    header.addEventListener('click', () => {
        const colors = ['#00122e', '#3b3b3b', '#781c81', '#2a8bde', '#2ed881'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        header.style.background = randomColor;
    });
});
