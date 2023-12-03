import React, { useEffect, useState } from 'react';
import progrss from '../../images/progress bar2.png';
import headphone from '../../images/Headphone.png';
import PurpleMusicTone from '../../images/Purple Music Tone.png';
import Balloon2 from '../../images/Balloon2.png'
import Happy from '../../images/Icons/Happy.png'
import Romantic from '../../images/Icons/Romantic.png'
import Funny from '../../images/Icons/Funny.png'
import Motivational from '../../images/Icons/Motivational.png'
import Calm from '../../images/Icons/Calm.png'
import Rap from '../../images/Icons/Rap.png'
import Rock from '../../images/Icons/Rock.png'
import Pop from '../../images/Icons/Pop.png'
import Desi from '../../images/Icons/Desi.png'
import Edm from '../../images/Icons/EDM.png'
import MAle from '../../images/Icons/Male.png'
import Female from '../../images/Icons/Female.png'
import Asset from '../../images/Asset 1.png'
import { useLocation, useNavigate } from 'react-router-dom';
import OpenAI from 'openai';
function Details2(props) {
   
//4d657373616765
    const state = useLocation().state;
    const apiKwy =  atob('c2stM3lndU5RNUthYXJ2Y0tOUjBBdFZUM0JsYmtGSnZtUk15WjVDeXpHOGxCRU5wWk14')
   
    const openai = new OpenAI({
        apiKey: apiKwy, // defaults to process.env["OPENAI_API_KEY"]
        dangerouslyAllowBrowser: true
    });
    let inputScript = `Wish a happy birthday to <their name>.

    Ensure that "Happy birthday" is mentioned at least twice in the lyrics, and it should rhyme. The lyrics should use simple, short, and easy to pronounce words as much as possible.
    
    Using the above information, please write 16 lines of <genre> lyrics that I can dedicate to him/her for his/her birthday. Each line can have maximum of 8 words or 40 characters.
    
    The lyrics generated should be completely unique and never written before every single time and should not in any way or manner infringe on any trademarks/copyrights or any other rights of any individual or entity anywhere in the world. Any references or similarity to existing lyrics of any song anywhere in the world needs to be completely avoided. Any mention of proper nouns i.e. names or places of any manner apart from the ones mentioned above needs to be completely avoided. The lyrics generated should not be insensitive or should not offend any person/ place/ caste/ religion/ creed/ tribe/ country/ gender/ government/ organisation or any entity or individual in any manner whatsoever. Any words which might be construed directly or indirectly as cuss words or are offensive in any language should also be completely avoided.`
    const [birthdayBoy, setBirthdayBoy] = useState({ ...state });
    const navigate = useNavigate()
    const [loading, setloading] = useState(false)
    async function CallRes(text) {
        setloading(true)
        const chatCompletion = await openai.chat.completions.create({
            messages: [{ role: 'user', content: text }],
            model: 'gpt-3.5-turbo',
        });
        if (chatCompletion) {
            setloading(false)
            navigate("/song", { state: chatCompletion.choices[0].message.content })
        }

    }
    const submitData = () => {
        inputScript = inputScript.replace("<their name>", birthdayBoy.name).replace("<genre>", birthdayBoy?.genre).replace("him/her", birthdayBoy.voice === "Male" ? "him" : "her").replace("his/her", birthdayBoy.voice === "Male" ? "his" : "her")
        CallRes(inputScript)

    }
    return (
        <div className='mainpage d-flex flex-column p-3 text-center justify-content-center align-items-center'>
            <div className='topImage'>
                <img src={progrss} />
            </div>
            <h1 className='text-light'>What would you like their song's vibe to be ?</h1>
            <div className='topImage  d-flex text-center  justify-content-center align-items-center '>
                <img src={PurpleMusicTone} className='sideImageleft' />
                <img src={headphone} />
                <img src={Balloon2} className='sideImageright' />
            </div>
            <div className='menubar d-flex flex-column justify-content-center align-items-center'>
                <div className='menu mb-2'>
                    <div className='menuName'>Mood</div>
                    <div className='imogiarray  d-flex text-center  justify-content-between align-items-center p-2'>
                        <div className='imagiselect' onClick={() => { setBirthdayBoy({ ...birthdayBoy, mood: "Happy" }) }}>
                            <div className={birthdayBoy?.mood === "Happy" ? 'imagiselected' : ''}>
                                <img src={Happy} />
                            </div>
                            <p className='text-light'>Happy</p>
                        </div>
                        <div className='imagiselect' onClick={() => { setBirthdayBoy({ ...birthdayBoy, mood: "Romantic" }) }}>
                            <div className={birthdayBoy?.mood === "Romantic" ? 'imagiselected' : ''}>
                                <img src={Romantic} />
                            </div>
                            <p className='text-light'>Romantic</p>
                        </div>
                        <div className='imagiselect' onClick={() => { setBirthdayBoy({ ...birthdayBoy, mood: "Funny" }) }}>
                            <div className={birthdayBoy?.mood === "Funny" ? 'imagiselected' : ''}>
                                <img src={Funny} />
                            </div>
                            <p className='text-light'>Funny</p>
                        </div>
                        <div className='imagiselect' onClick={() => { setBirthdayBoy({ ...birthdayBoy, mood: "Motivational" }) }}>
                            <div className={birthdayBoy?.mood === "Motivational" ? 'imagiselected' : ''}>
                                <img src={Motivational} />
                            </div>
                            <p className='text-light'>Motivational</p>
                        </div>
                        <div className='imagiselect' onClick={() => { setBirthdayBoy({ ...birthdayBoy, mood: "Calm" }) }}>
                            <div className={birthdayBoy?.mood === "Calm" ? 'imagiselected' : ''}>
                                <img src={Calm} />
                            </div>
                            <p className='text-light'>Calm</p>
                        </div>
                    </div>
                </div>
                <div className='menu mb-2'>
                    <div className='menuName'>Genre</div>
                    <div className='imogiarray  d-flex text-center  justify-content-between align-items-center p-2'>
                        <div className='imagiselect' onClick={() => { setBirthdayBoy({ ...birthdayBoy, genre: "Rap" }) }}>
                            <div className={birthdayBoy?.genre === "Rap" ? 'imagiselected' : ''}>
                                <img src={Rap} />
                            </div>
                            <p className='text-light'>Rap</p>
                        </div>
                        <div className='imagiselect' onClick={() => { setBirthdayBoy({ ...birthdayBoy, genre: "Rock" }) }}>
                            <div className={birthdayBoy?.genre === "Rock" ? 'imagiselected' : ''}>
                                <img src={Rock} />
                            </div>
                            <p className='text-light'>Rock</p>
                        </div>
                        <div className='imagiselect' onClick={() => { setBirthdayBoy({ ...birthdayBoy, genre: "Pop" }) }}>
                            <div className={birthdayBoy?.genre === "Pop" ? 'imagiselected' : ''}>
                                <img src={Pop} />
                            </div>
                            <p className='text-light'>Pop</p>
                        </div>
                        <div className='imagiselect' onClick={() => { setBirthdayBoy({ ...birthdayBoy, genre: "Desi" }) }}>
                            <div className={birthdayBoy?.genre === "Desi" ? 'imagiselected' : ''}>
                                <img src={Desi} />
                            </div>
                            <p className='text-light'>Desi</p>
                        </div>
                        <div className='imagiselect' onClick={() => { setBirthdayBoy({ ...birthdayBoy, genre: "Edm" }) }}>
                            <div className={birthdayBoy?.genre === "Edm" ? 'imagiselected' : ''}>
                                <img src={Edm} />
                            </div>
                            <p className='text-light'>Edm</p>
                        </div>
                    </div>
                </div>
                <div className='menu mb-2'>
                    <div className='menuName'>Singers Voice</div>
                    <div className='imogiarray  d-flex text-center  justify-content-around align-items-center p-1'>
                        <div className='imagiselect' onClick={() => { setBirthdayBoy({ ...birthdayBoy, voice: "Male" }) }}>
                            <div className={birthdayBoy?.voice === "Male" ? 'imagiselected' : ''}>
                                <img src={MAle} />
                            </div>
                            <p className='text-light'>Male</p>
                        </div>
                        <div className='imagiselect' onClick={() => { setBirthdayBoy({ ...birthdayBoy, voice: "Female" }) }}>
                            <div className={birthdayBoy?.voice === "Female" ? 'imagiselected' : ''}>
                                <img src={Female} />
                            </div>
                            <p className='text-light'>Female</p>
                        </div>
                    </div>
                </div>
                <div className='d-flex mt-2 justify-content-center align-items-center'>
                    {
                        loading ?
                            <>
                                <div class="me-1 spinner-grow text-primary" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                                <div class="me-1 spinner-grow text-secondary" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                                <div class="me-1 spinner-grow text-success" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                                <div class="me-1 spinner-grow text-danger" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                                <div class="me-1 spinner-grow text-warning" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                                <div class="me-1 spinner-grow text-info" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                                <div class="me-1 spinner-grow text-light" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                                <div class="me-1 spinner-grow text-dark" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                            </>
                            :
                            <button type="button" onClick={submitData}
                                className="btn btn-primary p-2  submitBtn">
                                Proceed
                            </button>
                    }

                    <div className='imagiAbsulate'>
                        <img src={Asset} />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Details2;