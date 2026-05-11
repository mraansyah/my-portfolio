import useMobileStore from "#store/mobile";
import type { MobileScreen } from "#store/mobile";
import dayjs from "dayjs";

const allApps = [
  { id: "resume", name: "Resume", icon: "/images/resume.png", screen: "resume" as MobileScreen },
  { id: "mail", name: "Mail", icon: "/images/mail.png", link: "mailto:mhdrafiansyah04@gmail.com" },
  { id: "terminal", name: "Skills", icon: "/images/terminal.png", screen: "terminal" as MobileScreen },
  { id: "github", name: "Github", icon: "/images/github.png", link: "https://github.com/mraansyah" },
  { id: "linkedin", name: "Linkedin", icon: "/images/linkedin.png", link: "https://www.linkedin.com/in/muhammadrafiansyah/" },
  { id: "whatsapp", name: "WhatsApp", icon: "/images/whatsapp.png", link: "https://wa.me/6285777649520" },
  { id: "instagram", name: "Instagram", icon: "/images/instagram.png", link: "https://www.instagram.com/rafiansyahm/" },
];

const dockApps = [
  { id: "finder-dock", name: "Work", icon: "/images/finder.png", screen: "finder" as MobileScreen },
  { id: "safari-dock", name: "Safari", icon: "/images/safari.png", screen: "safari" as MobileScreen },
  { id: "photos-dock", name: "Photos", icon: "/images/photos.png", screen: "photos" as MobileScreen },
  { id: "contact-dock", name: "Contact", icon: "/images/contact.png", screen: "contact" as MobileScreen },
];

const MobileHome = () => {
  const { navigate } = useMobileStore();

  return (
    <div className="mobile-home">
      <div className="mobile-status-bar">
        <span className="mobile-time">{dayjs().format("h:mm")}</span>
        <div className="mobile-status-icons">
          <img src="/icons/wifi.svg" alt="wifi" className="mobile-status-icon" />
        </div>
      </div>

      <div className="mobile-app-grid">
        {allApps.map(({ id, name, icon, screen, link }) => (
          <button
            key={id}
            className="mobile-app-icon"
            onClick={() => {
              if (link) {
                window.open(link, "_blank");
              } else if (screen) {
                navigate(screen);
              }
            }}
          >
            <img src={icon} alt={name} className="mobile-app-icon-img" />
            <span>{name}</span>
          </button>
        ))}
      </div>

      <div className="mobile-search-pill">
        <img src="/icons/search.svg" alt="search" className="mobile-search-icon" />
        <span>Search</span>
      </div>

      <div className="mobile-dock">
        {dockApps.map(({ id, name, icon, screen }) => (
          <button
            key={id}
            className="mobile-dock-icon"
            onClick={() => navigate(screen)}
          >
            <img src={icon} alt={name} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default MobileHome;
