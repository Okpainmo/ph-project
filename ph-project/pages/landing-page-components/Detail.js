import Image from 'next/image';
import React from 'react';
import { detailData } from '../../assets/global-utilities/DetailData.js';
// import pic from '../../public/share.svg';

function Detail() {
  // const
  const data = detailData;
  console.log(data);

  return (
    <>
      {data.map(function (each) {
        const { id, illustration, detailTitle, detailText } = each;
        return (
          <div
            className="container w-3/4 mt-24 pb-16 flex gap-12 mx-auto box-border"
            key={id}
          >
            <div className="illustration-area w-1/3">
              <Image
                src={illustration}
                alt="detail-illustration"
                // placeholder="blur"
                // blueDataURl={pic}
                width="400px"
                height="300px"
              />
            </div>
            <div className="detail-text-section w-2/3">
              <h4 className="detail-text-section-header align-start pb-6 text-5xl font-bold font-montserrat">
                {detailTitle}
              </h4>
              <p className="text-gray-600 text-xl">{detailText}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Detail;
