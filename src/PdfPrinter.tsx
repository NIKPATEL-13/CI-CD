import { useRef } from 'react';

const PdfPrinter = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const printPdfBlob = (pdfBlob: Blob) => {
    const pdfUrl = URL.createObjectURL(pdfBlob);
    console.log('🚀 ~ printPdfBlob ~ pdfUrl:', pdfUrl);
    printPdfUrl(pdfUrl);
    // Note: URL.revokeObjectURL(pdfUrl) can't be called immediately after printPdfUrl
    // because it will invalidate the URL before the iframe has a chance to load it.
    // Consider revoking the URL after printing is done if possible.
  };

  const printPdfUrl = (pdfUrl: string) => {
    console.log('🚀 ~ printPdfUrl ~ iframeRef.current:', iframeRef.current);
    if (iframeRef.current) {
      iframeRef.current.src = pdfUrl;
      iframeRef.current.onload = () => {
        try {
          // This will attempt to call the print method on the iframe document.
          iframeRef.current?.contentWindow?.print();
        } catch (error) {
          console.error('Error printing the PDF:', error);
        }
      };
    }


  };

  const exampleBlob = new Blob(['Example PDF content'], { type: 'application/pdf' });
  const examplePdfUrl = 'https://www.adobe.com/support/products/enterprise/knowledgecenter/media/c4611_sample_explain.pdf';

  return (
    <>
      <iframe
        ref={iframeRef}
        style={{
          display: 'none',
          width: "100px",
          height: "100px"
        }} // Note: Hide the iframe
        title="PDF Printer"
      ></iframe>

      <input type='button' onClick={() => printPdfUrl(examplePdfUrl)} value='Print PDF with URL' />
      <input type='button' onClick={() => printPdfBlob(exampleBlob)} value='Print PDF with Blob' />
    </>
  );
};

export default PdfPrinter;