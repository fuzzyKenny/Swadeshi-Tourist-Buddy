import GridImageItem from "./components/GridImageItem";

const App = () => {
  return (
    <>
      <div className="min-h-screen bg-amber-50 p-4">
        {/* Heading */}
        <div className="flex items-center flex-col gap-2.5">
          <h1 className="text-4xl font-bold">Some Heading</h1>
          <p>Some Subheading</p>
        </div>
        {/* Content */}
        <div className="flex flex-col gap-8">
          <div className="max-w-5xl mx-auto mt-12 grid grid-cols-3 grid-rows-2 gap-4">
            <GridImageItem imgsrc={"/taj-mahal.jpg"} />
            <GridImageItem imgsrc={"/red-fort.jpg"} />
            <GridImageItem imgsrc={"/india-gate.jpg"} />
            <GridImageItem imgsrc={"/qutub-minar.jpg"} />
            <GridImageItem imgsrc={"/ajanta.jpg"} />
            <GridImageItem imgsrc={"/ellora-caves.jpg"} />
          </div>
          <div className="flex justify-center">
            <p>Learn more.</p>
          </div>
        </div>
        {/* Footer */}
        <div></div>
        {/* Modal */}
        {/* <div className="flex gap-10 rounded-xl max-w-5xl justify-between">
          <div className="flex flex-col items-center ">
            <h1 className="text-3xl">Title</h1>
            <img src="/taj-mahal.jpg" alt="" className="rounded-xl" />
          </div>
          <div>
            <h2 className="text-3xl">Information</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              consectetur officia et dolores sed, itaque quibusdam quasi, velit
              eum porro libero est sapiente voluptatibus cupiditate tenetur!
              Atque corporis a numquam? Nemo, repellat cupiditate cum autem aut
              suscipit atque nesciunt ipsa minus a exercitationem, consequatur
              culpa totam quam quod sit praesentium in tenetur nihil optio harum
              omnis veritatis! Ducimus, omnis blanditiis? Assumenda tenetur,
              officia facilis sapiente iusto suscipit? Voluptatem, placeat
              adipisci suscipit eum facilis vitae quae quam! Accusamus eaque
              saepe dicta ex, aliquam quam magnam expedita neque dolor
              repellendus doloribus dolorum?
            </p>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default App;
