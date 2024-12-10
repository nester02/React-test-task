import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './EditUser.css';
import { Input } from "antd";
import { updateUser } from "../../../redux/slices/userSlice";
import renderCustomSelect from "../../../resources/utils/renderCustomSelect";

const EditUser = () => {
    const dispatch = useDispatch();
    const [selectedUser, setSelectedUser] = useState("");
    const [userName, setUserName] = useState("");
    const [userDepartment, setUserDepartment] = useState("");
    const [userCountry, setUserCountry] = useState("");
    const [userStatus, setUserStatus] = useState("");

    const isNotEmpty = (state) => state.length !== 0;

    const inputsChanged = isNotEmpty(userName) || isNotEmpty(userDepartment) || isNotEmpty(userCountry) || isNotEmpty(userStatus);

    const users = useSelector(store => store.user.users);
    const departments = useSelector(store => store.department.departments);
    const countries = useSelector(store => store.country.countries);
    const statuses = useSelector(store => store.status.statuses);

    const handleSelectChange = (value) => {
        setSelectedUser(value);
    };

    const handleNameChange = (e) => {
        setUserName(e.target.value);
    };

    const handleDepartmentChange = (value, option) => {
        setUserDepartment({
            name: option.label,
            value: value
        });
    };

    const handleCountryChange = (value, option) => {
        setUserCountry({
            name: option.label,
            value: value,
        });
    }

    const handleStatusChange = (value, option) => {
        setUserStatus({
            name: option.label,
            value: value,
        });
    }

    const handleSaveClick = () => {
        if (selectedUser) {
            dispatch(
                updateUser({
                    id: selectedUser,
                    name: userName,
                    department: userDepartment,
                    country: userCountry,
                    status: userStatus,
                })
            )
            handleUndoClick();
        }
    }

    const handleUndoClick = () => {
        setSelectedUser('');
        setUserName('');
        setUserCountry('');
        setUserDepartment('');
        setUserStatus('');
    }

    const userOptions = users.map(user => ({
        value: user.id,
        label: user.name
    }));

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
        <section className="edit">
            <div className="__container --edit__container">
                <h1 className="section__heading --edit__heading">Edit user</h1>
                <div className="edit__select --edit__select-user">
                    <div className="section__description --edit__description">User</div>
                    {renderCustomSelect({
                        options: userOptions,
                        value: userOptions.value,
                        onChange: handleNameChange,
                        placeholder: 'Search User',
                        style: {width: 489, height: 48,}
                    })}
                </div>
                <h2 className="information__heading">User Information</h2>
                <div className="edit__user-information">
                    <div className="information__row-first">
                        <div className="section__description --edit__description">Full Name</div>
                        <Input placeholder="Username" onChange={handleNameChange} value={userName}
                               style={{width: 489, marginBottom: 40, height: 48,}}/>

                        <div className="section__description --edit__description">Department</div>
                        {renderCustomSelect({
                            options: departmentOptions,
                            value: userDepartment.value,
                            onChange: handleDepartmentChange,
                            placeholder: 'Enter user department',
                            style: {width: 489, height: 48,}
                        })}
                    </div>

                    <div className="information__row-second">
                        <div className="section__description --edit__description">Country</div>
                        {renderCustomSelect({
                            options: countryOptions,
                            value: userCountry.value,
                            onChange: handleCountryChange,
                            placeholder: 'Enter user country',
                            style: {width: 489, marginBottom: 40, height: 48,}
                        })}

                        <div className="section__description --edit__description">Status</div>
                        {renderCustomSelect({
                            options: statusOptions,
                            value: userStatus.value,
                            onChange: handleStatusChange,
                            placeholder: 'Enter user status',
                            style: {width: 489, height: 48,}
                        })}
                    </div>
                </div>

                <div className="edit__buttons">
                    {
                        inputsChanged ? (
                            <>
                                <button onClick={handleUndoClick} className="button__undo">Undo</button>
                                <button onClick={handleSaveClick} className="button__save">Save</button>
                            </>
                            ) : (
                            <>
                                <button className="button__undo --button__disabled">Undo</button>
                                <button className="button__save --button__disabled">Save</button>
                            </>
                        )
                    }

                </div>
            </div>
        </section>
    );
};

export default EditUser;
