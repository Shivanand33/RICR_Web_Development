function start() {
  console.log("Game start");

  document.getElementById("p1Play").disabled = false;
  document.getElementById("restart").disabled = false;
  document.getElementById("start").disabled = true;
}
function restart() {
  window.location.reload();
}

function p1Play() {
  console.log("Player1Playing");
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
      document.getElementById("p1dice").src = "./images/2.png";
      break;
    }
    default: {
      document.getElementById("p1dice").src = "./images/6.png";
      break;
    }
  }

  if (DF === 6) {
    document.getElementById("p1Play").disabled = true;
    document.getElementById("p2Play").disabled = false;
  } else {
    Score = Score + DF;
    document.getElementById("p1sc").innerText = Score;
  }
}

function p2Play() {
  console.log("Player2Playing");
  let Score = Number(document.getElementById("p2sc").innerText);

  const DF = Math.floor(Math.random() * 6) + 1;

  document.getElementById("p2dice").src = `./images/${DF}.png`;

  if (DF === 6) {
    document.getElementById("p1Play").disabled = false;
    document.getElementById("p2Play").disabled = true;
  } else {
    Score = Score + DF;
    document.getElementById("p2sc").innerText = Score;
  }
}
