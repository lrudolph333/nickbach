'use strict';

const headerUpdate = React.createElement;

Class headerUpdateClass extends React.Component {
    constructor(props) {
        //pull data here to determine base state
    }

    render() {
        return headerUpdate(
            'h1',
            'Defualt'
        )

    }
}

const domContainer = document.querySelector("#page1");
ReactDOM.render(hederUpdate(headerUpdateClass), domContainer);