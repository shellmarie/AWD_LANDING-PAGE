document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.day-button');
    const box = document.getElementById('box');

    
    const dayColors = {
        monday: '#ff5733',
        tuesday: '#33ff57',
        wednesday: '#5733ff',
        thursday: '#ff3399',
        friday: '#3399ff',
        saturday: '#ffcc33',
        sunday: '#33ccff'
    };

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const day = this.id.toLowerCase();
            const color = dayColors[day];

            
            this.style.backgroundColor = color;
            box.style.borderColor = color;

            box.style.top = '250px';
            box.style.backgroundColor = 'white'; 
            box.classList.remove('hidden');

            setTimeout(() => {
                box.style.top = '0';
                box.style.backgroundColor = 'white'; 
            }, 500);
        });
    });
});
