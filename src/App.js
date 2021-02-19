import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import NotesPage from "./pages/notes.js";

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

	// loading notes from localStorage on mount
	React.useEffect(() => {
		// can also be extraced to a custom hook to show some loading icon !
		let localNotes;
		try {
			localNotes = JSON.parse(localStorage.getItem("notes"));
		} catch (e) {
			return null;
		}
		setNotes(localNotes);
	}, []);

	React.useEffect(() => {
		localStorage.setItem("notes", JSON.stringify(notes));
	}, [notes]);

	const removenotes = (index) => {
		const newNotes = notes.filter((_, i) => i !== index);
		setNotes(newNotes);
	};

	const handleSubmit = (newNote) => {
		const newNotes = [newNote, ...notes];
		setNotes(newNotes);
		// localStorage.setItem("notes", JSON.stringify(newNotes)); doesnt work here!
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
