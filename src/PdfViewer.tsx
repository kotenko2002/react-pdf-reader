import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import './App.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface PdfViewerProps {
  url: string;
}

const PdfViewer: React.FC<PdfViewerProps> = ({ url }) => {
  const [numPages, setNumPages] = React.useState<number | null>(null);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <div className="pdf-viewer-container">
      <Document
        file={url}
        onLoadSuccess={onDocumentLoadSuccess}
        className="pdf-viewer"
      >
        {Array.from(new Array(numPages), (el, index) => (
          <div className="page-container" key={`page_container_${index}`}>
            <Page key={`page_${index + 1}`} pageNumber={index + 1} renderTextLayer={false}/>
          </div>
        ))}
      </Document>
    </div>
  );
};

export default PdfViewer;
