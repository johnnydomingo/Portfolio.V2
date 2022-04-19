import Layout from "./Components/Layout";
import Footer from "./Components/Footer";
import Landing from "./Screens/Landing";
import React, {useEffect, useState} from 'react';
import "./CSS/App.css";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 8500);
  }, []);

  return (
    <>
      {loading === false ? (
        <div className="App">
        <Layout>
          <Landing />
          <Footer />
        </Layout>
        </div>
      ) : (
          "Loading..."
  )}
    </>
  );
};


