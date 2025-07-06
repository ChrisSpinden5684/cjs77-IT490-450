import React, { useEffect, useState } from "react";

function ProfilePanel(){

    return (
        <div className="main-container">
            <div class="form-container">
            <h2>Profile</h2>
            <form id="profile-form">
                <input type="email" placeholder="Email" required />
                <input type="text" name="username" placeholder="Username" required />
                <input type="password" placeholder="Password" required />
                <button class="opacity">SUBMIT</button>
            </form>
            </div>
        </div>
    );
}
export default ProfilePanel;