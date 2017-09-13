/**
 * Created by phuongla on 9/12/2017.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import { searchVideo } from '../actions';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        const { searchVideo } = this.props;
        searchVideo('');
    }

    handleChange(evt) {
        const { value: term } = evt.target;
        const { searchVideo } = this.props;

        this.setState({ term });
        searchVideo(term);
    }

    render() {
        const { term } = this.state;

        return (
            <div className="search-bar">
                <input
                    onChange={this.handleChange}
                    value={term}
                />
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ searchVideo }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
