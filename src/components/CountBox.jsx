import React from "react";

const CountBox = ({ title, value }) => {
  return (
    <div className="flex flex-col items-center w-[150px] shadow-slate-300 shadow-[0px_0px_5px_2px] rounded-[8px]">
      <h4
        className={`font-epilogue font-bold ${
          value > 0
            ? "text-[40px]"
            : "text-[24px] "
        } text-black p-3 bg-[#fff] rounded-[8px] w-full text-center truncate`}
      >
        {value > 0 ? value : "Kết thúc"}
      </h4>
      {value > 0 && (
        <p
          className={`font-epilogue font-normal text-[16px] text-[#808191] rounded-t-[8px]  bg-[#fff] ]  px-3 py-2 w-full rounded-b-[10px] text-center`}
        >
          {title}
        </p>
      )}
    </div>
  );
};

export default CountBox;
