const button = document.getElementById('_button');
const notification = document.getElementById('_notification');
const counterElement = document.getElementById('_counter');

let clickCount = 0;

button.addEventListener('click', () => {
    clickCount++;
    counterElement.textContent = clickCount;

    notification.classList.add('count');
    notification.classList.add('notify');

    button.classList.add('active');

    // Generate a random color and set it as the body background
    const randomColor = getRandomColor();
    document.body.style.background = randomColor;
});

notification.addEventListener('animationend', () => {
    notification.classList.remove('notify');
    button.classList.remove('active');
});

// Function to generate a random color in hexadecimal format
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
