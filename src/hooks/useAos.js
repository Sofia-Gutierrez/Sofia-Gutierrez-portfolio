import { useEffect } from "react";
import AOS from 'aos';

export default () => {

    useEffect(() => {
        AOS.init({
            duration : 2000
        });
    }, [])

}