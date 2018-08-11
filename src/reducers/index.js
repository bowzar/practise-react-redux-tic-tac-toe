import { calculateWinner } from '../tools';

const jumpTo = (state, action) => {

    const step = action.value;
    if (action.value === state.stepNumber)
        return state;

    const histories = state.histories.slice(0, step + 1);
    const current = state.histories[step];

    return {
        ...state,
        histories,
        stepNumber: step,
        xIsNext: current.xIsNext,
        winner: null,
    };
}

const squareClick = (state, action) => {

    if (state.winner)
        return state;

    const histories = state.histories.slice(0, state.stepNumber + 1);
    const current = histories[state.stepNumber];
    const squares = current.squares.slice();

    squares[action.value] = state.xIsNext ? 'X' : 'O';

    const winner = calculateWinner(squares);

    histories.push({
        squares,
        currentIndex: action.value,
        xIsNext: !state.xIsNext,
    });

    return {
        ...state,
        histories,
        stepNumber: histories.length - 1,
        xIsNext: !state.xIsNext,
        winner
    };
}

export const reducer = (state, action) => {

    if (!state) {
        return {
            histories: [{
                squares: new Array(9).fill(null),
                xIsNext: true,
            }],
            stepNumber: 0,
            xIsNext: true,
        };
    }

    switch (action.type) {

        case 'jumpTo':
            return jumpTo(state, action);

        case 'square-click':
            return squareClick(state, action);

        default:
            return state;
    }
}