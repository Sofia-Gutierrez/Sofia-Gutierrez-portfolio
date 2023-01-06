import { useEffect } from "react";
import AOS from 'aos';

const useAos = () => {
    useEffect(() => {
        AOS.init({
          duration : 2000
        });
        }, []);
}

export default useAos;