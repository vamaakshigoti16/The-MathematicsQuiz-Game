player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

console.log(player1_name);
console.log(player2_name);

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player2_name").innerHTML = player2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "question turn - "+player1_name;
document.getElementById("player_answer").innerHTML = "answer turn - "+player2_name;

function send()
{
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
}

question_number = "<h4>" + number1 +"X"+ number2 +"</h4>";
input_box = "<br>Answer : <input type='text' id='input_check_box'>";
check_button = "<br><br><button class='btn btn btn-info' onclick='check()'>Check</button>";
row = question_number + input_box + check_button ;

document.getElementById("output").innerHTML = row;

document.getElementById("number1").value = "";
document.getElementById("number2").value = "";

var questionturn = "player1";
var answerturn = "player2";

function check()
{
    getanswer = document.getElementById("input_check_box").value;
    answer = getanswer.toLowerCase();

    if(answer == word)
    {
        if(answerturn == "player1")
        {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else
        {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    
    if(questionturn == "player1")
    {
        questionturn = "player2";
        document.getElementById("player_question").innerHTML = "question turn - "+player2_name;
    }
    else
    {
        questionturn = "player1";
        document.getElementById("player_question").innerHTML = "question turn - "+player1_name;
    }

    if(answerturn == "player1")
    {
        answerturn = "player2";
        document.getElementById("player_answer").innerHTML = "answer turn - "+player2_name;
    }
    else
    {
        answerturn = "player1";
        document.getElementById("player_answer").innerHTML = "answer turn - "+player1_name;
    }
    document.getElementById("output").innerHTML = "";
}