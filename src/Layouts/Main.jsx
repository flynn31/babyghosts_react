import React, { useState } from 'react';
import Slider from "react-slick";
import FadeInOut from "../Component/FadeInOut";
import DropdownItem from "../Component/DropdownItem";
import MetamaskElement from "../Component/Metamask";
import bannerGhost1 from "../assets/images/banner-ghost1.png";
import bannerGhost2 from "../assets/images/banner-ghost2.png";
import bannerGhost3 from "../assets/images/banner-ghost3.png";
import bg2 from "../assets/images/bg2.png";
import bg3 from "../assets/images/bg3.png";
import bg4 from "../assets/images/bg4.png";
import bg8 from "../assets/images/bg8.jpg";
import bg9 from "../assets/images/bg9.png";
import bg11 from "../assets/images/bg11.png";
import bg13 from "../assets/images/bg13.png";
import postImg2 from "../assets/images/post-img2.png";
import postImg5 from "../assets/images/post-img5.png";
import postImg1 from "../assets/images/post-img6@2x.png";
import postImg3 from "../assets/images/post-img4@2x.png";
import imageGhost from "../assets/images/img-ghost.png";
import image1sm from "../assets/images/image1-sm@2x.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.png";
import img4 from "../assets/images/img4.png";
import img5 from "../assets/images/img05.png";
import img6 from "../assets/images/img6.png";
import img7 from "../assets/images/img7.png";
import img8 from "../assets/images/img8.png";
import slide1 from "../assets/images/slide1.jpg";
import slide2 from "../assets/images/slide2.jpg";
import slide3 from "../assets/images/slide3.jpg";
import slide4 from "../assets/images/slide4.jpg";
import slide5 from "../assets/images/slide5.jpg";
import slide6 from "../assets/images/slide6.jpg";
import slide7 from "../assets/images/slide7.jpg";
import slide8 from "../assets/images/slide8.jpg";
import slide9 from "../assets/images/slide9.jpg";
import slide10 from "../assets/images/slide10.jpg";
import slide11 from "../assets/images/slide11.jpg";
const Main_element = (props) => {
	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 5,
		arrows: false,
		autoplay: true,
		cssEase: "linear",
		autoplaySpeed: 2000,
	};
	const settings1 = {
		dots: false,
		infinite: true,
		slidesToShow: 5,
		arrows: false,
		autoplay: true,
		cssEase: "ease",
		autoplaySpeed: 1500,
	};
	const rarity = {
		dots: false,
		infinite: false,
		slidesToShow: 3,
		arrows: true,
		cssEase: "linear"
	};

	const [metamask, setMetamask] = useState(0);

	const connect_wallet = () => {
		setMetamask(metamask + 1);
	};

	const metamask_ele = () => { return metamask > 0 ? <MetamaskElement data={metamask} /> : '' }

	return (
		<main id="main">
			<section className="banner viewport-section" id="section1">
				<div className="container">
					<div className="bg-stretch bg-holloween">
						<img src={bg11} alt="NoImage" />
					</div>
					<div className="text-bg-holder"><span className="title title-red">WELCOME TO</span>
						<h1>Baby Ghosts</h1>
					</div>
					<FadeInOut show="true" duration={1500}>
						<div className="ghosts">
							<div className="ghost1">
								<img src={bannerGhost1} alt="Ghost" />
							</div>
							<div className="ghost2">
								<img src={bannerGhost2} alt="Ghost" />
							</div>
							<div className="ghost3">
								<img src={bannerGhost3} alt="Ghost" />
							</div>
						</div>
					</FadeInOut>
					<div id="midt">
						<div className="form">
							<button className='btn-primary' id="btn_primary_wallet" onClick={connect_wallet}>CONNECT_WALLET</button>
							<span className="form-txt">
								<span className='form-text-9304'>9304</span>
								/ 10,000 MINTED</span>
						</div>
					</div>
				</div>
			</section>
			<section className="info-block">
				<div className="container">
					<div className="heading"><span className="title title-light-red">No sorcery may exorcise them!</span>
						<h1>BABY GHOSTS</h1>
						<div className="heading-wrap">
							<p>When a wraith daddy and a banshee mommy love each other very much, something magical happens. Out of
								the cabbage patch next to the graveyard rises a brand new generation of revenants! At pre-K, Baby Ghosts
								make friends and discover the world, until one day, the whole daycare is exorcised and all Baby Ghosts
								are released!</p>
							<p>Now lost spirits and spread to the wind, Baby Ghosts are free to haunt throughout the Earth.</p>
						</div>
					</div>
					<Slider  {...settings}>
						<div className="slick-slider-item">
							<img src={slide1} alt="Ghost" />
						</div>
						<div className="slick-slider-item">
							<img src={slide2} alt="Ghost" />
						</div>
						<div className="slick-slider-item">
							<img src={slide3} alt="Ghost" />
						</div>
						<div className="slick-slider-item">
							<img src={slide5} alt="Ghost" />
						</div>
						<div className="slick-slider-item">
							<img src={slide6} alt="Ghost" />
						</div>
						<div className="slick-slider-item">
							<img src={slide7} alt="Ghost" />
						</div>
					</Slider>
					<Slider {...settings1}>
						<div className="slick-slider-item">
							<img src={slide8} alt="Ghost" />
						</div>
						<div className="slick-slider-item">
							<img src={slide9} alt="Ghost" />
						</div>
						<div className="slick-slider-item">
							<img src={slide10} alt="Ghost" />
						</div>
						<div className="slick-slider-item">
							<img src={slide11} alt="Ghost" />
						</div>
						<div className="slick-slider-item">
							<img src={slide1} alt="Ghost" />
						</div>
						<div className="slick-slider-item">
							<img src={slide2} alt="Ghost" />
						</div>
						<div className="slick-slider-item">
							<img src={slide3} alt="Ghost" />
						</div>
					</Slider>
					<Slider {...settings}>
						<div className="slick-slider-item">
							<img src={slide3} alt="Ghost" />
						</div>
						<div className="slick-slider-item">
							<img src={slide4} alt="Ghost" />
						</div>
						<div className="slick-slider-item">
							<img src={slide5} alt="Ghost" />
						</div>
						<div className="slick-slider-item">
							<img src={slide6} alt="Ghost" />
						</div>
						<div className="slick-slider-item">
							<img src={slide7} alt="Ghost" />
						</div>
						<div className="slick-slider-item">
							<img src={slide8} alt="Ghost" />
						</div>
					</Slider>

				</div>
			</section>
			<section className="goals" id="section2">
				<div className='bg-stretch bg'>
					<img src={bg13} alt='nobg13'></img>
				</div>
				<div className="container">
					<div className="heading"><span className="title title-green">Mint them all!</span>
						<h1>THE GOALS</h1>
						<div className="heading-wrap">
							<p>Baby Ghosts are crossing over! Now's your chance to grab yours before they reach the sky. Bred in a
								loving haunted household and eternally newborn, 10 000 Baby Ghosts are looking for a forever home in
								your wallet.</p>
						</div>
					</div>
					<ul className="goal-list">
						<li><span className="percentage"><span className="texture">25</span><sup>%</sup></span>
							<p>We will giveaway <strong>10 Baby Ghosts</strong> to our Discord members and <strong>1 ETH</strong> to a
								random OG Baby Ghost owner from the pre-sale whitelist.</p>
						</li>
						<li><span className="percentage"><span className="texture">50</span><sup>%</sup></span>
							<p>We will be donating <strong>$30,000</strong> to St. Jude Children's Research Hospital (Memphis, USA).
							</p>
						</li>
						<li><span className="percentage"><span className="texture">75</span><sup>%</sup></span>
							<p>We will be launching our Baby Ghosts merch online store. <strong>100%</strong> of the sales will go
								directly to the community wallet.</p>
						</li>
						<li><span className="percentage"><span className="texture">100</span><sup>%</sup></span>
							<p>We will be launching a new <strong>Baby Ghosts theme NFTs collection</strong> with exclusive pre-sale
								access for Baby Ghosts owners. In addition to that, <strong>10 ETH</strong> will be distributed among 10
								Baby Ghosts owners.</p>
						</li>
					</ul>
				</div>
			</section>
			<section className="two-column viewport-section" id="section3">
				<div className="container">
					<div className="two-col">
						<div className="col">
							<div className='bg-stretch bg'>
								<img src={image1sm} alt='' />
							</div>
							<div className="img">
								<div className='bg-stretch bg'>
									<img src={bg4} alt='' />
								</div>
								<FadeInOut show="true" duration={1500}>
									<div className="ghost">
										<img src={imageGhost} alt="Ghost1" />
									</div>
								</FadeInOut>
							</div>
						</div>
						<div className="col">
							<div className="heading"><span className="title">An apparition from preschool!</span>
								<h1>RARITY</h1>
								<p>Find your kindred spirit among 10 000 of possible Baby Ghost combinations! Each Baby Ghost is unique.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="slider-block viewport-section">
				<div className="container">
					<div className="slider">
						<Slider {...rarity}>
							<div className="slide-wrap">
								<div className="img">
									<div className='bg-stretch bg'>
										<img src={bg2} alt='' />
									</div>
									<div className="ghost">
										<img src={img2} alt="" />
									</div>
								</div>
								<div className="text"><span className="sub-title yellow">1% chances drop</span>
									<h2>Hallowed</h2>
									<p>The most festive tier, these Baby Ghosts put the spirit in Halloween! Celebrate the day of the dead
										all year long.</p>
								</div>
							</div>
							<div className="slide-wrap">
								<div className="img">
									<div className='bg-stretch bg'>
										<img src={bg2} alt='' />
									</div>
									<div className="ghost">
										<img src={img3} alt="" />
									</div>
								</div>
								<div className="text"><span className="sub-title">66% chances drop</span>
									<h2>Chilling</h2>
									<p>The most common tier of Baby Ghost, but there just aren't enough of them to go around! They won't
										pale in comparison.</p>
								</div>
							</div>
							<div className="slide-wrap">
								<div className="img">
									<div className='bg-stretch bg'>
										<img src={bg3} alt='' />
									</div>
									<div className="ghost">
										<img src={img4} alt="" />
									</div>
								</div>
								<div className="text"><span className="sub-title blue">20% chances drop</span>
									<h2>Freaky</h2>
									<p>A step-up in value from their chilling counterpart, freaky Baby Ghosts are ready to make a fuss.
									</p>
								</div>
							</div>
							<div className="slide-wrap">
								<div className="img">
									<div className='bg-stretch bg'>
										<img src={bg4} alt='' />
									</div>
									<div className="ghost">
										<img src={img5} alt="" />
									</div>
								</div>
								<div className="text"><span className="sub-title green">13% chances drop</span>
									<h2>Ethereal</h2>
									<p>Starting at this tier, Baby ghosts go beyond with premium traits combinations. These Baby Ghosts
										are to die for.</p>
								</div>

							</div>
						</Slider>
					</div>
				</div>
			</section>
			<section className="meet-block viewport-section">
				<div className="container">
					<div className="meet-wrap" id="section5">
						<div className='bg-stretch bg'>
							<img src={bg9} alt="bg9" />
						</div>
						<span className="title title-gray">Behind the scenes!</span>
						<h1><span className="texture">MEET</span> <span className="block">THE TEAM</span></h1>
					</div>
				</div>
				<div className="meet-ghost">
					<div className="ghost1">
						<img src={img6} alt="" />
					</div>
					<div className="ghost2">
						<img src={postImg1} alt="" />
					</div>
					<div className="ghost3">
						<img src={postImg3} alt="" />
					</div>
				</div>
			</section>
			<section className="post-block">
				<div className="container">
					<div className="posts">
						<div className="post slide">
							<div className="slide-wrap">
								<div className="img">
									<img src={img5} alt="" />
								</div><span className="title title-green">boss</span>
								<h2>Lokii</h2>
								<p>Co-founder and father
									<br />of the Baby Ghosts
								</p>
								<ul className="social-icons">
									<li><a href="https://discord.gg/BabyGhosts" target="_blank" rel="noreferrer"><span
										className="icon icon-discord"></span></a></li>
									<li><a href="https://twitter.com/0xLokii" target="_blank" rel="noreferrer"><span
										className="icon icon-twitter"></span></a></li>
								</ul>
							</div>
						</div>
						<div className="post slide">
							<div className="slide-wrap">
								<div className="img">
									<img src={postImg2} alt="" />
								</div><span className="title title-red">The crypto expert</span>
								<h2>0xBaguette</h2>
								<p>Co-founder and mother of the Baby Ghosts</p>
								<ul className="social-icons">
									<li><a href="https://discord.gg/BabyGhosts" target="_blank" rel="noreferrer"><span
										className="icon icon-discord"></span></a></li>
									<li><a href="https://twitter.com/0xBaguette" target="_blank" rel="noreferrer"><span
										className="icon icon-twitter"></span></a></li>
								</ul>
							</div>
						</div>
						<div className="post slide">
							<div className="slide-wrap">
								<div className="img">
									<img src={img6} alt="" />
								</div>
								<span className="title title-light-green">The artist</span>
								<h2>Charles</h2>
								<p>Creator and God of the Baby Ghosts</p>
								<ul className="social-icons">
									<li><a href="https://discord.gg/BabyGhosts" target="_blank" rel="noreferrer"><span
										className="icon icon-discord"></span></a></li>
									<li><a href="https://twitter.com/BabyGhosts_NFT" target="_blank" rel="noreferrer"><span
										className="icon icon-twitter"></span></a></li>
								</ul>
							</div>
						</div>
						<div className="post slide">
							<div className="slide-wrap">
								<div className="img">
									<img src={img8} alt="" />
								</div><span className="title title-yellow">The web designer</span>
								<h2>Mrk</h2>
								<p>The boss of the UI/UX stuff in the real world</p>
								<ul className="social-icons">
									<li><a href="https://discord.gg/BabyGhosts" target="_blank" rel="noreferrer"><span
										className="icon icon-discord"></span></a></li>
									<li><a href="https://twitter.com/BabyGhosts_NFT" target="_blank" rel="noreferrer"><span
										className="icon icon-twitter"></span></a></li>
								</ul>
							</div>
						</div>
						<div className="post slide">
							<div className="slide-wrap">
								<div className="img">
									<img src={postImg5} alt="" />
								</div><span className="title title-orange">The marketing expert</span>
								<h2>Chronos</h2>
								<p>The one man team managing our marketing studio</p>
								<ul className="social-icons">
									<li><a href="https://discord.gg/BabyGhosts" target="_blank" rel="noreferrer"><span
										className="icon icon-discord"></span></a></li>
									<li><a href="https://twitter.com/Chronos__0" target="_blank" rel="noreferrer"><span
										className="icon icon-twitter"></span></a></li>
								</ul>
							</div>
						</div>
						<div className="post slide">
							<div className="slide-wrap">
								<div className="img">
									<img src={img7} alt="" />
								</div><span className="title title-light-purple">Social media manager</span>
								<h2>Link</h2>
								<p>Pumping twitter & discord for a living !</p>
								<ul className="social-icons">
									<li><a href="https://discord.gg/BabyGhosts" target="_blank" rel="noreferrer"><span
										className="icon icon-discord"></span></a></li>
									<li><a href="https://twitter.com/Link00000" target="_blank" rel="noreferrer"><span
										className="icon icon-twitter"></span></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="faq-block">
				<div className="container">
					<div className="faq-wrap" id="section4">
						<div className='bg-stretch bg'>
							<img src={bg8} alt="" />
						</div>
						<div className="heading heading-right"><span className="title title-purple">Haunt me more!</span>
							<h1 className="visible-xs">F.A.Q</h1>
							<h1 className="hidden-xs">FREQUENTLY<br />ASKED QUESTIONS</h1>
							<div className="heading-wrap">
								<p>Each Baby Ghost is unique and programmatically generated from over 140 possible traits, including
									backgrounds, skins, eyes, disguises, accessories...</p>
							</div>
						</div>
						<ul className="accordion">
							<DropdownItem title="What is an NFT?">
								<p>NFT stands for ???Non-fungible token??? and is a cool way of saying it???s a truly unique digital item
									that YOU can buy, own, and trade.</p>
							</DropdownItem>
							<DropdownItem title="What is Metamask?">
								<p>Metamask is a crypto-wallet that can store your Ethereum, and is needed to purchase and mint a
									Baby Ghost. Having a wallet gives you an Ethereum address (i.e. 0xSPOO???.666), this is where your
									NFT will be stored. Learn more about Metamask and how easy it is to use over here! (<a
										href="https://metamask.io/" target="_blank" rel="noreferrer">https://metamask.io</a>).</p>
							</DropdownItem>
							<DropdownItem title="How to mint with Metamask on a mobile phone?">
								<p>If you are using a mobile phone to mint our lovely Baby Ghosts, you need to use the Metamask
									application built-in browser to mint our NFTs. Therefore, please launch the Metamask application,
									click the 3 lines on the top left menu in the application and select "Browser". It will open a web
									browser and you will be able to navigate back to babyghosts.com to do the minting.</p>
							</DropdownItem>
							<DropdownItem title="How to mint with Metamask on a computer?">
								<p>If you are using a computer to mint our lovely Baby Ghosts, you just need to connect the Metamask
									plugin with our website, verify you have enough ETH to do the transaction, then you will be able
									to click on the Mint button to buy a few Baby Ghosts.</p>
							</DropdownItem>
							<DropdownItem title="Buying NFT for the first time?">
								<p>Get the <a href="https://metamask.io/" target="_blank" rel="noreferrer">Metamask</a> Chrome or
									Firefox extension. Load it with ETH through services that allow you to change your money to ETH
									like Coinbase, Binance or Kraken. Then, click the button "MINT" on the scary banner to connect
									your wallet and approve the transaction on Metamask. That???s it !</p>
							</DropdownItem>
							<DropdownItem title="Where does my NFT go after I purchase a Baby Ghost?">
								<p>Your Baby Ghost NFT will appear in whatever address, or connected wallet you used to purchase the
									Baby Ghost. You can see your freshly minted NFT card directly on your <a
										href="https://opensea.io/account" target="_blank" rel="noreferrer">Opensea.io</a> account.</p>
							</DropdownItem>
							<DropdownItem title="That sounds great, how do I get in?">
								<p>Join our <a href="https://discord.gg/BabyGhosts" target="_blank" rel="noreferrer">Discord</a>
									(https://discord.gg/BabyGhosts) server or <a href="https://twitter.com/BabyGhosts_NFT"
										target="_blank" rel="noreferrer">Twitter</a> (https://twitter.com/BabyGhosts_NFT) account and
									jump in on the conversation & share your ideas!</p>
							</DropdownItem>
							<DropdownItem title="What can I do with my Baby Ghosts / How can I trade them?">
								<p>You are free to do anything with them under a non-exclusive license. Baby Ghosts adheres to the
									ERC-721 standard so you can trade them on platforms like OpenSea.</p>
							</DropdownItem>
							<DropdownItem title="Are Baby Ghosts a good investment?">
								<p>Well, yeah! At least we believe that Baby Ghosts have a long life of haunting ahead of them, and
									will keep growing as the project doesn???t end here! Hopefully Baby Ghosts go to the moon, but like
									anything in life, don???t spend money you can???t afford not to have.</p>
							</DropdownItem>
							<DropdownItem title="What about Tokenomics?">
								<p>We have reserved 100 Baby Ghosts to giveaway. Most of these will be given out after launch and
									will not occupy the early token ids. We will also use a % of mint sales to occasionally sweep the
									floor, do giveways, and create merch!</p>
							</DropdownItem>
						</ul>
					</div>
				</div>
			</section>
			{metamask_ele()}
		</main >

	)
}
export default Main_element;