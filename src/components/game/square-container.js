import { connect } from 'react-redux';
import { Square } from './square';

const mapStateToProps = (state, props) => {

    const history = state.histories[state.stepNumber];

    return {
        value: history.squares[props.index],
    };
}

const mapDispatchToProps = (dispatch, props) => {

    return {
        click: (status) => {
            if (status) {
                return;
            }
            dispatch({
                type: 'square-click',
                value: props.index,
            });
        }
    };
}

export const SquareContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Square);