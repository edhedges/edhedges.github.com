$(document).ready(function() {
  if($(window).width() > 767){
    var tipTitle = "";
    var liveTip = $("<div id='current_tooltip'></div>").hide().appendTo("body");
    var lists = "";
    if($("#arsenal_list").length){
      lists = "#social_list, #arsenal_list";
    }
    else{
      lists = "#social_list";
    }
    $(lists).bind("mouseover mouseout mousemove", function(event) {
      var close_link = $(event.target).closest('a');
      if (!close_link.length) { return; }
      var hovered_link = close_link[0];

      if (event.type == "mouseover" || event.type == "mousemove") {
        liveTip.css({
          top: event.pageY + 12,
          left: event.pageX + 12
        });
      }

      if (event.type == "mouseover") {
        tipTitle = hovered_link.title;
        hovered_link.title = "";
        liveTip.html("<div>" + tipTitle + "</div>")
        .show();
      }

      if (event.type == "mouseout") {
        liveTip.hide();
        if (tipTitle) {
          hovered_link.title = tipTitle;
        }
      }
    });
  }
});