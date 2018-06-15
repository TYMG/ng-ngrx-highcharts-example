import { HIDE_SPINNER, SHOW_SPINNER, SpinnerAction } from "../actions/spinner.actions";

export interface State {
    show: boolean;
}

const initialState: State = {
    show: false
};

export function reducer(state: State = initialState, actions: SpinnerAction) {
    switch (actions.type) {
        case HIDE_SPINNER:
            return Object.assign({}, state, { show: false });
        case SHOW_SPINNER:
            return Object.assign({}, state, { show: true });
        default:
            return state;
    }
}

export const isShowing = (state: State) => state.show;
