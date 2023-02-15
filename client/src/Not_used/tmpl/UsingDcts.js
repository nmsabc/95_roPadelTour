import React from 'react'


const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ObjectMapper() {
    const objectMap = (obj, fn) =>
      Object.fromEntries(
        Object.entries(obj).map(([k, v], i) => [k, fn(v, k, i)])
      );
    const settings_actions_lst = {
      Profile: "/signin",
      Account: "/signin",
      Dashboard: "/signin",
      Logout: "/signin",
    };
    const set_act = objectMap(settings_actions_lst, (v) => v * 2);
  }
function UsingDcts() {
    const settings_actions_raw = [
        { id: 1, entry: "a_SignIn", link: "/signin" },
        { id: 2, entry: "a_Account", link: "/createUser" },
        { id: 3, entry: "a_Dashboard", link: "/post" },
        { id: 4, entry: "a_Logout", link: "/signout" },
      ];
    
      let dd = Object.fromEntries(
        settings_actions_raw.map((x) => [x.entry, x.link])
      );
    
      let dd_k = Object.keys(dd);
      let dd_v = Object.values(dd);
      let dd_e = Object.entries(dd);
    
      // console.log("dd...", dd_k, dd_v, dd_e);
      // dd_e.forEach((en) => console.log(typeof en[0], "calls", en[1]));
  return (
    <div>
      
    </div>
  )
}

export default UsingDcts
