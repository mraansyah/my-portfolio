import { WindowControls } from "#components";
import { gallery } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import usePhotosStore from "#store/photo";
import useWindowStore from "#store/window"
import clsx from "clsx";
import { Mail, Search } from "lucide-react";

const Photos = () => {
  const { openWindow } = useWindowStore();
  const { activeMenuId, setActiveMenuId } = usePhotosStore();
  const activeGallery = Object.values(gallery).find(
    (g) => g.id === activeMenuId) || gallery.library;
  const currentPhotos = activeGallery.children;

  return (
    <>
      <div id="window-header">
        <WindowControls target="photos" />

        <div className="w-full flex justify-end items-center gap-3 text-gray-500">
          <Mail className="icon" />
          <Search className="icon" />
        </div>
      </div>

      <div className="flex w-full h-[80vh]">
        <div className="sidebar overflow-y-auto">
          <h2>Photos</h2>

          <ul>
            {Object.values(gallery).map(({ id, icon, title }) => (
              <li
                key={id}
                onClick={() => setActiveMenuId(id)}
                className={clsx(id === activeMenuId ? "active" : "not-active")}
              >
                <img src={icon} alt={title} className="w-4" />
                <p>{title}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="gallery flex-1 overflow-auto p-4">
          <div className="photos-grid">
            {currentPhotos.map(({ id, img }, idx) => (
              <div
                key={idx}
                className="photo-item cursor-pointer"
                onClick={() => openWindow("imgfile", {
                  id,
                  name: "Gallery image",
                  icon: "/images/image.png",
                  kind: "file",
                  fileType: "img",
                  imageUrl: img,
                })}
              >
                <img src={img} alt="" className="w-full h-full object-cover rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const PhotosWindow = WindowWrapper(Photos, "photos");
PhotosWindow.displayName = "Photos";

export default PhotosWindow;