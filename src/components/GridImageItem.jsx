import { useState } from "react";

const GridImageItem = ({ imgsrc }) => {
  const [modal, setModal] = useState(false);

  function toggleModal() {
    setModal(!modal);
  }
  return (
    <>
      <div
        className="flex gap-12 justify-center hover:outline-2 outline-green-500/80 transition-opacity rounded-xl overflow-hidden"
        onClick={toggleModal}
      >
        <img src={imgsrc} alt="palceholder" />
      </div>
      {modal && (
        <div
          className="absolute top-0 left-0 right-0 bottom-0 bg-gray-900/30 flex items-center justify-center"
          onClick={toggleModal}
        >
          <div className="flex gap-10 rounded-xl max-w-5xl justify-between bg-white p-6 items-center">
            <div className="flex flex-col gap-2 min-w-lg">
              <h1 className="text-3xl">Taj Mahal</h1>
              <div className="max-h[50vh] overflow-auto">
                <img src="/taj-mahal.jpg" alt="" className="rounded-xl" />
              </div>
            </div>
            <div className="flex flex-col gap-2 ">
              <h2 className="text-3xl">Information</h2>
              <div className="max-h-[50vh] overflow-auto">
                <p className="">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas consectetur officia et dolores sed, itaque quibusdam
                  quasi, velit eum porro libero est sapiente voluptatibus
                  cupiditate tenetur! Atque corporis a numquam? Nemo, repellat
                  cupiditate cum autem aut suscipit atque nesciunt ipsa minus a
                  exercitationem, consequatur culpa totam quam quod sit
                  praesentium in tenetur nihil optio harum omnis veritatis!
                  Ducimus, omnis blanditiis? Assumenda tenetur, officia facilis
                  sapiente iusto suscipit? Voluptatem, placeat adipisci suscipit
                  eum facilis vitae quae quam! Accusamus eaque saepe dicta ex,
                  aliquam quam magnam expedita neque dolor repellendus doloribus
                  dolorum? Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Maxime, officia, eos saepe voluptatibus non quod ea a ex
                  incidunt perspiciatis aperiam tempore reiciendis quidem nulla
                  omnis quos hic necessitatibus vero? Commodi suscipit eos a
                  quidem ex vitae repellat saepe temporibus reiciendis itaque
                  culpa odio accusantium adipisci dolorum veniam, tempora optio
                  ullam! Sed, enim. Expedita aperiam placeat quasi dolore
                  accusantium saepe? Quas ullam asperiores sequi consectetur
                  mollitia? Temporibus at earum ipsa, provident tempora veniam
                  quis ducimus labore recusandae dicta animi velit optio
                  perspiciatis voluptatum dolor? Dolorum ab suscipit totam
                  corrupti dolorem? Atque voluptates optio odio quam aliquid
                  laborum, sit possimus debitis esse praesentium? Reiciendis,
                  praesentium incidunt! Enim a itaque nihil, minima ut nisi,
                  sapiente ea praesentium blanditiis maxime quod dignissimos
                  vitae! Molestias nobis ullam ipsum doloribus corporis numquam
                  explicabo quos voluptas quas est, eveniet id magni laboriosam
                  debitis repellat, blanditiis aliquid rerum voluptate officia
                  aliquam quod enim voluptates ipsa! Esse, quas. Corporis, rerum
                  veniam. Ipsam, atque. Velit quas, reprehenderit nisi debitis,
                  possimus dolorum repudiandae maxime quo beatae eveniet
                  perferendis quidem ab pariatur aspernatur. Voluptas omnis,
                  assumenda ex eligendi similique placeat tenetur. Officiis
                  natus voluptas consectetur, nesciunt quibusdam a eligendi
                  repellat, voluptate impedit repellendus inventore. Corrupti
                  possimus non excepturi aspernatur distinctio quod quaerat
                  placeat eum consequuntur aut, aliquid at libero, mollitia
                  velit? Quis nam, maiores ea libero aperiam corrupti blanditiis
                  nulla necessitatibus minima voluptatem ad nisi a deserunt
                  velit error distinctio atque quibusdam recusandae maxime
                  quisquam itaque fugit sed molestias? Inventore, fuga? Officia
                  aspernatur rem dignissimos rerum necessitatibus possimus quis
                  numquam. Natus, autem. Aliquid obcaecati ad minus autem itaque
                  hic alias asperiores modi id deleniti ducimus, amet doloribus,
                  est vero. Culpa, explicabo. Tenetur illo aspernatur
                  temporibus, aperiam cum magni quae sunt adipisci blanditiis
                  fugit ut tempore deleniti veritatis quibusdam consequatur
                  accusamus nobis id maxime et dolor nemo itaque? Eligendi sunt
                  sint deserunt!
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GridImageItem;
