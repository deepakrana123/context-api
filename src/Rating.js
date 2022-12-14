import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import React from 'react';
const Rating = ({ rating, onClick,style }) => {
  return (
    <>
      {[...Array(5)].map((_, i) => (
        <span key={i} style={style} onClick={()=>onClick(i)}>
          {rating >= i ? (
            <AiFillStar fontSize="25px" />
          ) : (
            <AiOutlineStar fontSize="25px" />
          )}
        </span>
    
      ))}
    </>
  );
};

export default Rating;