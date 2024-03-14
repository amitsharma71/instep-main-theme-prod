import React, { useEffect, useState } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { wishlistadd, wishlistget, wishlistremove } from '../../../Redux/action/wishlistAction';
import { useDispatch, useSelector } from 'react-redux';
import { getUserId } from '../../../utils/auth';

const Wishlistmaincomponent = (props) => {
    const { data } = props
    console.log(data, "sgsgs")
    const dispatch = useDispatch();
    const datas = useSelector(
        (state) => state?.getwishlisdData?.listdata?.data?.data
    );
    console.log(datas, "hhjdhfgdfdgfd")
    const userData = getUserId();
    console.log(userData, "userData");
    useEffect(() => {
        dispatch(wishlistget({ userId: userData?.id }));
    }, []);

    const handleWishlistClick = () => { }
    const isInWishlist = []
    const w = data?.products?.map((e) => {
        if (e.image) {
            // Do something with the product that has an image

            // Check if the product is in the wishlist
            isInWishlist =
                datas &&
                datas.length > 0 &&
                datas.find((item) => item.items === e._id);

            // Now you can use the value of isInWishlist
            if (isInWishlist) {
                // The product is in the wishlist
                console.log(`${e._id} is in the wishlist.`);
            } else {
                // The product is not in the wishlist
                console.log(`${e._id} is not in the wishlist.`);
            }
        }
    });





    return (
        <>


            <div >
                {
                    isInWishlist ? (
                        <AiFillHeart
                            style={{
                                color: "#FF0000", // Change to your desired color
                                width: "23px",
                                height: "23px",
                                cursor: "pointer",
                            }}
                            onClick={() =>
                                handleWishlistClick(data?._id, "delete")
                            }
                        />
                    ) : (

                        <AiOutlineHeart
                            style={{
                                color: "#808080",
                                width: "23px",
                                height: "23px",
                                cursor: "pointer",
                            }}
                            onClick={() =>
                                handleWishlistClick(data._id, "add")
                            }
                        />
                    )

                }
            </div>

        </>
    )
}

export default Wishlistmaincomponent

