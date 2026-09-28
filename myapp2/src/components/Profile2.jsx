import { useState } from "react";

function Profile() {


const [profile, setProfile] = useState({
    name: "",
    email: "",
    program: ""
});

const handleNameChange = (event) => {
    setProfile({
        ...profile,
       [ name]: event.target.value
    });
};

const handleEmailChange = (event) => {
    setProfile({
        ...profile,
        email: event.target.value
    });
};

const handleProgramChange = (event) => {
    setProfile({
        ...profile,
        program: event.target.value
    });
};

return (
    <div>

        <h2>Student Profile</h2>

        <input
            type="text"
            placeholder="Name"
            value={profile.name}
            onChange={handleNameChange}
        />

        <input
            type="email"
            placeholder="Email"
            value={profile.email}
            onChange={handleEmailChange}
        />

        <input
            type="text"
            placeholder="Program"
            value={profile.program}
            onChange={handleProgramChange}
        />

        <h3>Profile Information</h3>

        <p>Name: {profile.name}</p>
        <p>Email: {profile.email}</p>
        <p>Program: {profile.program}</p>

    </div>
);


}

export default Profile;