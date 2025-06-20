import style from './work.module.css'
export const Demo = ({src, alt}) => {
    return (
        <img className={style.demo} src={src} alt={alt}></img>
    )
}