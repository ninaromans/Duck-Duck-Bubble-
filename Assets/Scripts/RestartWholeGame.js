

function Start () {

}

function Update () {

	if (Input.GetButtonDown("Jump"))
	{
	Application.LoadLevel("StartScreen");
	ScoreCount.gscore = 0;
	}

}