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


const AddCoin = () => {
    

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
                            <label className="addCoinLabelTxt" for="coinName">Coin Name</label>
                            <input className="addCoinInputField" type="text" id="coinName" placeholder="enter your coin name" required/>

                            <label className="addCoinLabelTxt" for="coinAcro">Coin Acronym</label>
                            <input className="addCoinInputField" type="text" id="coinAcro" placeholder="enter your coin acronym" required/>

                            <label className="addCoinLabelTxt" for="coinBSC">Address BSC</label>
                            <input className="addCoinInputField" type="text" id="coinBSC" placeholder="enter your coin BSC address"/>

                            <label className="addCoinLabelTxt" for="coinETH">Address ETH</label>
                            <input className="addCoinInputField" type="text" id="coinETH" placeholder="enter your coin ETH adddress"/>

                            <label className="addCoinLabelTxt" for="coinTRC">Address TRC</label>
                            <input className="addCoinInputField" type="text" id="coinTRC" placeholder="enter your coin TRC address"/>

                            <label className="addCoinLabelTxt" for="addCoinMC">Market Cap</label>
                            <input className="addCoinInputField" type="text" id="addCoinMC" placeholder="What's your coin Market Cap"/>

                            <label className="addCoinLabelTxt" for="coinPrice">Price</label>
                            <input className="addCoinInputField" type="text" id="coinPrice" placeholder="what's the price of your coin"/>

                            <label className="addCoinLabelTxt" for="coinLaunch">Launch Date</label>
                            <input className="addCoinInputField" type="text" id="coinLaunch" placeholder="enter your coin name"/>

                            <div className="addCoinDesc flex">
                                <label className="addCoinLabelTxt" for="coinDescription">Description</label>
                                <textarea id="coinDescription" className="coinDescTxt" placeholder="1800 chars (max)"></textarea>
                                <div className="coinDescCounter flex">
                                    <p className="addCoinVarCounter">0/1800</p>
                                </div>
                            </div>

                            <label className="addCoinLabelTxt" for="addCoinLogo">Logo</label>
                            <p className="addCoinLogoInfo">Recommended Size: 512 * 512 px or an image with dimesions in 1:1 ratio.</p>

                            <div className="addCoinLogoOuter flex">
                                <div className="addCoinLogo flex">
                                    <div className="addCoinLogoUpload">
                                        <input className="addCoinLogoInp flex" id="addCoinLogo" type="file" accept="image/*"/>
                                        <img className="addCoinLogoInpSym" src={addImgLogo} alt="addFileLogo"/>
                                    </div>
                                    <div className="addCoinLogoUploadTxt">
                                        <span className="addCoinlogoTxt">Add file</span> <span className="addCoinLogoInfo">or</span><span className="addCoinlogoTxt"> Drag and drop here</span>
                                    </div>              
                                </div>
                            </div>
                            

                            <label className="addCoinLabelTxt" for="addCoinBanner">Banner</label>
                            <p className="addCoinBannerInfo">Recommended Size: 1920*1080 px (lanscape).</p>
                            <div className="addCoinBanner flex">
                                <div className="addCoinBannerUpload">
                                    <input className="addCoinBannerInp" id="addCoinBanner" type="file" accept="image/*"/>
                                    <img className="addCoinLogoInpSym" src={addImgLogo} alt="addFileBanner"/>
                                </div>
                                <div className="addCoinLogoUploadTxt">
                                    <span className="addCoinlogoTxt">Add file</span> <span className="addCoinLogoInfo">or</span><span className="addCoinlogoTxt"> Drag and drop here</span>
                                </div>
                            </div>

                            <label className="addCoinLabelTxt" for="addCoinSocial">Your socials</label>
                            <span className="addCoinSocialTxt">attach link to your coin account socials</span>

                            <div className="addCoinSocialLogo flex align-center">
                                <img className="addCoinSocialImg" src={twitterLogo} alt="twitter logo"/>
                                <input className="addCoinSocialInp" type="text" id="addCoinSocialTwitter" placeholder="your twitter social"/>
                            </div>

                            <div className="addCoinSocialLogo flex align-center">
                                <img className="addCoinSocialImg" src={instagramLogo} alt="instagram logo"/>
                                <input className="addCoinSocialInp" type="text" id="addCoinSocialInstagram" placeholder="your instagram social"/>
                            </div>

                            <div className="addCoinSocialLogo flex align-center">
                                <img className="addCoinSocialImg" src={redditLogo} alt="reddit logo"/>
                                <input className="addCoinSocialInp" type="text" id="addCoinSocialReddit" placeholder="your reddit social"/>
                            </div>

                            <div className="addCoinSocialLogo flex align-center">
                                <img className="addCoinSocialImg" src={telegramLogo} alt="telegram logo"/>
                                <input className="addCoinSocialInp" type="text" id="addCoinSocialTelegram" placeholder="your telegram social"/>
                            </div>

                            <div className="addCoinSocialLogo flex align-center">
                                <img className="addCoinSocialImg" src={webLogo} alt="website logo"/>
                                <input className="addCoinSocialInp" type="text" id="addCoinSocialWebsite" placeholder="your website"/>
                            </div>

                            <div className="addCoinSocialLogo flex align-center">
                                <img className="addCoinSocialImgYT" src={youtubeLogo} alt="youtube logo"/>
                                <input className="addCoinSocialInp" type="text" id="addCoinSocialYoutube" placeholder="your youtube channle"/>
                            </div>

                            <label className="addCoinListingHeading" for="addCoinListing">Listings</label>
                            <span className="addCoinListingSpan">Please select all platforms where your coin is listed</span>

                                <div className="addCoinListing flex">
                                    <div className="addCoinListingOuter">
                                        <button className="addCoinListingButton" id="addCoinListingCoinGecko">
                                            <img className="addCoinListingLogo" src={coinGecko} alt=""/>
                                            <p className="addCoinListingTxt">coingecko</p>
                                        </button>
                                    </div>
                                    <div className="addCoinListingOuter">
                                        <button className="addCoinListingButton" id="addCoinListingPancakeSwap">
                                            <img className="addCoinListingLogo" src={pancakeLogo} alt=""/>
                                            <p className="addCoinListingTxt">pancakeswap</p>
                                        </button>
                                    </div>
                                    <div className="addCoinListingOuter">
                                        <button className="addCoinListingButton" id="addCoinListingBoggedFinance">
                                            <img className="addCoinListingLogo" src={coinswapLogo} alt=""/>
                                            <p className="addCoinListingTxt">bogged.finance</p>
                                        </button>
                                    </div>
                                    <div className="addCoinListingOuter">
                                        <button className="addCoinListingButton" id="addCoinListingPoocoin">
                                            <img className="addCoinListingLogo" src={poocoinLogo} alt=""/>
                                            <p className="addCoinListingTxt">poocoin</p>
                                        </button>
                                    </div>
                                </div>
                                
                            
                            <button className="submitCoin">Submit Coin Info</button>

                        </form>
                    </div>
                </div>
            <Footer />
        </div>
    );
}

export default AddCoin;