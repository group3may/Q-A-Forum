import React from 'react'
import "./MainPage.css"
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function MainPage() {
    return (

        <div className="section-wrapper">
            <div className="leftSide">
                <div className='container'>
                    <div className='leftSide__login'>
                        Login to your account
                    </div>
                    <div className='leftSide__account'>
                        Don't have an account?<a style={{ color: "#FFB882" }} href="#">Create a new account</a>

                    </div>
                    <div className='leftSide__form'>
                        <form action='#'>

                            <input className='mainpage__input' type="text" placeholder='Your Email' />

                            <br /> <br />
                            <input className='mainpage__input' type="text" placeholder='Your Password' />
                            <i className='visibilityEye'><VisibilityOffIcon /></i>
                            <br /> <br />


                        </form>
                    </div>
                    <div className='submit btn'>
                        <button type="submit">Submit</button>
                    </div>
                    <div className='createAccount'>
                        <a href="#">Create an account?</a>
                    </div>
                </div>


            </div>
            <div className="rightside">
                <div className='rightSide-container'>
                    <div className='about'>
                        About
                    </div>
                    <div className='rightside__question'>
                        <h2>Evangadi Networks Q&A </h2><br /><br />
                    </div>
                    <div className='rightside__description' >
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod magni ipsum mollitia quas, expedita maiores amet deserunt, cumque incidunt dolorem porro omnis facere molestiae eaque natus ducimus totam id iste.
                        </p><br />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod magni ipsum mollitia quas, expedita maiores amet deserunt, cumque incidunt dolorem porro omnis facere molestiae eaque natus ducimus totam id iste.
                        </p><br />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod magni ipsum mollitia quas, expedita maiores amet deserunt, cumque incidunt dolorem porro omnis facere molestiae eaque natus ducimus totam id iste.
                        </p><br />
                    </div>
                    <div className='howItWork btn'>
                        <button type="text">HOW IT WORKS</button>
                    </div>
                </div>


            </div>

        </div>

    )
}

export default MainPage