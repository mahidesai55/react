import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';

function Header() {

    let [menu, set] = useState(false)
    function menuopen(e) {
        e.preventDefault();
        set(true)
    }
    function close() {
        set(false)
    }
    return (
        <header>
            <div className='logo'>
            <img src='images/logo.svg' />
            </div>
            <div className='model'>
                <ul>
                    <li><a href=''>Model S</a></li>
                    <li><a href=''>Model 3</a></li>
                    <li><a href=''>Model X</a></li>
                    <li><a href=''>Model Y</a></li>
                    <li><a href=''>Solar Roofs</a></li>
                    <li><a href=''>Solar Panel</a></li>
                </ul>
            </div>
            <div className='model'>
                <ul>
                    <li><a href=''>Shops</a></li>
                    <li><a href=''>Accounts</a></li>
                    <li><a href='' onClick={menuopen}>Menu</a></li>
                </ul>
            </div>
            


            <ul className='sider' style={{ right: (menu === false) ? "-250px" : "0" }}>
                <CloseIcon className='Mahendra' onClick={close} />
                <li><a href=''>Modal-3</a></li>
                <li><a href=''>Modal-y</a></li>
                <li><a href=''>Modal-s</a></li>
                <li><a href=''>Modal-x</a></li>
                <li><a href=''>Solar Panel</a></li>
                <li><a href=''>Solar Roofs</a></li>
                <li><a href=''>Accessories</a></li>
                <li><a href=''>Insurance</a></li>
                <li><a href=''>Inventory</a></li>
                <li><a href=''>Demo Drive</a></li>
                <li><a href=''>Technology</a></li>
                <li><a href=''>Commercial Energy</a></li>
            </ul>

        </header>
    )
}

export default Header