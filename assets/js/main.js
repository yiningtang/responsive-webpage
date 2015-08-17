
function opensubmenu(){

	$('#submenu').css('display','none');
	$(".submenu_overlay").css("height",$("#submenu").height());
	var windowwidth=$(window).width();
	//alert(windowwidth);
	var outwidth=$(window).innerWidth();
	
	if (windowwidth>=1007){
		
	
	
$('#submenu').css({top: '10%', position:'absolute'});
$('#submenu').css('display','block');
}
    else{
    	$('.menu').css('display','block');

    	$('#submenu').css({top: '0%', position:'relative'});
    $('#submenu').css('display','block');


}
}
function closesubmenu(){
	 $('#submenu').css('display','none');
}
/**
if (menudisplay!="inline"){
	$('#submenu').css('display','none');



$('#NAV_02003').bind('mouseover', openSubMenu);
$('#NAV_02003').bind('mouseout', closeSubMenu);
		}
if(menudisplay=="inline"){
	$('#submenu').css({top: '10%', position:'absolute'});
	$('#submenu').css('display','none');



$('#NAV_02003').bind('mouseover', openSubMenu);
$('#NAV_02003').bind('mouseout', closeSubMenu);
}		
		function openSubMenu() {

			$('#submenu').css("display","block");
			
			
			
		};
		
		function closeSubMenu() {
			$('#submenu').css("display","none");	
			
		};**/



function showmenu(){
    var windowwidth=$(window).width();
	var height=$(".submenu").height;
	var a=$(".mobileNav").html();
     var bars='<i class="fa fa-bars"></i>';
     var times='<i class="fa fa-times"></i>';
	if (a==bars)
	{ $(".mobileNav").html(times);
	$('.menu').css("display","block");
	//$(".menu:nth-of-type(2)").css("visibility","hidden");
}
	
	else{
		$(".mobileNav").html(bars);
		$(".menu").css("display","none");
}
}



$(document).ready(function(){

var timer=setInterval(autoplay, 3000);
	function autoplay(){
    var num,i;
     for (num=1;num<3;num++){
            	var opacity=($("#slider ul li").eq(num)).css("opacity");
            	if(opacity==0)
            		break;
            	
            }
     
     if (num>=3)
     	num=0;
    
		($('#slider ul li').eq(num)).animate({
	 	opacity:1
            
        }, 200, function () {
        	
            for (i=num+1;i<=3;i++){
            	($("#slider ul li").eq(i)).css("opacity","0");
            	
            }

            
        });
      
        	
        		
       var _this=$('.round').eq(num).html('<img src="assets/images/round2.png"/>');
        $('.round').not(_this).html('<img src="assets/images/round1.png"/>');    

	}







/**	$('.round').click(function(){
		clearInterval(timer);

var i;
		$(this).html('<img src="assets/images/round2.png"/>');
		$('.round').not(this).html('<img src="assets/images/round1.png"/>');
		//for (i=0;i<("slider ul li").length;i++){
       // $("slider ul li").eq(i).html('<img src="assets/images/hero_0"'+i+'.png"/>');
		//}
				var num=($(this).index());
		//alert(num);

		var slideWidth = $('#slider ul li').width(); 

		
	 ($('#slider ul li').eq(num)).animate({
	 	opacity:1
            
        }, 200, function () {
        	
            for (i=num+1;i<("#slider ul li").length;i++){
            	($("#slider ul li").eq(i)).css("opacity","0");
            }
        	
            //($("#slider ul li").eq(num)).css("opacity","1");
          
         // $('#slider ul').css('left', '');
        });
     
    
	});**/
	
// var timer2=setInterval(autoplay,3000);
});

function setwidth(){
  
	var width=$("#img").width();

	$(".img1").css("width",width);
	$("#container ul li").css("width",width);

	var i;
	for(i=1;i<$("#slider ul li").length;i++){
	$("#slider ul li").eq(i).css("opacity","0");
}

	var height=$("#img").height(); 
	$(".img1").css("height",height);
	$("#container ul li").css("height",height);
	
}


function LoadRetails(arr) {
    var out = "";
    var ul="<ul>"
    var ul2="</ul>"
    var i;
    for(i = 0; i<arr.length; i++) {

        out += '<li>'+ arr[i].name+" | "+ 
       '</li>';
    }
    document.getElementById("scrollbar").innerHTML =ul+out+ul2;
}

function forward(){
var a= $(".scrollbar").scrollLeft();

a=a+100;



	$(".scrollbar").scrollLeft(a);
    


}
function back(){
	var a=$(".scrollbar").scrollLeft();

a=a-100;
	$(".scrollbar").scrollLeft(a);
	
}


