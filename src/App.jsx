import GridImageItem from "./components/GridImageItem";

const App = () => {
  return (
    <>
      <div className="min-h-screen bg-amber-50 p-4">
        {/* Heading */}
        <div className="flex items-center flex-col gap-2.5">
          <h1 className="text-4xl font-bold">Heading</h1>
          <p>Subheading</p>
        </div>
        {/* Content */}
        <div className="max-w-5xl mx-auto mt-8 grid grid-cols-3 grid-rows-2 gap-4">
          <GridImageItem imgsrc={"/taj-mahal.jpg"} />
          <GridImageItem imgsrc={"/red-fort.jpg"} />
          <GridImageItem imgsrc={"/india-gate.jpg"} />
          <GridImageItem imgsrc={"/qutub-minar.jpg"} />
          <GridImageItem imgsrc={"/ajanta.jpg"} />
          <GridImageItem imgsrc={"/ellora-caves.jpg"} />
        </div>
      </div>
    </>
  );
};

export default App;
