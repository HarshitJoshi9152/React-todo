import React from "react";

class SearchBar extends React.Component{
	search = (e) => {
		const value = e.target.value.trim();
		if (value !== "") {
			// console.log(this.props.setState)
			if (this.props.queryMode === false)
				this.props.setQueryMode(true);
			let data = this.props.searchData(value);
			console.log(this.props.setQueryMode)
			this.props.setSearchedData(data);
		} else {
			// todo:
			// we should make this a single function
			// and refactor this code.
			this.props.setQueryMode(false);
			this.props.setSearchedData([])
		}
	}
	render() {
		return (
			<div>
				<input type="text" onChange={this.search} placeholder="Search notes .."></input>
			</div>
		)
	}
}

export default SearchBar;