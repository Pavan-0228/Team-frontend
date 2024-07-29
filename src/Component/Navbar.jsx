import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-blue-500 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white text-lg font-semibold">
                    Create Team
                </Link>
                <Link to="/teams" className="text-white text-lg font-semibold">
                    All Teams
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
