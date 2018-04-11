window.onload = function(){
	// Add text-logo
	var text_logo = '<h1 class="text-logo" id="text-logo">Aldi Fajrin - Blog Post</h1>';
	var logoContainer = document.getElementById('logo');
	logoContainer.innerHTML += text_logo;

	// Add list menu
	var menu = [
		{name: 'Home', link: 'home.html'} , 
		{name: 'Contact', link: 'contact.html'}, 
		{name: 'Posts', link: 'posts.html'}
	]
	var addedMenu = '';
	var menu_lenght = Object.keys(menu).length
	var menuContainer = document.getElementById('menu');

	for(var i = 0; i < menu_lenght; i++){
		addedMenu = '<a href="' + menu[i].link + '" class="menu-link">' + menu[i].name + '</a>'
		menuContainer.innerHTML += addedMenu;
		if(i < (menu_lenght - 1)){
			menuContainer.innerHTML += ' | ';
		}
		console.log("Menu : " + addedMenu);
	}


}