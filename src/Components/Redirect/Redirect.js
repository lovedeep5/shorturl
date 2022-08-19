import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import getSingleRow from "../../firebase/getSingleRow";

const Redirect = () => {
  const { id } = useParams();
  useEffect(() => {
    const getFullUrl = async (col, value) => {
      const rowData = await getSingleRow(col, value);
      window.location.href = rowData?.url;
    };
    getFullUrl("shortString", id);
  }, [id]);

  return <div>Redirecting....</div>;
};

export default Redirect;
