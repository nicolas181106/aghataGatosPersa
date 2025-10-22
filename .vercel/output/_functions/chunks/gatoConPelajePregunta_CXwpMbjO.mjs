const imgGatoPelaje = new Proxy({"src":"/_astro/gatoConPelajePregunta.CmM2JnE9.jpg","width":510,"height":510,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Nicolás/Desktop/TODO/SOFTWARES/PROGRAMACIÓN/VISUAL STUDIO CODE/Mis páginas web/agathaGatos/src/assets/img/gatoConPelajePregunta.jpg";
							}
							
							return target[name];
						}
					});

export { imgGatoPelaje as i };
