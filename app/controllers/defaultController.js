
	class defaultController extends Controller
	{
		action_index(){
			this.pageTitle("Ключевая вода");
			return this.render("index", "html");
		}
	}

	render[controller] = [];
	controllersName = {
		defaultController,
	}
