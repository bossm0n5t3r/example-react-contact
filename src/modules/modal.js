import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

const SHOW = 'modal/SHOW';      // { mode, contact: {[id], name, phone, color}}
const HIDE = 'modal/HIDE';
const CHANGE = 'modal/CHANGE';  // { name, value }

export const show = createAction(SHOW);
export const hide = createAction(HIDE);
export const change = createAction(CHANGE);

const initialState = Map({
    visible: false,
    mode: null,     // create, modify
    contact: Map({
        id: null,
        name: '',
        phone: '',
        color: 'black'
    })
});

export default handleActions({
    [SHOW]: (state, action) => {
        const { mode, contact } = action.payload;

        return state.set('visible', true)
                    .set('mode', mode)
                    .set('contact', Map(contact))
    },
    [HIDE]: (state, action) => state.set('visible', false),
    [CHANGE]: (state, action) => {
        const { name, value } = action.payload;

        return state.setIn(['contact', name], value);
    }
}, initialState);