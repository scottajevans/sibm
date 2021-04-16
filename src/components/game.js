import React from 'react';

import {Tag} from './tag.js';

export class Game extends React.Component {

    getTags = () => {
        return this.props.game.tags.map((tag, index) => {
            let separator = index === this.props.game.tags.length - 1 ? " " : ", ";
            return (
                <Tag tag={tag} separator={separator} key={index}/>
            );
        })
    }

    getAltText = () => {
        return `Visit the website ${this.props.game.name}`;
    }

    render() {
        return (
            <div style={{position: 'absolute', width: '100%'}}>
                <h3>{this.props.game.name}</h3>
                <div>
                    <a href={this.props.game.url}>
                        <img src={this.props.game.image} alt={this.getAltText()} className="game-img"></img>
                    </a>
                </div>
                <div><p>{this.getTags()}</p></div>
            </div>
        );
    }
}
