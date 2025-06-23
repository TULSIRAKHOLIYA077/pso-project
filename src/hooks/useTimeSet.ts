import { useEffect, useState } from "react";

const useTimeSet = ()=>{
    const [currentTime, setCurrentTime] = useState(new Date());
  
    useEffect(()=>{
      const interval = setInterval(()=>{
        setCurrentTime(new Date());
      },1000);
  
      return ()=> clearInterval(interval);
    },[])
  
    const formattedDate = currentTime.toLocaleString("en-US",{
      weekday: "short",
      month: "short",
      day: "2-digit",
      year: "numeric"
    })
  
    const formattedTime = currentTime.toLocaleTimeString("en-US",{
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true
    })

    return {
      formattedDate,formattedTime
    };
  
}

export default useTimeSet;