import React from "react";
import PropTypes from "prop-types";
import Button from "../../Button/Button";
import documentIcon from "../../../Icons/Big.svg";

import "./MobileDocumentList.scss";

function MobileDocumentList({documents}) {

	return (
		<div className="mobile-document-list" role="list">
			<ul className="mobile-document-list__items">
				{documents?.map((document) => (
					<li className="mobile-document-list__item" key={document.id} role="list">
						<div className="mobile-document-list__wrapper">
							<div className="mobile-document-list__icon" aria-hidden="true">
								<img src={documentIcon} alt="Document Icon" />
							</div>
							<div className="mobile-document-list__info">
								<div className="mobile-document-list__name">{document.name}</div>
								<div className="mobile-document-list__date">Last Edited: {document.date}</div>
							</div>
						</div>
						<div className="mobile-document-list__button">
							<Button aria-label={`Open ${document.name} document`} text="View document" size="large" color="orange"/>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}

MobileDocumentList.propTypes = {
	documents: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
			date: PropTypes.string.isRequired
		})
	).isRequired
};

export default MobileDocumentList;
