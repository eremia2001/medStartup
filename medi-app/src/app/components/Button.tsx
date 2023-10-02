import {ButtonProps} from '../types'
import { motion } from "framer-motion";

export default function Button({bgColor,title,className, handleBtnClick} : ButtonProps){
    return (
      <motion.button 
      onClick={handleBtnClick}
      className={`bg-secondary text-lg text-white rounded-lg px-3 py-2 ${className} w-[20vw] lg:[15vw] xl:w-[12vw]`}
      whileHover={{scale:1.1}}
      >
        {title}
      </motion.button>

    )
  }