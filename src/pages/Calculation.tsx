import ShortAC from "../components/ShortAC";

function Calculation() {
  return (
    <>
      <div className="min-w-screen min-h-screen flex flex-col sm:flex-row-reverse justify-normal p-5" id="calculator_view">
        <div>
          <ShortAC />
        </div>
        <img src="img2.svg" alt="" className="w-full md:w-1/2" />
      </div>
    </>
  );
}

export default Calculation;


