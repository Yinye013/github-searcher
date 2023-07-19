// import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import About from "./components/Pages/About";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <main className=" h-3/4">Content</main>
            </Layout>
          }
        ></Route>
        <Route
          path="/about"
          element={
            <Layout>
              <main>
                <About />
              </main>
            </Layout>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
