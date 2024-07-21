document.addEventListener('DOMContentLoaded', function() {
    // Selecciona las tarjetas
    const cardA1 = document.getElementById('cardA1');
    const cardB1 = document.getElementById('cardB1');

    // Función para mostrar las tarjetas en la columna del medio
    function showCard(cardType) {
        if (cardType === 'A') {
            cardA2.style.display = 'block'; // Muestra cardA2
            cardB2.style.display = 'none';  // Oculta cardB2
        } else if (cardType === 'B') {
            cardB2.style.display = 'block'; // Muestra cardB2
            cardA2.style.display = 'none';  // Oculta cardA2
        }
    }

    // Asigna eventos de clic
    cardA1.addEventListener('click', function() {
        showCard('A');
    });

    cardB1.addEventListener('click', function() {
        showCard('B');
    });
});
