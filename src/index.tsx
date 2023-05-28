import React from 'react';
import ReactDOM from 'react-dom/client';
import { JssProvider, ThemeProvider } from 'react-jss';
import App from './App';
import CustomRouter from './Utils/CustomRouter';
import history from './Utils/history';
import './index.css';
import { globalAppTheme } from './jssAppTheme/jssAppTheme';
import reportWebVitals from './reportWebVitals';


const generateId = (rule: { key: string }) => {
	const ms = new Date()
	return `${rule.key}-${ms.getMilliseconds()}`
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <CustomRouter history={history}>
    <ThemeProvider theme={globalAppTheme()}>
      <JssProvider generateId={generateId}>
          <App />
      </JssProvider>
    </ThemeProvider>
  </CustomRouter>
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
