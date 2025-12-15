import Navbar from "#components/Navbar";
import Welcome from "#components/Welcome";
import Dock from "#components/Dock";
import { Draggable } from "gsap/Draggable";
import gsap from "gsap";
import Terminal from "#windows/Terminal";
import Safari from "#windows/Safari";
import ResumeWindow from "#windows/Resume";
import FinderWindow from "#windows/Finder";
import TextWindow from "#windows/Text";
import ImageViewerWindow from "#windows/ImageViewer";
import ContactWindow from "#windows/Contact";
import Home from "#components/Home";

gsap.registerPlugin(Draggable);

function App() {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Terminal />
      <Safari />
      <ResumeWindow />
      <FinderWindow />
      <TextWindow />
      <ImageViewerWindow />
      <ContactWindow />
      <Home />
    </main>
  );
}

export default App;
