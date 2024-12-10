import "./Users.css"
import "../../AddUserPopup/AddUserPopup.css"

import { v4 as uuidv4 } from 'uuid';
import {useDispatch, useSelector} from "react-redux";
import {addUser, deleteUser} from '../../../redux/slices/userSlice';

import clearBucket from "../../../resources/img/users-clear-bucket.svg"
import inputArrow from "../../../resources/img/users-select-arrow.svg"
import {useEffect, useState} from "react";
import {Input} from "antd";
import renderCustomSelect from "../../../resources/utils/renderCustomSelect";

const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector((store) => store.user.users);

    const [filters, setFilters] = useState({
        departments: [],
        countries: [],
        statuses: [],
    });
    const filtersLength = filters.departments.length;

    const [isPopupVisible, setIsPopupVisible] = useState(false);

    const filterBySelectedOptions = (user, selectedOptions, key) =>
        selectedOptions.length === 0 || selectedOptions.includes(String(user[key].value));

    const filteredUsers = users.filter((user) => {
        return (
            filterBySelectedOptions(user, filters.departments, 'department') &&
            filterBySelectedOptions(user, filters.countries, 'country') &&
            filterBySelectedOptions(user, filters.statuses, 'status')
        )
    })

    const handleCheckboxChange = (event, filterType) => {
        const {value, checked} = event.target;

        setFilters((prev) => ({
            ...prev,
            [filterType]: checked
                ? [...prev[filterType], value]
                : prev[filterType].filter((filterId) => filterId !== value)
        }));
    }

    const handleDeleteClick = (id) => {
        dispatch(deleteUser({id}))
    }

    const handleClearClick = () => setFilters({
        departments: [],
        countries: [],
        statuses: [],
    })

    const renderSelectBottom = (items, filterType, selected) => (
        items.map((item) => (
            <div key={item.value}>
                <input
                    className="select__checkbox"
                    id={item.value}
                    value={item.value}
                    checked={selected.includes(String(item.value))}
                    onChange={(e) => handleCheckboxChange(e, filterType)}
                    type="checkbox"
                />
                <label htmlFor={item.value}>{item.name}</label>
            </div>
        ))
    );

    // Popup -----------------------------

    const [userName, setUserName] = useState("");
    const [userDepartment, setUserDepartment] = useState("");
    const [userCountry, setUserCountry] = useState("");
    const [userStatus, setUserStatus] = useState("");

    const isNotEmpty = (state) => state.length !== 0;

    const inputsChanged = isNotEmpty(userName) || isNotEmpty(userDepartment) || isNotEmpty(userCountry) || isNotEmpty(userStatus);

    const countries = useSelector(store => store.country.countries);
    const departments = useSelector(store => store.department.departments);
    const statuses = useSelector(store => store.status.statuses);

    const handleNameChange = (e) => {
        setUserName(e.target.value);
    };

    const handleDepartmentChange = (value, option) => {
        setUserDepartment({
            name: option.label,
            value: option.value,
        });
    };

    const handleCountryChange = (value, option) => {
        setUserCountry({
            name: option.label,
            value: option.value,
        });
    }

    const handleStatusChange = (value, option) => {
        setUserStatus({
            name: option.label,
            value: option.value,
        });
    }

    const handleAddUserClick = () => {
        setIsPopupVisible(true)
    }

    const handleCancelClick = () => {
        setUserName('');
        setUserDepartment('');
        setUserCountry('');
        setUserStatus('');
        setIsPopupVisible(false);
    }

    useEffect(() => {
        if (isPopupVisible) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isPopupVisible]);

    const handleAddClick = () => {
        dispatch(
            addUser({
                name: userName,
                status: userStatus,
                department: userDepartment,
                country: userCountry,
                id: uuidv4()
            })
        )
        handleCancelClick();
    }

    const departmentOptions = departments.map(department => ({
        value: department.value,
        label: department.name
    }));

    const countryOptions = countries.map(country => ({
        value: country.value,
        label: country.name
    }));

    const statusOptions = statuses.map(status => ({
        value: status.value,
        label: status.name,
    }));

    return (
        <section id="home" className="home">
            <div className="__container --users__container">
                <h1 className="section__heading --users__heading">Users</h1>
                <p className="section__description">Please add at least 3 departmetns to be able to proceed next
                    steps.</p>
                <div className="section__inner">
                    <div className="users__inner--inputs">
                        <div className="users__select --users__select-department">
                            <div className="select__top">
                                <p>{filtersLength > 0 ? `Selected (${filtersLength})` : "Select departments"} </p>
                                <img src={inputArrow} alt=""/>
                            </div>
                            <div className="select__bottom">
                                {renderSelectBottom(departments, 'departments', filters.departments)}
                            </div>
                        </div>
                        <div className={`users__select --users__select-country ${filtersLength < 3 ? "--users__select-disabled" : ""}`}>
                        <div className="select__top">
                                <p>Selected ()</p>
                                <img src={inputArrow} alt=""/>
                            </div>
                            <div className="select__bottom">
                                {renderSelectBottom(countries, 'countries', filters.countries)}
                            </div>
                        </div>
                        <div className={`users__select --users__select-statuses ${filtersLength < 3 ? "--users__select-disabled" : ""}`}>
                            <div className="select__top">
                                <p>Selected ()</p>
                                <img src={inputArrow} alt=""/>
                            </div>
                            <div className="select__bottom">
                                {renderSelectBottom(statuses, 'statuses', filters.statuses)}
                            </div>
                        </div>
                    </div>
                    <div className="users__inner--buttons">
                        <button className="users__clear-button" onClick={handleClearClick}><img src={clearBucket} alt="reset filters"/></button>
                        <button onClick={handleAddUserClick} className="users__add-user-button">Add User</button>
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
                        {filteredUsers.map((user) => (
                            <div key={user.id} className="user-item">
                                <p>{user.name}</p>
                                <p>{user.department.name}</p>
                                <p>{user.country.name}</p>
                                <p>{user.status.name}</p>
                                <div className="button__delete" onClick={() => handleDeleteClick(user.id)}><img
                                    src={clearBucket} alt="delete user"/></div>
                            </div>
                        ))}
                    </div>
                </div>

                {isPopupVisible && (
                    <div className="popup__overlay" onClick={handleCancelClick}>
                        <div id="add-user-popup" onClick={(e) => e.stopPropagation()}>
                            <h1 className="section__heading --popup-heading">Add user</h1>

                            <div className="popup__information">
                                <div className="popup__column-first">
                                    <div className="section__description --popup__description">Full Name</div>
                                    <Input placeholder="Username" onChange={handleNameChange} value={userName}
                                           style={{width: 280, marginBottom: 40, height: 48,}}/>

                                    <div className="section__description --popup__description">Department</div>
                                    {renderCustomSelect({
                                        options: departmentOptions,
                                        value: userDepartment.value,
                                        onChange: handleDepartmentChange,
                                        placeholder: 'Enter user department'
                                    })}
                                </div>
                                <div className="popup__column-second">
                                    <div className="section__description --popup__description">Country</div>
                                    {renderCustomSelect({
                                        options: countryOptions,
                                        value: userCountry.value,
                                        onChange: handleCountryChange,
                                        placeholder: 'Enter user country'
                                    })}

                                    <div className="section__description --popup__description">Status</div>
                                    {renderCustomSelect({
                                        options: statusOptions,
                                        value: userStatus?.value || null,
                                        onChange: handleStatusChange,
                                        placeholder: 'Enter user status'
                                    })}
                                </div>
                            </div>

                            <div className="popup__buttons">
                                <button onClick={handleCancelClick} className="button__undo">Cancel</button>
                                {
                                    inputsChanged ? (
                                        <>
                                            <button onClick={handleAddClick} className="button__save">Add</button>
                                        </>
                                    ) : (
                                        <>
                                            <button className="button__save --button__disabled">Add</button>
                                        </>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </section>
    );
};

export default Users;