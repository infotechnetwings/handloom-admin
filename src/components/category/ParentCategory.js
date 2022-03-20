import React from "react";

import useAsync from "../../hooks/useAsync";
import CategoryServices from "../../services/CategoryServices";

const ParentCategory = () => {
  var { data } = useAsync(CategoryServices.getAllCategory); //   console.log(value);
  if (!Array.isArray(data)) {
    data = data.categories;
  }
  return (
    <>
      {data.map((parent) => (
        <option key={parent._id} value={parent.parent}>
          {parent.parent}
        </option>
      ))}
    </>
  );
};

export default ParentCategory;
