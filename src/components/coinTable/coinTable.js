import TbodyRow from "./tbody/tbodyRow";

const Tbody = () => {
    let coinData = [
        {
            id: 1,
            coinName: "ACOOLTOKEN",
            coinAcronym: "ACT",
            coinMarketCap: 117568317,
            coinAge: "<7 Days",
            coinVote: "680000",
            coinRank: "001"
        },
        {
            id: 2,
            coinName: "ACOOLTOKEN",
            coinAcronym: "ACT",
            coinMarketCap: 117568317,
            coinAge: "<7 Days",
            coinVote: "68",
            coinRank: "001"
        },
        {
            id: 3,
            coinName: "ACOOLTOKEN",
            coinAcronym: "ACT",
            coinMarketCap: 117568317,
            coinAge: "<7 Days",
            coinVote: "68",
            coinRank: "001"
        },
        {
            id: 4,
            coinName: "ACOOLTOKEN",
            coinAcronym: "ACT",
            coinMarketCap: 117568317,
            coinAge: "<7 Days",
            coinVote: "68",
            coinRank: "001"
        },
        {
            id: 5,
            coinName: "ACOOLTOKEN",
            coinAcronym: "ACT",
            coinMarketCap: 117568317,
            coinAge: "<7 Days",
            coinVote: "68",
            coinRank: "001"
        }
    ]
    return (
        <>
            <TbodyRow data={coinData[0]}/>
            <TbodyRow data={coinData[1]}/>
            <TbodyRow data={coinData[2]}/>
            <TbodyRow data={coinData[3]}/>
            <TbodyRow data={coinData[4]}/>
          </>          
    );
}

export default Tbody;