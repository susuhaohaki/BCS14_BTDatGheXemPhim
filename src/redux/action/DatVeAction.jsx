import { DAT_GHE, HUY_GHE, THANH_TOAN_GHE } from "../types/DatVeType";

export const datGheAction = (ghe) => {
  return {
    type: DAT_GHE,
    payload: ghe,
  };
};

export const huyGheAction = (soGhe) => {
  return {
    type: HUY_GHE,
    payload: soGhe,
  };
};

export const thanhToanGheAction = () => {
  return {
    type: THANH_TOAN_GHE,
  };
};
