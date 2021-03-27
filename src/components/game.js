import React from 'react';
import {Tag} from './tag.js';

export class Game extends React.Component {

    getTags = () => {
        return this.props.game.tags.map((tag, index) => {
            let separator = index === this.props.game.tags.length - 1 ? " " : ", ";
            return (
                <Tag tag={tag} separator={separator}/>
            );
        })
    }

    render() {
        return (
            <div>
                {this.props.game.name}
                <div>
                    <a href={this.props.game.url}>
                        <img src={this.props.game.image} className="game-img"></img>
                    </a>
                </div>
                <div><p>{this.getTags()}</p></div>
            </div>
        );
    }
}
