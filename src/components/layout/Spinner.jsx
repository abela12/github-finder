import sp from "./assets/spinner.gif";
function Spinner() {
  return (
    <div className="w-100 mt-20">
      <img src={sp} width={180} className="text-center" alt="Loading" />
    </div>
  );
}

export default Spinner;
