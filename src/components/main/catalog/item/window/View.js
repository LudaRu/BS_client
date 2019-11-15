import React, {Component} from 'react';
import {ToolbarService} from "../../../../toolbar/ToolbarService";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTimesCircle} from "@fortawesome/free-regular-svg-icons";
import {Button, ButtonGroup, Container} from "react-bootstrap";
import {WindowService} from "../../../../window/WindowService";
import Edit from "./Edit";
class View extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        ToolbarService.setView(
            <ButtonGroup className="w-100">
                <Button onClick={() => {WindowService.open(<Edit/>)}} variant="info">
                    <FontAwesomeIcon icon={faEdit}/> Редактировать
                </Button>
                <Button onClick={() => {WindowService.close()}} variant="secondary">
                    <FontAwesomeIcon icon={faTimesCircle}/>
                </Button>
            </ButtonGroup>
        );
    }

    render() {
        return (
            <Container>
                <p>Описание</p>
                <small className="text-info">
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                    {this.props.item.tags.map(item => '#' + item + ' ')}
                </small>
            </Container>
        );
    }
}

export default View;
