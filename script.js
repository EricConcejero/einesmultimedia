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

    document.body.addEventListener('click', (event) => {
        if (event.target.matches('#botoSorollCotxe1, #botoSorollCotxe2, #botoSorollCotxe3, #botoSorollCotxe4')) {
            playSound(event.target.dataset.sound);
        } else if (event.target.matches('#botoLlegirCotxe1, #botoLlegirCotxe2, #botoLlegirCotxe3, #botoLlegirCotxe4')) {
            readDescription(event.target.dataset.description);
        }
    });

    function playSound(soundFile) {
        var audio = new Audio(soundFile);
        audio.play();
    }

    function readDescription(description) {
        var msg = new SpeechSynthesisUtterance(description);
        window.speechSynthesis.speak(msg);
    }

    });
