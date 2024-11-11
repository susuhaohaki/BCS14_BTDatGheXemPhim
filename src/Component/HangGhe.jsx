import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { datGheAction } from "../redux/action/DatVeAction";

const HangGhe = ({ hangGhe }) => {
  const dispatch = useDispatch();
  const danhSachGheDangDat = useSelector((state) => state.BaiTapDatVeReducer.danhSachGheDangDat);
  const danhSachGheDaDat = useSelector((state) => state.BaiTapDatVeReducer.danhSachGheDaDat);
  const renderSoGhe = () => {
    if (hangGhe.hang !== "") {
      return hangGhe.danhSachGhe.map((ghe, index) => {
        let cssGheDaDat = "";
        let disabled = false;

        if (ghe.daDat) {
          cssGheDaDat = "bg-yellow-500 cursor-not-allowed";
          disabled = true;
        }
        danhSachGheDaDat.forEach((gheDaDat) => {
          if (ghe.soGhe === gheDaDat.soGhe) {
            cssGheDaDat = "!bg-yellow-500 cursor-not-allowed";
            disabled = true;
          }
        });
        const indexGheDangDat = danhSachGheDangDat.findIndex((gheDangDat) => gheDangDat.soGhe === ghe.soGhe);
        let cssGheDangDat = "";
        if (indexGheDangDat !== -1) {
          cssGheDaDat = "!bg-green-500 !text-white !border-none";
        }

        return (
          <button
            key={index}
            className={`${cssGheDangDat} ${cssGheDaDat} w-[45px] h-[35px] border border-yellow-500 bg-white text-lg text-black font-medium rounded-lg transition-all duration-300 hover:bg-yellow-200`}
            disabled={disabled}
            onClick={() => dispatch(datGheAction(ghe))}
          >
            {ghe.soGhe}
          </button>
        );
      });
    } else {
      return hangGhe.danhSachGhe.map((ghe, index) => (
        <button key={index} className="w-[45px] text-2xl font-bold cursor-default">
          {ghe.soGhe}
        </button>
      ));
    }
  };

  return (
    <div className="flex items-center justify-center gap-4 mt-2">
      <span className="text-2xl font-bold w-[45px] mt-2">{hangGhe.hang}</span>
      <div className="flex justify-around gap-4">{renderSoGhe()}</div>
    </div>
  );
};

export default HangGhe;
