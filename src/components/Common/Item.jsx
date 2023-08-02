import React from 'react'
// import ImgHoney from '../../assests/img/Image 4.png'
import ImgLike from '../../assests/img/like.png'
import { useDispatch } from 'react-redux';
import { addCart, increaseCart,decreaseCart } from '../../reducks/carts/operations';


const Item= ({item, selected_count, setShowWriteReview, setShowReviews, setSelectedItemId}) => {
    const dispatch= useDispatch();
    const clickAddCart=()=>{
        dispatch(addCart(item))
    }
    const clickPlusCart=()=>{
        dispatch(increaseCart(item))
    }
    const clickMinusCart=()=>{
        dispatch(decreaseCart(item))
    }
    const clickCheckReview=()=>{
        setSelectedItemId(item.id);
        setShowReviews(true)

    }
    const clickWriteReview=()=>{
        setSelectedItemId(item.id);
        setShowWriteReview(true)
    }


  
    return(
        <>
       
<div className="item">
    <div className="image">
        <img src={item.image} alt="item"/>
    </div>
    <div className="like">
        <img src={ImgLike} alt="like"/>
        <p>(55)</p>
    </div>
    <div className="name">
        <p>{item.name}</p>
    </div>
    <div className="review">
        <a onClick={()=>{clickWriteReview(true)     
        }}>Write Review</a>
        <a onClick={ ()=>{clickCheckReview(true)
         }}>Check Review</a>
    </div>
    <div className="cart">
        {selected_count ===0 ? (
             <button onClick={clickAddCart}>Add to Cart</button>
        ):(
            <div class="number">
                <span class="minus" onClick={clickMinusCart}> - </span>
                <span class="count">{selected_count}</span>
                <span class="plus" onClick={clickPlusCart}> + </span>
            </div>
        )}
        <p class="price">${item.price}</p>
    </div>
</div>
</>

    )
}

export default Item;


