import Image from 'next/image';
import React from 'react';
import pic from '../../public/share.svg';

function Detail() {
  return (
    <div className="container w-3/4 mt-24 flex gap-12 mx-auto">
      <div className="illustration-area w-1/3">
        <Image
          src={pic}
          alt="detail-illustration"
          // placeholder="blur"
          // blueDataURl={pic}
          width="400px"
          height="300px"
        />
      </div>
    </div>
  );
}

export default Detail;
