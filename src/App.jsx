import { Route, createRoutesFromElements, Outlet } from 'react-router-dom'
import HomePageLayout from './layouts/HomePageLayout'
import HomePage from './pages/home-page/HomePage'
import Navbar from './components/navbar-components/Navbar'
import Footer1 from './components/footer-components/Footer1'
import Footer2 from './components/footer-components/Footer2'

const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer1 />
      <Footer2 />

      {/* <div className="h-screen"></div> */}
      {/* <div className="h-screen"></div> */}
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
