$(document).ready(function() {
  var random_image = "";
  var json_url = "http://www.reddit.com/r/aww/.json?jsonp=?";
  $.ajax({
    url: json_url,
    dataType: 'json',
    success: function(data) {
      var post_number = 0;
      var url_posted = "";
      var url_split = [];
      var not_imgur = true;
      var imgur_url_path = "";
      var imgur_hash = "";
      while(not_imgur){
        post_number = Math.floor(Math.random()*25);
        url_posted = data.data.children[post_number].data.url;
        url_split = url_posted.split("/");
        if(url_split[2].indexOf("imgur") != -1){
          not_imgur = false;
          imgur_url_path = url_split[3];
          if(imgur_url_path.indexOf(".") != -1){
            random_image = url_posted;
            $("img#random_image").attr("src", random_image);
          }
          else{
            imgur_hash = imgur_url_path;
            convertImgurHash(imgur_hash);
          }
        }
      }
      var random_image_css = {
        "border-radius": "15px",
        "-webkit-border-radius": "15px",
        "-moz-border-radius": "15px",
        "width": "940px"
      };
      $("img#random_image").css(random_image_css);
    }
  });
});

function convertImgurHash(imgur_hash){
  var random_image = "";
  var json_url = "http://api.imgur.com/2/image/" + imgur_hash + ".json";
  $.ajax({
    url: json_url,
    dataType: 'json',
    success: function(data) {
      random_image = data.image.links.original;
      $("img#random_image").attr("src", random_image);
    }
  });
}