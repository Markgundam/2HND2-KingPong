#pragma strict

var spherespeed:int;

function Start () {

}

function Update () {
	transform.Translate(Vector3.up * -1 * spherespeed * Time.deltaTime);
}


function OnBecameInvisible()
{
	Destroy(this.gameObject);
}
