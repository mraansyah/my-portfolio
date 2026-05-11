import MobileHeader from "./MobileHeader";
import { socials } from "#constants";

const MobileContact = () => {
  return (
    <div className="mobile-screen">
      <MobileHeader title="Contact Me" />

      <div className="mobile-contact-content">
        <div className="mobile-contact-profile">
          <img
            src="/images/contact/aboutme.jpg"
            alt="Rafi"
            className="mobile-contact-avatar"
          />
          <h2 className="mobile-contact-title">Let's Connect</h2>
          <p className="mobile-contact-subtitle">
            Got an idea? A bug to squash?
          </p>
          <p className="mobile-contact-subtitle">
            Or just wanna talk tech? I'm in.
          </p>
        </div>

        <div className="mobile-contact-cards">
          {socials.map(({ id, bg, link, icon, text }) => (
            <a
              key={id}
              href={link || "#"}
              target={link ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="mobile-contact-card"
              style={{ backgroundColor: bg }}
            >
              <img src={icon} alt={text} className="mobile-contact-card-icon" />
              <span className="mobile-contact-card-text">{text}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileContact;
