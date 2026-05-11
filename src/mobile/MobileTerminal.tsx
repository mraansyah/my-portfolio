import MobileHeader from "./MobileHeader";
import { techStack } from "#constants";
import { Check, Flag } from "lucide-react";

const MobileTerminal = () => {
  return (
    <div className="mobile-screen">
      <MobileHeader title="Tech Stack" />

      <div className="mobile-terminal-content">
        <p className="mobile-terminal-prompt">
          <span className="font-bold">@Rafi % </span>
          Show tech stack
        </p>

        <div className="mobile-terminal-table">
          <div className="mobile-terminal-header-row">
            <span>Category</span>
            <span>Technologies</span>
          </div>

          {techStack.map(({ category, items }) => (
            <div key={category} className="mobile-terminal-row">
              <div className="mobile-terminal-check">
                <Check size={16} className="text-[#00A154]" />
              </div>
              <span className="mobile-terminal-category">{category}</span>
              <span className="mobile-terminal-items">{items.join(", ")}</span>
            </div>
          ))}
        </div>

        <div className="mobile-terminal-footer">
          <p>
            <Check size={16} /> 6 of 6 stacks loaded successfully (100%)
          </p>
          <p className="text-black">
            <Flag size={12} fill="black" /> Render time: 3ms
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileTerminal;
