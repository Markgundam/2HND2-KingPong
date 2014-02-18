#pragma strict

function Start () {

}

function Update () {

	var leftmostonscreen:float;
	var rightmostonscreen:float;
	
	leftmostonscreen = Camera.main.ScreenToWorldPoint(Vector3(0,0,0)).x;
	rightmostonscreen = Camera.main.ScreenToWorldPoint(Vector3(Screen.width,0,0)).x;

	Debug.Log(leftmostonscreen + ' ' + rightmostonscreen);

	if (transform.position.x < leftmostonscreen)
	{
		transform.position.x = rightmostonscreen;
	}
	
	if (transform.position.x > rightmostonscreen)
	{
		transform.position.x = leftmostonscreen;
	}

	transform.Translate(Vector3.right * 5 * Input.GetAxis("Horizontal") * Time.deltaTime);


}