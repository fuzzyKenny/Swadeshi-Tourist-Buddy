const GridImageItem = ({ imgsrc }) => {
  return (
    <>
      <div className="flex gap-12 justify-center hover:outline-2 outline-green-500/80 transition-opacity rounded-xl overflow-hidden">
        <img src={imgsrc} alt="palceholder" />
      </div>
    </>
  );
};

export default GridImageItem;
