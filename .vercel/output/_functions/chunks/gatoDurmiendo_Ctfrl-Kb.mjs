const imgDurmiendo = new Proxy({"src":"/_astro/gatoDurmiendo.gnokSiAP.jpg","width":736,"height":552,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Nicolás/Desktop/TODO/SOFTWARES/PROGRAMACIÓN/VISUAL STUDIO CODE/Mis páginas web/agathaGatos/src/assets/img/gatoDurmiendo.jpg";
							}
							
							return target[name];
						}
					});

export { imgDurmiendo as i };
