import React from 'react';
import './style.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faHeart as farHeart, faTimesCircle} from '@fortawesome/free-regular-svg-icons';
import {faHeart} from '@fortawesome/free-solid-svg-icons';
import {CatalogService} from "../CatalogService";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import {ToolbarService} from "../../../toolbar/ToolbarService";
import * as PropTypes from "prop-types";
import {withCatalogContext} from "../Catalog";


const ItemContext = React.createContext();

export function withItemContext(Component) {
    return function WrapperComponent(props) {
        return (
            <ItemContext.Consumer>
                {state => <Component {...props} context={state} />}
            </ItemContext.Consumer>
        );
    };
}

const BarViewItem = ({edit}) => (
    <ButtonGroup className="w-100">
        <Button onClick={edit} variant="info">
            <FontAwesomeIcon icon={faEdit}/> Редактировать
        </Button>
        <Button onClick={edit} variant="secondary">
            <FontAwesomeIcon icon={faTimesCircle}/>
        </Button>
    </ButtonGroup>
);


BarViewItem.propTypes = {onClick: PropTypes.func};

class Index extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            item: props.item,
            isLike: props.item.isLike,
        };

        this.toggleLike = this.toggleLike.bind(this);

        this.openItem = this.openItem.bind(this);
        this.closeItem = this.closeItem.bind(this);

        this.renderContentPreview = this.renderContentPreview.bind(this);
    }

    toggleLike() {
        const like = !this.state.isLike;
        CatalogService.toggleLike(this.props.item.id, like);
        this.setState({isLike: like});
    }

    openItem() {
        this.props.context.setChangeItemId(this.props.item.id);
        ToolbarService.setView(
            <ButtonGroup className="w-100">
                <Button variant="info">
                    <FontAwesomeIcon icon={faEdit}/> Редактировать
                </Button>
                <Button onClick={() => {this.closeItem()}} variant="secondary">
                    <FontAwesomeIcon icon={faTimesCircle}/>
                </Button>
            </ButtonGroup>
        );
    }

    closeItem() {
        this.props.context.setChangeItemId(false);
        ToolbarService.reset();
    }

    render() {
        return <div className="bg-white rounded item shadow-sm mb-3">
            <ItemContext.Provider value={this.state}>
                <div className="d-flex">
                    <div className="wimg item-img rounded overflow-hidden" onClick={() => {
                        this.openItem()
                    }}>
                        <span style={{backgroundImage: `url(${this.props.item.imgUrl})`}} className="ttex"></span>
                        <img className="rounded" src={this.props.item.imgUrl}/>
                    </div>
                    <div className="wcontent w-100 d-flex">
                        {this.renderContentPreview()}
                    </div>
                </div>
            </ItemContext.Provider>
        </div>;
    }


    renderContentPreview() {
        return <>
            <div className="item-content"  onClick={this.openItem}>
                <div className="h-100  justify-content-between ">
                    <div className="h-100 d-flex flex-column pt-2 pb-2 pl-2 w-100">
                        <div className="title">{this.props.item.title}</div>
                        <div className="d-flex justify-content-between footer">
                            <small className="text-info">{this.props.item.tags.map(tag => '#'+tag+' ')}</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item-toolbar justify-content-between flex-column p-2">
                <div>
                    <FontAwesomeIcon
                        onClick={this.toggleLike}
                        className={'like f16 ' + (this.state.isLike ? 'text-danger' : '')}
                        icon={this.state.isLike ? faHeart : farHeart}
                    />
                </div>
            </div>
        </>;
    }
}

export default withCatalogContext(Index);
