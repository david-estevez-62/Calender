$(document).ready(function(){

$(".expandRetract").on('click', function(){
	if ( $(this).hasClass('editing')===false){
	$(this).append("<textarea class='expand'>Have plans?</textarea>");
	$(this).addClass("editing");

}

	// $(this.textarea).css ({
 // 	'display': "block",
 // 	height: "400px"
	// })

})



});