
import React from "react";
import './Header.css';
import { Link } from "react-router-dom";

export default function () {
  return (
    <div>
        <h1>Header Part</h1>
        <nav>
            <ul>
                <li> <link to={'/'}>         Home  </link> </li>
                <li> <link to={'/about-us'}> About </link> </li>
                <li> <link to={'/course'}> Course </link> </li>
            </ul>
        </nav>
    </div>
  )
}
