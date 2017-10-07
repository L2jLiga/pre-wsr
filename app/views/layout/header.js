let renderHeader = () => {require(['vendor/helpers/html'], () => {
html.body.classList = "container-fluid";

html.insertNode(html.createNode("meta", {
	name: "viewport",
	content: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
}), html.head);

let header = html.createNode("header", {
		class: "row",
		css: {
			backgroundColor: "hsl(209, 86%, 95%)",
		}
	}),

	/*
	 * Логотип
	 */
	logo = html.createNode("div", {
		class: "col-md-4 text-center",
	}),
	logo_img = html.createNode("img", {
		src: "app/media/images/logo.svg",
		class: "logotype",
		style: {
			maxHeight: "100%",
			maxWidth: "100%",
			paddingTop: "25px",
		}
	}),

	/*
	 * Форма авторизации
	 */
	panel = html.createNode("form", {
		class: "col-md-4 col-md-offset-3 text-center",
		onsubmit: (e) => {
			console.log("Попытка входа");
			e.preventDefault();
		},
		css: {
			paddingBottom: "10px",
		}
	}),
	panel_header = html.createNode("p", {
		html: "Форма авторизации",
		css: {
			fontSize: "1.2em",
			fontWeight: 'bold',
		}
	}),
	label_login = html.createNode("label", {
		html: "Ваш логин:",
		css: {
			display: "inline-block",
			width: "50%",
		}
	}),
	label_password = html.createNode("label", {
		html: "Ваш пароль:",
		css: {
			display: "inline-block",
			width: "50%",
		}
	}),
	input_login = html.createNode("input", {
		placeholder: "Введите логин",
		class: "text-left",
		type: "text",
		class: "input-lg",
		css: {
			display: "inline-block",
			marginBottom: "10px",
			width: "40%",
			marginLeft : "5%",
			marginRight : "5%",
			padding: "10px",
		},
	}),
	input_password = html.createNode("input", {
		placeholder: "Введите пароль",
		class: "text-left",
		type: "password",
		class: "input-lg",
		css: {
			display: "inline-block",
			marginBottom: "10px",
			width: "40%",
			marginLeft : "5%",
			marginRight : "5%",
			padding: "10px",
		},
	}),
	log_in = html.createNode("input", {
		value: "Авторизироваться",
		type: 'submit',
		class: "btn btn-lg btn-primary",
		css: {
			display: "block",
			width: "90%",
			marginLeft: "5%",
			padding: "10px",
		}
	});

	html.insertNode(logo_img, logo);
	html.insertNodes([panel_header, label_login, label_password, input_login, input_password, log_in], panel);
	html.insertNodes([logo, panel], header);
html.insertNode(header, document.body);

});}