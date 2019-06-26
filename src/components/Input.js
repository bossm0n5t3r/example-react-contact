import styled from 'styled-components';
import oc from 'open-color';
import PropTypes from 'prop-types';

const Input = styled.input`
    // layout
    width: 100%;
    padding: 0.5rem;

    // color
    border: 1px solid ${oc.gray[2]};

    // etc
    font-size: 1.5rem;
    line-height: 2rem;
    transition: all .25s;

    // when input is in progress
    &:focus {
        outline: none;
        border: 1px solid ${oc.pink[3]};
        color: ${oc.pink[6]};
    }

    // distance between components
    & + & {
        margin-top: 1rem;
    }
`;

Input.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func
};

export default Input;