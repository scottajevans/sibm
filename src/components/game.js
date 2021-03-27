import React from 'react';

export class Game extends React.Component {

    getTags = () => {
        console.log("Hello")
        console.log(this.props.game.tags)
        return this.props.game.tags.map((tag) => {
            return <>{tag} </>
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
                <div>What is this game?</div>
                <div><p>{this.getTags()}</p></div>
            </div>
        );
    }
}
