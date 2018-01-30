(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004061").s().p("A/PGgIAAqAQDShCErgmQJZhMHECNQEyBfGvhOQCAgYDDgyQDDgzA3gKQEbgzEKAaQFbAhDnCkIAAJxg");
	this.shape.setTransform(0,0,1.569,1.569);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-313.7,-65.2,627.5,130.6);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#004061").s().p("A/PGgIAAqAQDShCErgmQJZhMHECNQEyBfGvhOQCAgYDDgyQDDgzA3gKQEbgzEKAaQFbAhDnCkIAAJxg");
	this.shape.setTransform(0,0,1.569,1.569);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-313.7,-65.2,627.5,130.6);


(lib.Tween6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#005771").s().p("A/PHVIAAs8QCZgxDTggQGkhAEeBTQFqBpEuAgQGWAqEGhdQFSh6GSgIQHNgJGMCWIAAMZg");
	this.shape.setTransform(0,0,1.569,1.569);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-313.7,-73.5,627.5,147.1);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#005771").s().p("A/PHVIAAs8QCZgxDTggQGkhAEeBTQFqBpEuAgQGWAqEGhdQFSh6GSgIQHNgJGMCWIAAMZg");
	this.shape.setTransform(0,0,1.569,1.569);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-313.7,-73.5,627.5,147.1);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#462C1D").s().p("AiDgQIAFgnIECBZIgIAWg");
	this.shape.setTransform(-88,23.9,1.569,1.569);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#462C1D").s().p("AguBzIAKhlIAtgOIgFh7IAgADIAKD0g");
	this.shape_1.setTransform(-106,38.9,1.569,1.569);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#462C1D").s().p("AjUgFIADgPIGmACIgEAng");
	this.shape_2.setTransform(-20,24.9,1.569,1.569);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#462C1D").s().p("AjXAUIGxg4IgEAnImuAig");
	this.shape_3.setTransform(-9.1,-76.5,1.569,1.569);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#462C1D").s().p("Ag4GTIBOsoIAjADIhOMog");
	this.shape_4.setTransform(17.1,-16.6,1.569,1.569);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#462C1D").s().p("AgbAIIACgUIA1AFIgCAUg");
	this.shape_5.setTransform(-96.4,54.5,1.569,1.569);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#462C1D").s().p("AgPAZIgBg0IAbANIAGAqg");
	this.shape_6.setTransform(-92.6,27.4,1.569,1.569);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#462C1D").s().p("Ai7CUQkEgii+hKIgljQQElBeIagnQENgTDTgmIAlADIjYFEQiRAOiQAAQizAAixgXg");
	this.shape_7.setTransform(7.6,55.4,1.569,1.569);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BA8D66").s().p("AhcEbIivAZQBhiigIjkQgChIgNhGIgMg4ICkAIQCsAAAsglQB/CHgvDiQgSBYgoBLQglBGglAZQghgri2AQg");
	this.shape_8.setTransform(-11,-26.7,1.569,1.569);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#9A6948").s().p("AgLAOIgGgJIAKgYIAZAEIAAAPQgCAQgKADIgGABQgGAAgFgGg");
	this.shape_9.setTransform(-71.4,26.8,1.569,1.569);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#BA8D66").s().p("AgoATQgXgFAJgUQAIgTAOgDQAJgCApATIAoARIgLAXQg0gDgjgHg");
	this.shape_10.setTransform(-81,23,1.569,1.569);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B8B3B1").s().p("AgvA4QgPgOAGgPQAKgXAQgUQAYggAcgOQAIgEAPANQAQAOgDANQgDANgdAeQgWAXgVATQgGAFgHAAQgIAAgJgIg");
	this.shape_11.setTransform(-81.1,14.6,1.569,1.569);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#68340E").s().p("Ag8BVQgIgfAGhDQAIhPAcgFIBaATIACAcQAAAigNAcQgPAhgDA1IgEAAQg8AAgfgNg");
	this.shape_12.setTransform(-70.1,21.4,1.569,1.569);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#9A6948").s().p("AgCARIgIgDIgEgWIASgJIAIALQAGAMgGAHQgEAFgGAAIgEgBg");
	this.shape_13.setTransform(-55.7,37.5,1.569,1.569);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#BA8D66").s().p("AgYgQQgGgMAQgFQAPgEAGAHQAKAMAKAxIgSAFQgVgdgMgXg");
	this.shape_14.setTransform(-59,31.2,1.569,1.569);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B8B3B1").s().p("AgQAxQgHgTgDgYQgEggAJgaQACgHASgCQARgBAGAKQAGAKABAkQAAAdgDAWQgBAQgTABIgBAAQgQAAgFgNg");
	this.shape_15.setTransform(-61.7,18.1,1.569,1.569);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E3E2E1").s().p("AggAJQAFgQAPgFQAMgEAIACQAJADAKALQAJALgFADQgGADgXgDIgRACQgTAAACgHg");
	this.shape_16.setTransform(-65.5,-8,1.569,1.569);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E3E2E1").s().p("AgGAkIgTgVIARg1IAfADIgBAbQAAAdAEASg");
	this.shape_17.setTransform(-69.1,-0.3,1.569,1.569);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D7B296").s().p("AgGAwQgOgCgIgPQgJgQADgTQADgUAMgMQAMgNAOACQAOACAIAQQAJAPgDATQgDAUgMAMQgKALgLAAIgFAAg");
	this.shape_18.setTransform(-65.8,-2.2,1.569,1.569);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D7B296").s().p("AgoAMQAMgIAQgPIAMgPIAbAZIAEAPIAKAMg");
	this.shape_19.setTransform(-70.6,4.2,1.569,1.569);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-113.3,-82.2,226.8,164.5);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#462C1D").s().p("AiDgQIAFgnIECBZIgIAWg");
	this.shape.setTransform(-88,23.9,1.569,1.569);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#462C1D").s().p("AguBzIAKhlIAtgOIgFh7IAgADIAKD0g");
	this.shape_1.setTransform(-106,38.9,1.569,1.569);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#462C1D").s().p("AjUgFIADgPIGmACIgEAng");
	this.shape_2.setTransform(-20,24.9,1.569,1.569);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#462C1D").s().p("AjXAUIGxg4IgEAnImuAig");
	this.shape_3.setTransform(-9.1,-76.5,1.569,1.569);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#462C1D").s().p("Ag4GTIBOsoIAjADIhOMog");
	this.shape_4.setTransform(17.1,-16.6,1.569,1.569);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#462C1D").s().p("AgbAIIACgUIA1AFIgCAUg");
	this.shape_5.setTransform(-96.4,54.5,1.569,1.569);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#462C1D").s().p("AgPAZIgBg0IAbANIAGAqg");
	this.shape_6.setTransform(-92.6,27.4,1.569,1.569);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#462C1D").s().p("Ai7CUQkEgii+hKIgljQQElBeIagnQENgTDTgmIAlADIjYFEQiRAOiQAAQizAAixgXg");
	this.shape_7.setTransform(7.6,55.4,1.569,1.569);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BA8D66").s().p("AhcEbIivAZQBhiigIjkQgChIgNhGIgMg4ICkAIQCsAAAsglQB/CHgvDiQgSBYgoBLQglBGglAZQghgri2AQg");
	this.shape_8.setTransform(-11,-26.7,1.569,1.569);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#9A6948").s().p("AgLAOIgGgJIAKgYIAZAEIAAAPQgCAQgKADIgGABQgGAAgFgGg");
	this.shape_9.setTransform(-71.4,26.8,1.569,1.569);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#BA8D66").s().p("AgoATQgXgFAJgUQAIgTAOgDQAJgCApATIAoARIgLAXQg0gDgjgHg");
	this.shape_10.setTransform(-81,23,1.569,1.569);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#B8B3B1").s().p("AgvA4QgPgOAGgPQAKgXAQgUQAYggAcgOQAIgEAPANQAQAOgDANQgDANgdAeQgWAXgVATQgGAFgHAAQgIAAgJgIg");
	this.shape_11.setTransform(-81.1,14.6,1.569,1.569);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#68340E").s().p("Ag8BVQgIgfAGhDQAIhPAcgFIBaATIACAcQAAAigNAcQgPAhgDA1IgEAAQg8AAgfgNg");
	this.shape_12.setTransform(-70.1,21.4,1.569,1.569);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#9A6948").s().p("AgCARIgIgDIgEgWIASgJIAIALQAGAMgGAHQgEAFgGAAIgEgBg");
	this.shape_13.setTransform(-55.7,37.5,1.569,1.569);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#BA8D66").s().p("AgYgQQgGgMAQgFQAPgEAGAHQAKAMAKAxIgSAFQgVgdgMgXg");
	this.shape_14.setTransform(-59,31.2,1.569,1.569);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B8B3B1").s().p("AgQAxQgHgTgDgYQgEggAJgaQACgHASgCQARgBAGAKQAGAKABAkQAAAdgDAWQgBAQgTABIgBAAQgQAAgFgNg");
	this.shape_15.setTransform(-61.7,18.1,1.569,1.569);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E3E2E1").s().p("AggAJQAFgQAPgFQAMgEAIACQAJADAKALQAJALgFADQgGADgXgDIgRACQgTAAACgHg");
	this.shape_16.setTransform(-65.5,-8,1.569,1.569);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E3E2E1").s().p("AgGAkIgTgVIARg1IAfADIgBAbQAAAdAEASg");
	this.shape_17.setTransform(-69.1,-0.3,1.569,1.569);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D7B296").s().p("AgGAwQgOgCgIgPQgJgQADgTQADgUAMgMQAMgNAOACQAOACAIAQQAJAPgDATQgDAUgMAMQgKALgLAAIgFAAg");
	this.shape_18.setTransform(-65.8,-2.2,1.569,1.569);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D7B296").s().p("AgoAMQAMgIAQgPIAMgPIAbAZIAEAPIAKAMg");
	this.shape_19.setTransform(-70.6,4.2,1.569,1.569);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-113.3,-82.2,226.8,164.5);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmlEpQhChCAAhbQAAgQAEgVQgmgJgYgeQgZgfABglQAAgvAgggQAhgiAuAAQARABARAFIAAgKQAAhjBGhGQBGhHBjAAQAwAAAsATQArARAhAhQAJgWATgMQATgOAYAAQAaAAAUAPQAUAPAIAXQAegJAgAAQA4AAAyAcQAvAaAdAvQAfgSAkAAQA3AAAmAnQAnAlAAA3QAAAlgTAeQgSAdgfASQADAOAAASQAABchABAQhAA/hbABQgigBgggJQgIAXgUAQQgVAPgZAAQgbgBgUgPQgVgPgHgZQguAZg2AAQgjAAgigLQgfAkgrATQgsAVgxAAQhcAAhBhBg");
	this.shape.setTransform(-231.3,32.7,1.569,1.569);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AovHMQhvhvAAicIAAgQQgaAIgbAAQhJAAgzgzQg0g0AAhJQAAg9AngwQAmgwA7gNQgFggAAgaQAAiRBnhnQBnhnCRAAQBNAABGAhQBDAfAyA4QA2gRA2AAQBTAABLAnQAMgmAggYQAhgZApAAQApAAAgAYQAgAYANAlQAygQA2AAQCPAABlBlQBlBlAACPQAAAZgEAbQAwAbAdAvQAdAxAAA5QAABWg9A8Qg8A9hWAAQg4AAgygdQguBJhKArQhOAshZAAQgyAAgwgOQgMAlggAXQggAXgpAAQglAAgfgVQgegUgOgiQg1AzhDAcQhFAdhMAAQicAAhvhvg");
	this.shape_1.setTransform(179.6,0,1.569,1.569);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320.7,-89.5,641.5,179.1);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AmlEpQhChCAAhbQAAgQAEgVQgmgJgYgeQgZgfABglQAAgvAgggQAhgiAuAAQARABARAFIAAgKQAAhjBGhGQBGhHBjAAQAwAAAsATQArARAhAhQAJgWATgMQATgOAYAAQAaAAAUAPQAUAPAIAXQAegJAgAAQA4AAAyAcQAvAaAdAvQAfgSAkAAQA3AAAmAnQAnAlAAA3QAAAlgTAeQgSAdgfASQADAOAAASQAABchABAQhAA/hbABQgigBgggJQgIAXgUAQQgVAPgZAAQgbgBgUgPQgVgPgHgZQguAZg2AAQgjAAgigLQgfAkgrATQgsAVgxAAQhcAAhBhBg");
	this.shape.setTransform(-231.3,32.7,1.569,1.569);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AovHMQhvhvAAicIAAgQQgaAIgbAAQhJAAgzgzQg0g0AAhJQAAg9AngwQAmgwA7gNQgFggAAgaQAAiRBnhnQBnhnCRAAQBNAABGAhQBDAfAyA4QA2gRA2AAQBTAABLAnQAMgmAggYQAhgZApAAQApAAAgAYQAgAYANAlQAygQA2AAQCPAABlBlQBlBlAACPQAAAZgEAbQAwAbAdAvQAdAxAAA5QAABWg9A8Qg8A9hWAAQg4AAgygdQguBJhKArQhOAshZAAQgyAAgwgOQgMAlggAXQggAXgpAAQglAAgfgVQgegUgOgiQg1AzhDAcQhFAdhMAAQicAAhvhvg");
	this.shape_1.setTransform(179.6,0,1.569,1.569);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-320.7,-89.5,641.5,179.1);


