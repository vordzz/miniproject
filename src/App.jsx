import React, { lazy, Suspense } from "react";
const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"));
const NewsEvents = lazy(() => import("./pages/NewsEvents"));
const SelfHelp = lazy(() => import("./pages/SelfHelp"));
const Layout = lazy(() => import("./components/Layouts"));
const About = lazy(() => import("./pages/About"));
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Suspense
          fallback={
            <>
              <h1>Loading...</h1>
            </>
          }
        >
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/self-help" element={<SelfHelp />} />
              <Route path="/news-events" element={<NewsEvents />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Layout>
        </Suspense>
      </BrowserRouter>
    </>
  );
};

export default App;
