import features from '../libs/features';
import select from 'select-dom';
import React from 'dom-chef';

function init(): void {
	console.log("inside branches page");
	const branchDestroyElements = select.all('.js-branch-destroy')

	if (branchDestroyElements.length == 0) {
		console.log("length is 0")
		return;
	}

	for (const el of branchDestroyElements) {
		const p = el.parentElement
		if (p === null ) {
			console.log("p is null")
			continue
		}
		
		const p2 = p.parentElement
		if (p2 === null) {
			console.log("p2 is null")
			continue
		}

		p2.after(
			<div className="d-flex col-lg-1 flex-items-center">
				<div className="Details-content--shown">{el}</div>
			</div>	
		);

		// el.remove();
	}

	
}

features.add({
	id: __featureName__,
	description: 'keep delete branch icon visible on resizing',
	screenshot: 'https://user-images.githubusercontent.com/1402241/45543717-d45f3c00-b847-11e8-84a5-8c439d0ad1a5.png',
	include: [
		features.isBranchesPage
	],
	init
});
