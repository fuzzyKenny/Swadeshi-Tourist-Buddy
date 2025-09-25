import { Navigate, useNavigate } from "react-router-dom";
import GridImageItem from "./GridImageItem";
import Footer from "./Footer";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="min-h-screen bg-amber-50 p-4">
        {/* Heading */}
        <div className="flex items-center flex-col gap-2.5">
          <h1 className="text-4xl font-bold">Swadeshi Tourist Buddy</h1>
          <p>Some Subheading</p>
        </div>
        {/* Content */}
        <div className="flex flex-col gap-8">
          <div className="max-w-5xl mx-auto mt-12 grid grid-cols-3 grid-rows-2 gap-4">
            <GridImageItem imgsrc={"/taj-mahal.jpg"} title={"Taj Mahal"} />
            <GridImageItem imgsrc={"/red-fort.jpg"} title={"Red Fort"} />
            <GridImageItem imgsrc={"/india-gate.jpg"} title={"India Gate"} />
            <GridImageItem imgsrc={"/qutub-minar.jpg"} title={"Qutub Minar"} />
            <GridImageItem imgsrc={"/ajanta.jpg"} title={"Ajanta"} />
            <GridImageItem
              imgsrc={"/ellora-caves.jpg"}
              title={"Ellora Caves"}
            />
          </div>
          <div className="flex justify-center ">
            <button
              onClick={() => {
                navigate("/learn-more");
              }}
              className="hover:border-b border-black"
            >
              Learn more.
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Landing;
