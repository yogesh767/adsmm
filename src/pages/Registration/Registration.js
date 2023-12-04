import React, { useState } from 'react';
import hashtag from '../../images/Celebrations(Bg) - hashtag.png'
import progrss from '../../images/progress bar.png';
import { Link, useNavigate } from 'react-router-dom';

const Registration = () => {
    const [OTP, setOTP] = useState({ first: "", second: "", third: "", fourth: "" });
    const [user, setUser] = useState({ mobile: "", fullName: "", email: "", acceptTerms: false, promotionl: false })
    const [errorMessage, setErrorMessage] = useState({ mobile: "", fullName: "", email: "", acceptTerms: "" })
    const navigate = useNavigate();
    const nextInput = (e, id) => {
        let element = document.getElementById(id)
        if (element) element.focus()
    }
    const validation = (e, key) => {
        let value = e.target.value
        if (key === "mobile") {
            if (digits_count(value) === 10) {
                setErrorMessage({ ...errorMessage, mobile: "" })
                return true
            } else {
                setErrorMessage({ ...errorMessage, mobile: "Mobile No should be of 10 digit" })
                return false
            }
        }
        if (key === "fullName") {
            if (value.length) {
                setErrorMessage({ ...errorMessage, fullName: "" })
                return true
            }
            else {
                setErrorMessage({ ...errorMessage, fullName: "Full Name is required" })
                return false
            }
        }
        if (key === "email") {
            if (validateEmail(value)) {
                setErrorMessage({ ...errorMessage, email: "" })
                return true
            }
            else {
                setErrorMessage({ ...errorMessage, email: "Enter valid Email" })
                return false
            }
        }


    }
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    const checkLength = () => {
        if (!user.email.length || !user.mobile.length || !user.fullName.length || !user.acceptTerms) {
            setErrorMessage({
                ...errorMessage, email: !user.email.length ? "Email is required" : "",
                mobile: !user.mobile.length ? "Mobile No is required" : "",
                fullName: !user.fullName.length ? "Full Name is required" : "",
                acceptTerms: !user.acceptTerms ? "Please Accept Terms" : ""
            })
        }
    }
    function digits_count(n) {
        var count = 0;
        if (n >= 1) ++count;

        while (n / 10 >= 1) {
            n /= 10;
            ++count;
        }
        return count;
    }
    return (
        <div className='mainpage d-flex flex-column p-4 text-center'>
            <div className='topImage'>
                <img src={progrss} />
                <img src={hashtag} />
            </div>
            <div className='m-3'>
                <div>
                    <h3 className='text-light'>Register to create </h3>
                </div>
                <div className='mt-5 '>
                    <div className="form-group mb-2">
                        <input name="mobile" type="text" className="form-control inputbox" placeholder="Phone Number" value={user.mobile} maxLength={10} onChange={(e) => {
                            if (!isNaN(e.target.value)) {
                                validation(e, "mobile");
                                setUser({ ...user, mobile: e.target.value })
                            }
                            else {

                            }
                        }} />
                        {errorMessage.mobile.length ?
                            <div className="text-danger text-left">
                                {errorMessage.mobile}
                            </div>
                            : ""
                        }
                    </div>
                    <div className='row'>
                        <div className="form-group mb-2 col-sm-12">
                            <input name='fullName' type="text" className="form-control inputbox" placeholder="Full Name" value={user.fullName} onChange={(e) => { validation(e, "fullName"); setUser({ ...user, fullName: e.target.value }) }} />
                            {errorMessage.fullName.length ?
                                <div className="text-danger text-left">
                                    {errorMessage.fullName}
                                </div>
                                : ""
                            }
                        </div>
                        <div className="form-group mb-4 col-sm-12">
                            <input name='email' type="email" className="form-control inputbox" placeholder="Email Id" value={user.email} onChange={(e) => { validation(e, "email"); setUser({ ...user, email: e.target.value }) }} />
                            {errorMessage.email.length ?
                                <div className="text-danger text-left">
                                    {errorMessage.email}
                                </div>
                                : ""
                            }
                        </div>
                        <div className="form-group form-check mb-4 col-sm-12">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" checked={user.acceptTerms} onChange={(e) => { setUser({ ...user, acceptTerms: e.target.checked }) }} />
                            <label className="form-check-label text-light text-justify" htmlFor="exampleCheck1" >I accept Terms & Conditions and Privacy Policy of Mondelez (Cadbury) </label>
                        </div>
                        <div className="form-group form-check mb-4col-sm-12">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" checked={user.promotionl} onChange={(e) => { setUser({ ...user, promotionl: e.target.checked }) }} />
                            <label className="form-check-label text-light text-justify" htmlFor="exampleCheck2" >I would like to recieve promotional communication from Mondelez (Cadbury) about its products and offers </label>
                        </div>
                        <div>
                        {/* Button trigger modal */}
                        <button type="button" onClick={checkLength} className="btn btn-primary p-2  submitBtn" data-bs-toggle={user.acceptTerms && !errorMessage.mobile.length && !errorMessage.fullName.length && !errorMessage.email.length && user.mobile.length && user.fullName.length && user.email.length && "modal"} data-bs-target={user.acceptTerms && !errorMessage.mobile.length && !errorMessage.fullName.length && !errorMessage.email.length && user.mobile.length && user.fullName.length && user.email.length && "#exampleModal"}>
                            Submit
                        </button>
                        </div>
                    </div>


                </div>


                {/* Modal */}
                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content p-5">
                            <h1 className='title'>Enter OTP</h1>
                            <div className='Otpbox'>
                                <input type="number" id='opt1' className="form-control Otele" max={9} value={OTP.first} onChange={(e) => { nextInput(e, "opt2"); setOTP({ ...OTP, first: e.target.value }) }} />
                                <input type="number" id='opt2' className="form-control Otele" max={9} value={OTP.second} onChange={(e) => { nextInput(e, "opt3"); setOTP({ ...OTP, second: e.target.value }) }} />
                                <input type="number" id='opt3' className="form-control Otele" max={9} value={OTP.third} onChange={(e) => { nextInput(e, "opt4"); setOTP({ ...OTP, third: e.target.value }) }} />
                                <input type="number" id='opt4' className="form-control Otele" max={9} value={OTP.fourth} onChange={(e) => { nextInput(e); setOTP({ ...OTP, fourth: e.target.value }) }} />
                            </div>
                            <div className='resendLink text-right'><Link to={"#"} />Resend OTP </div>
                            <div>
                                <button type="button" onClick={() => {
                                    if (OTP.first === "1" && OTP.second === "2" && OTP.third === "3" && OTP.fourth === "4") {
                                        navigate("/details")
                                    }
                                }} className="btn btn-primary p-2  submitBtn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
            {
                errorMessage.acceptTerms.length ?
                    <div className="alert alert-warning alert-dismissible fade show" role="alert">
                        <strong>Please Accept Terms and Conditions</strong>
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
                    </div>
                    : ""
            }
        </div>
    );
};

export default Registration;