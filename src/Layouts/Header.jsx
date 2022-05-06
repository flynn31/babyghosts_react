import React from 'react';
import "../assets/style/Main.css";
import logo from "../assets/images/logo.png";
import opensea from "../assets/fonts/opensea.svg";
import discord from "../assets/fonts/discord.svg";
import twitter from "../assets/fonts/twitter.svg";
const Header_element = () => {
    return (
        <header id="header">
            <div className="container">
                <div className="logo">
                    <a href="#section1"><img src={logo} alt="Baby Ghosts NFT Collection" /></a>
                </div>
                <nav id="nav">
                    <ul className="menu-list">
                        <li><a href="#section1">Welcome</a></li>
                        <li><a href="#section2">Goals</a></li>
                        <li><a href="#section3">Rarity</a></li>
                        <li><a href="#section5">Team</a></li>
                        <li><a href="#section4">FAQ</a></li>
                    </ul>
                    <ul className="social-list">
                        <li>
                            <a href="https://opensea.io/collection/babyghosts" target="_blank" rel="noreferrer">
                                <img src={opensea} alt="Opensea" />
                            </a>
                        </li>
                        <li>
                            <a href="https://discord.gg/BabyGhosts" target="_blank" rel="noreferrer">
                                <img src={discord} alt="discord" />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/BabyGhosts_NFT" target="_blank" rel="noreferrer">
                                <img src={twitter} alt="twitter" />
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header_element;