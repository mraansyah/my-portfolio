import MobileHeader from "./MobileHeader";
import useWindowStore from "#store/window";
import type { LocationData } from "#store/location";

const MobileImage = () => {
  const { windows } = useWindowStore();
  const data = windows.imgfile?.data as LocationData;

  if (!data) return null;

  const { name, imageUrl } = data;

  return (
    <div className="mobile-screen">
      <MobileHeader title={name} />
      <div className="flex-1 overflow-y-auto flex items-center justify-center bg-black p-2">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="max-w-full max-h-full object-contain"
          />
        ) : (
          <p className="text-white">Image not found</p>
        )}
      </div>
    </div>
  );
};

export default MobileImage;
