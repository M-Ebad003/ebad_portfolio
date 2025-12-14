import WindowControls from "#components/WindowControls";
import WindowWrapper from "#hoc/WindowWrapper";
import { DownloadIcon } from "lucide-react";

import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const Resume = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="resume" />
        <h2>Resume.pdf</h2>

        <a
          href="files/resume.pdf"
          download
          title="Download resume"
          className="cursor-pointer"
        >
          <DownloadIcon className="icon" />
        </a>
      </div>
      <div className="max-h-150 overflow-y-scroll">
        <Document file="files/resume.pdf">
          <Page
            pageNumber={1}
            renderTextLayer={true}
            renderAnnotationLayer={true}
            scale={1.25}
          />
        </Document>
      </div>
    </>
  );
};

const ResumeWindow = WindowWrapper(Resume, "resume");

export default ResumeWindow;
