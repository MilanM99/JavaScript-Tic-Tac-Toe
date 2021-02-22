let fieldsWrapper = document.querySelector(".fields-wrapper");
let field = document.querySelectorAll(".fields-wrapper div");
let player1_result = document.getElementById("player1-result");
let player2_result = document.getElementById("player2-result");
let currentPlayer = document.getElementById("current-player");
let resetButton = document.getElementById("reset-button");
let player1_points = 0;
let player2_points = 0;
let currentPlayer_counter = 1;
let winner;

player1_result.innerText = player1_points;
player2_result.innerText = player2_points;
currentPlayer.innerText = "Player X";

function showCurrentPlayer()
{	
	if(this.innerHTML == "")
	{
		if(currentPlayer_counter == 1)
		{
			this.innerHTML = '<p id="orange-x">X</p>';
			currentPlayer.innerText = "Player O";
			currentPlayer_counter = 2;
			checkWinner();
			return;
		}
		if(currentPlayer_counter == 2)
		{
			this.innerHTML = '<p id="green-o">O</p>';
			currentPlayer.innerText = "Player X";
			currentPlayer_counter = 1;
			checkWinner();
			return;
		}
	}
}
for(let i=0;i<field.length;i++)
{
	field[i].onclick = showCurrentPlayer;
}

