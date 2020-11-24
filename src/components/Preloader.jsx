import React from 'react'
import LogoLoader from '../assets/img/loader.png'

const Preloader = () =>{
    return(        
    <div id="preloader-active">
        <div class="preloader d-flex align-items-center justify-content-center">
            <div class="preloader-inner position-relative">
                <div class="preloader-circle"></div>
                <div class="preloader-img pere-text">
                    <img src={LogoLoader} alt="Loading" />
                </div>
            </div>
        </div>
    </div>
    )
};

export default Preloader;
