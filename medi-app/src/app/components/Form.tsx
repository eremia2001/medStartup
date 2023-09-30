import { PiAirplaneLandingFill } from 'react-icons/pi';
import Button from '../components/Button'
import InputField from './InputField';
import { FormProps } from '../types';





export default function Form({title,inputFields} : FormProps )  {
    return (
        <form className='py-5 px-20 bg-white shadow-2xl rounded-md flex flex-col items-center max-w-[700px] mx-auto'>
        <h1 className='text-2xl lg:text-3xl'>{title}</h1>
        {inputFields.map(field => (
        <InputField key={field.placeholder} {...field} />
      ))}
        

        <Button title="Weiter" bgColor="secondary" className="mt-16 px-20"/> 
        </form>

    )
  }

