document.addEventListener('DOMContentLoaded', (event) => {
    const columnas = document.querySelectorAll('.columna');

    columnas.forEach((columna) => {
        columna.addEventListener('dragover', (event) => {
            event.preventDefault();
        });

        columna.addEventListener('drop', (event) => {
            event.preventDefault();

            const data = event.dataTransfer.getData('text');
            const foto = document.getElementById(data);

            if (foto) {
                columna.appendChild(foto);
            }
        });
    });

    const fotos = document.querySelectorAll('img[draggable="true"]');

    fotos.forEach((foto) => {
        foto.addEventListener('dragstart', (event) => {
            event.dataTransfer.setData('text', event.target.id);
        });
    });
});