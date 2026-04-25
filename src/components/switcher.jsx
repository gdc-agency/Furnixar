/* eslint-disable @typescript-eslint/no-explicit-any */

import moon from '../assets/img/icon/simple-sun.svg'
import sun from '../assets/img/icon/simple-light.svg'

export default function Switcher() {

  function changeMode(mode, event) {
    switch (mode) {
        case 'mode':
            if (document.documentElement.className.includes("dark")) {
                document.documentElement.className = 'light'
            } else {
                document.documentElement.className = 'dark'
            }
            break;
        case 'layout':
            if (event.target?.innerText === "LTR") {
                document.documentElement.dir = "ltr"
            }
            else {
                document.documentElement.dir = "rtl"
            }
            break;
        default:
            break;
    }
}

  return (
    <label className="switcher cursor-pointer flex items-center">
        <input className="hidden" type="checkbox"  onClick={(event) => changeMode('mode', event)} />
        <img className={`moon w-[22px] sm:w-7  transition-opacity duration-300 block dark:hidden`}  src={moon} alt="Moon Icon"/>
        <img className={`sun w-[22px] sm:w-7 transition-opacity duration-300 hidden dark:block`} src={sun} alt="Sun Icon"/>
    </label>
  );
}
