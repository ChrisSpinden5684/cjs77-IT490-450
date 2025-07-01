import React from 'react'
import '../CSS/UserProcesses.css';

function Registration(){
    return (
        <div className="main-container">
            <div class="form-container">
            <h2>Registration</h2>
            <form>
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
                <input type="text" placeholder="Name" />
                <input type="number" placeholder="Grade" />
                <div className="reg-checkbox">
                    <span>Select Team Role: </span>
                    <label class="checkbox-label" for="student">Student</label>
                    <input type="checkbox" id="student" name="student" value="Student"/>
                    <label class="checkbox-label" for="mentor">Mentor</label>
                    <input type="checkbox" id="mentor" name="mentor" value="Mentor"/>
                </div>
                <button class="opacity">SUBMIT</button>
            </form>
        </div>
        </div>
    );
}
export default Registration;