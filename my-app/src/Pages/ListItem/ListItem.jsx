import React from "react";
import { Link } from "react-router-dom";
export default function ListItem({ array }) {
  return (
    <ul>
      {array.map((item) => (
        <li key={item.id}>
          <Link to={`movies/${item.id}`}>
            {item.title ? item.title : item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
