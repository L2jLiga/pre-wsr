let renderFooter = ()=>{require(['vendor/helpers/html'], () => {


html.insertNode(html.createNode("footer", {
	class: 'row',
	css: {
		height: "75px",
		backgroundColor: "hsl(209, 66%, 63%)",
	},
	append: [
		html.createNode("p", {
			html: "&copy; 2017 MyCompany",
			style: {
				paddingTop: "25px",
				lineHeight: "50px",
				margin: 0,
				color: "hsl(209, 66%, 98%)",
				fontWeight: "bold",
				textAlign: "center",
			},
		}),
	],
}), html.body);



});}
