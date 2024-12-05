import React, { useState } from "react";
import departments from '../../../data/departments.json';
import users from '../../../data/users.json';
import countries from '../../../data/countries.json';
import "./Users.css"

import clearBucket from "../../../resources/img/users-clear-bucket.svg"
import inputArrow from "../../../resources/img/users-select-arrow.svg"

const Users = () => {

    const handleCheckboxChange = () => {

    }

    return (
        <section className="home">
            <div className="__container --users__container">
                <h1 className="section__heading --users__heading">Users</h1>
                <p className="users__description">Please add at least 3 departmetns to be able to proceed next
                    steps.</p>
                <div className="section__inner">
                    <div className="users__inner--inputs">
                        <div className="users__select --users__select-department">
                            <div className="select__top">
                                <p>Selected ()</p>
                                <img src={inputArrow} alt=""/>
                            </div>
                            <div className="select__bottom">
                                {departments.map((department) =>
                                    <div className="select__bottom-department" key={department.value}>
                                        <input className="select__checkbox" id={department.value}
                                               value={department.value} onChange={handleCheckboxChange}
                                               type="checkbox"/>
                                        <label htmlFor="select__checkbox">{department.name}</label>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="users__select --users__select-country">
                            <div className="select__top">
                                <p>Selected ()</p>
                                <img src={inputArrow} alt=""/>
                            </div>
                            <div className="select__bottom">
                                {countries.map((country) =>
                                    <div className="select__bottom-department" key={country.value}>
                                        <input className="select__checkbox" id={country.value}
                                               value={country.value} onChange={handleCheckboxChange}
                                               type="checkbox"/>
                                        <label htmlFor="select__checkbox">{country.name}</label>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="users__select --users__select-statuses">
                            <div className="select__top">
                                <p>Selected ()</p>
                                <img src={inputArrow} alt=""/>
                            </div>
                            <div className="select__bottom">
                                {users.map((user) =>
                                    <div className="select__bottom-department" key={user.name}>
                                        <input
                                            className="select__checkbox"
                                            id={user.department.value}
                                            value={user.department.value}
                                            onChange={handleCheckboxChange}
                                            type="checkbox"
                                        />
                                        <label htmlFor={user.department.value}>
                                            {user.department.name} {/* Виводимо назву департаменту */}
                                        </label>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="users__inner--buttons">
                        <button className="users__clear-button"><img src={clearBucket} alt="reset filters"/></button>
                        <button className="users__add-user-button">Add User</button>
                    </div>
                </div>
                <div className="users__list">
                    <div className="users__list-description">
                        <p>Full Name</p>
                        <p>Department</p>
                        <p>Country</p>
                        <p>Status</p>
                    </div>
                    <div className="users__list-user">
                        {users.map((user) => (
                            <div key={user.name} className="user-item">
                                <p>{user.name}</p>
                                <p>{user.department.name}</p>
                                <p>{user.country.name}</p>
                                <p>{user.status.name}</p>
                                <img src={clearBucket} alt="delete user"/>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Users;
