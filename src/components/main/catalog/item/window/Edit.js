import React, {Component} from 'react';
import {ToolbarService} from "../../../../toolbar/ToolbarService";
import {Button, ButtonGroup} from "react-bootstrap";
import {WindowService} from "../../../../window/WindowService";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTimesCircle} from "@fortawesome/free-regular-svg-icons";
import Tags from "../../../../test/Tags";

class Edit extends Component {
    constructor(props) {
        super(props);

        this.onChangeValues = this.onChangeValues.bind(this);
    }

    onChangeValues(value) {
        console.log(value)
    }

    componentDidMount() {
        ToolbarService.setView(
            <ButtonGroup className="w-100">
                <Button onClick={() => {WindowService.close()}} variant="info">
                    <FontAwesomeIcon icon={faEdit}/> Сохранить
                </Button>
                <Button onClick={() => {WindowService.close()}} variant="secondary">
                    <FontAwesomeIcon icon={faTimesCircle}/>
                </Button>
            </ButtonGroup>
        );
    }

    render() {
        return (
            <div>
                <Tags tags={this.props.context.item.tags} onChangeValues={this.onChangeValues}/>
            </div>
        );
    }
}

export default Edit;
