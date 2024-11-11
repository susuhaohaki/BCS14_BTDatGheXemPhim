import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { huyGheAction, thanhToanGheAction } from "../redux/action/DatVeAction";

const ThongTinDatGhe = () => {
  const dispatch = useDispatch();
  const danhSachGheDangDat = useSelector((state) => state.BaiTapDatVeReducer.danhSachGheDangDat);

  // Xử lý thanh toán
  const handleThanhToan = () => {
    alert("Thanh toán thành Công");
    // Gọi action thanh toán ghế
    dispatch(thanhToanGheAction());
  };

  // Xử lý hủy ghế
  const handleHuyGhe = (soGhe) => {
    // Gọi action hủy ghế
    dispatch(huyGheAction(soGhe));
  };

  return (
    <>
      <div className="mt-5 space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-yellow-400 rounded-lg shadow-md"></div>
          <div className="text-lg font-semibold text-white">Ghế đã đặt</div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-green-400 rounded-lg shadow-md"></div>
          <div className="text-lg font-semibold text-white">Ghế đang đặt</div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-200 border-2 border-yellow-400 rounded-lg shadow-md"></div>
          <div className="text-lg font-semibold text-white">Ghế chưa đặt</div>
        </div>
      </div>

      {/* Scrollable Table Container */}
      <div className="border border-gray-300 rounded-lg text-center mt-5 max-h-[400px] overflow-y-auto shadow-md">
        <table className="w-full table-auto text-center text-gray-600 border-collapse">
          <thead>
            <tr className="bg-gray-100 text-xl font-bold text-gray-700">
              <th className="border-b border-gray-300 px-6 py-3">Số ghế</th>
              <th className="border-b border-gray-300 px-6 py-3">Giá</th>
              <th className="border-b border-gray-300 px-6 py-3">Action</th>
            </tr>
          </thead>
          {danhSachGheDangDat.length > 0 ? (
            <tbody className="bg-white">
              {danhSachGheDangDat.map((gheDangDat, index) => (
                <tr key={index} className="text-lg">
                  <td className="border-b border-gray-200 py-2 font-medium text-yellow-600">{gheDangDat.soGhe}</td>
                  <td className="border-b border-gray-200 py-2 font-medium text-yellow-600">{gheDangDat.gia.toLocaleString("it-IT", { style: "currency", currency: "VND" })}</td>
                  <td className="border-b border-gray-200 py-2">
                    <button
                      onClick={() => handleHuyGhe(gheDangDat.soGhe)} // Gọi handleHuyGhe khi nhấn Hủy
                      className="bg-gray-100 px-4 py-2 text-gray-700 rounded-md hover:bg-gray-300 transition duration-300 shadow-sm"
                    >
                      Hủy
                    </button>
                  </td>
                </tr>
              ))}
              <tr className="bg-gray-50 text-lg font-semibold text-gray-700">
                <td className="py-3">Tổng tiền</td>
                <td className="py-3">{danhSachGheDangDat.reduce((total, gheDangDat) => total + gheDangDat.gia, 0).toLocaleString("it-IT", { style: "currency", currency: "VND" })}</td>
                <td className="py-3">
                  <button onClick={handleThanhToan} className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                    Thanh toán
                  </button>
                </td>
              </tr>
            </tbody>
          ) : (
            <tbody>
              <tr>
                <td colSpan="3" className="py-4 text-lg font-medium text-gray-500">
                  Hiện chưa có ghế nào được đặt.
                </td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    </>
  );
};

export default ThongTinDatGhe;
