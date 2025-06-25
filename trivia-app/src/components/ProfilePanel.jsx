import React from 'react'

function ProfilePanel(){
    return (
        <div className="main-container">
            <div class="form-container">
            <h1>Profile</h1>
            <form id="profile-form">
                <input type="email" placeholder="Email" required />
                <input type="text" name="username" placeholder="Username" required />
                <input type="password" placeholder="Password" required />
            </form>
        </div>
        </div>
    );
}
export default ProfilePanel;