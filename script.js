colors_list2 = ['#d63942', '#94aab7', '#f4d546', '#9dab4c', '#bc8298', '#67be94', '#e87439', '#e87439', '#EBCA25', '#4B5CA1', '#E98A92', '#6DBA8E', '#275680', '#D64234', '#BF3E39', '#F3D247']
colors_list = ['#CB3C34', '#DA3A54', '#D8741C', '#F2AD11', '#FFE047', '#9AB652', '#196B3A', '#73B5CD', '#55BF8F', '#DE767F', '#8B3A4B', '#423B67', '#CB3C34']
var width = 25

function pickColor(){
    rand_int = Math.floor((Math.random() * 100) + 1)
    if (rand_int < 65) {
    	rand_index = Math.floor((Math.random() * colors_list.length) + 1)
        box_color = colors_list[rand_index]
    }
    else
    {
    	box_color = '#000000'
    }
        
    return box_color
}

function paint() {
	var numCols = window.innerWidth/width;
	var numRows = window.innerHeight/width
	var x = 0;
	var y = 0;
	for (r = 0; r < numRows; r++){
		for (c = 0; c < numCols; c++) { 
    	makeBox(ctx, pickColor(), x, y);
    	x = x + width;
		}
		x = 0;
		y = y + width;
	}
	
}

function makeBox(object, color_name, x, y){
    object.fillStyle = color_name;
    object.fillRect(x, y, width, width);
}

function reload(){
	//alert("hi")
	location.reload();
}

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;	

paint();
