import { connect } from 'react-redux';
import { Game } from './game';


const mapStateToProps = (state, props) => {

    const histories = state.histories;
    const winner = state.winner;
    let status = winner ?
        'Winner: ' + winner :
        'Next player: ' + (state.xIsNext ? 'X' : 'O');

    return {
        status,
        histories
    };
}

const mapDispatchToProps = (dispatch, props) => {

    return {
        jumpTo: (step) => {

            dispatch({
                value: step,
                type: "jumpTo",
            })
        }
    };
}

export const GameContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Game);