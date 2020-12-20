import { toast } from "react-toastify";
import moment from "moment";
export const appHelpers = {
  getUrl : () =>{
    let url = window.location.href;
    console.log("url", url);
    let u = ""
    if( url.includes("dev-practice")){
      u = process.env.REACT_APP_API_DEV_BASE_URI
    }
    else if( url.includes("qa-practice")){
      u = process.env.REACT_APP_API_QA_BASE_URI
    }
    else {
      u = process.env.REACT_APP_API_DEV_BASE_URI
    }
    console.log("uuu", u)
    return u
  },

  formatEnum(data) {
    return data.map((item) => ({
      value: item.Id,
      label: item.Name,
    }));
  },

  formatCountry(data) {
    return data.map((item) => ({
      value: item.code2,
      label: item.name,
      states: item.states,
    }));
  },

  formatState(data) {
    return data.map((item) => ({
      value: item.code,
      label: item.name,
    }));
  },

};
