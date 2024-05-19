/**
 *Aronyms
*Sym - symbol 
*/
import { Link } from 'react-router-dom';

import coinScoreLogo from './assets/logo logo.png';
import addSym from './assets/Plus.png';
import walletSym from './assets/Wallet.png';
import profileSym from './assets/Profile.png';
import searchSym from './assets/Search.png'

const Header = () => {
    return(
        <header>
            
            <div className="head flex">
                    
                <div className="headMain flex">
                <Link className='noDec flex' to={'/'}>
                        <div className="headLogo">
                            <img  src={coinScoreLogo} alt="coinscore_logo"/>
                        </div>
                        <div className="headName">
                            <h1>coinscore</h1>
                        </div>
                </Link>         
                </div>
                     
            
                <div className="headListDiv">
                    <ul className="headListTag flex">
                        <li className="HeadListli flex"><img src={walletSym} alt=""/><Link className="headListAnc" href="/">Promotion</Link></li>
                        <li className="HeadListli flex"><img src={addSym} alt=""/><Link to={"/addcoin"} className="headListAnc">Add your coin</Link></li>
                        <li className="HeadListli flex"><img src={profileSym} alt="login"/><Link to={"/login"} className="headListAnc" href="/">Login</Link></li>
                        <li className="HeadListli flex"><Link to={"/signup"} className="headListAnc sign-up" href="">Sign Up</Link></li>
                        <li className="HeadListli flex"><input className="headListInp" type="text" placeholder="Find your next gem"/><img className="searchIcon" src={searchSym} alt="searchIcon"/></li>
                    </ul>
                </div>
            </div>
        </header>
    );
          
}

export default Header;