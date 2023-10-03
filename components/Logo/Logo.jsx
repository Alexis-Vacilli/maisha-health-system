import Image from "next/image";
import logoImg from '../../public/images/site-icon.svg'

export const Logo = ({text, textsize}) => {
    return (
      <div className='flex  items-center gap-2 justify-start'> 
         <Image src={logoImg} alt="Logo" className="h-8 w-8"/><p className={`font-semibold ${textsize} text-transparent bg-clip-text bg-gradient-to-r from-whiteTheme-primaryColor to-slate-600`}>{text}</p>
      </div>
    )
  }
  