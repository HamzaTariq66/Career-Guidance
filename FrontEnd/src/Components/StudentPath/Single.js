import React from "react";

const Single = ({ id, title, url }) => {
  return (
    <li key={id}>
      <a href={url} target="_blank">
        {title}
      </a>
    </li>
  );
};

export default Single;
