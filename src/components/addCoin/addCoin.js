import coinGecko from './coingecko__78343 1.png'
import coinswapLogo from './DNZDqtH2_400x400 1.png'
import pancakeLogo from './Home _ PancakeSwap - $13.450-1 1.png'
import poocoinLogo from './poocoin512 2.png'

import instagramLogo from './instagram-fill (1) 2.png'
import youtubeLogo from './Vector.png'
import redditLogo from './reddit-fill 2.png'
import telegramLogo from './telegram-fill 2.png'
import twitterLogo from './twitter-fill (1) 5.png'
import addImgLogo from './Plus.png'

import webLogo from './Group 599.png'
import Header from '../header/header'
import Footer from '../footer/footer'

import axios from 'axios'
import { useState } from 'react'
import { logoBannerDb } from '../firebaseConfig/firebaseConfig'
import { ref, uploadBytes } from 'firebase/storage'

const AddCoin = () => {
    const [coinName, setcoinName] = useState('');
    const [coinAcro, setcoinAcro] = useState('');
    const [coinAddressBSC, setcoinAddressBSC] = useState('');
    const [coinAddressETH, setcoinAddressETH] = useState('');
    const [coinAddressTRC, setcoinAddressTRC] = useState('');
    const [coinMarketCap, setcoinMarketCap] = useState('');
    const [coinPrice, setcoinPrice] = useState('');
    const [coinLaunchDate, setcoinLaunchDate] = useState('');
    const [coinDescription, setcoinDescription] = useState('')


    const [coinTwitter, setcoinTwitter] = useState('');
    const [coinInstagram, setcoinInstagram] = useState('');
    const [coinReddit, setcoinReddit] = useState('');
    const [coinWebsite, setcoinWebsite] = useState('');
    const [coinYoutube, setcoinYoutube] = useState('');
    
    const [coinLogo, setcoinLogo] = useState("");
    const [coinBanner, setcoinBanner] = useState("");


    const [onPanCakeSwap, setonPanCakeSwap] = useState(false);
    const [onBoggedFinance, setonBoggedFinance] = useState(false);
    const [onPooCoin, setonPooCoin] = useState(false);
    const [onCoingecko, setonCoingecko] = useState(false);
    const [isReviewed, setisReviewed] = useState(false);
    const [isActive, setisActive] = useState(true);
    const [isPromoted, setisPromoted] = useState(false);



   
    const [btnColorCoinGecko, setBtnColorCoinGecko] = useState("#303343");
    const [txtColorCoinGecko, setTxtColorCoinGecko] = useState("#6B5DCC");
    const handleBtnCoinGecko = (e) => {
        e.preventDefault();
        if(btnColorCoinGecko == "#303343"){
            setTxtColorCoinGecko("#D7D7D7");
            setBtnColorCoinGecko("#6B5DCC");
            setonCoingecko(!onCoingecko);
        } else {
            setTxtColorCoinGecko("#6B5DCC");
            setBtnColorCoinGecko("#303343");
            setonCoingecko(!onCoingecko);
        }       
      };

      const [btnColorPanCakeSwap, setBtnColorPanCakeSwap] = useState("#303343");
      const [txtColorPanCakeSwap, setTxtColorPanCakeSwap] = useState("#6B5DCC");
      const handleBtnPanCakeSwap = (e) => {
        e.preventDefault();
        if(btnColorPanCakeSwap == "#303343"){
            setTxtColorPanCakeSwap("#D7D7D7");
            setBtnColorPanCakeSwap("#6B5DCC");
            setonPanCakeSwap(!onPanCakeSwap);
        } else {
            setTxtColorPanCakeSwap("#6B5DCC");
            setBtnColorPanCakeSwap("#303343");
            setonPanCakeSwap(!onPanCakeSwap);
        }      
      };

      const [btnColorBoggedFinance, setBtnColorBoggedFinance] = useState("#303343");
      const [txtColorBoggedFinance, setTxtColorBoggedFinance] = useState("#6B5DCC");
      const handleBtnBoggedFinance = (e) => {
        e.preventDefault();
        if(btnColorBoggedFinance == "#303343"){
            setTxtColorBoggedFinance("#D7D7D7");
            setBtnColorBoggedFinance("#6B5DCC");
            setonBoggedFinance(!onBoggedFinance);
        } else {
            setTxtColorBoggedFinance("#6B5DCC");
            setBtnColorBoggedFinance("#303343");
            setonBoggedFinance(!onBoggedFinance);
        }         
      };

      const [btnColorPooCoin, setBtnColorPooCoin] = useState("#303343");
      const [txtColorPooCoin, setTxtColorPooCoin] = useState("#6B5DCC");
      const handleBtnPooCoin = (e) => {
        e.preventDefault();
        if(btnColorPooCoin == "#303343"){
            setTxtColorPooCoin("#D7D7D7");
            setBtnColorPooCoin("#6B5DCC");
            setonPooCoin(!onPooCoin);
        } else {
            setTxtColorPooCoin("#6B5DCC");
            setBtnColorPooCoin("#303343");
            setonPooCoin(!onPooCoin);
        }         
      };


    const onClickPost = async (e) => {
        e.preventDefault();
            try{
                await axios.post("https://coinscore-cc-backend.onrender.com/api/collections/coins", { coinName, coinAcro, coinAddressBSC, coinAddressETH, coinAddressTRC, coinMarketCap, coinPrice, coinLaunchDate, coinDescription, coinTwitter, coinInstagram, coinReddit, coinWebsite, coinYoutube, onPanCakeSwap, onBoggedFinance, onPooCoin, onCoingecko, isReviewed, isActive, isPromoted });
                console.log("New Coin Added")
            }
            catch(err)
            {
                console.log(`Couldn't make new coin ${err}`);
            }
            
            const logoRef = ref(logoBannerDb, `coins/${coinName}/logo`)
            uploadBytes(logoRef, coinLogo);

            const bannerRef = ref(logoBannerDb, `coins/${coinName}/banner`);
            uploadBytes(bannerRef, coinBanner);
    }

    return(
        <div className='mainOuter flex'>
            <Header />
                        <div className="addCoinOuter flex">
                    <div className="addCoinHead">
                        <h2 className="addCoinH2">Add your coin</h2>
                        <p className="addCoinTxt">Fill this quick form, and our team will contact you shortly</p>
                    </div>
                    <div className="addCoinBody">
                        <form className="addCoinForm flex" action="/">
                            <label className="addCoinlabelTxt" for="coinName">Coin Name</label>
                            <input onChange={(e) => { setcoinName(e.target.value); console.log(coinName)}} className="addCoinInputField" type="text" id="coinName" placeholder="enter your coin name" />

                            <label className="addCoinlabelTxt" for="coinAcro">Coin Acronym</label>
                            <input onChange={(e) => { setcoinAcro(e.target.value)}} className="addCoinInputField" type="text" id="coinAcro" placeholder="enter your coin acronym" />

                            <label className="addCoinlabelTxt" for="coinBSC">Address BSC</label>
                            <input onChange={(e) => { setcoinAddressBSC(e.target.value)}} className="addCoinInputField" type="text" id="coinBSC" placeholder="enter your coin BSC address"/>

                            <label className="addCoinlabelTxt" for="coinETH">Address ETH</label>
                            <input onChange={(e) => { setcoinAddressETH(e.target.value)}} className="addCoinInputField" type="text" id="coinETH" placeholder="enter your coin ETH adddress"/>

                            <label className="addCoinlabelTxt" for="coinTRC">Address TRC</label>
                            <input onChange={(e) => { setcoinAddressTRC(e.target.value)}} className="addCoinInputField" type="text" id="coinTRC" placeholder="enter your coin TRC address"/>

                            <label className="addCoinlabelTxt" for="addCoinMC">Market Cap</label>
                            <input onChange={(e) => { setcoinMarketCap(e.target.value)}} className="addCoinInputField" type="text" id="addCoinMC" placeholder="What's your coin Market Cap"/>

                            <label className="addCoinlabelTxt" for="coinPrice">Price</label>
                            <input onChange={(e) => { setcoinPrice(e.target.value)}} className="addCoinInputField" type="text" id="coinPrice" placeholder="what's the price of your coin"/>

                            <label className="addCoinlabelTxt" for="coinLaunch">Launch Date</label>
                            <input onChange={(e) => { setcoinLaunchDate(e.target.value)}} className="addCoinInputField" type="text" id="coinLaunch" placeholder="enter your coin name"/>

                            <div className="addCoinDesc flex">
                                <label className="addCoinlabelTxt" for="coinDescription">Description</label>
                                <textarea onChange ={(e) => { setcoinDescription(e.target.value)}} id="coinDescription" className="coinDescTxt" placeholder="1800 chars (max)"></textarea>
                                <div className="coinDescCounter flex">
                                    <p className="addCoinVarCounter">0/1800</p>
                                </div>
                            </div>

                            <label className="addCoinlabelTxt" for="addCoinLogo">Logo</label>
                            <p className="addCoinLogoInfo">Recommended Size: 512 * 512 px or an image with dimesions in 1:1 ratio.</p>

                            <div className="addCoinLogoOuter flex">
                                <div className="addCoinLogo flex">
                                    <div className="addCoinLogoUpload">
                                        <input onChange={(e)=>setcoinLogo(e.target.files[0])} className="addCoinLogoInp flex" id="addCoinLogo" type="file" accept="image/*"/>
                                        <img className="addCoinLogoInpSym" src={addImgLogo} alt="addFileLogo"/>
                                    </div>
                                    <div className="addCoinLogoUploadTxt">
                                        <span className="addCoinlogoTxt">Add file</span> <span className="addCoinLogoInfo">or</span><span className="addCoinlogoTxt"> Drag and drop here</span>
                                    </div>              
                                </div>
                            </div>
                            

                            <label className="addCoinlabelTxt" for="addCoinBanner">Banner</label>
                            <p className="addCoinBannerInfo">Recommended Size: 1920*1080 px (lanscape).</p>
                            <div className="addCoinBanner flex">
                                <div className="addCoinBannerUpload">
                                    <input onChange={(e)=>setcoinBanner(e.target.files[0])} className="addCoinBannerInp" id="addCoinBanner" type="file" accept="image/*"/>
                                    <img className="addCoinLogoInpSym" src={addImgLogo} alt="addFileBanner"/>
                                </div>
                                <div className="addCoinLogoUploadTxt">
                                    <span className="addCoinlogoTxt">Add file</span> <span className="addCoinLogoInfo">or</span><span className="addCoinlogoTxt"> Drag and drop here</span>
                                </div>
                            </div>

                            <label className="addCoinlabelTxt" for="addCoinSocial">Your socials</label>
                            <span className="addCoinSocialTxt">attach link to your coin account socials</span>

                            <div className="addCoinSocialLogo flex align-center">
                                <img className="addCoinSocialImg" src={twitterLogo} alt="twitter logo"/>
                                <input onChange={(e) => { setcoinTwitter(e.target.value)}} className="addCoinSocialInp" type="text" id="addCoinSocialTwitter" placeholder="your twitter social"/>
                            </div>

                            <div className="addCoinSocialLogo flex align-center">
                                <img className="addCoinSocialImg" src={instagramLogo} alt="instagram logo"/>
                                <input onChange={(e) => { setcoinInstagram(e.target.value)}} className="addCoinSocialInp" type="text" id="addCoinSocialInstagram" placeholder="your instagram social"/>
                            </div>

                            <div className="addCoinSocialLogo flex align-center">
                                <img className="addCoinSocialImg" src={redditLogo} alt="reddit logo"/>
                                <input onChange={(e) => { setcoinReddit(e.target.value)}} className="addCoinSocialInp" type="text" id="addCoinSocialReddit" placeholder="your reddit social"/>
                            </div>

                            <div className="addCoinSocialLogo flex align-center">
                                <img className="addCoinSocialImg" src={telegramLogo} alt="telegram logo"/>
                                <input className="addCoinSocialInp" type="text" id="addCoinSocialTelegram" placeholder="your telegram social"/>
                            </div>

                            <div className="addCoinSocialLogo flex align-center">
                                <img className="addCoinSocialImg" src={webLogo} alt="website logo"/>
                                <input onChange={(e) => { setcoinWebsite(e.target.value)}}  className="addCoinSocialInp" type="text" id="addCoinSocialWebsite" placeholder="your website"/>
                            </div>

                            <div className="addCoinSocialLogo flex align-center">
                                <img className="addCoinSocialImgYT" src={youtubeLogo} alt="youtube logo"/>
                                <input onChange={(e) => { setcoinYoutube(e.target.value)}} className="addCoinSocialInp" type="text" id="addCoinSocialYoutube" placeholder="your youtube channle"/>
                            </div>

                            <label className="addCoinListingHeading" for="addCoinListing">Listings</label>
                            <span className="addCoinListingSpan">Please select all platforms where your coin is listed</span>

                                <div className="addCoinListing flex">
                                    <div className="addCoinListingOuter">
                                        <button onClick={handleBtnCoinGecko} style={{ backgroundColor: btnColorCoinGecko, color: txtColorCoinGecko }} className="addCoinListingButton" id="addCoinListingCoinGecko">
                                            <img className="addCoinListingLogo" src={coinGecko} alt=""/>
                                            <p className="addCoinListingTxt">coingecko</p>
                                        </button>
                                    </div>
                                    <div className="addCoinListingOuter">
                                        <button onClick={handleBtnPanCakeSwap} style={{ backgroundColor: btnColorPanCakeSwap, color: txtColorPanCakeSwap }} className="addCoinListingButton" id="addCoinListingPancakeSwap">
                                            <img className="addCoinListingLogo" src={pancakeLogo} alt=""/>
                                            <p className="addCoinListingTxt">pancakeswap</p>
                                        </button>
                                    </div>
                                    <div className="addCoinListingOuter">
                                        <button onClick={handleBtnBoggedFinance} style={{ backgroundColor: btnColorBoggedFinance, color: txtColorBoggedFinance }} className="addCoinListingButton" id="addCoinListingBoggedFinance">
                                            <img className="addCoinListingLogo" src={coinswapLogo} alt=""/>
                                            <p className="addCoinListingTxt">bogged.finance</p>
                                        </button>
                                    </div>
                                    <div className="addCoinListingOuter">
                                        <button onClick={handleBtnPooCoin} style={{ backgroundColor: btnColorPooCoin, color: txtColorPooCoin }} className="addCoinListingButton" id="addCoinListingPoocoin">
                                            <img className="addCoinListingLogo" src={poocoinLogo} alt=""/>
                                            <p className="addCoinListingTxt">poocoin</p>
                                        </button>
                                    </div>
                                </div>
                                
                            
                            <button onClick={onClickPost} className="submitCoin">Submit Coin Info</button>

                        </form>
                    </div>
                </div>
            <Footer />
        </div>
    );
}

export default AddCoin;