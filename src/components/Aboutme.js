import React from 'react';

import PP from '../img/PP.jpg';

const Aboutme = () => {
    return (
        <div className='about'>
            <h1> ABOUT ME</h1>

            <div className='info'>
                <div className='picture'>
                    <img src={PP} alt="Prashant Dhoju" />

                </div>
                <div className='description'>
                    <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit varius ultrices at vel aliquet porttitor nibh a.
                        Nec nulla elementum, duis sit. Tortor tincidunt suspendisse massa odio viverra cursus ut egestas. Leo cursus et, lacus, gravida id velit, tortor.
                        Sit cursus faucibus netus dignissim gravida facilisi in volutpat felis. Pellentesque at aliquet non turpis. Viverra at nisi morbi vel elementum.
                        Maecenas aliquam aliquam sit neque dignissim. Sit nec facilisi consectetur consequat, quis dui nec elementum. Nunc eu nunc, ut dignissim.
                        Et sit elementum faucibus tincidunt posuere. At metus, donec suspendisse massa semper ac elementum penatibus. Malesuada diam sapien donec.
                    </h3></div>
            </div>
        </div>
    )
}

export default Aboutme;