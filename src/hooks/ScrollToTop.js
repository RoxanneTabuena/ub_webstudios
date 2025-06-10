import { useEffect } from "react";
import { useLocation } from "react-router-dom";
export const ScrollToTop = ({ref}) => {
const {pathname} = useLocation()
    useEffect(()=>{
        ref.current.scrollTo({ top: 0, behavior: 'instant' });
    }, [pathname, ref])
}