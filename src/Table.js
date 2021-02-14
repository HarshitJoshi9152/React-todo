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
		// console.log(removenotes)
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
				<Notes notesData={notes} removenotes={removenotes}/>
			</div>
		);
	}
}

function Notes(props) {
	const list = props.notesData.map( (row, index) => {
		return <Note data={row} index={index} key={index} removenotes={props.removenotes}></Note>
	})
	return <>{list}</>
}

function Note(props) {
	const {title, note} = props.data;
	const editView = (e) => {
		console.log("i have been clicked ! heehhe");
	}
	const LinkStyles = {
		textDecoration:"none",
		color:"inherit",
		display:"inline"
	}
	return (
		<div>
			<h3 className="note-title">
				<span>
					<a href={"#"+title} id={title} title={"#"+title} style={LinkStyles}>#</a> {title}
				</span>
				<span className="edit-icon" onClick={editView}>
					<input type="button" value="-" onClick={() => props.removenotes(props.index)}></input>
					<img alt="edit" src="https://img.icons8.com/android/24/000000/edit.png"/>
				</span>
			</h3>
			<p className="note-description">{note}</p>
		</div>
	)
}

function SearchBar(props) {

	const search = (e) => {
		const {searchData, setConfig} = props;
		const value = e.target.value.trim();
		if (value !== "") {
			// if (queryMode === false)
			let data = searchData(value);
			setConfig(true, data)
		} else {
			setConfig(false, [])
		}
	}
	return (
		<div>
			<input type="text" onChange={search} placeholder="Search notes .."></input>
		</div>
	)
}

export default Table;
