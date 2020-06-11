import React from "react";
import Popup from "reactjs-popup";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faTimes } from '@fortawesome/free-solid-svg-icons'

export default class PopUp extends React.Component {
    stopBubbling = (e) => {
        e.preventDefault();
    };
    closePopup = () => {
        this.stopBubbling();
        close();
    }
    render() {
        return (
            <Popup
                onOpen={this.stopBubbling}
                onClose={this.stopBubbling}
                trigger={<button className="show-desc"><FontAwesomeIcon icon={faInfoCircle} /></button>}
                position="right center"
                closeOnEscape
            >
                {close => (
                    <>
                        <span onClick={close}>
                            <span className="show-desc__close"><FontAwesomeIcon icon={faTimes} /></span>
                            <div className="show-desc__text">
                                <p>{this.props.note}</p>
                            </div>
                        </span>
                    </>
                )}
            </Popup>
        );
    }
};