function checkWinner()
{
	if(field[0].innerHTML == '<p id="orange-x">X</p>' && field[1].innerHTML == '<p id="orange-x">X</p>' && field[2].innerHTML == '<p id="orange-x">X</p>')
	{
		player1_points++;
		player1_result.innerText = player1_points;
		field[0].innerHTML = "<p id='red-x'>X</p>";
		field[1].innerHTML = "<p id='red-x'>X</p>";
		field[2].innerHTML = "<p id='red-x'>X</p>";
		currentPlayer.style.visibility = "hidden";
		fieldsWrapper.style.pointerEvents = "none";
		resetButton.style.display = "block";
		winner = "The winner is player X";
		resetButton.innerText = winner + ", click for the next round";
		return;
	}
	if(field[3].innerHTML == '<p id="orange-x">X</p>' && field[4].innerHTML == '<p id="orange-x">X</p>' && field[5].innerHTML == '<p id="orange-x">X</p>')
	{
		player1_points++;
		player1_result.innerText = player1_points;
		field[3].innerHTML = "<p id='red-x'>X</p>";
		field[4].innerHTML = "<p id='red-x'>X</p>";
		field[5].innerHTML = "<p id='red-x'>X</p>";
		currentPlayer.style.visibility = "hidden";
		fieldsWrapper.style.pointerEvents = "none";
		resetButton.style.display = "block";
		winner = "The winner is player X";
		resetButton.innerText = winner + ", click for the next round";
		return;
	}	
	if(field[6].innerHTML == '<p id="orange-x">X</p>' && field[7].innerHTML == '<p id="orange-x">X</p>' && field[8].innerHTML == '<p id="orange-x">X</p>')
	{
		player1_points++;
		player1_result.innerText = player1_points;
		field[6].innerHTML = "<p id='red-x'>X</p>";
		field[7].innerHTML = "<p id='red-x'>X</p>";
		field[8].innerHTML = "<p id='red-x'>X</p>";
		currentPlayer.style.visibility = "hidden";
		fieldsWrapper.style.pointerEvents = "none";
		resetButton.style.display = "block";
		winner = "The winner is player X";
		resetButton.innerText = winner + ", click for the next round";
		return;
	}
	if(field[0].innerHTML == '<p id="orange-x">X</p>' && field[3].innerHTML == '<p id="orange-x">X</p>' && field[6].innerHTML == '<p id="orange-x">X</p>')
	{
		player1_points++;
		player1_result.innerText = player1_points;
		field[0].innerHTML = "<p id='red-x'>X</p>";
		field[3].innerHTML = "<p id='red-x'>X</p>";
		field[6].innerHTML = "<p id='red-x'>X</p>";
		currentPlayer.style.visibility = "hidden";
		fieldsWrapper.style.pointerEvents = "none";
		resetButton.style.display = "block";
		winner = "The winner is player X";
		resetButton.innerText = winner + ", click for the next round";
		return;
	}
	if(field[1].innerHTML == '<p id="orange-x">X</p>' && field[4].innerHTML == '<p id="orange-x">X</p>' && field[7].innerHTML == '<p id="orange-x">X</p>')
	{
		player1_points++;
		player1_result.innerText = player1_points;
		field[1].innerHTML = "<p id='red-x'>X</p>";
		field[4].innerHTML = "<p id='red-x'>X</p>";
		field[7].innerHTML = "<p id='red-x'>X</p>";
		currentPlayer.style.visibility = "hidden";
		fieldsWrapper.style.pointerEvents = "none";
		resetButton.style.display = "block";
		winner = "The winner is player X";
		resetButton.innerText = winner + ", click for the next round";
		return;
	}
	if(field[2].innerHTML == '<p id="orange-x">X</p>' && field[5].innerHTML == '<p id="orange-x">X</p>' && field[8].innerHTML == '<p id="orange-x">X</p>')
	{
		player1_points++;
		player1_result.innerText = player1_points;
		field[2].innerHTML = "<p id='red-x'>X</p>";
		field[5].innerHTML = "<p id='red-x'>X</p>";
		field[8].innerHTML = "<p id='red-x'>X</p>";
		currentPlayer.style.visibility = "hidden";
		fieldsWrapper.style.pointerEvents = "none";
		resetButton.style.display = "block";
		winner = "The winner is player X";
		resetButton.innerText = winner + ", click for the next round";
		return;
	}
	if(field[0].innerHTML == '<p id="orange-x">X</p>' && field[4].innerHTML == '<p id="orange-x">X</p>' && field[8].innerHTML == '<p id="orange-x">X</p>')
	{
		player1_points++;
		player1_result.innerText = player1_points;
		field[0].innerHTML = "<p id='red-x'>X</p>";
		field[4].innerHTML = "<p id='red-x'>X</p>";
		field[8].innerHTML = "<p id='red-x'>X</p>";
		currentPlayer.style.visibility = "hidden";
		fieldsWrapper.style.pointerEvents = "none";
		resetButton.style.display = "block";
		winner = "The winner is player X";
		resetButton.innerText = winner + ", click for the next round";
		return;
	}
	if(field[2].innerHTML == '<p id="orange-x">X</p>' && field[4].innerHTML == '<p id="orange-x">X</p>' && field[6].innerHTML == '<p id="orange-x">X</p>')
	{
		player1_points++;
		player1_result.innerText = player1_points;
		field[2].innerHTML = "<p id='red-x'>X</p>";
		field[4].innerHTML = "<p id='red-x'>X</p>";
		field[6].innerHTML = "<p id='red-x'>X</p>";
		currentPlayer.style.visibility = "hidden";
		fieldsWrapper.style.pointerEvents = "none";
		resetButton.style.display = "block";
		winner = "The winner is player X";
		resetButton.innerText = winner + ", click for the next round";
		return;
	}
	if(field[0].innerHTML == '<p id="green-o">O</p>' && field[1].innerHTML == '<p id="green-o">O</p>' && field[2].innerHTML == '<p id="green-o">O</p>')
	{
		player2_points++;
		player2_result.innerText = player2_points;
		field[0].innerHTML = "<p id='red-o'>O</p>";
		field[1].innerHTML = "<p id='red-o'>O</p>";
		field[2].innerHTML = "<p id='red-o'>O</p>";
		currentPlayer.style.visibility = "hidden";
		fieldsWrapper.style.pointerEvents = "none";
		resetButton.style.display = "block";
		winner = "The winner is player O";
		resetButton.innerText = winner + ", click for the next round";
		return;
	}	
	if(field[3].innerHTML == '<p id="green-o">O</p>' && field[4].innerHTML == '<p id="green-o">O</p>' && field[5].innerHTML == '<p id="green-o">O</p>')
	{
		player2_points++;
		player2_result.innerText = player2_points;
		field[3].innerHTML = "<p id='red-o'>O</p>";
		field[4].innerHTML = "<p id='red-o'>O</p>";
		field[5].innerHTML = "<p id='red-o'>O</p>";
		currentPlayer.style.visibility = "hidden";
		fieldsWrapper.style.pointerEvents = "none";
		resetButton.style.display = "block";
		winner = "The winner is player O";
		resetButton.innerText = winner + ", click for the next round";
		return;
	}
	if(field[6].innerHTML == '<p id="green-o">O</p>' && field[7].innerHTML == '<p id="green-o">O</p>' && field[8].innerHTML == '<p id="green-o">O</p>')
	{
		player2_points++;
		player2_result.innerText = player2_points;
		field[6].innerHTML = "<p id='red-o'>O</p>";
		field[7].innerHTML = "<p id='red-o'>O</p>";
		field[8].innerHTML = "<p id='red-o'>O</p>";
		currentPlayer.style.visibility = "hidden";
		fieldsWrapper.style.pointerEvents = "none";
		resetButton.style.display = "block";
		winner = "The winner is player O";
		resetButton.innerText = winner + ", click for the next round";
		return;
	}
	if(field[0].innerHTML == '<p id="green-o">O</p>' && field[3].innerHTML == '<p id="green-o">O</p>' && field[6].innerHTML == '<p id="green-o">O</p>')
	{
		player2_points++;
		player2_result.innerText = player2_points;
		field[0].innerHTML = "<p id='red-o'>O</p>";
		field[3].innerHTML = "<p id='red-o'>O</p>";
		field[6].innerHTML = "<p id='red-o'>O</p>";
		currentPlayer.style.visibility = "hidden";
		fieldsWrapper.style.pointerEvents = "none";
		resetButton.style.display = "block";
		winner = "The winner is player O";
		resetButton.innerText = winner + ", click for the next round";
		return;
	}
	if(field[1].innerHTML == '<p id="green-o">O</p>' && field[4].innerHTML == '<p id="green-o">O</p>' && field[7].innerHTML == '<p id="green-o">O</p>')
	{
		player2_points++;
		player2_result.innerText = player2_points;
		field[1].innerHTML = "<p id='red-o'>O</p>";
		field[4].innerHTML = "<p id='red-o'>O</p>";
		field[7].innerHTML = "<p id='red-o'>O</p>";
		currentPlayer.style.visibility = "hidden";
		fieldsWrapper.style.pointerEvents = "none";
		resetButton.style.display = "block";
		winner = "The winner is player O";
		resetButton.innerText = winner + ", click for the next round";
		return;
	}
	if(field[2].innerHTML == '<p id="green-o">O</p>' && field[5].innerHTML == '<p id="green-o">O</p>' && field[8].innerHTML == '<p id="green-o">O</p>')
	{
		player2_points++;
		player2_result.innerText = player2_points;
		field[2].innerHTML = "<p id='red-o'>O</p>";
		field[5].innerHTML = "<p id='red-o'>O</p>";
		field[8].innerHTML = "<p id='red-o'>O</p>";
		currentPlayer.style.visibility = "hidden";
		fieldsWrapper.style.pointerEvents = "none";
		resetButton.style.display = "block";
		winner = "The winner is player O";
		resetButton.innerText = winner + ", click for the next round";
		return;
	}
	if(field[0].innerHTML == '<p id="green-o">O</p>' && field[4].innerHTML == '<p id="green-o">O</p>' && field[8].innerHTML == '<p id="green-o">O</p>')
	{
		player2_points++;
		player2_result.innerText = player2_points;
		field[0].innerHTML = "<p id='red-o'>O</p>";
		field[4].innerHTML = "<p id='red-o'>O</p>";
		field[8].innerHTML = "<p id='red-o'>O</p>";
		currentPlayer.style.visibility = "hidden";
		fieldsWrapper.style.pointerEvents = "none";
		resetButton.style.display = "block";
		winner = "The winner is player O";
		resetButton.innerText = winner + ", click for the next round";
		return;
	}
	if(field[2].innerHTML == '<p id="green-o">O</p>' && field[4].innerHTML == '<p id="green-o">O</p>' && field[6].innerHTML == '<p id="green-o">O</p>')
	{
		player2_points++;
		player2_result.innerText = player2_points;
		field[2].innerHTML = "<p id='red-o'>O</p>";
		field[4].innerHTML = "<p id='red-o'>O</p>";
		field[6].innerHTML = "<p id='red-o'>O</p>";
		currentPlayer.style.visibility = "hidden";
		fieldsWrapper.style.pointerEvents = "none";
		resetButton.style.display = "block";
		winner = "The winner is player O";
		resetButton.innerText = winner + ", click for the next round";
		return;
	}
	if(field[0].innerHTML != "" && field[1].innerHTML != "" && field[2].innerHTML != "" && field[3].innerHTML != "" && field[4].innerHTML != "" && field[5].innerHTML != "" && field[6].innerHTML != "" && field[7].innerHTML != "" && field[8].innerHTML != "")
	{
		currentPlayer.style.visibility = "hidden";
		fieldsWrapper.style.pointerEvents = "none";
		resetButton.style.display = "block";
		winner = "No winner";
		resetButton.innerText = winner + ", click for the next round";
		return;
	}						
}

function reset()
{
	currentPlayer.style.visibility = "visible";
	resetButton.style.display = "none";
	fieldsWrapper.style.pointerEvents = "auto";
	for(let i=0;i<field.length;i++)
	{
		field[i].innerHTML = "";
	}

	if(winner == "The winner is player X")
	{
		currentPlayer.innerText = "Player X";
		currentPlayer_counter = 1;
		return;
	}
	if(winner == "The winner is player O")
	{
		currentPlayer.innerText = "Player O";
		currentPlayer_counter = 2;
		return;
	}
}
resetButton.onclick = reset;
