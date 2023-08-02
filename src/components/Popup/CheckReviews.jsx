import React, { useEffect, useState } from 'react'
import ImgCancel from '../../assests/img/cancel.png'
import ImgIconHeart from '../../assests/img/heart.png'
import ImgIconThumbs from '../../assests/img/thumb.png'
import API from '../../API'

const CheckReview = ({ setShowReviews, selectedItemId }) => {
    const api = new API()
    const [reviews, setReviews] = useState()
    useEffect(() => {
        api.getReviews(selectedItemId).then(res => {setReviews(res.results); console.log(res)}).catch(err => console.log(err.message))
    },[])
    return (
        <>




            <section class="pop">
                <div class="pop-up">
                    <img className='can' src={ImgCancel} onClick={() => setShowReviews(false)} alt="" />
                    <div class="pop-review">
                        <span>Review for</span>
                        <h3>"Chicken Submarine Burger"</h3>
                    </div>
                    <div class="btn">
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
                    <div class="review">
                        {reviews ? reviews.map((review) => (
                            <>
                                <h3>{review.name}</h3>
                                <p>{review.body}</p>
                                <hr />
                            </>

                        )) : <h3>No reviews present</h3>}

                    </div>

                </div>

            </section>

        </>
    )
}

export default CheckReview