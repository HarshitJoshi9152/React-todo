import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NotesPage from "./notes.js";

import Header from "./Header";
import Table from "./Table";
import Form from "./Form";
import ViewHolder from "./ViewHolder";

function App() {
	const [notes, setNotes] = useState([
		{
			title: "Welcome",
			note: "Have a nice day ahead !"
		}
	]);

	const removenotes = (index) => {
		setNotes(notes.filter((_, i) => i !== index));
	};

	const handleSubmit = (newNote) => {
		setNotes([newNote, ...notes]);
	};

	// method should return matching notes
	const searchData = (q) => {
		console.log("q", q);
		const matches = notes.filter(({ title, note }) =>
			title.includes(q) || note.includes(q) ? true : false
		);
		console.log(`${q} matches`, matches);
		return matches;
	};

	return (
		<BrowserRouter>
			<Switch>
				<Route
					exact
					path="/"
					render={() => {
						return (
							<>
								<Header />
								<ViewHolder>
									<Form handleSubmit={handleSubmit} />
									<Table
										notesData={notes}
										removenotes={removenotes}
										searchData={searchData}
									/>
									{/* <tasks data={tasks} removeTask={removeTask}></tasks> */}
								</ViewHolder>
							</>
						);
					}}
				/>

				<Route
					exact
					path="/notes"
					render={(props) => (
						<Table
							{...props}
							notesData={notes}
							removenotes={removenotes}
							searchData={searchData}
						/>
					)}
				/>
				<Route exact path="/dev/notes" component={NotesPage}></Route>
				<Route path="/" render={() => <h1>404 Not Found</h1>} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
