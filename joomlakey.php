<?php
//no direct access
defined('_JEXEC') or die;

class PlgSystemJoomlakey extends JPlugin
{
	function onBeforeRender ()
	{
		$document = & JFactory::getDocument();
		$document->addScript(JURI::root().'plugins/system/joomlakey/mousetrap.js' );
		$document->addScript(JURI::root().'plugins/system/joomlakey/joomlakey.js' );
	}
}