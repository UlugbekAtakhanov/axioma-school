import React from 'react'
import ReactDOM from 'react-dom/client'
import { routes } from './App'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './i18n/i18n';

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ThemeProvider>
			<RouterProvider router={router} />
		</ThemeProvider>
	</React.StrictMode>,
)


