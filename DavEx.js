

$(document).ready(function(){
	
	
	
	$('body').on('click', '#fight-btn',function(){
		$('#display_winner').html("fighting......");		
		
		var player1 = $("#player1").val();
		var player2 = $("#player2").val();
//		console.log("player1 is: " + player1);
//		console.log("player2 is: " + player2);

		
//		console.log(typeof player1);
		sleep(1000);
		checkWin(player1, player2);
	});

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	function checkWin(player1, player2) {
		player1 = player1.replace(/ /g,'');
		player2 = player2.replace(/ /g,'');
		var player1Len = player1.length;
		var player2Len = player2.length;
		var player1Ascii = 0;
		var player2Ascii = 0;
//		console.log("outside for loop : ", playercharCodeAt(4));
		for (var i = 0; i< player1Len; i++){
//		console.log("i is ", i);
			player1Ascii += player1.charCodeAt(i);
			console.log("player1 ascii value is: ",player1Ascii);
		}
		
		for (var i = 0; i< player2Len; i++){
			player2Ascii += player2.charCodeAt(i);
			console.log("player2 ascii value is: " + player2Ascii);
		}
//		var player1 = player1.valueOf();
//		var player2 = player2.valueOf();
		var player = "I don't know what happend ?? ? There is something wrong with you ";
//		console.log("in check win ", player1.length);
//		console.log("in check win ", typeof player2);
		
		while (player1.length !== 0 && player2.length !==0){
			setTimeout(3000);
//		console.log("you shold not see me in while loop if condition is '==0'! ");
			if (player1Ascii > player2Ascii) {
				player = "player1";
			}else if(player1Ascii < player2Ascii){
				player = "player2";
			}else if (player1Ascii ==  player2Ascii){
				player = "you are in the same strength mojo.. it is a Tie";
			}else{
				player = "I don't know what you are doing ??";
			}
			
			console.log("player1 is ", player1);
			console.log("player2 is ", player2);
//			console.log("something went wrong here...?!");
			break;
		}
		
		var html = "<p> The winner is ...... " + player + "</p>";
		$('#display_winner').html('');
		$('#display_winner').html(html);
	}
	
	function sleep(milliseconds) {
		var start = new Date().getTime();
			for (var i = 0; i < 1e7; i++) {
				if ((new Date().getTime() - start) > milliseconds){
					break;
				}
			}
		}
});
