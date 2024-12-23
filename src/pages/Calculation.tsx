// import Calendar from "../components/Calendar";
import ShortAC from "../components/ShortAC";

function Calculation() {
  return (
    <>
      <div className="w-screen h-screen flex flex-col md:flex-row lg:flex-row-reverse  justify-normal p-5">
        <div>
          <ShortAC />
        </div>
        <img src="img2.svg" alt="" className="w-full md:w-1/2" />
      </div>
    </>
  );
}

export default Calculation;
