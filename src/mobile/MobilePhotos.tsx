import MobileHeader from "./MobileHeader";
import { gallery } from "#constants";
import usePhotosStore from "#store/photo";
import clsx from "clsx";
import { Search, Image as ImageIcon } from "lucide-react";

const MobilePhotos = () => {
  const { activeMenuId, setActiveMenuId } = usePhotosStore();

  const activeGallery =
    Object.values(gallery).find((g) => g.id === activeMenuId) || gallery.library;
  const currentPhotos = activeGallery.children;

  return (
    <div className="mobile-screen">
      <MobileHeader title={activeGallery.title || "All Photos"} />

      {/* Photo grid */}
      <div className="mobile-photos-grid">
        {currentPhotos.map(({ id, img }) => (
          <div key={id} className="mobile-photo-item">
            <img src={img} alt={`Photo ${id}`} />
          </div>
        ))}
      </div>

      {/* Bottom tab bar */}
      <div className="mobile-tab-bar">
        {Object.values(gallery).map(({ id, icon, title }) => (
          <button
            key={id}
            onClick={() => setActiveMenuId(id)}
            className={clsx("mobile-tab", id === activeMenuId && "mobile-tab-active")}
          >
            {icon ? (
              <img src={icon} alt={title} className="mobile-tab-icon" />
            ) : (
              <ImageIcon size={18} />
            )}
            <span>{title}</span>
          </button>
        ))}
        <button className="mobile-tab">
          <Search size={18} />
          <span>Search</span>
        </button>
      </div>
    </div>
  );
};

export default MobilePhotos;
