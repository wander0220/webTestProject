import html2canvas from "html2canvas";
import styled from "styled-components";

const DivBox = styled.div`
  width: 50%;
  margin-bottom: 3em;
`;

const CaptureCanvas = () => {
  function onCapture() {
    // console.log("onCapture");
    html2canvas(document.getElementById("div")).then((canvas) => {
      var link = document.createElement("a");
      document.body.appendChild(link);
      link.href = canvas.toDataURL("image/png");
      link.download = "image-download.png";
      link.click();
      document.body.removeChild(link);
    });
  }

  function showCaptureImage() {
    html2canvas(document.getElementById("div")).then((canvas) => {
      document.getElementById("captureImage").appendChild(canvas);
    });
  }

  function printImage() {
    // var file = document.getElementById("idFile");
    // value를 사용하면 에러남.
    //console.log(file.val);

    var canvas = document.getElementById("imgCanvas");
    canvas.width = 300;
    canvas.height = 300;
    canvas.style.border = "1px solid black";
    var context = canvas.getContext("2d");

    var img = new Image();
    img.src =
      "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
    img.onload = function () {
      context.drawImage(img, 0, 0, 300, 300);
    };

    // const name =
    // console.log(name);
  }
  return (
    <DivBox>
      <div id="div">
        <h1>Lorem ipsum</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <input
          type="button"
          value="화면 캡쳐 출력"
          onClick={showCaptureImage}
        />
        <input type="button" value="화면 캡쳐 저장" onClick={onCapture} />
      </div>
      <div>
        <input type="file" id="isFile" />
        <input type="submit" value="출력" onClick={printImage} />
        <canvas id="imgCanvas" height="0em"></canvas>
      </div>

      <div id="captureImage"></div>
    </DivBox>
  );
};

export default CaptureCanvas;
