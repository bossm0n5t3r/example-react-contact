import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import PropTypes from 'prop-types';
import AddIcon from 'react-icons/lib/md/add';

const Wrapper = styled.div`
    // layout
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 4rem;
    height: 4rem;

    // color
    background: white;
    border: 3px solid ${oc.pink[6]};
    color: ${oc.pink[6]};

    // etc
    border-radius: 2rem;
    font-size: 2rem;
    cursor: pointer;

    // center alignment
    display: flex;
    align-items: center;
    justify-content: center;

    // animation
    transition: all .15s;

    // 마우스가 위에 있을 때
    &:hover {
        // 위로 조금 움직이고 색바꿈
        transform: translateY(-0.5rem); 
        color: white;
        background: ${oc.pink[6]}; 
    }

    // 클릭될 때
    &:active {
        // 색 좀 더 어둡게
        background: ${oc.pink[7]};
    }
`;

const FloatingButton = ({onClick}) => (
    <Wrapper onClick={onClick}>
        <AddIcon/>
    </Wrapper>
);

FloatingButton.propTypes = {
    onClick: PropTypes.func
};

export default FloatingButton;