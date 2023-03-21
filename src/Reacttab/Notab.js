import React, { useState } from 'react'
import './Notab.css'
function Notab() {
    const [active, setactive] = useState("0")
    function handlechange(count) {
        setactive(count)
    }
    return (
        <div id='wrapper'>
            <div className='tab'>
                <div className='anc4'>
                    <a href='' onClick={(e) => { e.preventDefault(); handlechange(0) }} className={active === 0 ? "active" : " "}>HTML</a>
                    <a href='' onClick={(e) => { e.preventDefault(); handlechange(1) }} className={active === 1 ? "active" : " "}>CSS</a>
                    <a href='' onClick={(e) => { e.preventDefault(); handlechange(2) }} className={active === 2 ? "active" : " "}>JS</a>
                    <a href='' onClick={(e) => { e.preventDefault(); handlechange(3) }} className={active === 3 ? "active" : " "}>REACT</a>
                    <a href='' onClick={(e) => { e.preventDefault(); handlechange(4) }} className={active === 4 ? "active" : " "}>NODE</a>
                    <a href='' onClick={(e) => { e.preventDefault(); handlechange(5) }} className={active === 5 ? "active" : " "}>MANGO</a>
                    <a href='' onClick={(e) => { e.preventDefault(); handlechange(6) }} className={active === 6 ? "active" : " "}>VUE</a>
                </div >
                <div className='pera'>
                    <div class="con active" className={active === 0 ? "con active" : "con"} >
                        <h3>HTML</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempor faucibus posuere. Integer efficitur metus at
                            neque volutpat pharetra. Integer dignissim euismod volutpat. Proin convallis fringilla urna et consequat. Nam
                            consectetur tempor tincidunt. Donec vitae magna tellus. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit.
                        </p>
                    </div>
                    <div class="con" className={active === 1 ? "con active" : "con"}>
                        <h3>CSS</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempor faucibus posuere. Integer efficitur metus at
                            neque volutpat pharetra. Integer dignissim euismod volutpat. Proin convallis fringilla urna et consequat. Nam
                            consectetur tempor tincidunt. Donec vitae magna tellus. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit.
                        </p>
                    </div>
                    <div class="con" className={active === 2 ? "con active" : "con"}>
                        <h3>JS</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempor faucibus posuere. Integer efficitur metus at
                            neque volutpat pharetra. Integer dignissim euismod volutpat. Proin convallis fringilla urna et consequat. Nam
                            consectetur tempor tincidunt. Donec vitae magna tellus. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit.
                        </p>
                    </div>
                    <div class="con" className={active === 3 ? "con active" : "con"}>
                        <h3>REACT-Reusable Components</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempor faucibus posuere. Integer efficitur metus at
                            neque volutpat pharetra. Integer dignissim euismod volutpat. Proin convallis fringilla urna et consequat. Nam
                            consectetur tempor tincidunt. Donec vitae magna tellus. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit.
                        </p>
                    </div>
                    <div class="con" className={active === 4 ? "con active" : "con"}>
                        <h3>NODE-Get JS out of Browsers</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempor faucibus posuere. Integer efficitur metus at
                            neque volutpat pharetra. Integer dignissim euismod volutpat. Proin convallis fringilla urna et consequat. Nam
                            consectetur tempor tincidunt. Donec vitae magna tellus. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit.
                        </p>
                    </div>
                    <div class="con" className={active === 5 ? "con active" : "con"}>
                        <h3>MANGO-Table less DB</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempor faucibus posuere. Integer efficitur metus at
                            neque volutpat pharetra. Integer dignissim euismod volutpat. Proin convallis fringilla urna et consequat. Nam
                            consectetur tempor tincidunt. Donec vitae magna tellus. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit.
                        </p>
                    </div>
                    <div class="con" className={active === 6 ? "con active" : "con"}>
                        <h3>VUE-No idea about it</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempor faucibus posuere. Integer efficitur metus at
                            neque volutpat pharetra. Integer dignissim euismod volutpat. Proin convallis fringilla urna et consequat. Nam
                            consectetur tempor tincidunt. Donec vitae magna tellus. Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit.
                        </p>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Notab