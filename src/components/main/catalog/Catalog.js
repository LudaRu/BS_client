import React, {Component} from 'react';
import Item from "./item/Item";
import Masonry from 'react-masonry-css';
import {CatalogService} from "./CatalogService";
import Container from "react-bootstrap/Container";

class Catalog extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [],
        };
    }

    componentDidMount() {
        this.subCatalogService = CatalogService.getItems$().subscribe( v => {
            if (v) {
                this.setState({ items: v});
            }
        });
    }

    componentWillUnmount() {
        this.subCatalogService.unsubscribe();
    }

    render() {
        return (
            <Container className="mb-5">
                <Masonry
                    breakpointCols={{default: 3, 992: 2, 768: 1,}}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column">
                    {this.state.items.map((item) => <Item key={item.id} item={item}/>)}
                </Masonry>
            </Container>
        );
    }
}

export default Catalog;
