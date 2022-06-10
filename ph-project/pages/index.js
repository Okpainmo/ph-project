// import Head from 'next/head';

import React from 'react';
import Detail from './landing-page-components/Detail';
import SharePrototype from './landing-page-components/SharePrototype';
import Navbar from './landing-page-components/Navbar';
import HeroSection from './landing-page-components/HeroSection';
import JoinCommunity from './landing-page-components/JoinCommunity';

function LandingPage() {
  return (
    <main className="landing-page w-full">
      <Navbar />
      <HeroSection />
      <section className="how-it-works custom-shift">
        <h1 className="text-6xl text-center font-bold font-montserrat">
          How it works
        </h1>
        <p className="w-3/4 mx-auto text-xl text-gray-600 text-center pt-8 leading-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe alias
          ea ut laborum quidem sint soluta consectetur commodi? Voluptatum, ipsa
          corrupti? Nobis tempora facere, fuga repellat, sunt laborum, maxime
          totam consectetur dolorem aliquam reprehenderit repellendus debitis
          architecto qui corporis repudiandae eius magni! Reiciendis quod
          nesciunt eius a iste earum necessitatibus?
        </p>
        <section className="detail-area w-full">
          <Detail />
        </section>
        <section className="share-prototype-section">
          <SharePrototype />
        </section>
      </section>
      <JoinCommunity />
    </main>
  );
}

export default LandingPage;
