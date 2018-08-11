import React from 'react';

export class Square extends React.Component {

    render() {
        return (
            <button
                className="square"
                onClick={() => { this.props.click(this.props.value); }}>
                {this.props.value}
            </button >
        );
    }
}
