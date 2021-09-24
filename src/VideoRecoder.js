const VideoRecoder = () => {
  var isRecording = false;
  function recordVideo() {
    isRecording = true;
    return;
  }
  function recordingStop() {
    if (isRecording) {
      isRecording = false;
    }
  }
  return (
    <>
      <button id="startBtn" onClick={recordVideo}>
        녹화
      </button>
      <button id="stopBtn" onClick={recordingStop}>
        녹화 중지
      </button>
      <button id="download">다운로드</button>
    </>
  );
};

export default VideoRecoder;
