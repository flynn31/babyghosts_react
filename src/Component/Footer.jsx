import React, { useState, useEffect } from 'react';
// import "../assets/Main.css";
import logo from "../assets/images/logo.png";
import opensea from "../assets/fonts/opensea.svg";
import discord from "../assets/fonts/discord.svg";
import twitter from "../assets/fonts/twitter.svg";

const Footer_element = (props) => {
    const [headerV] = useState(0);
    console.log(headerV + props);

    // const Demo = props => {
    //     <ScriptTag type='text/javascript' src='../assets/js/appear.js' />
    // }

    useEffect(function () {
        const script = document.createElement('script');
        script.src = "../assets/js/jquery.main.js";
        script.defer = "defer";
        const script1 = document.createElement('script');
        script.src = "../assets/js/jquery.min.js";
        script.defer = "defer";

        document.body.appendChild(script1);
        document.body.appendChild(script);
    });

    return (
        <footer id="footer">
            <div className="footer-block">
                <div className="container">
                    <div className="footer-logo">
                        <a href='#section1'><img src={logo} alt="Baby Ghosts NFT. collection" /></a>
                    </div>
                    <ul className="footer-btns">
                        <li><a href="https://discord.gg/BabyGhosts" target="_blank" rel="noreferrer" className="btn-outline"><span
                            className="btn-inner">10k MEMBERS <span className="icon-discord1 icon"></span></span></a></li>
                        <li><a href="https://twitter.com/BabyGhosts_NFT" target="_blank" rel="noreferrer"
                            className="btn-outline btn-twitter"><span className="btn-inner">11k FOLLOWERS <span
                                className="icon-twitter1 icon"></span></span></a></li>
                    </ul>
                    <ul className="footer-nav">
                        <li>
                            <a href="https://opensea.io/collection/babyghosts" target="_blank" rel="noreferrer"><img
                                src={opensea} alt="Opensea" /></a>
                        </li>
                        <li>
                            <a href="https://discord.gg/BabyGhosts" target="_blank" rel="noreferrer"><img src={discord}
                                alt="discord" /></a>
                        </li>
                        <li>
                            <a href="https://twitter.com/BabyGhosts_NFT" target="_blank" rel="noreferrer"><img src={twitter} alt="Twitter" /></a>
                            {/* <a href="https://twitter.com/BabyGhosts_NFT" target="_blank" rel="noreferrer"
                                onclick="() => {return!1}"><img src={twitter} alt="Twitter" /></a> */}
                            {/* <!-- <a href="https://twitter.com/BabyGhosts_NFT" target="_blank" rel="noreferrer" */}
                            {/* onclick="return!1"><img src="fonts/twitter.svg" alt="Twitter"></a> --> */}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-area">
                <div className="container">
                    <ul className="copyright">
                        <li>Copyright © Baby Ghosts 2021</li>
                        <li>All Rights Reserved</li>
                        {/* <!-- <li><a href="terms.html" target="popup" onclick="return window.open(" terms.html "," popup "," */}
                        {/* width="600,height=600" ),!1 "">Terms of Use</a></li> --> */}
                        <li>
                            <a href="terms.html" target="popup">Terms of Use</a>
                            {/* <a href="terms.html" target="popup"
                                onclick="() => {return window.open('terms.html','popup','width=600, height=600' ),!1 }">Terms of Use</a> */}
                        </li>
                    </ul>
                </div>
            </div>
            {/* <script type='text/javascript' src='../asssets/js/appear.js' />
            <script type='text/javascript' src='../assets/js/jquery.main.js' />
            <script type='text/javascript' src='../assets/js/jquery.min.js' /> */}
            {/* <script src="libs\jquery\jquery.min.js"></script>
            <script src="js/jquery.main.js" defer="defer"></script> */}

        </footer >
    )
}
export default Footer_element;