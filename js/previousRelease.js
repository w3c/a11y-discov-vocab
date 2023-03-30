
function addPreviousRelease() {
	
	var prevLink = '<dt>Previous version:</dt>\
<dd><a href="https://www.w3.org/community/reports/a11y-discov-vocab/CG-FINAL-vocabulary-%%ppd%%/">https://www.w3.org/community/reports/a11y-discov-vocab/CG-FINAL-vocabulary-%%ppd%%/</a></dd>';

	if (!respecConfig.hasOwnProperty('previousPublishDate')) {
		console.warn('Missing previousPublishDate in respec metadata. Cannot add link to previous release.');
		return;
	}
	
	// respec converts previousPublishDate to a date object, so need to conver to numeric representation
	
	var ppd = respecConfig['previousPublishDate'].getFullYear() +
				(respecConfig['previousPublishDate'].getMonth() + 1).toString().padStart(2,'0') +
				(respecConfig['previousPublishDate'].getDate() + 1).toString().padStart(2,'0');
	
	// get the dt for the latest editor's draft - new link will go before (nth-child not working here, so grabbing all)
	var dt = document.querySelectorAll('div.head > dl > dt');
	
	if (!dt) {
		console.warn('Missing dt element with publication links. Cannot add link to previous release.');
		return;
	}
	
	prevLink = prevLink.replace(/%%ppd%%/g, ppd);
	
	dt[1].insertAdjacentHTML('beforebegin', prevLink);
}

