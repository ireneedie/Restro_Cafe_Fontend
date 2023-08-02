import React, { useState } from 'react'
import ImgCancel from '../../assests/img/cancel.png'
import ImgIconHeart from '../../assests/img/heart.png'
import ImgIconThumbs from '../../assests/img/thumb.png'
import API from '../../API'


const WriteReview = ({setShowWriteReview, selectedItemId}) => {
    const api = new API()
    const [body, setBody] = useState("")
    const [name, setName] = useState("")
    const like_count=1
    const handleClick = ()=>{
       api.writeReview(selectedItemId, name, body, like_count).then((res)=>setShowWriteReview(false)).catch(error=>console.log(error.message))
    }
    return (
        <section className="pop">
            <div className="pop-up">
                <img className='can' src={ImgCancel} onClick={()=>setShowWriteReview(false)} alt="" />
                <h3>Write Review</h3>
                <p>Choose your thought</p>
                <div className="btn">
                    <button><img src={ImgIconHeart} alt="" />
                        <p>GOOD <br />(15 Likes)</p>
                    </button>
                    <button><img src={ImgIconHeart} alt="" />
                        <p>VERY GOOD <br />(25 Likes)</p>
                    </button>
                    <button><img src={ImgIconHeart} alt="" />
                        <p>EXCELLENT<br />(55 Likes)</p>
                    </button>
                    <button><img src={ImgIconThumbs} alt="" />
                        <p>NOT GOOD <br />(09 Likes)</p>
                    </button>
                </div>
                <input type="text" onChange={(e)=>setName(e.target.value)} placeholder="Enter Your Name" required/><br />
                <input type="text"onChange={(e)=>setBody(e.target.value)} placeholder="Enter Your Feedback/Review" required /> <br />
                <button onClick={handleClick} id="send">
                    SEND REVIEW
                </button>

            </div>
        </section >
    )
}


export default WriteReview

