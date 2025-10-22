const blube = new Proxy({"src":"/_astro/blube.Bd56sYax.jpg","width":1912,"height":2048,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Nicolás/Desktop/TODO/SOFTWARES/PROGRAMACIÓN/VISUAL STUDIO CODE/Mis páginas web/agathaGatos/src/assets/img/blube.jpg";
							}
							
							return target[name];
						}
					});

export { blube as b };
