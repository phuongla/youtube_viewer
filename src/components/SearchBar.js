/**
 * Created by phuongla on 9/12/2017.
 */
import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt) {
        const { value } = evt.target;
        this.setState({ term: value });

        const { onSearchTermChange } = this.props;
        onSearchTermChange(value);
    }

    render() {
        const { value } = this.state;
        return (
            <div className="search-bar">
                <input
                    onChange={this.handleChange}
                    value={value}
                />
            </div>
        );
    }
}

export default SearchBar;
