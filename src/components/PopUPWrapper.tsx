import {ReactNode} from 'react'
import style from '../styles/popupwrapper.module.css'
export default function PopUPWrapper({children}:{children:ReactNode}) {
  return (
    <div className={style.wrapperContainer}>
        <div className={style.wrapperSubContainer}>
            {children}
        </div>
    </div>
  )
}
