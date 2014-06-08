$(document).ready(function(){
	$(".results").hide();
	$('.details').hide();
	$('.itemGO').click(function(){
		$(".results").show();
	});
		
	$('.item').click(function(){
		if($("#expcol", this).text() == "v"){
			$("#expcol", this).text(">");
		}
		else{
			$("#expcol", this).text("v");
			if(this.id == "item1"){
				$("#item2", this).hidden();
				$().hidden();
			}
			else{
				if(this.id == "item2"){
					
				}
			}
		}
	});
	
	$('#item3').click(function(){
		$(".details").show();
	});
});