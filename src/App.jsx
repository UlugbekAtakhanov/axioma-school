import { Route, createRoutesFromElements, Outlet } from 'react-router-dom'
import HomePageLayout from './layouts/HomePageLayout'
import HomePage from './pages/home-page/HomePage'
import Navbar from './components/navbar-components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App



export const routes = createRoutesFromElements(
  <Route path="/" element={<App />} >

    {/* home page */}
    <Route path="/" element={<HomePageLayout />}>
      <Route index element={<HomePage />} />
    </Route>

  </Route>
)
