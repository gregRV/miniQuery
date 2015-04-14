var SweetSelector = {
	// in: string - selector
	// out: html of respective selector
	select: function(selector){
		var name = selector.slice(1);

		if(selector[0] === '.') {
			return document.getElementsByClassName(name);
		}else if (selector[0] === '#'){
			return document.getElementById(name);
		}
	}
};