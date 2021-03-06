import React, { useState } from "react";
// import video from "./video/Sunrise.mp4";

const VideoLoader = () => {
  const [videoFile, setVideoFile] = useState("");
  const [videoURL, setVideoURL] = useState(null); //파일

  const handleChangeFile = (event) => {
    let reader = new FileReader();
    reader.onloadend = () => {
      // 2. 읽기가 완료되면 아래코드가 실행됩니다.
      const base = reader.result;
      if (base) {
        setVideoFile(base.toString()); // 파일 base64 상태 업데이트
      }
    };
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]); // 1. 파일을 읽어 버퍼에 저장합니다.
      setVideoURL(event.target.files[0]); // 파일 상태 업데이트
    }
  };

  let rec;
  let desktopStream;

  const startRecord = async () => {
    desktopStream = await navigator.mediaDevices.getDisplayMedia({
      video: { width: 1280, height: 720 },
    });
    let blobs = [];
    const tracks = [...desktopStream.getVideoTracks()];

    let stream = new MediaStream(tracks);
    rec = new MediaRecorder(stream, {
      mimeType: "video/webm; codecs=vp9,opus",
    }); // mediaRecorder객체 생성
    rec.ondataavailable = (e) => blobs.push(e.data);
    rec.onstop = async () => {
      let blob = new Blob(blobs, { type: "video/mp4" });
      let url = window.URL.createObjectURL(blob);
      var now = new Date();
      const download = document.createElement("a");
      download.setAttribute("href", url);
      download.setAttribute(
        "download",
        now.getFullYear() + "_" + now.getMonth() + "_" + now.getDate()
      );
      download.click();
    };
    rec.start(); // 녹화 시작
  };

  const pauseRecord = () => {
    if (rec.state === "recording") {
      rec.pause();
    }
    else if (rec.state === "paused") {
      rec.resume();
    }

  }

  const stopRecord = () => {
    rec.stop(); // 화면녹화 종료 및 녹화된 영상 다운로드
    desktopStream.getTracks().forEach((s) => s.stop());
    desktopStream = null;
  };

  return (
    <>
      <div>
        <input type="file" accept="video/*" onChange={handleChangeFile} />
        <div>
          <video
            controls
            autoPlay
            muted
            src={videoFile}
            alt="사이트 녹화영상 재생"
          />
        </div>
      </div>
      <div>
        <button onClick={startRecord}>녹화</button>
        <button onClick={pauseRecord}>녹화 정지</button>
        <button onClick={stopRecord}>녹화 중지</button>
      </div>
    </>
  );
};

export default VideoLoader;
