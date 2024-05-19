import { useState } from "react";
import axios from "axios";
import Footer from "../footer/footer";
import Header from "../header/header";

const Signup = () => {

    const [userName, setUserName] = useState('');
    const [userOwnerName, setOwnerName] = useState('');
    const [userEmail, setEmail] = useState('');
    const [userPassword, setPassword] = useState('');

    const onClickPost = async (e) => {
        e.preventDefault();
            try{
                await axios.post("https://coinscore-cc-backend.onrender.com/api/auth/signup", { userName, userOwnerName, userEmail, userPassword });
                console.log("created new user")
            }
            catch(err)
            {
                console.log(`Couldn't make new user ${err}`);
            }

    }

    return (
        <div className="mainOuter flex">
            <Header />
                <div className="signUpOuter flex">
            <h2 className="signUpH2">Sign Up</h2>
            <p className="descSignUp">Join our crypto community!</p>
            <p className="loginSignUpTxt">Have an account? <a href="/" className="loginSignUpAnc">Login</a> now!</p>
            <form className="signUpForm flex" action="/">
                <label className="labelTxt" for="aliasName">Your alias or username</label>
                <input onChange={(e) => { setUserName(e.target.value)}} className="inputField" type="text" id="aliasName" placeholder="enter your username!" required/>

                <label className="labelTxt" for="ownerName"> Name(Owner) </label>
                <input onChange={(e) => { setOwnerName(e.target.value)}} className="inputField" type="text" id="ownerName" placeholder="what shall we call you you in our newsletter?" required/>

                <label className="labelTxt" for="email">Email</label>
                <input onChange={(e) => { setEmail(e.target.value)}} className="inputField" type="text" id="email" placeholder="where we can contact you?" required/>
                
                <label className="labelTxt" for="passsWord">Create Password</label>
                <input onChange={(e) => { setPassword(e.target.value)}} className="inputField" type="password" id="passsWord" placeholder="create a passsword"/>

                <label className="labelTxt" for="cnfPassWord">Confirm Password</label>
                <input className="inputField" type="password" id="cnfPassWord" placeholder="confirm your password"/>

                <span className="signUpSpan">By registering you agree to our <a className="tcSignUp" href="/">terms & conditions</a></span>
                <button onClick={onClickPost} className="regBtn">Register</button>
            </form>
        </div>

        <Footer />

        </div>      
    );
}

export default Signup;