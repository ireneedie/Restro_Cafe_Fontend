import React from "react"
import ImgLogo from '../../assests/img/Restro-Cafe.png';
import ImgBack from '../../assests/img/background-main.png'

export default function Header()  {
    return(
    <>
    <header>

<img src={ImgBack} class="bkg-img"/>
<img src={ImgLogo} class="logo"/>
<h1>
   Good food is <br/> The Foundation of<br /><span>GENUINE HAPPINESS</span>
</h1>
</header>
</>

    )
}



