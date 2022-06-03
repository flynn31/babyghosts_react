import React, { useState } from 'react';
import MetamaskLoad from './MetamaskLoad';
import MetamaskLogin from './MetamaskLogin';
import '../assets/style/Metamask.css';

const Metamask_element = (props) => {

    const [n, setN] = useState(0);

    setInterval(function () {
        setN(n + 1);
    }, 2000);

    return (
        <div className='w-metamask'>
            {n === 0 ? <MetamaskLoad /> : <MetamaskLogin />}
        </div>
    )
}

export default Metamask_element;