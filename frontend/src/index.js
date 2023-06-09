import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from './context/authContext';
import { DarkModeContexrProvider } from './context/darkModeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
//   <React.StrictMode>
	<DarkModeContexrProvider>
		<AuthContextProvider>
			<App />
		</AuthContextProvider>
	</DarkModeContexrProvider>
	
//   {/* </React.StrictMode> */}
);