import MobileHeader from "./MobileHeader";
import { blogPosts } from "#constants";
import { MoveRight } from "lucide-react";

const MobileSafari = () => {
  return (
    <div className="mobile-screen">
      <MobileHeader title="Safari" />

      <div className="mobile-safari-content">
        <h2 className="mobile-safari-blog-title">My Developer Blog</h2>

        <div className="mobile-safari-posts">
          {blogPosts.map(({ id, date, title, image, link }) => (
            <div key={id} className="mobile-safari-post">
              <img src={image} alt={title} className="mobile-safari-post-img" />
              <div className="mobile-safari-post-info">
                <p className="mobile-safari-post-date">{date}</p>
                <h3 className="mobile-safari-post-title">{title}</h3>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-safari-post-link"
                >
                  Check out the full post
                  <MoveRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileSafari;
