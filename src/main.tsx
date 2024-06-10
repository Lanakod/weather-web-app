import React from 'react'
import ReactDOM from 'react-dom/client'
import { WebAppProvider } from '@vkruglikov/react-telegram-web-app';
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<WebAppProvider
			options={{
				smoothButtonsTransition: true,
			}}
		>
			<App />
		</WebAppProvider>
	</React.StrictMode>,
)
