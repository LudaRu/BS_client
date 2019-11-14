import React, {Component} from 'react';
import './style.css';

class ModalWrapper extends Component {

    componentDidMount() {
        document.body.style.overflow = "hidden"
    }

    componentWillUnmount() {
        document.body.style.overflow = "auto"
    }

    render() {
        return (

                    <div className="overlayx">
                        {this.props.children}
                    </div>
        );
    }
}

export default ModalWrapper;
