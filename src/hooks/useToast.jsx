import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";


const useToast = () => {
    const toastRef = useRef();
    const [toastId, setToastId] = useState(toastRef.current);

    return [toastId, setToastId];
};

export default useToast;