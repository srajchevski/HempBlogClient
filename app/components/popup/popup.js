import React, {Component} from 'react';

class Popup extends Component {
    constructor(props) {
        super(props);
    }
    removePopup() {
        this.props.closePopup();
    }
    render() {
        return (
            <div className={`${this.props.visible===true ? "" : "hidden"} popup-div`} ref="popup" id="animate">
                <span className="glyphicon glyphicon-remove-circle" onClick={this.removePopup.bind(this)}></span>
                <img src="/images/cbd_popup_scaled.jpg" />
                <h3>CBD Drops (2%-10%)</h3>
                <p>Simply the purest concentrates giving the expected and even better results! Try it now!</p>
                <a target="_blank" href="buy_weed" className="btn btn-success" onClick={this.removePopup.bind(this)}>Go Buy!</a>
            </div>
        );
    }
}

export default Popup;