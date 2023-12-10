import CardFeature from "../elements/CardFeature";
const FeatureDetails = () => {
  return (
    <div className="flex w-[100%] min-h-screen bg-white items-center justify-center">
      <div className="flex flex-col gap-16 items-center max-w-7xl  text-center px-4">
        <h1 className="sm:text-3xl text-xl font-bold text-white bg-blue-700 w-fit px-6 py-3 rounded-full">
          Jenis - Jenis Pelayanan
        </h1>
        <div className="flex justify-center items-center">
          <div className="grid lg:grid-rows-2 lg:grid-flow-col gap-10 align-items-center w-full">
            <CardFeature />
            <CardFeature />
            <CardFeature />
            <CardFeature />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureDetails;
