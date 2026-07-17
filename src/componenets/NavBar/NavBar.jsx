import { BrowserRouter, NavLink } from "react-router-dom";
import { useState } from "react";
import './NavBar.css'

function NavBar() {
    // Define an array of all nav links and 
    // render them using .map()
    const navLinks = [
        {
            id: 1,
            label: "Home",
            path: "/",
            hasDropdown: false
        },
        {
            id: 2,
            label: "The Legacy",
            path: "/the-legacy",
            hasDropdown: true,
            dropdownMenu: [
                {
                    id: 21,
                    label: "Era1",
                    path: "/the-legacy/era1"
                },
                {
                    id: 22,
                    label: "Era2",
                    path: "/the-legacy/era2"
                }
            ]
        },
        {
            id: 3,
            label: "BTS 2.0",
            path: "/bts-2point0",
            hasDropdown: true,
            dropdownMenu: [
                {
                    id: 31,
                    label: "Arirang",
                    path: "/bts-2point0/arirang"
                }
            ]
        },
        {
            id: 4,
            label: "Solo Works",
            path: "/solo-works",
            hasDropdown: true,
            dropdownMenu: [
                {
                    id: 41,
                    label: "RM",
                    path: "/solo-works/rm"
                },
                {
                    id: 42,
                    label: "Jin",
                    path: "/solo-works/jin"
                },
                {
                    id: 43,
                    label: "SUGA",
                    path: "/solo-works/suga"
                },
                {
                    id: 44,
                    label: "J-Hope",
                    path: "/solo-works/j-hope"
                },
                {
                    id: 45,
                    label: "Jimin",
                    path: "/solo-works/jimin"
                },
                {
                    id: 46,
                    label: "V",
                    path: "/solo-works/v"
                },
                {
                    id: 47,
                    label: "Jung Kook",
                    path: "/solo-works/jungkook"
                }
            ]
        },
        {
            id: 5,
            label: "Global Impact",
            path: "/global-impact",
            hasDropdown: false
        }
    ];

    // handles the hover event 
    const [hoveredLink, setIsHovered] = useState(null);

    return (
        <>
            <nav className="navbar">
                <div className="navMainLinksDiv">
                    {/* Outer loop looping through the main navigation links */}
                    {
                        navLinks.map(link =>
                            <div className="navMainLinksSubDiv" key={link.id}
                                onMouseEnter={() => setIsHovered(link.path)}
                                onMouseLeave={() => setIsHovered(null)}
                            >
                                <NavLink className="navMainLinks" to={link.path} >
                                    {link.label}
                                </NavLink>

                                {
                                    (hoveredLink === link.path && link.hasDropdown) && (
                                        <div className="navDropdownLinksDiv">
                                            <ul>
                                                {
                                                    link.dropdownMenu.map(dropdownLink =>
                                                        <li className="liDiv" key={dropdownLink.id}>
                                                            <NavLink className="navDropdownLinks" to={dropdownLink.path}>
                                                                {dropdownLink.label}
                                                            </NavLink>
                                                        </li>
                                                    )
                                                }
                                            </ul>
                                        </div>
                                    )
                                }
                            </div>
                        )
                    }
                </div>
            </nav>
        </>
    );
}

export default NavBar;