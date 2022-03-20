import React from "react";

const NotFound = ({ title }) => {
  return (
    <div className="text-center align-middle mx-auto p-5 my-5">
      <h2 className="text-lg md:text-xl lg:text-2xl xl:text-2xl text-center mt-2 font-medium font-serif text-gray-600">
        Sorry, we can not find this {title}
        <span role="img" aria-labelledby="img"></span>
      </h2>
    </div>
  );
};

export default NotFound;
