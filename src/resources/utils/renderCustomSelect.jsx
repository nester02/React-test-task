import {Select} from "antd";

const renderCustomSelect = ({options, value, onChange, placeholder, style}) => (
    <Select
        showSearch
        style={style || {width: 280, height: 48, marginBottom: 40}}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        optionFilterProp="label"
        filterOption={(input, option) =>
            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
        }
        filterSort={(optionA, optionB) =>
            (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
        }
        options={options}
    />
)

export default renderCustomSelect;