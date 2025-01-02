import ShortAC from "../components/ShortAC";

function Calculation() {
  return (
    <>
      <div className="md:flex flex-row-reverse justify-center items-center" id="calculator_view">
          <ShortAC />
        <img src="img2.svg" alt="" className="md:w-2/5 mb-12" />
      </div>
    </>
  );
}

export default Calculation;


