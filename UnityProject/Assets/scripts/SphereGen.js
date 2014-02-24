#pragma strict
var redsphere:Rigidbody;
var greensphere:Rigidbody;
var yellowsphere:Rigidbody;
var bluesphere:Rigidbody;

function generatesphere () 
{

var colornumber:int;
colornumber = Random.Range(1,5);

Debug.Log(colornumber);

var xposition:float;
xposition = Random.Range(-2.5f,2.5f);

Debug.Log(xposition);

	switch(colornumber){
	
		case 1: 
			Instantiate(redsphere, Vector3(xposition,5,0),Quaternion.identity);
			break;
		case 2: 
			Instantiate(greensphere, Vector3(xposition,5,0),Quaternion.identity);
			break;
		case 3: 
			Instantiate(yellowsphere, Vector3(xposition,5,0),Quaternion.identity); 
			break;
		case 4: 
			Instantiate(bluesphere, Vector3(xposition,5,0),Quaternion.identity); 
			break;
		
	}

}

function Start () {

	InvokeRepeating("generatesphere",1.0,1.0);

}

function Update () {

}