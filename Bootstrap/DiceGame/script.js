function start() {
  console.log("start game");
  document.getElementById("roll1").disabled = false;
  document.getElementById("restart").disabled = false;
  document.getElementById("start").disabled = true;
}
function restart() {
  window.location.reload();
}

function roll1() {
  console.log("roll1Playing");
  let Score = Number(document.getElementById("p1sc").innerText);
  const DF = Math.floor(Math.random() * 6) + 1;

  switch (DF) {
    case 1: {
      document.getElementById("p1dice").src = "./images/1.png";
      break;
    }
    case 2: {
      document.getElementById("p1dice").src = "./images/2.png";
      break;
    }
    case 3: {
      document.getElementById("p1dice").src = "./images/3.png";
      break;
    }
    case 4: {
      document.getElementById("p1dice").src = "./images/4.png";
      break;
    }
    case 5: {
      document.getElementById("p1dice").src = "./images/5.png";
      break;
    }
    case 6: {
      document.getElementById("p1dice").src = "./images/6.png";
      break;
    }
    default: {
      document.getElementById("p1dice").src = "./images/1.png";
      break;
    }
  }

  if (DF === 6) {
    document.getElementById("roll1").disabled = true;
    document.getElementById("roll2").disabled = false;
  } else {
    Score = Score + DF;
    document.getElementById("p1sc").innerText = Score;
  }
}

function roll2() {
  console.log("roll2Playing");
  let Score = Number(document.getElementById("p2sc").innerText);
  const DF = Math.floor(Math.random() * 6) + 1;

  document.getElementById("p2dice").src = `./images/${DF}.png`;

  if (DF === 6) {
    document.getElementById("roll2").disabled = true;
    document.getElementById("roll3").disabled = false;
  } else {
    Score = Score + DF;
    document.getElementById("p2sc").innerText = Score;
  }
}

function roll3() {
  console.log("roll3Playing");
  let Score = Number(document.getElementById("p3sc").innerText);
  const DF = Math.floor(Math.random() * 6) + 1;
  document.getElementById("p3dice").src = `./images/${DF}.png`;

  if (DF === 6) {
    document.getElementById("roll3").disabled = true;
    document.getElementById("roll4").disabled = false;
  } else {
    Score = Score + DF;
    document.getElementById("p3sc").innerText = Score;
  }
}

function roll4() {
  console.log("roll4Playing");
  let Score = Number(document.getElementById("p4sc").innerText);
  const DF = Math.floor(Math.random() * 6) + 1;
  document.getElementById("p4dice").src = `./images/${DF}.png`;

  if (DF === 6) {
    document.getElementById("roll4").disabled = true;
    document.getElementById("roll1").disabled = false;
  } else {
    Score = Score + DF;
    document.getElementById("p4sc").innerText = Score;
  }
}
