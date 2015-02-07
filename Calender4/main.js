$(document).ready(function(){

var openTextboxes =0;

	$(".expandRetract").on('click', function(){

		if(openTextboxes<9){
		
		$(this).append("<textarea class='textarea'>Have plans?</textarea>");

	
		openTextboxes += 1;
	}
	})



});


	
	
	
	// $(this.textarea).css ({
 // 	display : "block",
 // 	height: "400px"
	// })


// $(this).toggleClass('expand')
