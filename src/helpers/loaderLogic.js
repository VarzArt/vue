export default function loader(cvs) {
  const $ = cvs.getContext("2d");
  const W = (cvs.width = window.innerWidth);
  const H = (cvs.height = window.innerHeight);

  const spans = Array.from(document.querySelectorAll("span"));

  let str = "A+B0C-D1E=F2G H3I J4K L5M N6O P7Q V!",
    matrix = str.split("");

  let font = 11,
    col = W / font,
    arr = [];

  for (let i = 0; i < col; i++) arr[i] = 1;

  function draw() {
    $.fillStyle = "rgba(0,0,0,.1)";
    $.fillRect(0, 0, W, H);
    $.fillStyle = "#05d9e8";
    $.font = font + "px system-ui";
    for (let i = 0; i < arr.length; i++) {
      let txt = matrix[Math.floor(Math.random() * matrix.length)];
      $.fillText(txt, i * font, arr[i] * font);
      if (arr[i] * font > H && Math.random() > 0.975) arr[i] = 0;
      arr[i]++;
    }
  }

  const textLoading = setInterval(text, 50);

  setTimeout(() => {
    console.log(1);
    textLoading;
  }, 2500);

  const str3 = "L1O 2A3 D4I 5N6 G 7P8 A9G 0E!",
    matrix3 = str3.split("");
  const str2 = "LOADING PAGE!",
    matrix2 = str2.split("");

  const drawInt = setInterval(draw, 25);

  function text() {
    for (let i = 0; i < spans.length; i++) {
      let txt = matrix3[Math.floor(Math.random() * matrix.length)];
      spans[i].textContent = txt;
    }
    if (spans[0].textContent === matrix2[0]) {
      spans[0].textContent = matrix2[0];
      spans[0].setAttribute(
        "style",
        " text-shadow: 0 0 2px #fff, 0 0 5px #fff, 0 0 7px #fff, 0 0 11px #05d9e8, 0 0 24px #05d9e8, 0 0 36px #05d9e8;"
      );
      spans.shift(spans[0]);
      matrix2.shift(matrix2[0]);
      if (spans.length === 0) {
        clearInterval(textLoading);
        matrix = [""];
      }
    }
  }

  window.addEventListener("resize", () => location.reload());
}
