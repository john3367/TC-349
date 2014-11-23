$(".my-div img").hover( function() {
  this.src = "http://i.imgur.com/nTj3Fxx.gif";
},
function() {
  this.src = "http://i.imgur.com/90Mmdcm.png";
}
);

$(".my-div img").mousedown (function() {
  this.src = "http://i.imgur.com/Rfj0a80.png";

  $(".my-div").append( '<img class="hadouken" src="http://i.imgur.com/oTyQRvX.gif" />');
  $(".hadouken")
  .animate({"margin-left": "600px"},1000, "swing",function (){
    $(this).remove();
  });
});

$(".my-div img").mouseup(function() {
  $(".hadouken").remove();
  this.src = "http://i.imgur.com/nTj3Fxx.gif"
});
