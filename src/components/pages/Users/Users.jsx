import React, { useState } from "react";
import departments from '../../data/departments.json';

const Users = () => {


    return (
        <div className="__container --users__container">
            <h1 className="users__heading">Users</h1>
            <p className="users__description">Please add at least 3 departmetns to be able to proceed next steps.</p>
            <div className="users__inner">
                <div className="users__select --users__select-department">
                    <div className="select__top">Selected</div>
                    <div className="select__bottom">
                        {departments.map((department) =>
                            <div className="select__bottom-department" key={department.value}>
                                <input className="select__checkbox" id="select__checkbox" type="checkbox"/>
                                <label htmlFor="select__checkbox">{department.value}</label>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Users;
