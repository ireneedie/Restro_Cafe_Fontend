import React from "react"
import ImgLogo from '../../assests/img/Restro-Cafe.png';

const Footer = ({price, showCartList, setShowCartList})=> {
return (
    <>
    <footer>
        <div className="subtotal">
            <span className="subtotal-test">Subtotal:</span>
            <span className="subtotal-price">${price}</span>
        </div>
        {
            showCartList ? (
                <button className="link-button" onClick={() => setShowCartList(false)}>
                    Go back to home
                </button>
            ) : (
                <button onClick={() => setShowCartList(true)}>
                    Check Selected Items
                </button>
            )
        }
         </footer>
    <div className="end-grid">
    <div className="image">
        <img src={ImgLogo} alt="image"/>
        <p>
            Premium Quality food at the boot and most affortable price.<br/>
            We have a new offer every day for 365 days 
        </p>
    </div>
    
    <div className="contact">
        <h3>Contact</h3>
        <a>E-mail: quickfood@Restrocafe.com; Online: +1888 8345 5678</a>
    </div>
    </div>
    <hr/>
        <div className="grid">
        <a>DESIGN BY Restro-Cafe-@2022 ALL RIGHTS RESERVED.</a>

        </div>  
    </>
)

}

export default Footer;
