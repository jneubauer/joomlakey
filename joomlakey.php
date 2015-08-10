<?php
//no direct access
defined('_JEXEC') or die;

class PlgJoomlaKey extends JPlugin
{
	public function onContentBeforeDisplay ($context, &$row, &$params, $page=0))
	{
		//only going to run these in the backend for now
		if ($app->isSite()) {
			return;
		}
		$document = JFactory::getDocument();
		$document->addScript(JUri::root().'plugins/system/joomlakey/joomlakey.js' );
	}
}