import Layout from "./Components/Layout";
import Footer from "./Components/Footer";
import Landing from "./Screens/Landing";
// import Spline from "./Components/Spline";
import React, {useEffect, useState} from 'react';
import "./CSS/App.css";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  }, []);

  return (
    <>
      {loading === false ? (
        <div className="App">
          <Layout>
          {/* <Spline /> */}
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


