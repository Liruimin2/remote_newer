import React from 'react';
import { Select } from 'antd';
import './index.css';
const { Option } = Select;
const testComponnet = () => {
    console.log('abc')
    return (
        <div>
            <span>B应用引入的组建：</span>
            <Select defaultValue="lucy" style={{ width: 120 }}>
                <Option value="jack">下拉1</Option>
                <Option value="lucy">下拉2</Option>
                <Option value="disabled" disabled>
                   下拉3
                </Option>
                <Option value="Yiminghe">下拉4</Option>
            </Select>
        </div>
    )
}
export default testComponnet;