/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Capabilities from './pages/Capabilities';
import Portfolio from './pages/Portfolio';
import GlobalPresence from './pages/GlobalPresence';
import Insights from './pages/Insights';
import Contact from './pages/Contact';
import Leadership from "./pages/Leadership";
import VisualInsight from "./pages/VisualInsight"

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/capabilities" element={<Capabilities />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/global" element={<GlobalPresence />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/leadership" element={<Leadership />}/>
            <Route path="/VisualInsight" element={<VisualInsight />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
