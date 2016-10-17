
var playerSpeed : float = 12;
var maxWidth : float = 17;
var bullet : GameObject;
var bulletSpawn : Transform;
var explosion : GameObject;
var restarter : GameObject;

function Update () {

//Move side to side
	transform.position.x += Input.GetAxis("Horizontal") * playerSpeed * Time.deltaTime;
		if (transform.position.x > maxWidth)
			transform.position.x = maxWidth;
		if (transform.position.x < -maxWidth)
			transform.position.x = -maxWidth;

//Spacebar = shoot
		if (Input.GetButtonDown("Jump"))
		 	Instantiate(bullet, bulletSpawn.position, bulletSpawn.rotation);
}

function OnTriggerEnter (other : Collider)
{
	if (other.tag == "enemy")
	{
		Instantiate(explosion, transform.position, transform.rotation);
		Instantiate(restarter, transform.position, transform.rotation);
		Destroy(gameObject);
	}
}

