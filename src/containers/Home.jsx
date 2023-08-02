import  React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ImgLogo from '../assests/img/Restro-Cafe.png'
import ImgBack from '../assests/img/background-main.png'
import { getItems } from '../reducks/items/selectors';
import { getCarts } from '../reducks/carts/selectors';
import { getSubtotal } from '../reducks/carts/selectors';
import { fetchItems } from '../reducks/items/operations';
import { fetchFromLocalStorage } from '../reducks/carts/operations';
import Item from '../components/Common/Item';
import queryString from 'query-string';
import icon from "../assests/img/Group 1473 (1).png"
import WriteReview from '../components/Popup/WriteReviews';
import CheckReview from '../components/Popup/CheckReviews';
import Header from '../components/Common/Header'
import Footer from '../components/Common/Footer';



export const Home= () =>{

    const parsed = queryString.parse(window.location.search);
    const [showWriteReview, setShowWriteReview] = useState(false);
    const [showReviews, setShowReviews] = useState(false);
    const [showCartList, setShowCartList] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState();
    const dispatch = useDispatch();
    const selector = useSelector((state) => state);
    const items = getItems(selector);
    const carts = getCarts(selector);
    const subtotal = getSubtotal(selector);
    const [category, setCategory] = useState("")
    useEffect(() => {
        dispatch(fetchFromLocalStorage());
        dispatch(fetchItems(category));
    }, [category]);

    const showItem = (item) => {
        let selected_count = 0;
        if (carts[item.id]  && carts[item.id].selected_count) {
            selected_count = carts[item.id].selected_count;
        }
        if (showCartList && carts[item.id]  == undefined){
            return;
        } 

        return (
          
                <Item key={item.id}
                item={item}
                selected_count={selected_count}
                setShowWriteReview={setShowWriteReview}
                setShowReviews={setShowReviews}
                setSelectedItemId={setSelectedItemId}
                />
     
        )
    }

    return (
        <>
        {/* <header>
        <img src={ImgBack}className="bkg-img"/>
        <img src={ImgLogo} className="logo"/>
        <h1>
           Good food is <br/> The Foundation of<br /><span>GENUINE HAPPINESS</span>
        </h1>
    </header> */}
<Header/>
    
    <main>
        {showCartList ? (
            <>
            <h1 className='cart-heading'>Selected Items</h1>
            <p className='cart-heading'>Please show this page to the waiter.</p>
            </>
        ) : (
            <>
        <h3>Our Most Popular Recipes</h3>
        <img src={icon} />
        <h5>
            Try our Most Delicious food and it usually take minutes to Deliver!
        </h5>

        <div class="buttons">
            <button onClick={()=>setCategory("")} class={category === "" ? "buttonhover" :"button" } >All</button>
            <button onClick={()=>setCategory("Hot")} class={category === "Hot" ? "buttonhover" :"button" }>HOT</button>
            <button onClick={()=>setCategory("Cold")} class={category === "Cold" ? "buttonhover" :"button" }>COLD</button>
            <button onClick={()=>setCategory("Bagel")}class={category === "Bagel" ? "buttonhover" :"button" }>BAGEL</button>
        </div>
        </>
        )}
    </main>
    <menu>
    <div className="item-grid">
   {items && items.map(item=>(showItem(item)))}
   </div>
   </menu>
   {/* <footer>
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
      
    </footer>   */}

<Footer 
  price = {subtotal}
  showCartList={showCartList}
  setShowCartList={setShowCartList}
/>

    {showWriteReview &&<WriteReview
    setShowWriteReview={setShowWriteReview}
    selectedItemId={selectedItemId}
    /> }
    {showReviews && <CheckReview 
    setShowReviews={setShowReviews}
    selectedItemId={selectedItemId}
     /> }
   
      
    </>

    )

}
