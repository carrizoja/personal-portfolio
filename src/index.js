import { getFirestoreApp } from './config/getFirestoreApp';
import { createRoot } from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
const root = createRoot(document.getElementById('root'));



getFirestoreApp();
root.render( < App / > );