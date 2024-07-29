import React, { useState } from "react";
import axios from "axios";

const CreateTeam = () => {
    const [teamName, setTeamName] = useState("");
    const [teamMembers, setTeamMembers] = useState(["", "", ""]);
    const [teamLeader, setTeamLeader] = useState("");
    const [projectTopic, setProjectTopic] = useState("");
    const [contact, setContact] = useState("");
    const [email, setEmail] = useState("");


    const handleChangeMember = (index, value) => {
        const newMembers = [...teamMembers];
        newMembers[index] = value;
        setTeamMembers(newMembers);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post("https://team-backend-q0la.onrender.com/api/create-team", {
                teamName,
                teamMembers,
                teamLeader,
                projectTopic,
                contact,
                email,
            });
            alert(response.data.message);
        } catch (error) {
            alert(error.response?.data.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center ">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
                <h1 className="text-2xl font-semibold mb-6 text-center">
                    Create a Team for hackathon
                </h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label
                            htmlFor="teamName"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Team Name
                        </label>
                        <input
                            id="teamName"
                            type="text"
                            value={teamName}
                            onChange={(e) => setTeamName(e.target.value)}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="teamLeader"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Team Leader
                        </label>
                        <input
                            id="teamLeader"
                            type="text"
                            value={teamLeader}
                            onChange={(e) => setTeamLeader(e.target.value)}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="teamMember1"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Team Member 1
                        </label>
                        <input
                            id="teamMember1"
                            type="text"
                            value={teamMembers[0]}
                            onChange={(e) =>
                                handleChangeMember(0, e.target.value)
                            }
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="teamMember2"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Team Member 2
                        </label>
                        <input
                            id="teamMember2"
                            type="text"
                            value={teamMembers[1]}
                            onChange={(e) =>
                                handleChangeMember(1, e.target.value)
                            }
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="teamMember3"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Team Member 3
                        </label>
                        <input
                            id="teamMember3"
                            type="text"
                            value={teamMembers[2]}
                            onChange={(e) =>
                                handleChangeMember(2, e.target.value)
                            }
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="projectTopic"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Project Topic
                        </label>
                        <input
                            id="projectTopic"
                            type="text"
                            value={projectTopic}
                            onChange={(e) => setProjectTopic(e.target.value)}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="contact"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Contact
                        </label>
                        <input
                            id="contact"
                            type="text"
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Create Team
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateTeam;
