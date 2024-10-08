import Select from 'react-select'
import PropTypes from 'prop-types'

const SelectDropDown = ({ placeholder, options, onChange }) => {
    return (
        <Select
            placeholder={placeholder}
            options={options}
            onChange={onChange}
        />
    );
};

SelectDropDown.proptypes = {
    placeholder: PropTypes.string,
    options: PropTypes.array
}

export default SelectDropDown;