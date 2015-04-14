var SweetSelector = {
	// in: string - selector
	// out: html of respective selector
	select: function(selector){
		var identifier = selector[0];
		var name = selector.slice(1);

		if(identifier === undefined) {
			console.log('Please enter selector.');
			return;
		}

		if(identifier === '.') {
			return document.getElementsByClassName(name);
		}else if (identifier === '#'){
			return document.getElementById(name);
		}else {
			return document.getElementsByTagName(selector);
		}
	}
};