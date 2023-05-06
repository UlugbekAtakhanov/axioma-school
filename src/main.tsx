import React from 'react'
import ReactDOM from 'react-dom/client'
import { routes } from './App.tsx'
import './index.css'
import { ThemeProvider } from "@material-tailwind/react";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './i18n/i18n.ts';

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider>
			<RouterProvider router={router} />
		</ThemeProvider>
	</React.StrictMode>,
)


