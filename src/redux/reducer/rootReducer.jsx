import { combineReducers } from "redux";
import BaiTapDatVeReducer from "./DatVeReducer";

//store tồng ứng dụng
export const rootReducer = combineReducers({
  //nơi sẽ chứa các reducer cho nghiệp vụ (store con)
  BaiTapDatVeReducer: BaiTapDatVeReducer,
});
