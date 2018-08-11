import React from 'react';
import { Board } from './board';

export class Game extends React.Component {

    render() {
        const moves = this.props.histories.map((step, move) => {

            const desc = move ? 'Move #' + step.currentIndex : 'Game start';
            return (
                <li key={move}>
                    <a href='#' onClick={() => this.props.jumpTo(move)}>{desc}</a>
                </li>);
        });

        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{this.props.status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
} 