import { useState, useEffect } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-gray-900/30 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl p-6 max-w-5xl w-full grid grid-cols-2 gap-28 items-start z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

const GridImageItem = ({ imgsrc, title }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!modalOpen);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup on unmount or when modalOpen changes
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  return (
    <>
      <div
        className="flex gap-12 justify-center hover:scale-115 transition-all rounded-xl overflow-hidden cursor-pointer shadow-2xl"
        onClick={toggleModal}
      >
        <img src={imgsrc} alt="placeholder" className="object-cover" />
      </div>

      <Modal isOpen={modalOpen} onClose={toggleModal}>
        <div className="flex flex-col gap-2 min-w-lg">
          <h1 className="text-3xl font-semibold">{title}</h1>
          <div className="max-h-[50vh] overflow-auto">
            <img src={imgsrc} alt="Taj Mahal" className="rounded-xl" />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-semibold">Information</h2>
          <div className="max-h-[50vh] overflow-auto">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              consectetur officia et dolores sed, itaque quibusdam quasi, velit
              eum porro libero est sapiente voluptatibus cupiditate tenetur!
              Atque corporis a numquam? Nemo, repellat cupiditate cum autem aut
              suscipit atque nesciunt ipsa minus a exercitationem, consequatur
              culpa totam quam quod sit praesentium in tenetur nihil optio harum
              omnis veritatis!
              {/* Truncated for brevity */}
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default GridImageItem;
