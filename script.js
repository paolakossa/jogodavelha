const cellElements = document.querySelectorAll('[data-cell]');
const board = document.querySelector('[data-board]');
const winnigMessageTextElement = document.querySelector('[data-winnig-message-text]');
const winnigMessage = document.querySelector('[data-winnig-message]');
const restarButton = document.querySelector('[data-restart-button]');

let isCircleTurn;

const winnigCombinations = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 4, 8],
	[2, 4, 6],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],

];

const startGame = () => {
	isCircleTurn = false;
	
	for (const cell of cellElements) {
		cell.classList.remove('circle');
		cell.classList.remove('x');
		cell.removeEventListener('click', handleClick);
		cell.addEventListener('click', handleClick, {once: true}); 
}
	

	setBoardHoverClass();
	winnigMessage.classList.remove('show-winnig-message');
	
};

const endGame = (isDraw) => {
	if (isDraw){ 
		winnigMessageTextElement.innerText = 'Empate!';
	} else {
		winnigMessageTextElement.innerText = isCircleTurn ? 'O Venceu!' : 'X Venceu!';
	}

	winnigMessage.classList.add('show-winnig-message');
};

const checkForWin = (currentPlayer) => {
	return winnigCombinations.some((combination) => {
		return combination.every((index) => {
			return cellElements[index].classList.contains(currentPlayer);
		});
	});
};
	
const checkForDraw = () => {
	return [...cellElements].every((cell) =>{
	return	cell.classList.contains('x') || cell.classList.contains('circle');
	});
};

const placeToMark = (cell , classToAdd) => {
	cell.classList.add(classToAdd);
};

const setBoardHoverClass = () => {
	board.classList.remove('circle');
	board.classList.remove('x');

	if(isCircleTurn) {
		board.classList.add('circle');
	} else {
		board.classList.add('x');
	}
};

const swapTurns = () => {
	isCircleTurn = !isCircleTurn;
	setBoardHoverClass();

};

const handleClick = (e) => {
	//colocar a marca x ou círculo
	const cell = e.target;
	const classToAdd = isCircleTurn ? 'circle': 'x';

	placeToMark(cell, classToAdd);
	// verficar por vitória 
	const isWin = checkForWin(classToAdd);
	
	
	//verificar por empate
	const isDraw = checkForDraw(); 
	
	if (isWin){
		endGame(false);
	
	} else if (isDraw){
		endGame(true);
	
	} else {
	
	
	//Mudar o símbolo

	swapTurns();

}
};

	startGame();

	restarButton.addEventListener('click', startGame);