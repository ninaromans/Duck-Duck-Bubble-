
var moveSpeed : float = 8;
var destroyZPosition : float = -6;
var enemyRandom : float = 6;
var explosion : GameObject;

function Start () {

	transform.position.x += Random.Range(enemyRandom, -enemyRandom);


}

function Update () {

	transform.position.z -= moveSpeed * Time.deltaTime;
	if (transform.position.z <= destroyZPosition)
		Destroy(gameObject);
}

function OnTriggerEnter (other : Collider)
{
	if (other.tag == "bullet")
	{
		Instantiate(explosion, transform.position, transform.rotation);
		Destroy(gameObject);
	}
}


