
static var gscore : int=0;
var style : GUIStyle;

function OnGUI() {

	GUI.Label (Rect (20,10,200,40), ("Score: " + gscore), style);

}