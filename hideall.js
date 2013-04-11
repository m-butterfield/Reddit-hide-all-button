/*
 * Adds button to the top of reddit that hides ALL links 
 */

// only add the button if there are links to hide
if (document.documentElement.innerHTML.indexOf("hide-button") !== -1) {

	var hideAllButton = document.createElement('a');
	hideAllButton.setAttribute('href', '#');
	hideAllButton.setAttribute('id', 'hide-all');
	hideAllButton.innerHTML = 'hide all';
	hideAllButton.addEventListener('click', function(event) {
		
		for (var i = 0; i < document.getElementsByClassName('hide-button').length; i++) {
			document.getElementsByClassName('hide-button').item(i).getElementsByTagName("A")[0].click();
		}
		
	}, true);
	
	var newNode = document.createElement('li');
	newNode.appendChild(hideAllButton);
	
	var tabMenu = document.getElementsByClassName('tabmenu')[0];
	
	tabMenu.insertBefore(newNode, null);

}