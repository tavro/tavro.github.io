import React from "react";
let count = 0;

function Dots() {
  let [time, setTime] = React.useState();

  function updateTime(){
    if(time === "..."){ setTime("."); }
    else if(time === ".."){ setTime("..."); }
    else if(time === "."){ setTime(".."); }
    else { setTime("."); }
  }

    React.useEffect(() => {
      const interval = setInterval(() => {
        updateTime();
      }, 500);

      return () => {
        clearInterval(interval);
      };
    }, [time]);

  return (
    <>
        <span>{time}</span>
    </>
  );
}

export default Dots;