
function formatExamples() {

	var pre = document.querySelectorAll('pre.epub, pre.json-ld, pre.rdfa, pre.microdata');
	
	// hide the non-epub examples
	for (var i = 0; i < pre.length; i++) {
		if (!pre[i].classList.contains('json-ld')) {
			pre[i].setAttribute('hidden', 'hidden');
		}
	}
	
	// add the control buttons
	var buttons = '<div class="ex-buttons">\
<fieldset>\
	<legend>Select example format</legend>\
	<input type="button" class="active" value="JSON-LD" onclick="changeExamples(this)"/>\
	<input type="button" value="EPUB" onclick="changeExamples(this)"/>\
	<input type="button" value="RDFa" onclick="changeExamples(this)"/>\
	<input type="button" value="Microdata" onclick="changeExamples(this)"/>\
</fieldset>\
</div>';
	
	var exhd = document.querySelectorAll('aside.ex-group > pre:first-child');
	
	for (var j= 0; j < exhd.length; j++) {
		exhd[j].insertAdjacentHTML('beforeBegin', buttons);;
	}
}


function formatExampleTitles() {
	// add the format labels
	var asidehd = document.querySelectorAll('aside.ex-group span.example-title');
	var format_ext = ' expressed in <span class="format">JSON-LD</span>';
	
	for (var k = 0; k < asidehd.length; k++) {
		asidehd[k].insertAdjacentHTML('beforeEnd', format_ext);
	}
}
