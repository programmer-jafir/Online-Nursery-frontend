import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Star = ({ rating }:any) => {
  const ratingStar = Array.from({ length: 5 }, (_elem ,index: number) => { //elem ,
   const number  = index + 0.5;
    return (
      <span key={index}>
        {rating >= index + 1 ? (
          <FaStar className="icon"/>
        ) : rating >= number ? (
          <FaStarHalfAlt className="icon"/>
        ) : (
          <AiOutlineStar className="icon"/>
        )}
      </span>
    );
  });
  return (
    <div className="flex items-center">
    Review:
    <div className="icon-style text-yellow-500 text-center flex ml-2">
    {ratingStar}
        </div>
        </div>
  );
};
export default Star;
