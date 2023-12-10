import React from "react";
import HeroBackground from "../../assets/img/HeroBackground.png";

const Hero = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${HeroBackground})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-fit text-white">
            <h1 className="mb-5 lg:text-8xl md:text-7xl sm:text-5xl text-4xl font-bold">
              Selamat Datang
            </h1>
            <h2 className="mb-5 lg:text-5xl md:text-4xl sm:text-2xl text-xl">
              Di website Pengaduan Online Masyarakat
            </h2>
            <p className="mb-5 lg:text-2xl md:text-xl sm:text-lg text-base">
              Sampaikan laporan anda langsung kepada instansi pemerintah
              berwenang.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
