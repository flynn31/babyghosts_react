import React from 'react';
import logo from "../assets/images/logo.png";
import opensea from "../assets/fonts/opensea.svg";
import discord from "../assets/fonts/discord.svg";
import twitter from "../assets/fonts/twitter.svg";

const Footer_element = (props) => {
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
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-area">
                <div className="container">
                    <ul className="copyright">
                        <li>Copyright © Baby Ghosts 2021</li>
                        <li>All Rights Reserved</li>
                        <li>
                            <a href="terms.html" target="popup">Terms of Use</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer >
    )
}
export default Footer_element;