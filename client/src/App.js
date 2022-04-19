import Layout from "./Components/Layout";
import Footer from "./Components/Footer";
import Landing from "./Screens/Landing";
import React from 'react';
import "./CSS/App.css";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Landing />
        <Footer />
      </Layout>
    </div>
  );
};

export default App;

