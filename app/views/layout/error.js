render['error'] = () => {require(['vendor/helpers/html'], ()=> {
	html.insertNode(html.createNode("section", {
			class: "row",
			css:
			{
				backgroundColor: "hsl(209, 66%, 63%)",
				boxSizing: "border-box",
				paddingTop: "20%",
			},
			append: [
				html.createNode("h2", {
					class: "text-center",
					html: "ОШИБКА! Страница не найдена",
					css: {
						color: "hsl(60, 80%, 60%)",
						fontWeight: "bold",
					}
				}),
				html.createNode("p", {
					html: "Страница, которую вы запрасили не была найдена на сервере =(",
					class: "text-center",
					css: {
						textIndent: "1.25rem",
						lineHeight: "1.5",
						fontSize: "2rem",
					},
				})
			],
	}), html.body);
})}