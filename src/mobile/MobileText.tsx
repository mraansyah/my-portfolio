import MobileHeader from "./MobileHeader";
import useWindowStore from "#store/window";
import type { LocationData } from "#store/location";

const MobileText = () => {
  const { windows, closeWindow } = useWindowStore();
  const data = windows.txtfile?.data as LocationData;

  if (!data) return null;

  const { name, image, subtitle, description } = data;

  return (
    <div className="mobile-screen">
      <MobileHeader title={name} onBack={() => closeWindow("txtfile")} />
      <div className="flex-1 overflow-y-auto p-5 space-y-6 bg-white">
        {image ? (
          <div className="w-full">
            <img src={image} alt={name} className="w-full h-auto rounded" />
          </div>
        ) : null}

        {subtitle ? <h3 className="text-lg font-bold">{subtitle}</h3> : null}

        {Array.isArray(description) && description.length > 0 ? (
          <div className="space-y-4 leading-relaxed text-sm text-gray-700">
            {description.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default MobileText;
