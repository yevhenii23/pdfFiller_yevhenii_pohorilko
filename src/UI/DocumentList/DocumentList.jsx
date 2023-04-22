import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import MobileDocumentList from "./MobileDocumentList/MobileDocumentList";
import documentIcon from "../../Icons/Big.svg";

import "./DocumentList.scss";


function DocumentList({ documents }) {
	const handleClick = (id) => {
		console.log(`Clicked on document with ID ${id}`);
	};

	const [isMobile, setMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setMobile(window.innerWidth < 768);
		};
		window.addEventListener("resize", handleResize);
		handleResize();
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	if (isMobile) {
		return <MobileDocumentList documents = {documents} />;
	}

	return (
		<div className="document-list" role="list">
			<ul className="document-list__items">
				{documents.map((document) => (
					<li key={document.id} className="document-list__item">
						<div className="document-list__icon" aria-hidden="true">
							<img src={documentIcon} alt="Document Icon" />
						</div>
						<div className="document-list__info">
							<div className="document-list__name">{document.name}</div>
							<div className="document-list__date">{document.date}</div>
						</div>
						<div className="document-list__button">
							<Button aria-label={`Open ${document.name} document`} color="orange" size="small" text="View document" onClick={handleClick}/>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}

DocumentList.propTypes = {
	documents: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
			date: PropTypes.string.isRequired
		})
	).isRequired
};

export default DocumentList;
