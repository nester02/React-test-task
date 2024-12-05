import React, { useState } from "react";
import { useSelector } from "react-redux";
import './EditUser.css';
import { Select, Input} from "antd";

const EditUser = () => {
    const [selectedUser, setSelectedUser] = useState("");
    const [userName, setUserName] = useState("");
    const [userDepartment, setUserDepartment] = useState("")

    const users = useSelector(store => store.user.users);

    const handleSelectChange = (value) => {
        setSelectedUser(value);
    };

    const handleNameChange = (e) => {
        setUserName(e.target.value);
    };

    const handleDepartmentChange = (value) => {
        setUserDepartment(value);
    };

    const options = users.map(user => ({
        value: user.id,
        label: user.name
    }));

    return (
        <section className="edit">
            <div className="__container --edit__container">
                <h1 className="section__heading --edit__heading">Edit user</h1>
                <div className="edit__select --edit__select-user">
                    <div className="section__description --edit__description">User</div>
                    <Select
                        showSearch
                        style={{ width: 200 }}
                        onChange={handleSelectChange}
                        placeholder="Search to Select"
                        optionFilterProp="label"
                        filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        filterSort={(optionA, optionB) =>
                            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                        }
                        options={options}
                    />
                </div>
                <div className="edit__user-information">
                    <h2>User Information</h2>
                    <div className="section__description --edit__description">Full Name</div>
                    <Input placeholder="Username" onChange={handleNameChange} value={userName}/>

                    <div className="section__description --edit__description">Department</div>
                    <Select
                        showSearch
                        style={{width: 200}}
                        onChange={handleSelectChange}
                        placeholder="Search to Select"
                        optionFilterProp="label"
                        filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        filterSort={(optionA, optionB) =>
                            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                        }
                        options={options}
                    />
                </div>
            </div>
        </section>
    );
};

export default EditUser;
