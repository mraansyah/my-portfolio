import useMobileStore from "#store/mobile";
import MobileHome from "./MobileHome";
import MobileFinder from "./MobileFinder";
import MobileContact from "./MobileContact";
import MobileSafari from "./MobileSafari";
import MobilePhotos from "./MobilePhotos";
import MobileResume from "./MobileResume";
import MobileTerminal from "./MobileTerminal";
import MobileText from "./MobileText";
import MobileImage from "./MobileImage";

const screens = {
  home: MobileHome,
  finder: MobileFinder,
  contact: MobileContact,
  safari: MobileSafari,
  photos: MobilePhotos,
  resume: MobileResume,
  terminal: MobileTerminal,
  txtfile: MobileText,
  imgfile: MobileImage,
};

const MobileApp = () => {
  const { activeScreen } = useMobileStore();
  const Screen = screens[activeScreen] || MobileHome;

  return (
    <div className="mobile-app">
      <Screen />
    </div>
  );
};

export default MobileApp;
