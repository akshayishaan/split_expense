export function AmountBar() {
  return (
    <div className="flex rounded-lg bg-[#871A1E] p-4">
      <div className="flex flex-col ml-2">
        <h3 className="text-[#dbdbdb] text-xs font-bold">
          Split expense summary
        </h3>
        <h2 className="text-[#f59898] text-lg font-bold">
          Total you need to pay
        </h2>
      </div>
      <div className="gap-2 flex items-center text-2xl font-bold text-[#f59898] ml-auto flex">
        ₹{17500}
        <img
          src="/filled-arrow.svg"
          className="h-[1em] transform -rotate-[90deg] origin-center "
        />
      </div>
    </div>
  );
}
