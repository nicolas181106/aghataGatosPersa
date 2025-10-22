const imgGatoJugando = new Proxy({"src":"/_astro/gatoPersaJugando.DXhM05gA.jpg","width":1280,"height":720,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Nicolás/Desktop/TODO/SOFTWARES/PROGRAMACIÓN/VISUAL STUDIO CODE/Mis páginas web/agathaGatos/src/assets/img/gatoPersaJugando.jpg";
							}
							
							return target[name];
						}
					});

export { imgGatoJugando as i };
