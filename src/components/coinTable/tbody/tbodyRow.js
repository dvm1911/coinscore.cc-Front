import coinLogo from './assets/Ellipse 7.png';
import upVoteArw from './assets/Arrow - Right.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const TbodyRow = ({data}) => {
    const [vote, incUpVote] = useState(data.coinVote)

    const upVoteClick = () => {
       data.coinVote++;
       incUpVote(data.coinVote);
       console.log('updated', data.coinVote)
   } 

    return (
        <Link className="noDec" to="/coininfo">
        <tr>
                    <td className="crypto flex">
                        <div className="coinLogo">
                            <img src={coinLogo} alt="coin-logo"/>
                        </div>
                        <div className="coinName">
                            <p>{data.coinName}</p>
                        </div>
                        <div className="coinAcro flex">
                            <p>{data.coinAcronym}</p>
                        </div>
                    </td>
                    <td className="marketCap flex">
                        <div className="coinValue">
                            <p>{`$` + data.coinMarketCap}</p>
                        </div>                        
                    </td>
                    <td className="age flex">
                        <div className="coinAge">
                            <p>{data.coinAge}</p>
                        </div>     
                    </td>
                    <td className="vote">
                        <div className="coinVote flex">
                            <div className="voteNum">
                                <p>{data.coinVote}</p>
                            </div>
                            <div className="upVote-sym flex" onClick={upVoteClick}>
                                <img id="upVote-arw" src={upVoteArw} alt="upVote-arw"/>
                            </div>
                        </div>
                    </td>
                    <td className="rank flex">
                        <div className="coinRank flex">
                            <p>{data.coinRank}</p>
                        </div>
                    </td>
        </tr>
        </Link>
           
    )
}

export default TbodyRow;