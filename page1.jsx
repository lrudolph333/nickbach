'use strict';

function Page1() {
    return (
        <div>
            <HeaderUpdate/>
            <CurrentPhaseImage/>
            <DeliveryTime/>
         </div>
    );
}

function HeaderUpdate(props) {
    return <h1> headerUpdateComp </h1>;
}

function DeliveryTime(props) {
    return <h2> DeliveryTime </h2>;
}

function CurrentPhaseImage(props) {
    return <img src="https://media0.giphy.com/media/uovLSMY7ZTyy4/giphy.gif"></img>;
}


const header = <HeaderUpdate/>;
const delivery = <DeliveryTime/>;
const animation = <CurrentPhaseImage/>;
const page = <Page1/>;

const domContainer = document.getElementById('page1');
ReactDOM.render(page, domContainer);