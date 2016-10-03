<?php
class controller_acm extends controller
{
    function __construct()
    {
        parent::__construct();
        $this->model = new model_acm();
    }

    function index()
    {
    	$viewdata = $this->do_default_viewdata();		
		$content = $this->model->get_viewdata();
		$viewdata["pagetitle"] = "АСМ";
        $viewdata["content"] = $this->view->show_view("view_acm", $content, FALSE, HOMEDIR."/js/js_script.js");	
        $this->view->show_view('view_template', $viewdata, true);

    }
}
?>