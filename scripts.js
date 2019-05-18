
/*--global variable for calling class objects memory-card--*/

const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
/*manages flip card state is one card clicked or two no card state is true */
let lockBoard = false;/*locks additional card flips from happening while first and second card are 
selected two options can happend of returning card to native state or locking cards if match is founc*/

let firstCard, secondCard;
/*start of flip card function statements*/
function flipCard(){
	if (lockBoard) return;
	if (this === firstCard) return; /*removes option of second card clicked being exact same as first card click*/



this.classList.add('flip');/*variable reprensenting 1st or second cards state once it is clicked */



if (!hasFlippedCard){

	hasFlippedCard = true;
	firstCard = this;
return;
}

secondCard = this;

checkForMatch();
}/*flip carc function that goes through several states depening if it is first card or second match or not*/


function checkForMatch(){
let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

isMatch ? disableCards() : unflipCards();
}/*check to see if cards data framework name are strickly equal to if true diable cards ability to be clicked or go back to native position*/

function disableCards(){

	firstCard.removeEventListener('click', flipCard);
	secondCard.removeEventListener('click',flipCard);

	resetBoard();
}/*used in conjunction with resetBoard to disable the card click function durring page reset*/

function unflipCards(){
	lockBoard = true;

	setTimeout(() => {
		firstCard.classList.remove('flip');
		secondCard.classList.remove('flip');
		
		resetBoard();
	}, 1500);/*used in conjunction with resetBoard to return flip card back to native postion within 
	set time or when resetBoard is called on page refresh*/
}

function resetBoard(){
	[hasFlippedCard, lockBoard] = [false, false];
	[firstCard, secondCard] = [null, null];
} /*changes first and second card original position once page is refresed*/

(function shuffle(){
	cards.forEach(card => {
		let randomPos = Math.floor(Math.random() * 12);
			card.style.order = randomPos;
	});/*function used in conjuction with display flex to add random number multiplied by 12 to create new random flex item position*/
})();

cards.forEach(card => card.addEventListener('click', flipCard));/*event listener used to flip card once click action is applied*/