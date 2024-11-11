import { DAT_GHE, HUY_GHE, THANH_TOAN_GHE } from "../types/DatVeType";
import danhSachGheData from "../../data/danhSachGhe.json";
import HangGhe from "./../../Component/HangGhe";

// Load the state from localStorage if it exists, otherwise use the default state
const loadStateFromLocalStorage = () => {
  const savedState = localStorage.getItem("bookingState");
  if (savedState) {
    return JSON.parse(savedState); // Parse the saved state if it exists
  }
  return {
    danhSachGhe: danhSachGheData,
    danhSachGheDangDat: [],
    danhSachGheDaDat: [],
  };
};

const stateDefault = loadStateFromLocalStorage();

const saveStateToLocalStorage = (state) => {
  localStorage.setItem("bookingState", JSON.stringify(state)); // Save the updated state to localStorage
};

const BaiTapDatVeReducer = (state = stateDefault, action) => {
  let updatedState;

  switch (action.type) {
    case DAT_GHE:
      let danhSachGheDangDat = [...state.danhSachGheDangDat];
      let index = danhSachGheDangDat.findIndex((gheDangDat) => gheDangDat.soGhe === action.payload.soGhe);
      if (index !== -1) {
        // Remove the seat if it's already in the list
        danhSachGheDangDat.splice(index, 1);
      } else {
        // Add the seat to the list if it's not in the list
        danhSachGheDangDat.push(action.payload);
      }
      updatedState = { ...state, danhSachGheDangDat };
      saveStateToLocalStorage(updatedState); // Save the updated state to localStorage
      return updatedState;

    case HUY_GHE:
      let danhSachGheDangDat2 = [...state.danhSachGheDangDat];
      let index2 = danhSachGheDangDat2.findIndex((gheDangDat) => gheDangDat.soGhe === action.payload);
      if (index2 !== -1) {
        danhSachGheDangDat2.splice(index2, 1);
        updatedState = { ...state, danhSachGheDangDat: danhSachGheDangDat2 };
        saveStateToLocalStorage(updatedState); // Save the updated state to localStorage
        return updatedState;
      }
      return state;

    case THANH_TOAN_GHE:
      let danhSachGheDangDatMoi = state.danhSachGheDangDat.map((gheDangDat) => {
        return { ...gheDangDat, daDat: true }; // Mark the seat as booked
      });
      let danhSachGheDaDatMoi = [...state.danhSachGheDaDat, ...danhSachGheDangDatMoi];
      updatedState = { ...state, danhSachGheDangDat: [], danhSachGheDaDat: danhSachGheDaDatMoi };
      saveStateToLocalStorage(updatedState); // Save the updated state to localStorage
      return updatedState;

    default:
      return state;
  }
};

export default BaiTapDatVeReducer;
