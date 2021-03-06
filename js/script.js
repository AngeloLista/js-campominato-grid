/*
L'utente indica TRAMITE DOM un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
Consigli del giorno: :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.
*/

const play = () => {
    // Cambio testo pulsante play e svuota griglia precedente
    playButton.innerText = 'Ricomincia';
    const grid = document.getElementById('grid');
    grid.innerHTML = '';

    const level = document.getElementById('level').value;

    let totalCells;
    let cellsPerRow;

    switch(level) {
        case 'easy':
            totalCells = 100;
            break;
        case 'normal':
            totalCells = 81;
            break;
        case 'hard':
            totalCells = 49;
            break;
    };
    cellsPerRow = Math.sqrt(totalCells);

    // FUNZIONI
    const generateCell = (number) => {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.id = number;
        cell.innerText = number;
        const sideLength = `calc(100% / ${cellsPerRow})`;
        cell.style.width = sideLength;
        cell.style.height = sideLength;

        return cell;
    };

    const generateGrid = (cellsNumber, cellPerRow) => {
        for (let i = 1; i <= cellsNumber; i++) {
            const cell = generateCell(i, cellsPerRow);
            
            cell.addEventListener('click', () => {
                cell.classList.toggle('clicked');
            })

            grid.appendChild(cell);
        }
    };

    generateGrid(totalCells, cellsPerRow);

};


const playButton = document.getElementById('play');
playButton.addEventListener('click', play);

