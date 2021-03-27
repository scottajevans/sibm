import React from 'react';

export class Tag extends React.Component {

    render() {
        return (
            <>{this.props.tag}{this.props.separator}</>
        );
    }
}