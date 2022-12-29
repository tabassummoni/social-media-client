import React from 'react';
import { FaHeart,FaThumbsUp ,FaRegComment} from 'react-icons/fa';

const ByOneShow = () => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                <div className="card-body">
                   
                    <p>hi</p>
                    <div className="card-actions justify-end">
                        <div className=""><FaHeart></FaHeart></div>
                        <div className=""><FaThumbsUp></FaThumbsUp></div>
                        <div className=""><FaRegComment></FaRegComment></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ByOneShow;