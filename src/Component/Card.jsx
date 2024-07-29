import React from "react";

const Card = ({ team }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-2">{team.teamName}</h3>
            <div className="mb-4">
                <div className="mb-4">
                    <h4 className="text-lg font-semibold">Team Leader:</h4>
                    <p className="text-gray-700">{team.teamLeader}</p>
                </div>
                <h4 className="text-lg font-semibold">Team Members:</h4>
                <ul className="list-disc pl-5 space-y-2">
                    {team.teamMembers.map((member, index) => (
                        <li
                            key={index}
                            className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
                        >
                            {member}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h4 className="text-lg font-semibold">Project Topic:</h4>
                <p className="text-gray-700">{team.projectTopic}</p>
            </div>
        </div>
    );
};

export default Card;
