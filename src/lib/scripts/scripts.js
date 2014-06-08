$(document).ready(function(){
	$(".results").hide();
	$('.details').hide();

	$('.item').click(function(){
		if($("#expcol", this).text() == "v"){
			$("#expcol", this).text(">");
		}
		else{
			$("#expcol", this).text("v");
		}
	});

	$('#item3').click(function(){
		$(".details").show();
	});
});
