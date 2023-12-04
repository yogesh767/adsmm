import React, { useState } from 'react';
import capAndGift from '../../images/Cap&Gift.png'
import Balloon from '../../images/Balloon.png'
import progrss from '../../images/progress bar1.png';
import { useNavigate } from 'react-router-dom';
function Details(props) {
    const [birthdayBoy, setBirthdayBoy] = useState({ name: "", birthDay: "", gender: "Male" })
    const [errorMessage, setErrorMessage] = useState({ name: "", birthDay: "", gender: "Male" })
    const navigate = useNavigate();

    const submit = () => {
        if (!birthdayBoy.birthDay.length || !birthdayBoy.gender.length || !birthdayBoy.name.length) {
            setErrorMessage({
                birthDay: !birthdayBoy.birthDay.length ? "Birthday is required" : "",
                name: !birthdayBoy.name ? "Name is reQuired" : "",
                gender: !birthdayBoy.gender ? "Gender is required" : ""
            })
        }
        else {
            navigate("/details2", { state: birthdayBoy })
        }
    }
    return (
        <div className='mainpage d-flex flex-column p-4 text-center'>
            <div className='topImage'>
                <img src={progrss} />
            </div>
            <h2 className='text-light mt-5'>Tell  us about your loved one...</h2>
            <div className='d-flex justify-content-center align-items-center '>
                <img src={capAndGift} />
                <img src={Balloon} className='ballon' />
            </div>
            <div className='row'>
                <div className="form-group mb-3 col-sm-12">
                    <label className='text-light'>Their name</label>
                    <input value={birthdayBoy.name} onChange={(e) => { setBirthdayBoy({ ...birthdayBoy, name: e.target.value }) }} type="text" className="form-control inputbox" placeholder="name" />
                    {errorMessage.name.length ?
                        <div className="text-danger text-left">
                            {errorMessage.email}
                        </div>
                        : ""
                    }
                </div>

                <div className="form-group mb-3 col-sm-12">
                    <label className='text-light' >How old they'll be this birthday</label>
                    <input value={birthdayBoy.birthDay} onChange={(e) => { setBirthdayBoy({ ...birthdayBoy, birthDay: e.target.value }) }} type="date" className="form-control inputbox" placeholder="Date of Birth" />
                </div>
                <div className="form-group mb-3">
                    <label className='text-light' >Gender</label>
                    <select className="form-control inputbox select" value={birthdayBoy.gender} onChange={(e) => { setBirthdayBoy({ ...birthdayBoy, gender: e.target.value }) }} >
                        <option value={"Male"} selected>Male</option>
                        <option value={"Female"}>Female</option>
                    </select>
                </div>
                <div className='col-sm-12 '>
                <button type="button" onClick={submit}
                    className="btn btn-primary p-2  submitBtn mt-5 text-center">
                    Proceed
                </button>
                </div>
            </div>
        </div>
    );
}

export default Details;