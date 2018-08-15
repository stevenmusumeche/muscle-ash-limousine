document.addEventListener("DOMContentLoaded", () => {
  var button = document.getElementById("start-button") as HTMLButtonElement;
  button.addEventListener("click", onButtonClick);
});

const onButtonClick = () => {
  var ws = new WebSocket("ws://localhost:8080/");
  ws.onmessage = onWsMessage;
};

const onWsMessage = (event: { data: string }) => {
  var randomBits = event.data;

  // load DOM element
  var canvas = document.getElementById("random-drawing") as HTMLCanvasElement;
  var context = canvas.getContext("2d") as CanvasRenderingContext2D;

  // fill the entire canvas with white
  context.fillStyle = "rgb(255,255,255)";
  context.fillRect(0, 0, canvas.width, canvas.height);

  // fill pixels black if the corresponding data is "1"
  for (let i = 0; i < 800; i++) {
    for (let j = 0; j < 100; j++) {
      let dataIndex = (i + 1) * (j + 1);
      if (randomBits[dataIndex] === "1") {
        context.fillStyle = "rgb(0,0,0)";
        context.fillRect(i, j, 1, 1);
      }
    }
  }
};
