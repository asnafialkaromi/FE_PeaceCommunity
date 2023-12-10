import InputText from "../elements/InputText";
import Button from "../elements/Button";
import TextArea from "../elements/TextArea";

const FormPertanyaan = () => {
  return (
    <div className="md:w-[50%] w-[80%]">
      <h2 className="lg:text-2xl text-xl font-bold text-black items-start pb-5">
        Masih Belum Menemukan Jawaban ?
      </h2>
      <div className="flex flex-col gap-6 ">
        <InputText type="text" placeholder="Nama" />
        <InputText type="text" placeholder="Email" />
        <InputText type="text" placeholder="Subjek" />
        <TextArea placeholder="Isi Pertanyaan Anda disini" />
        <Button type="submit" className="w-full">
          Kirim
        </Button>
      </div>
    </div>
  );
};

export default FormPertanyaan;
