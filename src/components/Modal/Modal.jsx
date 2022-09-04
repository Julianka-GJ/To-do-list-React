import "./Modal.scss";
import { Component } from "react";


export default class Modal extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="popup">
                <div className="close" onClick={this.props.closeModal}>
                    <span></span>
                    <span></span>
                </div>
                <p>{this.props.popUpText}</p>
                <div className="open-button">
                    <button className="button" name="yes" type="button" onClick={this.props.closeModal}
                    >OK</button>
                </div>
            </div>
        )
    }
}

