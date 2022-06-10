import React from 'react';
import Image from 'next/image';
import FirstBannerImage from '../../public/pic-6.png';
import SecondBannerImage from '../../public/image-1.png';

function HeroSection() {
  return (
    <section className="container hero-section pt-24 mx-auto">
      <div className="banner-text text-5xl font-montserrat font-bold w-3/4 text-center mx-auto">
        Where designers and designs meet developers and code.
      </div>
      <div className="follow-up-text text-center w-2/4 mx-auto pt-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
        deleniti? Obcaecati magnam autem, possimus explicabo nobis quia
        perferendis dolorum .
      </div>
      <div className="banner-btn-wrappers flex pt-5 justify-center gap-8">
        <button className="custom-btn bg-blue-500 text-base text-white px-6 py-4 font-bold">
          Explore Designs
        </button>
        <button className="custom-btn px-6 py-2 text-base bg-white border-2 text-blue-500 border-gray-200 font-bold">
          Join Our Community
        </button>
      </div>
      <div className="banner-images-wrapper pt-24 w-3/4 mx-auto">
        <Image
          src={FirstBannerImage}
          placeholder="blur"
          alt="banner-image"
          width="600px"
          height="400px"
          className="relative z-10"
        />
        <div className="image-wrapper -translate-y-96 translate-x-36">
          <Image
            src={SecondBannerImage}
            alt="banner-image"
            placeholder="blur"
            width="900px"
            height="650px"
            className="relative z-20"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
