import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import './App.css';
import Counter from './features/counter/Counter';

const Hello = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-200">
      <h1 className="text-blue-500 text-2xl">Hello Tailwind</h1>
      <button
        type="button"
        onClick={() => {
          window.electron.ipcRenderer.openFile(
            `"\\\\VIKI\\Movies F\\La.La.Land.2016.720p.BluRay.x264-SPARKS\\La.La.Land.2016.720p.BluRay.x264-SPARKS.mkv"`
          );
        }}
      >
        LaLa
      </button>
      <button
        type="button"
        onClick={() => {
          window.electron.ipcRenderer.openFile(
            `"\\\\VIKI\\Movies F\\Encanto.2021.1080p.WEBRip.DD5.1.X.264-EVO\\Encanto.2021.1080p.WEBRip.DD5.1.X.264-EVO.mkv"`
          );
        }}
      >
        Encanto
      </button>
    </div>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Counter />} />
          {/* <Route path="/" element={<Hello />} /> */}
        </Routes>
      </Router>
    </Provider>
  );
}
