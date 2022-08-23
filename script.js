const cellElements = document.querySelectorAll('[data-cell]');
const board = document.querySelector('[data-board]');

let isCircleTurn;

const startGame = () => {
	for (const cell of cellElements) {
	cell.addEventListener('click', handleClick, {once: true}); 
}
	isCircleTurn = false;

	board.classList.add('x');
	
};

const placeToMark = (cell , classToAdd) => {
	cell.classList.add(classToAdd);
};

const swapTurns = () => {
	isCircleTurn = !isCircleTurn

	board.classList.remove('circle');
	board.classList.remove('x');

	if(isCircleTurn) {
		board.classList.add('circle');
	} else {
		board.classList.add('x');
	}

};

const handleClick = (e) => {
	//colocar a marca x ou círculo
	const cell = e.target;
	const classToAdd = isCircleTurn ? 'circle': 'x';

	placeToMark(cell, classToAdd);
	// verficar por vitória 
	//verificar por empate
	
	//Mudar o símbolo

	swapTurns();
};

for (const cell of cellElements) {
	cell.addEventListener('click', handleClick, {once: true}); 
};

	startGame();