import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CronPage } from "./pages/cron.pages";
import { CronProvider } from "./features/cronContext";
function App() {
  return (
    <>
      <CronProvider>
        <Router>
          <Routes>
            <Route index element={<CronPage />} />
          </Routes>
        </Router>
      </CronProvider>
    </>
  );
}

export default App;
