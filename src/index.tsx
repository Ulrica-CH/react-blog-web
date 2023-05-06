import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import '@/styles/reset.css';
import App from './App';
import '@arco-design/web-react/dist/css/arco.css';
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
