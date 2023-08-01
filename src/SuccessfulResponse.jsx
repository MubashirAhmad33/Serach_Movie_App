import React, { useEffect } from "react";

function SuccessfulResponse() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/checkout");
        const data = await response.json();
        console.log(data, "response data");
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return <div></div>;
}

export default SuccessfulResponse;
