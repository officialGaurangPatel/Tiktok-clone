import "./App.css";
import Video from "./Video";

function App() {
  return (
    <div className="App">
      <div className="app__videos">
        <Video
          url="https://www.statuslagao.com/whatsapp/videos/mahakal/mahadev-status-video-237.mp4"
          channel="GaurangPatel"
          song="Bhola Hai Bhandari"
          likes={100}
          shares={18}
          message={218}
          description="Har Har Mahadev"
        />
        <Video
          url="https://www.statuslagao.com/whatsapp/videos/mahakal/mahadev-status-video-239.mp4"
          channel="Shivam Vora"
          song="Mahadeva "
          likes={900}
          shares={118}
          message={1218}
          description="Har Har Mahadev"
        />
      </div>
    </div>
  );
}

export default App;
