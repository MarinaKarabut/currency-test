import { lazy, Suspense } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Loader from "../shared/components/Loader"
import routes from "./routes"
import Navbar from "../client/Navbar"

const DashboardPage = lazy(() => import("../client/pages/DashboardPage"))
const InstancesPage = lazy(() => import("../client/pages/InstancesPage"))
const PairsPage = lazy(() => import("../client/pages/PairsPage"))
const AboutPage = lazy(() => import("../client/pages/AboutPage"))
const HelpPage = lazy(() => import("../client/pages/HelpPage"))
const ContactPage = lazy(() => import("../client/pages/ContactPage"))
const NotFoundPage = lazy(() => import("../client/pages/NotFoundPage"))

const App = () => {
  const { dashboard, instances, pairs, about, help, contact } = routes
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path={dashboard} component={DashboardPage} />
            <Route exact path={instances} component={InstancesPage} />
            <Route exact path={pairs} component={PairsPage} />
            <Route exact path={about} component={AboutPage} />
            <Route exact path={help} component={HelpPage} />
            <Route exact path={contact} component={ContactPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
