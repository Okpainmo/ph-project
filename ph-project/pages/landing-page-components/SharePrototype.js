import React from 'react';
import illustration from '../../public/wow-illustration.png';
import designIcons from '../../public/design-icons.png';
import Image from 'next/image';

function SharePrototype() {
  return (
    <>
      <div className="graphic-display flex container w-3/4 mx-auto gap-24 pt-12">
        <aside className="text-area pt-24">
          <h1 className="text-left text-4xl leading-snug font-bold font-montserrat">
            Share designs from your favourite design <br /> tools for developers
            to build.
          </h1>
          <button className="px-8 py-4 font-bold bg-blue-500 mt-6 text-white text-xl rounded-lg">
            Share a prototype
          </button>
        </aside>
        <div className="design-icons w-1/2">
          <Image
            src={designIcons}
            placeholder="blur"
            alt="banner-image"
            className="relative z-10 w-full"
          />
        </div>
      </div>
    </>
  );
}

export default SharePrototype;
