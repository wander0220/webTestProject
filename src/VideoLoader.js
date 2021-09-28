import React, { useState } from "react";

const VideoLoader = () => {
  // const [videoFile, setVideoFile] = useState("");
  // const [videoURL, setVideoURL] = useState(null); //파일

  const handleChangeFile = (event) => {
    // let reader = new FileReader();
    // reader.onloadend = () => {
    //   // 2. 읽기가 완료되면 아래코드가 실행됩니다.
    //   const base = reader.result;
    //   if (base) {
    //     setVideoFile(base.toString()); // 파일 base64 상태 업데이트
    //   }
    // };
    // if (event.target.files[0]) {
    //   reader.readAsDataURL(event.target.files[0]); // 1. 파일을 읽어 버퍼에 저장합니다.
    //   setVideoURL(event.target.files[0]); // 파일 상태 업데이트
    // }
  };

  let blobs;
  let blob;
  let rec;
  let stream;
  let desktopStream;

  const startRecord = async () => {
    desktopStream = await navigator.mediaDevices.getDisplayMedia({
      video: { width: 1280, height: 720 },
    });
    blobs = [];
    const tracks = [...desktopStream.getVideoTracks()];

    stream = new MediaStream(tracks);
    rec = new MediaRecorder(stream, {
      mimeType: "video/webm; codecs=vp9,opus",
    }); // mediaRecorder객체 생성
    rec.ondataavailable = (e) => blobs.push(e.data);
    rec.onstop = async () => {
      blob = new Blob(blobs, { type: "video/webm" });
      let url = window.URL.createObjectURL(blob);
      const download = document.createElement("a");
      download.setAttribute("href", url);
      download.setAttribute("download", "test");
      download.click();
    };
    rec.start(); // 녹화 시작
  };
  const stopRecord = () => {
    rec.stop(); // 화면녹화 종료 및 녹화된 영상 다운로드
    desktopStream.getTracks().forEach((s) => s.stop());
    desktopStream = null;
  };

  return (
    <>
      <div>
        <input
          type="file"
          id="isFile"
          accept="video/*"
          onChange={handleChangeFile}
        />
        <video controls>
          <source src="Sunrise.mp4" /> 영상왜안됨..?
        </video>
      </div>
      <div>
        <button id="startBtn" onClick={startRecord}>
          녹화
        </button>
        <button id="stopBtn" onClick={stopRecord}>
          녹화 중지
        </button>
      </div>
    </>
  );
};

export default VideoLoader;
