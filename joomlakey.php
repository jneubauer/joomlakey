<?php
//no direct access
defined('_JEXEC') or die;

class PlgSystemJoomlakey extends JPlugin
{
	function onBeforeRender ()
	{
		//only going to run these in the backend for now
		//todo: figure out a way to implement separate frontend shortcuts for usability
		$app = JFactory::getApplication();
		if ($app->isSite()) {
			return;
		}
		$document = & JFactory::getDocument();
		$document->addScript(JURI::root().'plugins/system/joomlakey/mousetrap.js' );
		$document->addScript(JURI::root().'plugins/system/joomlakey/joomlakey.js' );
	}
}