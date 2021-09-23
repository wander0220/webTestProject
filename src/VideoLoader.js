function VideoLoader() {
  function playVideo() {
    console.log("비디오 재생");
    //유효성 검사하고 있으면 틀고 안되면 빽.

    // var videoFile = document.getElementById("isFile").val();
    // var fileForm = /(.*?)\.(mp4)$/;

    // if (videoFile !== null && videoFile !== "") {
    //   if (!videoFile.match(fileForm)) {
    //     //alert("mp4 파일만 가능");
    //     console.log("mp4만!!");
    //     document.getElementById("isFile").val("");
    //     //return;
    //   }
    // } else document.getElementById("isFile").val("");
  }

  return (
    <form>
      <input type="file" id="isFile" accept="video/mp4" required />
      <input type="submit" value="재생" onClick={playVideo} />
    </form>
  );
}

export default VideoLoader;
