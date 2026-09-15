// german timer 

export const getGermanyTime = () => {
    return new Intl.DateTimeFormat("de-DE", {
      timeZone: "Europe/Berlin",
      hour: "2-digit",
      minute: "2-digit",
    //   second: "2-digit",
      hour12: true,
    }).format(new Date());
  };


  // indian timer 
  export const getIndiaTime = () => {
    return new Intl.DateTimeFormat("en-IN", {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
    //   second: "2-digit",
      hour12: true,
    }).format(new Date());
  };