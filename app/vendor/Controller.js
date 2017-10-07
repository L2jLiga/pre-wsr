
class Controller
{
	pageTitle ($title = "Doesn't set") {
		return window.document.querySelector("title").innerHTML = $title;
	}

	render (view, ...$opts) {
		$("body > *").remove();
		return require(['views/layout/header',
						'views/' + controller + '/' + view,
						'views/layout/footer', 'views/layout/error'],
				() => {
					// Render layout/header
					renderHeader();
					// Render view
					try {
						render[controller][view]();	
					} catch (e) {
						render["error"]();
					}
					// Render layout/footer
					renderFooter();
				});
	}

	notFound ()
	{
		this.pageTitle("Not Found! (#404)");
		this.render("../layout/error");
	}
}

class LoadController {
    constructor (className, opts) {
        return new controllersName[className](opts);
    }
}