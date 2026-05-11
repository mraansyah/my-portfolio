import MobileHeader from "./MobileHeader";
import { Download } from "lucide-react";
import { pdfjs, Document, Page } from "react-pdf";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const MobileResume = () => {
  return (
    <div className="mobile-screen">
      <MobileHeader
        title="Resume.pdf"
        rightAction={
          <a
            href="/files/resume.pdf"
            download
            className="mobile-header-action"
            title="Download resume"
          >
            <Download size={18} />
          </a>
        }
      />

      <div className="mobile-resume-content">
        <Document file="/files/resume.pdf">
          <Page
            pageNumber={1}
            renderTextLayer
            renderAnnotationLayer
            width={Math.min(window.innerWidth - 32, 400)}
          />
        </Document>
      </div>
    </div>
  );
};

export default MobileResume;
