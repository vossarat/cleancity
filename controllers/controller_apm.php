<?php
class controller_apm extends controller
{
    function __construct()
    {
        parent::__construct();
        $this->model = new model_apm();
    }

    function index()
    {
    	$viewdata = $this->do_default_viewdata();		
		$content = $this->model->get_viewdata();
		$viewdata["pagetitle"] = "АПМ";
        $viewdata["content"] = $this->view->show_view("view_apm", $content, FALSE, HOMEDIR."/js/js_apm.js");		
        $this->view->show_view('view_template', $viewdata, true);

    }
}
?>