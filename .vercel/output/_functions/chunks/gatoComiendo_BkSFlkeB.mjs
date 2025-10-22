const imgGatoComiendo = new Proxy({"src":"/_astro/gatoComiendo.BtaVcC1q.jpg","width":600,"height":372,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/Nicolás/Desktop/TODO/SOFTWARES/PROGRAMACIÓN/VISUAL STUDIO CODE/Mis páginas web/agathaGatos/src/assets/img/gatoComiendo.jpg";
							}
							
							return target[name];
						}
					});

export { imgGatoComiendo as i };
