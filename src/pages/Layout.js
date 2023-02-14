import React from 'react'
import { Outlet, Link } from "react-router-dom";

export default function layout() {
  return (
    <>
        <nav>
            <ul>
                <li>
                    <Link to="/collection">Collection 1</Link>
                </li>
                <li>
                    <Link to="/exhibits">Past Exhibitions</Link>
                </li>
                <li>
                    <Link to="/archive">Drawing Archive</Link>
                </li>
                <li>
                    <Link to="/text">The Text</Link>
                </li>
                <li>
                    <Link to="/bibliography">Bibliography</Link>
                </li>
                <li>
                    <Link to="/contact">Get in touch</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/">Restart</Link>
                </li>
            </ul>
        </nav>

        <Outlet />
    </>
  )
}
