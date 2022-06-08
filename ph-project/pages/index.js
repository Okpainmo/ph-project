// import Head from 'next/head';
import Image from 'next/image';
import FirstBannerImage from '../public/pic-4.png';
import SecondBannerImage from '../public/image-1.png';

import React from 'react';
import Detail from './landing-page-utilities/Detail';

function index() {
  return (
    <main className="landing-page font-montserrat w-full">
      <nav className="mx-12 py-5 flex text-black">
        <div className="nav-brand font-bold text-3xl font-lato">TechShare</div>
        {/* <div className="flex"> */}
        <ul className="nav-links text-base mx-auto flex gap-10">
          <li>Home</li>
          <li>About Us</li>
          <li>Designs</li>
          <li>Community</li>
        </ul>
        {/* </div> */}
        <div className="action-buttons-wrapper flex gap-6 items-center">
          <span>Login</span>
          <button className="px-4 py-2 custom-btn bg-blue-500 text-white">
            Sign Up
          </button>
        </div>
      </nav>
      <section className="container hero-section pt-20 mx-auto">
        <div className="banner-text text-5xl font-lato font-bold w-3/4 text-center mx-auto">
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
      <section className="how-it-works custom-shift">
        <h1 className="text-6xl text-center font-bold font-lato">
          How it works
        </h1>
        <p className="w-3/4 mx-auto text-xl text-gray-700 text-center pt-8 leading-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe alias
          ea ut laborum quidem sint soluta consectetur commodi? Voluptatum, ipsa
          corrupti? Nobis tempora facere, fuga repellat, sunt laborum, maxime
          totam consectetur dolorem aliquam reprehenderit repellendus debitis
          architecto qui corporis repudiandae eius magni! Reiciendis quod
          nesciunt eius a iste earum necessitatibus?
        </p>
        <section className="illustration-area w-full">
          <Detail />
        </section>
      </section>
    </main>
  );
}

export default index;
