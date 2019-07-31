import React from 'react'

class SearchBar extends React.Component {
    state = {term: ''}

    onInputChange = e => {
        this.setState({term: e.target.value})
        
    }

    onFormSubmit = event => {
        event.preventDefault()
        
        this.props.onFormSubmit(this.state.term)
    }

    render() {
        return (
            <div className="searchbar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label htmlFor="searchBox">Video search</label>
                        <input id="searchbox" onChange={this.onInputChange} value={this.state.term} type="text"/>
                    </div>
                </form>
            </div>

        ) 
    }
}

export default SearchBar