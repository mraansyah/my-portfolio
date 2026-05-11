import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

import { Dock, Home, Navbar, Welcome } from "#components";
import { Terminal, Safari, Resume, Finder, Text, Image, Contact, Photos } from "#windows";
import useIsMobile from "#hooks/useIsMobile";
import MobileApp from "./mobile/MobileApp";

gsap.registerPlugin(Draggable);

const App = () => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <MobileApp />;
  }

  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contact />
      <Home />
      <Photos />
    </main>
  )
}

export default App