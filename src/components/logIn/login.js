import Header from '../header/header.js';
import Footer from '../footer/footer.js';

const LogIn = () => {
    return (
        <div className='mainOuter flex'>
            <Header />
            <div className="logInOuter flex">
        <div className="logInHead">
            <div className="logInHeading">
                <h2>Login</h2>
            </div>
            <div className="logIntxt">
                Welcome back Crypto Ent!
            </div>
            <div className="logInSignUp">
                <p>New? <a className="logInSignUpAnc" href="../Sign up/signUp.html"> Sign Up</a> instead.</p>
            </div>
        </div>
        <div className="logInForm">
            <form className="flex logInFormTag" action="/">
                <label className="logInFormTxt" for="logInUserName">Your alias or username</label>
                <input type="text" className="logInFormInp" id="logInUserName" placeholder="enter your username!"/>
                <label className="logInFormTxt" for="logInPassword">Password</label>
                <input type="password" className="logInFormInp"  id="logInPassword" placeholder="your password comes here!"/>
                <button className="LogInBtn">Log in</button>
            </form>
        </div>
    </div>
            <Footer />
        </div>
        
    );
}

export default LogIn;