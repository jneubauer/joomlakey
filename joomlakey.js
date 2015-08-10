/* 
 * Form Controls
 *
 * these shortcuts are available for any Joomla admin form
 * that uses the standard Joomla toolbar.
*/

// Save | Ctrl + s
if(document.getElementById('toolbar-apply')!= undefined) {
	Mousetrap.bind('ctrl+s', function(e) {
		var toolbar = document.getElementById("toolbar-apply");
		toolbar.getElementsByClassName("btn-success")[0].click();
	});
}

// Save & Close | Ctrl + d
if(document.getElementById('toolbar-save')!= undefined) {
	Mousetrap.bind('ctrl+d', function(e) {
		var toolbar = document.getElementById("toolbar-save");
		toolbar.getElementsByClassName("btn-small")[0].click();
	});
}

// Save & New | Ctrl + g
if(document.getElementById('toolbar-save-new')!= undefined) {
	Mousetrap.bind('ctrl+g', function(e) {
		var toolbar = document.getElementById("toolbar-save-new");
		toolbar.getElementsByClassName("btn-small")[0].click();
	});
}

// Cancel/Close | Ctrl + k
if(document.getElementById('toolbar-cancel')!= undefined) {
	Mousetrap.bind('ctrl+k', function(e) {
		var toolbar = document.getElementById("toolbar-cancel");
		toolbar.getElementsByClassName("btn-small")[0].click();
	});
}	

/* 
 * Item Controls
 *
 * these shortcuts are available for any Joomla admin view
 * that uses the standard Joomla toolbar for letting users
 * create new items.
*/

// New | Ctrl + n
if(document.getElementById('toolbar-new')!= undefined) {
	Mousetrap.bind('ctrl+n', function(e) {
		var toolbar = document.getElementById("toolbar-new");
		toolbar.getElementsByClassName("btn-success")[0].click();
	});
}

/* 
 * Admin Shortcuts
 *
 * these shortcuts are available in the Joomla administrator
 * application on any page.
*/

// Control Panel | Ctrl + h
Mousetrap.bind('ctrl+h', function(e) {
    window.open("index.php","_self");
});

// Help | Ctrl + ?
Mousetrap.bind('ctrl+?', function(e) {
    var helpdiv = document.createElement('div');
	helpdiv.id = 'helpdiv';
	document.getElementsByName('body')[0].appendChild(helpdiv);
});

// Publish

// Unpublish

// Trash