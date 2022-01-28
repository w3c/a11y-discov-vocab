
function formatExamples() {

	var pre = document.querySelectorAll('pre.epub, pre.json-ld, pre.rdfa, pre.microdata');
	
	// hide the non-epub examples
	for (var i = 0; i < pre.length; i++) {
		if (!pre[i].classList.contains('epub')) {
			pre[i].setAttribute('hidden', 'hidden');
		}
	}
	
	// add the control buttons
	var buttons = '<div class="ex-buttons">\
<fieldset>\
	<legend>Select example format</legend>\
	<input type="button" class="active" value="EPUB" onclick="changeExamples(this)"/>\
	<input type="button" value="JSON-LD" onclick="changeExamples(this)"/>\
	<input type="button" value="Microdata" onclick="changeExamples(this)"/>\
	<input type="button" value="RDFa" onclick="changeExamples(this)"/>\
</fieldset>\
</div>';
	
	var exhd = document.querySelectorAll('aside.ex-group > pre:first-child');
	
	for (var j= 0; j < exhd.length; j++) {
		exhd[j].insertAdjacentHTML('beforeBegin', buttons);;
	}
	
}
