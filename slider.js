var slideNow=1;
var slideCount=$(".slidewrapper").children().length;
console.log(slideCount);
console.log('before',slideNow);

var translateWidth=0;
var slideInterval=2000;
console.log(slideNow>=slideCount||slideNow<=0||slideNow);

function nextSlide(){
	if(slideNow>=slideCount||slideNow<=0){
		slideNow=1;
	}
	else{
		translateWidth=-$(".view").width()*slideNow;
		$(".slidewrapper").css({'transform':'translate('+translateWidth+'px,0)'});
		slideNow++;
		console.log(slideNow);
	}
}

function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$(".view").width() * (slideCount - 1);
        $(".slidewrapper").css({
            'transform': 'translate(' + translateWidth + 'px, 0)'});
        slideNow = slideCount;
        console.log(slideNow);
    } else {
        translateWidth = -$(".view").width() * (slideNow - 2);
        $(".slidewrapper").css({
            'transform': 'translate(' + translateWidth + 'px, 0)'});
        slideNow--;
        console.log(slideNow);
    }
}



$("document").ready(function(){
	//setInterval(nextSlide, slideInterval);
	$('#next-btn').click(function() {
        nextSlide();
    });

    $('#prev-btn').click(function() {
        prevSlide();
});
});