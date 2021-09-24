//import logo from "./logo.svg";
import "./App.css";
//import MyComponent from "./MyComponent";
import CaptureCanvas from "./CaptureCanvas";
import VideoLoader from "./VideoLoader";
import VideoRecoder from "./VideoRecoder";

function App() {
  return (
    <>
      <CaptureCanvas />
      <VideoLoader />
      <VideoRecoder />
    </>
  );
}

export default App;
