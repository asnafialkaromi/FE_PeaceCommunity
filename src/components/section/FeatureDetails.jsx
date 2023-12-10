import CardFeature from "../elements/CardFeature";
import Img1 from "../../assets/img/admin-control.png";
import Img2 from "../../assets/img/user-control.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const FeatureDetails = () => {
  window.scrollTo(0, 0);

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <div
      className="flex w-[100%] min-h-screen bg-white items-center justify-center"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <div className="flex flex-col gap-16 items-center max-w-7xl  text-center px-4">
        <h1 className="sm:text-3xl text-xl font-bold text-white bg-blue-700 w-fit px-6 py-3 rounded-full">
          Jenis - Jenis Pelayanan
        </h1>
        <div className="flex justify-center items-center">
          <div className="grid lg:grid-rows-2 lg:grid-flow-col gap-10 align-items-center w-full">
            <CardFeature
              Img={Img1}
              Title="Admin Control"
              desc="Admin Control, Fitur ini berfungsi untuk mengontrol laporan-laporan yang masuk dari masyarakat, dan memudahkan para petugas untuk menontrol laporan-laporan yang masuk."
            />
            <CardFeature
              Img={Img2}
              Title="User Control"
              desc="User Control, Fitur ini di sediakan untuk user agar dapat dengan mudah melaporkan keluhan yang ingin di sampaikan kepada perangkat desa."
            />
            <CardFeature
              Img={Img2}
              Title="User Control"
              desc="User Control, Fitur ini di sediakan untuk user agar dapat dengan mudah melaporkan keluhan yang ingin di sampaikan kepada perangkat desa."
            />
            <CardFeature
              Img={Img1}
              Title="Admin Control"
              desc="Admin Control, Fitur ini berfungsi untuk mengontrol laporan-laporan yang masuk dari masyarakat, dan memudahkan para petugas untuk menontrol laporan-laporan yang masuk."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureDetails;
