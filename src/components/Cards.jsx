/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Badges from './Badges'
import '../assets/css/cards.css'

const Cards = ( { url } ) => {
    const imgURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/';
    const png = '.png';
    const [ pokemon, setPokemon ] = useState({ types: [] });
    useEffect(() => {
      fetch(url)
        .then(response => response.json())
        .then(res => setPokemon(res));
    }, []);

    function zeroFill(number, width) {
        width -= number.toString().length;
        if(width > 0) {
            return new Array(width + (/\./.test(number) ? 2 : 1)).join('0') + number;
        }
        return number + "";
    }

    return (
        <Fragment>
            <div className="col-lg-3">
                <div className="properties properties2 mb-30">
                    <div className="properties__card">
                        <div className="properties__img overlay1">
                            <Link to={`/pokemon/${pokemon.name}`}>
                                <img src={`${imgURL}${pokemon.id}${png}`} alt={pokemon.name} />
                            </Link>
                        </div>
                        <div className="properties__caption">
                            <h3 className="pokemon-name">
                                <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
                            </h3>
                            <p>#{zeroFill(`${pokemon.id}`, 3)}
                                {pokemon.types.map(item =>
                                    <Badges key={item.id} {...item} />
                                )}
                            </p>
                            <Link to={`/pokemon/${pokemon.name}`} className='border-btn border-btn2'>
                                See Details
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Cards;
