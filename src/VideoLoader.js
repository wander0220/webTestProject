const VideoLoader = () => {
  function playVideo() {
    console.log("playVideo!");
  }

  return (
    <div>
      <input type="file" id="isFile" accept="video/mp4" required />
      <input type="submit" value="재생" onClick={playVideo} />
    </div>
  );
};

export default VideoLoader;
