import ShortAC from "../components/ShortAC";

function Calculation() {
  return (
    <>
      <div className="min-w-screen h-min flex flex-col sm:flex-row-reverse justify-center p-5" id="calculator_view">
        
          <ShortAC />
     
        <img src="img2.svg" alt="" className="w-full h-min md:w-1/2 mt-12" />
      </div>
    </>
  );
}

export default Calculation;


