import React from 'react';
import {useNavigate} from "react-router-dom";

const QuickLink = ({toLink, onClickFunc}) => {

    const nav = useNavigate();
  return (
      <>
        <div className="lg:text-sm my-2 lg:my-0 text-xs w-fit">
            <button
                type="button"
                onClick={onClickFunc}
                className="text-gray-500/50 border-b cursor-pointer border-gray-500/50 hover:text-gray-500
                   hover:border-gray-500 transition-colors duration-200 ease-in-out"
            > / {toLink}</button>
        </div>
      </>
  );
};

export default QuickLink;
