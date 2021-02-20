import React, { useState } from "react";

function Table(props) {
	const [state, setState] = useState({
		queryMode: false,
		searchedData: []
	});

	const setConfig = (mode, data) => {
		console.log("mode", mode);
		setState({
			queryMode: mode,
			searchedData: data
		});
		console.log("stateMode", state.queryMode);
	};

	const { notesData, removenotes, searchData } = props;
	const { searchedData, queryMode } = state;

	const notesToRender = queryMode ? searchedData : notesData;

	return (
		<div className="content">
			<SearchBar
				setConfig={setConfig}
				searchData={searchData}
				queryMode={queryMode}
			></SearchBar>
			<Notes notesData={notesToRender} removenotes={removenotes} />
		</div>
	);
}

function Notes(props) {
	const list = props.notesData.map((row, index) => {
		return (
			<Note
				data={row}
				index={index}
				key={index}
				removenotes={props.removenotes}
			></Note>
		);
	});
	return <>{list}</>;
}

function Note(props) {
	const { title, note } = props.data;
	const editView = (e) => {
		console.log("i have been clicked ! heehhe");
	};
	const LinkStyles = {
		textDecoration: "none",
		color: "inherit",
		display: "inline"
	};

	const [opened, setState] = useState(false);

	return (
		<div>
			<h3 className="note-title">
				<span>
					<a
						href={"#" + title}
						id={title}
						title={"#" + title}
						style={LinkStyles}
					>
						#
					</a>{" "}
					{title}
				</span>
				<span>
					<button onClick={() => setState(!opened)}>
						{opened ? "Click to collapse" : "Click to expand"}
					</button>
				</span>
				<span className="edit-icon" onClick={editView}>
					<input
						type="button"
						value="-"
						onClick={() => props.removenotes(props.index)}
					></input>
					<img
						alt="edit"
						src="https://img.icons8.com/android/24/000000/edit.png"
					/>
				</span>
			</h3>
			{/* title ends body starts */}
			<p className="note-description">
				{opened ? note : note.slice(0, 400)}
			</p>
		</div>
	);
}

function SearchBar(props) {
	const search = (e) => {
		const { searchData, setConfig } = props;
		const value = e.target.value.trim();
		if (value !== "") {
			// if (queryMode === false)
			let data = searchData(value);
			setConfig(true, data);
		} else {
			setConfig(false, []);
		}
	};
	return (
		<div>
			<input
				type="text"
				onChange={search}
				placeholder="Search notes .."
			></input>
		</div>
	);
}

export default Table;
