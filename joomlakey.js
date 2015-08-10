//Save open form | Ctrl + s
Mousetrap.bind('ctrl+s', function(e) {
    var toolbar = document.getElementById("toolbar-apply");
	toolbar.getElementsByClassName("btn-success")[0].click();
});

//Save & Close open form | Ctrl + d
Mousetrap.bind('ctrl+d', function(e) {
    var toolbar = document.getElementById("toolbar-save");
	toolbar.getElementsByClassName("btn-small")[0].click();
});

//Save & New open form | Ctrl + g
Mousetrap.bind('ctrl+g', function(e) {
	var toolbar = document.getElementById("toolbar-save-new");
	toolbar.getElementsByClassName("btn-small")[0].click();
});


//Cancel open form | Ctrl + k
Mousetrap.bind('ctrl+k', function(e) {
    var toolbar = document.getElementById("toolbar-cancel");
	toolbar.getElementsByClassName("btn-small")[0].click();
});

//New article | Ctrl + q
Mousetrap.bind('ctrl+q', function(e) {
    window.open("index.php?option=com_content&view=article&layout=edit","_self");
});

//New menu item | Ctrl + n
Mousetrap.bind('ctrl+n', function(e) {
	window.open("index.php?option=com_menus&view=item&layout=edit","_self");
});

//New module | Ctrl + m
Mousetrap.bind('ctrl+m', function(e) {
    window.open("index.php?option=com_modules&view=select","_self");
});

//Control Panel | Ctrl + j
Mousetrap.bind('ctrl+j', function(e) {
    window.open("index.php","_self");
});

//Help | Ctrl + h
Mousetrap.bind('ctrl+h', function(e) {
    var helpdiv = document.createElement('div');
	helpdiv.id = 'helpdiv';
	document.getElementsByName('body'[0].appendChild(helpdiv);
});

//Publish

//Unpublish

//Trash