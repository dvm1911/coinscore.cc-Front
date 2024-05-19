import Header from '../header/header';
import AdWindow from '../adWindow/adWindow';
import TheadRow from '../coinTable/thead/theadRow'
import Tbody from '../coinTable/coinTable';
import Footer from '../footer/footer'
import { Route } from "react-router-dom";

const Main = () => {
    return (
     
        <div> 
        <Header/>
        <AdWindow/>
        <main className='mainContent'>
          <div className='outer'>
        <table>
          <thead className='thead'>
            <TheadRow/>
          </thead>
          <tbody className='tbody'>
            <Tbody/>          
          </tbody>
        </table>
        </div>
        <AdWindow/>
        </main>
        <Footer/>
        </div>   

               
    )
}

export default Main;