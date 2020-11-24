import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/header.css'

const SimpleHeader = ( { pokemonName } ) =>{
    return(        
		<section class="slider-area slider-area2">
            <div class="slider-active">
                <div class="single-slider slider-height2">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-8 col-lg-11 col-md-12">
                                <div class="hero__caption hero__caption2">
                                    <h1 data-animation="bounceIn" data-delay="0.2s">{pokemonName}</h1>
                                    <nav aria-label="breadcrumb">
                                        <ol class="breadcrumb">
                                            <li class="breadcrumb-item"><Link to='/'>Home</Link></li>
                                            <li class="breadcrumb-item"><Link to={`/pokemon/${pokemonName}`}>{pokemonName}</Link></li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>          
                </div>
            </div>
        </section>
    )
};

export default SimpleHeader;
