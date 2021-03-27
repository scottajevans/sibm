import React from 'react';

export class Game extends React.Component {
    render() {
        return (
            <div>
                <a href={this.props.game.url}>{this.props.game.name}</a>
            </div>
        );
    }
}
