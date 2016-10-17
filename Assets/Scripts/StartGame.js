

function Start () {

}

function Update () {

	if (Input.GetButtonDown("Jump"))
	{
	Application.LoadLevel("MainScene1");
	ScoreCount.gscore = 0;
	}

}