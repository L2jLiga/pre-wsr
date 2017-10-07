render['default']['index'] = ()=> {require(['vendor/helpers/html'], () => {
// TO DO: view
let divStyle = {
		textIndent: "1.25rem",
		fontSize: "2rem",
		lineHeight: "1.5",
		textAlign: "justify",
	},
	imgStyle1 = {
		float: "left",
		margin: "10px 1rem 1rem 10px",
	},
	imgStyle2 = {
		float: "right",
		margin: "10px 10px 1rem 1rem",
	},
	section1N = {
				backgroundColor: "hsl(209, 66%, 63%)",
				padding: "0 calc(50% / 3 - 75px)",
				"box-shadow": "0px 0px 3px 6px hsl(209, 66%, 63%)",
			},
	section2N = {
				backgroundColor: "hsl(209, 86%, 95%)",
				padding: "0 calc(50% / 3 - 75px)",
				"box-shadow": "0px 0px 3px 6px hsl(209, 86%, 95%)",
			};

html.insertNode(html.createNode("section", {
	class: "row",
	css: section1N,
	style: {
		marginBottom: "-5%",
	},
	append: [
		html.createNode("h1", {
			html: "Что такое «Ключевая вода»?",
			class: "text-center",
			style: {
				color: "hsl(209, 66%, 98%)",
				margin: 0,
				padding: "1rem 10px 10px",
				fontSize: "4rem",
				lineHeight: 2,
			}
		}),
		html.createNode("div",
		{
			append: [
				html.createNode("img", {
					src: "app/media/images/img1.png",
					style: imgStyle1,
					css: {
						width: "50%",
						shapeOutside: "circle(50%)",
						clipPath: "circle(50%)",
						backgroundColor: "rgba(255,255,255,.6)",
						boxShadow: "inset hsl(209, 66%, 63%) 0px 0px 25px 5px",
					},
				}),
				html.createNode("p", {
					html: "«Ключевая вода» – динамично развивающееся предприятие с современной производственной базой, соответствующей международным стандартам. Компания прочно сохраняет за собой роль лидера регионального рынка производства и доставки питьевой воды. Такой результат стал возможным благодаря слаженной работе коллектива, восприимчивости к требованиям времени и постоянному совершенствованию качества всех процессов.",
					css: divStyle,
				})
			],
		}),
		html.createNode("h2", {
			html: "Миссия компании",
			css: {
				color: "hsl(209, 66%, 98%)",
			},
		}),
		html.createNode("img", {
			src: "app/media/images/templ.png",
			style: imgStyle2,
			css: {
				shapeOutside: "circle(50%)",
				clipPath: "circle(50%)",
				backgroundColor: "rgba(255,255,255,.6)",
				boxShadow: "inset hsl(209, 66%, 63%) 0px 0px 25px 5px",
			},
		}),
		html.createNode("p", {
			html: "Миссия компании - забота о здоровье томичей, чтобы чистая питьевая вода и лучший сервис были доступны каждому. Накопленный опыт и постоянное стремление вперед помогают компании добросовестно выполнять все возложенные на себя обязательства.",
			css: divStyle,
		}),
	]
}), html.body);

html.insertNode(html.createNode("section", {
	class: "row",
	css: section2N,
	append: [
		html.createNode("h1", {
			html: "Чистая и кристальная!",
			class: "text-center",
			style: {
				color: "hsl(209, 66%, 63%)",
				margin: 0,
				padding: "1rem 10px 10px",
				fontSize: "4rem",
				lineHeight: 2,
			}
		}),
		html.createNode("img", {
			src: "app/media/images/uran.png",
			style: imgStyle2,
			css: {
				shapeOutside: "circle(50%)",
				clipPath: "circle(50%)",
			},
		}),
		html.createNode("p", {
			html: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
			css: divStyle,
		}),
		html.createNode("h2", {
			html: "Добывается на урановых источниках!",
			css: {
				color: "hsl(209, 66%, 63%)",
				textAlign: "right",
			}
		}),
		html.createNode("p", {
			html: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
			css: divStyle,
		}),

	]
}), html.body);

html.insertNode(html.createNode("section", {
	css: section1N,
	class: "row",
	append: [
		html.createNode("h1", {
			html: "Наши преимущества",
			css: {
				margin: "2.5rem",
				textAlign: "center",
				color: "hsl(209, 66%, 98%)",
			}
		}),
		html.createNode("div", {
			css: {
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-between",
				fontSize: "2.5rem",
				color: "hsl(209, 66%, 98%)",
			},
			append: [
				html.createNode("div", {
					css: {
						display: "flex",
						flexDirection: "column",
						textAlign: "center",
						alignItems: "center",
					},
					append: [
						html.createNode("img", {
							style: {
								height: "150px",
								clipPath: "circle(50%)",
								backgroundColor: "hsla(209, 66%, 98%, .4)",
							},
							src: "app/media/images/speed-logo.png",
						}),
						html.createNode("label", {
							html: "Быстро",
						})
					]
				}),
				html.createNode("div", {
					css: {
						display: "flex",
						flexDirection: "column",
						textAlign: "center",
						alignItems: "center",
					},
					append: [
						html.createNode("img", {
							style: {
								height: "150px",
								clipPath: "circle(50%)",
								backgroundColor: "hsla(209, 66%, 98%, .4)",
							},
							src: "app/media/images/voda22.png",
						}),
						html.createNode("label", {
							html: "Качественно",
							css: {
								fontSize: "3rem",
							}
						})
					]
				}),
				html.createNode("div", {
					css: {
						display: "flex",
						flexDirection: "column",
						textAlign: "center",
						alignItems: "center",
					},
					append: [
						html.createNode("img", {
							style: {
								height: "150px",
								clipPath: "circle(50%)",
								backgroundColor: "hsla(209, 66%, 98%, .4)",
							},
							src: "app/media/images/RR5714-0002.png",
						}),
						html.createNode("label", {
							html: "Дешево",
						})
					]
				}),
			],
		}),
	],
}), html.body);


});}