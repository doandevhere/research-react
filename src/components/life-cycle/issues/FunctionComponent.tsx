import { useEffect, useState } from "react";

function ChildFunctionComponent() {
    useEffect(() => {
      console.log("Child useEffect empty deps");
      return () => console.log("Child useEffect empty deps (unmount)");
    }, []);
  
    console.log("Child render");

    return <div>Child</div>;
  }
  
  function ParentFunctionComponent() {
    const [showChild, setShowChild] = useState(true);
  
    useEffect(() => {
      console.log("Parent useEffect empty deps"); 
      return () => console.log("Parent useEffect empty deps (unmount)");
    }, []);
  
    console.log("Parent render");

    return (
      <div>
        <button onClick={() => setShowChild(!showChild)}>Toggle Child</button>
        {showChild && <ChildFunctionComponent />}
      </div>
    );
  }

export default ParentFunctionComponent;
