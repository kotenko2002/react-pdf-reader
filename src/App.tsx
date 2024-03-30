import './App.css';
import PdfViewer from './PdfViewer';

function App() {
  return (
    <div className="App">
      <h1>Перегляд PDF</h1>
      <PdfViewer url="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf" />
    </div>
  );
}

export default App;
