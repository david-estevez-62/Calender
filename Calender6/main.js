$(document).ready(function(){

  var dayCount = 0;

  var date = new Date();

  var monthDictionary = ['Sun', 'Mos'];

  var count = 1;

  var hasNotBeenInRegion = true;
  var scrolledDownHistory;

	$(document).on("click", ".header", function () {

	    $header = $(this);
	    //getting the next element
	    $content = $header.next();
	    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
	    $content.toggleClass("hide", 500);

	});




  var template = _.template($('#temp').text());
  // var date = moment().format('dddd')+", "+moment().subtract(10, 'days').calendar();
  

  function addDays(date, days) {
      var result = new Date(date);
      result.setDate(result.getDate() + days);
      return result;
  }



  


  for(var i = 0; i<60; i++){
    var templateData = { date: (String(addDays(date, dayCount))).substring(0,15) };
    $('body').append(template(templateData));
    dayCount++;
  }


  window.onscroll = function(){
    
    if($(window).scrollTop() + $(window).height() >= $(document).height()-50 ) {
      console.log(window.scrollY);
      hasNotBeenInRegion = false;
      scrolledDownHistory = window.scrollY;

      count++;
      
      var j = dayCount;
      for(var i = dayCount; i<40+j; i++){    
        var templateData = { date: (String(addDays(date, dayCount))).substring(0,15) };
        $('body').append(template(templateData))
        dayCount++;
      }

    }

  }
});

