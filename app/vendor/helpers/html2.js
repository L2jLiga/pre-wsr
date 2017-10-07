class html {
	static get window () {
		return window;
	}
	static get document () {
		return html.window.document;
	}
	static get head () {
		return html.document.head;
	}
	static get body () {
		return html.document.body;
	}

	/*
	 * fn createElement
	 * create new tag with params
	 * input:
	 * tagname - string, name of new tag
	 * params - object, params of new tag (such as href, alt, src, onclick, etc..)
	 */
	static createNode (tagname, params = {}) {
		let t = html.document.createElement(tagname);
		
		$.each(params, (key, value)=>{
			t[key] = value;
		});

		// CSS styles to elem
		if(params['style']) $(t).css(params['style']);
		if(params['css']) $(t).css(params['css']);

		// insert HTML into block
		if(params['html']) $(t).html(params['html']);

		// classList
		if(params['class']) t.classList += params["class"];

		// Append childs
		if(params['child']) $(t).append(...params['child']);
		if(params['append']) $(t).append(...params['append']);

		return t;
	}

	static insertNode (node, wrapper) {
		return $(wrapper).append(node);
	}
	static insertNodes (nodes, wrapper) {
		return $.each(nodes, (key, node) => {
			$(wrapper).append(node);
		});
	}
}