﻿
var enemy : GameObject;
var timeBetween : float = 2;
var trackTimer : float;


function Start () {

}

function Update () {

	trackTimer -= Time.deltaTime;
	if (trackTimer <= 0)
	{
		Instantiate(enemy, transform.position, transform.rotation);
		trackTimer = timeBetween;
	}

}