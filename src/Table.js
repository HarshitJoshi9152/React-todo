import React, { Component } from "react";


class Table extends Component {

	state = {
		queryMode: false,
		searchedData: []
	}

	setConfig = (mode, data) => {
		console.log("mode", mode);
		this.setState({
			queryMode:mode,
			searchedData:data
		})
		console.log("stateMode", this.state.queryMode)
	}

	render() {
		const { notesData, removenotes, searchData} = this.props;
		const {searchedData, queryMode} = this.state;
		const notes = (queryMode) ? searchedData : notesData;
		return (
			<div className="content">
				{/* <Header/> */}
				<SearchBar setConfig={this.setConfig} setSearchedData={this.setSearchedData} searchData={searchData} setQueryMode={this.setQueryMode} queryMode={queryMode}></SearchBar>
				{/* <table>
					<TableHead headings={Object.keys({name:"", job:""})}/>
					<TableBody
						notesData={notes}
						removenotes={removenotes}
					/>
				</table> */}
				<Notes notesData={notes}/>
			</div>
		);
	}
}

// class SearcshBar extends React.Component{
// 	search = (e) => {
// 		const {setQueryMode, setSearchedData, queryMode, searchData} = this.props;
// 		const value = e.target.value.trim();
// 		if (value !== "") {
// 			// if (queryMode === false)
// 			setQueryMode(true);
// 			let data = searchData(value);
// 			setSearchedData(data);
// 		} else {
// 			/*	todo:
// 				we should make this a single function
// 				and refactor this code. */
// 			setQueryMode(false);
// 			setSearchedData([])
// 		}
// 	}
// 	render() {
// 		return (
// 			<div>
// 				<input type="text" onChange={this.search} placeholder="Search notes .."></input>
// 			</div>
// 		)
// 	}
// }

function SearchBar(props) {

	const search = (e) => {
		const {setQueryMode, setSearchedData, queryMode, searchData, setConfig} = props;
		const value = e.target.value.trim();
		if (value !== "") {
			// if (queryMode === false)
			let data = searchData(value);
			setConfig(true, data)
			// setQueryMode(true);
			// setSearchedData(data);
		} else {
			/*	todo:
				we should make this a single function
				and refactor this code. */
			// setQueryMode(false);
			// setSearchedData([])
			setConfig(false, [])
		}
	}
	return (
		<div>
			<input type="text" onChange={search} placeholder="Search notes .."></input>
		</div>
	)
}

function Notes(props) {
	const list = props.notesData.map( (row, index) => {
		return <Note data={row} key={index}></Note>
	})
	return <>{list}</>
}

function Note(props) {
	const {title, note} = props.data;
	const editView = (e) => {
		console.log("i have been clicked ! heehhe");
	}
	return (
		<div>
			<h3 className="note-title"># {title}
				<span className="edit-icon" onclick={editView}>
					<img alt="edit" src="https://img.icons8.com/android/24/000000/edit.png"/>
				</span>
			</h3>
			<p className="note-description">{note}</p>
		</div>
	)
}

export default Table;
