import React, { Component } from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import PropTypes from 'prop-types';
import Thumbnail from './Thumbnail';
import StarIcon from 'react-icons/lib/md/star';
import EditIcon from 'react-icons/lib/md/edit';
import ImmutablePropTypes from 'react-immutable-proptypes';

const Wrapper = styled.div`
    // layout
    padding: 1rem;
    position: relative;
    overflow: hidden;
    display: flex;

    // color
    background: ${oc.gray[0]};
    border: 1px solid ${oc.gray[2]};

    // animation
    transition: all .25s;

    // interval between
    & + & {
        margin-top: 1rem;   
    }

    .actions {
        // layout
        position: absolute;
        top: 0;
        right: -3rem;               // Hidden by default
        width: 3rem;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;     // vertical alignment

        // color
        background: ${oc.gray[1]};
        border-left: 1px solid ${oc.gray[2]};
        opacity: 0;                 // Transparent by default

        // animation
        transition: all .4s;
    }

    // 마우스 커서가 위에 있을 때
    &:hover {
        border: 1px solid ${oc.gray[4]};
        background: white;

        .actions {
            opacity: 1;
            right: 0rem;
        }
    }
`;

const CircleButton = styled.div`
    // layout
    height: 2rem;
    width: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0.25rem;

    // color
    background: white;
    border: 1px solid ${oc.gray[4]};
    color: ${oc.gray[4]};

    // etc
    border-radius: 1rem;
    font-size: 1.15rem;

    // 마우스 커서가 위에 있을 때
    &:hover {
        border: 1px solid ${oc.gray[7]};
        color: ${oc.gray[9]};
    }

    // 즐겨찾기 - 노란색
    &.favorite {
        // active props 를 전달받으면 노란색으로
        ${props => props.active ? `
            border: 1px solid ${oc.yellow[6]};
            color: ${oc.yellow[6]};
        `: ''}
        
        &:active {
            border: 1px solid ${oc.yellow[6]};
            color: ${oc.yellow[6]};
        }
    }
`;

CircleButton.propTypes = {
    active: PropTypes.bool
};

const Info = styled.div`
    // layout
    margin-left: 1rem;
    flex: 1;
    display: flex;
    justify-content: center;
    flex-direction: column; 
`;

const Name = styled.div`
    font-size: 1.25rem;
    color: ${oc.gray[9]};
    font-weight: 500;
`;

const Phone = styled.div`
    color: ${oc.gray[6]}
    margin-top: 0.25rem;
`;

class ContactItem extends Component {

    static propTypes = {
        contact: ImmutablePropTypes.mapContains({
            id: PropTypes.string,
            name: PropTypes.string,
            phone: PropTypes.string,
            color: PropTypes.string,
            favorite: PropTypes.bool
        }),
        onToggleFavorite: PropTypes.func,
        onOpenModify: PropTypes.func
    }

    render() {
        // 레퍼런스 준비
        const {
            contact,
            onOpenModify,
            onToggleFavorite
        } = this.props;

        const { name, phone, favorite, id, color } = contact.toJS();
        
        return (
            <Wrapper>
                <Thumbnail color={color}/>
                <Info>
                    <Name>{name}</Name>
                    <Phone>{phone}</Phone>
                </Info>
                <div className="actions">
                    <CircleButton className="favorite" active={favorite} onClick={() => onToggleFavorite(id)}>
                        <StarIcon/>
                    </CircleButton>
                    <CircleButton onClick={() => onOpenModify(id)}>
                        <EditIcon/>
                    </CircleButton>
                </div>
            </Wrapper>
        );
    }
};

export default ContactItem;