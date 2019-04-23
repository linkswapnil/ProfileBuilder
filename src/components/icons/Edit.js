import React from "react";
export const Edit = props => {
  return (
    <button className="icon" aria-label="Edit" onClick={props.onEditClick}>
      <svg
        viewBox="0 0 14 16"
        version="1.1"
        width="12"
        height="12"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"
        />
      </svg>
    </button>
  );
};
