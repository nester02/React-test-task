import './EditUser.css';
import inputArrow from "../../../resources/img/users-select-arrow.svg";
import departments from "../../../data/departments.json";
import countries from "../../../data/countries.json";
import users from "../../../data/users.json";
import clearBucket from "../../../resources/img/users-clear-bucket.svg";
import React from "react";

const EditUser = () => {

    return (
        <section className="edit_user">
            <div className="__container --edit_user__container">
                <h1 className="section__heading --edit_user__heading">Edit user</h1>

            </div>
        </section>
    )
}

export default EditUser;