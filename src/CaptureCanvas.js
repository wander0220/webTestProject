import html2canvas from "html2canvas";
import styled from "styled-components";
import React, { useState } from "react";

const DivBox = styled.div`
  width: 50%;
  margin-bottom: 3em;
`;

const CaptureCanvas = () => {
  const onCapture = (event) => {
    html2canvas(document.getElementById("div")).then((canvas) => {
      var link = document.createElement("a");
      document.body.appendChild(link);
      link.href = canvas.toDataURL("image/png");
      var now = new Date();
      link.download = now.getFullYear() + now.getMonth() + now.getDate() + ".png";
      link.click();
      document.body.removeChild(link);
    });
  };

  // function showCaptureImage() {
  //   html2canvas(document.getElementById("div")).then((canvas) => {
  //     document.getElementById("captureImage").appendChild(canvas);
  //   });
  // }

  // 이미지 출력
  const [imgBase64, setImgBase64] = useState("");
  const [imgFile, setImgFile] = useState(null); //파일

  const handleChangeFile = (event) => {
    let reader = new FileReader();
    reader.onloadend = () => {
      // 2. 읽기가 완료되면 아래코드가 실행됩니다.
      const base64 = reader.result;
      if (base64) {
        setImgBase64(base64.toString()); // 파일 base64 상태 업데이트
      }
    };
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]); // 1. 파일을 읽어 버퍼에 저장합니다.
      setImgFile(event.target.files[0]); // 파일 상태 업데이트
    }
  };

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
        <input type="button" value="화면 캡쳐" onClick={onCapture} />
      </div>
      <div>
        <input
          type="file"
          id="isFile"
          accept="image/*"
          onChange={handleChangeFile}
        />
        <div id="imgCanvas">
          <img src={imgBase64} alt="캡쳐화면출력" />
        </div>
      </div>
    </DivBox>
  );
};

export default CaptureCanvas;
