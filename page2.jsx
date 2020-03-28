'use strict';
import DeliveryTime from "page1.jsx"

function Page2() {
    return (
        <div>
            <DeliveryTime/>
         </div>
    )
}

//const header = <HeaderUpdate/>;
const delivery = <DeliveryTime/>;
const page = <Page2/>;

const domContainer = document.getElementById('page2');
ReactDOM.render(page, domContainer);
