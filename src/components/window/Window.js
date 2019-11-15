import React, {Component} from 'react';
import _ from './styles.module.css';
import bg from '../../gradient.module.css';
import {WindowService} from "./WindowService";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import fadeTransition from "./animate.module.css";


class Window extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            nowView: false,
            isOpen: false,
        };
    }

    componentDidMount() {
        document.body.overflow = 'hidden';
        this.subCatalogService = WindowService.getObservable().subscribe(v => {
            this.setState({isOpen: !!v});
            if (v !== null) {
                this.setState({nowView: v});
            }

        });
    }

    componentWillUnmount() {
        document.body.overflow = 'auto';
        this.subCatalogService.unsubscribe();
    }

    render() {
        return (
            <CSSTransition
                in={this.state.isOpen}
                unmountOnExit
                timeout={300}
                classNames={fadeTransition}
            >
                <div className={_.window}>
                    {this.state.nowView}
                </div>
            </CSSTransition>
        );
    }
}

export default Window;
