#pragma strict

static var score:int;

function Start () {
	score = 0;
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
	//mouse control.
	transform.position.x = Camera.main.ScreenToWorldPoint(Input.mousePosition).x;

}

function OnTriggerEnter (ball:Collider) {
	
	if(ball.gameObject.tag == "Redsphere") 
	{
		this.score = score+2;
		Destroy(ball.gameObject);
	}
	
	if(ball.gameObject.tag == "Bluesphere") 
	{
		this.score++;
		Destroy(ball.gameObject);
	}
	
	if(ball.gameObject.tag == "Greensphere") 
	{
		this.score = score-1;
		Destroy(ball.gameObject);
	}
	
	if(ball.gameObject.tag == "Yellowsphere") 
	{
		this.score++;
		Destroy(ball.gameObject);
	}
}

function OnGUI () 
{
	
	GUI.color = Color.white;
	GUI.Label(Rect(2,3,100,50),"Score:"+score);

}