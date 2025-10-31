import React from "react";
import { FaDownload, FaRegEye } from "react-icons/fa";
// 


export default function DownloadButtons() {

  const handleViewResume = () => {
    window.open("/resumePdf.pdf", "_blank");
  };

  return (
    <div className="md:px-12 flex justify-center flex-wrap gap-2.5">
      <a
        href="/resumePdf.pdf"
        download
        className="inline-flex justify-center h-12 w-40 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <span>
          <FaDownload className="rtl:rotate-180 w-3.5 h-3.5 ms-2" />
        </span>
        PDF
      </a>
      <a
        href="/resumeDocx.docx"
        download
        className="inline-flex h-12 justify-center w-40 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <span>
          <FaDownload className="rtl:rotate-180 w-3.5 h-3.5 ms-2" />
        </span>
        DOCX
      </a>
      <button
        className="inline-flex cursor-pointer p-2 h-12 justify-center w-40 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        onClick={handleViewResume}
      >
        <span>
          <FaRegEye className="rtl:rotate-180 w-3.5 h-3.5 ms-2" />
        </span>
        View
      </button>
    </div>
  );
}
