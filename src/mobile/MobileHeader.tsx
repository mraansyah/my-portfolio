import useMobileStore from "#store/mobile";
import { ChevronLeft } from "lucide-react";

interface MobileHeaderProps {
  title: string;
  rightAction?: React.ReactNode;
  onBack?: () => void;
}

const MobileHeader = ({ title, rightAction, onBack }: MobileHeaderProps) => {
  const { goBack } = useMobileStore();

  const handleBack = () => {
    if (onBack) onBack();
    goBack();
  };

  return (
    <header className="mobile-header">
      <div className="mobile-header-left">
        <button onClick={handleBack} className="mobile-back-btn">
          <ChevronLeft size={20} />
          <span>Go back</span>
        </button>
      </div>
      <h1 className="mobile-header-title">{title}</h1>
      <div className="mobile-header-right">
        {rightAction}
      </div>
    </header>
  );
};

export default MobileHeader;
