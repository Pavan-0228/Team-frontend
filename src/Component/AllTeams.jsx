import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

function AllTeams() {
    const [teams, setTeams] = useState(null);

    useEffect(() => {
        const getTeams = async () => {
            try {
                const response = await axios.get("https://team-backend-q0la.onrender.com/api/teams");
                setTeams(response.data.teams);
            } catch (error) {
                alert("Error fetching teams.");
            }
        };
        getTeams();
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6">All Teams</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {teams && teams
                .slice()
                .reverse()
                .map((team) => (
                    <Card key={team._id} team={team} />
                ))}
            </div>
        </div>
    );
}

export default AllTeams;
