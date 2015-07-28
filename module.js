/* --------------------------------------------
   Javascript for Web Dock

Author:		Camden Rudisill	
License: 	MIT License (see LICENSE file)
----------------------------------------------- */

var dockModule = (function() {

			var dock = {

				init: function() {
					this.cacheDom();
					this.addTitle();
				},
				// cache dom searches so they aren't repeated
				cacheDom: function() {
					this.elements = document.getElementsByClassName('dock-item'),
					this.label = document.getElementsByClassName('label'),
					this.title = document.createElement('span'),
					this.folder = document.createElement('span'),
					this.numOfDockItems = [],
					this.downArrow = document.createElement("div");
					this.downArrow.className = "down-arrow";
				},

				addTitle: function() {
					this.elLength = this.elements.length;
					// store each dock icon's id in an array
					// ids are used as the title of the dock icon
					for (var i = 0; i < this.elLength; i++) {
						this.numOfDockItems.push(this.elements[i].id);
						this.dockLength = this.numOfDockItems.length;
					}
					
					// iterate over the array of ids to add title on hover
					for (var i = 0; i < this.dockLength; i++) {

						// add labels to icons when moused over
						this.elements[i].addEventListener('mouseover', (function(i) {
							return function() {
								if (this.label[i].nextSibling.firstChild === this.folder) {
									this.label[i].nextSibling.removeChild(this.folder);
								} else {
									title.innerHTML = this.numOfDockItems[i];
									this.label[i].appendChild(this.title);
									this.label[i].appendChild(this.downArrow);
								}
							};
						})(i), false);
					}

					// if(folder), pop up folder when icon clicked on
					this.elements[i].addEventListener('click', (function(i) {
						return function() {
							if (this.label[i].nextSibling.firstChild === this.folder) {
								this.label[i].nextSibling.removeChild(this.folder);
							} else if (this.label[i].nextSibling.className !== "folder") {
								return;
							} else {
								this.label[i].removeChild(this.title);
								this.label[i].removeChild(this.downArrow);
								this.label[i].nextSibling.appendChild(this.folder);
							}
						};
					})(i), false);
				}, 
			};
			
			dock.init();

			})();