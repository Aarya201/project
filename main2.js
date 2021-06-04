
player1name = localStorage.getItem("Player_1");
player2name = localStorage.getItem("Player_2");

	
document.getElementById("player1_name").innerHTML = player1name + " : ";
document.getElementById("player2_name").innerHTML = player2name + " : ";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;

document.getElementById("player_question").innerHTML = "Question Turn - " + player1name ;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2name ;

player1_score = 0;
player2_score = 0;

function send() {
get_number = document.getElementById("number_1_input").value;
get_number2 = document.getElementById("number_2_input").value; 
actual_answer = parseInt(get_number) * parseInt(get_number2);
        console.log(actual_answer);
   
   question_word = "<h4 id=word_display>"+get_number+ " X " +get_number2+"</h4>";
   input_box = "<br>Answer : <input type='text'id='input_checkbox'>";
   check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
   row =  question_word + input_box + check_button ; 
    document.getElementById("output").innerHTML = row;
document.getElementById("get_number").value = "";
    document.getElementById("get_number2").value = "";
}


 question_turn = "player2";
 answer_turn = "player1";


function check()
{
	get_answer = document.getElementById("input_checkbox").value;
	
	if(get_answer == actual_answer)	
	{
		if(answer_turn == "player1")
		{
			player1_score = player1_score +1;
		    document.getElementById("player1_score").innerHTML = player1_score;
			player2_score = player2_score +0;
		    document.getElementById("player2_score").innerHTML = player2_score;
            answer_turn = "player2"
		document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2name ;

		}
		else 
		{
			player2_score = player2_score +1;
		    document.getElementById("player2_score").innerHTML = player2_score;
		}
	}
	if(question_turn == "player1")
	{
		question_turn = "player2"
		document.getElementById("player_question").innerHTML = "Question Turn - " + player2name ;
	}
	else 
	{
		question_turn = "player1"
		document.getElementById("player_question").innerHTML = "Question Turn - " + player1name ;
	}

	if(answer_turn == "player1")
	{
		answer_turn = "player2"
		document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2name ;
	}
	else
	{
		answer_turn = "player1"
		document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1name ;
	}

    document.getElementById("output").innerHTML = "";
}
