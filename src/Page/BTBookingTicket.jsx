import React from "react";
import ThongTinDatGhe from "../Component/ThongTinDatGhe";
import HangGhe from "../Component/HangGhe";
import "./BaiTapBookingTicket.css";
import { useSelector } from "react-redux";

const BTBookingTicket = () => {
  const danhSachGheData = useSelector((state) => state.BaiTapDatVeReducer.danhSachGhe);
  return (
    <div>
      <div className="fixed inset-0 bg-[url('./public/bgmovie.jpg')] bg-no-repeat bg-cover text-white">
        <div className="bg-black bg-opacity-80 fixed inset-0">
          <div className="max-w-screen-2xl mx-auto mt-10">
            <div className="grid grid-cols-12">
              <div className="col-span-8 text-center">
                <h1 className="uppercase text-2xl font-bold text-yellow-400">Đặt vé xem phim cyberlearn.vn</h1>
                <div className="mt-5 text-sm">Màn hình</div>
                <div className="mt-1 flex justify-center">
                  <div className="screen"></div>
                </div>
                <div className="mt-5">
                  {danhSachGheData.map((hangGhe, index) => (
                    <div key={index} className="px-14">
                      <HangGhe hangGhe={hangGhe} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-span-4">
                <div className="uppercase text-2xl font-bold ">Danh sách ghế bạn chọn</div>
                <ThongTinDatGhe />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BTBookingTicket;
