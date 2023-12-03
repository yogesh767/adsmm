import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import hashtag from '../../images/Celebrations(Bg) - hashtag.png'

export const Home = (props) => {
    const navigate = useNavigate()
    useEffect(() => {
        let timeOut = setTimeout(() => {
            navigate("/registration")
        }, 3000);
        return () => {
            if (timeOut)
                clearTimeout(timeOut)
        }
    }, [])
    return (
        <div className='mainpage d-flex text-center justify-content-center align-items-center'style={{height:"100vh"}} >
            <div>
                <img src={hashtag} />
                <h4 className='text-light'>A unique birthday song for everyone!</h4>
                <p className='text-light'> इस Birthday ,कुछ अच्छा हो जाये , कुछ मिठा हो जाये </p>
            </div>
        </div>
    );
}
