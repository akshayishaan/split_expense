export function SplitSummary() {
  return (
    <div className="splitsec flex items-center border-b p-5 border-gray-200 gap-2 bg-app-secondary">
      <div className="bilcontain flex items-center justify-center  w-fit">
        <img className="billsvg h-20 " src="bill.svg" />
        <div className="w-1/2 flex flex-col flex-grow ml-1">
          <h2 className="font-bold text-2xl ">Split summary</h2>

          <h3 className="des text-lg">You need to pay</h3>
        </div>
      </div>

      <div className="amountsec w-auto ml-auto p-4 ">
        <h2 className="slpitAmount font-bold text-2xl text-primary-green">
          ₹{1000}
        </h2>
      </div>
    </div>
  );
}
