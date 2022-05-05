import React, { useState, useEffect } from 'react';
import './App.css';
import "./assets/Common.css";
import $ from "jquery";
import HeaderElement from './Component/Header';
import MainElement from "./Component/Main";
import FooterElement from './Component/Footer';
import MetamaskElement from "./Component/Metamask";
// import ImportJs from './Component/ImportJs';

function App() {
  const [init] = useState(0);
  const [metamask, setMetamask] = useState(0);

  $("#btn_primary_wallet").on("click", () => {
    // metamask.style.display = "block";
    // setTimeout(function () {
    // 	var val = document.getElementById('openMeta').value;
    // 	metamaskLoading.style.display = "none";
    // 	metamaskLogin.style.display = "block";
    // 	if (val == 0) {
    // 		animateLogo();
    // 		document.getElementById('openMeta').value = 1;
    // 	}
    // 	metamaskInput.focus();
    // }, 1500);
    setMetamask(metamask + 1);
  })

  const metamask_ele = () => { console.log(metamask); return metamask > 1 ? <MetamaskElement data={metamask} /> : '' }

  useEffect(() => {
    // const script = document.createElement('script');
    // script.src = "./assets/js/appear.js";
    // script.async = true;
    // document.body.appendChild(script);
    // const script1 = document.createElement('script');
    // script.src = "./assets/js/jquery.main.js";
    // script.async = true;
    // document.body.appendChild(script);
    // const script2 = document.createElement('script');
    // script.src = "./assets/js/jquery.min.js";
    // script.async = true;
    // document.body.appendChild(script);
    // document.body.appendChild(script1);
    // document.body.appendChild(script2);
    return () => {
      // document.body.removeChild(script);
    }
  }, []);
  // <script type='text/javascript' src='../assets/js/appear.js' />
  // <script type='text/javascript' src='../assets/js/jquery.main.js' />
  // <script type='text/javascript' src='../assets/js/jquery.min.js' />


  return (
    <div className="App">
      {/* <ImportJs resourceURL='../assets/js/appear.js' /> */}
      <div className='wrapper'>
        <HeaderElement data={init} />
        <MainElement />
        <FooterElement />
      </div>
      {metamask_ele()}
    </div>
  );
}

export default App;
