/*
 * get layout information
*/

var layout = getLayout() {
    var match = RegExp('[?&]' + 'layout' + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

/* 
 * Form Controls
 *
 * only make these controls available when we are in an item edit layout
 * we can use the layout parameter here, since layout is set every time
 * an edit form is opened, it's just simpler than the logic below for the
 * item controls.
*/

if (layout == 'edit') {

	// Save open form | Ctrl + s
	Mousetrap.bind('ctrl+s', function(e) {
		var toolbar = document.getElementById("toolbar-apply");
		toolbar.getElementsByClassName("btn-success")[0].click();
	});

	// Save & Close open form | Ctrl + d
	Mousetrap.bind('ctrl+d', function(e) {
		var toolbar = document.getElementById("toolbar-save");
		toolbar.getElementsByClassName("btn-small")[0].click();
	});

	// Save & New open form | Ctrl + g
	Mousetrap.bind('ctrl+g', function(e) {
		var toolbar = document.getElementById("toolbar-save-new");
		toolbar.getElementsByClassName("btn-small")[0].click();
	});

	// Cancel open form | Ctrl + k
	Mousetrap.bind('ctrl+k', function(e) {
		var toolbar = document.getElementById("toolbar-cancel");
		toolbar.getElementsByClassName("btn-small")[0].click();
	});
	
}

/* 
 * Item Controls
 *
 * how to make these only available in items view? admin navigation doesn't specify layout all the time
 *
 * since a user can navigate into a component (e.g., com_content) without the layout being explicitly
 * set, we have to check this differently. The most efficient way I can think for this is, if the
 * standard toolbar buttons exist, then we'll allow the shortcut. So, if, on the page, a div with the
 * id of "toolbar-new" exists, then we'll allow the "New" shortcut to be used. This should also provide
 * a standard way of letting 3PD extensions use these shortcuts as well, as long as they use the normal
 * toolbar buttons (which, AFAIK, most already do)
*/

// New | Ctrl + q
if(document.getElementById('toolbar-new')!=undefined) {
	Mousetrap.bind('ctrl+q', function(e) {
		var toolbar = document.getElementById("toolbar-new");
		toolbar.getElementsByClassName("btn-success")[0].click();
	});
}

	// New menu item | Ctrl + n
	Mousetrap.bind('ctrl+n', function(e) {
		window.open("index.php?option=com_menus&view=item&layout=edit","_self");
	});

	// New module | Ctrl + m
	Mousetrap.bind('ctrl+m', function(e) {
		window.open("index.php?option=com_modules&view=select","_self");
	});
	
}

// Control Panel | Ctrl + j
Mousetrap.bind('ctrl+j', function(e) {
    window.open("index.php","_self");
});

// Help | Ctrl + h
Mousetrap.bind('ctrl+h', function(e) {
    var helpdiv = document.createElement('div');
	helpdiv.id = 'helpdiv';
	document.getElementsByName('body')[0].appendChild(helpdiv);
});

// Publish

// Unpublish

// Trash