import React, { Component } from "react";
import SearchBar from "./SearchBar";
class Table extends Component {

	state = {
		queryMode: false,
		searchedData: []
	}

	setQueryMode = (mode) => {
		console.log(mode)
		this.setState({
			queryMode: mode,
			searchedData: this.state.searchedData
		})
		console.log(this.state.queryMode);
	}

	setSearchedData = (data) => {
		this.setState({
			queryMode: this.state.queryMode,
			searchedData: data
		})
	}

	render() {
		const { notesData, removenotes, searchData} = this.props;
		const {searchedData, queryMode} = this.state;
		let notes = (queryMode) ? searchedData : notesData;
		return (
			<div className="content">
				{/* <Header/> */}
				<SearchBar setSearchedData={this.setSearchedData} searchData={searchData} setQueryMode={this.setQueryMode} queryMode={queryMode}></SearchBar>
				<table>
					{/* not the best way to do this */}
					<TableHead headings={Object.keys({name:"", job:""})}/>
					<TableBody
						notesData={notes}
						removenotes={removenotes}
					/>
				</table>
			</div>
		);
	}
}

// function Header() {
// 	return (
// 		<h2>all tasks</h2>	
// 	)
// }

function TableHead(props) {
	return (
		<thead>
			<tr>
				{/* {props.headings.map( (head) => <th>{head}</th>)} */}
				<th>name</th>
				<th>job</th>
				<th>Remove</th>
			</tr>
		</thead>
	);
}

function TableBody(props) {
	const rows = props.notesData.map((row, index) => {
		return (
			<tr key={index}>
				{/* {
					Object.values(row).map( itm => <td> {itm} </td> )
				} */}
				<td> {row.title} </td>
				<td title={row.note}> {row.note} </td>
				<td>
					<button onClick={() => props.removenotes(index)}>
						Delete
					</button>
				</td>
			</tr>
		);
	});
	return <tbody> {rows} </tbody>;
}

export default Table;
