gameStart();
function gameStart() {
  $("body").on("keypress", function (event) {
    $(".title").text("Game Starting in 3Sec");
    setTimeout(function () {
      $(".title").text("Level 1");
      var count = 0;
      addingClick(count);
      var i = 2500;
      myLoop(i);
    }, 3000);
  });
}

function clickButton(randomNumber) {
  if (randomNumber === 1) {
    $(".red").addClass("redBox");

    var red = new Audio("sounds/red.mp3");
    red.play();
  } else if (randomNumber === 2) {
    $(".green").addClass("greenBox");
    var green = new Audio("sounds/green.mp3");
    green.play();
  } else if (randomNumber === 3) {
    $(".yellow").addClass("yellowBox");
    var yellow = new Audio("sounds/yellow.mp3");
    yellow.play();
  } else {
    $(".blue").addClass("blueBox");
    var blue = new Audio("sounds/blue.mp3");
    blue.play();
  }

  setTimeout(function () {
    if (randomNumber === 1) {
      $(".red").removeClass("redBox");
    } else if (randomNumber === 2) {
      $(".green").removeClass("greenBox");
    } else if (randomNumber === 3) {
      $(".yellow").removeClass("yellowBox");
    } else {
      $(".blue").removeClass("blueBox");
    }
  }, 1500);
}

/******Adding clicl event****** */

function addingClick(count) {
  var clickChecker = 0;
  $(".red").click(function () {
    var classCheck = $(".red").hasClass("redBox");
    if (classCheck) {
      count++;
      $(".score").text("Score : " + count);
      level(count);
    } else {
      wrongClick();
    }
  });

  $(".green").click(function () {
    var classCheck = $(".green").hasClass("greenBox");
    if (classCheck) {
      count++;
      $(".score").text("Score : " + count);
      level(count);
    } else {
      wrongClick();
    }
  });

  $(".yellow").click(function () {
    var classCheck = $(".yellow").hasClass("yellowBox");
    if (classCheck) {
      count++;
      $(".score").text("Score : " + count);
      level(count);
    } else {
      wrongClick();
    }
  });

  $(".blue").click(function () {
    var classCheck = $(".blue").hasClass("blueBox");
    if (classCheck) {
      count++;
      $(".score").text("Score : " + count);
      level(count);
    } else {
      wrongClick();
    }
  });
}

/******Level 1 */

function myLoop(i) {
  setTimeout(function () {
    var randomNumber = Math.floor(Math.random() * 4) + 1;
    clickButton(randomNumber);
  }, i);
}

/************Wrong click*********** */

function wrongClick() {
  var wrong = new Audio("sounds/wrong.mp3");
  wrong.play();
  $("body").css("background-color", "black");
}

/************Levels********* */

function level(count) {
  if (count < 10) {
    var i = 2500;
    myLoop(i);
  } else if (count >= 10 && count < 30) {
    var i = 2000;
    myLoop(i);
  } else if (count >= 30 && count < 60) {
    var i = 1800;
    myLoop(i);
  }
}
