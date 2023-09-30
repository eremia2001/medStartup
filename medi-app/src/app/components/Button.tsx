import {ButtonProps} from '../types'

export default function Button({bgColor,title,className} : ButtonProps){
    return (
      <button className={`bg-${bgColor} text-lg text-white rounded-lg px-3 py-2 ${className}`}>
        {title}
      </button>

    )
  }