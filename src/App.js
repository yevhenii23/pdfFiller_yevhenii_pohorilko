import React from "react";
import { v4 as uuidv4 } from "uuid";
import Button from "./UI/Button/Button";
import DocumentList from "./UI/DocumentList/DocumentList";
import MobileDocumentList from "./UI/DocumentList/MobileDocumentList/MobileDocumentList";

import "./App.scss";

const newId = () => uuidv4();

const Documents = [
	{ 
		id: newId(),
		name: "Rundofase",
		date: "08/08/20",

	},
	{ 
		id: newId(),
		name: "Genco Pura Olive Oil Company",
		date: "08/08/20",

	},
	{ 
		id: newId(),
		name: "Bubba Gump",
		date: "08/08/20",

	},
];

function App() {
	return (
		<div className="App">
			<h4 className="my-component__title">1. Component “BUTTON”</h4>
			<div className="my-component__container">
				
				<div className="my-component__box">
					<Button size={"small"} color={"orange"} text={"Normal"}></Button>
					<Button size={"small"} color={"orange"} text={"Hover"} onHover={true}/>
					<Button size={"small"} color={"orange"} text={"Active"} onActive={true}/>
					<Button size={"small"} color={"orange"} text={"Disabled"} disabled={true}/>
					<Button size={"small"} color={"orange"} text={"Focused"} onFocused={true}/>
				</div>
				<div className="my-component__box">
					<Button size={"small"} color={"gray"} text={"Normal"}></Button>
					<Button size={"small"} color={"gray"} text={"Hover"} onHover={true}/>
					<Button size={"small"} color={"gray"} text={"Active"} onActive={true}/>
					<Button size={"small"} color={"gray"} text={"Disabled"} disabled={true}/>
					<Button size={"small"} color={"gray"} text={"Focused"} onFocused={true}/>
				</div>
			</div>
			<h4 className="my-component__title">2. Component “DOCUMENT LIST” – Desktop</h4>
			<DocumentList documents={Documents}/>
			<h4 className="my-component__title">2. Component “DOCUMENT LIST” – Mobile</h4>
			<MobileDocumentList documents={Documents}/>
		</div>
	);
}

export default App;
