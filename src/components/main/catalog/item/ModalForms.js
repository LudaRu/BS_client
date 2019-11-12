import React, {Component} from 'react';
import {Container} from "react-bootstrap";
import {withCatalogContext} from "../Catalog";
import {CatalogService} from "../CatalogService";

class ModalForms extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: null,
        };
    }

    componentDidMount() {
        this.subCatalogService = CatalogService.getItems$().subscribe( v => {
            if (v) {
                this.setState({ items: v});
            }
        });
    }

    render() {
        return (
            <Container>
                {/*{this.state.items}*/}
            </Container>
        );
    }
}

export default withCatalogContext(ModalForms);
