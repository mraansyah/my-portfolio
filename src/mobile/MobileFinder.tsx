import { locations } from "#constants";
import useLocationStore, { type LocationData } from "#store/location";
import useMobileStore from "#store/mobile";
import useWindowStore from "#store/window";
import { Search, ListFilter, ChevronLeft } from "lucide-react";
import clsx from "clsx";

const MobileFinder = () => {
  const { activeLocation, setActiveLocation } = useLocationStore();
  const { openWindow } = useWindowStore();
  const { navigate, goBack, folderHistory, setFolderHistory } = useMobileStore();

  const handleOpenItem = (item: LocationData) => {
    if (item.fileType === "pdf") return navigate("resume");
    if (item.kind === "folder") {
      setFolderHistory([...folderHistory, activeLocation]);
      setActiveLocation(item);
      return;
    }
    if (["fig", "url"].includes(item.fileType) && item.href)
      return window.open(item.href, "_blank");

    if (item.fileType === "txt") {
      openWindow("txtfile", item);
      return navigate("txtfile");
    }
    if (item.fileType === "img") {
      openWindow("imgfile", item);
      return navigate("imgfile");
    }
  };

  const handleGoBack = () => {
    if (folderHistory.length > 0) {
      const prev = folderHistory[folderHistory.length - 1];
      setFolderHistory(folderHistory.slice(0, -1));
      setActiveLocation(prev);
    } else {
      goBack();
    }
  };

  const items = activeLocation?.children || [];
  const isWork = activeLocation?.type === "work" || activeLocation?.id === 1;

  return (
    <div className="mobile-screen">
      <header className="mobile-header">
        <div className="mobile-header-left">
          <button onClick={handleGoBack} className="mobile-back-btn">
            <ChevronLeft size={20} />
            <span>Go back</span>
          </button>
        </div>
        <h1 className="mobile-header-title">{activeLocation?.name || "Work"}</h1>
        <div className="mobile-header-right">
          <button className="mobile-header-action">
            <ListFilter size={18} />
          </button>
        </div>
      </header>

      <div className="mobile-search-bar">
        <Search size={16} className="mobile-search-bar-icon" />
        <input type="text" placeholder="Search" readOnly />
      </div>

      <div className="mobile-file-grid">
        {items.map((item) => (
          <button
            key={item.id}
            className="mobile-file-item"
            onClick={() => handleOpenItem(item)}
          >
            <img
              src={item.icon}
              alt={item.name}
              className={clsx(
                "mobile-file-icon",
                item.kind === "folder" && "mobile-folder-icon",
              )}
            />
            <p className="mobile-file-name">{item.name}</p>
          </button>
        ))}
      </div>

      <div className="mobile-tab-bar">
        <button
          className={clsx("mobile-tab", isWork && "mobile-tab-active")}
          onClick={() => {
            setFolderHistory([]);
            setActiveLocation(locations.work);
          }}
        >
          <img src="/images/folder.png" alt="Work" className="mobile-tab-icon" />
          <span>Work</span>
        </button>
        <button
          className={clsx("mobile-tab", !isWork && "mobile-tab-active")}
          onClick={() => {
            setFolderHistory([]);
            setActiveLocation(locations.about);
          }}
        >
          <img src="/icons/user.svg" alt="About Me" className="mobile-tab-icon" />
          <span>About Me</span>
        </button>
      </div>
    </div>
  );
};

export default MobileFinder;