// stage content:
(lib.Boatanimationbetter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Clouds
	this.instance = new lib.Tween1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(877.9,15.1);

	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-336.9,11.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},215).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,x:-336.9,y:11.5},215).wait(1));

	// Sea_front
	this.instance_2 = new lib.Tween7("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(282.4,362.7);

	this.instance_3 = new lib.Tween8("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(282.4,362.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_2}]},95).to({state:[{t:this.instance_3}]},120).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:292.7,y:356.9},95).to({_off:true,x:282.4,y:362.7},120).wait(1));

	// Boat
	this.instance_4 = new lib.Tween3("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(264.1,257.6);

	this.instance_5 = new lib.Tween4("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(264.1,257.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_4}]},95).to({state:[{t:this.instance_5}]},120).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:305.5},95).to({_off:true,x:264.1},120).wait(1));

	// Sea
	this.instance_6 = new lib.Tween5("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(282.4,354.4);

	this.instance_7 = new lib.Tween6("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(282.4,354.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_6}]},95).to({state:[{t:this.instance_7}]},120).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({x:266.3,y:359},95).to({_off:true,x:282.4,y:354.4},120).wait(1));

	// Mountains
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgtCVIgeBFIgdhFIhEBfIgeheIhrBcIgChEIDTmEIBDgfIDGEgICLBqIAIAsIhdgsIAEBCIhNhCIgIBDIhPhDIgjBhg");
	this.shape.setTransform(417.8,158.1,1.569,1.569);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#272623").s().p("AhpG6IgVidIipjMIgSiuIiDisIgTiwIA6AAIAmAHIAjgHIAsAEIApgEIDJCZIEsD6IAnCPICNBbIAeD2g");
	this.shape_1.setTransform(504.5,250.7,1.569,1.569);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3B3B3B").s().p("AsBG6IAjidICWigIBoizIEWicIC4iVIAdg4IB+gaIA2AIIAcgIIAdAPIAegPIBKAGIAfgGIAdAAIATCwICDCsIASCuICpDMIAVCdg");
	this.shape_2.setTransform(367.1,250.7,1.569,1.569);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},215).wait(1));

	// Sky
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#79BCE9","#7CBEEA","#87C3EB","#98CBEE","#B0D7F2","#CEE6F7","#F1F8FD","#FFFFFF"],[0,0.318,0.494,0.631,0.757,0.867,0.965,1],0,-145.9,0,143.4).s().p("A/PXcMAAAgu3MA+fAAAMAAAAu3g");
	this.shape_3.setTransform(282.4,192.6,1.569,1.569);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(216));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(243.7,125.5,1230,502.5);
// library properties:
lib.properties = {
	id: '1C3EFEE236EC8D429C6F136759EAA4AB',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['1C3EFEE236EC8D429C6F136759EAA4AB'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;