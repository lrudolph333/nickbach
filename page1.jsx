'use strict';

Class headerUpdate extends React.Component {
    render() {
        return <h1> headerUpdateComp </h1>;
    }
}

const headerUpdate = <headerUpdate/>;

const domContainer = document.getElementById('root');
ReactDOM.render(headerUpdate, domContainer);