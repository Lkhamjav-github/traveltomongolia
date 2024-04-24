import React, { useState } from "react";
import { LeftArrow, RightArrow } from "@/components/icons/travelDetail";
import ReviewCard from "./ReviewCard";
import { getServerSideProps } from "./TourDetailHero";
import { Tours } from "@/types/toursTypes";
import { Travel } from "@/types/travelTypes";
// import { ReviewForm } from './ReviewForm';

interface Props {
  toursData: Tours;
  travelDatas: Travel;
}

const Reviews = ({ toursData, travelDatas }: Props) => {
  const tourDatas = toursData.result;
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    if (index > 0) setIndex(index - 2);
  };
  const handlePrevMobile = () => {
    if (index > 0) setIndex(index - 1);
  };
  const handleNext = () => {
    if (index < tourDatas.length - 2) setIndex(index + 2);
  };
  const handleNextMobile = () => {
    if (index < tourDatas.length - 1) setIndex(index + 1);
  };

  return (
    <div className="flex flex-col mt-20 mb-20">
      <div className="flex justify-between">
        <div className="lg:text-[40px] text-3xl font-oswald font-bold">
          REVIEWS
        </div>
        <div className="lg:flex hidden lg:gap-20">
          <button onClick={handlePrev}>
            {index > 0 ? <LeftArrow /> : <LeftArrow fill="#F6F6F6" />}
          </button>
          <button onClick={handleNext}>
            {index < tourDatas.length - 2 ? (
              <RightArrow />
            ) : (
              <RightArrow fill="#F6F6F6" />
            )}
          </button>
        </div>
        <div className="lg:hidden flex gap-10">
          <button onClick={handlePrevMobile}>
            {index > 0 ? <LeftArrow /> : <LeftArrow fill="#F6F6F6" />}
          </button>
          <button onClick={handleNextMobile}>
            {index < tourDatas.length - 1 ? (
              <RightArrow />
            ) : (
              <RightArrow fill="#F6F6F6" />
            )}
          </button>
        </div>
      </div>
      <div className="lg:mt-10 lg:flex hidden lg:flex-row flex-col justify-between">
        {tourDatas.slice(index, index + 2).map((review) => (
          <ReviewCard
            message={review.english}
            proPic={review.english}
            name={review.english}
            bio={review.english}
          />
        ))}
      </div>
      <div className="mt-10 lg:hidden flex lg:flex-row flex-col justify-between">
        {tourDatas.slice(index, index + 1).map((review) => (
          <ReviewCard
            message={review.english}
            proPic={review.english}
            name={review.english}
            bio={review.english}
          />
        ))}
      </div>
      {/* <ReviewForm /> */}
    </div>
  );
};

export { getServerSideProps };

export default Reviews;
