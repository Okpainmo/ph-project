import React from 'react';
import Image from 'next/image';
import image1 from '../../public/github-logo.png';
import image2 from '../../public/slack-logo.png';
import image3 from '../../public/coding-logo.png';
import image4 from '../../public/linkedin-logo.png';
import image5 from '../../public/person-1.png';
import image6 from '../../public/person-2.png';

function JoinCommunity() {
  function MyImage({ source }) {
    return (
      <Image
        alt="community identifier"
        src={source}
        placeholder="blur"
        width="50px"
        height="50px"
      />
    );
  }

  return (
    <section className="flex justify-around join-our-community w-full bg-black px-12 py-20 text-center -translate-y-96">
      <div className="image-row-1 w-14">
        <div className="image-wrapper translate-x-20 mb-8">
          <MyImage source={image5} />
        </div>
        <div className="image-wrapper mb-8">
          <MyImage source={image3} />
        </div>
        <div className="image-wrapper -translate-x-20">
          <MyImage source={image6} />
        </div>
      </div>
      <div className="text__btn-section">
        <h3 className="text-5xl text-white font-montserrat font-bold">
          Join our community
        </h3>
        <p className="text-xl text-white text-center mt-4">
          Join hundreds of amazing developers and designers, and build a <br />
          world class portfolio.
        </p>
        <button className="px-16 py-4 font-bold bg-blue-500 mt-10 mb-4 text-white text-xl rounded-lg">
          Join Techshare
        </button>
      </div>
      <div className="image-row-2 w-14">
        <div className="image-wrapper -translate-x-20 mb-8">
          <MyImage source={image1} />
        </div>
        <div className="image-wrapper mb-8">
          <MyImage source={image4} />
        </div>
        <div className="image-wrapper translate-x-20">
          <MyImage source={image2} />
        </div>
      </div>
    </section>
  );
}

export default JoinCommunity;
