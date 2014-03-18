// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  var qStr=(document.URL).split("?")[1]
  var qItems=qStr.split(":")

  var target=qItems[0]
  var b=$("body").find(".container").find(".header")
    b.html('<p class="game-intro">Join the numbers and get to the <strong>'+target+' tile!</strong></p>')

  window.targetScore=parseInt(qItems[0])
  var s=parseInt(qItems[1])
  var a=$("body").find(".container").find(".game-container").find(".grid-container")
  console.log(a)

  //var a=$("body").find(".container").find(".heading").find(".hTitle").html(
    //  '<h1 class="title">20338</h1>')

  for(var i=0;i<s;i++){
      var newDiv=$('<div class="grid-row"></div>')
      for(var j=0;j<s;j++){
          newDiv.append('<div class="grid-cell"></div>')
      }
      a.append(newDiv)
  }


  new GameManager(s, KeyboardInputManager, HTMLActuator, LocalScoreManager);
});