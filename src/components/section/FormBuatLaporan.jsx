import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../elements/Button";
import InputText from "../elements/InputText";
import TextArea from "../elements/TextArea";
import axios from "axios";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";

const FormBuatLaporan = () => {
  window.scrollTo(0, 0);

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [noTelp, setNoTelp] = useState("");
  const [alamat, setAlamat] = useState("");
  const [pengaduan, setPengaduan] = useState("");
  const [file, setFile] = useState("");
  const [status, setStatus] = useState("Tertunda");
  const navigate = useNavigate();

  const saveReport = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("noTelp", noTelp);
    formData.append("alamat", alamat);
    formData.append("pengaduan", pengaduan);
    formData.append("status", status);
    formData.append("file", file);
    try {
      await axios.post("http://localhost:5000/api/v1/reports", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });

      Swal.fire({
        icon: "success",
        title: "Berhasil membuat pengaduan",
        showConfirmButton: false,
        timer: 2000,
      });

      navigate("/riwayat-laporan");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="flex h-screen w-full items-center justify-center bg-slate-200"
      data-aos="fade-down"
      data-aos-duration="1500"
    >
      <div className="flex flex-col gap-3 xl:max-w-[1000px] w-full h-fit p-4">
        <h2 className="text-4xl font-bold text-black text-left pb-3">
          Buat Pengaduan
        </h2>
        <div className="flex flex-col gap-3 bg-white w-full h-fit shadow-xl rounded-lg p-6">
          <form onSubmit={saveReport} className="flex flex-col gap-3">
            <p className="text-left w-full">Isi Laporan : </p>
            <InputText
              type="text"
              placeholder="Nama"
              onChange={(e) => setName(e.target.value)}
            />
            <InputText
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputText
              type="text"
              placeholder="No. Telp"
              onChange={(e) => setNoTelp(e.target.value)}
            />
            <InputText
              type="text"
              placeholder="Alamat"
              onChange={(e) => setAlamat(e.target.value)}
            />
            <TextArea
              placeholder="Isi Pengaduan Anda Disini"
              className="text-md"
              onChange={(e) => setPengaduan(e.target.value)}
            />
            <label htmlFor="fileInput" className="file-input-label w-full">
              <input
                type="file"
                id="fileInput"
                className="file-input file-input-bordered file:bg-blue-700 w-full rounded-full bg-slate-50"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
            <Button type="submit" className="w-fit px-10">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormBuatLaporan;
