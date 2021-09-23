import html2canvas from "html2canvas";

function CaptureCanvas() {
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

  return (
    <>
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
      <div id="captureImage"></div>
    </>
  );
}
export default CaptureCanvas;
