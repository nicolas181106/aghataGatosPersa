const slider4 = new Proxy({"src":"/_astro/oddie.DIqGuIau.jpg","width":1201,"height":1445,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Nicolás/Desktop/TODO/SOFTWARES/PROGRAMACIÓN/VISUAL STUDIO CODE/Mis páginas web/agathaGatos/src/assets/img/oddie.jpg";
							}
							
							return target[name];
						}
					});

export { slider4 as s };
