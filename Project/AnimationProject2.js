(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"AnimationProject2_atlas_", frames: [[2564,2166,419,259],[0,0,1280,720],[0,722,1280,720],[0,1444,1280,720],[1282,1444,1280,720],[0,2166,1280,720],[1282,0,1280,720],[0,2888,1280,720],[1282,2166,1280,720],[1282,722,1280,720],[2564,0,1280,720],[2564,1444,1280,720],[1282,2888,1280,720],[2564,3077,320,323],[2564,2752,320,323],[2564,722,1280,720],[2886,2731,100,150],[2988,2318,100,150],[2988,2470,100,150],[3087,2166,100,150],[2886,2579,100,150],[2972,2883,100,150],[2666,3402,100,150],[2870,3402,100,150],[2886,2427,100,150],[2985,2166,100,150],[2564,3402,100,150],[2768,3402,100,150],[2564,2427,320,323]]}
];


// symbols:



(lib.Arrow = function() {
	this.spriteSheet = ss["AnimationProject2_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.BackGround = function() {
	this.spriteSheet = ss["AnimationProject2_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.BackGround1 = function() {
	this.spriteSheet = ss["AnimationProject2_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.BackGround2 = function() {
	this.spriteSheet = ss["AnimationProject2_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.BackGround3 = function() {
	this.spriteSheet = ss["AnimationProject2_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.BackGround4 = function() {
	this.spriteSheet = ss["AnimationProject2_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.BackGround5 = function() {
	this.spriteSheet = ss["AnimationProject2_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.BackGround6 = function() {
	this.spriteSheet = ss["AnimationProject2_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.BackGround7 = function() {
	this.spriteSheet = ss["AnimationProject2_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.BackGround8Light = function() {
	this.spriteSheet = ss["AnimationProject2_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.BackGround9 = function() {
	this.spriteSheet = ss["AnimationProject2_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.BackGroundEx1 = function() {
	this.spriteSheet = ss["AnimationProject2_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.BackGroundEx2 = function() {
	this.spriteSheet = ss["AnimationProject2_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.BlueShield = function() {
	this.spriteSheet = ss["AnimationProject2_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Coin = function() {
	this.spriteSheet = ss["AnimationProject2_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Exit = function() {
	this.spriteSheet = ss["AnimationProject2_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Player1 = function() {
	this.spriteSheet = ss["AnimationProject2_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Player2 = function() {
	this.spriteSheet = ss["AnimationProject2_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Player3 = function() {
	this.spriteSheet = ss["AnimationProject2_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.Player4 = function() {
	this.spriteSheet = ss["AnimationProject2_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.PlayerBack1 = function() {
	this.spriteSheet = ss["AnimationProject2_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.PlayerBack2 = function() {
	this.spriteSheet = ss["AnimationProject2_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.PlayerBack3 = function() {
	this.spriteSheet = ss["AnimationProject2_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.PlayerBack4 = function() {
	this.spriteSheet = ss["AnimationProject2_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.PlayerLeft1 = function() {
	this.spriteSheet = ss["AnimationProject2_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.PlayerLeft2 = function() {
	this.spriteSheet = ss["AnimationProject2_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.PlayerLeft3 = function() {
	this.spriteSheet = ss["AnimationProject2_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.PlayerLeft4 = function() {
	this.spriteSheet = ss["AnimationProject2_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.RedShield = function() {
	this.spriteSheet = ss["AnimationProject2_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Scene_1_textbox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// textbox
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("Egr9gbvMBX7AAAQBkAAAABkMAAAA0XQAABkhkAAMhX7AAAQhkAAAAhkMAAAg0XQAAhkBkAAg");
	this.shape.setTransform(662.2,316.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Egr9AbwQhkAAAAhkMAAAg0XQAAhkBkAAMBX7AAAQBkAAAABkMAAAA0XQAABkhkAAg");
	this.shape_1.setTransform(662.2,316.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(5,1,1).p("Egr9gewMBX7AAAQBkAAAABvMAAAA6DQAABvhkAAMhX7AAAQhkAAAAhvMAAAg6DQAAhvBkAAg");
	this.shape_2.setTransform(662.2,293.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Egr9AexQhkAAAAhvMAAAg6DQAAhvBkAAMBX7AAAQBkAAAABvMAAAA6DQAABvhkAAg");
	this.shape_3.setTransform(662.2,293.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(5,1,1).p("EgvMgjAMBeYAAAQBsAAAAB+MAAABCEQAAB/hsAAMheYAAAQhrAAAAh/MAAAhCEQAAh+BrAAg");
	this.shape_4.setTransform(662.3,270.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("EgvMAjBQhrAAAAh/MAAAhCEQAAh+BrAAMBeYAAAQBsAAAAB+MAAABCEQAAB/hsAAg");
	this.shape_5.setTransform(662.3,270.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(5,1,1).p("Eg4TglvMBwmAAAQCBAAAACIMAAABHPQAACIiBAAMhwmAAAQiAAAAAiIMAAAhHPQAAiICAAAg");
	this.shape_6.setTransform(674,293.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Eg4TAlwQiAAAAAiIMAAAhHPQAAiICAAAMBwmAAAQCBAAAACIMAAABHPQAACIiBAAg");
	this.shape_7.setTransform(674,293.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(5,1,1).p("Eg4TgkcMBwmAAAQCBAAAACEMAAABExQAACEiBAAMhwmAAAQiAAAAAiEMAAAhExQAAiECAAAg");
	this.shape_8.setTransform(674,283.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Eg4TAkdQiAAAAAiEMAAAhExQAAiECAAAMBwmAAAQCBAAAACEMAAABExQAACEiBAAg");
	this.shape_9.setTransform(674,283.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3110).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_text_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhnBzQgegsAAhCQAAhPAsgvQArgvA5AAQAwAAAkAoQAkAnADBPIivAAQADA+AfAlQAXAcAhAAQAUAAARgLQARgMATgdIAMAHQgaA1ggAWQgfAWgqAAQhGAAgkg2gAgWiBQgVAfAAA1IAAAMIBcAAQAAg3gFgVQgHgUgMgLQgHgGgMAAQgRAAgLARg");
	this.shape.setTransform(830.5,309.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AiRCgIAAgIICvkiIgzAAQghAAgOAGQgPAGgIANQgJANgKAiIgMAAIAAhdIEMAAIAAAJIitEgIAWAAQBAAAAdgTQAdgTAPgyIAKAAIgKBug");
	this.shape_1.setTransform(798.7,309.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAiCaQgQgNgDgaQg5A0gvAAQgcAAgSgSQgRgSgBgbQABglAfgdQAfgdBpgwIAAggQAAgkgEgJQgEgKgKgHQgLgHgNAAQgXAAgOAKQgJAGAAAIQAAAIAKAKQAMAPAAANQAAARgMAMQgMAMgVAAQgVAAgPgNQgOgNAAgSQAAgYAUgWQATgXAjgMQAjgMAlAAQAtAAAaAUQAaATAJAWQAEAPAAAzIAAB7QAAAWACAGQABAFAEADQAEADAEAAQAJAAAJgNIAKAJQgQAZgTALQgTAMgWAAQgcAAgPgNgAgtAjQgOATAAASQAAAQAMAMQAIAJAPAAQASAAAVgTIAAhqQgpAXgTAcg");
	this.shape_2.setTransform(766.9,309.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ABLDoIAAgNIAPAAQAUAAANgHQAIgFAGgLQADgJABgjIAAlWIiyGmIgIAAIi0mjIAAFFQAAAjABAHQAFASAPALQAPAKAgAAIAAANIifAAIAAgNIAFAAQAPAAAOgFQANgFAGgJQAIgJADgQIABgjIAAkkQAAgjgEgJQgDgJgMgGQgMgHgTAAIgPAAIAAgNIC9AAICCExIB+kxIC8AAIAAANIgPAAQgUAAgNAHQgJAFgEALQgEAIAAAjIAAEwQAAAkAEAJQADAJAMAHQAMAGATAAIAPAAIAAANg");
	this.shape_3.setTransform(715.4,302.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgiDMQgVgSgGgUQgDgMAAgzIAAisIgqAAIAAgMQArgeAfghQAegiAVgpIAMAAIAAB1IBMAAIAAAhIhMAAIAADEQAAAcACAIQADAIAGAGQAHAEAFAAQAWAAAUgiIALAIQgcBCg+AAQgeAAgVgRg");
	this.shape_4.setTransform(653.5,303.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag3CbQgKgEgEAAQgLAAgIARIgLAAIgFhzIAMAAQAPAuAbAWQAaAXAYAAQAPAAALgKQAKgKAAgPQAAgQgKgMQgKgMgjgYQg0glgPgSQgXgcAAgiQAAglAagdQAZgeAwAAQAaAAAYAMQAJAFAFAAQAHAAADgCQAFgDAIgMIALAAIAFBtIgMAAQgVgwgVgSQgXgSgVAAQgPAAgJAKQgKAJAAAMQAAAKAHAIQAKAOAyAiQAyAiAQAXQAQAYAAAdQAAAbgOAZQgNAagYAOQgYANgdAAQgXAAgmgOg");
	this.shape_5.setTransform(628,309.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhnBzQgegsAAhCQAAhPAsgvQArgvA5AAQAwAAAkAoQAkAnADBPIivAAQADA+AfAlQAXAcAhAAQAUAAARgLQARgMATgdIAMAHQgaA1ggAWQgfAWgqAAQhGAAgkg2gAgWiBQgVAfAAA1IAAAMIBcAAQAAg3gFgVQgHgUgMgLQgHgGgMAAQgRAAgLARg");
	this.shape_6.setTransform(599.3,309.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AiIClIAAgNQAVgBAHgKQAHgKAAgqIAAivQAAgcgCgHQgEgKgGgFQgHgDgQgDIAAgMICCAAIAABIQAfgxAYgQQAYgQAWAAQATgBAMAMQALAMAAAWQAAAXgLAMQgLAMgQAAQgSAAgNgLIgQgNQgDgCgFAAQgKAAgIAHQgOAMgIAWQgKAhAAAnIABBcQAAAUACAFQADAKAIAEQAIAEATABIAAANg");
	this.shape_7.setTransform(569.7,309);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhuB3QgngzAAhDQAAhDAogzQAogzBFAAQApAAAkAVQAkAWASAnQATAoAAAuQAABEgjAuQgpA3hKAAQhHAAgngygAgciDQgNANgEAnQgEAnAABEQAAAkAFAgQAEAYAMANQAMANAQAAQAOAAALgJQANgLAEgVQAHghAAhiQAAg6gGgVQgHgWgMgKQgJgHgPAAQgQAAgMANg");
	this.shape_8.setTransform(535.9,309.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AjCDoIAAgNIAPAAQAUAAAMgHQAKgFAEgLQAEgJAAgjIAAkvQAAgkgEgJQgDgJgMgGQgLgHgUAAIgPAAIAAgNIGFAAIAACFIgNAAQgFgvgUgWQgUgXgkgJQgVgFg4AAIgqAAIAAC+IAOAAQAeAAATgJQATgJAOgWQAOgWADglIAMAAIAADoIgMAAQgGhCgdgVQgdgVgjAAIgOAAIAACNQABAkAEAJQADAJALAHQALAGATAAIAQAAIAAANg");
	this.shape_9.setTransform(496.8,302.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhnBzQgegsAAhCQAAhPAsgvQArgvA5AAQAwAAAkAoQAkAnADBPIivAAQADA+AfAlQAXAcAhAAQAUAAARgLQARgMATgdIAMAHQgaA1ggAWQgfAWgqAAQhGAAgkg2gAgWiBQgVAfAAA1IAAAMIBcAAQAAg3gFgVQgHgUgMgLQgHgGgMAAQgRAAgLARg");
	this.shape_10.setTransform(809.6,229.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAKDoIAAgNQASgCAIgLQAHgJAAgjIAAiOQgBgngCgKQgEgKgHgFQgIgGgIAAQgNAAgNAJQgNAKgPAXIAACqQgBAjAGAIQAHAMATACIAAANIiiAAIAAgNQAVgCAIgLQAGgHAAglIAAlDQAAglgHgIQgGgJgWgDIAAgNICDAAIAAC5QAagbAVgMQAVgLAYAAQAfAAAVARQAVARAIAXQAGAXAAA2IAAB8QAAAlAHAJQAHAJAUACIAAANg");
	this.shape_11.setTransform(774.3,222.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("Ah5DoIAAgNIAQAAQAUAAAMgHQAJgFAFgLQAEgJAAgjIAAlkIghAAQgvAAgWAUQgdAbgIA0IgNAAIAAh+IGfAAIAAB+IgMAAQgLgsgNgSQgOgUgXgLQgNgGghAAIgiAAIAAFkQAAAkAEAJQAEAJAMAHQALAGATAAIAQAAIAAANg");
	this.shape_12.setTransform(731.3,222.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAKClIAAgNQATgCAHgNQAGgJAAghIAAiOQAAgngDgKQgDgKgIgFQgHgHgJAAQgcABgaAqIAACqQABAkAGAJQAHAKASACIAAANIihAAIAAgNQATgCAJgLQAGgHAAglIAAizQAAglgHgJQgHgIgUgDIAAgNICBAAIAAAqQAZgcAWgMQAXgLAagBQAfAAAUASQAUARAIAaQAFATAAA3IAAB8QAAAkAGAKQAHAJAVACIAAANg");
	this.shape_13.setTransform(672.4,229.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Ah4DoIAAgNIAPAAQAUAAANgHQAJgFAEgLQAEgJAAgjIAAkvQAAgkgEgJQgDgJgMgGQgLgHgUAAIgPAAIAAgNIDxAAIAAANIgPAAQgUAAgNAHQgJAFgFAMQgEAIAAAjIAAEvQAAAkAFAJQADAJAMAHQALAGAUAAIAPAAIAAANg");
	this.shape_14.setTransform(639,222.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgiDMQgVgRgGgVQgDgMAAgzIAAisIgqAAIAAgMQArgeAfgiQAeghAVgpIAMAAIAAB1IBMAAIAAAhIhMAAIAADEQAAAcACAIQADAIAGAGQAHAEAFAAQAWAAAUghIALAHQgcBCg+AAQgeAAgVgRg");
	this.shape_15.setTransform(596.6,224.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("Ag3CbQgKgEgEAAQgLAAgHARIgMAAIgFhzIALAAQAPAuAcAWQAaAXAYAAQAPAAALgKQALgKAAgPQAAgQgLgMQgKgMgjgYQg0glgPgSQgXgcAAgiQAAglAagdQAZgeAwAAQAZAAAYAMQAKAFAGAAQAFAAAFgCQADgDAIgMIAMAAIAFBtIgLAAQgVgwgWgSQgXgSgVAAQgPAAgJAKQgKAJAAAMQAAAKAHAIQAKAOAyAiQAyAiAQAXQAQAYAAAdQAAAbgOAZQgNAagYAOQgYANgeAAQgVAAgngOg");
	this.shape_16.setTransform(571.2,229.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AhuB3QgngzAAhDQAAhDAogzQAogzBFAAQApAAAkAVQAkAWASAnQATAoAAAuQAABEgjAuQgpA3hKAAQhHAAgngygAgciDQgNANgEAnQgEAnAABEQAAAkAFAgQAEAYAMANQAMANAQAAQAOAAALgJQANgLAEgVQAHghAAhiQAAg6gGgVQgHgWgMgKQgJgHgPAAQgQAAgMANg");
	this.shape_17.setTransform(539.9,229.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AjVDoIAAgNIAPAAQAUAAAMgHQAJgFAFgLQAEgJAAgjIAAkvQAAgkgEgJQgEgJgLgGQgLgHgUAAIgPAAIAAgNID1AAIAAANIgUAAQgSAAgNAHQgJAFgFAMQgEAIAAAjIAAEmQAAAjAEAKQAEAKANAFQAIADAfAAIAoAAQAkAAAZgNQAZgNARgcQATgcAPg3IAPAAIgSCjg");
	this.shape_18.setTransform(498.5,222.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_text_1, null, null);


(lib.Scene_1_PlayerTextBox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// PlayerTextBox
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AkMlwIIZAAQBkAAAABkIAAIZQAABkhkAAIoZAAQhkAAAAhkIAAoZQAAhkBkAAg");
	this.shape.setTransform(671.7,295.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkMFxQhkAAAAhkIAAoZQAAhkBkAAIIZAAQBkAAAABkIAAIZQAABkhkAAg");
	this.shape_1.setTransform(671.7,295.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(3,1,1).p("A8YsBMA42AAAQCcAAAACiIAAS/QAACiicAAMg42AAAQihAAAAiiIAAy/QAAiiChAAg");
	this.shape_2.setTransform(811,284.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("A8YMCQihAAAAiiIAAy/QAAiiChAAMA42AAAQCcAAAACiIAAS/QAACiicAAg");
	this.shape_3.setTransform(811,284.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(3,1,1).p("EgixgQ/MBFoAAAQC/AAAADlIAAa0QAADmi/AAMhFoAAAQjEAAAAjmIAA60QAAjlDEAAg");
	this.shape_4.setTransform(836.1,247.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("EgixARAQjEAAAAjmIAA60QAAjlDEAAMBFoAAAQC/AAAADlIAAa0QAADmi/AAg");
	this.shape_5.setTransform(836.1,247.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(3,1,1).p("A1zrTMArrAAAQB4AAAACYIAAR2QAACZh4AAMgrrAAAQh8AAAAiZIAAx2QAAiYB8AAg");
	this.shape_6.setTransform(769.9,277.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("A1zLUQh8AAAAiZIAAx2QAAiYB8AAMArrAAAQB4AAAACYIAAR2QAACZh4AAg");
	this.shape_7.setTransform(769.9,277.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},89).to({state:[{t:this.shape_3},{t:this.shape_2}]},20).to({state:[{t:this.shape_3},{t:this.shape_2}]},20).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},20).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_PlayerText = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_89 = function() {
		playSound("Questionwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(89).call(this.frame_89).wait(63));

	// PlayerText
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag0DiQgQgRAAgXQAAgWAQgQQAQgQAXgBQAWABAQAQQAQAQAAAWQAAAXgQARQgQAPgWAAQgXAAgQgPgAgYBSQAAgmAEgUQAFgSARggQASghAFgUQAFgUAAgeQAAgtgRgVQgRgWgYAAQgSAAgNAKQgKAIAAAHQAAAGAHAMQAOAaAAATQAAAQgLALQgMAMgQAAQgUAAgNgNQgNgOAAgWQAAgoAjgfQAjgfA/ABQBBgBAjAgQAiAfAAAuQAAAggRAbQgTAcgzAhQgiAWgKASQgKARgCAlg");
	this.shape.setTransform(669.8,295.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgcAdQgMgMAAgRQAAgQAMgMQAMgMAQABQARgBAMAMQAMAMAAAQQAAARgMAMQgMAMgRAAQgQAAgMgMg");
	this.shape_1.setTransform(944.6,308.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgYCRQgPgMgEgPQgDgHABgmIAAh6IgeAAIAAgIQAegWAWgYQAWgXAPgfIAIAAIAABUIA2AAIAAAYIg2AAIAACMQAAAUACAGQACAGAEADQAFAEAEgBQAPAAAPgXIAHAFQgTAugtAAQgVAAgPgMg");
	this.shape_2.setTransform(930.2,296.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgnBuIgKgCQgIAAgGAMIgIAAIgDhSIAIAAQAKAgAUARQATAPARAAQALAAAHgGQAIgIAAgKQAAgMgIgJQgHgIgYgSQgmgZgLgNQgPgUAAgYQgBgbATgUQARgWAjAAQARAAASAJQAGADAFABQAEgBADgBIAIgKIAIAAIAFBNIgJAAQgPgigQgNQgQgNgOAAQgLAAgHAHQgHAGAAAJQAAAHAFAGQAIAKAjAYQAjAZAMAQQALARAAAUQABATgLATQgJASgRAKQgSAKgUAAQgQAAgbgLg");
	this.shape_3.setTransform(912.1,300.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhJBSQgVggAAgvQAAg4AfghQAegiApAAQAiAAAaAdQAaAcABA3Ih8AAQACAtAWAaQAQAUAYAAQAPABAMgJQALgHAOgWIAIAGQgSAlgXAQQgWAQgeAAQgxAAgagngAgQhcQgOAWAAAmIAAAIIBBAAQAAgngEgPQgEgOgJgIQgFgEgJAAQgMAAgIAMg");
	this.shape_4.setTransform(891.5,300.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AhhB1IAAgJQAOAAAGgIQAFgGAAgeIAAh+QAAgTgCgGQgCgGgFgEQgFgCgLgBIAAgKIBdAAIAAA0QAWgkARgLQARgMAQAAQANABAJAIQAIAIAAAQQAAAQgIAJQgIAJgLAAQgNAAgKgJIgLgJQgDgBgCAAQgIAAgGAGQgKAHgFAQQgHAYAAAbIABBDQAAANABAFQACAGAGADQAGADANAAIAAAJg");
	this.shape_5.setTransform(870.4,299.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhOBUQgcgjAAgwQAAgwAcgkQAdglAxAAQAdAAAaAPQAaAPANAdQANAdAAAgQAAAxgYAgQgeAog1AAQgzAAgbglgAgUheQgJAKgDAcQgCAbAAAxQgBAaAEAXQADARAIAJQAKAJAKAAQAKAAAIgGQAKgIACgQQAFgWABhGQAAgqgFgPQgFgPgJgIQgGgFgKAAQgMAAgJAJg");
	this.shape_6.setTransform(846.2,300.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AhdCpIAAgJQAQAAAGgDQAHgDACgGQADgGAAgTIAAidIgiAAIAAgYIAiAAIgBgcQAAgjAagYQAagXArAAQAeAAAOALQAPALAAAOQAAALgJAIQgJAIgPAAQgNAAgHgHQgIgGAAgIIACgJIABgIQAAgFgDgDQgEgDgGAAQgHAAgEAFQgFAGAAANIAABIIAiAAIAAAYIgiAAIAACdQAAAXAFAGQAIAJAVgBIAAAJg");
	this.shape_7.setTransform(828,294.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgnBuIgKgCQgIAAgGAMIgIAAIgDhSIAIAAQAKAgAUARQATAPARAAQALAAAHgGQAIgIAAgKQAAgMgIgJQgHgIgYgSQgmgZgLgNQgPgUAAgYQgBgbATgUQARgWAjAAQASAAARAJQAGADAFABQAEgBADgBIAIgKIAIAAIAFBNIgJAAQgPgigQgNQgQgNgOAAQgLAAgHAHQgHAGAAAJQAAAHAFAGQAIAKAiAYQAkAZAMAQQALARAAAUQABATgKATQgKASgRAKQgSAKgUAAQgQAAgbgLg");
	this.shape_8.setTransform(795,300.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ag8CpIAAgJQAOAAAIgIQAEgGABgYIAAiEQAAgYgGgHQgFgHgQAAIAAgKIBeAAIAAC0QAAAYAGAHQAFAGAQABIAAAJgAgahoQgLgLAAgPQAAgQALgLQALgMAPAAQAPAAALAMQAMALAAAQQAAAPgMALQgLALgPAAQgPAAgLgLg");
	this.shape_9.setTransform(778.4,294.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AAIClIAAgJQAMgBAGgIQAEgHAAgYIAAhmQAAgbgCgIQgCgHgFgEQgFgDgHAAQgJgBgJAHQgJAHgLAQIAAB6QAAAZAEAGQAEAIAPABIAAAJIh0AAIAAgJQAOgBAGgIQAEgFAAgaIAAjnQAAgagEgGQgFgHgPgCIAAgJIBdAAIAACFQATgUAOgIQAQgJARABQAVgBAQAMQAPANAFARQAFAQAAAmIAABZQAAAaAFAGQAFAHAOABIAAAJg");
	this.shape_10.setTransform(757.4,295);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgXCRQgQgMgEgPQgDgHAAgmIAAh6IgdAAIAAgIQAegWAXgYQAVgXAPgfIAIAAIAABUIA2AAIAAAYIg2AAIAACMQAAAUACAGQACAGAEADQAFAEAEgBQAPAAAPgXIAHAFQgTAugtAAQgVAAgOgMg");
	this.shape_11.setTransform(735.3,296.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAIB1IAAgJQANgBAFgJQAEgGAAgYIAAhlQAAgcgCgIQgCgHgFgEQgGgDgGAAQgUAAgSAdIAAB6QAAAZAFAHQAEAHANABIAAAJIhzAAIAAgJQAOgBAGgIQAEgFAAgaIAAiAQAAgagEgGQgFgHgPgBIAAgKIBdAAIAAAeQARgUAQgIQAQgIASgBQAWAAAPANQAPAMAFATQAEANAAAoIAABYQAAAaAEAGQAFAHAPABIAAAJg");
	this.shape_12.setTransform(700.5,299.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ag9CpIAAgJQAQAAAHgIQAEgGAAgYIAAiEQABgYgGgHQgFgHgRAAIAAgKIBfAAIAAC0QAAAYAGAHQAFAGAQABIAAAJgAgahoQgLgLAAgPQAAgQALgLQALgMAPAAQAPAAALAMQALALAAAQQAAAPgLALQgLALgPAAQgPAAgLgLg");
	this.shape_13.setTransform(679.8,294.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgYCSQgPgNgEgOQgCgIAAglIAAh7IgeAAIAAgIQAegWAXgYQAVgYAPgeIAIAAIAABUIA2AAIAAAYIg2AAIAACNQAAATACAGQABAGAFADQAFADAEAAQAPAAAPgYIAHAGQgTAugtAAQgVABgPgMg");
	this.shape_14.setTransform(974.4,238.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgnBvIgKgDQgIAAgGAMIgHAAIgFhSIAJAAQAKAhAUAPQATARARgBQALABAIgIQAHgHAAgKQAAgMgHgJQgIgIgYgSQgmgZgKgNQgRgUABgYQgBgbATgUQASgWAiAAQARAAASAJQAGAEAFAAQAEAAADgCIAJgLIAHAAIAFBOIgJAAQgPgjgQgMQgQgNgPAAQgKAAgHAHQgHAGAAAKQAAAGAFAGQAIAKAjAYQAkAZALAQQALAQAAAWQABASgLATQgJATgRAJQgSAKgUAAQgQAAgbgKg");
	this.shape_15.setTransform(956.3,242.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AhOBUQgcgkAAgvQAAgwAcglQAdgkAxAAQAdAAAaAPQAaAPANAdQANAcAAAhQAAAwgZAiQgdAng1AAQgyAAgcglgAgUheQgJAKgCAcQgEAcAAAwQABAaADAWQACASAKAJQAJAJAKAAQAKAAAIgGQAJgJAEgPQAEgXAAhFQAAgqgEgPQgFgQgJgGQgHgGgKAAQgLAAgJAJg");
	this.shape_16.setTransform(933.9,242.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("Ag9CmIAAgJQAPgBAIgIQAFgFAAgZIAAjrQAAgYgGgHQgGgHgQgBIAAgJIBfAAIAAEbQAAAYAGAHQAFAGARACIAAAJg");
	this.shape_17.setTransform(914.7,237.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AhJBSQgVgfAAgwQAAg4AfghQAegiApAAQAiAAAaAcQAaAdABA4Ih8AAQACAsAWAbQAQATAYABQAPAAAMgJQALgHAOgWIAIAFQgSAngXAPQgWAQgeAAQgxAAgagngAgQhcQgOAWAAAmIAAAJIBBAAQAAgogEgPQgEgOgJgIQgFgEgJAAQgMAAgIAMg");
	this.shape_18.setTransform(884.3,242.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgVCjQgOgGgOgNIgmAYIgIAAIAAkgQAAgVgBgEQgDgHgFgDQgGgEgMAAIAAgJIBfAAIAAB+QAbgeAjAAQAXAAAVAOQAUANAMAaQAMAYAAAiQAAAlgPAeQgPAfgZAQQgZAQgfAAQgSAAgPgGgAgbgUIAABkQAAAfABAJQACAOAKAJQAJAIAOAAQAMABAJgIQAJgGAGgWQAGgVAAg2QAAgzgNgUQgKgPgQAAQgUAAgTAZg");
	this.shape_19.setTransform(858.4,238);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AhOBUQgcgkAAgvQAAgwAdglQAcgkAxAAQAdAAAaAPQAaAPANAdQANAcAAAhQAAAwgYAiQgeAng1AAQgzAAgbglgAgUheQgJAKgDAcQgCAcAAAwQgBAaAEAWQADASAIAJQAKAJAKAAQAKAAAIgGQAKgJACgPQAFgXABhFQAAgqgFgPQgFgQgJgGQgHgGgJAAQgMAAgJAJg");
	this.shape_20.setTransform(820,242.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AgXCSQgQgNgEgOQgCgIAAglIAAh7IgeAAIAAgIQAegWAWgYQAWgYAPgeIAIAAIAABUIA2AAIAAAYIg2AAIAACNQAAATACAGQABAGAFADQAFADAEAAQAQAAAOgYIAHAGQgUAugsAAQgVABgOgMg");
	this.shape_21.setTransform(799.4,238.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("ABLB2IAAgJQANgBAHgKQAFgGAAgZIAAhhQAAgegDgJQgCgHgGgEQgFgFgHAAQgKAAgLAIQgLAIgLAPIAAB5QAAAZAFAHQAFAIAQACIAAAJIh1AAIAAgJQAJgBAGgEQAFgEACgGQACgHAAgUIAAhhQAAgegDgJQgCgHgFgEQgHgFgGAAQgKAAgIAGQgMAHgNASIAAB5QABAZAEAIQAFAHAPACIAAAJIh2AAIAAgJQAPgCAGgHQAEgGAAgbIAAh/QAAgagFgHQgFgGgPgBIAAgKIBdAAIAAAfQAUgVAPgIQARgJASABQAXgBANALQAPAKAIAVQATgWATgKQARgJAUAAQAYgBAOALQAOALAGARQAFARAAAkIAABcQAAAbAFAGQAEAHAQACIAAAJg");
	this.shape_22.setTransform(757.8,242.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AhJBSQgVgfAAgwQAAg4AfghQAegiApAAQAiAAAaAcQAaAdABA4Ih8AAQACAsAWAbQAQATAYABQAPAAAMgJQALgHAOgWIAIAFQgSAngXAPQgWAQgeAAQgxAAgagngAgQhcQgOAWAAAmIAAAJIBBAAQAAgogEgPQgEgOgJgIQgFgEgJAAQgMAAgIAMg");
	this.shape_23.setTransform(726,242.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AhJBSQgVgfAAgwQAAg4AfghQAegiApAAQAiAAAaAcQAaAdABA4Ih8AAQACAsAWAbQAQATAYABQAPAAAMgJQALgHAOgWIAIAFQgSAngXAPQgWAQgeAAQgxAAgagngAgQhcQgOAWAAAmIAAAJIBBAAQAAgogEgPQgEgOgJgIQgFgEgJAAQgMAAgIAMg");
	this.shape_24.setTransform(703.8,242.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AgnBvIgKgDQgIAAgGAMIgIAAIgDhSIAIAAQALAhATAPQATARARgBQALABAHgIQAIgHAAgKQAAgMgIgJQgHgIgZgSQgkgZgMgNQgQgUAAgYQAAgbASgUQATgWAiAAQARAAASAJQAGAEAEAAQAFAAADgCIAIgLIAJAAIADBOIgIAAQgPgjgQgMQgQgNgOAAQgLAAgHAHQgHAGAAAKQAAAGAFAGQAIAKAiAYQAlAZALAQQAMAQAAAWQgBASgJATQgKATgRAJQgRAKgWAAQgPAAgbgKg");
	this.shape_25.setTransform(682.7,242.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AhWCmIAAgJIALAAQAPAAAIgGQAHgDADgIQADgGAAgZIAAjZQAAgagDgFQgCgHgIgEQgJgGgOAAIgLAAIAAgJICsAAIAAAJIgLAAQgOAAgIAGQgHADgDAIQgEAGAAAZIAADZQAAAaAEAFQACAHAJAFQAHAEAOABIALAAIAAAJg");
	this.shape_26.setTransform(650.6,237.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgYCSQgPgNgEgOQgDgIABglIAAh7IgeAAIAAgIQAfgWAVgYQAWgYAPgeIAIAAIAABUIA2AAIAAAYIg2AAIAACNQAAATACAGQACAGAEADQAFADAEAAQAPAAAPgYIAHAGQgTAugtAAQgVABgPgMg");
	this.shape_27.setTransform(974.3,238.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgnBvIgKgDQgIAAgGAMIgIAAIgEhSIAJAAQAKAhAUAPQATARARgBQALABAHgIQAIgHAAgKQAAgMgIgJQgHgIgYgSQgmgZgLgNQgPgUAAgYQgBgbATgUQARgWAjAAQARAAASAJQAGAEAFAAQAEAAADgCIAIgLIAIAAIAFBOIgJAAQgPgjgQgMQgQgNgOAAQgLAAgHAHQgHAGAAAKQAAAGAFAGQAIAKAjAYQAjAZAMAQQALAQAAAWQABASgKATQgKATgRAJQgSAKgUAAQgQAAgbgKg");
	this.shape_28.setTransform(956.2,242.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AhOBUQgcgkAAgvQAAgwAcglQAdgkAxAAQAdAAAaAPQAaAPANAdQANAcAAAhQAAAwgZAiQgeAng0AAQgyAAgcglgAgUheQgJAKgDAcQgDAcAAAwQABAaADAWQACASAKAJQAIAJALAAQALAAAHgGQAJgJADgPQAGgXgBhFQAAgqgEgPQgFgQgJgGQgGgGgLAAQgLAAgJAJg");
	this.shape_29.setTransform(933.8,242.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgVCjQgOgGgOgNIglAYIgJAAIAAkgQAAgVgBgEQgDgHgFgDQgGgEgMAAIAAgJIBeAAIAAB+QAdgeAhAAQAYAAAVAOQAUANAMAaQAMAYAAAiQAAAlgPAeQgOAfgaAQQgZAQgfAAQgSAAgPgGgAgcgUIAABkQAAAfACAJQADAOAJAJQAJAIAOAAQAMABAJgIQAJgGAGgWQAGgVAAg2QAAgzgNgUQgKgPgQAAQgUAAgUAZg");
	this.shape_30.setTransform(858.3,238);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AhOBUQgcgkAAgvQAAgwAdglQAcgkAxAAQAeAAAZAPQAZAPAOAdQANAcAAAhQAAAwgYAiQgfAng0AAQgzAAgbglgAgUheQgJAKgCAcQgDAcAAAwQAAAaADAWQADASAIAJQAKAJAKAAQAKAAAIgGQAKgJADgPQAEgXAAhFQABgqgFgPQgFgQgJgGQgHgGgJAAQgMAAgJAJg");
	this.shape_31.setTransform(819.9,242.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgXCSQgQgNgEgOQgDgIAAglIAAh7IgdAAIAAgIQAegWAXgYQAVgYAPgeIAIAAIAABUIA2AAIAAAYIg2AAIAACNQAAATACAGQACAGAEADQAFADAEAAQAQAAAOgYIAHAGQgTAugtAAQgVABgOgMg");
	this.shape_32.setTransform(799.3,238.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("ABLB2IAAgJQAOgBAGgKQAFgGgBgZIAAhhQAAgegCgJQgDgHgFgEQgFgFgHAAQgKAAgLAIQgLAIgLAPIAAB5QAAAZAFAHQAFAIAQACIAAAJIh1AAIAAgJQAJgBAGgEQAFgEACgGQACgHAAgUIAAhhQAAgegDgJQgCgHgGgEQgGgFgGAAQgKAAgIAGQgMAHgNASIAAB5QABAZAFAIQAEAHAPACIAAAJIh1AAIAAgJQAOgCAGgHQAEgGAAgbIAAh/QAAgagFgHQgEgGgPgBIAAgKIBcAAIAAAfQAUgVAPgIQAQgJATABQAXgBANALQAPAKAIAVQAUgWASgKQASgJATAAQAYgBAOALQAOALAFARQAGARAAAkIAABcQAAAbAFAGQAEAHAQACIAAAJg");
	this.shape_33.setTransform(757.7,242.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgnBvIgKgDQgIAAgFAMIgIAAIgEhSIAIAAQALAhATAPQATARARgBQALABAIgIQAHgHAAgKQAAgMgHgJQgIgIgZgSQgkgZgMgNQgPgUgBgYQAAgbASgUQATgWAiAAQARAAASAJQAHAEADAAQAFAAADgCIAIgLIAJAAIADBOIgIAAQgPgjgQgMQgQgNgPAAQgKAAgHAHQgHAGAAAKQAAAGAFAGQAIAKAiAYQAlAZALAQQAMAQAAAWQgBASgJATQgKATgRAJQgRAKgWAAQgPAAgbgKg");
	this.shape_34.setTransform(682.6,242.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AhWCmIAAgJIALAAQAPAAAJgGQAGgDAEgIQACgGAAgZIAAjZQAAgagCgFQgDgHgIgEQgJgGgOAAIgLAAIAAgJICsAAIAAAJIgLAAQgOAAgIAGQgHADgEAIQgDAGAAAZIAADZQAAAaADAFQAEAHAIAFQAHAEAOABIALAAIAAAJg");
	this.shape_35.setTransform(650.5,237.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AglChQgMgMAAgQQAAgQAMgMQALgLARAAQAPAAAMALQALALAAARQAAAQgLAMQgMAMgPAAQgRAAgLgMgAgRA6QAAgbADgOQADgNAMgXQANgXAEgOQAEgOAAgWQAAgggNgPQgMgQgRAAQgNAAgJAHQgHAFAAAGQAAAEAFAJQAKASAAANQAAANgIAHQgIAJgNAAQgNAAgJgKQgKgJAAgRQAAgcAZgWQAZgVAtgBQAuABAZAWQAZAXAAAgQAAAXgNAUQgNATgkAYQgZAPgHANQgHAMgCAag");
	this.shape_36.setTransform(976.7,289.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgYCRQgPgLgEgQQgCgHAAgmIAAh5IgeAAIAAgJQAegWAWgYQAWgYAPgdIAIAAIAABTIA2AAIAAAZIg2AAIAACLQAAAUACAGQABAGAFADQAFAEAEAAQAQAAAOgYIAHAFQgUAvgsAAQgVgBgPgMg");
	this.shape_37.setTransform(956,291);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("Ag9CpIAAgJQAQAAAHgIQAEgGAAgYIAAiEQABgYgGgHQgFgHgRgBIAAgJIBfAAIAAC0QAAAYAGAHQAFAHAQAAIAAAJgAgahoQgLgLAAgQQAAgPALgLQALgLAPAAQAPAAALALQALALAAAPQAAAQgLALQgLALgPAAQgPAAgLgLg");
	this.shape_38.setTransform(940.8,289.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgLByIAAgJQAOgBAEgCQADgDAAgFQAAgHgIgOIgTglIgQAYIgNAUQgCAFAAAEQAAAFACAEQACAEAEACQAEABALAAIAAAJIhZAAIAAgJQAQAAAOgJQAOgJAagnIATgbIgnhIQgUgkgJgIQgKgIgLgBIAAgJIB9AAIAAAJIgGAAIgMAFQgCABAAAEIABAIIAHANIARAhIAJgNQAUgbAAgLQAAgFgFgDQgEgEgLgBIAAgJIBRAAIAAAJQgPABgNAIQgNAJgQAZIgYAkIAoBLQAUAnAMAKQAHAGALAAIAAAJg");
	this.shape_39.setTransform(921.2,295);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AhJBSQgVgfAAgvQAAg5AfghQAegiApAAQAiAAAaAcQAaAdABA3Ih8AAQACAtAWAaQAQAVAYAAQAPgBAMgHQALgJAOgVIAIAFQgSAngXAPQgWAQgeAAQgxAAgagngAgQhcQgOAWAAAmIAAAJIBBAAQAAgogEgOQgEgQgJgHQgFgEgJAAQgMAAgIAMg");
	this.shape_40.setTransform(897.8,295);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AhJBSQgVgfAAgvQAAg5AfghQAegiApAAQAiAAAaAcQAaAdABA3Ih8AAQACAtAWAaQAQAVAYAAQAPgBAMgHQALgJAOgVIAIAFQgSAngXAPQgWAQgeAAQgxAAgagngAgQhcQgOAWAAAmIAAAJIBBAAQAAgogEgOQgEgQgJgHQgFgEgJAAQgMAAgIAMg");
	this.shape_41.setTransform(863.1,295);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAIClIAAgJQAMgBAGgIQAEgHAAgYIAAhmQAAgbgCgHQgCgHgFgFQgFgEgHAAQgJABgJAGQgJAHgLAQIAAB6QAAAZAEAFQAEAJAPABIAAAJIh0AAIAAgJQAOgBAGgIQAEgFAAgaIAAjnQAAgagEgGQgFgGgPgCIAAgJIBdAAIAACDQATgTAOgJQAQgHARgBQAVAAAQANQAPAMAFARQAFAQAAAmIAABZQAAAaAFAHQAFAGAOABIAAAJg");
	this.shape_42.setTransform(837.9,289.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgXCRQgQgLgEgQQgCgHgBgmIAAh5IgdAAIAAgJQAfgWAWgYQAVgYAPgdIAIAAIAABTIA2AAIAAAZIg2AAIAACLQAAAUACAGQACAGAEADQAFAEAEAAQAPAAAPgYIAHAFQgTAvgtAAQgVgBgOgMg");
	this.shape_43.setTransform(815.8,291);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AAbCFQgRAUgNAJQgNAHgRAAQgsAAgZgnQgVggAAguQAAglANgcQAMgdAXgPQAWgPAZAAQAQAAAMAGQANAGAOAQIAAhFQAAgZgCgGQgDgHgGgDQgGgEgPAAIAAgKIBlAAIAAEFQAAAbABAFQACAIAGAEQAFAEAOABIAAAIIhhATgAgfgrQgJAIgGASQgFASAAAoQAAArAGAVQAGAVALAJQAGAFAKgBQAUABATgiIAAh4QgSgigZAAQgJAAgGAFg");
	this.shape_44.setTransform(781.2,290.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAIB1IAAgJQANgBAFgJQAEgGAAgYIAAhlQAAgcgCgHQgCgHgFgFQgGgEgGAAQgUAAgSAeIAAB6QAAAaAFAGQAEAHANABIAAAJIhzAAIAAgJQAOgBAGgIQAEgFAAgaIAAiAQAAgagEgHQgFgGgPgCIAAgJIBdAAIAAAeQARgUAQgIQAQgJASAAQAWAAAPANQAPAMAFASQAEAPAAAnIAABYQAAAaAEAHQAFAGAPABIAAAJg");
	this.shape_45.setTransform(753.1,294.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("Ag9CpIAAgJQAQAAAHgIQAEgGAAgYIAAiEQABgYgGgHQgFgHgRgBIAAgJIBfAAIAAC0QAAAYAGAHQAFAHAQAAIAAAJgAgahoQgLgLAAgQQAAgPALgLQALgLAPAAQAPAAALALQALALAAAPQAAAQgLALQgLALgPAAQgPAAgLgLg");
	this.shape_46.setTransform(732.4,289.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AhOBVQgcglAAgvQAAgwAdgkQAcglAxAAQAeAAAZAQQAZAPAOAcQANAcAAAhQAAAwgYAhQgfAog0AAQgzAAgbgkgAgUhdQgJAJgCAcQgDAbAAAxQAAAaADAXQADARAIAJQAKAJAKAAQAKAAAIgGQAKgIADgPQAEgYAAhFQABgqgFgPQgFgPgJgIQgHgFgJAAQgMAAgJAKg");
	this.shape_47.setTransform(683.6,295);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgXCRQgQgLgEgQQgDgHAAgmIAAh5IgdAAIAAgJQAegWAWgYQAWgYAPgdIAIAAIAABTIA2AAIAAAZIg2AAIAACLQAAAUACAGQACAGAEADQAFAEAEAAQAQAAAOgYIAHAFQgTAvgtAAQgVgBgOgMg");
	this.shape_48.setTransform(663,291);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AhOBUQgcgjAAgwQAAgwAdgkQAcglAxAAQAdAAAaAPQAaAPANAdQANAcAAAhQAAAxgYAgQgeAog1AAQgzAAgbglgAgUhdQgJAJgDAcQgCAbAAAxQgBAaAEAXQADARAIAJQAKAJAKAAQAKAAAIgGQAKgJACgPQAFgWABhGQAAgqgFgPQgFgPgJgIQgHgFgJAAQgMAAgJAKg");
	this.shape_49.setTransform(990.6,237.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("Ag/CmQgZgHgLgKQgLgLAAgMQAAgKAIgJQAJgKAWgGQgfgQAAgbQAAgRANgQQAMgPAdgLQghgNgOgTQgPgUAAgZQAAgiAbgYQAcgYArgBQAVAAAYAKIBNAAIAAAbIgrAAQAMAMAEAKQAGANAAAOQAAAZgNARQgOATgXAJQgYALgRAAIgdgCQgLAAgHAHQgIAHAAAKQAAAIAHAHQAHAFAOAAIAqgBQAzAAAUAMQAbAPAAAhQAAAUgNARQgMARgVAJQgfAMgogBQggAAgZgFgAg4BlQgNAIAAANQAAAMAOAKQAOAKAoAAQAhAAAUgJQATgIAAgRQAAgGgDgEQgHgIgNgCQgNgDg5AAQgZAAgJAEgAggiNQgKAOABAtQgBAkAKAOQAKAOANgBQANABALgOQAJgNAAgnQAAgsgLgQQgHgLgOAAQgOAAgKAOg");
	this.shape_50.setTransform(966.1,242.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AAbCEQgRAVgNAJQgNAHgRAAQgsAAgZgnQgVggAAguQAAglANgcQAMgeAXgOQAWgPAZAAQAQAAAMAGQANAGAOARIAAhGQAAgZgCgGQgDgHgGgEQgGgDgPAAIAAgKIBlAAIAAEFQAAAcABAEQACAIAGAEQAFAEAOABIAAAIIhhATgAgfgrQgJAHgGAUQgFARAAAoQAAArAGAVQAGAVALAJQAGAFAKgBQAUAAATghIAAh4QgSgigZAAQgJAAgGAFg");
	this.shape_51.setTransform(927.1,232.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("Ag9ClIAAgJQAPAAAIgIQAFgGAAgYIAAjrQAAgYgGgHQgGgGgQgCIAAgJIBfAAIAAEbQAAAYAGAHQAFAGARABIAAAJg");
	this.shape_52.setTransform(906.1,232.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AhIBqQgPgMgGgQQgFgQAAgnIAAhaQAAgagEgGQgFgHgPgBIAAgKIBdAAIAACbQAAAZACAHQACAHAFAEQAFADAHAAQAIAAAHgEQAKgHANgTIAAh5QAAgagEgGQgFgHgPgBIAAgKIBdAAIAACyQAAAaAEAHQAFAGAPACIAAAJIhdAAIAAgfQgQAUgQAJQgQAJgUAAQgTAAgPgMg");
	this.shape_53.setTransform(884.9,238);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AhOBUQgcgjAAgwQAAgwAcgkQAdglAxAAQAeAAAZAPQAZAPAOAdQANAcAAAhQAAAxgZAgQgeAog0AAQgyAAgcglgAgUhdQgJAJgDAcQgCAbAAAxQAAAaADAXQACARAKAJQAIAJALAAQALAAAHgGQAKgJACgPQAGgWAAhGQgBgqgEgPQgFgPgJgIQgGgFgLAAQgLAAgJAKg");
	this.shape_54.setTransform(858.6,237.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAIClIAAgJQAMgBAGgIQAEgHAAgYIAAhmQAAgbgCgIQgCgGgFgFQgFgDgHAAQgJAAgJAGQgJAHgLAQIAAB6QAAAZAEAFQAEAJAPABIAAAJIh0AAIAAgJQAOgBAGgIQAEgFAAgaIAAjnQAAgagEgGQgFgGgPgDIAAgJIBdAAIAACEQATgTAOgJQAQgIARAAQAVABAQALQAPANAFARQAFAQAAAmIAABZQAAAaAFAGQAFAHAOABIAAAJg");
	this.shape_55.setTransform(832.3,232.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgnBuIgKgCQgIAAgGAMIgHAAIgFhSIAJAAQAKAgAUARQATAPARAAQALAAAIgGQAHgIAAgKQAAgMgHgJQgIgIgYgRQgmgagKgNQgRgUABgYQgBgaATgWQASgVAiAAQARAAASAJQAGADAFABQAEgBADgBIAJgKIAHAAIAFBNIgJAAQgPgjgQgMQgQgNgOAAQgLAAgHAHQgHAGAAAJQAAAHAFAGQAIAKAjAYQAkAZALAQQALARAAAUQABAUgLASQgJASgRAKQgSAKgUAAQgQAAgbgLg");
	this.shape_56.setTransform(808.7,237.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AhVClIAAgJIALAAQAOAAAIgEQAHgEAEgJQACgFAAgZIAAjZQAAgZgCgHQgDgGgJgFQgHgEgOgBIgLAAIAAgJICsAAIAAAJIgLAAQgPABgJAEQgGAEgDAIQgDAGAAAZIAADZQAAAZADAGQADAHAHAFQAJAFAOgBIALAAIAAAJg");
	this.shape_57.setTransform(776.5,232.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AAPClIAAgJQAIABAEgDQADgDAAgEQAAgFgKgPIgshCIgPAOIAAApQAAAaAFAGQAFAHAPABIAAAJIh2AAIAAgJQAOgBAHgIQAEgFAAgaIAAjnQAAgagFgGQgFgGgPgDIAAgJIBdAAIAADZIA0g0QARgOADgIQAEgHABgGQAAgHgGgEQgFgFgQgBIAAgKIBmAAIAAAKQgOAAgLAHQgLAFggAgIgZAXIA2BOQAgAxAGAFQAJAJAMAAIAAAJg");
	this.shape_58.setTransform(741.5,232.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AAIB1IAAgJQANgBAFgJQAEgGAAgYIAAhlQAAgcgCgIQgCgGgFgFQgGgDgGAAQgUAAgSAdIAAB6QAAAZAFAHQAEAHANABIAAAJIhzAAIAAgJQAOgBAGgIQAEgFAAgaIAAiAQAAgagEgGQgFgHgPgBIAAgKIBdAAIAAAeQARgUAQgIQAQgJASAAQAWAAAPANQAPAMAFATQAEANAAAoIAABYQAAAaAEAGQAFAHAPABIAAAJg");
	this.shape_59.setTransform(712.8,237.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("Ag9CpIAAgJQAPAAAIgIQAEgGAAgYIAAiEQAAgYgFgHQgFgHgRAAIAAgKIBfAAIAAC0QAAAYAFAHQAGAGARABIAAAJgAgahoQgLgLAAgPQAAgQALgLQALgMAPABQAQgBALAMQALALgBAQQABAPgLALQgLALgQAAQgPAAgLgLg");
	this.shape_60.setTransform(692.1,232.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AAIClIAAgJQAMgBAGgIQAEgHAAgYIAAhmQAAgbgCgIQgCgGgFgFQgFgDgHAAQgJAAgJAGQgJAHgLAQIAAB6QAAAZAEAFQAEAJAPABIAAAJIh0AAIAAgJQAOgBAGgIQAEgFAAgaIAAjnQAAgagEgGQgFgGgPgDIAAgJIBdAAIAACEQATgTAOgJQAQgIARAAQAVABAQALQAPANAFARQAFAQAAAmIAABZQAAAaAFAGQAFAHAOABIAAAJg");
	this.shape_61.setTransform(671.1,232.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgYCRQgPgMgEgPQgDgHABgmIAAh5IgeAAIAAgJQAegWAWgYQAWgYAPgdIAIAAIAABTIA2AAIAAAZIg2AAIAACLQAAAUACAGQACAFAEAEQAFADAEAAQAPABAPgYIAHAFQgTAugtABQgVAAgPgNg");
	this.shape_62.setTransform(649,233.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AhIBqQgPgMgGgQQgFgQAAgnIAAhaQAAgagEgGQgFgHgPgBIAAgKIBdAAIAACbQAAAZACAHQACAHAFAEQAFADAHAAQAIAAAHgEQAKgHANgTIAAh5QAAgagEgGQgFgHgPgBIAAgKIBdAAIAACyQAAAaAEAHQAFAGAPACIAAAJIhdAAIAAgfQgQAUgQAJQgQAJgUAAQgTAAgPgMg");
	this.shape_63.setTransform(1005.8,180.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AhOBUQgcgjAAgwQAAgwAcglQAdgkAxAAQAdAAAaAPQAaAPANAdQANAdAAAgQAAAwgYAiQgeAng1AAQgzAAgbglgAgUheQgJAKgDAcQgCAbAAAxQgBAaAEAWQADASAIAJQAKAJAKAAQAKAAAIgGQAKgIACgQQAFgXABhFQAAgqgFgPQgFgQgJgGQgHgGgJAAQgMAAgJAJg");
	this.shape_64.setTransform(979.4,180.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AhhCdQgNgMAAgQQAAgPAJgJQAJgJAMAAQAMAAAIAIQAHAIABAQQAAAJACADQACADADAAQAGAAAHgIQAKgKANgkIAHgTIhKipQgQgmgIgJQgIgJgMgDIAAgJIB5AAIAAAJQgLABgFAEQgFAEAAAGQAAAJAMAbIAmBaIAbhFQAOglAAgPQAAgJgGgFQgGgFgPgBIAAgJIBNAAIAAAJQgMABgHAIQgHAHgQArIhCCpQgXA/gMAPQgRAUgZAAQgVAAgMgLg");
	this.shape_65.setTransform(954.4,185.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AhOBUQgcgjAAgwQAAgwAdglQAcgkAxAAQAdAAAaAPQAaAPANAdQANAdAAAgQAAAwgZAiQgdAng1AAQgzAAgbglgAgUheQgJAKgCAcQgEAbAAAxQAAAaAEAWQACASAJAJQAJAJALAAQAKAAAIgGQAJgIAEgQQAEgXAAhFQABgqgFgPQgFgQgJgGQgHgGgKAAQgLAAgJAJg");
	this.shape_66.setTransform(916.9,180.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AAbCEQgRAWgNAHQgNAIgRAAQgsAAgZgnQgVggAAguQAAglANgcQAMgdAXgPQAWgPAZAAQAQAAAMAGQANAGAOARIAAhFQAAgbgCgFQgDgHgGgEQgGgDgPAAIAAgKIBlAAIAAEGQAAAbABAEQACAIAGAEQAFAEAOABIAAAIIhhATgAgfgrQgJAIgGATQgFASAAAnQAAArAGAVQAGAUALAKQAGAEAKAAQAUAAATghIAAh3QgSgjgZAAQgJAAgGAFg");
	this.shape_67.setTransform(890.9,175.5);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AhhCdQgNgMAAgQQAAgPAJgJQAJgJAMAAQAMAAAIAIQAHAIABAQQAAAJACADQACADADAAQAGAAAHgIQAKgKANgkIAHgTIhKipQgQgmgIgJQgIgJgMgDIAAgJIB5AAIAAAJQgLABgFAEQgFAEAAAGQAAAJAMAbIAmBaIAbhFQAOglAAgPQAAgJgGgFQgGgFgPgBIAAgJIBNAAIAAAJQgMABgHAIQgHAHgQArIhCCpQgXA/gMAPQgRAUgZAAQgVAAgMgLg");
	this.shape_68.setTransform(851.6,185.7);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AAYBuQgKgJgDgSQgpAkghAAQgTAAgOgNQgMgNAAgSQAAgbAWgUQAWgWBLgiIAAgWQAAgagDgHQgDgHgHgEQgHgFgKgBQgQABgKAGQgHAFABAGQAAAFAGAIQAKAKAAAKQgBALgIAJQgJAIgPAAQgPABgLgKQgKgJAAgMQAAgSAOgQQAOgQAZgJQAZgIAaAAQAgAAATAOQATANAFAQQAEALAAAkIAABYQAAAQABAEQABAEADACQACACAEAAQAGAAAGgJIAIAGQgNASgNAIQgMAIgRAAQgUAAgLgJgAggAZQgKAOAAANQAAALAJAJQAFAGAMAAQAMAAAPgNIAAhMQgcAQgPAUg");
	this.shape_69.setTransform(827.3,180.1);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AA/B2Ig/inIg8CnIgMAAIg9ilQgOgmgKgLQgFgIgNgDIAAgKIBzAAIAAAKQgLAAgFADQgEADAAAFQAAAEAIAVIAhBYIAghYIgCgGQgIgTgFgEQgGgGgLgBIAAgKIB0AAIAAAKQgOAAgDADQgEADAAAGQAAAFAHATIAhBYIAdhRQAGgSAAgGQAAgKgFgEQgEgFgOAAIAAgKIBEAAIAAAKQgMABgGAHQgHAGgKAeIhAC1g");
	this.shape_70.setTransform(796,180.6);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AAIClIAAgIQAMgCAGgIQAEgGAAgZIAAhmQAAgbgCgIQgCgGgFgFQgFgDgHAAQgJgBgJAHQgJAHgLARIAAB5QAAAYAEAHQAEAIAPACIAAAIIh0AAIAAgIQAOgCAGgIQAEgFAAgaIAAjnQAAgagEgGQgFgHgPgCIAAgJIBdAAIAACFQATgUAOgIQAQgJARABQAVgBAQAMQAPANAFAQQAFARAAAmIAABZQAAAaAFAGQAFAHAOACIAAAIg");
	this.shape_71.setTransform(751.7,175.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AhDBWQgcgiAAgxQAAgtAZgkQAegqA0AAQAjAAAVARQAVATAAAWQAAAOgIAHQgJAJgNAAQgPAAgJgKQgKgJgCgZQgBgPgGgGQgGgGgHAAQgLAAgIANQgNASAAAnQAAAgAKAdQALAdARAPQANAKASAAQAMAAALgGQALgFAOgQIAIAGQgQAegYAPQgYAPgbAAQgtAAgbgjg");
	this.shape_72.setTransform(727,180.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("Ag9CpIAAgIQAPgBAIgIQAEgGAAgYIAAiEQABgYgGgHQgFgHgRAAIAAgKIBfAAIAAC0QAAAYAFAHQAGAGARACIAAAIgAgahoQgLgLAAgPQAAgQALgLQALgMAPAAQAPAAAMAMQALALgBAQQABAPgLALQgMALgPAAQgPAAgLgLg");
	this.shape_73.setTransform(708.8,174.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AAIClIAAgIQAMgCAGgIQAEgGAAgZIAAhmQAAgbgCgIQgCgGgFgFQgFgDgHAAQgJgBgJAHQgJAHgLARIAAB5QAAAYAEAHQAEAIAPACIAAAIIh0AAIAAgIQAOgCAGgIQAEgFAAgaIAAjnQAAgagEgGQgFgHgPgCIAAgJIBdAAIAACFQATgUAOgIQAQgJARABQAVgBAQAMQAPANAFAQQAFARAAAmIAABZQAAAaAFAGQAFAHAOACIAAAIg");
	this.shape_74.setTransform(687.8,175.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("ABaCpIhSjUIhaDUIgJAAIhskNQgRgpgGgIQgHgJgQgBIAAgJICQAAIAAAJQgSAAgFAFQgGAFAAAHQAAAJAMAeIBBCgIA0h9IgNgjQgMgdgGgJQgGgKgIgEQgIgEgPAAIAAgJICfAAIAAAJQgRAAgHACQgFACgDAEQgDAEAAAFQAAAGALAdIA8CbIA2iMIALgeQACgIAAgHQgBgKgGgGQgHgGgUAAIAAgJIBXAAIAAAJQgJAAgHAFQgGAEgFAJIgQAmIhoEQg");
	this.shape_75.setTransform(648.8,175.5);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AhOBUQgcgjAAgwQAAgwAcglQAdgkAxAAQAeAAAZAPQAZAPAOAdQANAdAAAgQAAAwgZAiQgeAng0AAQgyAAgcglgAgUheQgJAKgDAcQgCAbAAAxQAAAaADAWQACASAKAJQAIAJALAAQALAAAHgGQAKgIACgQQAGgXAAhFQgBgqgEgPQgFgQgJgGQgGgGgLAAQgLAAgJAJg");
	this.shape_76.setTransform(876.6,307.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("Ag/ClQgZgFgLgLQgLgLAAgLQAAgMAIgIQAIgJAYgHQgggPAAgcQAAgRANgQQANgPAcgLQghgMgPgUQgOgUAAgZQAAgiAbgYQAcgZAqABQAWAAAYAJIBNAAIAAAbIgsAAQANAMAEAJQAGANAAAPQAAAZgOARQgNASgYAKQgXAKgRAAIgdgBQgLAAgIAHQgHAHAAAKQAAAIAHAHQAGAFAPAAIAqgBQAzABATAKQAcAQAAAhQAAAUgMASQgNAQgVAJQgfAMgoAAQgfAAgagHgAg4BlQgNAIAAANQAAAMAOAKQAPALAogBQAhABATgKQATgJAAgQQAAgGgEgEQgGgIgOgCQgNgDg5AAQgYAAgJAEgAggiNQgKAOAAAtQAAAlAKANQAJAOAOAAQAOAAAJgOQAKgNAAgnQAAgsgLgQQgIgMgNABQgOAAgKAOg");
	this.shape_77.setTransform(852.1,312.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AhOBUQgcgjAAgwQAAgwAdglQAcgkAxAAQAdAAAaAPQAaAPANAdQANAdAAAgQAAAwgZAiQgdAng1AAQgzAAgbglgAgUheQgJAKgCAcQgEAbAAAxQAAAaAEAWQACASAKAJQAIAJALAAQAKAAAIgGQAJgIAEgQQAEgXAAhFQABgqgFgPQgFgQgJgGQgHgGgKAAQgLAAgJAJg");
	this.shape_78.setTransform(744.6,307.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AAIClIAAgJQAMgBAGgIQAEgGAAgZIAAhmQAAgbgCgIQgCgGgFgFQgFgDgHAAQgJgBgJAHQgJAHgLARIAAB5QAAAYAEAHQAEAIAPABIAAAJIh0AAIAAgJQAOgBAGgHQAEgGAAgaIAAjnQAAgagEgGQgFgHgPgCIAAgJIBdAAIAACFQATgUAOgIQAQgJARABQAVgBAQAMQAPANAFAQQAFARAAAmIAABZQAAAaAFAGQAFAHAOABIAAAJg");
	this.shape_79.setTransform(718.3,302.5);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgnBuIgKgCQgIAAgFAMIgIAAIgFhSIAJAAQALAgATAQQATARARgBQALABAIgIQAHgHAAgKQAAgMgHgJQgIgIgZgSQglgZgKgNQgQgUgBgYQABgbARgUQASgWAjAAQASAAARAJQAHADADABQAFgBADgBIAJgLIAIAAIADBOIgIAAQgPgjgQgMQgQgNgPAAQgKAAgHAHQgHAGAAAKQAAAGAFAGQAIAKAiAYQAlAZALAQQAMAQAAAWQAAASgLATQgJASgRAKQgRAKgWAAQgPAAgbgLg");
	this.shape_80.setTransform(694.7,307.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AhWClIAAgJIALAAQAPABAJgGQAGgDAEgJQACgFAAgZIAAjZQAAgagCgGQgDgGgIgEQgJgGgOAAIgLAAIAAgJICsAAIAAAJIgLAAQgOAAgJAGQgGADgEAIQgDAGABAZIAADZQgBAaADAFQAEAHAIAFQAHAEAOAAIALAAIAAAJg");
	this.shape_81.setTransform(662.5,302.5);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AAYBuQgLgJgCgSQgpAkghAAQgUAAgMgNQgNgNgBgSQABgbAWgVQAWgUBLgjIAAgWQAAgagDgHQgDgGgHgFQgHgGgKAAQgQAAgLAIQgFAEAAAGQgBAFAHAIQAJAKAAAKQAAAMgJAIQgIAIgPAAQgPABgKgJQgLgKAAgMQAAgSAOgQQAOgQAZgJQAYgIAbAAQAgAAATAOQATAOAGAQQADAKAAAkIAABYQAAAQABAEQACAEACACQACACADAAQAHAAAHgJIAHAGQgMASgNAIQgOAIgQAAQgUAAgLgJgAggAZQgKAOABANQAAALAIAIQAGAHAKAAQAMAAAQgNIAAhMQgdAQgOAUg");
	this.shape_82.setTransform(885.5,250.1);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AA/B2Ig+inIg8CnIgOAAIg8ilQgOgmgKgLQgGgIgMgDIAAgKIB0AAIAAAKQgNAAgEADQgEADAAAFQAAAEAHAVIAiBYIAhhYIgDgGQgIgTgFgEQgFgGgMgBIAAgKIB0AAIAAAKQgNAAgFADQgDADAAAGQAAAFAHATIAgBYIAdhRQAHgSAAgGQAAgKgEgEQgFgFgNAAIAAgKIBDAAIAAAKQgMABgGAHQgGAGgLAeIhAC1g");
	this.shape_83.setTransform(854.2,250.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AhJBSQgVggAAgvQAAg3AfgiQAegiApAAQAiAAAaAcQAaAdABA4Ih8AAQACAsAWAbQAQATAYABQAPAAAMgIQALgJAOgVIAIAFQgSAngXAPQgWAQgeAAQgxAAgagngAgQhcQgOAWAAAmIAAAJIBBAAQAAgogEgOQgEgQgJgHQgFgEgJAAQgMAAgIAMg");
	this.shape_84.setTransform(813,250.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AAICmIAAgJQAMgCAGgIQAEgGAAgZIAAhmQAAgbgCgHQgCgIgFgDQgFgFgHAAQgJAAgJAHQgJAHgLARIAAB5QAAAYAEAHQAEAIAPACIAAAJIh0AAIAAgJQAOgCAGgHQAEgGAAgaIAAjnQAAgagEgGQgFgGgPgCIAAgKIBdAAIAACFQATgUAOgIQAQgIARAAQAVAAAQALQAPANAFAQQAFARAAAmIAABZQAAAaAFAHQAFAGAOACIAAAJg");
	this.shape_85.setTransform(787.7,245.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgYCSQgPgMgEgPQgCgIAAglIAAh7IgeAAIAAgIQAegWAXgYQAVgYAPgeIAIAAIAABUIA2AAIAAAYIg2AAIAACNQAAATACAGQACAGAEADQAFADAEAAQAPAAAPgYIAHAGQgTAvgtgBQgVABgPgMg");
	this.shape_86.setTransform(765.6,246.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgXCSQgQgMgEgPQgCgIgBglIAAh7IgdAAIAAgIQAfgWAWgYQAVgYAPgeIAIAAIAABUIA2AAIAAAYIg2AAIAACNQAAATACAGQACAGAEADQAFADAEAAQAPAAAPgYIAHAGQgUAvgsgBQgVABgOgMg");
	this.shape_87.setTransform(736.5,246.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AhDBWQgcgiAAgxQAAgtAZgjQAegrA0AAQAjAAAVARQAVASAAAXQAAANgIAIQgJAJgNAAQgPAAgJgJQgKgKgCgZQgBgPgGgGQgGgGgHAAQgLAAgIAMQgNATAAAnQAAAhAKAcQALAdARAPQANAKASAAQAMAAALgGQALgFAOgQIAIAGQgQAegYAPQgYAPgbAAQgtAAgbgjg");
	this.shape_88.setTransform(717.2,250.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AhJBSQgVggAAgvQAAg3AfgiQAegiApAAQAiAAAaAcQAaAdABA4Ih8AAQACAsAWAbQAQATAYABQAPAAAMgIQALgJAOgVIAIAFQgSAngXAPQgWAQgeAAQgxAAgagngAgQhcQgOAWAAAmIAAAJIBBAAQAAgogEgOQgEgQgJgHQgFgEgJAAQgMAAgIAMg");
	this.shape_89.setTransform(695,250.3);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("Ag9CmIAAgJQAPgBAIgIQAFgFAAgZIAAjrQAAgYgGgGQgGgIgQAAIAAgKIBfAAIAAEbQAAAZAGAGQAFAHARABIAAAJg");
	this.shape_90.setTransform(676.8,245.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AhJBSQgVggAAgvQAAg3AfgiQAegiApAAQAiAAAaAcQAaAdABA4Ih8AAQACAsAWAbQAQATAYABQAPAAAMgIQALgJAOgVIAIAFQgSAngXAPQgWAQgeAAQgxAAgagngAgQhcQgOAWAAAmIAAAJIBBAAQAAgogEgOQgEgQgJgHQgFgEgJAAQgMAAgIAMg");
	this.shape_91.setTransform(658.9,250.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgbCqQgOgDgVgJQgLgFgIAAQgGAAgIAFQgGAFgFAKIgJAAIAAh9IAJAAQAKA1AfAbQAfAcAjAAQAbAAAQgPQAQgPAAgUQAAgLgGgLQgGgLgNgKQgMgKgggQQgtgWgUgPQgUgPgKgUQgLgTAAgXQAAgoAdgcQAdgbAsAAQAQAAAPAEQALACARAJQAQAHAGAAQAHAAADgEQAFgDACgPIAIAAIACBuIgKAAQgGgqgcgZQgcgZgfAAQgZAAgPANQgOAOAAARQAAALAFAIQAHAMAQALQALAIApAVQA6AcAUAZQAUAZAAAhQAAApggAeQggAegyAAQgPAAgOgDg");
	this.shape_92.setTransform(633.8,245.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},89).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24,p:{x:703.8}},{t:this.shape_23,p:{x:726}},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18,p:{x:884.3}},{t:this.shape_17,p:{x:914.7}},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7,p:{x:828,y:294.6}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},20).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_24,p:{x:703.7}},{t:this.shape_23,p:{x:725.9}},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_18,p:{x:884.2}},{t:this.shape_17,p:{x:914.6}},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7,p:{x:828,y:294.6}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},20).to({state:[{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67,p:{x:890.9,y:175.5}},{t:this.shape_66},{t:this.shape_65,p:{x:954.4,y:185.7}},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53,p:{x:884.9,y:238}},{t:this.shape_52,p:{x:906.1,y:232.5}},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_7,p:{x:719.5,y:289.5}},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_65,p:{x:909.8,y:255.7}},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_53,p:{x:770.9,y:308}},{t:this.shape_52,p:{x:792.1,y:302.5}},{t:this.shape_67,p:{x:813.1,y:302.9}},{t:this.shape_77},{t:this.shape_76}]},20).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// background
	this.instance = new lib.BackGround();
	this.instance.parent = this;

	this.instance_1 = new lib.BackGround4();
	this.instance_1.parent = this;
	this.instance_1._off = true;

	this.instance_2 = new lib.BackGround1();
	this.instance_2.parent = this;
	this.instance_2._off = true;

	this.instance_3 = new lib.BackGround2();
	this.instance_3.parent = this;
	this.instance_3._off = true;

	this.instance_4 = new lib.BackGround3();
	this.instance_4.parent = this;
	this.instance_4._off = true;

	this.instance_5 = new lib.BackGround5();
	this.instance_5.parent = this;
	this.instance_5._off = true;

	this.instance_6 = new lib.BackGround6();
	this.instance_6.parent = this;
	this.instance_6._off = true;

	this.instance_7 = new lib.BackGround7();
	this.instance_7.parent = this;
	this.instance_7._off = true;

	this.instance_8 = new lib.BackGround9();
	this.instance_8.parent = this;
	this.instance_8._off = true;

	this.instance_9 = new lib.BackGround8Light();
	this.instance_9.parent = this;
	this.instance_9._off = true;

	this.instance_10 = new lib.Exit();
	this.instance_10.parent = this;

	this.instance_11 = new lib.BackGroundEx1();
	this.instance_11.parent = this;
	this.instance_11._off = true;

	this.instance_12 = new lib.BackGroundEx2();
	this.instance_12.parent = this;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},18).to({state:[{t:this.instance_1}]},100).to({state:[{t:this.instance_1}]},60).to({state:[{t:this.instance_1}]},10).to({state:[{t:this.instance_1}]},20).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},89).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},60).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},38).to({state:[{t:this.instance_2}]},20).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},129).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},49).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},59).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},139).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},109).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},99).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},39).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},49).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},99).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_4}]},49).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},49).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},139).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},59).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},59).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},69).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},64).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},64).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},39).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},79).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},49).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},39).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},40).to({state:[{t:this.instance_8}]},49).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},39).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},69).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},60).to({state:[{t:this.instance_9}]},59).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_7}]},49).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},69).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},119).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_8}]},69).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},39).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},59).to({state:[{t:this.instance_9}]},50).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_5}]},39).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},29).to({state:[{t:this.instance_3}]},30).to({state:[{t:this.instance_3}]},60).to({state:[{t:this.instance_3}]},40).to({state:[{t:this.instance_3}]},10).to({state:[{t:this.instance_3}]},40).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_9}]},49).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_10}]},59).to({state:[{t:this.instance_10}]},6).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},33).to({state:[{t:this.instance_11}]},40).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},49).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_11}]},49).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},59).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},59).to({state:[{t:this.instance_12}]},40).to({state:[{t:this.instance_12}]},30).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_6}]},59).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_12}]},59).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(208).to({_off:true},1).wait(90).to({_off:false},0).wait(60).to({_off:true},1).wait(889).to({_off:false},0).wait(49).to({_off:true},1).wait(140).to({_off:false},0).wait(59).to({_off:true},1).wait(260).to({_off:false},0).wait(39).to({_off:true},1).wait(80).to({_off:false},0).wait(49).to({_off:true},1).wait(1670));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(210).to({_off:false},0).wait(89).to({_off:true},1).wait(61).to({_off:false},0).wait(58).to({_off:true},1).wait(130).to({_off:false},0).wait(49).to({_off:true},1).wait(3000));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(420).to({_off:false},0).wait(129).to({_off:true},1).wait(50).to({_off:false,x:1},0).wait(59).to({_off:true},1).wait(140).to({_off:false,x:0},0).wait(109).to({_off:true},1).wait(100).to({_off:false},0).wait(39).to({_off:true},1).wait(1740).to({_off:false},0).wait(209).to({_off:true},1).wait(190).to({_off:false},0).wait(49).to({_off:true},1).wait(360));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(660).to({_off:false},0).wait(139).to({_off:true},1).wait(250).to({_off:false},0).wait(49).to({_off:true},1).wait(100).to({_off:false},0).wait(49).to({_off:true},1).wait(2350));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(910).to({_off:false},0).wait(99).to({_off:true},1).wait(290).to({_off:false,y:-1},0).wait(139).to({_off:true},1).wait(60).to({_off:false,y:0},0).wait(59).to({_off:true},1).wait(135).to({_off:false},0).wait(64).to({_off:true},1).wait(840).to({_off:false},0).wait(39).to({_off:true},1).wait(110).to({_off:false},0).wait(39).to({_off:true},1).wait(810));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1100).to({_off:false},0).wait(99).to({_off:true},1).wait(360).to({_off:false},0).wait(134).to({_off:true},1).wait(235).to({_off:false},0).wait(39).to({_off:true},1).wait(90).to({_off:false},0).wait(39).to({_off:true},1).wait(1190).to({_off:false},0).wait(59).to({_off:true},1).wait(130).to({_off:false},0).wait(59).to({_off:true},1).wait(60));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(1800).to({_off:false},0).wait(79).to({_off:true},1).wait(220).to({_off:false},0).wait(69).to({_off:true},1).wait(120).to({_off:false},0).wait(49).to({_off:true},1).wait(1260));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1970).to({_off:false},0).wait(89).to({_off:true},1).wait(280).to({_off:false},0).wait(69).to({_off:true},1).wait(120).to({_off:false},0).wait(69).to({_off:true},1).wait(1000));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(2170).to({_off:false},0).wait(119).to({_off:true},1).wait(120).to({_off:false},0).wait(119).to({_off:true},1).wait(110).to({_off:false},0).wait(109).to({_off:true},1).wait(250).to({_off:false},0).wait(49).to({_off:true},1).wait(550));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(3116).to({_off:false},0).wait(73).to({_off:true},1).wait(50).to({_off:false},0).wait(49).to({_off:true},1).wait(310));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(3350).to({_off:false},0).wait(129).to({_off:true},1).wait(60).to({_off:false},0).wait(60));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_back = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// back
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("EgiBgalMBEDAAAQBrAAAAB3MAAAAxdQAAB4hrAAMhEDAAAQhrAAAAh4MAAAgxdQAAh3BrAAg");
	this.shape.setTransform(657,335.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgiBAanQhrAAAAh4MAAAgxdQAAh3BrAAMBEDAAAQBrAAAAB3MAAAAxdQAAB4hrAAg");
	this.shape_1.setTransform(657,335.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_back, null, null);


(lib.Replaybtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgdCBQgJgKAAgNQAAgNAJgJQAIgJAOAAQAMAAAJAJQAJAJAAANQAAANgJAKQgJAJgMAAQgOAAgIgJgAgNAuQAAgVACgLQACgLAKgRQAKgTADgMQADgLABgRQAAgagLgMQgJgNgOAAQgKAAgIAGQgFAEAAAFQAAADAEAHQAIAPAAAKQAAAKgHAGQgGAHgKAAQgLAAgHgIQgIgIAAgMQAAgXAVgSQAUgRAjAAQAlAAAUASQATASAAAaQAAASgKAQQgKAQgdATQgTAMgHAKQgEAKgCAUg");
	this.shape.setTransform(94.9,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAGBeIAAgHQALgCAEgGQAEgGgBgTIAAhQQAAgXgCgFQgBgHgFgCQgDgDgGAAQgQgBgOAYIAABhQAAAUAEAGQAEAGAKABIAAAHIhcAAIAAgHQALgBAFgGQADgEABgWIAAhmQAAgUgFgFQgDgGgMgCIAAgHIBKAAIAAAYQAOgPAMgHQANgHAPAAQASAAALAKQAMAJAEAPQADALAAAgIAABGQAAAWAEAEQAEAFALACIAAAHg");
	this.shape_1.setTransform(73.8,3.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgxCIIAAgIQANAAAFgHQAEgEABgTIAAhqQAAgTgFgGQgFgFgNgBIAAgHIBNAAIAACQQgBATAFAGQAEAEANABIAAAIgAgVhTQgIgJAAgNQAAgMAIgIQAKgKALABQAMgBAJAKQAJAIAAAMQAAANgJAJQgJAJgMAAQgLAAgKgJg");
	this.shape_2.setTransform(57.3,-0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AATBYQgJgHgBgPQghAdgaAAQgQAAgKgKQgLgKAAgQQAAgVASgQQASgRA8gbIAAgSQAAgVgDgFQgCgFgFgEQgGgEgIAAQgNAAgIAFQgFAEAAAEQAAAEAFAHQAIAIAAAIQAAAJgHAHQgIAHgLAAQgMAAgJgIQgIgHAAgKQAAgOALgNQALgNAUgGQAUgHAVAAQAaAAAPALQAPALAEANQADAIAAAdIAABGIABAQQABADACACQAAAAABAAQAAABABAAQAAAAABAAQABAAAAAAQAFAAAGgHIAGAFQgKAOgLAHQgKAGgNAAQgQAAgJgHgAgaAUQgHALAAAKQAAAJAGAHQAFAFAJAAQAKAAAMgKIAAg9QgXANgMAQg");
	this.shape_3.setTransform(42.1,3.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgyCEQgVgEgIgJQgJgIAAgKQAAgJAHgHQAHgHASgFQgZgMAAgXQAAgNAKgNQAKgMAWgJQgZgKgMgPQgMgQAAgUQAAgbAWgUQAWgTAiAAQARAAAUAHIA9AAIAAAWIgjAAQAKAJADAIQAFALAAALQAAAUgKAOQgMAOgSAJQgTAIgNAAIgXgBQgKAAgGAFQgFAFAAAIQgBAHAGAFQAFAEAMAAIAhAAQApAAAPAJQAXAMAAAaQAAARgKAOQgLANgQAHQgaAJgfAAQgZAAgUgFgAgsBRQgLAGAAAKQAAAKAMAJQALAIAgAAQAaAAAPgIQAQgHAAgNQAAgFgDgDQgGgGgKgCQgLgCgsAAQgVAAgGADgAgZhxQgIAMAAAkQAAAdAIALQAHAKALAAQALAAAHgKQAIgLAAgfQAAgjgJgNQgGgJgKAAQgMAAgHALg");
	this.shape_4.setTransform(21.9,8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AANCHIAAgHIAFAAQAPAAAGgEQAFgDAAgGIgBgHIgGgPIgOghIhdAAIgLAaQgFANAAAIQAAALAIAFQAGADAUACIAAAHIhYAAIAAgHQAPgCAJgKQAJgJANgfIBejSIAEAAIBfDYQAOAfAJAIQAHAGAMABIAAAHgAg/AtIBPAAIgmhag");
	this.shape_5.setTransform(-3,-0.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhNB9QgLgJAAgNQAAgLAHgIQAHgIAKABQAKgBAGAHQAGAGAAANQAAAHACADQABACADAAQAFAAAFgGQAIgIAKgdIAGgQIg6iGQgOgegGgIQgHgGgIgEIAAgHIBfAAIAAAHQgIABgEADQgEAEAAAEQAAAIAKAWIAeBHIAVg3QAMgdAAgMQAAgHgFgEQgFgFgMgBIAAgHIA9AAIAAAHQgJABgGAHQgFAFgOAjIgzCGQgTAzgKAMQgNAQgUAAQgRAAgJgJg");
	this.shape_6.setTransform(-35.2,8.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AATBYQgJgHgBgPQghAdgaAAQgQAAgKgKQgLgKAAgQQAAgVASgQQASgRA8gbIAAgSQAAgVgDgFQgCgFgFgEQgGgEgIAAQgNAAgIAFQgFAEAAAEQAAAEAFAHQAIAIAAAIQAAAJgHAHQgIAHgLAAQgMAAgJgIQgIgHAAgKQAAgOALgNQALgNAUgGQAUgHAVAAQAaAAAPALQAPALAEANQADAIAAAdIAABGIABAQQABADACACQAAAAABAAQAAABABAAQAAAAABAAQABAAAAAAQAFAAAGgHIAGAFQgKAOgLAHQgKAGgNAAQgQAAgJgHgAgaAUQgHALAAAKQAAAJAGAHQAFAFAJAAQAKAAAMgKIAAg9QgXANgMAQg");
	this.shape_7.setTransform(-54.6,3.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgwCFIAAgIQAMAAAGgHQAEgEAAgTIAAi8QAAgUgFgFQgEgGgNAAIAAgHIBLAAIAADiQAAATAFAGQAEAEANABIAAAIg");
	this.shape_8.setTransform(-70.5,-0.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhuCFIAAgIQATABAGgEQAHgDACgGQADgFAAgWIAAirQAAgVgDgGQgCgGgHgDQgGgDgTAAIAAgHIByAAQA5AAAZAUQAZAVAAAeQAAAagQASQgQARgcAHQgTAFgsAAIAABJQAAAWACAFQAEAGAGADQAGAEARgBIAAAIgAgMgCIAKAAQAWAAANgOQAOgOAAgdQAAgegOgNQgNgOgYAAIgIAAg");
	this.shape_9.setTransform(-88.6,-0.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(5,1,1).p("A0Wl+MAotAAAQBkAAAABkIAAI1QAABkhkAAMgotAAAQhkAAAAhkIAAo1QAAhkBkAAg");

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CCCCCC").s().p("A0WF/QhkgBAAhjIAAo1QAAhjBkgBMAotAAAQBkABAABjIAAI1QAABjhkABg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-142.8,-40.7,285.6,81.5);


(lib.RedShield_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.RedShield();
	this.instance.parent = this;
	this.instance.setTransform(-37.5,-37.5,0.234,0.232);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.RedShield_1, new cjs.Rectangle(-37.5,-37.5,75,75), null);


(lib.PlayBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AiIDbQgSgQAAgXQAAgUAMgNQAMgNASAAQARAAAKALQALALAAAXQAAANADAEQADADAFAAQAIAAAJgJQAOgPATgzIAJgbIhnjsQgXg1gLgNQgLgMgQgFIAAgMICpAAIAAAMQgQABgHAGQgGAGAAAIQAAANARAmIA1B9IAmhhQAUgzAAgUQAAgNgIgHQgJgIgVgBIAAgMIBrAAIAAAMQgQACgKALQgKAKgXA8IhbDsQgiBZgRAVQgXAcgkAAQgcAAgRgQg");
	this.shape.setTransform(50.1,15.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAiCaQgQgNgDgaQg5A0gvAAQgcAAgRgSQgSgSAAgbQAAglAfgdQAfgdBpgwIAAggQAAgkgEgJQgEgKgKgHQgLgHgNAAQgXAAgOAKQgJAGAAAIQAAAIAKAKQANAPgBANQABARgMAMQgNAMgVAAQgVAAgPgNQgOgNAAgSQAAgYAUgWQATgXAjgMQAjgMAlAAQAtAAAbAUQAZATAJAWQAEAPAAAzIAAB7QABAWABAGQABAFAEADQAEADAEAAQAJAAAJgNIALAJQgRAZgTALQgTAMgXAAQgbAAgPgNgAgtAjQgOATAAASQAAAQAMAMQAIAJAPAAQARAAAWgTIAAhqQgpAXgTAcg");
	this.shape_1.setTransform(16.2,7.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhVDoIAAgNQAVAAAKgMQAHgIAAgiIAAlJQAAgigIgJQgHgKgXgBIAAgNICFAAIAAGMQgBAiAJAKQAHAJAXABIAAANg");
	this.shape_2.setTransform(-11.7,0.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AjBDoIAAgNQAgAAALgGQAMgGAEgJQAFgKAAgmIAAkrQAAgmgFgKQgEgJgMgGQgMgGgfAAIAAgNIDJAAQBjAAAsAkQArAjAAA2QAAAtgcAgQgcAfgxAMQghAIhOAAIAACAQAAAmAFAKQAEAJAMAGQALAGAfAAIAAANgAgWgEIARABQApAAAWgZQAXgZAAg0QAAgzgXgYQgWgYgsAAIgOAAg");
	this.shape_3.setTransform(-43.3,0.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(3,1,1).p("AxUleMAipAAAQBkAAAABkIAAH1QAABkhkAAMgipAAAQhkAAAAhkIAAn1QAAhkBkAAg");
	this.shape_4.setTransform(0,5.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#CCCCCC").s().p("AxUFfQhkAAAAhkIAAn1QAAhkBkAAMAipAAAQBkAAAABkIAAH1QAABkhkAAg");
	this.shape_5.setTransform(0,5.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.3,-40.7,244.8,83.1);


(lib.NextButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		playSound("Selectwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgMBMQgIgHgCgHQgBgFAAgTIAAg/IgPAAIAAgEQAQgMALgMQALgNAHgPIAEAAIAAAsIAcAAIAAAMIgcAAIAABIQAAALABADIAEAFIAEABQAIAAAIgMIADADQgJAYgYAAQgKAAgIgGg");
	this.shape.setTransform(20.7,0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("AgFA7IAAgEQAGgBADgBQAAgBAAAAQAAAAABgBQAAAAAAgBQAAgBAAAAQAAgEgEgHIgKgUIgIANIgGALIgCAEQAAADACACQAAAAAAABQAAAAABABQAAAAABAAQAAABABAAIAIABIAAAEIgvAAIAAgEQAIAAAIgFQAHgFAOgUIAKgOIgVglQgKgTgFgEQgFgEgGgBIAAgEIBAAAIAAAEIgCAAIgGADIgBADIABAEIADAGIAIASIAFgHQAKgOAAgGQAAAAAAgBQAAgBgBAAQAAgBAAAAQgBgBAAAAQgCgCgGgBIAAgEIAqAAIAAAEQgIABgGAEQgHAFgJAMIgMAUIAUAmQALAUAGAGQAEACAGABIAAAEg");
	this.shape_1.setTransform(9.8,2.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgmAqQgLgPAAgZQAAgdAQgRQAQgSAVAAQASAAANAPQAOAPABAdIhBAAQACAWALAOQAIALAMAAQAIAAAGgEQAGgEAHgMIAFADQgKATgMAJQgLAIgQAAQgZAAgOgVgAgIgvQgHAMAAATIAAAEIAhAAQAAgUgCgIQgCgIgFgDQgCgDgFAAQgGAAgEAHg");
	this.shape_2.setTransform(-2.4,2.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AA/BYIh0iPIAABtQAAAPAGAFQAIAFAIAAIAEAAIAAAFIg9AAIAAgFQAOAAAGgGQAGgFAAgOIAAh4IgEgFQgGgHgEgCQgEgCgIgBIAAgEIA9AAIBUBpIAAhJQAAgPgFgFQgGgIgOAAIAAgEIA5AAIAAAEQgLACgDACQgEADgDAEQgCAGAAALIAACPg");
	this.shape_3.setTransform(-17.9,-0.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(2,1,1).p("AkLifIIXAAQArAAAfAvQAeAuAABCIAAABQAABBgeAvQgfAvgrAAIoXAAQgrAAgfgvQgegvAAhBIAAgBQAAhCAeguQAfgvArAAg");
	this.shape_4.setTransform(0,1.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AkLCgQgrAAgegvQgfgvAAhCIAAAAQAAhBAfgvQAeguArgBIIXAAQArABAeAuQAfAvAABBIAAAAQAABCgfAvQgeAvgrAAg");
	this.shape_5.setTransform(0,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.2,-16.9,76.4,35);


(lib.Coin_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Coin();
	this.instance.parent = this;
	this.instance.setTransform(-28,-28.3,0.176,0.176);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Coin_1, new cjs.Rectangle(-28,-28.3,56.2,56.7), null);


(lib.CharaStand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Player1();
	this.instance.parent = this;
	this.instance.setTransform(-50,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.CharaStand, new cjs.Rectangle(-50,-75,100,150), null);


(lib.CharacterWalkUp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.PlayerBack1();
	this.instance.parent = this;
	this.instance.setTransform(-50,-75);

	this.instance_1 = new lib.PlayerBack2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-50,-75);

	this.instance_2 = new lib.PlayerBack3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-50,-75);

	this.instance_3 = new lib.PlayerBack4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-50,-75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-75,100,150);


(lib.CharacterWalkRight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.PlayerLeft1();
	this.instance.parent = this;
	this.instance.setTransform(50,-75,1,1,0,0,180);

	this.instance_1 = new lib.PlayerLeft2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(50,-75,1,1,0,0,180);

	this.instance_2 = new lib.PlayerLeft3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(50,-75,1,1,0,0,180);

	this.instance_3 = new lib.PlayerLeft4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(50,-75,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-75,100,150);


(lib.CharacterWalkLeft = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.PlayerLeft1();
	this.instance.parent = this;
	this.instance.setTransform(-50,-75);

	this.instance_1 = new lib.PlayerLeft2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-50,-75);

	this.instance_2 = new lib.PlayerLeft3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-50,-75);

	this.instance_3 = new lib.PlayerLeft4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-50,-75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-75,100,150);


(lib.CharacterWalkDown = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Player1();
	this.instance.parent = this;
	this.instance.setTransform(-50,-75);

	this.instance_1 = new lib.Player2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-50,-75);

	this.instance_2 = new lib.Player3();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-50,-75);

	this.instance_3 = new lib.Player4();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-50,-75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-50,-75,100,150);


(lib.ButtonUp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Arrow();
	this.instance.parent = this;
	this.instance.setTransform(-46.3,75,0.358,0.358,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.3,-75,92.7,150);


(lib.ButtonRight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Arrow();
	this.instance.parent = this;
	this.instance.setTransform(-75,-46.3,0.358,0.358);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-46.3,150,92.7);


(lib.ButtonLeft = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Arrow();
	this.instance.parent = this;
	this.instance.setTransform(75,-46.3,0.358,0.358,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75,-46.3,150,92.7);


(lib.ButtonDown = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Arrow();
	this.instance.parent = this;
	this.instance.setTransform(46.4,-75,0.358,0.358,90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.3,-75,92.7,150);


(lib.BlueShield_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.BlueShield();
	this.instance.parent = this;
	this.instance.setTransform(-38.4,-38.7,0.24,0.24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.BlueShield_1, new cjs.Rectangle(-38.4,-38.7,76.8,77.5), null);


(lib.Scene_1_Up_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Up
	this.btnUp9 = new lib.ButtonUp();
	this.btnUp9.name = "btnUp9";
	this.btnUp9.parent = this;
	this.btnUp9.setTransform(647.1,88.2);
	this.btnUp9._off = true;
	new cjs.ButtonHelper(this.btnUp9, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btnUp9).wait(2010).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Up_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Up
	this.btnUp8 = new lib.ButtonUp();
	this.btnUp8.name = "btnUp8";
	this.btnUp8.parent = this;
	this.btnUp8.setTransform(644.5,95.5);
	this.btnUp8._off = true;
	new cjs.ButtonHelper(this.btnUp8, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btnUp8).wait(2230).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Up_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Up
	this.btnUp7 = new lib.ButtonUp();
	this.btnUp7.name = "btnUp7";
	this.btnUp7.parent = this;
	this.btnUp7.setTransform(665.8,89);
	this.btnUp7._off = true;
	new cjs.ButtonHelper(this.btnUp7, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btnUp7).wait(1840).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Up_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Up
	this.btnUp6 = new lib.ButtonUp();
	this.btnUp6.name = "btnUp6";
	this.btnUp6.parent = this;
	this.btnUp6.setTransform(671.6,97.4);
	this.btnUp6._off = true;
	new cjs.ButtonHelper(this.btnUp6, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btnUp6).wait(1150).to({_off:false},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Up_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Up
	this.btnUp5 = new lib.ButtonUp();
	this.btnUp5.name = "btnUp5";
	this.btnUp5.parent = this;
	this.btnUp5.setTransform(668.1,84.5);
	this.btnUp5._off = true;
	new cjs.ButtonHelper(this.btnUp5, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btnUp5).wait(960).to({_off:false},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Up = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Up
	this.btnUp2 = new lib.ButtonUp();
	this.btnUp2.name = "btnUp2";
	this.btnUp2.parent = this;
	this.btnUp2.setTransform(627.7,89.4);
	this.btnUp2._off = true;
	new cjs.ButtonHelper(this.btnUp2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btnUp2).wait(491).to({_off:false},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_text = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// text
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgWAXQgKgKABgNQgBgNAKgJQAKgKAMAAQANAAAKAKQAKAJAAANQAAANgKAKQgKAJgNAAQgMAAgKgJg");
	this.shape.setTransform(798.9,348.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgTB1QgMgLgEgLQgBgHAAgdIAAhiIgYAAIAAgGQAYgSASgTQARgUAMgXIAHAAIAABDIArAAIAAATIgrAAIAABwQgBAQACAEQACAFADADQAEADADAAQANgBALgTIAGAFQgQAlgkAAQgQAAgMgJg");
	this.shape_1.setTransform(787.5,338.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgfBZIgIgDQgHAAgEAKIgGAAIgDhBIAGAAQAJAZAPANQAQANANAAQAJAAAGgGQAGgFAAgJQAAgJgGgHQgGgHgTgOQgegUgJgKQgNgQAAgUQAAgVAPgRQAOgRAcAAQAOAAANAHQAGADADAAQAEAAACgBIAHgIIAGAAIADA+IgHAAQgLgcgNgKQgNgKgMAAQgIAAgFAFQgGAGAAAHQAAAFAEAFQAGAIAcATQAcAUAKAMQAJAOAAARQAAAPgIAOQgIAPgNAIQgOAIgRAAQgMAAgWgIg");
	this.shape_2.setTransform(772.9,341.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag7BBQgQgZAAglQAAgtAYgbQAZgbAgAAQAcAAAVAXQAUAXABAsIhjAAQACAkASAVQAMAQATAAQAMAAAJgGQAKgHALgRIAGAEQgOAfgSAMQgSANgYAAQgoAAgVgggAgMhJQgMARAAAeIAAAHIA0AAQAAgfgDgMQgDgMgIgGQgEgDgHAAQgJAAgGAKg");
	this.shape_3.setTransform(756.5,341.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhNBeIAAgHQAMgBAEgFQAEgGAAgYIAAhkQAAgPgCgFQgBgGgFgCQgDgDgJAAIAAgIIBKAAIAAAqQASgcANgKQAOgJANAAQALAAAGAHQAHAGgBAMQABAOgHAHQgGAHgJAAQgLAAgHgGIgJgIIgEgBQgGAAgGAEQgHAHgFAMQgEATgBAWIAAA1QAAALACADQABAFAFADQAEADALAAIAAAHg");
	this.shape_4.setTransform(739.6,341.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("Ag/BEQgVgdAAgmQAAgmAWgeQAXgdAnAAQAXAAAVAMQAUANALAWQALAXAAAaQAAAngUAaQgYAggqAAQgoAAgXgdgAgQhKQgHAHgCAWQgCAWgBAnQAAAVADASQADAOAGAHQAIAHAIAAQAIAAAHgFQAHgGADgMQADgTAAg3QAAghgDgNQgEgMgHgGQgGgEgIAAQgIAAgIAIg");
	this.shape_5.setTransform(720.3,341.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhKCIIAAgHQAMgBAGgCQAEgDADgEQACgFAAgPIAAh+IgbAAIAAgTIAbAAIAAgXQgBgcAVgSQAVgUAhABQAYAAAMAJQAMAIAAAMQAAAJgHAGQgIAGgLAAQgLAAgFgFQgHgGAAgGIABgHIABgGQAAgEgCgDQgDgCgFAAQgFAAgEAEQgEAFAAAKIABA6IAbAAIAAATIgbAAIAAB+QAAASADAFQAGAHASAAIAAAHg");
	this.shape_6.setTransform(705.8,337.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("Ag7BBQgQgZAAglQAAgtAYgbQAZgbAgAAQAcAAAVAXQAUAXABAsIhjAAQACAkASAVQAMAQATAAQAMAAAJgGQAKgHALgRIAGAEQgOAfgSAMQgSANgYAAQgoAAgVgggAgMhJQgMARAAAeIAAAHIA0AAQAAgfgDgMQgDgMgIgGQgEgDgHAAQgJAAgGAKg");
	this.shape_7.setTransform(678.4,341.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AAGCFIAAgHQAKgCAFgHQADgFAAgTIAAhSQAAgVgBgGQgCgGgEgDQgFgDgFAAQgHAAgHAFQgIAGgIANIAABhQAAATADAFQADAHAMACIAAAHIhdAAIAAgHQAMgCAFgGQADgEAAgVIAAi4QAAgWgEgEQgDgFgNgCIAAgIIBLAAIAABqQAPgPALgHQANgGANAAQASAAAMAJQAMAKAEANQAEANAAAeIAABIQAAAVAEAFQAEAFAMACIAAAHg");
	this.shape_8.setTransform(658.2,337.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgTB1QgMgLgDgLQgCgHAAgdIAAhiIgYAAIAAgGQAZgSARgTQARgUAMgXIAHAAIAABDIArAAIAAATIgrAAIAABwQAAAQABAEQABAFAEADQAEADADAAQAMgBAMgTIAGAFQgQAlgjAAQgRAAgMgJg");
	this.shape_9.setTransform(640.6,338.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhKCIIAAgHQAMgBAFgCQAFgDADgEQABgFAAgPIAAh+IgaAAIAAgTIAaAAIAAgXQAAgcAVgSQAUgUAjABQAXAAANAJQALAIAAAMQAAAJgHAGQgIAGgLAAQgKAAgHgFQgFgGgBgGIACgHIABgGQAAgEgDgDQgDgCgEAAQgGAAgEAEQgEAFAAAKIAAA6IAbAAIAAATIgbAAIAAB+QAAASAFAFQAFAHARAAIAAAHg");
	this.shape_10.setTransform(619.2,337.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("Ag+BEQgXgdAAgmQAAgmAYgeQAWgdAnAAQAXAAAVAMQAVANAKAWQAKAXAAAaQABAngUAaQgYAggqAAQgoAAgWgdgAgPhKQgIAHgCAWQgDAWAAAnQABAVADASQABAOAIAHQAGAHAJAAQAIAAAGgFQAIgGACgMQAFgTAAg3QAAghgFgNQgDgMgIgGQgFgEgHAAQgKAAgGAIg");
	this.shape_11.setTransform(600.4,341.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgTB1QgMgLgDgLQgCgHAAgdIAAhiIgYAAIAAgGQAZgSARgTQARgUAMgXIAHAAIAABDIArAAIAAATIgrAAIAABwQAAAQABAEQABAFAEADQAEADADAAQAMgBAMgTIAGAFQgQAlgjAAQgRAAgMgJg");
	this.shape_12.setTransform(574,338.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ag5BUQgNgJgEgMQgEgNAAggIAAhHQAAgVgEgFQgDgGgNgBIAAgHIBLAAIAAB7QAAAUACAGQABAFAEADQAFADAEAAQAHAAAGgEQAHgEALgQIAAhgQAAgVgDgFQgFgGgLgBIAAgHIBKAAIAACOQAAAVAEAFQADAFAMACIAAAHIhKAAIAAgZQgNAQgMAHQgNAHgQAAQgPAAgMgKg");
	this.shape_13.setTransform(556,342);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("Ag+BEQgXgdAAgmQAAgmAYgeQAWgdAnAAQAYAAAUAMQAVANAKAWQAKAXAAAaQAAAngTAaQgYAggqAAQgoAAgWgdgAgQhKQgHAHgCAWQgCAWAAAnQAAAVACASQACAOAHAHQAIAHAIAAQAIAAAGgFQAIgGADgMQADgTAAg3QAAghgDgNQgEgMgIgGQgFgEgHAAQgJAAgIAIg");
	this.shape_14.setTransform(534.9,341.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhNBeIAAgHQAMgBAEgGQAEgFAAgYIAAhkQAAgQgBgEQgDgGgEgCQgDgDgJgBIAAgGIBKAAIAAApQARgcAOgKQAOgJAMAAQALAAAHAHQAGAHAAAMQAAANgGAHQgGAHgJAAQgLAAgHgHIgJgHIgFgBQgGAAgFAFQgIAGgDAMQgGATAAAWIAAA1QABALABADQABAGAFACQAFACALABIAAAHg");
	this.shape_15.setTransform(832.4,295.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("Ag7BBQgQgZAAglQAAgtAYgbQAZgbAgAAQAcAAAVAXQAUAXABAsIhjAAQACAkASAVQAMAQATAAQAMAAAJgGQAKgHALgRIAGAEQgOAfgSAMQgSANgYAAQgoAAgVgggAgMhJQgMARAAAeIAAAHIA0AAQAAgfgDgMQgDgMgIgGQgEgDgHAAQgJAAgGAKg");
	this.shape_16.setTransform(814.5,295.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AgTB1QgMgLgEgLQgBgHAAgdIAAhiIgYAAIAAgHQAYgRASgTQARgUAMgXIAGAAIAABDIAsAAIAAATIgsAAIAABwQABAQABAFQACAEADADQAEACADAAQAMABAMgUIAGAEQgQAmgkAAQgQAAgMgJg");
	this.shape_17.setTransform(798.9,292.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("Ag2BFQgWgbAAgnQAAgkAUgdQAYgiAqAAQAcAAARAOQAQAPAAARQAAALgGAHQgHAHgLAAQgMAAgHgIQgIgIgBgTQgCgMgEgFQgFgFgGAAQgIAAgHAKQgKAPAAAfQAAAaAIAWQAJAYANALQALAJAOAAQAKAAAIgFQAJgEAMgNIAGAFQgNAYgTAMQgUAMgVAAQgkAAgWgcg");
	this.shape_18.setTransform(783.5,295.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AATBYQgJgHgBgPQghAdgaAAQgQAAgKgKQgLgKAAgQQAAgVASgQQASgRA8gbIAAgSQAAgVgDgFQgCgFgFgEQgGgEgIAAQgNAAgIAFQgFAEAAAEQAAAEAFAHQAIAIAAAIQAAAJgHAHQgIAHgLAAQgMAAgJgIQgIgHAAgKQAAgOALgNQALgNAUgGQAUgHAVAAQAaAAAPALQAPALAEANQADAIAAAdIAABGIABAQQABADACACQAAAAABAAQAAABABAAQAAAAABAAQABAAAAAAQAFAAAGgHIAGAFQgKAOgLAHQgKAGgNAAQgQAAgJgHgAgaAUQgHALAAAKQAAAJAGAHQAFAFAJAAQAKAAAMgKIAAg9QgXANgMAQg");
	this.shape_19.setTransform(764.9,295.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AhOBeIAAgHQANgBAEgGQAEgFAAgYIAAhkQAAgQgCgEQgBgGgFgCQgDgDgKgBIAAgGIBLAAIAAApQASgcANgKQAOgJANAAQALAAAGAHQAHAHgBAMQABANgHAHQgGAHgJAAQgLAAgHgHIgJgHIgEgBQgGAAgGAFQgHAGgFAMQgEATgBAWIAAA1QAAALACADQABAGAFACQAEACALABIAAAHg");
	this.shape_20.setTransform(745.9,295.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AATBYQgJgHgBgPQghAdgaAAQgQAAgKgKQgLgKAAgQQAAgVASgQQASgRA8gbIAAgSQAAgVgDgFQgCgFgFgEQgGgEgIAAQgNAAgIAFQgFAEAAAEQAAAEAFAHQAIAIAAAIQAAAJgHAHQgIAHgLAAQgMAAgJgIQgIgHAAgKQAAgOALgNQALgNAUgGQAUgHAVAAQAaAAAPALQAPALAEANQADAIAAAdIAABGIABAQQABADACACQAAAAABAAQAAABABAAQAAAAABAAQABAAAAAAQAFAAAGgHIAGAFQgKAOgLAHQgKAGgNAAQgQAAgJgHgAgaAUQgHALAAAKQAAAJAGAHQAFAFAJAAQAKAAAMgKIAAg9QgXANgMAQg");
	this.shape_21.setTransform(727.1,295.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AAGCEIAAgGQAKgCAFgGQADgGAAgTIAAhRQAAgWgBgGQgCgGgEgDQgFgDgFAAQgHAAgHAFQgIAFgIAOIAABhQAAATADAGQADAGAMACIAAAGIhdAAIAAgGQAMgCAFgGQADgEAAgVIAAi5QAAgUgEgGQgDgFgNgBIAAgHIBLAAIAABqQAPgRALgGQANgHANAAQASAAAMAKQAMAKAEANQAEAOAAAdIAABIQAAAVAEAFQAEAFAMACIAAAGg");
	this.shape_22.setTransform(705.6,291.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("Ag2BFQgWgbAAgnQAAgkAUgdQAYgiAqAAQAcAAARAOQAQAPAAARQAAALgGAHQgHAHgLAAQgMAAgHgIQgIgIgBgTQgCgMgEgFQgFgFgGAAQgIAAgHAKQgKAPAAAfQAAAaAIAWQAJAYANALQALAJAOAAQAKAAAIgFQAJgEAMgNIAGAFQgNAYgTAMQgUAMgVAAQgkAAgWgcg");
	this.shape_23.setTransform(685.8,295.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("Ag7BBQgQgZAAglQAAgtAYgbQAZgbAgAAQAcAAAVAXQAUAXABAsIhjAAQACAkASAVQAMAQATAAQAMAAAJgGQAKgHALgRIAGAEQgOAfgSAMQgSANgYAAQgoAAgVgggAgMhJQgMARAAAeIAAAHIA0AAQAAgfgDgMQgDgMgIgGQgEgDgHAAQgJAAgGAKg");
	this.shape_24.setTransform(658,295.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAGCEIAAgGQAKgCAFgGQADgGAAgTIAAhRQAAgWgBgGQgCgGgEgDQgFgDgFAAQgHAAgHAFQgIAFgIAOIAABhQAAATADAGQADAGAMACIAAAGIhdAAIAAgGQAMgCAFgGQADgEAAgVIAAi5QAAgUgEgGQgDgFgNgBIAAgHIBLAAIAABqQAPgRALgGQANgHANAAQASAAAMAKQAMAKAEANQAEAOAAAdIAABIQAAAVAEAFQAEAFAMACIAAAGg");
	this.shape_25.setTransform(637.9,291.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgTB1QgMgLgDgLQgCgHAAgdIAAhiIgYAAIAAgHQAZgRARgTQARgUAMgXIAHAAIAABDIArAAIAAATIgrAAIAABwQAAAQABAFQABAEAEADQAEACADAAQAMABAMgUIAGAEQgQAmgjAAQgRAAgMgJg");
	this.shape_26.setTransform(620.2,292.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AAWBqQgOARgKAGQgLAGgNAAQgkAAgTgfQgRgZAAglQAAgeAKgWQAKgYASgLQARgMAVAAQANAAAJAFQAKAFAMANIAAg4QAAgUgCgFQgDgFgEgDQgEgDgNAAIAAgIIBQAAIAADRQAAAVACAEQACAHADADQAFADALABIAAAGIhNAPgAgZgiQgGAGgFAPQgFAOAAAgQAAAiAFARQAGARAIAHQAEAEAJAAQAQAAAPgbIAAhfQgOgcgVAAQgHAAgFAEg");
	this.shape_27.setTransform(592.6,291.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("Ag7BBQgQgZAAglQAAgtAYgbQAZgbAgAAQAcAAAVAXQAUAXABAsIhjAAQACAkASAVQAMAQATAAQAMAAAJgGQAKgHALgRIAGAEQgOAfgSAMQgSANgYAAQgoAAgVgggAgMhJQgMARAAAeIAAAHIA0AAQAAgfgDgMQgDgMgIgGQgEgDgHAAQgJAAgGAKg");
	this.shape_28.setTransform(572.6,295.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAWBqQgOARgKAGQgLAGgOAAQgjAAgTgfQgRgZAAglQAAgeAKgWQAKgYASgLQARgMAVAAQANAAAJAFQAKAFAMANIAAg4QAAgUgCgFQgDgFgEgDQgFgDgLAAIAAgIIBQAAIAADRQAAAVABAEQACAHADADQAFADALABIAAAGIhNAPgAgZgiQgGAGgFAPQgFAOAAAgQAAAiAFARQAFARAJAHQAEAEAJAAQAPAAAQgbIAAhfQgPgcgTAAQgHAAgGAEg");
	this.shape_29.setTransform(552.7,291.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgwCHIAAgGQAMgBAGgGQADgFAAgUIAAhpQABgUgFgEQgEgGgNgBIAAgHIBLAAIAACPQAAAUAFAGQAFAEANACIAAAGgAgUhTQgJgJAAgMQAAgNAJgJQAJgIALgBQAMABAKAIQAIAJAAANQAAAMgIAJQgKAJgMAAQgLAAgJgJg");
	this.shape_30.setTransform(535.9,291);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("Ag5BVQgNgKgEgNQgEgNAAgfIAAhIQAAgUgEgFQgDgGgNgBIAAgHIBKAAIAAB8QAAATADAGQACAFADAEQAFACAEAAQAHAAAGgDQAHgGALgPIAAhhQAAgUgEgFQgDgGgMgBIAAgHIBKAAIAACOQAAAVAEAFQADAFAMACIAAAGIhKAAIAAgYQgNAPgMAIQgNAHgQAAQgPAAgMgJg");
	this.shape_31.setTransform(519,295.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgyCEQgVgEgIgJQgJgIAAgKQAAgJAHgHQAGgHATgFQgagMAAgXQAAgNALgNQAKgMAXgJQgagKgMgPQgMgQAAgUQAAgbAWgUQAWgTAiAAQASAAASAHIA+AAIAAAWIgjAAQAKAJAEAIQAEALAAALQAAAUgKAOQgMAOgSAJQgTAIgNAAIgYgBQgIAAgGAFQgHAFAAAIQABAHAFAFQAGAEAMAAIAgAAQApAAAQAJQAWAMAAAaQAAARgKAOQgKANgRAHQgZAJggAAQgZAAgUgFgAgsBRQgLAGAAAKQAAAKALAJQAMAIAfAAQAbAAAQgIQAPgHAAgNQAAgFgDgDQgGgGgKgCQgKgCguAAQgTAAgHADgAgahxQgHAMAAAkQAAAdAHALQAJAKAKAAQALAAAHgKQAIgLAAgfQAAgjgJgNQgGgJgKAAQgLAAgJALg");
	this.shape_32.setTransform(498.3,299.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AhOB9QgKgJAAgOQAAgKAHgIQAHgIAKABQAKgBAGAHQAGAGAAANQAAAHACACQABADADAAQAFAAAFgGQAIgIAKgdIAHgQIg8iGQgNgfgGgHQgHgHgJgCIAAgIIBgAAIAAAIQgIAAgEADQgEAEAAAEQAAAIAKAVIAeBIIAVg3QAMgdAAgMQAAgHgFgFQgFgEgMAAIAAgIIA+AAIAAAIQgJAAgHAHQgFAFgOAjIg0CGQgSAzgKAMQgNAQgVABQgQAAgKgKg");
	this.shape_33.setTransform(837.6,253.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgwCFIAAgIQAMAAAGgHQAEgEAAgTIAAi8QAAgUgFgFQgEgFgNgBIAAgIIBLAAIAADjQAAATAFAFQAEAGANAAIAAAIg");
	this.shape_34.setTransform(822.3,245);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgwCFIAAgIQAMAAAGgHQAEgEAAgTIAAi8QAAgUgFgFQgEgFgNgBIAAgIIBLAAIAADjQAAATAFAFQAEAGANAAIAAAIg");
	this.shape_35.setTransform(811.2,245);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("Ag5BUQgNgJgEgMQgEgOAAgfIAAhIQAAgUgDgFQgEgGgNgBIAAgHIBKAAIAAB7QAAAUADAGQACAFADADQAFADAEABQAHgBAGgEQAHgFALgPIAAhhQAAgUgEgFQgEgGgLgBIAAgHIBKAAIAACOQAAAVAEAFQADAFAMABIAAAIIhKAAIAAgZQgNAQgMAHQgNAHgQAAQgQAAgLgKg");
	this.shape_36.setTransform(794.3,249.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AhKCIIAAgIQAMAAAFgCQAGgDABgEQACgFAAgPIAAh+IgaAAIAAgTIAaAAIAAgXQABgcAUgSQAVgUAiABQAYgBAMAKQALAIAAAMQAAAIgIAHQgGAGgNAAQgKAAgGgFQgFgGAAgGIABgHIABgHQgBgEgCgCQgDgDgEAAQgGAAgEAGQgEAEAAAKIAAA6IAbAAIAAATIgbAAIAAB+QAAASAFAFQAFAHARgBIAAAIg");
	this.shape_37.setTransform(778.7,244.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgfBZIgIgDQgHAAgEAKIgGAAIgDhBIAGAAQAJAZAPANQAQANANAAQAJAAAGgGQAGgFAAgJQAAgJgGgHQgGgHgTgOQgegUgJgKQgNgQAAgUQAAgVAPgRQAOgRAcAAQAOAAANAHQAGADADAAQAEAAACgBIAHgIIAGAAIADA+IgHAAQgLgcgNgKQgNgKgMAAQgIAAgFAFQgGAGAAAHQAAAFAEAFQAGAIAcATQAcAUAKAMQAJAOAAARQAAAPgIAOQgIAPgNAIQgOAIgRAAQgMAAgWgIg");
	this.shape_38.setTransform(762.2,249.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgfBZIgIgDQgHAAgEAKIgGAAIgDhBIAGAAQAJAZAPANQAQANANAAQAJAAAGgGQAGgFAAgJQAAgJgGgHQgGgHgTgOQgegUgJgKQgNgQAAgUQAAgVAPgRQAOgRAcAAQAOAAANAHQAGADADAAQAEAAACgBIAHgIIAGAAIADA+IgHAAQgLgcgNgKQgNgKgMAAQgIAAgFAFQgGAGAAAHQAAAFAEAFQAGAIAcATQAcAUAKAMQAJAOAAARQAAAPgIAOQgIAPgNAIQgOAIgRAAQgMAAgWgIg");
	this.shape_39.setTransform(746.7,249.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("Ag7BBQgQgZAAglQAAgtAYgbQAZgbAgAAQAcAAAVAXQAUAXABAsIhjAAQACAkASAVQAMAQATAAQAMAAAJgGQAKgHALgRIAGAEQgOAfgSAMQgSANgYAAQgoAAgVgggAgMhJQgMARAAAeIAAAHIA0AAQAAgfgDgMQgDgMgIgGQgEgDgHAAQgJAAgGAKg");
	this.shape_40.setTransform(730.2,249.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("Ag2BFQgWgbAAgnQAAgkAUgdQAYgiAqAAQAcAAARAOQAQAPAAARQAAALgGAHQgHAHgLAAQgMAAgHgIQgIgIgBgTQgCgMgEgFQgFgFgGAAQgIAAgHAKQgKAPAAAfQAAAaAIAWQAJAYANALQALAJAOAAQAKAAAIgFQAJgEAMgNIAGAFQgNAYgTAMQgUAMgVAAQgkAAgWgcg");
	this.shape_41.setTransform(712.5,249.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("Ag2BFQgWgbAAgnQAAgkAUgdQAYgiAqAAQAcAAARAOQAQAPAAARQAAALgGAHQgHAHgLAAQgMAAgHgIQgIgIgBgTQgCgMgEgFQgFgFgGAAQgIAAgHAKQgKAPAAAfQAAAaAIAWQAJAYANALQALAJAOAAQAKAAAIgFQAJgEAMgNIAGAFQgNAYgTAMQgUAMgVAAQgkAAgWgcg");
	this.shape_42.setTransform(694.7,249.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("Ag5BUQgNgJgEgMQgEgOAAgfIAAhIQAAgUgEgFQgEgGgMgBIAAgHIBLAAIAAB7QAAAUACAGQABAFAFADQADADAGABQAGgBAFgEQAIgFALgPIAAhhQAAgUgDgFQgFgGgLgBIAAgHIBKAAIAACOQAAAVAEAFQADAFAMABIAAAIIhKAAIAAgZQgNAQgMAHQgNAHgQAAQgPAAgMgKg");
	this.shape_43.setTransform(674.5,249.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgfBZIgIgDQgHAAgEAKIgGAAIgDhBIAGAAQAJAZAPANQAQANANAAQAJAAAGgGQAGgFAAgJQAAgJgGgHQgGgHgTgOQgegUgJgKQgNgQAAgUQAAgVAPgRQAOgRAcAAQAOAAANAHQAGADADAAQAEAAACgBIAHgIIAGAAIADA+IgHAAQgLgcgNgKQgNgKgMAAQgIAAgFAFQgGAGAAAHQAAAFAEAFQAGAIAcATQAcAUAKAMQAJAOAAARQAAAPgIAOQgIAPgNAIQgOAIgRAAQgMAAgWgIg");
	this.shape_44.setTransform(655.7,249.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("Ag7BBQgQgZAAglQAAgtAYgbQAZgbAgAAQAcAAAVAXQAUAXABAsIhjAAQACAkASAVQAMAQATAAQAMAAAJgGQAKgHALgRIAGAEQgOAfgSAMQgSANgYAAQgoAAgVgggAgMhJQgMARAAAeIAAAHIA0AAQAAgfgDgMQgDgMgIgGQgEgDgHAAQgJAAgGAKg");
	this.shape_45.setTransform(629.2,249.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgDBeIg9iMQgMgagGgHQgEgFgKgCIAAgHIBhAAIAAAHQgIAAgDAEQgGADAAAHQABAHAIAUIAdBEIAZg7QAKgZgBgLQAAgGgDgDQgFgEgLgBIAAgHIA8AAIAAAHQgJACgGAEQgFAGgLAaIg9COg");
	this.shape_46.setTransform(610.1,249.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AATBYQgJgHgBgPQghAdgaAAQgQAAgKgKQgLgKAAgQQAAgVASgQQASgRA8gbIAAgSQAAgVgDgFQgCgFgFgEQgGgEgIAAQgNAAgIAFQgFAEAAAEQAAAEAFAHQAIAIAAAIQAAAJgHAHQgIAHgLAAQgMAAgJgIQgIgHAAgKQAAgOALgNQALgNAUgGQAUgHAVAAQAaAAAPALQAPALAEANQADAIAAAdIAABGIABAQQABADACACQAAAAABAAQAAABABAAQAAAAABAAQABAAAAAAQAFAAAGgHIAGAFQgKAOgLAHQgKAGgNAAQgQAAgJgHgAgaAUQgHALAAAKQAAAJAGAHQAFAFAJAAQAKAAAMgKIAAg9QgXANgMAQg");
	this.shape_47.setTransform(590.6,248.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AAGCFIAAgIQAKgBAFgHQADgFAAgTIAAhSQAAgVgBgGQgCgGgEgDQgFgDgFAAQgHAAgHAGQgIAEgIAOIAABhQAAATADAFQADAHAMABIAAAIIhdAAIAAgIQAMgBAFgGQADgEAAgVIAAi4QAAgWgEgFQgDgEgNgCIAAgIIBLAAIAABqQAPgPALgHQANgGANgBQASAAAMAKQAMAKAEANQAEANAAAfIAABHQAAAVAEAFQAEAFAMABIAAAIg");
	this.shape_48.setTransform(569.1,245);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("Ag5BUQgNgJgEgMQgEgOAAgfIAAhIQAAgUgEgFQgEgGgMgBIAAgHIBLAAIAAB7QAAAUACAGQABAFAFADQADADAGABQAGgBAFgEQAIgFALgPIAAhhQAAgUgDgFQgFgGgLgBIAAgHIBKAAIAACOQAAAVAEAFQADAFAMABIAAAIIhKAAIAAgZQgNAQgMAHQgNAHgQAAQgPAAgMgKg");
	this.shape_49.setTransform(536.8,249.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("Ag+BEQgXgdAAgmQAAgmAXgeQAXgdAnAAQAYAAAUAMQAVANAKAWQALAXgBAaQAAAngTAaQgYAggqAAQgoAAgWgdgAgQhKQgHAHgCAWQgDAWABAnQAAAVACASQADAOAGAHQAIAHAIAAQAJAAAGgFQAHgGADgMQADgTAAg3QAAghgDgNQgEgMgIgGQgEgEgIAAQgJAAgIAIg");
	this.shape_50.setTransform(515.7,249.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AhJCFIAAgIIANAAQANAAAGgEQAFgCADgHQADgFAAgUIAAg1Ig/hxQgSghgIgGQgIgGgMAAIAAgIIB/AAIAAAIIgGAAQgMAAgEADQgFADAAAEQAAAHAPAcIAwBXIAvhPQASgdAAgJQAAgFgFgEQgGgFgSgBIAAgIIBRAAIAAAIQgOACgGAFQgKAJgWAkIg5BfIAABAQAAAVACAFQADAFAGAEQAGADALAAIAOAAIAAAIg");
	this.shape_51.setTransform(495.6,245);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AgaChQgMgLAAgRQAAgRALgLQAMgMAPAAQARAAAMAMQALALAAARQAAARgLALQgMALgRAAQgPAAgLgLgAgEA7QgCgcgJgnIgNg2QgMgvAAgVQAAgSAMgMQALgMARAAQASAAALAMQAMALAAATQAAASgMAyIgNA2QgHAcgDAng");
	this.shape_52.setTransform(758.8,193.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AhJBSQgVggAAgvQAAg4AfghQAegiApAAQAiAAAaAdQAaAcABA4Ih8AAQACAsAWAaQAQAUAYAAQAPABAMgJQALgHAOgWIAIAGQgSAlgXAQQgWAQgeAAQgxAAgagngAgQhcQgOAWAAAmIAAAIIBBAAQAAgngEgPQgEgOgJgIQgFgEgJAAQgMAAgIAMg");
	this.shape_53.setTransform(739.7,198.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAIB1IAAgJQANgBAFgJQAEgGAAgYIAAhlQAAgcgCgIQgCgHgFgEQgGgDgGAAQgUAAgSAdIAAB6QAAAZAFAHQAEAHANABIAAAJIhzAAIAAgJQAOgBAGgIQAEgFAAgaIAAiAQAAgagEgGQgFgHgPgBIAAgKIBdAAIAAAeQARgUAQgIQAQgIASAAQAWgBAPANQAPAMAFATQAEANAAAoIAABYQAAAaAEAGQAFAHAPABIAAAJg");
	this.shape_54.setTransform(714.5,198.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AhOBUQgcgjAAgwQAAgwAdgkQAcglAxAAQAeAAAZAPQAZAPAOAdQANAdAAAgQAAAxgYAhQgfAng0AAQgzAAgbglgAgUheQgJAKgCAcQgDAbgBAxQAAAaAEAXQADARAIAJQAKAJAKAAQAKAAAIgGQAKgIADgQQAEgWAAhGQABgqgFgPQgFgPgJgHQgHgGgKAAQgLAAgJAJg");
	this.shape_55.setTransform(688,198.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AAbCEQgRAWgNAIQgNAHgRAAQgsAAgZgnQgVggAAguQAAglANgcQAMgeAXgOQAWgPAZAAQAQAAAMAGQANAGAOARIAAhFQAAgbgCgFQgDgHgGgEQgGgDgPAAIAAgKIBlAAIAAEFQAAAcABAEQACAIAGAEQAFAEAOABIAAAIIhhATgAgfgrQgJAHgGAUQgFARAAAoQAAArAGAVQAGAUALAKQAGAEAKAAQAUAAATghIAAh4QgSgigZAAQgJAAgGAFg");
	this.shape_56.setTransform(662,193.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("Ag9ClIAAgJQAPAAAIgIQAFgGAAgYIAAjrQAAgYgGgHQgGgGgQgCIAAgJIBfAAIAAEbQAAAYAGAHQAFAGARABIAAAJg");
	this.shape_57.setTransform(628.5,193.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("Ag9ClIAAgJQAPAAAIgIQAFgGAAgYIAAjrQAAgYgGgHQgGgGgQgCIAAgJIBfAAIAAEbQAAAYAGAHQAFAGARABIAAAJg");
	this.shape_58.setTransform(614.6,193.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AhJBSQgVggAAgvQAAg4AfghQAegiApAAQAiAAAaAdQAaAcABA4Ih8AAQACAsAWAaQAQAUAYAAQAPABAMgJQALgHAOgWIAIAGQgSAlgXAQQgWAQgeAAQgxAAgagngAgQhcQgOAWAAAmIAAAIIBBAAQAAgngEgPQgEgOgJgIQgFgEgJAAQgMAAgIAMg");
	this.shape_59.setTransform(596.6,198.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("ABaCpIhSjUIhZDUIgJAAIhtkNQgRgpgHgIQgGgJgPgBIAAgJICPAAIAAAJQgRAAgGAFQgGAFAAAHQAAAJAMAeIBBCgIA0h9IgOgjQgLgdgGgJQgGgKgIgEQgIgEgQAAIAAgJICgAAIAAAJQgRAAgHACQgFACgDAEQgDAEAAAFQAAAGALAdIA8CbIA2iMQAJgWABgIQACgIAAgHQABgKgHgGQgHgGgTAAIAAgJIBVAAIAAAJQgIAAgHAFQgGAEgFAJIgPAmIhpEQg");
	this.shape_60.setTransform(562.9,193.6);

	this.instance = new lib.Coin_1();
	this.instance.parent = this;
	this.instance.setTransform(431.7,331.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgUAVQgIgJAAgMQAAgLAIgJQAJgIALAAQAMAAAJAIQAIAJAAALQAAAMgJAJQgIAIgMAAQgLAAgJgIg");
	this.shape_61.setTransform(817.7,346.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AAGBVIAAgHQAJgBAEgGQACgFAAgRIAAhIQAAgUgBgGQgCgFgDgDQgEgDgEAAQgOAAgNAWIAABXQgBASAEAFQADAFAJABIAAAHIhTAAIAAgHQALgBAEgFQADgEAAgTIAAhcQAAgTgDgEQgEgFgLgBIAAgHIBEAAIAAAWQAMgOAKgGQAMgHANAAQAQAAALAJQAKAJAEANQADAKAAAdIAAA/QAAATADAFQAEAEALABIAAAHg");
	this.shape_62.setTransform(803.3,340.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgrB6IAAgHQALABAFgHQADgEAAgRIAAhfQAAgRgEgFQgEgFgLgBIAAgGIBEAAIAACBQAAASAEAEQAEAFALAAIAAAHgAgShKQgIgJAAgKQAAgMAIgIQAIgIAKAAQALAAAIAIQAIAIAAAMQAAAKgIAJQgIAHgLABQgKgBgIgHg");
	this.shape_63.setTransform(788.4,336.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("Ag4A9QgUgaAAgiQAAgiAUgbQAVgaAjAAQAVAAASALQATALAJAVQAKAUAAAXQAAAjgSAYQgVAcgmAAQgkAAgUgagAgOhDQgHAHgCAUQgBAUAAAiQgBATADARQACAMAGAHQAGAGAIAAQAHAAAGgEQAGgGADgLQAEgRAAgyQAAgdgEgMQgDgLgHgFQgFgEgGAAQgJAAgGAHg");
	this.shape_64.setTransform(774.2,340.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgyBtQgegPgQgdQgQgcAAghQAAghASgeQASgfAegRQAegRAhAAQAaAAAcALQAQAHAEAAQAGAAAEgEQAEgFABgJIAHAAIAABTIgHAAQgIgggVgSQgVgRgaAAQgXAAgRANQgTANgJAVQgLAaAAAhQAAAfAIAaQAIAaASAOQAQANAbAAQAXAAATgKQASgKAVgYIAAAVQgUAVgWAJQgVAKgdAAQgmAAgdgQg");
	this.shape_65.setTransform(751.9,336.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("Ag1A7QgPgXAAghQAAgoAWgZQAXgYAcAAQAZAAATAVQASAUACAoIhaAAQACAgAQATQALAOARAAQALAAAIgFQAJgGAKgQIAGAEQgOAbgQAMQgQALgVAAQgkAAgTgcgAgLhCQgKAQAAAbIAAAGIAuAAQAAgcgDgKQgDgLgGgFQgEgEgGAAQgIAAgGAJg");
	this.shape_66.setTransform(722.5,340.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AAFB3IAAgGQAJgBAEgGQAEgFAAgRIAAhKQAAgTgCgFQgCgFgDgDQgEgDgFAAQgGAAgHAFQgGAEgIANIAABXQAAARADAFQADAGAKABIAAAGIhTAAIAAgGQAKgBAFgGQADgEAAgSIAAimQAAgTgEgFQgDgEgLgCIAAgGIBDAAIAABfQAOgOAKgGQALgGAMAAQAQAAALAJQALAJADAMQAEALAAAbIAABBQAAASADAFQAEAFALABIAAAGg");
	this.shape_67.setTransform(704.3,336.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgQBoQgLgIgEgLQgCgGAAgaIAAhYIgVAAIAAgGQAXgQAPgRQAQgRAKgVIAGAAIAAA8IAnAAIAAARIgnAAIAABlQAAAOACAEQAAAEAEADQADACADAAQAMAAAJgRIAGADQgPAjgfgBQgPABgKgKg");
	this.shape_68.setTransform(688.4,337.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AAUBgQgNAPgJAFQgJAGgNAAQgfAAgTgcQgOgXAAgiQAAgaAJgUQAJgVAQgLQAQgLASAAQAMAAAIAFQAJAFALALIAAgyQgBgSgBgEQgCgFgEgDQgFgCgKAAIAAgIIBIAAIAAC9QAAATABADQACAGADADQAEADAKAAIAAAGIhFAOgAgWgfQgHAGgEAOQgDAMAAAdQgBAfAFAPQAFAPAHAGQAFAEAHAAQAOAAAOgZIAAhVQgOgZgRAAQgHAAgEADg");
	this.shape_69.setTransform(663.5,336.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AAGBVIAAgHQAJgBAEgGQADgFAAgRIAAhIQAAgUgCgGQgBgFgEgDQgEgDgEAAQgOAAgNAWIAABXQgBASAEAFQADAFAKABIAAAHIhUAAIAAgHQAKgBAFgFQADgEAAgTIAAhcQAAgTgEgEQgDgFgLgBIAAgHIBEAAIAAAWQAMgOALgGQALgHANAAQAQAAALAJQALAJADANQADAKAAAdIAAA/QAAATAEAFQADAEAKABIAAAHg");
	this.shape_70.setTransform(643.3,340.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("Ag0BMQgLgIgDgMQgEgLAAgdIAAhAQAAgTgDgEQgEgFgLgBIAAgHIBDAAIAABwQAAARACAFQACAFADADQAEADAFAAQAFAAAFgEQAHgEAKgOIAAhXQAAgTgDgEQgEgFgLgBIAAgHIBDAAIAACAQAAATAEAFQADAEALABIAAAHIhDAAIAAgWQgMAOgLAGQgLAHgPAAQgOAAgLgJg");
	this.shape_71.setTransform(623.2,340.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("Ag4A9QgUgaAAgiQAAgiAVgbQAUgaAjAAQAVAAASALQATALAJAVQAKAUAAAXQAAAjgSAYQgVAcgmAAQgkAAgUgagAgOhDQgHAHgCAUQgCAUAAAiQABATACARQACAMAGAHQAGAGAIAAQAHAAAGgEQAHgGACgLQAEgRAAgyQAAgdgEgMQgDgLgHgFQgFgEgGAAQgJAAgGAHg");
	this.shape_72.setTransform(604.2,340.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AhCB6IAAgHQAKABAGgDQAEgCACgFQABgDAAgOIAAhxIgXAAIAAgRIAXAAIAAgVQABgZASgRQASgRAfAAQAVAAALAJQALAHAAAKQgBAIgGAGQgHAFgKABQgKgBgEgEQgGgFAAgGIABgGIABgFQAAgFgCgBQgDgDgEAAQgGAAgDAEQgDAFAAAJIAAA0IAZAAIAAARIgZAAIAABxQAAAQADAEQAGAHAQgBIAAAHg");
	this.shape_73.setTransform(591.1,336.4);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("Ag0BMQgLgIgDgMQgEgLAAgdIAAhAQAAgTgDgEQgEgFgLgBIAAgHIBDAAIAABwQAAARACAFQACAFADADQAEADAFAAQAFAAAFgEQAHgEAKgOIAAhXQAAgTgDgEQgEgFgLgBIAAgHIBDAAIAACAQAAATAEAFQADAEALABIAAAHIhDAAIAAgWQgMAOgLAGQgLAHgPAAQgOAAgLgJg");
	this.shape_74.setTransform(564.2,340.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("Ag4A9QgUgaAAgiQAAgiAUgbQAVgaAjAAQAVAAATALQASALAKAVQAJAUAAAXQAAAjgRAYQgWAcgmAAQgkAAgUgagAgOhDQgGAHgCAUQgCAUgBAiQAAATADARQACAMAGAHQAHAGAHAAQAIAAAFgEQAHgGACgLQADgRAAgyQAAgdgDgMQgDgLgGgFQgGgEgHAAQgHAAgHAHg");
	this.shape_75.setTransform(545.2,340.4);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AhCB3IAAgGIANAAQAKAAAHgEQAEgCACgGQACgFABgSIAAgvIg5hlQgQgfgHgFQgHgFgLgBIAAgGIByAAIAAAGIgFAAQgKAAgFADQgEADAAAEQAAAGAOAaIAqBNIArhGQAQgbAAgIQAAgFgFgDQgFgFgQgBIAAgGIBJAAIAAAGQgNACgFAFQgKAIgSAhIg0BVIAAA5QAAATACAEQACAFAGADQAFAEAKAAIANAAIAAAGg");
	this.shape_76.setTransform(527.2,336.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgWAXQgKgKABgNQgBgMAKgKQAKgKAMAAQANAAAKAKQAKAKAAAMQAAANgKAKQgKAKgNAAQgMAAgKgKg");
	this.shape_77.setTransform(798.9,293.5);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgTB0QgMgJgEgMQgBgHAAgdIAAhiIgYAAIAAgHQAYgRASgTQARgUAMgXIAHAAIAABDIArAAIAAATIgrAAIAABwQgBAPACAGQACAEADADQAEACADABQANAAALgUIAGAEQgQAmgkAAQgQAAgMgKg");
	this.shape_78.setTransform(787.5,283.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AhNBeIAAgHQAMgBAEgGQAEgFAAgYIAAhkQAAgQgCgEQgBgGgFgCQgDgCgJgCIAAgHIBKAAIAAAqQASgdANgIQAOgKANAAQALAAAGAHQAHAGgBANQABANgHAHQgGAHgJAAQgLAAgHgGIgJgIIgEgBQgGAAgGAEQgHAHgFAMQgEATgBAWIAAA1QAAALACADQABAGAFACQAEACALABIAAAHg");
	this.shape_79.setTransform(739.6,286.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AhKCHIAAgHQAMAAAGgDQAEgCADgFQACgEAAgPIAAh+IgbAAIAAgTIAbAAIAAgXQgBgcAVgTQAVgSAhAAQAYgBAMAKQAMAIAAALQAAAJgHAHQgIAGgLAAQgLAAgFgFQgHgFAAgHIABgHIABgHQAAgDgCgCQgDgEgFAAQgFAAgEAGQgEAEAAAKIABA6IAbAAIAAATIgbAAIAAB+QAAASADAFQAGAHASgBIAAAHg");
	this.shape_80.setTransform(705.8,282.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AAGCEIAAgHQAKgBAFgHQADgEAAgUIAAhRQAAgWgBgGQgCgGgEgDQgFgDgFAAQgHAAgHAGQgIAEgIAOIAABhQAAAUADAEQADAHAMABIAAAHIhdAAIAAgHQAMgBAFgGQADgEAAgVIAAi5QAAgUgEgGQgDgEgNgCIAAgHIBLAAIAABpQAPgPALgHQANgGANgBQASAAAMAKQAMAKAEANQAEANAAAfIAABHQAAAVAEAFQAEAFAMABIAAAHg");
	this.shape_81.setTransform(658.2,283);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgTB0QgMgJgDgMQgCgHAAgdIAAhiIgYAAIAAgHQAZgRARgTQARgUAMgXIAHAAIAABDIArAAIAAATIgrAAIAABwQAAAPABAGQABAEAEADQAEACADABQAMAAAMgUIAGAEQgQAmgjAAQgRAAgMgKg");
	this.shape_82.setTransform(640.6,283.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AhKCHIAAgHQAMAAAFgDQAFgCADgFQABgEAAgPIAAh+IgaAAIAAgTIAaAAIAAgXQAAgcAVgTQAUgSAjAAQAXgBANAKQALAIAAALQAAAJgHAHQgIAGgLAAQgKAAgHgFQgFgFgBgHIACgHIABgHQAAgDgDgCQgDgEgEAAQgGAAgEAGQgEAEAAAKIAAA6IAbAAIAAATIgbAAIAAB+QAAASAFAFQAFAHARgBIAAAHg");
	this.shape_83.setTransform(619.2,282.7);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgTB0QgMgJgDgMQgCgHAAgdIAAhiIgYAAIAAgHQAZgRARgTQARgUAMgXIAHAAIAABDIArAAIAAATIgrAAIAABwQAAAPABAGQABAEAEADQAEACADABQAMAAAMgUIAGAEQgQAmgjAAQgRAAgMgKg");
	this.shape_84.setTransform(574,283.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("Ag5BVQgNgKgEgNQgEgNAAgfIAAhIQAAgUgEgFQgDgGgNgBIAAgHIBLAAIAAB8QAAATACAGQABAFAEADQAFAEAEAAQAHAAAGgFQAHgEALgQIAAhhQAAgUgDgFQgFgGgLgBIAAgHIBKAAIAACOQAAAVAEAFQADAFAMABIAAAHIhKAAIAAgYQgNAQgMAHQgNAHgQAAQgPAAgMgJg");
	this.shape_85.setTransform(556,287.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AhNBeIAAgHQAMgBAEgFQAEgGAAgYIAAhkQAAgPgBgFQgDgFgEgDQgDgDgJAAIAAgHIBKAAIAAApQARgcAOgKQAOgJAMAAQALAAAHAHQAGAGAAAMQAAAOgGAHQgGAHgJAAQgLAAgHgHIgJgHIgFgBQgGAAgFAEQgIAHgDAMQgGATAAAWIAAA1QABALABADQABAFAFADQAFADALAAIAAAHg");
	this.shape_86.setTransform(832.4,240.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AgTB1QgMgLgEgLQgBgHAAgdIAAhiIgYAAIAAgGQAYgSASgTQARgTAMgYIAGAAIAABDIAsAAIAAATIgsAAIAABwQABAQABAEQACAFADADQAEACADAAQAMAAAMgTIAGAFQgQAlgkAAQgQAAgMgJg");
	this.shape_87.setTransform(798.9,237.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AhOBeIAAgHQANgBAEgFQAEgGAAgYIAAhkQAAgPgCgFQgBgFgFgDQgDgDgKAAIAAgHIBLAAIAAApQASgcANgKQAOgJANAAQALAAAGAHQAHAGgBAMQABAOgHAHQgGAHgJAAQgLAAgHgHIgJgHIgEgBQgGAAgGAEQgHAHgFAMQgEATgBAWIAAA1QAAALACADQABAFAFADQAEADALAAIAAAHg");
	this.shape_88.setTransform(745.9,240.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AAGCFIAAgHQAKgCAFgHQADgEAAgUIAAhSQAAgVgBgGQgCgGgEgDQgFgDgFAAQgHAAgHAFQgIAGgIANIAABhQAAAUADAEQADAHAMACIAAAHIhdAAIAAgHQAMgCAFgGQADgEAAgVIAAi4QAAgWgEgEQgDgGgNgBIAAgIIBLAAIAABqQAPgQALgGQANgGANAAQASAAAMAJQAMAKAEANQAEAOAAAdIAABIQAAAVAEAFQAEAFAMACIAAAHg");
	this.shape_89.setTransform(705.6,236.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AAGCFIAAgHQAKgCAFgHQADgEAAgUIAAhSQAAgVgBgGQgCgGgEgDQgFgDgFAAQgHAAgHAFQgIAGgIANIAABhQAAAUADAEQADAHAMACIAAAHIhdAAIAAgHQAMgCAFgGQADgEAAgVIAAi4QAAgWgEgEQgDgGgNgBIAAgIIBLAAIAABqQAPgQALgGQANgGANAAQASAAAMAJQAMAKAEANQAEAOAAAdIAABIQAAAVAEAFQAEAFAMACIAAAHg");
	this.shape_90.setTransform(637.9,236.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AgTB1QgMgLgDgLQgCgHAAgdIAAhiIgYAAIAAgGQAZgSARgTQARgTAMgYIAHAAIAABDIArAAIAAATIgrAAIAABwQAAAQABAEQABAFAEADQAEACADAAQAMAAAMgTIAGAFQgQAlgjAAQgRAAgMgJg");
	this.shape_91.setTransform(620.2,237.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#000000").s().p("AgwCIIAAgHQAMgBAGgHQADgEAAgUIAAhpQABgTgFgFQgEgGgNgBIAAgHIBLAAIAACPQAAAUAFAFQAFAGANABIAAAHgAgUhTQgJgJAAgMQAAgNAJgIQAJgJALAAQAMAAAKAJQAIAIAAANQAAAMgIAJQgKAJgMAAQgLAAgJgJg");
	this.shape_92.setTransform(535.9,236.4);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#000000").s().p("Ag5BUQgNgJgEgMQgEgNAAggIAAhHQAAgVgEgFQgDgFgNgCIAAgHIBKAAIAAB7QAAAUADAGQACAGADACQAFADAEAAQAHAAAGgDQAHgFALgQIAAhgQAAgVgEgFQgDgFgMgCIAAgHIBKAAIAACOQAAAVAEAFQADAFAMACIAAAHIhKAAIAAgZQgNAQgMAHQgNAHgQAAQgPAAgMgKg");
	this.shape_93.setTransform(519,241.1);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AhOB9QgKgJAAgNQAAgLAHgIQAHgHAKAAQAKAAAGAGQAGAGAAANQAAAIACACQABACADAAQAFAAAFgGQAIgIAKgeIAHgOIg8iHQgNgegGgIQgHgHgJgDIAAgHIBgAAIAAAHQgIABgEAEQgEACAAAGQAAAHAKAWIAeBHIAVg3QAMgeAAgLQAAgIgFgDQgFgFgMgBIAAgHIA+AAIAAAHQgJACgHAFQgFAGgOAjIg0CHQgSAygKAMQgNAQgVAAQgQAAgKgJg");
	this.shape_94.setTransform(837.6,198.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#000000").s().p("AgwCEIAAgHQAMAAAGgGQAEgFAAgTIAAi9QAAgSgFgGQgEgGgNAAIAAgHIBLAAIAADiQAAATAFAGQAEAEANABIAAAHg");
	this.shape_95.setTransform(822.3,190.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgwCEIAAgHQAMAAAGgGQAEgFAAgTIAAi9QAAgSgFgGQgEgGgNAAIAAgHIBLAAIAADiQAAATAFAGQAEAEANABIAAAHg");
	this.shape_96.setTransform(811.2,190.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#000000").s().p("Ag5BVQgNgKgEgNQgEgNAAgfIAAhIQAAgUgDgFQgEgFgNgCIAAgHIBKAAIAAB8QAAATADAGQACAGADADQAFADAEAAQAHAAAGgFQAHgEALgQIAAhhQAAgUgEgFQgEgFgLgCIAAgHIBKAAIAACOQAAAVAEAFQADAFAMABIAAAHIhKAAIAAgYQgNAPgMAIQgNAHgQAAQgQAAgLgJg");
	this.shape_97.setTransform(794.3,194.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#000000").s().p("AhKCHIAAgHQAMAAAFgDQAGgCABgFQACgEAAgPIAAh+IgaAAIAAgTIAaAAIAAgXQABgcAUgTQAVgSAigBQAYAAAMAJQALAKAAAKQAAAKgIAFQgGAHgNAAQgKAAgGgFQgFgGAAgGIABgHIABgHQgBgDgCgCQgDgEgEAAQgGABgEAFQgEAEAAALIAAA5IAbAAIAAATIgbAAIAAB+QAAASAFAFQAFAHARgBIAAAHg");
	this.shape_98.setTransform(778.7,190.1);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("Ag5BVQgNgKgEgNQgEgNAAgfIAAhIQAAgUgEgFQgEgFgMgCIAAgHIBLAAIAAB8QAAATACAGQABAGAFADQADADAGAAQAGAAAFgFQAIgEALgQIAAhhQAAgUgDgFQgFgFgLgCIAAgHIBKAAIAACOQAAAVAEAFQADAFAMABIAAAHIhKAAIAAgYQgNAPgMAIQgNAHgQAAQgPAAgMgJg");
	this.shape_99.setTransform(674.5,194.8);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#000000").s().p("AgDBeIg9iNQgMgZgGgHQgEgFgKgCIAAgHIBhAAIAAAHQgIAAgDADQgGAEAAAGQABAIAIATIAdBFIAZg7QAKgZgBgLQAAgGgDgEQgFgEgLAAIAAgHIA8AAIAAAHQgJABgGAFQgFAGgLAaIg9COg");
	this.shape_100.setTransform(610.1,194.8);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#000000").s().p("AAGCEIAAgHQAKgBAFgGQADgGAAgTIAAhRQAAgWgBgGQgCgGgEgDQgFgDgFAAQgHAAgHAGQgIAEgIAOIAABhQAAATADAGQADAGAMABIAAAHIhdAAIAAgHQAMAAAFgHQADgEAAgVIAAi5QAAgUgEgGQgDgFgNgBIAAgHIBLAAIAABqQAPgRALgGQANgHANAAQASAAAMAKQAMAKAEANQAEAOAAAeIAABHQAAAVAEAFQAEAFAMABIAAAHg");
	this.shape_101.setTransform(569.1,190.4);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#000000").s().p("Ag5BVQgNgKgEgNQgEgNAAgfIAAhIQAAgUgEgFQgEgFgMgCIAAgHIBLAAIAAB8QAAATACAGQABAGAFADQADADAGAAQAGAAAFgFQAIgEALgQIAAhhQAAgUgDgFQgFgFgLgCIAAgHIBKAAIAACOQAAAVAEAFQADAFAMABIAAAHIhKAAIAAgYQgNAPgMAIQgNAHgQAAQgPAAgMgJg");
	this.shape_102.setTransform(536.8,194.8);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#000000").s().p("AhJCEIAAgHIANAAQANABAGgFQAFgCADgHQADgFAAgUIAAg1Ig/hwQgSgigIgGQgIgGgMAAIAAgHIB/AAIAAAHIgGAAQgMAAgEADQgFAEAAADQAAAIAPAcIAwBWIAvhOQASgeAAgKQAAgEgFgFQgGgEgSgBIAAgHIBRAAIAAAHQgOABgGAGQgKAIgWAlIg5BfIAABAQAAAUACAGQADAFAGAEQAGADALAAIAOAAIAAAHg");
	this.shape_103.setTransform(495.6,190.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AgaChQgMgMAAgQQAAgQALgMQAMgMAPAAQARAAAMAMQALAMAAAQQAAAQgLAMQgMAMgRAAQgPAAgLgMgAgEA6QgCgbgJgnIgNg1QgMgwAAgVQAAgSAMgMQALgMARAAQASAAALAMQAMAMAAASQAAASgMAzIgNA1QgHAbgDAng");
	this.shape_104.setTransform(758.8,138.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#000000").s().p("AhJBSQgVgfAAgvQAAg5AfghQAegiApAAQAiAAAaAdQAaAcABA3Ih8AAQACAtAWAaQAQAVAYAAQAPgBAMgHQALgJAOgVIAIAFQgSAngXAPQgWAQgeAAQgxAAgagngAgQhcQgOAWAAAmIAAAJIBBAAQAAgogEgOQgEgQgJgHQgFgEgJAAQgMAAgIAMg");
	this.shape_105.setTransform(739.7,143.8);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AAIB1IAAgJQANgBAFgJQAEgGAAgYIAAhlQAAgcgCgHQgCgHgFgFQgGgEgGABQgUgBgSAeIAAB6QAAAaAFAGQAEAHANABIAAAJIhzAAIAAgJQAOgBAGgIQAEgFAAgaIAAiAQAAgagEgHQgFgGgPgCIAAgJIBdAAIAAAeQARgUAQgIQAQgJASAAQAWAAAPANQAPAMAFASQAEAPAAAnIAABYQAAAaAEAHQAFAGAPABIAAAJg");
	this.shape_106.setTransform(714.5,143.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#000000").s().p("AhOBVQgcglAAgvQAAgwAdgkQAcglAxAAQAeAAAZAQQAZAPAOAcQANAcAAAhQAAAwgYAhQgfAog0AAQgzAAgbgkgAgUhdQgJAJgCAcQgDAbgBAxQAAAaAEAXQADARAIAJQAKAJAKAAQAKAAAIgGQAKgIADgPQAEgYAAhFQABgqgFgPQgFgPgJgIQgHgFgKAAQgLAAgJAKg");
	this.shape_107.setTransform(688,143.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#000000").s().p("AAbCFQgRAUgNAJQgNAHgRAAQgsAAgZgnQgVggAAguQAAglANgcQAMgdAXgPQAWgPAZAAQAQAAAMAGQANAGAOARIAAhGQAAgZgCgGQgDgHgGgDQgGgEgPAAIAAgKIBlAAIAAEFQAAAbABAFQACAIAGAEQAFAEAOABIAAAIIhhATgAgfgrQgJAIgGASQgFASAAAoQAAArAGAVQAGAVALAJQAGAFAKgBQAUABATgiIAAh4QgSgigZAAQgJAAgGAFg");
	this.shape_108.setTransform(662,139);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#000000").s().p("Ag9ClIAAgJQAPAAAIgIQAFgGAAgYIAAjrQAAgYgGgGQgGgIgQAAIAAgJIBfAAIAAEaQAAAYAGAHQAFAHARAAIAAAJg");
	this.shape_109.setTransform(628.5,138.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#000000").s().p("Ag9ClIAAgJQAPAAAIgIQAFgGAAgYIAAjrQAAgYgGgGQgGgIgQAAIAAgJIBfAAIAAEaQAAAYAGAHQAFAHARAAIAAAJg");
	this.shape_110.setTransform(614.6,138.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#000000").s().p("AhJBSQgVgfAAgvQAAg5AfghQAegiApAAQAiAAAaAdQAaAcABA3Ih8AAQACAtAWAaQAQAVAYAAQAPgBAMgHQALgJAOgVIAIAFQgSAngXAPQgWAQgeAAQgxAAgagngAgQhcQgOAWAAAmIAAAJIBBAAQAAgogEgOQgEgQgJgHQgFgEgJAAQgMAAgIAMg");
	this.shape_111.setTransform(596.6,143.8);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AAUBgQgNAPgJAFQgKAGgLAAQggAAgTgcQgOgXAAgiQAAgaAJgUQAJgVAQgLQAQgLASAAQAMAAAIAFQAKAFAKALIAAgyQAAgSgCgEQgCgFgEgDQgFgCgKAAIAAgIIBIAAIAAC9QAAATABADQACAGAEADQADADAKAAIAAAGIhFAOgAgWgfQgHAGgDAOQgFAMAAAdQAAAfAFAPQAFAPAHAGQAFAEAGAAQAPAAAOgZIAAhVQgOgZgRAAQgGAAgFADg");
	this.shape_112.setTransform(905,340.1);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgrB3IAAgGQAKAAAGgGQADgEAAgSIAAipQAAgRgEgFQgEgFgLgBIAAgGIBDAAIAADLQABASAEAEQADAFANABIAAAGg");
	this.shape_113.setTransform(889.9,339.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#000000").s().p("AgrB6IAAgGQALgBAFgGQADgEAAgRIAAhfQAAgSgEgEQgEgFgLgBIAAgHIBEAAIAACCQAAARAEAFQAEAFALABIAAAGgAgShLQgIgHAAgMQAAgLAIgIQAIgIAKAAQALAAAIAIQAIAIAAALQAAAMgIAHQgIAIgLAAQgKAAgIgIg");
	this.shape_114.setTransform(863.8,339.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#000000").s().p("AgTB7QgKgDgPgGQgJgEgFAAQgFAAgFAEQgFADgDAIIgHAAIAAhaIAHAAQAIAmAWAUQAWAUAYAAQAUAAAMgLQALgLAAgOQAAgJgEgHQgFgIgJgHQgJgIgWgLQghgQgOgLQgOgLgIgNQgHgOAAgRQAAgcAUgVQAVgUAgAAQALAAALADQAIACAMAGQAMAGAEAAQAFAAADgDQACgDADgLIAFAAIACBQIgHAAQgGgegTgSQgUgSgXAAQgSAAgKAJQgKAKAAAMQAAAIADAGQAFAJAMAIQAIAFAdAPQAqAVAOARQAPASAAAYQAAAegYAVQgXAWgkAAQgKAAgKgCg");
	this.shape_115.setTransform(828.9,339.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#000000").s().p("AATBgQgMAPgIAFQgKAGgNAAQgfAAgSgcQgPgXAAgiQAAgaAJgUQAJgVAQgLQAQgLATAAQALAAAIAFQAJAFAKALIAAgyQAAgSgBgEQgCgFgEgDQgFgCgKAAIAAgIIBIAAIAAC9QAAATABADQABAGAEADQAFADAJAAIAAAGIhGAOgAgWgfQgHAGgEAOQgDAMAAAdQgBAfAFAPQAEAPAJAGQADAEAIAAQAOAAANgZIAAhVQgNgZgRAAQgHAAgEADg");
	this.shape_116.setTransform(800,340.1);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#000000").s().p("Ag1A7QgPgXAAghQAAgoAWgZQAXgYAcAAQAZAAATAVQASAUACAoIhaAAQACAgAQATQALAOARAAQALAAAIgFQAJgGAKgQIAGAEQgOAbgQAMQgQALgVAAQgkAAgTgcgAgLhCQgKAQAAAbIAAAGIAuAAQAAgcgDgKQgDgLgGgFQgEgEgGAAQgIAAgGAJg");
	this.shape_117.setTransform(781.9,343.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#000000").s().p("AA1B3IhLhsIgQAAIAABCQAAAUACAFQADAFAGADQAGADAQAAIAAAGIh6AAIAAgGQAQAAAGgDQAGgDADgFQACgFAAgUIAAiZQAAgUgCgFQgDgFgGgDQgGgDgQAAIAAgGIBvAAQAqAAAUAGQAUAGANAQQAMAQAAAWQAAAagTARQgMAKgWAGIA6BQQALAQAFAEQAHAFAJABIAAAGgAgmgBIAKAAQAYAAALgEQANgFAHgLQAGgMAAgTQAAgbgMgNQgNgNgbAAIgTAAg");
	this.shape_118.setTransform(761.1,339.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("Ag1A7QgPgXAAghQAAgoAWgZQAXgYAcAAQAZAAATAVQASAUACAoIhaAAQACAgAQATQALAOARAAQALAAAIgFQAJgGAKgQIAGAEQgOAbgQAMQgQALgVAAQgkAAgTgcgAgLhCQgKAQAAAbIAAAGIAuAAQAAgcgDgKQgDgLgGgFQgEgEgGAAQgIAAgGAJg");
	this.shape_119.setTransform(730.9,343.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AAFB3IAAgGQAJgBAEgGQAEgFAAgRIAAhKQAAgTgCgFQgCgFgDgDQgEgDgFAAQgGAAgHAFQgGAEgIANIAABXQAAARADAFQADAGAKABIAAAGIhTAAIAAgGQAKgBAFgGQADgEAAgSIAAimQAAgTgEgFQgDgEgLgCIAAgGIBDAAIAABfQAOgOAKgGQALgGAMAAQAQAAALAJQALAJADAMQAEALAAAbIAABBQAAASADAFQAEAFALABIAAAGg");
	this.shape_120.setTransform(712.8,339.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#000000").s().p("AgQBpQgMgJgDgLQgBgGAAgaIAAhYIgWAAIAAgGQAXgPAPgSQAPgRALgWIAGAAIAAA8IAnAAIAAASIgnAAIAABkQAAAPACAEQAAAEAEACQADADADAAQALAAAKgSIAGAFQgPAhgfABQgPgBgKgIg");
	this.shape_121.setTransform(696.8,340.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AAUBgQgNAPgJAFQgJAGgMAAQggAAgTgcQgOgXAAgiQAAgaAJgUQAJgVAQgLQAQgLASAAQAMAAAIAFQAKAFAKALIAAgyQgBgSgBgEQgCgFgEgDQgFgCgKAAIAAgIIBIAAIAAC9QAAATABADQACAGADADQAEADAKAAIAAAGIhFAOgAgWgfQgHAGgDAOQgEAMgBAdQAAAfAFAPQAFAPAHAGQAFAEAHAAQAOAAAOgZIAAhVQgOgZgRAAQgHAAgEADg");
	this.shape_122.setTransform(672,340.1);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#000000").s().p("AAGBVIAAgHQAJgBAEgGQADgFAAgRIAAhIQAAgUgCgGQgBgFgEgDQgEgDgEAAQgOAAgNAWIAABXQgBASAEAFQADAFAKABIAAAHIhUAAIAAgHQALgBAEgFQADgEAAgTIAAhcQAAgTgDgEQgEgFgLgBIAAgHIBEAAIAAAWQAMgOAKgGQAMgHANAAQAQAAALAJQAKAJAEANQADAKAAAdIAAA/QAAATADAFQAEAEAKABIAAAHg");
	this.shape_123.setTransform(651.8,343.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AhCB6IAAgGQAKAAAFgDQAFgCACgEQABgFAAgNIAAhxIgXAAIAAgSIAXAAIAAgTQAAgaATgRQASgRAfAAQAVAAALAIQALAJAAAJQAAAIgHAGQgHAGgKgBQgJABgGgFQgFgFAAgFIABgHIABgGQAAgEgCgBQgDgDgEAAQgGAAgDAFQgDADAAAKIAAAzIAYAAIAAASIgYAAIAABxQAAAQADAEQAHAHAOAAIAAAGg");
	this.shape_124.setTransform(599.6,339.6);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("Ag4A9QgUgaAAgiQAAgiAVgbQAUgaAjAAQAVAAATALQASALAKAVQAJAUAAAXQAAAjgRAYQgWAcgmAAQgkAAgUgagAgOhDQgGAHgCAUQgDAUAAAiQAAATADARQACAMAGAHQAGAGAIAAQAIAAAFgEQAHgGACgLQADgRABgyQgBgdgDgMQgDgLgGgFQgGgEgHAAQgHAAgHAHg");
	this.shape_125.setTransform(553.7,343.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#000000").s().p("AhCB3IAAgGIANAAQAKAAAGgEQAFgCACgGQACgFAAgSIAAgvIg4hlQgQgfgHgFQgHgFgLgBIAAgGIByAAIAAAGIgFAAQgLAAgEADQgEADAAAEQAAAGAOAaIAqBNIArhGQAQgbAAgIQAAgFgFgDQgFgFgQgBIAAgGIBJAAIAAAGQgNACgFAFQgKAIgSAhIg0BVIAAA5QAAATACAEQABAFAHADQAFAEAKAAIANAAIAAAGg");
	this.shape_126.setTransform(535.6,339.9);

	this.instance_1 = new lib.RedShield_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(434,329.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgUAVQgIgJAAgMQAAgLAIgJQAJgIALAAQAMAAAJAIQAIAJAAALQAAAMgJAJQgIAIgMAAQgLAAgJgIg");
	this.shape_127.setTransform(826.5,295.4);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AAFBVIAAgHQAKgBAEgGQADgFgBgRIAAhIQABgUgCgGQgCgFgDgDQgEgDgEAAQgPAAgNAWIAABXQAAASAEAFQADAFAJABIAAAHIhTAAIAAgHQALgBAEgFQADgEAAgTIAAhcQAAgTgDgEQgEgFgLgBIAAgHIBDAAIAAAWQANgOAKgGQAMgHAOAAQAQAAAKAJQALAJADANQADAKAAAdIAAA/QAAATADAFQAEAEALABIAAAHg");
	this.shape_128.setTransform(812.1,289.4);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#000000").s().p("AgrB6IAAgGQALAAAFgHQADgEAAgRIAAhfQAAgSgEgEQgEgFgLgBIAAgHIBEAAIAACCQAAARAEAFQAEAFALABIAAAGgAgShKQgIgJAAgLQAAgLAIgIQAIgIAKAAQALAAAIAIQAIAIAAALQAAALgIAJQgIAHgLAAQgKAAgIgHg");
	this.shape_129.setTransform(797.2,285.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("Ag4A9QgUgaAAgiQAAgiAUgbQAVgaAjAAQAVAAATALQASALAKAVQAJAUAAAXQAAAjgSAYQgVAcgmAAQgkAAgUgagAgOhDQgGAHgCAUQgCAUAAAiQAAATACARQACAMAGAHQAHAGAHAAQAIAAAFgEQAHgGACgLQAEgRgBgyQABgdgEgMQgDgLgGgFQgFgEgHAAQgIAAgHAHg");
	this.shape_130.setTransform(783,289.7);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#000000").s().p("Ag1A7QgPgXAAghQAAgoAWgZQAXgYAcAAQAZAAATAVQASAUACAoIhaAAQACAgAQATQALAOARAAQALAAAIgFQAJgGAKgQIAGAEQgOAbgQAMQgQALgVAAQgkAAgTgcgAgLhCQgKAQAAAbIAAAGIAuAAQAAgcgDgKQgDgLgGgFQgEgEgGAAQgIAAgGAJg");
	this.shape_131.setTransform(731.3,289.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#000000").s().p("AAFB3IAAgGQAJgBAEgGQAEgFAAgRIAAhKQAAgTgCgFQgCgFgDgDQgEgDgFAAQgGAAgHAFQgGAEgIANIAABXQAAARADAFQADAGAKABIAAAGIhTAAIAAgGQAKgBAFgGQADgEAAgSIAAimQAAgTgEgFQgDgEgLgCIAAgGIBDAAIAABfQAOgOAKgGQALgGAMAAQAQAAALAJQALAJADAMQAEALAAAbIAABBQAAASADAFQAEAFALABIAAAGg");
	this.shape_132.setTransform(713.1,286);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgQBpQgMgJgDgLQgBgGAAgaIAAhYIgWAAIAAgGQAXgPAPgSQAPgRALgVIAGAAIAAA7IAnAAIAAASIgnAAIAABkQAAAPACAEQAAAEAEACQADADADAAQALAAAKgRIAGAEQgPAigfAAQgPgBgKgIg");
	this.shape_133.setTransform(697.2,286.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AAUBgQgNAPgJAFQgKAGgLAAQggAAgTgcQgOgXAAgiQAAgaAJgUQAJgVAQgLQAQgLASAAQAMAAAIAFQAKAFAKALIAAgyQAAgSgCgEQgCgFgEgDQgFgCgKAAIAAgIIBIAAIAAC9QAAATABADQACAGAEADQADADAKAAIAAAGIhFAOgAgWgfQgGAGgEAOQgFAMAAAdQAAAfAFAPQAFAPAHAGQAEAEAHAAQAPAAAOgZIAAhVQgNgZgSAAQgGAAgFADg");
	this.shape_134.setTransform(672.3,286.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#000000").s().p("Ag0BMQgLgIgDgMQgEgLAAgdIAAhAQAAgTgDgEQgEgFgLgBIAAgHIBDAAIAABwQAAARACAFQACAFADADQAEADAFAAQAFAAAFgEQAHgEAKgOIAAhXQAAgTgDgEQgEgFgLgBIAAgHIBDAAIAACAQAAATAEAFQADAEALABIAAAHIhDAAIAAgWQgMAOgLAGQgLAHgPAAQgOAAgLgJg");
	this.shape_135.setTransform(632,289.9);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("Ag4A9QgUgaAAgiQAAgiAUgbQAVgaAjAAQAVAAATALQASALAJAVQAKAUAAAXQAAAjgSAYQgVAcgmAAQgkAAgUgagAgOhDQgGAHgDAUQgBAUAAAiQgBATADARQACAMAGAHQAHAGAHAAQAHAAAGgEQAGgGADgLQADgRAAgyQAAgdgDgMQgDgLgGgFQgFgEgHAAQgIAAgHAHg");
	this.shape_136.setTransform(613,289.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#000000").s().p("AhCB6IAAgGQAKgBAFgCQAFgCACgEQACgFgBgNIAAhxIgXAAIAAgSIAXAAIAAgUQAAgZATgRQASgRAfAAQAWAAAKAIQALAJAAAJQAAAIgHAGQgGAGgLgBQgJABgGgFQgFgFAAgFIABgHIABgGQAAgEgCgBQgDgDgEAAQgGAAgCAEQgEAEAAAKIAAAzIAYAAIAAASIgYAAIAABxQAAARAEADQAFAHAPAAIAAAGg");
	this.shape_137.setTransform(599.9,285.7);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#000000").s().p("Ag0BMQgLgIgDgMQgEgLAAgdIAAhAQAAgTgDgEQgEgFgLgBIAAgHIBDAAIAABwQAAARACAFQACAFADADQAEADAFAAQAFAAAFgEQAHgEAKgOIAAhXQAAgTgDgEQgEgFgLgBIAAgHIBDAAIAACAQAAATAEAFQADAEALABIAAAHIhDAAIAAgWQgMAOgLAGQgLAHgPAAQgOAAgLgJg");
	this.shape_138.setTransform(573,289.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#000000").s().p("Ag4A9QgUgaAAgiQAAgiAVgbQAUgaAjAAQAVAAASALQATALAKAVQAJAUAAAXQAAAjgRAYQgWAcgmAAQgkAAgUgagAgOhDQgGAHgDAUQgCAUAAAiQABATACARQACAMAGAHQAGAGAIAAQAIAAAFgEQAGgGADgLQADgRABgyQgBgdgDgMQgDgLgHgFQgEgEgIAAQgIAAgGAHg");
	this.shape_139.setTransform(554,289.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AhCB3IAAgGIAMAAQAMAAAFgEQAFgCACgGQACgFAAgSIAAgvIg4hlQgQgfgHgFQgHgFgMgBIAAgGIBzAAIAAAGIgFAAQgLAAgEADQgEADAAAEQAAAGAOAaIArBNIAqhGQAQgbAAgIQAAgFgEgDQgGgFgRgBIAAgGIBKAAIAAAGQgMACgGAFQgJAIgUAhIgzBVIAAA5QAAATACAEQACAFAGADQAFAEAJAAIAOAAIAAAGg");
	this.shape_140.setTransform(536,286);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AhNBeIAAgHQAMgBAEgFQAEgGAAgYIAAhkQAAgPgCgFQgBgGgFgCQgDgDgJAAIAAgHIBKAAIAAApQASgcANgKQAOgJANAAQALAAAGAHQAHAGgBAMQABAOgHAHQgGAHgJAAQgLAAgHgGIgJgIIgEgBQgGAAgGAEQgHAHgFAMQgEATgBAWIAAA1QAAALACADQABAFAFADQAEADALAAIAAAHg");
	this.shape_141.setTransform(739.6,236.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#000000").s().p("AhKCIIAAgHQAMAAAGgDQAEgDADgEQACgFAAgPIAAh+IgbAAIAAgTIAbAAIAAgXQgBgcAVgSQAVgUAhABQAYAAAMAJQAMAIAAAMQAAAJgHAGQgIAGgLAAQgLAAgFgFQgHgGAAgGIABgHIABgGQAAgEgCgDQgDgCgFAAQgFAAgEAEQgEAFAAAKIABA6IAbAAIAAATIgbAAIAAB+QAAASADAFQAGAHASAAIAAAHg");
	this.shape_142.setTransform(705.8,232);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#000000").s().p("AhKCIIAAgHQAMAAAFgDQAFgDADgEQABgFAAgPIAAh+IgaAAIAAgTIAaAAIAAgXQAAgcAVgSQAUgUAjABQAXAAANAJQALAIAAAMQAAAJgHAGQgIAGgLAAQgKAAgHgFQgFgGgBgGIACgHIABgGQAAgEgDgDQgDgCgEAAQgGAAgEAEQgEAFAAAKIAAA6IAbAAIAAATIgbAAIAAB+QAAASAFAFQAFAHARAAIAAAHg");
	this.shape_143.setTransform(619.2,232);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#000000").s().p("AhNBeIAAgHQAMgBAEgGQAEgFAAgYIAAhkQAAgQgBgEQgDgGgEgCQgDgDgJgBIAAgGIBKAAIAAApQARgcAOgKQAOgJAMAAQALAAAHAHQAGAHAAAMQAAANgGAHQgGAHgJAAQgLAAgHgHIgJgHIgFgBQgGAAgFAFQgIAGgDAMQgGATAAAWIAAA1QABALABADQABAGAFACQAFADALAAIAAAHg");
	this.shape_144.setTransform(832.4,189.8);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgTB1QgMgKgEgMQgBgHAAgdIAAhiIgYAAIAAgHQAYgRASgTQARgUAMgXIAGAAIAABDIAsAAIAAATIgsAAIAABwQABAQABAEQACAFADADQAEADADgBQAMABAMgUIAGAEQgQAmgkAAQgQAAgMgJg");
	this.shape_145.setTransform(798.9,186.9);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#000000").s().p("AhOBeIAAgHQANgBAEgGQAEgFAAgYIAAhkQAAgQgCgEQgBgGgFgCQgDgDgKgBIAAgGIBLAAIAAApQASgcANgKQAOgJANAAQALAAAGAHQAHAHgBAMQABANgHAHQgGAHgJAAQgLAAgHgHIgJgHIgEgBQgGAAgGAFQgHAGgFAMQgEATgBAWIAAA1QAAALACADQABAGAFACQAEADALAAIAAAHg");
	this.shape_146.setTransform(745.9,189.8);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AgTB1QgMgKgDgMQgCgHAAgdIAAhiIgYAAIAAgHQAZgRARgTQARgUAMgXIAHAAIAABDIArAAIAAATIgrAAIAABwQAAAQABAEQABAFAEADQAEADADgBQAMABAMgUIAGAEQgQAmgjAAQgRAAgMgJg");
	this.shape_147.setTransform(620.2,186.9);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#000000").s().p("AhKCIIAAgIQAMAAAFgCQAGgDABgFQACgEAAgPIAAh+IgaAAIAAgTIAaAAIAAgXQABgcAUgSQAVgUAiABQAYgBAMAKQALAIAAALQAAAJgIAHQgGAGgNAAQgKAAgGgFQgFgGAAgGIABgHIABgGQgBgFgCgCQgDgCgEAAQgGgBgEAGQgEAEAAAKIAAA6IAbAAIAAATIgbAAIAAB+QAAASAFAFQAFAHARgBIAAAIg");
	this.shape_148.setTransform(778.7,139.4);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#000000").s().p("AAGCFIAAgIQAKgBAFgHQADgFAAgTIAAhSQAAgVgBgGQgCgGgEgDQgFgDgFAAQgHAAgHAGQgIAEgIAOIAABhQAAATADAFQADAHAMABIAAAIIhdAAIAAgIQAMgBAFgGQADgEAAgVIAAi4QAAgWgEgEQgDgFgNgCIAAgIIBLAAIAABqQAPgPALgHQANgGANgBQASAAAMAKQAMAKAEANQAEANAAAfIAABHQAAAVAEAFQAEAFAMABIAAAIg");
	this.shape_149.setTransform(569.1,139.7);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#000000").s().p("AgaChQgMgLAAgRQAAgRALgLQAMgMAPAAQARAAAMAMQALALAAARQAAARgLALQgMALgRAAQgPAAgLgLgAgEA7QgCgcgJgnIgNg2QgMgvAAgVQAAgSAMgMQALgLARAAQASAAALALQAMALAAATQAAASgMAyIgNA2QgHAcgDAng");
	this.shape_150.setTransform(758.8,87.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AAIB1IAAgJQANgBAFgJQAEgGAAgYIAAhlQAAgcgCgIQgCgHgFgEQgGgDgGAAQgUAAgSAdIAAB6QAAAZAFAHQAEAHANABIAAAJIhzAAIAAgJQAOgBAGgIQAEgFAAgaIAAiAQAAgagEgGQgFgHgPgBIAAgKIBdAAIAAAeQARgUAQgIQAQgIASgBQAWAAAPANQAPAMAFATQAEANAAAoIAABYQAAAaAEAGQAFAHAPABIAAAJg");
	this.shape_151.setTransform(714.5,92.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#000000").s().p("AAbCEQgRAWgNAIQgNAHgRAAQgsAAgZgnQgVggAAguQAAglANgcQAMgeAXgOQAWgPAZAAQAQAAAMAGQANAGAOARIAAhGQAAgagCgFQgDgHgGgEQgGgDgPAAIAAgKIBlAAIAAEGQAAAbABAEQACAIAGAEQAFAEAOABIAAAIIhhATgAgfgrQgJAHgGAUQgFARAAAoQAAArAGAVQAGAUALAKQAGAEAKAAQAUAAATghIAAh4QgSgigZAAQgJAAgGAFg");
	this.shape_152.setTransform(662,88.3);

	this.instance_2 = new lib.BlueShield_1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(414,427.8);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#000000").s().p("AATBgQgMAPgIAFQgLAGgMAAQgfAAgSgcQgPgXAAgiQAAgaAJgUQAJgVAQgLQAQgLATAAQALAAAIAFQAJAFAKALIAAgyQAAgSgBgEQgCgFgEgDQgEgCgLAAIAAgIIBIAAIAAC9QAAATABADQABAGAEADQAFADAJAAIAAAGIhGAOgAgWgfQgHAGgEAOQgDAMAAAdQAAAfAEAPQAEAPAJAGQADAEAHAAQAPAAANgZIAAhVQgMgZgSAAQgHAAgEADg");
	this.shape_153.setTransform(909.5,400.4);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AgsB3IAAgGQAMAAAEgGQAEgEAAgSIAAipQAAgRgEgFQgEgFgMgBIAAgGIBEAAIAADLQABASADAEQAFAFALABIAAAGg");
	this.shape_154.setTransform(894.4,400.1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#000000").s().p("AgrB6IAAgHQALABAFgHQADgDAAgSIAAhfQAAgRgEgFQgEgFgLgBIAAgGIBEAAIAACBQAAASAEAEQAEAFALAAIAAAHgAgShKQgIgJAAgKQAAgMAIgIQAIgIAKAAQALAAAIAIQAIAIAAAMQAAAKgIAJQgIAHgLABQgKgBgIgHg");
	this.shape_155.setTransform(868.4,399.9);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#000000").s().p("AgrB3IAAgGQAKAAAGgGQADgEAAgSIAAipQAAgRgEgFQgEgFgLgBIAAgGIBEAAIAADLQAAASADAEQAEAFANABIAAAGg");
	this.shape_156.setTransform(773.4,400.1);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#000000").s().p("AhtB3IAAgGQAQAAAGgDQAGgDADgFQACgFAAgUIAAiZQAAgUgCgFQgDgFgGgDQgGgDgQAAIAAgGIBxAAQApAAASAHQARAHAJAPQAKAOAAARQAAARgMAOQgNANgfAIQAhAHAOALQAUAQAAAaQAAAagVASQgbAVgzAAgAgUBXQAAAKAEAEQAFAFAKAAQANAAAMgGQALgGAHgMQAGgMAAgPQAAgQgIgNQgHgOgOgFQgNgFgaAAgAgUgLQAXAAANgGQALgFAHgKQAGgLAAgPQAAgQgGgKQgGgKgMgGQgMgFgYAAg");
	this.shape_157.setTransform(756,400.1);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgRBoQgKgIgDgLQgCgGAAgaIAAhYIgWAAIAAgGQAWgQAQgRQAPgRALgVIAGAAIAAA8IAnAAIAAARIgnAAIAABlQAAAOABAEQABAEAEADQADACADAAQALAAALgRIAFADQgOAjghgBQgOABgLgKg");
	this.shape_158.setTransform(693.4,401);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#000000").s().p("AATBgQgMAPgJAFQgKAGgLAAQggAAgTgcQgOgXAAgiQAAgaAJgUQAJgVAQgLQAQgLATAAQALAAAIAFQAJAFAKALIAAgyQAAgSgBgEQgCgFgEgDQgEgCgLAAIAAgIIBIAAIAAC9QAAATABADQABAGAFADQADADAKAAIAAAGIhGAOgAgWgfQgGAGgEAOQgFAMAAAdQABAfAEAPQAEAPAJAGQADAEAHAAQAPAAANgZIAAhVQgMgZgSAAQgGAAgFADg");
	this.shape_159.setTransform(668.5,400.4);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AAFBVIAAgHQAKgBAEgGQADgFgBgRIAAhIQAAgUgBgGQgCgFgDgDQgEgDgEAAQgPAAgNAWIAABXQAAASAEAFQADAFAJABIAAAHIhSAAIAAgHQAKgBAEgFQADgEAAgTIAAhcQAAgTgDgEQgEgFgKgBIAAgHIBCAAIAAAWQANgOAKgGQAMgHAOAAQAQAAAKAJQALAJADANQADAKAAAdIAAA/QAAATADAFQAEAEALABIAAAHg");
	this.shape_160.setTransform(648.3,403.6);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#000000").s().p("Ag4A9QgUgaAAgiQAAgiAUgbQAVgaAjAAQAVAAATALQASALAKAVQAJAUAAAXQAAAjgSAYQgVAcgmAAQgkAAgUgagAgOhDQgGAHgCAUQgCAUAAAiQAAATACARQACAMAGAHQAHAGAHAAQAIAAAFgEQAHgGACgLQAEgRgBgyQABgdgEgMQgDgLgGgFQgGgEgHAAQgHAAgHAHg");
	this.shape_161.setTransform(609.2,403.8);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#000000").s().p("AhDB6IAAgHQAMABAEgDQAFgCACgFQABgDAAgOIAAhxIgYAAIAAgRIAYAAIAAgVQAAgZATgRQATgRAeAAQAWAAAKAJQAKAHAAAKQABAIgHAGQgGAFgLABQgKgBgFgEQgFgFAAgGIABgGIABgFQAAgFgDgBQgCgDgEAAQgFAAgDAEQgEAFAAAJIAAA0IAYAAIAAARIgYAAIAABxQAAARAEADQAFAHAPgBIAAAHg");
	this.shape_162.setTransform(596.1,399.9);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#000000").s().p("AhBB3IAAgGIALAAQAMAAAFgEQAFgCADgGQABgFAAgSIAAgvIg3hlQgRgfgHgFQgHgFgMgBIAAgGIBzAAIAAAGIgFAAQgLAAgDADQgFADAAAEQAAAGAPAaIAqBNIAqhGQAQgbAAgIQAAgFgEgDQgHgFgQgBIAAgGIBJAAIAAAGQgMACgGAFQgIAIgUAhIgzBVIAAA5QAAATACAEQABAFAHADQAFAEAJAAIAOAAIAAAGg");
	this.shape_163.setTransform(532.2,400.1);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AATBgQgMAPgIAFQgLAGgMAAQgfAAgSgcQgPgXAAgiQAAgaAJgUQAJgVAQgLQAQgLATAAQALAAAIAFQAKAFAJALIAAgyQAAgSgBgEQgCgFgEgDQgEgCgLAAIAAgIIBIAAIAAC9QAAATABADQACAGAEADQADADAKAAIAAAGIhGAOgAgWgfQgGAGgFAOQgEAMAAAdQABAfAEAPQAEAPAJAGQAEAEAGAAQAPAAANgZIAAhVQgMgZgSAAQgHAAgEADg");
	this.shape_164.setTransform(901.5,341.8);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AgsB3IAAgGQAMAAAEgGQAEgEAAgSIAAipQAAgRgEgFQgEgFgMgBIAAgGIBEAAIAADLQAAASAFAEQADAFAMABIAAAGg");
	this.shape_165.setTransform(886.4,341.5);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#000000").s().p("AgrB6IAAgHQALABAFgHQADgDAAgSIAAhfQAAgSgEgEQgEgFgLgBIAAgHIBEAAIAACCQAAASAEAEQAEAFALAAIAAAHgAgShKQgIgJAAgKQAAgMAIgIQAIgIAKAAQALAAAIAIQAIAIAAAMQAAAKgIAJQgIAHgLABQgKgBgIgHg");
	this.shape_166.setTransform(860.4,341.3);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#000000").s().p("AgTB7QgKgDgPgGQgJgEgFAAQgFAAgFAEQgFADgDAIIgHAAIAAhaIAHAAQAIAmAWAUQAWAUAYAAQAUAAAMgLQALgLAAgOQAAgJgEgHQgFgIgJgHQgJgIgWgLQghgQgOgLQgOgLgIgNQgHgOAAgRQAAgcAUgVQAVgUAgAAQALAAALADQAIACAMAGQAMAGAEAAQAFAAADgDQACgDADgLIAFAAIACBQIgHAAQgGgegTgSQgUgSgXAAQgSAAgKAJQgKAKAAAMQAAAIADAGQAFAJAMAIQAIAFAdAPQAqAVAOARQAPASAAAYQAAAegYAVQgXAWgkAAQgKAAgKgCg");
	this.shape_167.setTransform(825.4,341.5);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AAUBgQgNAPgJAFQgKAGgLAAQggAAgTgcQgOgXAAgiQAAgaAJgUQAJgVAQgLQAQgLASAAQAMAAAIAFQAKAFAKALIAAgyQAAgSgCgEQgCgFgEgDQgFgCgKAAIAAgIIBIAAIAAC9QAAATABADQACAGAEADQADADAKAAIAAAGIhFAOgAgWgfQgHAGgDAOQgFAMAAAdQAAAfAFAPQAFAPAHAGQAFAEAGAAQAPAAAOgZIAAhVQgNgZgSAAQgGAAgFADg");
	this.shape_168.setTransform(796.5,341.8);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#000000").s().p("Ag1A7QgPgXAAghQAAgoAWgZQAXgYAcAAQAZAAATAVQASAUACAoIhaAAQACAgAQATQALAOARAAQALAAAIgFQAJgGAKgQIAGAEQgOAbgQAMQgQALgVAAQgkAAgTgcgAgLhCQgKAQAAAbIAAAGIAuAAQAAgcgDgKQgDgLgGgFQgEgEgGAAQgIAAgGAJg");
	this.shape_169.setTransform(778.5,345.2);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#000000").s().p("Ag1A7QgPgXAAghQAAgoAWgZQAXgYAcAAQAZAAATAVQASAUACAoIhaAAQACAgAQATQALAOARAAQALAAAIgFQAJgGAKgQIAGAEQgOAbgQAMQgQALgVAAQgkAAgTgcgAgLhCQgKAQAAAbIAAAGIAuAAQAAgcgDgKQgDgLgGgFQgEgEgGAAQgIAAgGAJg");
	this.shape_170.setTransform(727.5,345.2);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AAFB3IAAgGQAJgBAEgGQAEgFAAgRIAAhKQAAgTgCgFQgCgFgDgDQgEgDgFAAQgGAAgHAFQgGAEgIANIAABXQAAARADAFQADAGAKABIAAAGIhTAAIAAgGQAKgBAFgGQADgEAAgSIAAimQAAgTgEgFQgDgEgLgCIAAgGIBDAAIAABfQAOgOAKgGQALgGAMAAQAQAAALAJQALAJADAMQAEALAAAbIAABBQAAASADAFQAEAFALABIAAAGg");
	this.shape_171.setTransform(709.3,341.5);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#000000").s().p("AgRBoQgKgIgDgLQgCgGAAgaIAAhYIgWAAIAAgGQAWgQAQgRQAPgRALgVIAGAAIAAA7IAnAAIAAASIgnAAIAABlQAAAOABAEQABAEAEACQADADADAAQALAAALgRIAFADQgOAjghgBQgOABgLgKg");
	this.shape_172.setTransform(693.4,342.4);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AATBgQgMAPgJAFQgKAGgLAAQggAAgTgcQgOgXAAgiQAAgaAJgUQAJgVAQgLQAQgLATAAQALAAAIAFQAJAFAKALIAAgyQAAgSgBgEQgCgFgEgDQgEgCgLAAIAAgIIBIAAIAAC9QAAATABADQABAGAFADQADADAKAAIAAAGIhGAOgAgWgfQgGAGgEAOQgFAMAAAdQABAfAEAPQAEAPAJAGQADAEAHAAQAPAAANgZIAAhVQgMgZgSAAQgGAAgFADg");
	this.shape_173.setTransform(668.5,341.8);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#000000").s().p("AAFBVIAAgHQAKgBAEgGQADgFgBgRIAAhIQAAgUgBgGQgCgFgDgDQgEgDgEAAQgPAAgNAWIAABXQAAASAEAFQADAFAJABIAAAHIhSAAIAAgHQAKgBAEgFQADgEAAgTIAAhcQAAgTgDgEQgEgFgKgBIAAgHIBCAAIAAAWQANgOAKgGQAMgHAOAAQAQAAAKAJQALAJADANQADAKAAAdIAAA/QAAATADAFQAEAEALABIAAAHg");
	this.shape_174.setTransform(648.3,345);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#000000").s().p("Ag4A9QgUgaAAgiQAAgiAUgbQAVgaAjAAQAVAAATALQASALAKAVQAJAUAAAXQAAAjgSAYQgVAcgmAAQgkAAgUgagAgOhDQgGAHgCAUQgCAUAAAiQAAATACARQACAMAGAHQAHAGAHAAQAIAAAFgEQAHgGACgLQAEgRgBgyQABgdgEgMQgDgLgGgFQgGgEgHAAQgHAAgHAHg");
	this.shape_175.setTransform(609.2,345.2);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AhDB6IAAgHQAMAAAEgCQAFgCACgFQABgDAAgOIAAhxIgYAAIAAgSIAYAAIAAgUQAAgZATgRQATgRAeAAQAWAAAKAJQAKAHAAAKQABAIgHAGQgGAGgLAAQgKAAgFgFQgFgFAAgFIABgHIABgFQAAgFgDgBQgCgDgEAAQgFAAgDAEQgEAFAAAJIAAAzIAYAAIAAASIgYAAIAABxQAAARAEADQAFAHAPgBIAAAHg");
	this.shape_176.setTransform(596.1,341.3);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("Ag0BMQgLgIgDgMQgEgLAAgdIAAhAQAAgTgDgEQgEgFgLgBIAAgHIBDAAIAABwQAAARACAFQACAFADADQAEADAFAAQAFAAAFgEQAHgEAKgOIAAhXQAAgTgDgEQgEgFgLgBIAAgHIBDAAIAACAQAAATAEAFQADAEALABIAAAHIhDAAIAAgWQgMAOgLAGQgLAHgPAAQgOAAgLgJg");
	this.shape_177.setTransform(569.2,345.5);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("Ag4A9QgUgaAAgiQAAgiAVgbQAUgaAjAAQAVAAASALQATALAJAVQAKAUAAAXQAAAjgSAYQgVAcgmAAQgkAAgUgagAgOhDQgHAHgCAUQgCAUAAAiQABATACARQACAMAGAHQAGAGAIAAQAHAAAGgEQAHgGACgLQAEgRAAgyQAAgdgEgMQgDgLgHgFQgFgEgGAAQgJAAgGAHg");
	this.shape_178.setTransform(550.2,345.2);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#000000").s().p("AhBB3IAAgGIALAAQAMAAAFgEQAFgCADgGQABgFAAgSIAAgvIg3hlQgRgfgHgFQgHgFgMgBIAAgGIBzAAIAAAGIgFAAQgLAAgDADQgFADAAAEQAAAGAPAaIAqBNIAqhGQAQgbAAgIQAAgFgEgDQgHgFgQgBIAAgGIBJAAIAAAGQgMACgGAFQgIAIgUAhIgzBVIAAA5QAAATACAEQABAFAHADQAFAEAJAAIAOAAIAAAGg");
	this.shape_179.setTransform(532.2,341.5);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#000000").s().p("AgUAVQgIgJAAgMQAAgLAIgJQAJgIALAAQAMAAAJAIQAIAJAAALQAAAMgJAJQgIAIgMAAQgLAAgJgIg");
	this.shape_180.setTransform(823.7,291.4);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AAFBVIAAgHQAKgBAEgGQADgFgBgRIAAhIQABgUgCgGQgCgFgDgDQgEgDgFAAQgOAAgNAWIAABXQAAASAEAFQADAFAJABIAAAHIhSAAIAAgHQAKgBAEgFQADgEAAgTIAAhcQAAgTgEgEQgDgFgKgBIAAgHIBCAAIAAAWQANgOAKgGQAMgHAOAAQAPAAALAJQAKAJAEANQADAKAAAdIAAA/QAAATAEAFQADAEALABIAAAHg");
	this.shape_181.setTransform(809.3,285.4);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#000000").s().p("AgrB6IAAgHQALAAAFgFQADgFAAgRIAAhfQAAgRgEgFQgEgFgLgBIAAgGIBEAAIAACBQAAASAEAEQAEAFALAAIAAAHgAgShLQgIgHAAgLQAAgMAIgIQAIgIAKAAQALAAAIAIQAIAIAAAMQAAALgIAHQgIAJgLgBQgKABgIgJg");
	this.shape_182.setTransform(794.4,281.7);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#000000").s().p("Ag4A9QgUgaAAgiQAAgiAUgbQAVgaAjAAQAVAAATALQASALAKAVQAJAUAAAXQAAAjgSAYQgVAcgmAAQgkAAgUgagAgOhDQgGAHgCAUQgCAUAAAiQAAATACARQACAMAGAHQAHAGAHAAQAIAAAFgEQAHgGACgLQAEgRgBgyQABgdgEgMQgDgLgGgFQgGgEgHAAQgHAAgHAHg");
	this.shape_183.setTransform(780.2,285.7);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#000000").s().p("Ag1A7QgPgXAAghQAAgoAWgZQAXgYAcAAQAZAAATAVQASAUACAoIhaAAQACAgAQATQALAOARAAQALAAAIgFQAJgGAKgQIAGAEQgOAbgQAMQgQALgVAAQgkAAgTgcgAgLhCQgKAQAAAbIAAAGIAuAAQAAgcgDgKQgDgLgGgFQgEgEgGAAQgIAAgGAJg");
	this.shape_184.setTransform(728.5,285.7);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#000000").s().p("AAFB3IAAgGQAJgBAEgGQAEgFAAgRIAAhKQAAgTgCgFQgCgFgDgDQgEgDgFAAQgGAAgHAFQgGAEgIANIAABXQAAARADAFQADAGAKABIAAAGIhTAAIAAgGQAKgBAFgGQADgEAAgSIAAimQAAgTgEgFQgDgEgLgCIAAgGIBDAAIAABfQAOgOAKgGQALgGAMAAQAQAAALAJQALAJADAMQAEALAAAbIAABBQAAASADAFQAEAFALABIAAAGg");
	this.shape_185.setTransform(710.3,282);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#000000").s().p("AgQBoQgMgIgCgLQgCgGAAgaIAAhYIgWAAIAAgGQAXgQAPgRQAPgRALgWIAGAAIAAA9IAnAAIAAARIgnAAIAABlQAAANABAFQACAEADADQADACADAAQALAAAKgSIAGAFQgOAhghAAQgOAAgKgJg");
	this.shape_186.setTransform(694.4,282.8);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#000000").s().p("AAUBgQgNAPgJAFQgJAGgMAAQggAAgTgcQgOgXAAgiQAAgaAJgUQAJgVAQgLQAQgLASAAQAMAAAIAFQAKAFAKALIAAgyQAAgSgCgEQgCgFgEgDQgEgCgLAAIAAgIIBIAAIAAC9QAAATABADQABAGAFADQADADAKAAIAAAGIhFAOgAgWgfQgGAGgEAOQgFAMAAAdQAAAfAFAPQAFAPAHAGQAEAEAHAAQAPAAAOgZIAAhVQgNgZgSAAQgGAAgFADg");
	this.shape_187.setTransform(669.5,282.2);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#000000").s().p("AAGBVIAAgHQAJgBAEgGQACgFAAgRIAAhIQAAgUgBgGQgCgFgDgDQgEgDgEAAQgPAAgMAWIAABXQAAASADAFQADAFAJABIAAAHIhTAAIAAgHQALgBAEgFQADgEAAgTIAAhcQAAgTgDgEQgEgFgLgBIAAgHIBEAAIAAAWQAMgOAKgGQAMgHANAAQARAAAKAJQALAJADANQADAKAAAdIAAA/QAAATADAFQAEAEALABIAAAHg");
	this.shape_188.setTransform(649.3,285.4);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#000000").s().p("Ag0BMQgLgIgDgMQgEgLAAgdIAAhAQAAgTgDgEQgEgFgLgBIAAgHIBDAAIAABwQAAARACAFQACAFADADQAEADAFAAQAFAAAFgEQAHgEAKgOIAAhXQAAgTgDgEQgEgFgLgBIAAgHIBDAAIAACAQAAATAEAFQADAEALABIAAAHIhDAAIAAgWQgMAOgLAGQgLAHgPAAQgOAAgLgJg");
	this.shape_189.setTransform(629.2,285.9);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AhDB6IAAgHQAMAAAEgCQAFgCACgFQACgDgBgOIAAhxIgYAAIAAgRIAYAAIAAgUQAAgaATgRQATgRAeAAQAWAAAKAJQALAHgBAKQABAIgHAGQgGAFgLAAQgJAAgGgEQgFgFAAgGIABgGIABgFQAAgEgCgCQgDgDgEAAQgFAAgDAFQgEADAAAKIAAA0IAYAAIAAARIgYAAIAABxQAAAQAEAFQAFAGAPgBIAAAHg");
	this.shape_190.setTransform(597.1,281.7);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#000000").s().p("Ag0BMQgLgIgDgMQgEgLAAgdIAAhAQAAgTgDgEQgEgFgLgBIAAgHIBDAAIAABwQAAARACAFQACAFADADQAEADAFAAQAFAAAFgEQAHgEAKgOIAAhXQAAgTgDgEQgEgFgLgBIAAgHIBDAAIAACAQAAATAEAFQADAEALABIAAAHIhDAAIAAgWQgMAOgLAGQgLAHgPAAQgOAAgLgJg");
	this.shape_191.setTransform(570.2,285.9);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#000000").s().p("Ag4A9QgUgaAAgiQAAgiAVgbQAUgaAjAAQAVAAASALQATALAJAVQAKAUAAAXQAAAjgRAYQgWAcgmAAQgkAAgUgagAgOhDQgHAHgCAUQgCAUAAAiQABATACARQACAMAGAHQAGAGAIAAQAHAAAGgEQAGgGADgLQADgRABgyQgBgdgDgMQgDgLgHgFQgEgEgIAAQgIAAgGAHg");
	this.shape_192.setTransform(551.2,285.7);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#000000").s().p("AhBB3IAAgGIALAAQAMAAAFgEQAFgCACgGQACgFAAgSIAAgvIg3hlQgRgfgHgFQgHgFgMgBIAAgGIBzAAIAAAGIgFAAQgLAAgDADQgFADAAAEQAAAGAPAaIAqBNIAqhGQAQgbAAgIQAAgFgEgDQgHgFgQgBIAAgGIBJAAIAAAGQgLACgHAFQgIAIgUAhIgzBVIAAA5QAAATACAEQABAFAHADQAFAEAJAAIAOAAIAAAGg");
	this.shape_193.setTransform(533.2,282);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#000000").s().p("AgrB3IAAgGQALAAAFgGQADgEAAgSIAAipQAAgRgEgFQgEgFgLgBIAAgGIBDAAIAADLQABASAEAEQADAFANABIAAAGg");
	this.shape_194.setTransform(898.4,353.4);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#000000").s().p("AhtB3IAAgGQAQAAAHgDQAFgDADgFQACgFAAgUIAAiZQAAgUgCgFQgDgFgFgDQgHgDgQAAIAAgGIByAAQApAAAQAHQASAHAJAPQAKAOAAARQAAARgNAOQgMANggAIQAjAHANALQAUAQAAAaQAAAagWASQgaAVgzAAgAgVBXQAAAKAGAEQAEAFAJAAQANAAAMgGQAMgGAHgMQAGgMAAgPQAAgQgHgNQgJgOgNgFQgOgFgaAAgAgVgLQAYAAAMgGQANgFAFgKQAHgLAAgPQAAgQgGgKQgHgKgLgGQgLgFgaAAg");
	this.shape_195.setTransform(760,353.4);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#000000").s().p("AgQBpQgLgJgEgLQgCgGAAgaIAAhYIgVAAIAAgGQAXgPAPgSQAQgRAKgWIAGAAIAAA8IAnAAIAAASIgnAAIAABkQAAAPACAEQAAAEAEACQADADADAAQAMAAAJgSIAGAFQgPAhgfABQgPgBgKgIg");
	this.shape_196.setTransform(697.4,354.2);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AhCB6IAAgGQAKAAAGgDQAEgCACgEQABgFAAgNIAAhxIgXAAIAAgSIAXAAIAAgTQABgaASgRQASgRAfAAQAVAAALAIQALAJAAAJQgBAIgGAGQgHAGgKgBQgKABgEgFQgGgFAAgFIABgHIABgGQAAgEgCgBQgDgDgEAAQgGAAgDAFQgDADAAAKIAAAzIAZAAIAAASIgZAAIAABxQAAAQADAEQAGAHAQAAIAAAGg");
	this.shape_197.setTransform(600.1,353.1);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AgrB6IAAgGQALAAAFgHQADgDAAgSIAAhfQAAgSgEgEQgEgFgLgBIAAgHIBEAAIAACCQAAASAEAEQAEAFALABIAAAGgAgShKQgIgJAAgKQAAgMAIgIQAIgIAKAAQALAAAIAIQAIAIAAAMQAAAKgIAJQgIAHgLABQgKgBgIgHg");
	this.shape_198.setTransform(798.4,287.7);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#000000").s().p("AgRBpQgKgJgEgLQgCgGAAgaIAAhYIgVAAIAAgGQAWgQAQgRQAQgRAKgVIAGAAIAAA7IAnAAIAAASIgnAAIAABlQAAAOACAEQABAEADACQADADADAAQALAAAKgRIAGADQgPAjgfgBQgPABgLgJg");
	this.shape_199.setTransform(698.4,288.8);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#000000").s().p("AAUBgQgNAPgIAFQgKAGgNAAQgfAAgSgcQgPgXAAgiQAAgaAJgUQAJgVAQgLQAQgLATAAQALAAAIAFQAJAFALALIAAgyQgBgSgBgEQgCgFgEgDQgFgCgKAAIAAgIIBIAAIAAC9QAAATABADQABAGAEADQAEADAKAAIAAAGIhFAOgAgWgfQgHAGgEAOQgDAMAAAdQgBAfAFAPQAEAPAJAGQADAEAIAAQAOAAAOgZIAAhVQgOgZgRAAQgHAAgEADg");
	this.shape_200.setTransform(673.5,288.2);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AAFBVIAAgHQAKgBAEgGQACgFABgRIAAhIQgBgUgBgGQgBgFgEgDQgEgDgFAAQgNAAgOAWIAABXQABASADAFQADAFAKABIAAAHIhTAAIAAgHQAJgBAFgFQADgEAAgTIAAhcQAAgTgEgEQgDgFgKgBIAAgHIBCAAIAAAWQANgOALgGQALgHANAAQARAAAKAJQALAJADANQADAKAAAdIAAA/QAAATAEAFQADAEAKABIAAAHg");
	this.shape_201.setTransform(653.3,291.4);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AhCB6IAAgGQAKgBAGgCQAEgCACgEQACgEAAgOIAAhxIgYAAIAAgSIAYAAIAAgUQAAgZASgRQASgRAfAAQAVAAALAJQALAHAAAKQgBAIgGAGQgGAGgLAAQgKAAgEgFQgGgFAAgGIABgGIABgFQAAgFgCgBQgDgDgEAAQgFAAgEAEQgDAFAAAJIAAAzIAZAAIAAASIgZAAIAABxQAAARADADQAHAHAPAAIAAAGg");
	this.shape_202.setTransform(601.1,287.7);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#000000").s().p("AhCB3IAAgGIANAAQAKAAAHgEQAEgCACgGQADgFAAgSIAAgvIg5hlQgQgfgHgFQgHgFgLgBIAAgGIByAAIAAAGIgFAAQgKAAgFADQgEADAAAEQAAAGAOAaIAqBNIArhGQAQgbAAgIQAAgFgFgDQgFgFgQgBIAAgGIBJAAIAAAGQgNACgFAFQgKAIgSAhIg0BVIAAA5QAAATACAEQACAFAFADQAGAEAKAAIANAAIAAAGg");
	this.shape_203.setTransform(537.2,288);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AATBgQgMAPgIAFQgLAGgMAAQgfAAgSgcQgPgXAAgiQAAgaAJgUQAJgVAQgLQAQgLATAAQALAAAIAFQAJAFAKALIAAgyQABgSgCgEQgCgFgEgDQgFgCgKAAIAAgIIBIAAIAAC9QAAATABADQABAGAEADQAFADAJAAIAAAGIhGAOgAgWgfQgGAGgFAOQgDAMAAAdQgBAfAFAPQAEAPAJAGQADAEAIAAQAOAAANgZIAAhVQgNgZgRAAQgGAAgFADg");
	this.shape_204.setTransform(917.5,329.9);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#000000").s().p("AgsB3IAAgGQAMAAAEgGQAEgEAAgSIAAipQAAgRgEgFQgEgFgMgBIAAgGIBFAAIAADLQAAASADAEQAFAFALABIAAAGg");
	this.shape_205.setTransform(902.4,329.7);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#000000").s().p("AgrB6IAAgHQALAAAFgFQADgFAAgRIAAhfQAAgRgEgFQgEgFgLgBIAAgGIBEAAIAACBQAAASAEAEQAEAFALAAIAAAHgAgShLQgIgHAAgMQAAgLAIgIQAIgIAKAAQALAAAIAIQAIAIAAALQAAAMgIAHQgIAJgLgBQgKABgIgJg");
	this.shape_206.setTransform(876.4,329.4);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#000000").s().p("AhtB3IAAgGQARAAAFgDQAGgDADgFQACgFAAgUIAAiZQAAgUgCgFQgDgFgGgDQgFgDgRAAIAAgGIBxAAQApAAASAHQARAHAJAPQAKAOAAARQAAARgNAOQgMANgfAIQAhAHAPALQATAQAAAaQAAAagVASQgbAVgzAAgAgVBXQABAKAEAEQAFAFAKAAQANAAALgGQANgGAGgMQAGgMAAgPQAAgQgIgNQgIgOgNgFQgOgFgaAAgAgVgLQAZAAAMgGQALgFAHgKQAGgLAAgPQAAgQgGgKQgGgKgMgGQgMgFgZAAg");
	this.shape_207.setTransform(764,329.7);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#000000").s().p("AgRBoQgLgIgCgLQgCgGAAgaIAAhYIgWAAIAAgGQAWgQAQgRQAPgRALgWIAGAAIAAA9IAnAAIAAARIgnAAIAABkQAAAOABAFQABAEAEADQADACADAAQAMAAAKgSIAFAFQgOAhghAAQgOAAgLgJg");
	this.shape_208.setTransform(701.4,330.5);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#000000").s().p("AhDB6IAAgHQAMAAAFgCQAEgCACgFQABgDABgOIAAhxIgZAAIAAgRIAZAAIAAgUQAAgaASgRQATgRAeAAQAWAAAKAJQAKAHAAAKQAAAIgGAGQgHAFgKABQgKgBgFgEQgFgFAAgGIABgGIABgGQAAgDgDgCQgCgDgEAAQgFAAgDAFQgEADAAAKIAAA0IAYAAIAAARIgYAAIAABxQAAAQAEAFQAFAGAPgBIAAAHg");
	this.shape_209.setTransform(604.1,329.4);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#000000").s().p("AhBB3IAAgGIALAAQAMAAAFgEQAFgCADgGQACgFgBgSIAAgvIg3hlQgRgfgHgFQgHgFgMgBIAAgGIBzAAIAAAGIgFAAQgLAAgDADQgFADAAAEQAAAGAPAaIAqBNIAqhGQAQgbAAgIQAAgFgEgDQgHgFgQgBIAAgGIBJAAIAAAGQgLACgHAFQgIAIgUAhIgzBVIAAA5QAAATACAEQABAFAGADQAGAEAJAAIAOAAIAAAGg");
	this.shape_210.setTransform(540.2,329.7);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AgTB0QgMgJgDgMQgCgHAAgdIAAhiIgYAAIAAgHQAZgRARgTQARgUAMgXIAGAAIAABDIAsAAIAAATIgsAAIAABwQAAAPACAGQABAEAEADQAEACADABQAMAAAMgUIAGAEQgQAmgjAAQgRAAgMgKg");
	this.shape_211.setTransform(792.5,262.7);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#000000").s().p("AhNBeIAAgHQALgBAFgGQAEgFAAgYIAAhkQAAgQgBgEQgCgGgEgCQgEgCgJgCIAAgHIBLAAIAAAqQAQgdAOgIQAOgKAMAAQALAAAHAHQAGAGAAANQAAANgGAHQgGAHgJAAQgKAAgIgGIgJgIIgFgBQgFAAgFAEQgJAHgDAMQgGATABAWIAAA1QgBALACADQABAGAFACQAFACALABIAAAHg");
	this.shape_212.setTransform(744.6,265.7);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#000000").s().p("Ag+BEQgXgdAAgmQAAgmAYgeQAWgdAnAAQAYAAAUAMQAVANAKAWQAKAXAAAaQAAAngTAaQgYAggqAAQgoAAgWgdgAgQhKQgHAHgCAWQgCAWAAAnQAAAVADASQABAOAHAHQAHAHAJAAQAIAAAGgFQAIgGADgMQADgTAAg3QAAghgDgNQgEgMgIgGQgFgEgHAAQgKAAgHAIg");
	this.shape_213.setTransform(725.3,265.9);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#000000").s().p("AhKCHIAAgHQAMAAAFgDQAGgCABgFQACgEAAgPIAAh+IgaAAIAAgTIAaAAIAAgXQABgcAUgTQAVgSAigBQAYAAAMAJQALAKAAAKQAAAJgIAHQgGAGgNAAQgKAAgGgFQgFgFAAgHIABgHIABgHQgBgDgCgCQgDgEgEAAQgGAAgEAGQgEAEAAAKIAAA6IAbAAIAAATIgbAAIAAB+QAAASAFAFQAFAHARgBIAAAHg");
	this.shape_214.setTransform(710.8,261.5);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#000000").s().p("AgTB0QgMgJgEgMQgBgHAAgdIAAhiIgYAAIAAgHQAYgRASgTQARgUAMgXIAGAAIAABDIAsAAIAAATIgsAAIAABwQABAPABAGQABAEAEADQAEACADABQAMAAAMgUIAGAEQgQAmgkAAQgQAAgMgKg");
	this.shape_215.setTransform(645.6,262.7);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#000000").s().p("AhKCHIAAgHQAMAAAGgDQAEgCACgFQADgEAAgPIAAh+IgbAAIAAgTIAbAAIAAgXQAAgcAUgTQAUgSAigBQAYAAAMAJQAMAKAAAKQAAAJgHAHQgIAGgMAAQgJAAgGgFQgHgFAAgHIABgHIABgHQABgDgDgCQgDgEgFAAQgFAAgEAGQgEAEAAAKIABA6IAbAAIAAATIgbAAIAAB+QAAASADAFQAGAHASgBIAAAHg");
	this.shape_216.setTransform(624.2,261.5);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("Ag/BEQgWgdABgmQgBgmAXgeQAXgdAnAAQAXAAAVAMQAUANALAWQALAXAAAaQgBAngTAaQgYAggqAAQgoAAgXgdgAgQhKQgHAHgCAWQgCAWgBAnQABAVACASQACAOAHAHQAHAHAJAAQAIAAAHgFQAHgGADgMQADgTAAg3QAAghgDgNQgEgMgHgGQgGgEgIAAQgJAAgHAIg");
	this.shape_217.setTransform(605.4,265.9);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("AgTB0QgMgJgEgMQgBgHAAgdIAAhiIgYAAIAAgHQAYgRASgTQARgUAMgXIAGAAIAABDIAsAAIAAATIgsAAIAABwQAAAPACAGQABAEAEADQAEACADABQAMAAAMgUIAGAEQgQAmgkAAQgQAAgMgKg");
	this.shape_218.setTransform(579,262.7);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("Ag6BVQgMgKgEgNQgEgNAAgfIAAhIQAAgUgDgFQgFgGgLgBIAAgHIBJAAIAAB8QAAATACAGQACAFAEADQAFAEAEAAQAHAAAFgFQAIgEALgQIAAhhQAAgUgEgFQgDgGgNgBIAAgHIBLAAIAACOQAAAVAEAFQAEAFAMABIAAAHIhLAAIAAgYQgNAQgMAHQgNAHgRAAQgPAAgMgJg");
	this.shape_219.setTransform(561,266.2);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#000000").s().p("Ag/BEQgVgdAAgmQAAgmAWgeQAXgdAnAAQAXAAAVAMQAUANALAWQALAXAAAaQAAAngUAaQgYAggqAAQgoAAgXgdgAgPhKQgIAHgCAWQgCAWgBAnQAAAVAEASQABAOAIAHQAHAHAIAAQAJAAAFgFQAIgGACgMQAEgTABg3QgBghgEgNQgDgMgHgGQgFgEgJAAQgIAAgHAIg");
	this.shape_220.setTransform(539.9,265.9);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#000000").s().p("AAGCFIAAgHQAKgCAFgGQADgFAAgUIAAhSQAAgVgBgGQgCgGgEgDQgFgDgFAAQgHAAgHAFQgIAGgIANIAABhQAAAUADAFQADAGAMACIAAAHIhdAAIAAgHQAMgCAFgGQADgEAAgVIAAi4QAAgWgEgEQgDgGgNgBIAAgIIBLAAIAABqQAPgQALgGQANgGANAAQASAAAMAJQAMAKAEANQAEAOAAAdIAABIQAAAVAEAFQAEAFAMACIAAAHg");
	this.shape_221.setTransform(705.6,215.5);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#000000").s().p("AAGCFIAAgHQAKgCAFgGQADgFAAgUIAAhSQAAgVgBgGQgCgGgEgDQgFgDgFAAQgHAAgHAFQgIAGgIANIAABhQAAAUADAFQADAGAMACIAAAHIhdAAIAAgHQAMgCAFgGQADgEAAgVIAAi4QAAgWgEgEQgDgGgNgBIAAgIIBLAAIAABqQAPgQALgGQANgGANAAQASAAAMAJQAMAKAEANQAEAOAAAdIAABIQAAAVAEAFQAEAFAMACIAAAHg");
	this.shape_222.setTransform(637.9,215.5);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#000000").s().p("AgwCEIAAgHQAMAAAGgGQAEgFAAgUIAAi7QAAgTgFgGQgEgGgNAAIAAgHIBLAAIAADhQAAAUAFAGQAEAEANABIAAAHg");
	this.shape_223.setTransform(822.3,169.2);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#000000").s().p("AgwCEIAAgHQAMAAAGgGQAEgFAAgUIAAi7QAAgTgFgGQgEgGgNAAIAAgHIBLAAIAADhQAAAUAFAGQAEAEANABIAAAHg");
	this.shape_224.setTransform(811.2,169.2);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AhKCHIAAgHQAMAAAFgDQAGgCABgFQACgEAAgPIAAh+IgaAAIAAgTIAaAAIAAgXQABgcAUgTQAVgSAigBQAYAAAMAJQALAKAAAKQAAAKgIAGQgGAGgNAAQgKAAgGgFQgFgGAAgGIABgHIABgHQgBgDgCgCQgDgEgEAAQgGABgEAFQgEAEAAALIAAA5IAbAAIAAATIgbAAIAAB+QAAASAFAFQAFAHARgBIAAAHg");
	this.shape_225.setTransform(778.7,168.9);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#000000").s().p("AAGCEIAAgHQAKgBAFgGQADgFAAgUIAAhRQAAgWgBgGQgCgGgEgDQgFgDgFAAQgHAAgHAGQgIAEgIAOIAABhQAAAUADAFQADAGAMABIAAAHIhdAAIAAgHQAMAAAFgHQADgEAAgVIAAi5QAAgUgEgGQgDgFgNgBIAAgHIBLAAIAABqQAPgRALgGQANgHANAAQASAAAMAKQAMAKAEANQAEAOAAAeIAABHQAAAVAEAFQAEAFAMABIAAAHg");
	this.shape_226.setTransform(569.1,169.2);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#000000").s().p("AhJCEIAAgHIANAAQANABAGgFQAFgCADgHQADgFAAgUIAAg1Ig/hwQgSgigIgGQgIgGgMAAIAAgHIB/AAIAAAHIgGAAQgMAAgEADQgFAEAAADQAAAIAPAcIAwBWIAvhOQASgeAAgKQAAgEgFgFQgGgEgSgBIAAgHIBRAAIAAAHQgOABgGAGQgKAIgWAlIg5BfIAABAQAAAUACAGQADAFAGADQAGAEALAAIAOAAIAAAHg");
	this.shape_227.setTransform(495.6,169.2);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000000").s().p("AAbCEQgRAWgNAIQgNAHgRAAQgsAAgZgnQgVggAAguQAAglANgcQAMgeAXgOQAWgPAZAAQAQAAAMAGQANAGAOARIAAhGQAAgagCgFQgDgHgGgEQgGgDgPAAIAAgKIBlAAIAAEFQAAAcABAEQACAIAGAEQAFAEAOABIAAAIIhhATgAgfgrQgJAHgGAUQgFARAAAoQAAArAGAVQAGAUALAKQAGAEAKAAQAUAAATghIAAh3QgSgjgZAAQgJAAgGAFg");
	this.shape_228.setTransform(662,102.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_60,p:{y:193.6}},{t:this.shape_59,p:{y:198.4}},{t:this.shape_58,p:{y:193.3}},{t:this.shape_57,p:{y:193.3}},{t:this.shape_56},{t:this.shape_55,p:{y:198.4}},{t:this.shape_54,p:{y:198.1}},{t:this.shape_53,p:{y:198.4}},{t:this.shape_52,p:{y:193.2}},{t:this.shape_51,p:{y:245}},{t:this.shape_50,p:{y:249.1}},{t:this.shape_49,p:{y:249.4}},{t:this.shape_48},{t:this.shape_47,p:{y:248.9}},{t:this.shape_46,p:{y:249.4}},{t:this.shape_45,p:{y:249.1}},{t:this.shape_44,p:{y:249.1}},{t:this.shape_43,p:{y:249.4}},{t:this.shape_42,p:{y:249.1}},{t:this.shape_41,p:{y:249.1}},{t:this.shape_40,p:{y:249.1}},{t:this.shape_39,p:{y:249.1}},{t:this.shape_38,p:{y:249.1}},{t:this.shape_37},{t:this.shape_36,p:{y:249.4}},{t:this.shape_35,p:{y:245}},{t:this.shape_34,p:{y:245}},{t:this.shape_33,p:{y:253.4}},{t:this.shape_32,p:{y:299.4}},{t:this.shape_31,p:{y:295.7}},{t:this.shape_30,p:{y:291}},{t:this.shape_29,p:{y:291.5}},{t:this.shape_28,p:{y:295.4}},{t:this.shape_27,p:{y:291.5}},{t:this.shape_26},{t:this.shape_25,p:{y:291.3}},{t:this.shape_24,p:{y:295.4}},{t:this.shape_23,p:{y:295.4}},{t:this.shape_22,p:{y:291.3}},{t:this.shape_21,p:{y:295.2}},{t:this.shape_20},{t:this.shape_19,p:{y:295.2}},{t:this.shape_18,p:{y:295.4}},{t:this.shape_17},{t:this.shape_16,p:{y:295.4}},{t:this.shape_15},{t:this.shape_14,p:{y:341.7}},{t:this.shape_13,p:{y:342}},{t:this.shape_12,p:{y:338.5}},{t:this.shape_11,p:{y:341.7}},{t:this.shape_10},{t:this.shape_9,p:{y:338.5}},{t:this.shape_8,p:{y:337.6}},{t:this.shape_7,p:{y:341.7,x:678.4}},{t:this.shape_6},{t:this.shape_5,p:{y:341.7}},{t:this.shape_4},{t:this.shape_3,p:{y:341.7,x:756.5}},{t:this.shape_2,p:{y:341.7,x:772.9}},{t:this.shape_1,p:{y:338.5}},{t:this.shape,p:{y:348.1}}]},3110).to({state:[{t:this.shape_60,p:{y:139}},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_50,p:{y:194.5}},{t:this.shape_102,p:{y:194.8}},{t:this.shape_101},{t:this.shape_47,p:{y:194.3}},{t:this.shape_100,p:{y:194.8}},{t:this.shape_45,p:{y:194.5}},{t:this.shape_44,p:{y:194.5}},{t:this.shape_99,p:{y:194.8}},{t:this.shape_42,p:{y:194.5}},{t:this.shape_41,p:{y:194.5}},{t:this.shape_40,p:{y:194.5}},{t:this.shape_39,p:{y:194.5}},{t:this.shape_38,p:{y:194.5}},{t:this.shape_98},{t:this.shape_97,p:{y:194.8}},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94,p:{y:198.8}},{t:this.shape_32,p:{y:244.8}},{t:this.shape_93,p:{y:241.1}},{t:this.shape_92,p:{y:236.4}},{t:this.shape_29,p:{y:236.9}},{t:this.shape_28,p:{y:240.8}},{t:this.shape_27,p:{y:236.9}},{t:this.shape_91,p:{y:237.6}},{t:this.shape_90},{t:this.shape_24,p:{y:240.8}},{t:this.shape_23,p:{y:240.8}},{t:this.shape_89},{t:this.shape_21,p:{y:240.6}},{t:this.shape_88,p:{y:240.5}},{t:this.shape_19,p:{y:240.6}},{t:this.shape_18,p:{y:240.8}},{t:this.shape_87,p:{y:237.6}},{t:this.shape_16,p:{y:240.8}},{t:this.shape_86,p:{y:240.5}},{t:this.shape_14,p:{y:287.1}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_11,p:{y:287.1}},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81,p:{x:658.2,y:283}},{t:this.shape_7,p:{y:287.1,x:678.4}},{t:this.shape_80},{t:this.shape_5,p:{y:287.1}},{t:this.shape_79},{t:this.shape_3,p:{y:287.1,x:756.5}},{t:this.shape_2,p:{y:287.1,x:772.9}},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76,p:{x:527.2,y:336.7}},{t:this.shape_75,p:{x:545.2,y:340.4}},{t:this.shape_74,p:{x:564.2,y:340.6}},{t:this.shape_73},{t:this.shape_72,p:{x:604.2,y:340.4}},{t:this.shape_71,p:{x:623.2,y:340.6}},{t:this.shape_70,p:{x:643.3,y:340.1}},{t:this.shape_69,p:{x:663.5,y:336.9}},{t:this.shape_68},{t:this.shape_67,p:{x:704.3,y:336.7}},{t:this.shape_66,p:{x:722.5,y:340.4}},{t:this.shape_65,p:{x:751.9,y:336.7}},{t:this.shape_64,p:{x:774.2,y:340.4}},{t:this.shape_63},{t:this.shape_62,p:{x:803.3,y:340.1}},{t:this.shape_61,p:{x:817.7,y:346.1}},{t:this.instance,p:{y:331.6,x:431.7}}]},1).to({state:[{t:this.shape_60,p:{y:88.3}},{t:this.shape_59,p:{y:93.1}},{t:this.shape_58,p:{y:88}},{t:this.shape_57,p:{y:88}},{t:this.shape_152},{t:this.shape_55,p:{y:93.1}},{t:this.shape_151},{t:this.shape_53,p:{y:93.1}},{t:this.shape_150},{t:this.shape_51,p:{y:139.7}},{t:this.shape_50,p:{y:143.8}},{t:this.shape_49,p:{y:144.1}},{t:this.shape_149},{t:this.shape_47,p:{y:143.6}},{t:this.shape_46,p:{y:144.1}},{t:this.shape_45,p:{y:143.8}},{t:this.shape_44,p:{y:143.8}},{t:this.shape_43,p:{y:144.1}},{t:this.shape_42,p:{y:143.8}},{t:this.shape_41,p:{y:143.8}},{t:this.shape_40,p:{y:143.8}},{t:this.shape_39,p:{y:143.8}},{t:this.shape_38,p:{y:143.8}},{t:this.shape_148},{t:this.shape_36,p:{y:144.1}},{t:this.shape_35,p:{y:139.7}},{t:this.shape_34,p:{y:139.7}},{t:this.shape_33,p:{y:148.1}},{t:this.shape_32,p:{y:194.1}},{t:this.shape_31,p:{y:190.4}},{t:this.shape_30,p:{y:185.7}},{t:this.shape_29,p:{y:186.2}},{t:this.shape_28,p:{y:190.1}},{t:this.shape_27,p:{y:186.2}},{t:this.shape_147},{t:this.shape_25,p:{y:186}},{t:this.shape_24,p:{y:190.1}},{t:this.shape_23,p:{y:190.1}},{t:this.shape_22,p:{y:186}},{t:this.shape_21,p:{y:189.9}},{t:this.shape_146},{t:this.shape_19,p:{y:189.9}},{t:this.shape_18,p:{y:190.1}},{t:this.shape_145},{t:this.shape_16,p:{y:190.1}},{t:this.shape_144},{t:this.shape_14,p:{y:236.4}},{t:this.shape_13,p:{y:236.7}},{t:this.shape_12,p:{y:233.2}},{t:this.shape_11,p:{y:236.4}},{t:this.shape_143},{t:this.shape_9,p:{y:233.2}},{t:this.shape_8,p:{y:232.3}},{t:this.shape_7,p:{y:236.4,x:678.4}},{t:this.shape_142},{t:this.shape_5,p:{y:236.4}},{t:this.shape_141},{t:this.shape_3,p:{y:236.4,x:756.5}},{t:this.shape_2,p:{y:236.4,x:772.9}},{t:this.shape_1,p:{y:233.2}},{t:this.shape,p:{y:242.8}},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138,p:{x:573,y:289.9}},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135,p:{x:632,y:289.9}},{t:this.shape_62,p:{x:652.1,y:289.4}},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132,p:{x:713.1,y:286}},{t:this.shape_131,p:{x:731.3,y:289.7}},{t:this.shape_65,p:{x:760.7,y:286}},{t:this.shape_130,p:{x:783,y:289.7}},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127,p:{x:826.5,y:295.4}},{t:this.instance,p:{y:259.4,x:431.7}},{t:this.instance_1,p:{x:434,y:329.7}},{t:this.shape_126},{t:this.shape_125},{t:this.shape_74,p:{x:572.6,y:343.8}},{t:this.shape_124},{t:this.shape_64,p:{x:612.7,y:343.6}},{t:this.shape_71,p:{x:631.6,y:343.8}},{t:this.shape_123,p:{x:651.8,y:343.3}},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120,p:{x:712.8,y:339.9}},{t:this.shape_119,p:{x:730.9,y:343.6}},{t:this.shape_118,p:{x:761.1,y:339.9}},{t:this.shape_117,p:{x:781.9,y:343.6}},{t:this.shape_116},{t:this.shape_115,p:{x:828.9,y:339.9}},{t:this.shape_67,p:{x:848.8,y:339.9}},{t:this.shape_114,p:{x:863.8,y:339.6}},{t:this.shape_66,p:{x:876.9,y:343.6}},{t:this.shape_113},{t:this.shape_112},{t:this.shape_61,p:{x:919.2,y:349.3}}]},1).to({state:[{t:this.shape_60,p:{y:88.3}},{t:this.shape_59,p:{y:93.1}},{t:this.shape_58,p:{y:88}},{t:this.shape_57,p:{y:88}},{t:this.shape_152},{t:this.shape_55,p:{y:93.1}},{t:this.shape_151},{t:this.shape_53,p:{y:93.1}},{t:this.shape_150},{t:this.shape_51,p:{y:139.7}},{t:this.shape_50,p:{y:143.8}},{t:this.shape_49,p:{y:144.1}},{t:this.shape_149},{t:this.shape_47,p:{y:143.6}},{t:this.shape_46,p:{y:144.1}},{t:this.shape_45,p:{y:143.8}},{t:this.shape_44,p:{y:143.8}},{t:this.shape_43,p:{y:144.1}},{t:this.shape_42,p:{y:143.8}},{t:this.shape_41,p:{y:143.8}},{t:this.shape_40,p:{y:143.8}},{t:this.shape_39,p:{y:143.8}},{t:this.shape_38,p:{y:143.8}},{t:this.shape_148},{t:this.shape_36,p:{y:144.1}},{t:this.shape_35,p:{y:139.7}},{t:this.shape_34,p:{y:139.7}},{t:this.shape_33,p:{y:148.1}},{t:this.shape_32,p:{y:194.1}},{t:this.shape_31,p:{y:190.4}},{t:this.shape_30,p:{y:185.7}},{t:this.shape_29,p:{y:186.2}},{t:this.shape_28,p:{y:190.1}},{t:this.shape_27,p:{y:186.2}},{t:this.shape_147},{t:this.shape_25,p:{y:186}},{t:this.shape_24,p:{y:190.1}},{t:this.shape_23,p:{y:190.1}},{t:this.shape_22,p:{y:186}},{t:this.shape_21,p:{y:189.9}},{t:this.shape_146},{t:this.shape_19,p:{y:189.9}},{t:this.shape_18,p:{y:190.1}},{t:this.shape_145},{t:this.shape_16,p:{y:190.1}},{t:this.shape_144},{t:this.shape_14,p:{y:236.4}},{t:this.shape_13,p:{y:236.7}},{t:this.shape_12,p:{y:233.2}},{t:this.shape_11,p:{y:236.4}},{t:this.shape_143},{t:this.shape_9,p:{y:233.2}},{t:this.shape_8,p:{y:232.3}},{t:this.shape_7,p:{y:236.4,x:678.4}},{t:this.shape_142},{t:this.shape_5,p:{y:236.4}},{t:this.shape_141},{t:this.shape_3,p:{y:236.4,x:756.5}},{t:this.shape_2,p:{y:236.4,x:772.9}},{t:this.shape_1,p:{y:233.2}},{t:this.shape,p:{y:242.8}},{t:this.shape_193},{t:this.shape_192,p:{x:551.2,y:285.7}},{t:this.shape_191},{t:this.shape_190},{t:this.shape_130,p:{x:610.2,y:285.7}},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_65,p:{x:757.9,y:282}},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181,p:{x:809.3,y:285.4}},{t:this.shape_180},{t:this.instance,p:{y:259.4,x:410.2}},{t:this.instance_1,p:{x:410.6,y:341.4}},{t:this.shape_179},{t:this.shape_178,p:{x:550.2,y:345.2}},{t:this.shape_177,p:{x:569.2,y:345.5}},{t:this.shape_176},{t:this.shape_175},{t:this.shape_138,p:{x:628.2,y:345.5}},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_118,p:{x:757.7,y:341.5}},{t:this.shape_169},{t:this.shape_168,p:{x:796.5,y:341.8}},{t:this.shape_167},{t:this.shape_132,p:{x:845.3,y:341.5}},{t:this.shape_166},{t:this.shape_131,p:{x:873.5,y:345.2}},{t:this.shape_165},{t:this.shape_164,p:{x:901.5,y:341.8}},{t:this.shape_127,p:{x:915.7,y:351}},{t:this.shape_163},{t:this.shape_72,p:{x:550.2,y:403.8}},{t:this.shape_135,p:{x:569.2,y:404.1}},{t:this.shape_162},{t:this.shape_161,p:{x:609.2,y:403.8}},{t:this.shape_74,p:{x:628.2,y:404.1}},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_120,p:{x:709.3,y:400.1}},{t:this.shape_119,p:{x:727.5,y:403.8}},{t:this.shape_157},{t:this.shape_156},{t:this.shape_71,p:{x:788.2,y:404.1}},{t:this.shape_117,p:{x:806.5,y:403.8}},{t:this.shape_115,p:{x:833.4,y:400.1}},{t:this.shape_67,p:{x:853.3,y:400.1}},{t:this.shape_155},{t:this.shape_66,p:{x:881.5,y:403.8}},{t:this.shape_154,p:{x:894.4,y:400.1}},{t:this.shape_153},{t:this.shape_61,p:{x:923.7,y:409.6}},{t:this.instance_2,p:{x:414,y:427.8}}]},1).to({state:[{t:this.shape_60,p:{y:88.3}},{t:this.shape_59,p:{y:93.1}},{t:this.shape_58,p:{y:88}},{t:this.shape_57,p:{y:88}},{t:this.shape_152},{t:this.shape_55,p:{y:93.1}},{t:this.shape_151},{t:this.shape_53,p:{y:93.1}},{t:this.shape_150},{t:this.shape_51,p:{y:139.7}},{t:this.shape_50,p:{y:143.8}},{t:this.shape_49,p:{y:144.1}},{t:this.shape_149},{t:this.shape_47,p:{y:143.6}},{t:this.shape_46,p:{y:144.1}},{t:this.shape_45,p:{y:143.8}},{t:this.shape_44,p:{y:143.8}},{t:this.shape_43,p:{y:144.1}},{t:this.shape_42,p:{y:143.8}},{t:this.shape_41,p:{y:143.8}},{t:this.shape_40,p:{y:143.8}},{t:this.shape_39,p:{y:143.8}},{t:this.shape_38,p:{y:143.8}},{t:this.shape_148},{t:this.shape_36,p:{y:144.1}},{t:this.shape_35,p:{y:139.7}},{t:this.shape_34,p:{y:139.7}},{t:this.shape_33,p:{y:148.1}},{t:this.shape_32,p:{y:194.1}},{t:this.shape_31,p:{y:190.4}},{t:this.shape_30,p:{y:185.7}},{t:this.shape_29,p:{y:186.2}},{t:this.shape_28,p:{y:190.1}},{t:this.shape_27,p:{y:186.2}},{t:this.shape_147},{t:this.shape_25,p:{y:186}},{t:this.shape_24,p:{y:190.1}},{t:this.shape_23,p:{y:190.1}},{t:this.shape_22,p:{y:186}},{t:this.shape_21,p:{y:189.9}},{t:this.shape_146},{t:this.shape_19,p:{y:189.9}},{t:this.shape_18,p:{y:190.1}},{t:this.shape_145},{t:this.shape_16,p:{y:190.1}},{t:this.shape_144},{t:this.shape_14,p:{y:236.4}},{t:this.shape_13,p:{y:236.7}},{t:this.shape_12,p:{y:233.2}},{t:this.shape_11,p:{y:236.4}},{t:this.shape_143},{t:this.shape_9,p:{y:233.2}},{t:this.shape_8,p:{y:232.3}},{t:this.shape_7,p:{y:236.4,x:678.4}},{t:this.shape_142},{t:this.shape_5,p:{y:236.4}},{t:this.shape_141},{t:this.shape_3,p:{y:236.4,x:756.5}},{t:this.shape_2,p:{y:236.4,x:772.9}},{t:this.shape_1,p:{y:233.2}},{t:this.shape,p:{y:242.8}},{t:this.shape_203},{t:this.shape_161,p:{x:555.2,y:291.7}},{t:this.shape_177,p:{x:574.2,y:291.9}},{t:this.shape_202},{t:this.shape_192,p:{x:614.2,y:291.7}},{t:this.shape_138,p:{x:633.2,y:291.9}},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_132,p:{x:714.3,y:288}},{t:this.shape_131,p:{x:732.5,y:291.7}},{t:this.shape_65,p:{x:761.9,y:288}},{t:this.shape_178,p:{x:784.2,y:291.7}},{t:this.shape_198},{t:this.shape_123,p:{x:813.3,y:291.4}},{t:this.shape_127,p:{x:827.7,y:297.4}},{t:this.instance,p:{y:279.4,x:415.2}},{t:this.shape_76,p:{x:536.2,y:353.4}},{t:this.shape_75,p:{x:554.2,y:357.1}},{t:this.shape_135,p:{x:573.2,y:357.3}},{t:this.shape_197},{t:this.shape_72,p:{x:613.2,y:357.1}},{t:this.shape_74,p:{x:632.2,y:357.3}},{t:this.shape_70,p:{x:652.3,y:356.8}},{t:this.shape_69,p:{x:672.5,y:353.6}},{t:this.shape_196},{t:this.shape_120,p:{x:713.3,y:353.4}},{t:this.shape_119,p:{x:731.5,y:357.1}},{t:this.shape_195},{t:this.shape_154,p:{x:777.4,y:353.4}},{t:this.shape_71,p:{x:792.2,y:357.3}},{t:this.shape_117,p:{x:810.5,y:357.1}},{t:this.shape_115,p:{x:837.4,y:353.4}},{t:this.shape_67,p:{x:857.3,y:353.4}},{t:this.shape_114,p:{x:872.4,y:353.1}},{t:this.shape_66,p:{x:885.5,y:357.1}},{t:this.shape_194,p:{x:898.4,y:353.4}},{t:this.shape_168,p:{x:913.5,y:353.6}},{t:this.shape_61,p:{x:927.7,y:362.8}},{t:this.instance_2,p:{x:420.3,y:366.6}}]},1).to({state:[{t:this.shape_60,p:{y:102.7}},{t:this.shape_59,p:{y:107.5}},{t:this.shape_58,p:{y:102.4}},{t:this.shape_57,p:{y:102.4}},{t:this.shape_228},{t:this.shape_55,p:{y:107.5}},{t:this.shape_54,p:{y:107.2}},{t:this.shape_53,p:{y:107.5}},{t:this.shape_52,p:{y:102.3}},{t:this.shape_227},{t:this.shape_50,p:{y:173.3}},{t:this.shape_102,p:{y:173.6}},{t:this.shape_226},{t:this.shape_47,p:{y:173.2}},{t:this.shape_100,p:{y:173.6}},{t:this.shape_45,p:{y:173.3}},{t:this.shape_44,p:{y:173.3}},{t:this.shape_99,p:{y:173.6}},{t:this.shape_42,p:{y:173.3}},{t:this.shape_41,p:{y:173.3}},{t:this.shape_40,p:{y:173.3}},{t:this.shape_39,p:{y:173.3}},{t:this.shape_38,p:{y:173.3}},{t:this.shape_225},{t:this.shape_97,p:{y:173.6}},{t:this.shape_224},{t:this.shape_223},{t:this.shape_94,p:{y:177.7}},{t:this.shape_32,p:{y:223.7}},{t:this.shape_93,p:{y:219.9}},{t:this.shape_92,p:{y:215.2}},{t:this.shape_29,p:{y:215.8}},{t:this.shape_28,p:{y:219.6}},{t:this.shape_27,p:{y:215.8}},{t:this.shape_91,p:{y:216.4}},{t:this.shape_222},{t:this.shape_24,p:{y:219.6}},{t:this.shape_23,p:{y:219.6}},{t:this.shape_221},{t:this.shape_21,p:{y:219.5}},{t:this.shape_88,p:{y:219.4}},{t:this.shape_19,p:{y:219.5}},{t:this.shape_18,p:{y:219.6}},{t:this.shape_87,p:{y:216.4}},{t:this.shape_16,p:{y:219.6}},{t:this.shape_86,p:{y:219.4}},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_81,p:{x:663.2,y:261.8}},{t:this.shape_7,p:{y:265.9,x:683.4}},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_3,p:{y:265.9,x:761.5}},{t:this.shape_2,p:{y:265.9,x:777.9}},{t:this.shape_211},{t:this.shape_210},{t:this.shape_64,p:{x:558.2,y:333.4}},{t:this.shape_135,p:{x:577.2,y:333.6}},{t:this.shape_209},{t:this.shape_75,p:{x:617.2,y:333.4}},{t:this.shape_74,p:{x:636.2,y:333.6}},{t:this.shape_181,p:{x:656.3,y:333.1}},{t:this.shape_164,p:{x:676.5,y:329.9}},{t:this.shape_208},{t:this.shape_120,p:{x:717.3,y:329.7}},{t:this.shape_119,p:{x:735.5,y:333.4}},{t:this.shape_207},{t:this.shape_194,p:{x:781.4,y:329.7}},{t:this.shape_71,p:{x:796.2,y:333.6}},{t:this.shape_117,p:{x:814.5,y:333.4}},{t:this.shape_115,p:{x:841.4,y:329.7}},{t:this.shape_67,p:{x:861.3,y:329.7}},{t:this.shape_206},{t:this.shape_66,p:{x:889.5,y:333.4}},{t:this.shape_205},{t:this.shape_204},{t:this.shape_61,p:{x:931.7,y:339.1}},{t:this.instance_2,p:{x:420.3,y:328.6}}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_tempArrow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// tempArrow
	this.instance = new lib.ButtonUp();
	this.instance.parent = this;
	this.instance.setTransform(602.3,81.8);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance_1 = new lib.ButtonRight();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1178.8,371.7);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.instance_2 = new lib.ButtonLeft();
	this.instance_2.parent = this;
	this.instance_2.setTransform(103.7,353.1);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.instance_3 = new lib.ButtonDown();
	this.instance_3.parent = this;
	this.instance_3.setTransform(656.2,630.3);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_tempArrow, null, null);


(lib.Scene_1_Shield = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_3149 = function() {
		playSound("Redwav");
	}
	this.frame_3409 = function() {
		playSound("BlueTime");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(3149).call(this.frame_3149).wait(260).call(this.frame_3409).wait(2));

	// Shield
	this.instance = new lib.RedShield_1();
	this.instance.parent = this;
	this.instance.setTransform(652.8,360.7);

	this.instance_1 = new lib.BlueShield_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(710,350);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance,p:{x:652.8,y:360.7}}]},3116).to({state:[{t:this.instance,p:{x:650.8,y:380.7}}]},33).to({state:[]},1).to({state:[{t:this.instance_1}]},200).to({state:[{t:this.instance_1}]},59).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Right_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Right
	this.btnRight8 = new lib.ButtonRight();
	this.btnRight8.name = "btnRight8";
	this.btnRight8.parent = this;
	this.btnRight8.setTransform(1184.7,373.1);
	this.btnRight8._off = true;
	new cjs.ButtonHelper(this.btnRight8, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btnRight8).wait(2230).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Right_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Right
	this.btnRight7 = new lib.ButtonRight();
	this.btnRight7.name = "btnRight7";
	this.btnRight7.parent = this;
	this.btnRight7.setTransform(1189.3,376.3);
	this.btnRight7._off = true;
	new cjs.ButtonHelper(this.btnRight7, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btnRight7).wait(1840).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Right_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Right
	this.btnRight6 = new lib.ButtonRight();
	this.btnRight6.name = "btnRight6";
	this.btnRight6.parent = this;
	this.btnRight6.setTransform(1192.6,405.8);
	this.btnRight6._off = true;
	new cjs.ButtonHelper(this.btnRight6, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btnRight6).wait(1150).to({_off:false},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Right_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Right
	this.btnRight5 = new lib.ButtonRight();
	this.btnRight5.name = "btnRight5";
	this.btnRight5.parent = this;
	this.btnRight5.setTransform(1183.5,385.9);
	this.btnRight5._off = true;
	new cjs.ButtonHelper(this.btnRight5, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btnRight5).wait(960).to({_off:false},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Right = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Right
	this.btnRight2 = new lib.ButtonRight();
	this.btnRight2.name = "btnRight2";
	this.btnRight2.parent = this;
	this.btnRight2.setTransform(1148.9,378.7);
	this.btnRight2._off = true;
	new cjs.ButtonHelper(this.btnRight2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btnRight2).wait(491).to({_off:false},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Player2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Player2
	this.instance = new lib.CharacterWalkDown();
	this.instance.parent = this;
	this.instance.setTransform(643.6,-75);
	this.instance._off = true;

	this.instance_1 = new lib.CharaStand();
	this.instance_1.parent = this;
	this.instance_1.setTransform(643.6,578.6);
	this.instance_1._off = true;

	this.instance_2 = new lib.CharacterWalkUp();
	this.instance_2.parent = this;
	this.instance_2.setTransform(651.3,795);
	this.instance_2._off = true;

	this.instance_3 = new lib.CharacterWalkRight();
	this.instance_3.parent = this;
	this.instance_3.setTransform(640,360);
	this.instance_3._off = true;

	this.instance_4 = new lib.CharacterWalkLeft();
	this.instance_4.parent = this;
	this.instance_4.setTransform(709.1,320.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3050).to({_off:false},0).wait(2).to({y:-63.7},0).wait(1).to({y:-52.5},0).wait(1).to({y:-41.2},0).wait(1).to({y:-29.9},0).wait(1).to({y:-18.7},0).wait(1).to({y:-7.4},0).wait(1).to({y:3.8},0).wait(1).to({y:15.1},0).wait(1).to({y:26.4},0).wait(1).to({y:37.6},0).wait(1).to({y:48.9},0).wait(1).to({y:60.2},0).wait(1).to({y:71.4},0).wait(1).to({y:82.7},0).wait(1).to({y:93.9},0).wait(1).to({y:105.2},0).wait(1).to({y:116.5},0).wait(1).to({y:127.7},0).wait(1).to({y:139},0).wait(1).to({y:150.3},0).wait(1).to({y:161.5},0).wait(1).to({y:172.8},0).wait(1).to({y:184},0).wait(1).to({y:195.3},0).wait(1).to({y:206.6},0).wait(1).to({y:217.8},0).wait(1).to({y:229.1},0).wait(1).to({y:240.4},0).wait(1).to({y:251.6},0).wait(1).to({y:262.9},0).wait(1).to({y:274.1},0).wait(1).to({y:285.4},0).wait(1).to({y:296.7},0).wait(1).to({y:307.9},0).wait(1).to({y:319.2},0).wait(1).to({y:330.5},0).wait(1).to({y:341.7},0).wait(1).to({y:353},0).wait(1).to({y:364.3},0).wait(1).to({y:375.5},0).wait(1).to({y:386.8},0).wait(1).to({y:398},0).wait(1).to({y:409.3},0).wait(1).to({y:420.6},0).wait(1).to({y:431.8},0).wait(1).to({y:443.1},0).wait(1).to({y:454.4},0).wait(1).to({y:465.6},0).wait(1).to({y:476.9},0).wait(1).to({y:488.1},0).wait(1).to({y:499.4},0).wait(1).to({y:510.7},0).wait(1).to({y:521.9},0).wait(1).to({y:533.2},0).wait(1).to({y:544.5},0).wait(1).to({y:555.7},0).wait(1).to({y:567},0).wait(1).to({y:578.3},0).to({_off:true},1).wait(41).to({_off:false,x:651.4,y:380.2},0).wait(1).to({y:391.1},0).wait(1).to({y:402},0).wait(1).to({y:413},0).wait(1).to({y:423.9},0).wait(1).to({y:434.9},0).wait(1).to({y:445.8},0).wait(1).to({y:456.8},0).wait(1).to({y:467.7},0).wait(1).to({y:478.7},0).wait(1).to({y:489.6},0).wait(1).to({y:500.6},0).wait(1).to({y:511.5},0).wait(1).to({y:522.5},0).wait(1).to({y:533.4},0).wait(1).to({y:544.4},0).wait(1).to({y:555.3},0).wait(1).to({y:566.3},0).wait(1).to({y:577.2},0).wait(1).to({y:588.2},0).wait(1).to({y:599.1},0).wait(1).to({y:610},0).wait(1).to({y:621},0).wait(1).to({y:631.9},0).wait(1).to({y:642.9},0).wait(1).to({y:653.8},0).wait(1).to({y:664.8},0).wait(1).to({y:675.7},0).wait(1).to({y:686.7},0).wait(1).to({y:697.6},0).wait(1).to({y:708.6},0).wait(1).to({y:719.5},0).wait(1).to({y:730.5},0).wait(1).to({y:741.4},0).wait(1).to({y:752.4},0).wait(1).to({y:763.3},0).wait(1).to({y:774.3},0).wait(1).to({y:785.2},0).wait(1).to({y:796.2},0).wait(1).to({x:635.2,y:-73},0).wait(2).to({y:-64.3},0).wait(1).to({y:-55.7},0).wait(1).to({y:-47},0).wait(1).to({y:-38.3},0).wait(1).to({y:-29.7},0).wait(1).to({y:-21},0).wait(1).to({y:-12.3},0).wait(1).to({y:-3.7},0).wait(1).to({y:5},0).wait(1).to({y:13.7},0).wait(1).to({y:22.3},0).wait(1).to({y:31},0).wait(1).to({y:39.7},0).wait(1).to({y:48.3},0).wait(1).to({y:57},0).wait(1).to({y:65.7},0).wait(1).to({y:74.3},0).wait(1).to({y:83},0).wait(1).to({y:91.7},0).wait(1).to({y:100.3},0).wait(1).to({y:109},0).wait(1).to({y:117.7},0).wait(1).to({y:126.3},0).wait(1).to({y:135},0).wait(1).to({y:143.7},0).wait(1).to({y:152.3},0).wait(1).to({y:161},0).wait(1).to({y:169.7},0).wait(1).to({y:178.3},0).wait(1).to({y:187},0).wait(1).to({y:195.7},0).wait(1).to({y:204.3},0).wait(1).to({y:213},0).wait(1).to({y:221.7},0).wait(1).to({y:230.3},0).wait(1).to({y:239},0).wait(1).to({y:247.7},0).wait(1).to({y:256.3},0).wait(1).to({y:265},0).wait(1).to({y:273.7},0).wait(1).to({y:282.3},0).wait(1).to({y:291},0).wait(1).to({y:299.7},0).wait(1).to({y:308.3},0).wait(1).to({y:317},0).wait(1).to({y:325.7},0).wait(1).to({y:334.3},0).wait(1).to({y:343},0).to({_off:true},1).wait(360));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3110).to({_off:false},0).wait(3).to({y:619.6},0).wait(2).to({y:618.6},0).to({_off:true},1).wait(34).to({_off:false,x:651.4,y:380.5},0).to({_off:true},1).wait(259).to({_off:false,x:708.8,y:319.9},0).to({_off:true},1).wait(189));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(3116).to({_off:false},0).wait(2).to({y:782.1},0).wait(1).to({y:769.1},0).wait(1).to({y:756.2},0).wait(1).to({y:743.3},0).wait(1).to({y:730.3},0).wait(1).to({y:717.4},0).wait(1).to({y:704.4},0).wait(1).to({y:691.5},0).wait(1).to({y:678.6},0).wait(1).to({y:665.6},0).wait(1).to({y:652.7},0).wait(1).to({y:639.8},0).wait(1).to({y:626.8},0).wait(1).to({y:613.9},0).wait(1).to({y:600.9},0).wait(1).to({y:588},0).wait(1).to({y:575.1},0).wait(1).to({y:562.1},0).wait(1).to({y:549.2},0).wait(1).to({y:536.3},0).wait(1).to({y:523.3},0).wait(1).to({y:510.4},0).wait(1).to({y:497.4},0).wait(1).to({y:484.5},0).wait(1).to({y:471.6},0).wait(1).to({y:458.6},0).wait(1).to({y:445.7},0).wait(1).to({y:432.8},0).wait(1).to({y:419.8},0).wait(1).to({y:406.9},0).wait(1).to({y:394},0).wait(1).to({y:381},0).to({_off:true},1).wait(90).to({_off:false,x:661,y:793.9},0).wait(2).to({y:784.4},0).wait(1).to({y:774.8},0).wait(1).to({y:765.3},0).wait(1).to({y:755.7},0).wait(1).to({y:746.2},0).wait(1).to({y:736.7},0).wait(1).to({y:727.1},0).wait(1).to({y:717.6},0).wait(1).to({y:708},0).wait(1).to({y:698.5},0).wait(1).to({y:688.9},0).wait(1).to({y:679.4},0).wait(1).to({y:669.9},0).wait(1).to({y:660.3},0).wait(1).to({y:650.8},0).wait(1).to({y:641.2},0).wait(1).to({y:631.7},0).wait(1).to({y:622.2},0).wait(1).to({y:612.6},0).wait(1).to({y:603.1},0).wait(1).to({y:593.5},0).wait(1).to({y:584},0).wait(1).to({y:574.4},0).wait(1).to({y:564.9},0).wait(1).to({y:555.4},0).wait(1).to({y:545.8},0).wait(1).to({y:536.3},0).wait(1).to({y:526.7},0).wait(1).to({y:517.2},0).wait(1).to({y:507.7},0).wait(1).to({y:498.1},0).wait(1).to({y:488.6},0).wait(1).to({y:479},0).wait(1).to({y:469.5},0).wait(1).to({y:459.9},0).wait(1).to({y:450.4},0).wait(1).to({y:440.9},0).wait(1).to({y:431.3},0).wait(1).to({y:421.8},0).wait(1).to({y:412.2},0).wait(1).to({y:402.7},0).wait(1).to({y:393.2},0).wait(1).to({y:383.6},0).wait(1).to({y:374.1},0).wait(1).to({y:364.5},0).wait(1).to({y:355},0).wait(1).to({y:345.4},0).wait(1).to({y:335.9},0).to({_off:true},1).wait(310));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3290).to({_off:false},0).wait(2).to({x:651.9},0).wait(1).to({x:663.8},0).wait(1).to({x:675.7},0).wait(1).to({x:687.6},0).wait(1).to({x:699.5},0).wait(1).to({x:711.4},0).wait(1).to({x:723.3},0).wait(1).to({x:735.2},0).wait(1).to({x:747.1},0).wait(1).to({x:759},0).wait(1).to({x:770.9},0).wait(1).to({x:782.8},0).wait(1).to({x:794.7},0).wait(1).to({x:806.6},0).wait(1).to({x:818.4},0).wait(1).to({x:830.3},0).wait(1).to({x:842.2},0).wait(1).to({x:854.1},0).wait(1).to({x:866},0).wait(1).to({x:877.9},0).wait(1).to({x:889.8},0).wait(1).to({x:901.7},0).wait(1).to({x:913.6},0).wait(1).to({x:925.5},0).wait(1).to({x:937.4},0).wait(1).to({x:949.3},0).wait(1).to({x:961.2},0).wait(1).to({x:973.1},0).wait(1).to({x:985},0).wait(1).to({x:996.9},0).wait(1).to({x:1008.8},0).wait(1).to({x:1020.7},0).wait(1).to({x:1032.6},0).wait(1).to({x:1044.5},0).wait(1).to({x:1056.4},0).wait(1).to({x:1068.3},0).wait(1).to({x:1080.2},0).wait(1).to({x:1092.1},0).wait(1).to({x:1104},0).wait(1).to({x:1115.9},0).wait(1).to({x:1127.8},0).wait(1).to({x:1139.7},0).wait(1).to({x:1151.6},0).wait(1).to({x:1163.4},0).wait(1).to({x:1175.3},0).wait(1).to({x:1187.2},0).wait(1).to({x:1199.1},0).wait(1).to({x:1211},0).wait(1).to({x:1222.9},0).wait(1).to({x:1234.8},0).wait(1).to({x:1246.7},0).wait(1).to({x:1258.6},0).wait(1).to({x:1270.5},0).wait(1).to({x:1282.4},0).wait(1).to({x:1294.3},0).wait(1).to({x:1306.2},0).wait(1).to({x:1318.1},0).wait(1).to({x:1330},0).wait(1).to({x:-49.6,y:320.3},0).wait(2).to({x:-36.5},0).wait(1).to({x:-23.4},0).wait(1).to({x:-10.3},0).wait(1).to({x:2.8},0).wait(1).to({x:15.9},0).wait(1).to({x:29},0).wait(1).to({x:42.1},0).wait(1).to({x:55.2},0).wait(1).to({x:68.3},0).wait(1).to({x:81.4,y:320.2},0).wait(1).to({x:94.5},0).wait(1).to({x:107.6},0).wait(1).to({x:120.7},0).wait(1).to({x:133.8},0).wait(1).to({x:146.8},0).wait(1).to({x:159.9},0).wait(1).to({x:173},0).wait(1).to({x:186.1},0).wait(1).to({x:199.2},0).wait(1).to({x:212.3},0).wait(1).to({x:225.4},0).wait(1).to({x:238.5},0).wait(1).to({x:251.6},0).wait(1).to({x:264.7},0).wait(1).to({x:277.8},0).wait(1).to({x:290.9},0).wait(1).to({x:304},0).wait(1).to({x:317.1},0).wait(1).to({x:330.2},0).wait(1).to({x:343.3,y:320.1},0).wait(1).to({x:356.4},0).wait(1).to({x:369.5},0).wait(1).to({x:382.6},0).wait(1).to({x:395.7},0).wait(1).to({x:408.8},0).wait(1).to({x:421.9},0).wait(1).to({x:435},0).wait(1).to({x:448.1},0).wait(1).to({x:461.2},0).wait(1).to({x:474.3},0).wait(1).to({x:487.4},0).wait(1).to({x:500.5},0).wait(1).to({x:513.6},0).wait(1).to({x:526.6},0).wait(1).to({x:539.7},0).wait(1).to({x:552.8},0).wait(1).to({x:565.9},0).wait(1).to({x:579},0).wait(1).to({x:592.1,y:320},0).wait(1).to({x:605.2},0).wait(1).to({x:618.3},0).wait(1).to({x:631.4},0).wait(1).to({x:644.5},0).wait(1).to({x:657.6},0).wait(1).to({x:670.7},0).wait(1).to({x:683.8},0).wait(1).to({x:696.9},0).wait(1).to({x:710},0).to({_off:true},1).wait(130).to({_off:false,x:-48,y:325.2},0).wait(2).to({x:-34.9},0).wait(1).to({x:-21.9},0).wait(1).to({x:-8.8},0).wait(1).to({x:4.3},0).wait(1).to({x:17.3},0).wait(1).to({x:30.4},0).wait(1).to({x:43.5},0).wait(1).to({x:56.6},0).wait(1).to({x:69.6},0).wait(1).to({x:82.7},0).wait(1).to({x:95.8},0).wait(1).to({x:108.8},0).wait(1).to({x:121.9},0).wait(1).to({x:135},0).wait(1).to({x:148},0).wait(1).to({x:161.1},0).wait(1).to({x:174.2},0).wait(1).to({x:187.2},0).wait(1).to({x:200.3},0).wait(1).to({x:213.4},0).wait(1).to({x:226.4},0).wait(1).to({x:239.5},0).wait(1).to({x:252.6},0).wait(1).to({x:265.7},0).wait(1).to({x:278.7},0).wait(1).to({x:291.8},0).wait(1).to({x:304.9},0).wait(1).to({x:317.9},0).wait(1).to({x:331},0).wait(1).to({x:344.1},0).wait(1).to({x:357.1},0).wait(1).to({x:370.2},0).wait(1).to({x:383.3},0).wait(1).to({x:396.3},0).wait(1).to({x:409.4},0).wait(1).to({x:422.5},0).wait(1).to({x:435.6},0).wait(1).to({x:448.6},0).wait(1).to({x:461.7},0).wait(1).to({x:474.8},0).wait(1).to({x:487.8},0).wait(1).to({x:500.9},0).wait(1).to({x:514},0).wait(1).to({x:527},0).wait(1).to({x:540.1},0).wait(1).to({x:553.2},0).wait(1).to({x:566.2},0).wait(1).to({x:579.3},0).wait(1).to({x:592.4},0).wait(1).to({x:605.4},0).wait(1).to({x:618.5},0).wait(1).to({x:631.6},0).wait(1).to({x:644.7},0).wait(1).to({x:657.7},0).wait(1).to({x:670.8},0).wait(1).to({x:683.9},0).wait(1).to({x:696.9},0).wait(1).to({x:710},0).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3411).to({_off:false},0).wait(1).to({x:697.9},0).wait(1).to({x:686.8},0).wait(1).to({x:675.6},0).wait(1).to({x:664.5},0).wait(1).to({x:653.3},0).wait(1).to({x:642.2},0).wait(1).to({x:631},0).wait(1).to({x:619.9},0).wait(1).to({x:608.7},0).wait(1).to({x:597.6},0).wait(1).to({x:586.4},0).wait(1).to({x:575.3},0).wait(1).to({x:564.1},0).wait(1).to({x:553},0).wait(1).to({x:541.9},0).wait(1).to({x:530.7},0).wait(1).to({x:519.6},0).wait(1).to({x:508.4},0).wait(1).to({x:497.3},0).wait(1).to({x:486.1},0).wait(1).to({x:475},0).wait(1).to({x:463.8},0).wait(1).to({x:452.7},0).wait(1).to({x:441.5},0).wait(1).to({x:430.4},0).wait(1).to({x:419.2},0).wait(1).to({x:408.1},0).wait(1).to({x:396.9},0).wait(1).to({x:385.8},0).wait(1).to({x:374.6},0).wait(1).to({x:363.5},0).wait(1).to({x:352.3},0).wait(1).to({x:341.2},0).wait(1).to({x:330.1},0).wait(1).to({x:318.9},0).wait(1).to({x:307.8},0).wait(1).to({x:296.6},0).wait(1).to({x:285.5},0).wait(1).to({x:274.3},0).wait(1).to({x:263.2},0).wait(1).to({x:252},0).wait(1).to({x:240.9},0).wait(1).to({x:229.7},0).wait(1).to({x:218.6},0).wait(1).to({x:207.4},0).wait(1).to({x:196.3},0).wait(1).to({x:185.1},0).wait(1).to({x:174},0).wait(1).to({x:162.8},0).wait(1).to({x:151.7},0).wait(1).to({x:140.6},0).wait(1).to({x:129.4},0).wait(1).to({x:118.3},0).wait(1).to({x:107.1},0).wait(1).to({x:96},0).wait(1).to({x:84.8},0).wait(1).to({x:73.7},0).wait(1).to({x:62.5},0).wait(1).to({x:51.4},0).wait(1).to({x:40.2},0).wait(1).to({x:29.1},0).wait(1).to({x:17.9},0).wait(1).to({x:6.8},0).wait(1).to({x:-4.4},0).wait(1).to({x:-15.5},0).wait(1).to({x:-26.6},0).wait(1).to({x:-37.8},0).wait(1).to({x:-48.9},0).wait(1).to({x:1330.4,y:343.1},0).wait(2).to({x:1318.6},0).wait(1).to({x:1306.8},0).wait(1).to({x:1295.1},0).wait(1).to({x:1283.3},0).wait(1).to({x:1271.6},0).wait(1).to({x:1259.8},0).wait(1).to({x:1248},0).wait(1).to({x:1236.3},0).wait(1).to({x:1224.5},0).wait(1).to({x:1212.8},0).wait(1).to({x:1201},0).wait(1).to({x:1189.2},0).wait(1).to({x:1177.5},0).wait(1).to({x:1165.7},0).wait(1).to({x:1154},0).wait(1).to({x:1142.2},0).wait(1).to({x:1130.5},0).wait(1).to({x:1118.7},0).wait(1).to({x:1106.9},0).wait(1).to({x:1095.2},0).wait(1).to({x:1083.4},0).wait(1).to({x:1071.7},0).wait(1).to({x:1059.9},0).wait(1).to({x:1048.1},0).wait(1).to({x:1036.4},0).wait(1).to({x:1024.6},0).wait(1).to({x:1012.9},0).wait(1).to({x:1001.1},0).wait(1).to({x:989.4},0).wait(1).to({x:977.6},0).wait(1).to({x:965.8},0).wait(1).to({x:954.1},0).wait(1).to({x:942.3},0).wait(1).to({x:930.6},0).wait(1).to({x:918.8},0).wait(1).to({x:907},0).wait(1).to({x:895.3},0).wait(1).to({x:883.5},0).wait(1).to({x:871.8},0).wait(1).to({x:860},0).wait(1).to({x:848.2},0).wait(1).to({x:836.5},0).wait(1).to({x:824.7},0).wait(1).to({x:813},0).wait(1).to({x:801.2},0).wait(1).to({x:789.5},0).wait(1).to({x:777.7},0).wait(1).to({x:765.9},0).wait(1).to({x:754.2},0).wait(1).to({x:742.4},0).wait(1).to({x:730.7},0).wait(1).to({x:718.9},0).wait(1).to({x:707.1},0).wait(1).to({x:695.4},0).wait(1).to({x:683.6},0).wait(1).to({x:671.9},0).wait(1).to({x:660.1},0).wait(1).to({x:648.4},0).to({_off:true},1).wait(60));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Player = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Player
	this.instance = new lib.CharacterWalkRight();
	this.instance.parent = this;
	this.instance.setTransform(692.1,83.8);

	this.CharacterWalkLeftMC = new lib.CharacterWalkLeft();
	this.CharacterWalkLeftMC.name = "CharacterWalkLeftMC";
	this.CharacterWalkLeftMC.parent = this;
	this.CharacterWalkLeftMC.setTransform(568,596);

	this.instance_1 = new lib.CharacterWalkUp();
	this.instance_1.parent = this;
	this.instance_1.setTransform(358.6,338.3);

	this.CharacterWalkDownMC = new lib.CharacterWalkDown();
	this.CharacterWalkDownMC.name = "CharacterWalkDownMC";
	this.CharacterWalkDownMC.parent = this;
	this.CharacterWalkDownMC.setTransform(953,349);

	this.instance_2 = new lib.CharaStand();
	this.instance_2.parent = this;
	this.instance_2.setTransform(661.9,432.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.CharacterWalkDownMC},{t:this.instance_1},{t:this.CharacterWalkLeftMC},{t:this.instance}]}).to({state:[]},1).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},80).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.CharacterWalkLeftMC}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[{t:this.CharacterWalkDownMC}]},1).to({state:[]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(360).to({_off:false,x:664,y:404.8},0).wait(1).to({x:675.5},0).wait(1).to({x:687},0).wait(1).to({x:698.5},0).wait(1).to({x:710},0).wait(1).to({x:721.5},0).wait(1).to({x:733},0).wait(1).to({x:744.5},0).wait(1).to({x:756},0).wait(1).to({x:767.5},0).wait(1).to({x:779},0).wait(1).to({x:790.5},0).wait(1).to({x:802},0).wait(1).to({x:813.5},0).wait(1).to({x:825},0).wait(1).to({x:836.5},0).wait(1).to({x:848},0).wait(1).to({x:859.5},0).wait(1).to({x:871},0).wait(1).to({x:882.5},0).wait(1).to({x:894},0).wait(1).to({x:905.5},0).wait(1).to({x:917},0).wait(1).to({x:928.5},0).wait(1).to({x:940},0).wait(1).to({x:951.4},0).wait(1).to({x:963},0).wait(1).to({x:974.5},0).wait(1).to({x:986},0).wait(1).to({x:997.5},0).wait(1).to({x:1008.9},0).wait(1).to({x:1020.4},0).wait(1).to({x:1031.9},0).wait(1).to({x:1043.4},0).wait(1).to({x:1054.9},0).wait(1).to({x:1066.4},0).wait(1).to({x:1077.9},0).wait(1).to({x:1089.4},0).wait(1).to({x:1100.9},0).wait(1).to({x:1112.4},0).wait(1).to({x:1123.9},0).wait(1).to({x:1135.4},0).wait(1).to({x:1146.9},0).wait(1).to({x:1158.4},0).wait(1).to({x:1169.9},0).wait(1).to({x:1181.4},0).wait(1).to({x:1192.9},0).wait(1).to({x:1204.4},0).wait(1).to({x:1215.9},0).wait(1).to({x:1227.4},0).wait(1).to({x:1238.9},0).wait(1).to({x:1250.4},0).wait(1).to({x:1261.9},0).wait(1).to({x:1273.4},0).wait(1).to({x:1284.9},0).wait(1).to({x:1296.4},0).wait(1).to({x:1307.9},0).wait(1).to({x:1319.4},0).wait(1).to({x:1330.9},0).wait(1).to({x:-49.7,y:350.9},0).wait(2).to({x:-39.9},0).wait(1).to({x:-30.1},0).wait(1).to({x:-20.3},0).wait(1).to({x:-10.5},0).wait(1).to({x:-0.6},0).wait(1).to({x:9.2},0).wait(1).to({x:19},0).wait(1).to({x:28.8},0).wait(1).to({x:38.6},0).wait(1).to({x:48.4},0).wait(1).to({x:58.2},0).wait(1).to({x:68},0).wait(1).to({x:77.8},0).wait(1).to({x:87.7},0).wait(1).to({x:97.5},0).wait(1).to({x:107.3},0).wait(1).to({x:117.1},0).wait(1).to({x:126.9},0).wait(1).to({x:136.7},0).wait(1).to({x:146.5},0).wait(1).to({x:156.3},0).wait(1).to({x:166.1},0).wait(1).to({x:176},0).wait(1).to({x:185.8},0).wait(1).to({x:195.6},0).wait(1).to({x:205.4},0).wait(1).to({x:215.2},0).wait(1).to({x:225},0).wait(1).to({x:234.8},0).wait(1).to({x:244.6},0).wait(1).to({x:254.4},0).wait(1).to({x:264.3},0).wait(1).to({x:274.1},0).wait(1).to({x:283.9},0).wait(1).to({x:293.7},0).wait(1).to({x:303.5},0).wait(1).to({x:313.3},0).wait(1).to({x:323.1},0).wait(1).to({x:332.9},0).wait(1).to({x:342.8},0).wait(1).to({x:352.6},0).wait(1).to({x:362.4},0).wait(1).to({x:372.2},0).wait(1).to({x:382},0).wait(1).to({x:391.8},0).wait(1).to({x:401.6},0).wait(1).to({x:411.4},0).wait(1).to({x:421.2},0).wait(1).to({x:431.1},0).wait(1).to({x:440.9},0).wait(1).to({x:450.7},0).wait(1).to({x:460.5},0).wait(1).to({x:470.3},0).wait(1).to({x:480.1},0).wait(1).to({x:489.9},0).wait(1).to({x:499.7},0).wait(1).to({x:509.6},0).wait(1).to({x:519.4},0).wait(1).to({x:529.2},0).wait(1).to({x:539},0).wait(1).to({x:548.8},0).wait(1).to({x:558.6},0).wait(1).to({x:568.4},0).wait(1).to({x:578.2},0).wait(1).to({x:588},0).wait(1).to({x:597.9},0).wait(1).to({x:607.7},0).wait(1).to({x:617.5},0).wait(1).to({x:627.3},0).to({_off:true},1).wait(109).to({_off:false,x:648.5,y:400},0).wait(2).to({x:660.3},0).wait(1).to({x:672},0).wait(1).to({x:683.8},0).wait(1).to({x:695.6},0).wait(1).to({x:707.3},0).wait(1).to({x:719.1},0).wait(1).to({x:730.9},0).wait(1).to({x:742.6},0).wait(1).to({x:754.4},0).wait(1).to({x:766.2},0).wait(1).to({x:777.9},0).wait(1).to({x:789.7},0).wait(1).to({x:801.5},0).wait(1).to({x:813.2},0).wait(1).to({x:825},0).wait(1).to({x:836.8},0).wait(1).to({x:848.5},0).wait(1).to({x:860.3},0).wait(1).to({x:872.1},0).wait(1).to({x:883.8},0).wait(1).to({x:895.6},0).wait(1).to({x:907.4},0).wait(1).to({x:919.1},0).wait(1).to({x:930.9},0).wait(1).to({x:942.7},0).wait(1).to({x:954.4},0).wait(1).to({x:966.2},0).wait(1).to({x:978},0).wait(1).to({x:989.8},0).wait(1).to({x:1001.5},0).wait(1).to({x:1013.3},0).wait(1).to({x:1025.1},0).wait(1).to({x:1036.8},0).wait(1).to({x:1048.6},0).wait(1).to({x:1060.4},0).wait(1).to({x:1072.1},0).wait(1).to({x:1083.9},0).wait(1).to({x:1095.7},0).wait(1).to({x:1107.4},0).wait(1).to({x:1119.2},0).wait(1).to({x:1131},0).wait(1).to({x:1142.7},0).wait(1).to({x:1154.5},0).wait(1).to({x:1166.3},0).wait(1).to({x:1178},0).wait(1).to({x:1189.8},0).wait(1).to({x:1201.6},0).wait(1).to({x:1213.3},0).wait(1).to({x:1225.1},0).wait(1).to({x:1236.9},0).wait(1).to({x:1248.6},0).wait(1).to({x:1260.4},0).wait(1).to({x:1272.2},0).wait(1).to({x:1283.9},0).wait(1).to({x:1295.7},0).wait(1).to({x:1307.5},0).wait(1).to({x:1319.2},0).wait(1).to({x:1331},0).wait(1).to({x:-49.5,y:367.7},0).wait(2).to({x:-39.7},0).wait(1).to({x:-29.8},0).wait(1).to({x:-20},0).wait(1).to({x:-10.1},0).wait(1).to({x:-0.3},0).wait(1).to({x:9.6},0).wait(1).to({x:19.4},0).wait(1).to({x:29.3},0).wait(1).to({x:39.2},0).wait(1).to({x:49},0).wait(1).to({x:58.9},0).wait(1).to({x:68.7},0).wait(1).to({x:78.6},0).wait(1).to({x:88.5},0).wait(1).to({x:98.3},0).wait(1).to({x:108.2},0).wait(1).to({x:118},0).wait(1).to({x:127.9},0).wait(1).to({x:137.8},0).wait(1).to({x:147.6},0).wait(1).to({x:157.5},0).wait(1).to({x:167.3},0).wait(1).to({x:177.2},0).wait(1).to({x:187},0).wait(1).to({x:196.9},0).wait(1).to({x:206.8},0).wait(1).to({x:216.6},0).wait(1).to({x:226.5},0).wait(1).to({x:236.3},0).wait(1).to({x:246.2},0).wait(1).to({x:256},0).wait(1).to({x:265.9},0).wait(1).to({x:275.8},0).wait(1).to({x:285.6},0).wait(1).to({x:295.5},0).wait(1).to({x:305.3},0).wait(1).to({x:315.2},0).wait(1).to({x:325.1},0).wait(1).to({x:334.9},0).wait(1).to({x:344.8},0).wait(1).to({x:354.6},0).wait(1).to({x:364.5},0).wait(1).to({x:374.3},0).wait(1).to({x:384.2},0).wait(1).to({x:394.1},0).wait(1).to({x:403.9},0).wait(1).to({x:413.8},0).wait(1).to({x:423.6},0).wait(1).to({x:433.5},0).wait(1).to({x:443.4},0).wait(1).to({x:453.2},0).wait(1).to({x:463.1},0).wait(1).to({x:472.9},0).wait(1).to({x:482.8},0).wait(1).to({x:492.6},0).wait(1).to({x:502.5},0).wait(1).to({x:512.4},0).wait(1).to({x:522.2},0).wait(1).to({x:532.1},0).wait(1).to({x:541.9},0).wait(1).to({x:551.8},0).wait(1).to({x:561.6},0).wait(1).to({x:571.5},0).wait(1).to({x:581.4},0).wait(1).to({x:591.2},0).wait(1).to({x:601.1},0).wait(1).to({x:610.9},0).wait(1).to({x:620.8},0).to({_off:true},1).wait(520).to({_off:false,x:699.4,y:386.4},0).wait(2).to({x:712.6},0).wait(1).to({x:725.8},0).wait(1).to({x:739},0).wait(1).to({x:752.1},0).wait(1).to({x:765.3},0).wait(1).to({x:778.5},0).wait(1).to({x:791.7},0).wait(1).to({x:804.9},0).wait(1).to({x:818.1},0).wait(1).to({x:831.2},0).wait(1).to({x:844.4},0).wait(1).to({x:857.6},0).wait(1).to({x:870.8},0).wait(1).to({x:884},0).wait(1).to({x:897.2},0).wait(1).to({x:910.3},0).wait(1).to({x:923.5},0).wait(1).to({x:936.7},0).wait(1).to({x:949.9},0).wait(1).to({x:963.1},0).wait(1).to({x:976.3},0).wait(1).to({x:989.4},0).wait(1).to({x:1002.6},0).wait(1).to({x:1015.8},0).wait(1).to({x:1029},0).wait(1).to({x:1042.2},0).wait(1).to({x:1055.4},0).wait(1).to({x:1068.5},0).wait(1).to({x:1081.7},0).wait(1).to({x:1094.9},0).wait(1).to({x:1108.1},0).wait(1).to({x:1121.3},0).wait(1).to({x:1134.5},0).wait(1).to({x:1147.6},0).wait(1).to({x:1160.8},0).wait(1).to({x:1174},0).wait(1).to({x:1187.2},0).wait(1).to({x:1200.4},0).wait(1).to({x:1213.6},0).wait(1).to({x:1226.7},0).wait(1).to({x:1239.9},0).wait(1).to({x:1253.1},0).wait(1).to({x:1266.3},0).wait(1).to({x:1279.5},0).wait(1).to({x:1292.7},0).wait(1).to({x:1305.8},0).wait(1).to({x:1319},0).wait(1).to({x:1332.2},0).wait(1).to({x:-50,y:378.4},0).wait(2).to({x:-41.1},0).wait(1).to({x:-32.2},0).wait(1).to({x:-23.3},0).wait(1).to({x:-14.4},0).wait(1).to({x:-5.4},0).wait(1).to({x:3.5},0).wait(1).to({x:12.4},0).wait(1).to({x:21.3},0).wait(1).to({x:30.2},0).wait(1).to({x:39.2},0).wait(1).to({x:48.1},0).wait(1).to({x:57},0).wait(1).to({x:65.9},0).wait(1).to({x:74.8},0).wait(1).to({x:83.8},0).wait(1).to({x:92.7},0).wait(1).to({x:101.6},0).wait(1).to({x:110.5},0).wait(1).to({x:119.4},0).wait(1).to({x:128.4},0).wait(1).to({x:137.3},0).wait(1).to({x:146.2},0).wait(1).to({x:155.1},0).wait(1).to({x:164},0).wait(1).to({x:173},0).wait(1).to({x:181.9},0).wait(1).to({x:190.8},0).wait(1).to({x:199.7},0).wait(1).to({x:208.6},0).wait(1).to({x:217.6},0).wait(1).to({x:226.5},0).wait(1).to({x:235.4},0).wait(1).to({x:244.3},0).wait(1).to({x:253.2},0).wait(1).to({x:262.2},0).wait(1).to({x:271.1},0).wait(1).to({x:280},0).wait(1).to({x:288.9},0).wait(1).to({x:297.9},0).wait(1).to({x:306.8},0).wait(1).to({x:315.7},0).wait(1).to({x:324.6},0).wait(1).to({x:333.5},0).wait(1).to({x:342.5},0).wait(1).to({x:351.4},0).wait(1).to({x:360.3},0).wait(1).to({x:369.2},0).wait(1).to({x:378.1},0).wait(1).to({x:387.1},0).wait(1).to({x:396},0).wait(1).to({x:404.9},0).wait(1).to({x:413.8},0).wait(1).to({x:422.7},0).wait(1).to({x:431.7},0).wait(1).to({x:440.6},0).wait(1).to({x:449.5},0).wait(1).to({x:458.4},0).wait(1).to({x:467.3},0).wait(1).to({x:476.3},0).wait(1).to({x:485.2},0).wait(1).to({x:494.1},0).wait(1).to({x:503},0).wait(1).to({x:511.9},0).wait(1).to({x:520.9},0).wait(1).to({x:529.8},0).wait(1).to({x:538.7},0).wait(1).to({x:547.6},0).wait(1).to({x:556.5},0).wait(1).to({x:565.5},0).wait(1).to({x:574.4},0).wait(1).to({x:583.3},0).wait(1).to({x:592.2},0).wait(1).to({x:601.1},0).wait(1).to({x:610.1},0).wait(1).to({x:619},0).wait(1).to({x:627.9},0).wait(1).to({x:636.8},0).wait(1).to({x:645.8},0).to({_off:true},1).wait(120).to({_off:false,x:640,y:400.5},0).wait(2).to({x:651.9},0).wait(1).to({x:663.8},0).wait(1).to({x:675.7},0).wait(1).to({x:687.6},0).wait(1).to({x:699.5},0).wait(1).to({x:711.5},0).wait(1).to({x:723.4},0).wait(1).to({x:735.3},0).wait(1).to({x:747.2},0).wait(1).to({x:759.1},0).wait(1).to({x:771},0).wait(1).to({x:782.9},0).wait(1).to({x:794.8},0).wait(1).to({x:806.7},0).wait(1).to({x:818.6},0).wait(1).to({x:830.6},0).wait(1).to({x:842.5},0).wait(1).to({x:854.4},0).wait(1).to({x:866.3},0).wait(1).to({x:878.2},0).wait(1).to({x:890.1},0).wait(1).to({x:902},0).wait(1).to({x:913.9},0).wait(1).to({x:925.8},0).wait(1).to({x:937.7},0).wait(1).to({x:949.6},0).wait(1).to({x:961.6},0).wait(1).to({x:973.5},0).wait(1).to({x:985.4},0).wait(1).to({x:997.3},0).wait(1).to({x:1009.2},0).wait(1).to({x:1021.1},0).wait(1).to({x:1033},0).wait(1).to({x:1044.9},0).wait(1).to({x:1056.8},0).wait(1).to({x:1068.7},0).wait(1).to({x:1080.7},0).wait(1).to({x:1092.6},0).wait(1).to({x:1104.5},0).wait(1).to({x:1116.4},0).wait(1).to({x:1128.3},0).wait(1).to({x:1140.2},0).wait(1).to({x:1152.1},0).wait(1).to({x:1164},0).wait(1).to({x:1175.9},0).wait(1).to({x:1187.8},0).wait(1).to({x:1199.7},0).wait(1).to({x:1211.7},0).wait(1).to({x:1223.6},0).wait(1).to({x:1235.5},0).wait(1).to({x:1247.4},0).wait(1).to({x:1259.3},0).wait(1).to({x:1271.2},0).wait(1).to({x:1283.1},0).wait(1).to({x:1295},0).wait(1).to({x:1306.9},0).wait(1).to({x:1318.8},0).wait(1).to({x:1330.8},0).wait(1).to({x:-48.7,y:366.8},0).wait(1).to({y:359.6},0).wait(1).to({x:-39.1},0).wait(1).to({x:-29.4},0).wait(1).to({x:-19.8},0).wait(1).to({x:-10.1},0).wait(1).to({x:-0.5},0).wait(1).to({x:9.2},0).wait(1).to({x:18.9},0).wait(1).to({x:28.5},0).wait(1).to({x:38.2},0).wait(1).to({x:47.8},0).wait(1).to({x:57.5},0).wait(1).to({x:67.2},0).wait(1).to({x:76.8},0).wait(1).to({x:86.5},0).wait(1).to({x:96.1},0).wait(1).to({x:105.8},0).wait(1).to({x:115.5},0).wait(1).to({x:125.1},0).wait(1).to({x:134.8},0).wait(1).to({x:144.4},0).wait(1).to({x:154.1},0).wait(1).to({x:163.8},0).wait(1).to({x:173.4},0).wait(1).to({x:183.1},0).wait(1).to({x:192.7},0).wait(1).to({x:202.4},0).wait(1).to({x:212},0).wait(1).to({x:221.7},0).wait(1).to({x:231.4},0).wait(1).to({x:241},0).wait(1).to({x:250.7},0).wait(1).to({x:260.4},0).wait(1).to({x:270},0).wait(1).to({x:279.7},0).wait(1).to({x:289.3},0).wait(1).to({x:299},0).wait(1).to({x:308.6},0).wait(1).to({x:318.3},0).wait(1).to({x:328},0).wait(1).to({x:337.6},0).wait(1).to({x:347.3},0).wait(1).to({x:357},0).wait(1).to({x:366.6},0).wait(1).to({x:376.3},0).wait(1).to({x:385.9},0).wait(1).to({x:395.6},0).wait(1).to({x:405.2},0).wait(1).to({x:414.9},0).wait(1).to({x:424.6},0).wait(1).to({x:434.2},0).wait(1).to({x:443.9},0).wait(1).to({x:453.5},0).wait(1).to({x:463.2},0).wait(1).to({x:472.9},0).wait(1).to({x:482.5},0).wait(1).to({x:492.2},0).wait(1).to({x:501.8},0).wait(1).to({x:511.5},0).wait(1).to({x:521.2},0).wait(1).to({x:530.8},0).wait(1).to({x:540.5},0).wait(1).to({x:550.1},0).wait(1).to({x:559.8},0).wait(1).to({x:569.5},0).wait(1).to({x:579.1},0).wait(1).to({x:588.8},0).wait(1).to({x:598.4},0).wait(1).to({x:608.1},0).to({_off:true},1).wait(470).to({_off:false,x:626.5,y:310.9},0).wait(2).to({x:636.8},0).wait(1).to({x:647.1},0).wait(1).to({x:657.5},0).wait(1).to({x:667.8},0).wait(1).to({x:678.2},0).wait(1).to({x:688.5},0).wait(1).to({x:698.9},0).wait(1).to({x:709.2},0).wait(1).to({x:719.6},0).wait(1).to({x:729.9},0).wait(1).to({x:740.3},0).wait(1).to({x:750.6},0).wait(1).to({x:760.9},0).wait(1).to({x:771.3},0).wait(1).to({x:781.6},0).wait(1).to({x:792},0).wait(1).to({x:802.3},0).wait(1).to({x:812.7},0).wait(1).to({x:823},0).wait(1).to({x:833.4},0).wait(1).to({x:843.7},0).wait(1).to({x:854.1},0).wait(1).to({x:864.4},0).wait(1).to({x:874.7},0).wait(1).to({x:885.1},0).wait(1).to({x:895.4},0).wait(1).to({x:905.8},0).wait(1).to({x:916.1},0).wait(1).to({x:926.5},0).wait(1).to({x:936.8},0).wait(1).to({x:947.2},0).wait(1).to({x:957.5},0).wait(1).to({x:967.8},0).wait(1).to({x:978.2},0).wait(1).to({x:988.5},0).wait(1).to({x:998.9},0).wait(1).to({x:1009.2},0).wait(1).to({x:1019.6},0).wait(1).to({x:1029.9},0).wait(1).to({x:1040.3},0).wait(1).to({x:1050.6},0).wait(1).to({x:1061},0).wait(1).to({x:1071.3},0).wait(1).to({x:1081.7},0).wait(1).to({x:1092},0).wait(1).to({x:1102.3},0).wait(1).to({x:1112.7},0).wait(1).to({x:1123},0).wait(1).to({x:1133.4},0).wait(1).to({x:1143.7},0).wait(1).to({x:1154.1},0).wait(1).to({x:1164.4},0).wait(1).to({x:1174.8},0).wait(1).to({x:1185.1},0).wait(1).to({x:1195.5},0).wait(1).to({x:1205.8},0).wait(1).to({x:1216.1},0).wait(1).to({x:1226.5},0).wait(1).to({x:1236.8},0).wait(1).to({x:1247.2},0).wait(1).to({x:1257.5},0).wait(1).to({x:1267.9},0).wait(1).to({x:1278.2},0).wait(1).to({x:1288.6},0).wait(1).to({x:1298.9},0).wait(1).to({x:1309.2},0).wait(1).to({x:1319.6},0).wait(1).to({x:1330},0).wait(1).to({x:-50,y:333.1},0).wait(2).to({x:-38.1},0).wait(1).to({x:-26.2},0).wait(1).to({x:-14.3},0).wait(1).to({x:-2.4},0).wait(1).to({x:9.5},0).wait(1).to({x:21.3},0).wait(1).to({x:33.2},0).wait(1).to({x:45.1},0).wait(1).to({x:57},0).wait(1).to({x:68.9},0).wait(1).to({x:80.8},0).wait(1).to({x:92.7},0).wait(1).to({x:104.6},0).wait(1).to({x:116.5},0).wait(1).to({x:128.4},0).wait(1).to({x:140.3},0).wait(1).to({x:152.2},0).wait(1).to({x:164},0).wait(1).to({x:175.9},0).wait(1).to({x:187.8},0).wait(1).to({x:199.7},0).wait(1).to({x:211.6},0).wait(1).to({x:223.5},0).wait(1).to({x:235.4},0).wait(1).to({x:247.3},0).wait(1).to({x:259.2},0).wait(1).to({x:271.1},0).wait(1).to({x:283},0).wait(1).to({x:294.9},0).wait(1).to({x:306.7},0).wait(1).to({x:318.6},0).wait(1).to({x:330.5},0).wait(1).to({x:342.4},0).wait(1).to({x:354.3},0).wait(1).to({x:366.2},0).wait(1).to({x:378.1},0).wait(1).to({x:390},0).wait(1).to({x:401.9},0).wait(1).to({x:413.8},0).wait(1).to({x:425.7},0).wait(1).to({x:437.5},0).wait(1).to({x:449.4},0).wait(1).to({x:461.3},0).wait(1).to({x:473.2},0).wait(1).to({x:485.1},0).wait(1).to({x:497},0).wait(1).to({x:508.9},0).wait(1).to({x:520.8},0).wait(1).to({x:532.7},0).wait(1).to({x:544.6},0).wait(1).to({x:556.5},0).wait(1).to({x:568.4},0).wait(1).to({x:580.2},0).wait(1).to({x:592.1},0).wait(1).to({x:604},0).wait(1).to({x:615.9},0).wait(1).to({x:627.8},0).wait(1).to({x:639.7},0).to({_off:true},1).wait(240).to({_off:false,x:640,y:362.8},0).wait(2).to({x:651.9},0).wait(1).to({x:663.8},0).wait(1).to({x:675.7},0).wait(1).to({x:687.6},0).wait(1).to({x:699.5},0).wait(1).to({x:711.4},0).wait(1).to({x:723.3},0).wait(1).to({x:735.2},0).wait(1).to({x:747.1},0).wait(1).to({x:759},0).wait(1).to({x:770.9},0).wait(1).to({x:782.8},0).wait(1).to({x:794.7},0).wait(1).to({x:806.6},0).wait(1).to({x:818.5},0).wait(1).to({x:830.4},0).wait(1).to({x:842.3},0).wait(1).to({x:854.2},0).wait(1).to({x:866.1},0).wait(1).to({x:878},0).wait(1).to({x:889.9},0).wait(1).to({x:901.8},0).wait(1).to({x:913.7},0).wait(1).to({x:925.6},0).wait(1).to({x:937.5},0).wait(1).to({x:949.4},0).wait(1).to({x:961.3},0).wait(1).to({x:973.2},0).wait(1).to({x:985.2},0).wait(1).to({x:997.1},0).wait(1).to({x:1008.9},0).wait(1).to({x:1020.9},0).wait(1).to({x:1032.8},0).wait(1).to({x:1044.7},0).wait(1).to({x:1056.6},0).wait(1).to({x:1068.5},0).wait(1).to({x:1080.4},0).wait(1).to({x:1092.3},0).wait(1).to({x:1104.2},0).wait(1).to({x:1116.1},0).wait(1).to({x:1128},0).wait(1).to({x:1139.9},0).wait(1).to({x:1151.8},0).wait(1).to({x:1163.7},0).wait(1).to({x:1175.6},0).wait(1).to({x:1187.5},0).wait(1).to({x:1199.4},0).wait(1).to({x:1211.3},0).wait(1).to({x:1223.2},0).wait(1).to({x:1235.1},0).wait(1).to({x:1247},0).wait(1).to({x:1258.9},0).wait(1).to({x:1270.8},0).wait(1).to({x:1282.7},0).wait(1).to({x:1294.6},0).wait(1).to({x:1306.5},0).wait(1).to({x:1318.4},0).wait(1).to({x:1330.3},0).wait(1).to({x:-50,y:326.1},0).wait(2).to({x:-40.1},0).wait(1).to({x:-30.3},0).wait(1).to({x:-20.4},0).wait(1).to({x:-10.5},0).wait(1).to({x:-0.7},0).wait(1).to({x:9.2},0).wait(1).to({x:19},0).wait(1).to({x:28.9},0).wait(1).to({x:38.8},0).wait(1).to({x:48.6},0).wait(1).to({x:58.5},0).wait(1).to({x:68.4},0).wait(1).to({x:78.2},0).wait(1).to({x:88.1},0).wait(1).to({x:98},0).wait(1).to({x:107.8},0).wait(1).to({x:117.7},0).wait(1).to({x:127.6},0).wait(1).to({x:137.4},0).wait(1).to({x:147.3},0).wait(1).to({x:157.2},0).wait(1).to({x:167},0).wait(1).to({x:176.9},0).wait(1).to({x:186.8},0).wait(1).to({x:196.6},0).wait(1).to({x:206.5},0).wait(1).to({x:216.3},0).wait(1).to({x:226.2},0).wait(1).to({x:236.1},0).wait(1).to({x:245.9},0).wait(1).to({x:255.8},0).wait(1).to({x:265.7},0).wait(1).to({x:275.5},0).wait(1).to({x:285.4},0).wait(1).to({x:295.3},0).wait(1).to({x:305.1},0).wait(1).to({x:315},0).wait(1).to({x:324.9},0).wait(1).to({x:334.7},0).wait(1).to({x:344.6},0).wait(1).to({x:354.4},0).wait(1).to({x:364.3},0).wait(1).to({x:374.2},0).wait(1).to({x:384},0).wait(1).to({x:393.9},0).wait(1).to({x:403.8},0).wait(1).to({x:413.6},0).wait(1).to({x:423.5},0).wait(1).to({x:433.4},0).wait(1).to({x:443.2},0).wait(1).to({x:453.1},0).wait(1).to({x:463},0).wait(1).to({x:472.8},0).wait(1).to({x:482.7},0).wait(1).to({x:492.6},0).wait(1).to({x:502.4},0).wait(1).to({x:512.3},0).wait(1).to({x:522.1},0).wait(1).to({x:532},0).wait(1).to({x:541.9},0).wait(1).to({x:551.7},0).wait(1).to({x:561.6},0).wait(1).to({x:571.5},0).wait(1).to({x:581.3},0).wait(1).to({x:591.2},0).wait(1).to({x:601.1},0).wait(1).to({x:610.9},0).wait(1).to({x:620.8},0).to({_off:true},1).wait(190).to({_off:false,x:-48.4,y:326.5},0).wait(2).to({x:-36.8},0).wait(1).to({x:-25.2},0).wait(1).to({x:-13.6},0).wait(1).to({x:-2},0).wait(1).to({x:9.6},0).wait(1).to({x:21.2},0).wait(1).to({x:32.8},0).wait(1).to({x:44.4},0).wait(1).to({x:56},0).wait(1).to({x:67.6},0).wait(1).to({x:79.2},0).wait(1).to({x:90.8},0).wait(1).to({x:102.4},0).wait(1).to({x:114},0).wait(1).to({x:125.6},0).wait(1).to({x:137.2},0).wait(1).to({x:148.8},0).wait(1).to({x:160.4},0).wait(1).to({x:172},0).wait(1).to({x:183.6},0).wait(1).to({x:195.2},0).wait(1).to({x:206.8},0).wait(1).to({x:218.4},0).wait(1).to({x:230},0).wait(1).to({x:241.5},0).wait(1).to({x:253.2},0).wait(1).to({x:264.8},0).wait(1).to({x:276.4},0).wait(1).to({x:288},0).wait(1).to({x:299.5},0).wait(1).to({x:311.1},0).wait(1).to({x:322.7},0).wait(1).to({x:334.3},0).wait(1).to({x:345.9},0).wait(1).to({x:357.5},0).wait(1).to({x:369.1},0).wait(1).to({x:380.7},0).wait(1).to({x:392.3},0).wait(1).to({x:403.9},0).wait(1).to({x:415.5},0).wait(1).to({x:427.1},0).wait(1).to({x:438.7},0).wait(1).to({x:450.3},0).wait(1).to({x:461.9},0).wait(1).to({x:473.5},0).wait(1).to({x:485.1},0).wait(1).to({x:496.7},0).wait(1).to({x:508.3},0).wait(1).to({x:519.9},0).wait(1).to({x:531.5},0).wait(1).to({x:543.1},0).wait(1).to({x:554.7},0).wait(1).to({x:566.3},0).wait(1).to({x:577.9},0).wait(1).to({x:589.5},0).wait(1).to({x:601.1},0).wait(1).to({x:612.7},0).wait(1).to({x:624.3},0).to({_off:true},1).wait(201));
	this.timeline.addTween(cjs.Tween.get(this.CharacterWalkLeftMC).to({_off:true},1).wait(491).to({_off:false,x:624.6,y:349.6},0).wait(1).to({x:612.8},0).wait(1).to({x:601},0).wait(1).to({x:589.1},0).wait(1).to({x:577.3},0).wait(1).to({x:565.5},0).wait(1).to({x:553.7},0).wait(1).to({x:541.8},0).wait(1).to({x:530},0).wait(1).to({x:518.2},0).wait(1).to({x:506.4},0).wait(1).to({x:494.5},0).wait(1).to({x:482.7},0).wait(1).to({x:470.9},0).wait(1).to({x:459.1},0).wait(1).to({x:447.2},0).wait(1).to({x:435.4},0).wait(1).to({x:423.6},0).wait(1).to({x:411.8},0).wait(1).to({x:399.9},0).wait(1).to({x:388.1},0).wait(1).to({x:376.3},0).wait(1).to({x:364.5},0).wait(1).to({x:352.6},0).wait(1).to({x:340.8},0).wait(1).to({x:329},0).wait(1).to({x:317.2},0).wait(1).to({x:305.3},0).wait(1).to({x:293.5},0).wait(1).to({x:281.7},0).wait(1).to({x:269.9},0).wait(1).to({x:258},0).wait(1).to({x:246.2},0).wait(1).to({x:234.4},0).wait(1).to({x:222.6},0).wait(1).to({x:210.7},0).wait(1).to({x:198.9},0).wait(1).to({x:187.1},0).wait(1).to({x:175.3},0).wait(1).to({x:163.4},0).wait(1).to({x:151.6},0).wait(1).to({x:139.8},0).wait(1).to({x:128},0).wait(1).to({x:116.1},0).wait(1).to({x:104.3},0).wait(1).to({x:92.5},0).wait(1).to({x:80.7},0).wait(1).to({x:68.8},0).wait(1).to({x:57},0).wait(1).to({x:45.2},0).wait(1).to({x:33.4},0).wait(1).to({x:21.5},0).wait(1).to({x:9.7},0).wait(1).to({x:-2.1},0).wait(1).to({x:-13.9},0).wait(1).to({x:-25.8},0).wait(1).to({x:-37.6},0).wait(1).to({x:-49.4},0).wait(1).to({x:1330,y:395.7},0).wait(2).to({x:1316.4},0).wait(1).to({x:1302.7},0).wait(1).to({x:1289.1},0).wait(1).to({x:1275.5},0).wait(1).to({x:1261.9},0).wait(1).to({x:1248.2},0).wait(1).to({x:1234.6},0).wait(1).to({x:1221},0).wait(1).to({x:1207.4},0).wait(1).to({x:1193.7},0).wait(1).to({x:1180.1},0).wait(1).to({x:1166.5},0).wait(1).to({x:1152.8},0).wait(1).to({x:1139.2},0).wait(1).to({x:1125.6},0).wait(1).to({x:1112},0).wait(1).to({x:1098.3},0).wait(1).to({x:1084.7},0).wait(1).to({x:1071.1},0).wait(1).to({x:1057.5},0).wait(1).to({x:1043.8},0).wait(1).to({x:1030.2},0).wait(1).to({x:1016.6},0).wait(1).to({x:1003},0).wait(1).to({x:989.3},0).wait(1).to({x:975.7},0).wait(1).to({x:962.1},0).wait(1).to({x:948.4},0).wait(1).to({x:934.8},0).wait(1).to({x:921.2},0).wait(1).to({x:907.6},0).wait(1).to({x:893.9},0).wait(1).to({x:880.3},0).wait(1).to({x:866.7},0).wait(1).to({x:853.1},0).wait(1).to({x:839.4},0).wait(1).to({x:825.8},0).wait(1).to({x:812.2},0).wait(1).to({x:798.5},0).wait(1).to({x:784.9},0).wait(1).to({x:771.3},0).wait(1).to({x:757.7},0).wait(1).to({x:744},0).wait(1).to({x:730.4},0).wait(1).to({x:716.8},0).wait(1).to({x:703.2},0).wait(1).to({x:689.5},0).wait(1).to({x:675.9},0).to({_off:true},1).wait(131).to({_off:false,x:622.4,y:367.7},0).wait(1).to({x:612.5},0).wait(1).to({x:602.6},0).wait(1).to({x:592.7},0).wait(1).to({x:582.8},0).wait(1).to({x:572.9},0).wait(1).to({x:563},0).wait(1).to({x:553.2},0).wait(1).to({x:543.3},0).wait(1).to({x:533.4},0).wait(1).to({x:523.5},0).wait(1).to({x:513.6},0).wait(1).to({x:503.7},0).wait(1).to({x:493.9},0).wait(1).to({x:484},0).wait(1).to({x:474.1},0).wait(1).to({x:464.2},0).wait(1).to({x:454.3},0).wait(1).to({x:444.4},0).wait(1).to({x:434.6},0).wait(1).to({x:424.7},0).wait(1).to({x:414.8},0).wait(1).to({x:404.9},0).wait(1).to({x:395},0).wait(1).to({x:385.1},0).wait(1).to({x:375.3},0).wait(1).to({x:365.4},0).wait(1).to({x:355.5},0).wait(1).to({x:345.6},0).wait(1).to({x:335.7},0).wait(1).to({x:325.8},0).wait(1).to({x:316},0).wait(1).to({x:306.1},0).wait(1).to({x:296.2},0).wait(1).to({x:286.3},0).wait(1).to({x:276.4},0).wait(1).to({x:266.5},0).wait(1).to({x:256.7},0).wait(1).to({x:246.8},0).wait(1).to({x:236.9},0).wait(1).to({x:227},0).wait(1).to({x:217.1},0).wait(1).to({x:207.2},0).wait(1).to({x:197.4},0).wait(1).to({x:187.5},0).wait(1).to({x:177.6},0).wait(1).to({x:167.7},0).wait(1).to({x:157.8},0).wait(1).to({x:147.9},0).wait(1).to({x:138},0).wait(1).to({x:128.2},0).wait(1).to({x:118.3},0).wait(1).to({x:108.4},0).wait(1).to({x:98.5},0).wait(1).to({x:88.6},0).wait(1).to({x:78.7},0).wait(1).to({x:68.9},0).wait(1).to({x:59},0).wait(1).to({x:49.1},0).wait(1).to({x:39.2},0).wait(1).to({x:29.3},0).wait(1).to({x:19.4},0).wait(1).to({x:9.6},0).wait(1).to({x:-0.3},0).wait(1).to({x:-10.2},0).wait(1).to({x:-20.1},0).wait(1).to({x:-30},0).wait(1).to({x:-39.9},0).wait(1).to({x:-49.7},0).wait(1).to({x:1331.3,y:383},0).wait(2).to({x:1320.6},0).wait(1).to({x:1309.9},0).wait(1).to({x:1299.2},0).wait(1).to({x:1288.6},0).wait(1).to({x:1277.9},0).wait(1).to({x:1267.2},0).wait(1).to({x:1256.5},0).wait(1).to({x:1245.9},0).wait(1).to({x:1235.2},0).wait(1).to({x:1224.5},0).wait(1).to({x:1213.8},0).wait(1).to({x:1203.2},0).wait(1).to({x:1192.5},0).wait(1).to({x:1181.8},0).wait(1).to({x:1171.2},0).wait(1).to({x:1160.5},0).wait(1).to({x:1149.8},0).wait(1).to({x:1139.1},0).wait(1).to({x:1128.5},0).wait(1).to({x:1117.8},0).wait(1).to({x:1107.1},0).wait(1).to({x:1096.4},0).wait(1).to({x:1085.8},0).wait(1).to({x:1075.1},0).wait(1).to({x:1064.4},0).wait(1).to({x:1053.8},0).wait(1).to({x:1043.1},0).wait(1).to({x:1032.4},0).wait(1).to({x:1021.7},0).wait(1).to({x:1011.1},0).wait(1).to({x:1000.4},0).wait(1).to({x:989.7},0).wait(1).to({x:979},0).wait(1).to({x:968.4},0).wait(1).to({x:957.7},0).wait(1).to({x:947},0).wait(1).to({x:936.3},0).wait(1).to({x:925.7},0).wait(1).to({x:915},0).wait(1).to({x:904.3},0).wait(1).to({x:893.7},0).wait(1).to({x:883},0).wait(1).to({x:872.3},0).wait(1).to({x:861.6},0).wait(1).to({x:851},0).wait(1).to({x:840.3},0).wait(1).to({x:829.6},0).wait(1).to({x:818.9},0).wait(1).to({x:808.3},0).wait(1).to({x:797.6},0).wait(1).to({x:786.9},0).wait(1).to({x:776.3},0).wait(1).to({x:765.6},0).wait(1).to({x:754.9},0).wait(1).to({x:744.2},0).wait(1).to({x:733.6},0).wait(1).to({x:722.9},0).wait(1).to({x:712.2},0).wait(1).to({x:701.5},0).wait(1).to({x:690.9},0).wait(1).to({x:680.2},0).wait(1).to({x:669.5},0).wait(1).to({x:658.9},0).to({_off:true},1).wait(515).to({_off:false,x:639.3,y:377.9},0).wait(2).to({x:627.4},0).wait(1).to({x:615.6},0).wait(1).to({x:603.7},0).wait(1).to({x:591.9},0).wait(1).to({x:580},0).wait(1).to({x:568.2},0).wait(1).to({x:556.3},0).wait(1).to({x:544.5},0).wait(1).to({x:532.6},0).wait(1).to({x:520.7},0).wait(1).to({x:508.9},0).wait(1).to({x:497},0).wait(1).to({x:485.2},0).wait(1).to({x:473.3},0).wait(1).to({x:461.5},0).wait(1).to({x:449.6},0).wait(1).to({x:437.8},0).wait(1).to({x:425.9},0).wait(1).to({x:414.1},0).wait(1).to({x:402.2},0).wait(1).to({x:390.3},0).wait(1).to({x:378.5},0).wait(1).to({x:366.6},0).wait(1).to({x:354.8},0).wait(1).to({x:342.9},0).wait(1).to({x:331.1},0).wait(1).to({x:319.2},0).wait(1).to({x:307.4},0).wait(1).to({x:295.5},0).wait(1).to({x:283.6},0).wait(1).to({x:271.8},0).wait(1).to({x:259.9},0).wait(1).to({x:248.1},0).wait(1).to({x:236.2},0).wait(1).to({x:224.4},0).wait(1).to({x:212.5},0).wait(1).to({x:200.7},0).wait(1).to({x:188.8},0).wait(1).to({x:176.9},0).wait(1).to({x:165.1},0).wait(1).to({x:153.2},0).wait(1).to({x:141.4},0).wait(1).to({x:129.5},0).wait(1).to({x:117.7},0).wait(1).to({x:105.8},0).wait(1).to({x:94},0).wait(1).to({x:82.1},0).wait(1).to({x:70.3},0).wait(1).to({x:58.4},0).wait(1).to({x:46.6},0).wait(1).to({x:34.7},0).wait(1).to({x:22.8},0).wait(1).to({x:11},0).wait(1).to({x:-0.9},0).wait(1).to({x:-12.7},0).wait(1).to({x:-24.6},0).wait(1).to({x:-36.4},0).wait(1).to({x:-48.3},0).wait(1).to({x:1330,y:403.1},0).wait(2).to({x:1318.6},0).wait(1).to({x:1307.3},0).wait(1).to({x:1295.9},0).wait(1).to({x:1284.5},0).wait(1).to({x:1273.1},0).wait(1).to({x:1261.8},0).wait(1).to({x:1250.4},0).wait(1).to({x:1239},0).wait(1).to({x:1227.6},0).wait(1).to({x:1216.3},0).wait(1).to({x:1204.9},0).wait(1).to({x:1193.5},0).wait(1).to({x:1182.1},0).wait(1).to({x:1170.8},0).wait(1).to({x:1159.4},0).wait(1).to({x:1148},0).wait(1).to({x:1136.6},0).wait(1).to({x:1125.3},0).wait(1).to({x:1113.9},0).wait(1).to({x:1102.5},0).wait(1).to({x:1091.1},0).wait(1).to({x:1079.8},0).wait(1).to({x:1068.4},0).wait(1).to({x:1057},0).wait(1).to({x:1045.6},0).wait(1).to({x:1034.3},0).wait(1).to({x:1022.9},0).wait(1).to({x:1011.5},0).wait(1).to({x:1000.1},0).wait(1).to({x:988.8},0).wait(1).to({x:977.4},0).wait(1).to({x:966},0).wait(1).to({x:954.6},0).wait(1).to({x:943.3},0).wait(1).to({x:931.9},0).wait(1).to({x:920.5},0).wait(1).to({x:909.1},0).wait(1).to({x:897.8},0).wait(1).to({x:886.4},0).wait(1).to({x:875},0).wait(1).to({x:863.6},0).wait(1).to({x:852.3},0).wait(1).to({x:840.9},0).wait(1).to({x:829.5},0).wait(1).to({x:818.1},0).wait(1).to({x:806.8},0).wait(1).to({x:795.4},0).wait(1).to({x:784},0).wait(1).to({x:772.6},0).wait(1).to({x:761.3},0).wait(1).to({x:749.9},0).wait(1).to({x:738.5},0).wait(1).to({x:727.1},0).wait(1).to({x:715.8},0).wait(1).to({x:704.4},0).wait(1).to({x:693},0).wait(1).to({x:681.6},0).wait(1).to({x:670.3},0).to({_off:true},1).wait(130).to({_off:false,x:599.2,y:355.3},0).wait(2).to({x:588.9},0).wait(1).to({x:578.6},0).wait(1).to({x:568.3},0).wait(1).to({x:558},0).wait(1).to({x:547.8},0).wait(1).to({x:537.5},0).wait(1).to({x:527.2},0).wait(1).to({x:516.9},0).wait(1).to({x:506.6},0).wait(1).to({x:496.3},0).wait(1).to({x:486},0).wait(1).to({x:475.7},0).wait(1).to({x:465.5},0).wait(1).to({x:455.2},0).wait(1).to({x:444.9},0).wait(1).to({x:434.6},0).wait(1).to({x:424.3},0).wait(1).to({x:414},0).wait(1).to({x:403.7},0).wait(1).to({x:393.4},0).wait(1).to({x:383.2},0).wait(1).to({x:372.9},0).wait(1).to({x:362.6},0).wait(1).to({x:352.3},0).wait(1).to({x:342},0).wait(1).to({x:331.7},0).wait(1).to({x:321.4},0).wait(1).to({x:311.1},0).wait(1).to({x:300.8},0).wait(1).to({x:290.6},0).wait(1).to({x:280.3},0).wait(1).to({x:270},0).wait(1).to({x:259.7},0).wait(1).to({x:249.4},0).wait(1).to({x:239.1},0).wait(1).to({x:228.8},0).wait(1).to({x:218.5},0).wait(1).to({x:208.3},0).wait(1).to({x:198},0).wait(1).to({x:187.7},0).wait(1).to({x:177.4},0).wait(1).to({x:167.1},0).wait(1).to({x:156.8},0).wait(1).to({x:146.5},0).wait(1).to({x:136.2},0).wait(1).to({x:125.9},0).wait(1).to({x:115.7},0).wait(1).to({x:105.4},0).wait(1).to({x:95.1},0).wait(1).to({x:84.8},0).wait(1).to({x:74.5},0).wait(1).to({x:64.2},0).wait(1).to({x:53.9},0).wait(1).to({x:43.6},0).wait(1).to({x:33.4},0).wait(1).to({x:23.1},0).wait(1).to({x:12.8},0).wait(1).to({x:2.5},0).wait(1).to({x:-7.8},0).wait(1).to({x:-18.1},0).wait(1).to({x:-28.4},0).wait(1).to({x:-38.7},0).wait(1).to({x:-48.9},0).wait(1).to({x:1330.2,y:369.5},0).wait(2).to({x:1319.6},0).wait(1).to({x:1309},0).wait(1).to({x:1298.4},0).wait(1).to({x:1287.8},0).wait(1).to({x:1277.2},0).wait(1).to({x:1266.6},0).wait(1).to({x:1256},0).wait(1).to({x:1245.3},0).wait(1).to({x:1234.7},0).wait(1).to({x:1224.1},0).wait(1).to({x:1213.5},0).wait(1).to({x:1202.9},0).wait(1).to({x:1192.3},0).wait(1).to({x:1181.7},0).wait(1).to({x:1171.1},0).wait(1).to({x:1160.5},0).wait(1).to({x:1149.9},0).wait(1).to({x:1139.3},0).wait(1).to({x:1128.7},0).wait(1).to({x:1118.1},0).wait(1).to({x:1107.5},0).wait(1).to({x:1096.8},0).wait(1).to({x:1086.2},0).wait(1).to({x:1075.6},0).wait(1).to({x:1065},0).wait(1).to({x:1054.4},0).wait(1).to({x:1043.8},0).wait(1).to({x:1033.2},0).wait(1).to({x:1022.6},0).wait(1).to({x:1012},0).wait(1).to({x:1001.4},0).wait(1).to({x:990.8},0).wait(1).to({x:980.2},0).wait(1).to({x:969.6},0).wait(1).to({x:959},0).wait(1).to({x:948.3},0).wait(1).to({x:937.7},0).wait(1).to({x:927.1},0).wait(1).to({x:916.5},0).wait(1).to({x:905.9},0).wait(1).to({x:895.3},0).wait(1).to({x:884.7},0).wait(1).to({x:874.1},0).wait(1).to({x:863.5},0).wait(1).to({x:852.9},0).wait(1).to({x:842.3},0).wait(1).to({x:831.7},0).wait(1).to({x:821.1},0).wait(1).to({x:810.5},0).wait(1).to({x:799.8},0).wait(1).to({x:789.2},0).wait(1).to({x:778.6},0).wait(1).to({x:768},0).wait(1).to({x:757.4},0).wait(1).to({x:746.8},0).wait(1).to({x:736.2},0).wait(1).to({x:725.6},0).wait(1).to({x:715},0).wait(1).to({x:704.4},0).wait(1).to({x:693.8},0).wait(1).to({x:683.2},0).wait(1).to({x:672.6},0).wait(1).to({x:662},0).to({_off:true},1).wait(471).to({_off:false,x:640.7,y:334},0).wait(1).to({x:628.8},0).wait(1).to({x:616.9},0).wait(1).to({x:605},0).wait(1).to({x:593.1},0).wait(1).to({x:581.3},0).wait(1).to({x:569.4},0).wait(1).to({x:557.5},0).wait(1).to({x:545.6},0).wait(1).to({x:533.8},0).wait(1).to({x:521.9},0).wait(1).to({x:510},0).wait(1).to({x:498.1},0).wait(1).to({x:486.3},0).wait(1).to({x:474.4},0).wait(1).to({x:462.5},0).wait(1).to({x:450.6},0).wait(1).to({x:438.8},0).wait(1).to({x:426.9},0).wait(1).to({x:415},0).wait(1).to({x:403.1},0).wait(1).to({x:391.3},0).wait(1).to({x:379.4},0).wait(1).to({x:367.5},0).wait(1).to({x:355.6},0).wait(1).to({x:343.8},0).wait(1).to({x:331.9},0).wait(1).to({x:320},0).wait(1).to({x:308.1},0).wait(1).to({x:296.3},0).wait(1).to({x:284.4},0).wait(1).to({x:272.5},0).wait(1).to({x:260.6},0).wait(1).to({x:248.7},0).wait(1).to({x:236.9},0).wait(1).to({x:225},0).wait(1).to({x:213.1},0).wait(1).to({x:201.2},0).wait(1).to({x:189.4},0).wait(1).to({x:177.5},0).wait(1).to({x:165.6},0).wait(1).to({x:153.7},0).wait(1).to({x:141.9},0).wait(1).to({x:130},0).wait(1).to({x:118.1},0).wait(1).to({x:106.2},0).wait(1).to({x:94.4},0).wait(1).to({x:82.5},0).wait(1).to({x:70.6},0).wait(1).to({x:58.7},0).wait(1).to({x:46.9},0).wait(1).to({x:35},0).wait(1).to({x:23.1},0).wait(1).to({x:11.2},0).wait(1).to({x:-0.6},0).wait(1).to({x:-12.5},0).wait(1).to({x:-24.4},0).wait(1).to({x:-36.3},0).wait(1).to({x:-48.1},0).wait(1).to({x:1331.2,y:367.1},0).wait(1).to({y:348.1},0).wait(1).to({x:1316.4},0).wait(1).to({x:1301.6},0).wait(1).to({x:1286.9},0).wait(1).to({x:1272.1},0).wait(1).to({x:1257.3},0).wait(1).to({x:1242.6},0).wait(1).to({x:1227.8},0).wait(1).to({x:1213},0).wait(1).to({x:1198.3},0).wait(1).to({x:1183.5},0).wait(1).to({x:1168.7},0).wait(1).to({x:1154},0).wait(1).to({x:1139.2},0).wait(1).to({x:1124.4},0).wait(1).to({x:1109.7},0).wait(1).to({x:1094.9},0).wait(1).to({x:1080.2},0).wait(1).to({x:1065.4},0).wait(1).to({x:1050.6},0).wait(1).to({x:1035.9},0).wait(1).to({x:1021.1},0).wait(1).to({x:1006.3},0).wait(1).to({x:991.6},0).wait(1).to({x:976.8},0).wait(1).to({x:962},0).wait(1).to({x:947.3},0).wait(1).to({x:932.5},0).wait(1).to({x:917.7},0).wait(1).to({x:903},0).wait(1).to({x:888.2},0).wait(1).to({x:873.4},0).wait(1).to({x:858.7},0).wait(1).to({x:843.9},0).wait(1).to({x:829.2},0).wait(1).to({x:814.4},0).wait(1).to({x:799.6},0).wait(1).to({x:784.9},0).wait(1).to({x:770.1},0).wait(1).to({x:755.3},0).wait(1).to({x:740.6},0).wait(1).to({x:725.8},0).wait(1).to({x:711},0).wait(1).to({x:696.3},0).wait(1).to({x:681.5},0).wait(1).to({x:666.7},0).wait(1).to({x:652},0).wait(1).to({x:637.2},0).wait(1).to({x:622.5},0).wait(1).to({x:635.8,y:315.1},0).wait(2).to({x:625.7},0).wait(1).to({x:615.7},0).wait(1).to({x:605.6},0).wait(1).to({x:595.6},0).wait(1).to({x:585.5},0).wait(1).to({x:575.4},0).wait(1).to({x:565.4},0).wait(1).to({x:555.3},0).wait(1).to({x:545.3},0).wait(1).to({x:535.2},0).wait(1).to({x:525.2},0).wait(1).to({x:515.1},0).wait(1).to({x:505},0).wait(1).to({x:495},0).wait(1).to({x:484.9},0).wait(1).to({x:474.9},0).wait(1).to({x:464.8},0).wait(1).to({x:454.7},0).wait(1).to({x:444.7},0).wait(1).to({x:434.6},0).wait(1).to({x:424.6},0).wait(1).to({x:414.5},0).wait(1).to({x:404.4},0).wait(1).to({x:394.4},0).wait(1).to({x:384.3},0).wait(1).to({x:374.3},0).wait(1).to({x:364.2},0).wait(1).to({x:354.2},0).wait(1).to({x:344.1},0).wait(1).to({x:334},0).wait(1).to({x:324},0).wait(1).to({x:313.9},0).wait(1).to({x:303.9},0).wait(1).to({x:293.8},0).wait(1).to({x:283.8},0).wait(1).to({x:273.7},0).wait(1).to({x:263.6},0).wait(1).to({x:253.6},0).wait(1).to({x:243.5},0).wait(1).to({x:233.4},0).wait(1).to({x:223.4},0).wait(1).to({x:213.3},0).wait(1).to({x:203.3},0).wait(1).to({x:193.2},0).wait(1).to({x:183.2},0).wait(1).to({x:173.1},0).wait(1).to({x:163},0).wait(1).to({x:153},0).wait(1).to({x:142.9},0).wait(1).to({x:132.9},0).wait(1).to({x:122.8},0).wait(1).to({x:112.8},0).wait(1).to({x:102.7},0).wait(1).to({x:92.6},0).wait(1).to({x:82.6},0).wait(1).to({x:72.5},0).wait(1).to({x:62.4},0).wait(1).to({x:52.4},0).wait(1).to({x:42.3},0).wait(1).to({x:32.3},0).wait(1).to({x:22.2},0).wait(1).to({x:12.2},0).wait(1).to({x:2.1},0).wait(1).to({x:-8},0).wait(1).to({x:-18},0).wait(1).to({x:-28.1},0).wait(1).to({x:-38.1},0).wait(1).to({x:-48.2},0).wait(1).to({x:1330,y:363.3},0).wait(2).to({x:1318},0).wait(1).to({x:1306},0).wait(1).to({x:1294},0).wait(1).to({x:1282},0).wait(1).to({x:1270},0).wait(1).to({x:1258},0).wait(1).to({x:1246},0).wait(1).to({x:1234},0).wait(1).to({x:1222},0).wait(1).to({x:1210},0).wait(1).to({x:1198},0).wait(1).to({x:1186},0).wait(1).to({x:1174},0).wait(1).to({x:1162},0).wait(1).to({x:1150},0).wait(1).to({x:1138},0).wait(1).to({x:1126},0).wait(1).to({x:1114},0).wait(1).to({x:1102},0).wait(1).to({x:1089.9},0).wait(1).to({x:1077.9},0).wait(1).to({x:1065.9},0).wait(1).to({x:1053.9},0).wait(1).to({x:1041.9},0).wait(1).to({x:1029.9},0).wait(1).to({x:1017.9},0).wait(1).to({x:1005.9},0).wait(1).to({x:993.9},0).wait(1).to({x:981.9},0).wait(1).to({x:969.9},0).wait(1).to({x:957.9},0).wait(1).to({x:945.9},0).wait(1).to({x:933.9},0).wait(1).to({x:921.9},0).wait(1).to({x:909.9},0).wait(1).to({x:897.9},0).wait(1).to({x:885.9},0).wait(1).to({x:873.9},0).wait(1).to({x:861.9},0).wait(1).to({x:849.9},0).wait(1).to({x:837.9},0).wait(1).to({x:825.9},0).wait(1).to({x:813.9},0).wait(1).to({x:801.9},0).wait(1).to({x:789.9},0).wait(1).to({x:777.9},0).wait(1).to({x:765.9},0).wait(1).to({x:753.9},0).wait(1).to({x:741.9},0).wait(1).to({x:729.9},0).wait(1).to({x:717.9},0).wait(1).to({x:705.9},0).wait(1).to({x:693.9},0).wait(1).to({x:681.9},0).wait(1).to({x:669.9},0).wait(1).to({x:657.9},0).wait(1).to({x:645.9},0).wait(1).to({x:633.9},0).to({_off:true},1).wait(380).to({_off:false,x:1330.1,y:354.6},0).wait(2).to({x:1318},0).wait(1).to({x:1305.9},0).wait(1).to({x:1293.8},0).wait(1).to({x:1281.7},0).wait(1).to({x:1269.6},0).wait(1).to({x:1257.5},0).wait(1).to({x:1245.4},0).wait(1).to({x:1233.3},0).wait(1).to({x:1221.2},0).wait(1).to({x:1209.1},0).wait(1).to({x:1197},0).wait(1).to({x:1185},0).wait(1).to({x:1172.9},0).wait(1).to({x:1160.8},0).wait(1).to({x:1148.7},0).wait(1).to({x:1136.6},0).wait(1).to({x:1124.5},0).wait(1).to({x:1112.4},0).wait(1).to({x:1100.3},0).wait(1).to({x:1088.2},0).wait(1).to({x:1076.1},0).wait(1).to({x:1064},0).wait(1).to({x:1051.9},0).wait(1).to({x:1039.8},0).wait(1).to({x:1027.7},0).wait(1).to({x:1015.6},0).wait(1).to({x:1003.5},0).wait(1).to({x:991.4},0).wait(1).to({x:979.3},0).wait(1).to({x:967.2},0).wait(1).to({x:955.1},0).wait(1).to({x:943},0).wait(1).to({x:930.9},0).wait(1).to({x:918.8},0).wait(1).to({x:906.8},0).wait(1).to({x:894.7},0).wait(1).to({x:882.6},0).wait(1).to({x:870.5},0).wait(1).to({x:858.4},0).wait(1).to({x:846.3},0).wait(1).to({x:834.2},0).wait(1).to({x:822.1},0).wait(1).to({x:810},0).wait(1).to({x:797.9},0).wait(1).to({x:785.8},0).wait(1).to({x:773.7},0).wait(1).to({x:761.6},0).wait(1).to({x:749.5},0).wait(1).to({x:737.4},0).wait(1).to({x:725.3},0).wait(1).to({x:713.2},0).wait(1).to({x:701.1},0).wait(1).to({x:689},0).wait(1).to({x:676.9},0).wait(1).to({x:664.8},0).wait(1).to({x:652.7},0).wait(1).to({x:640.6},0).wait(1).to({x:628.6},0).to({_off:true},1).wait(141));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(4).to({_off:false,x:662.4,y:795},0).wait(1).to({y:789.3},0).wait(1).to({y:783.5},0).wait(1).to({y:777.8},0).wait(1).to({y:772},0).wait(1).to({y:766.3},0).wait(1).to({y:760.5},0).wait(1).to({y:754.8},0).wait(1).to({y:749},0).wait(1).to({y:743.3},0).wait(1).to({y:737.5},0).wait(1).to({y:731.8},0).wait(1).to({y:726},0).wait(1).to({y:720.3},0).wait(1).to({y:714.5},0).wait(1).to({y:708.8},0).wait(1).to({y:703.1},0).wait(1).to({y:697.3},0).wait(1).to({y:691.6},0).wait(1).to({y:685.8},0).wait(1).to({y:680.1},0).wait(1).to({y:674.3},0).wait(1).to({y:668.6},0).wait(1).to({y:662.8},0).wait(1).to({y:657.1},0).wait(1).to({y:651.3},0).wait(1).to({y:645.6},0).wait(1).to({y:639.8},0).wait(1).to({y:634.1},0).wait(1).to({y:628.3},0).wait(1).to({y:622.6},0).wait(1).to({y:616.9},0).wait(1).to({y:611.1},0).wait(1).to({y:605.4},0).wait(1).to({y:599.6},0).wait(1).to({y:593.9},0).wait(1).to({y:588.1},0).wait(1).to({y:582.4},0).wait(1).to({y:576.6},0).wait(1).to({y:570.9},0).wait(1).to({y:565.1},0).wait(1).to({y:559.4},0).wait(1).to({y:553.6},0).wait(1).to({y:547.9},0).wait(1).to({y:542.1},0).wait(1).to({y:536.4},0).wait(1).to({y:530.6},0).wait(1).to({y:524.9},0).wait(1).to({y:519.2},0).wait(1).to({y:513.4},0).wait(1).to({y:507.7},0).wait(1).to({y:501.9},0).wait(1).to({y:496.2},0).wait(1).to({y:490.4},0).wait(1).to({y:484.7},0).wait(1).to({y:478.9},0).wait(1).to({y:473.2},0).wait(1).to({y:467.4},0).wait(1).to({y:461.7},0).wait(1).to({y:455.9},0).wait(1).to({y:450.2},0).wait(1).to({y:444.4},0).wait(1).to({y:438.7},0).wait(1).to({y:432.9},0).wait(1).to({y:427.2},0).to({_off:true},1).wait(81).to({_off:false,x:661.9,y:432.5},0).wait(2).to({y:423.6},0).wait(1).to({y:414.7},0).wait(1).to({y:405.8},0).wait(1).to({y:396.9},0).wait(1).to({y:388},0).wait(1).to({y:379.1},0).wait(1).to({y:370.2},0).wait(1).to({y:361.3},0).wait(1).to({y:352.4},0).wait(1).to({y:343.5},0).wait(1).to({y:334.6},0).wait(1).to({y:325.7},0).wait(1).to({y:316.8},0).wait(1).to({y:307.9},0).wait(1).to({y:299},0).wait(1).to({y:290.1},0).wait(1).to({y:281.2},0).wait(1).to({y:272.3},0).wait(1).to({y:263.5},0).wait(1).to({y:254.6},0).wait(1).to({y:245.7},0).wait(1).to({y:236.8},0).wait(1).to({y:227.9},0).wait(1).to({y:219},0).wait(1).to({y:210.1},0).wait(1).to({y:201.2},0).wait(1).to({y:192.3},0).wait(1).to({y:183.4},0).wait(1).to({y:174.5},0).wait(1).to({y:165.6},0).wait(1).to({y:156.7},0).wait(1).to({y:147.8},0).wait(1).to({y:138.9},0).wait(1).to({y:130},0).wait(1).to({y:121.1},0).wait(1).to({y:112.2},0).wait(1).to({y:103.3},0).wait(1).to({y:94.5},0).wait(1).to({y:85.6},0).wait(1).to({y:76.7},0).wait(1).to({y:67.8},0).wait(1).to({y:58.9},0).wait(1).to({y:50},0).wait(1).to({y:41.1},0).wait(1).to({y:32.2},0).wait(1).to({y:23.3},0).wait(1).to({y:14.4},0).wait(1).to({y:5.5},0).wait(1).to({y:-3.4},0).wait(1).to({y:-12.3},0).wait(1).to({y:-21.2},0).wait(1).to({y:-30.1},0).wait(1).to({y:-39},0).wait(1).to({y:-47.9},0).wait(1).to({y:-56.8},0).wait(1).to({y:-65.6},0).wait(1).to({y:-74.5},0).wait(1).to({x:661.8,y:794.1},0).wait(2).to({y:786.1},0).wait(1).to({y:778.2},0).wait(1).to({y:770.3},0).wait(1).to({y:762.3},0).wait(1).to({y:754.4},0).wait(1).to({y:746.5},0).wait(1).to({y:738.5},0).wait(1).to({y:730.6},0).wait(1).to({y:722.7},0).wait(1).to({y:714.7},0).wait(1).to({y:706.8},0).wait(1).to({y:698.9},0).wait(1).to({y:690.9},0).wait(1).to({y:683},0).wait(1).to({y:675.1},0).wait(1).to({y:667.1},0).wait(1).to({y:659.2},0).wait(1).to({y:651.3},0).wait(1).to({y:643.3},0).wait(1).to({y:635.4},0).wait(1).to({y:627.5},0).wait(1).to({y:619.5},0).wait(1).to({y:611.6},0).wait(1).to({y:603.7},0).wait(1).to({y:595.7},0).wait(1).to({y:587.8},0).wait(1).to({y:579.9},0).wait(1).to({y:571.9},0).wait(1).to({y:564},0).wait(1).to({y:556.1},0).wait(1).to({y:548.1},0).wait(1).to({y:540.2},0).wait(1).to({y:532.3},0).wait(1).to({y:524.3},0).wait(1).to({y:516.4},0).wait(1).to({y:508.5},0).wait(1).to({y:500.5},0).wait(1).to({y:492.6},0).wait(1).to({y:484.7},0).wait(1).to({y:476.7},0).wait(1).to({y:468.8},0).wait(1).to({y:460.9},0).wait(1).to({y:452.9},0).wait(1).to({y:445},0).wait(1).to({y:437.1},0).wait(1).to({y:429.1},0).wait(1).to({y:421.2},0).wait(1).to({y:413.3},0).to({_off:true},1).wait(701).to({_off:false,x:664.7,y:356.7},0).wait(1).to({y:347.7},0).wait(1).to({y:338.7},0).wait(1).to({y:329.7},0).wait(1).to({y:320.8},0).wait(1).to({y:311.8},0).wait(1).to({y:302.8},0).wait(1).to({y:293.8},0).wait(1).to({y:284.9},0).wait(1).to({y:275.9},0).wait(1).to({y:266.9},0).wait(1).to({y:258},0).wait(1).to({y:249},0).wait(1).to({y:240},0).wait(1).to({y:231},0).wait(1).to({y:222.1},0).wait(1).to({y:213.1},0).wait(1).to({y:204.1},0).wait(1).to({y:195.2},0).wait(1).to({y:186.2},0).wait(1).to({y:177.2},0).wait(1).to({y:168.2},0).wait(1).to({y:159.3},0).wait(1).to({y:150.3},0).wait(1).to({y:141.3},0).wait(1).to({y:132.4},0).wait(1).to({y:123.4},0).wait(1).to({y:114.4},0).wait(1).to({y:105.4},0).wait(1).to({y:96.5},0).wait(1).to({y:87.5},0).wait(1).to({y:78.5},0).wait(1).to({y:69.6},0).wait(1).to({y:60.6},0).wait(1).to({y:51.6},0).wait(1).to({y:42.6},0).wait(1).to({y:33.7},0).wait(1).to({y:24.7},0).wait(1).to({y:15.7},0).wait(1).to({y:6.7},0).wait(1).to({y:-2.2},0).wait(1).to({y:-11.2},0).wait(1).to({y:-20.2},0).wait(1).to({y:-29.1},0).wait(1).to({y:-38.1},0).wait(1).to({y:-47.1},0).wait(1).to({y:-56.1},0).wait(1).to({y:-65},0).wait(1).to({y:-74},0).wait(1).to({x:644.6,y:795.7},0).wait(2).to({y:784.2},0).wait(1).to({y:772.8},0).wait(1).to({y:761.3},0).wait(1).to({y:749.9},0).wait(1).to({y:738.4},0).wait(1).to({y:726.9},0).wait(1).to({y:715.5},0).wait(1).to({y:704},0).wait(1).to({y:692.6},0).wait(1).to({y:681.1},0).wait(1).to({y:669.6},0).wait(1).to({y:658.2},0).wait(1).to({y:646.7},0).wait(1).to({y:635.3},0).wait(1).to({y:623.8},0).wait(1).to({y:612.3},0).wait(1).to({y:600.9},0).wait(1).to({y:589.4},0).wait(1).to({y:578},0).wait(1).to({y:566.5},0).wait(1).to({y:555},0).wait(1).to({y:543.6},0).wait(1).to({y:532.1},0).wait(1).to({y:520.7},0).wait(1).to({y:509.2},0).wait(1).to({y:497.7},0).wait(1).to({y:486.3},0).wait(1).to({y:474.8},0).wait(1).to({y:463.3},0).wait(1).to({y:451.9},0).wait(1).to({y:440.4},0).wait(1).to({y:429},0).wait(1).to({y:417.5},0).wait(1).to({y:406},0).wait(1).to({y:394.6},0).wait(1).to({y:383.1},0).wait(1).to({y:371.7},0).wait(1).to({y:360.2},0).to({_off:true},1).wait(101).to({_off:false,x:668.2,y:358.6},0).wait(1).to({y:349.6},0).wait(1).to({y:340.6},0).wait(1).to({y:331.6},0).wait(1).to({y:322.6},0).wait(1).to({y:313.6},0).wait(1).to({y:304.6},0).wait(1).to({y:295.6},0).wait(1).to({y:286.6},0).wait(1).to({y:277.6},0).wait(1).to({y:268.6},0).wait(1).to({y:259.6},0).wait(1).to({y:250.6},0).wait(1).to({y:241.6},0).wait(1).to({y:232.6},0).wait(1).to({y:223.6},0).wait(1).to({y:214.6},0).wait(1).to({y:205.6},0).wait(1).to({y:196.6},0).wait(1).to({y:187.6},0).wait(1).to({y:178.6},0).wait(1).to({y:169.6},0).wait(1).to({y:160.6},0).wait(1).to({y:151.6},0).wait(1).to({y:142.6},0).wait(1).to({y:133.6},0).wait(1).to({y:124.6},0).wait(1).to({y:115.6},0).wait(1).to({y:106.6},0).wait(1).to({y:97.6},0).wait(1).to({y:88.6},0).wait(1).to({y:79.6},0).wait(1).to({y:70.6},0).wait(1).to({y:61.6},0).wait(1).to({y:52.6},0).wait(1).to({y:43.6},0).wait(1).to({y:34.6},0).wait(1).to({y:25.6},0).wait(1).to({y:16.6},0).wait(1).to({y:7.6},0).wait(1).to({y:-1.4},0).wait(1).to({y:-10.4},0).wait(1).to({y:-19.4},0).wait(1).to({y:-28.4},0).wait(1).to({y:-37.4},0).wait(1).to({y:-46.4},0).wait(1).to({y:-55.4},0).wait(1).to({y:-64.4},0).wait(1).to({y:-73.4},0).wait(1).to({x:646.1,y:795},0).wait(1).to({x:634.9},0).wait(1).to({y:787.2},0).wait(1).to({y:779.4},0).wait(1).to({y:771.7},0).wait(1).to({y:763.9},0).wait(1).to({y:756.1},0).wait(1).to({y:748.3},0).wait(1).to({y:740.5},0).wait(1).to({y:732.8},0).wait(1).to({y:725},0).wait(1).to({y:717.2},0).wait(1).to({y:709.4},0).wait(1).to({y:701.6},0).wait(1).to({y:693.8},0).wait(1).to({y:686.1},0).wait(1).to({y:678.3},0).wait(1).to({y:670.5},0).wait(1).to({y:662.7},0).wait(1).to({y:654.9},0).wait(1).to({y:647.2},0).wait(1).to({y:639.4},0).wait(1).to({y:631.6},0).wait(1).to({y:623.8},0).wait(1).to({y:616},0).wait(1).to({y:608.3},0).wait(1).to({y:600.5},0).wait(1).to({y:592.7},0).wait(1).to({y:584.9},0).wait(1).to({y:577.1},0).wait(1).to({y:569.3},0).wait(1).to({y:561.6},0).wait(1).to({y:553.8},0).wait(1).to({y:546},0).wait(1).to({y:538.2},0).wait(1).to({y:530.4},0).wait(1).to({y:522.7},0).wait(1).to({y:514.9},0).wait(1).to({y:507.1},0).wait(1).to({y:499.3},0).wait(1).to({y:491.5},0).wait(1).to({y:483.8},0).wait(1).to({y:476},0).wait(1).to({y:468.2},0).wait(1).to({y:460.4},0).wait(1).to({y:452.6},0).wait(1).to({y:444.8},0).wait(1).to({y:437.1},0).wait(1).to({y:429.3},0).wait(1).to({y:421.5},0).to({_off:true},1).wait(591).to({_off:false,x:660.1,y:315.4},0).wait(1).to({y:305.1},0).wait(1).to({y:294.9},0).wait(1).to({y:284.7},0).wait(1).to({y:274.5},0).wait(1).to({y:264.2},0).wait(1).to({y:254},0).wait(1).to({y:243.8},0).wait(1).to({y:233.6},0).wait(1).to({y:223.3},0).wait(1).to({y:213.1},0).wait(1).to({y:202.9},0).wait(1).to({y:192.7},0).wait(1).to({y:182.4},0).wait(1).to({y:172.2},0).wait(1).to({y:162},0).wait(1).to({y:151.8},0).wait(1).to({y:141.5},0).wait(1).to({y:131.3},0).wait(1).to({y:121.1},0).wait(1).to({y:110.9},0).wait(1).to({y:100.7},0).wait(1).to({y:90.4},0).wait(1).to({y:80.2},0).wait(1).to({y:70},0).wait(1).to({y:59.8},0).wait(1).to({y:49.5},0).wait(1).to({y:39.3},0).wait(1).to({y:29.1},0).wait(1).to({y:18.9},0).wait(1).to({y:8.6},0).wait(1).to({y:-1.6},0).wait(1).to({y:-11.8},0).wait(1).to({y:-22},0).wait(1).to({y:-32.3},0).wait(1).to({y:-42.5},0).wait(1).to({y:-52.7},0).wait(1).to({y:-62.9},0).wait(1).to({y:-73.1},0).wait(1).to({x:657.7,y:795},0).wait(2).to({y:786},0).wait(1).to({y:777},0).wait(1).to({y:768},0).wait(1).to({y:759},0).wait(1).to({y:750},0).wait(1).to({y:741},0).wait(1).to({y:731.9},0).wait(1).to({y:722.9},0).wait(1).to({y:713.9},0).wait(1).to({y:704.9},0).wait(1).to({y:695.9},0).wait(1).to({y:686.9},0).wait(1).to({y:677.9},0).wait(1).to({y:668.9},0).wait(1).to({y:659.9},0).wait(1).to({y:650.9},0).wait(1).to({y:641.9},0).wait(1).to({y:632.9},0).wait(1).to({y:623.8},0).wait(1).to({y:614.8},0).wait(1).to({y:605.8},0).wait(1).to({y:596.8},0).wait(1).to({y:587.8},0).wait(1).to({y:578.8},0).wait(1).to({y:569.8},0).wait(1).to({y:560.8},0).wait(1).to({y:551.8},0).wait(1).to({y:542.8},0).wait(1).to({y:533.8},0).wait(1).to({y:524.8},0).wait(1).to({y:515.7},0).wait(1).to({y:506.7},0).wait(1).to({y:497.7},0).wait(1).to({y:488.7},0).wait(1).to({y:479.7},0).wait(1).to({y:470.7},0).wait(1).to({y:461.7},0).wait(1).to({y:452.7},0).wait(1).to({y:443.7},0).wait(1).to({y:434.7},0).wait(1).to({y:425.7},0).wait(1).to({y:416.7},0).wait(1).to({y:407.6},0).wait(1).to({y:398.6},0).wait(1).to({y:389.6},0).wait(1).to({y:380.6},0).wait(1).to({y:371.6},0).wait(1).to({y:362.6},0).to({_off:true},1).wait(81).to({_off:false,x:643.2,y:323.2},0).wait(1).to({y:314.9},0).wait(1).to({y:306.7},0).wait(1).to({y:298.4},0).wait(1).to({y:290.1},0).wait(1).to({y:281.8},0).wait(1).to({y:273.6},0).wait(1).to({y:265.3},0).wait(1).to({y:257},0).wait(1).to({y:248.7},0).wait(1).to({y:240.5},0).wait(1).to({y:232.2},0).wait(1).to({y:223.9},0).wait(1).to({y:215.7},0).wait(1).to({y:207.4},0).wait(1).to({y:199.1},0).wait(1).to({y:190.8},0).wait(1).to({y:182.6},0).wait(1).to({y:174.3},0).wait(1).to({y:166},0).wait(1).to({y:157.7},0).wait(1).to({y:149.5},0).wait(1).to({y:141.2},0).wait(1).to({y:132.9},0).wait(1).to({y:124.7},0).wait(1).to({y:116.4},0).wait(1).to({y:108.1},0).wait(1).to({y:99.8},0).wait(1).to({y:91.6},0).wait(1).to({y:83.3},0).wait(1).to({y:75},0).wait(1).to({y:66.7},0).wait(1).to({y:58.5},0).wait(1).to({y:50.2},0).wait(1).to({y:41.9},0).wait(1).to({y:33.6},0).wait(1).to({y:25.4},0).wait(1).to({y:17.1},0).wait(1).to({y:8.8},0).wait(1).to({y:0.6},0).wait(1).to({y:-7.7},0).wait(1).to({y:-16},0).wait(1).to({y:-24.3},0).wait(1).to({y:-32.5},0).wait(1).to({y:-40.8},0).wait(1).to({y:-49.1},0).wait(1).to({y:-57.4},0).wait(1).to({y:-65.6},0).wait(1).to({y:-73.9},0).wait(1).to({x:646,y:795},0).wait(2).to({y:784.1},0).wait(1).to({y:773.2},0).wait(1).to({y:762.4},0).wait(1).to({y:751.5},0).wait(1).to({y:740.6},0).wait(1).to({y:729.7},0).wait(1).to({y:718.8},0).wait(1).to({y:707.9},0).wait(1).to({y:697},0).wait(1).to({y:686.2},0).wait(1).to({y:675.3},0).wait(1).to({y:664.4},0).wait(1).to({y:653.5},0).wait(1).to({y:642.6},0).wait(1).to({y:631.7},0).wait(1).to({y:620.9},0).wait(1).to({y:610},0).wait(1).to({y:599.1},0).wait(1).to({y:588.2},0).wait(1).to({y:577.3},0).wait(1).to({y:566.4},0).wait(1).to({y:555.5},0).wait(1).to({y:544.7},0).wait(1).to({y:533.8},0).wait(1).to({y:522.9},0).wait(1).to({y:512},0).wait(1).to({y:501.1},0).wait(1).to({y:490.3},0).wait(1).to({y:479.4},0).wait(1).to({y:468.5},0).wait(1).to({y:457.6},0).wait(1).to({y:446.7},0).wait(1).to({y:435.8},0).wait(1).to({y:424.9},0).wait(1).to({y:414.1},0).wait(1).to({y:403.2},0).wait(1).to({y:392.3},0).wait(1).to({y:381.4},0).to({_off:true},1).wait(600).to({_off:false,x:643.8,y:341.9},0).wait(2).to({y:333.2},0).wait(1).to({y:324.5},0).wait(1).to({y:315.9},0).wait(1).to({y:307.2},0).wait(1).to({y:298.5},0).wait(1).to({y:289.8},0).wait(1).to({y:281.2},0).wait(1).to({y:272.5},0).wait(1).to({y:263.8},0).wait(1).to({y:255.1},0).wait(1).to({y:246.5},0).wait(1).to({y:237.8},0).wait(1).to({y:229.1},0).wait(1).to({y:220.4},0).wait(1).to({y:211.7},0).wait(1).to({y:203.1},0).wait(1).to({y:194.4},0).wait(1).to({y:185.7},0).wait(1).to({y:177},0).wait(1).to({y:168.4},0).wait(1).to({y:159.7},0).wait(1).to({y:151},0).wait(1).to({y:142.3},0).wait(1).to({y:133.7},0).wait(1).to({y:125},0).wait(1).to({y:116.3},0).wait(1).to({y:107.6},0).wait(1).to({y:98.9},0).wait(1).to({y:90.3},0).wait(1).to({y:81.6},0).wait(1).to({y:72.9},0).wait(1).to({y:64.2},0).wait(1).to({y:55.6},0).wait(1).to({y:46.9},0).wait(1).to({y:38.2},0).wait(1).to({y:29.5},0).wait(1).to({y:20.8},0).wait(1).to({y:12.2},0).wait(1).to({y:3.5},0).wait(1).to({y:-5.2},0).wait(1).to({y:-13.9},0).wait(1).to({y:-22.5},0).wait(1).to({y:-31.2},0).wait(1).to({y:-39.9},0).wait(1).to({y:-48.6},0).wait(1).to({y:-57.2},0).wait(1).to({y:-65.9},0).wait(1).to({y:-74.6},0).wait(1).to({x:655.4,y:795},0).wait(2).to({y:784.2},0).wait(1).to({y:773.5},0).wait(1).to({y:762.7},0).wait(1).to({y:751.9},0).wait(1).to({y:741.2},0).wait(1).to({y:730.4},0).wait(1).to({y:719.6},0).wait(1).to({y:708.9},0).wait(1).to({y:698.1},0).wait(1).to({y:687.3},0).wait(1).to({y:676.6},0).wait(1).to({y:665.8},0).wait(1).to({y:655},0).wait(1).to({y:644.3},0).wait(1).to({y:633.5},0).wait(1).to({y:622.7},0).wait(1).to({y:612},0).wait(1).to({y:601.2},0).wait(1).to({y:590.4},0).wait(1).to({y:579.7},0).wait(1).to({y:568.9},0).wait(1).to({y:558.1},0).wait(1).to({y:547.4},0).wait(1).to({y:536.6},0).wait(1).to({y:525.8},0).wait(1).to({y:515.1},0).wait(1).to({y:504.3},0).wait(1).to({y:493.5},0).wait(1).to({y:482.8},0).wait(1).to({y:472},0).wait(1).to({y:461.2},0).wait(1).to({y:450.5},0).wait(1).to({y:439.7},0).wait(1).to({y:428.9},0).wait(1).to({y:418.2},0).wait(1).to({y:407.4},0).wait(1).to({y:396.6},0).wait(1).to({y:385.9},0).to({_off:true},1).wait(120).to({_off:false,x:626.4,y:794.6},0).wait(2).to({y:785.2},0).wait(1).to({y:775.8},0).wait(1).to({y:766.4},0).wait(1).to({y:757},0).wait(1).to({y:747.6},0).wait(1).to({y:738.2},0).wait(1).to({y:728.8},0).wait(1).to({y:719.4},0).wait(1).to({y:710},0).wait(1).to({y:700.6},0).wait(1).to({y:691.2},0).wait(1).to({y:681.8},0).wait(1).to({y:672.4},0).wait(1).to({y:663},0).wait(1).to({y:653.6},0).wait(1).to({y:644.2},0).wait(1).to({y:634.8},0).wait(1).to({y:625.4},0).wait(1).to({y:616},0).wait(1).to({y:606.6},0).wait(1).to({y:597.2},0).wait(1).to({y:587.8},0).wait(1).to({y:578.4},0).wait(1).to({y:569},0).wait(1).to({y:559.6},0).wait(1).to({y:550.2},0).wait(1).to({y:540.8},0).wait(1).to({y:531.4},0).wait(1).to({y:522},0).wait(1).to({y:512.6},0).wait(1).to({y:503.2},0).wait(1).to({y:493.9},0).wait(1).to({y:484.5},0).wait(1).to({y:475.1},0).wait(1).to({y:465.7},0).wait(1).to({y:456.3},0).wait(1).to({y:446.9},0).wait(1).to({y:437.5},0).wait(1).to({y:428.1},0).wait(1).to({y:418.7},0).wait(1).to({y:409.3},0).wait(1).to({y:399.9},0).wait(1).to({y:390.5},0).wait(1).to({y:381.1},0).wait(1).to({y:371.7},0).wait(1).to({y:362.3},0).wait(1).to({y:352.9},0).wait(1).to({y:343.5},0).wait(1).to({x:626.2,y:343.2},0).wait(2).to({x:626.1,y:332.2},0).wait(1).to({y:321.2},0).wait(1).to({x:626,y:310.2},0).wait(1).to({y:299.2},0).wait(1).to({x:625.9,y:288.3},0).wait(1).to({y:277.3},0).wait(1).to({y:266.3},0).wait(1).to({x:625.8,y:255.3},0).wait(1).to({y:244.3},0).wait(1).to({x:625.7,y:233.3},0).wait(1).to({y:222.3},0).wait(1).to({x:625.6,y:211.3},0).wait(1).to({y:200.3},0).wait(1).to({y:189.4},0).wait(1).to({x:625.5,y:178.4},0).wait(1).to({y:167.4},0).wait(1).to({x:625.4,y:156.4},0).wait(1).to({y:145.4},0).wait(1).to({y:134.4},0).wait(1).to({x:625.3,y:123.4},0).wait(1).to({y:112.4},0).wait(1).to({x:625.2,y:101.4},0).wait(1).to({y:90.4},0).wait(1).to({x:625.1,y:79.5},0).wait(1).to({y:68.5},0).wait(1).to({y:57.5},0).wait(1).to({x:625,y:46.5},0).wait(1).to({y:35.5},0).wait(1).to({x:624.9,y:24.5},0).wait(1).to({y:13.5},0).wait(1).to({x:624.8,y:2.5},0).wait(1).to({y:-8.5},0).wait(1).to({y:-19.5},0).wait(1).to({x:624.7,y:-30.4},0).wait(1).to({y:-41.4},0).wait(1).to({x:624.6,y:-52.4},0).wait(1).to({y:-63.4},0).wait(1).to({y:-74.4},0).to({_off:true},1).wait(51));
	this.timeline.addTween(cjs.Tween.get(this.CharacterWalkDownMC).to({_off:true},1).wait(261).to({_off:false,x:661.9,y:413.1},0).wait(1).to({y:423.4},0).wait(1).to({y:433.7},0).wait(1).to({y:444},0).wait(1).to({y:454.3},0).wait(1).to({y:464.6},0).wait(1).to({y:474.9},0).wait(1).to({y:485.2},0).wait(1).to({y:495.5},0).wait(1).to({y:505.8},0).wait(1).to({y:516.1},0).wait(1).to({y:526.4},0).wait(1).to({y:536.7},0).wait(1).to({y:547},0).wait(1).to({y:557.3},0).wait(1).to({y:567.6},0).wait(1).to({y:577.9},0).wait(1).to({y:588.2},0).wait(1).to({y:598.5},0).wait(1).to({y:608.9},0).wait(1).to({y:619.2},0).wait(1).to({y:629.5},0).wait(1).to({y:639.8},0).wait(1).to({y:650.1},0).wait(1).to({y:660.4},0).wait(1).to({y:670.7},0).wait(1).to({y:681},0).wait(1).to({y:691.3},0).wait(1).to({y:701.6},0).wait(1).to({y:711.9},0).wait(1).to({y:722.2},0).wait(1).to({y:732.5},0).wait(1).to({y:742.8},0).wait(1).to({y:753.1},0).wait(1).to({y:763.4},0).wait(1).to({y:773.7},0).wait(1).to({y:784},0).wait(1).to({y:794.4},0).wait(1).to({x:626.2,y:-74.4},0).wait(1).to({x:661.9},0).wait(1).to({y:-65.7},0).wait(1).to({y:-56.9},0).wait(1).to({y:-48.2},0).wait(1).to({y:-39.4},0).wait(1).to({y:-30.7},0).wait(1).to({y:-21.9},0).wait(1).to({y:-13.2},0).wait(1).to({y:-4.4},0).wait(1).to({y:4.3},0).wait(1).to({y:13.1},0).wait(1).to({y:21.8},0).wait(1).to({y:30.5},0).wait(1).to({y:39.3},0).wait(1).to({y:48},0).wait(1).to({y:56.8},0).wait(1).to({y:65.5},0).wait(1).to({y:74.3},0).wait(1).to({y:83},0).wait(1).to({y:91.8},0).wait(1).to({y:100.5},0).wait(1).to({y:109.3},0).wait(1).to({y:118},0).wait(1).to({y:126.8},0).wait(1).to({y:135.5},0).wait(1).to({y:144.2},0).wait(1).to({y:153},0).wait(1).to({y:161.7},0).wait(1).to({y:170.5},0).wait(1).to({y:179.2},0).wait(1).to({y:188},0).wait(1).to({y:196.7},0).wait(1).to({y:205.5},0).wait(1).to({y:214.2},0).wait(1).to({y:223},0).wait(1).to({y:231.7},0).wait(1).to({y:240.4},0).wait(1).to({y:249.2},0).wait(1).to({y:257.9},0).wait(1).to({y:266.7},0).wait(1).to({y:275.4},0).wait(1).to({y:284.2},0).wait(1).to({y:292.9},0).wait(1).to({y:301.7},0).wait(1).to({y:310.4},0).wait(1).to({y:319.2},0).wait(1).to({y:327.9},0).wait(1).to({y:336.6},0).wait(1).to({y:345.4},0).wait(1).to({y:354.1},0).wait(1).to({y:362.9},0).wait(1).to({y:371.6},0).wait(1).to({y:380.4},0).wait(1).to({y:389.1},0).wait(1).to({y:397.9},0).wait(1).to({y:406.6},0).wait(1).to({y:415.4},0).wait(1).to({y:424.1},0).wait(1).to({y:432.9},0).to({_off:true},1).wait(505).to({_off:false,x:653.4,y:385.1},0).wait(2).to({y:394.6},0).wait(1).to({y:404.1},0).wait(1).to({y:413.7},0).wait(1).to({y:423.2},0).wait(1).to({y:432.7},0).wait(1).to({y:442.3},0).wait(1).to({y:451.8},0).wait(1).to({y:461.3},0).wait(1).to({y:470.9},0).wait(1).to({y:480.4},0).wait(1).to({y:489.9},0).wait(1).to({y:499.5},0).wait(1).to({y:509},0).wait(1).to({y:518.5},0).wait(1).to({y:528.1},0).wait(1).to({y:537.6},0).wait(1).to({y:547.1},0).wait(1).to({y:556.7},0).wait(1).to({y:566.2},0).wait(1).to({y:575.7},0).wait(1).to({y:585.3},0).wait(1).to({y:594.8},0).wait(1).to({y:604.4},0).wait(1).to({y:613.9},0).wait(1).to({y:623.4},0).wait(1).to({y:632.9},0).wait(1).to({y:642.5},0).wait(1).to({y:652},0).wait(1).to({y:661.6},0).wait(1).to({y:671.1},0).wait(1).to({y:680.6},0).wait(1).to({y:690.2},0).wait(1).to({y:699.7},0).wait(1).to({y:709.2},0).wait(1).to({y:718.8},0).wait(1).to({y:728.3},0).wait(1).to({y:737.8},0).wait(1).to({y:747.4},0).wait(1).to({y:756.9},0).wait(1).to({y:766.4},0).wait(1).to({y:776},0).wait(1).to({y:785.5},0).wait(1).to({y:795.1},0).wait(1).to({x:664.4,y:-74},0).wait(2).to({y:-65},0).wait(1).to({y:-56},0).wait(1).to({y:-47},0).wait(1).to({y:-38},0).wait(1).to({y:-29},0).wait(1).to({y:-20},0).wait(1).to({y:-11},0).wait(1).to({y:-2},0).wait(1).to({y:7},0).wait(1).to({y:16},0).wait(1).to({y:25},0).wait(1).to({y:34},0).wait(1).to({y:43},0).wait(1).to({y:52},0).wait(1).to({y:61},0).wait(1).to({y:70},0).wait(1).to({y:79},0).wait(1).to({y:88},0).wait(1).to({y:97},0).wait(1).to({y:106},0).wait(1).to({y:115},0).wait(1).to({y:124},0).wait(1).to({y:133},0).wait(1).to({y:142},0).wait(1).to({y:151},0).wait(1).to({y:160},0).wait(1).to({y:169},0).wait(1).to({y:178},0).wait(1).to({y:187},0).wait(1).to({y:196},0).wait(1).to({y:205},0).wait(1).to({y:214},0).wait(1).to({y:223},0).wait(1).to({y:232},0).wait(1).to({y:241},0).wait(1).to({y:250},0).wait(1).to({y:259},0).wait(1).to({y:268},0).wait(1).to({y:277},0).wait(1).to({y:286},0).wait(1).to({y:295},0).wait(1).to({y:304},0).wait(1).to({y:313},0).wait(1).to({y:322},0).wait(1).to({y:331},0).wait(1).to({y:340},0).wait(1).to({y:349},0).wait(1).to({y:358},0).to({_off:true},1).wait(90).to({_off:false,x:680.8,y:389.3},0).wait(1).to({x:658.3},0).wait(1).to({y:397.7},0).wait(1).to({y:406.2},0).wait(1).to({y:414.6},0).wait(1).to({y:423},0).wait(1).to({y:431.5},0).wait(1).to({y:439.9},0).wait(1).to({y:448.3},0).wait(1).to({y:456.8},0).wait(1).to({y:465.2},0).wait(1).to({y:473.6},0).wait(1).to({y:482.1},0).wait(1).to({y:490.5},0).wait(1).to({y:498.9},0).wait(1).to({y:507.4},0).wait(1).to({y:515.8},0).wait(1).to({y:524.2},0).wait(1).to({y:532.7},0).wait(1).to({y:541.1},0).wait(1).to({y:549.5},0).wait(1).to({y:558},0).wait(1).to({y:566.4},0).wait(1).to({y:574.8},0).wait(1).to({y:583.3},0).wait(1).to({y:591.7},0).wait(1).to({y:600.1},0).wait(1).to({y:608.6},0).wait(1).to({y:617},0).wait(1).to({y:625.4},0).wait(1).to({y:633.9},0).wait(1).to({y:642.3},0).wait(1).to({y:650.7},0).wait(1).to({y:659.2},0).wait(1).to({y:667.6},0).wait(1).to({y:676},0).wait(1).to({y:684.5},0).wait(1).to({y:692.9},0).wait(1).to({y:701.3},0).wait(1).to({y:709.8},0).wait(1).to({y:718.2},0).wait(1).to({y:726.6},0).wait(1).to({y:735.1},0).wait(1).to({y:743.5},0).wait(1).to({y:751.9},0).wait(1).to({y:760.4},0).wait(1).to({y:768.8},0).wait(1).to({y:777.2},0).wait(1).to({y:785.7},0).wait(1).to({y:794.1},0).wait(1).to({x:668.1,y:-74.5},0).wait(2).to({y:-65.5},0).wait(1).to({y:-56.5},0).wait(1).to({y:-47.4},0).wait(1).to({y:-38.4},0).wait(1).to({y:-29.3},0).wait(1).to({y:-20.3},0).wait(1).to({y:-11.3},0).wait(1).to({y:-2.2},0).wait(1).to({y:6.8},0).wait(1).to({y:15.9},0).wait(1).to({y:24.9},0).wait(1).to({y:34},0).wait(1).to({y:43},0).wait(1).to({y:52},0).wait(1).to({y:61.1},0).wait(1).to({y:70.1},0).wait(1).to({y:79.2},0).wait(1).to({y:88.2},0).wait(1).to({y:97.2},0).wait(1).to({y:106.3},0).wait(1).to({y:115.3},0).wait(1).to({y:124.4},0).wait(1).to({y:133.4},0).wait(1).to({y:142.5},0).wait(1).to({y:151.5},0).wait(1).to({y:160.5},0).wait(1).to({y:169.6},0).wait(1).to({y:178.6},0).wait(1).to({y:187.7},0).wait(1).to({y:196.7},0).wait(1).to({y:205.7},0).wait(1).to({y:214.8},0).wait(1).to({y:223.8},0).wait(1).to({y:232.9},0).wait(1).to({y:241.9},0).wait(1).to({y:251},0).wait(1).to({y:260},0).wait(1).to({y:269},0).wait(1).to({y:278.1},0).wait(1).to({y:287.1},0).wait(1).to({y:296.2},0).wait(1).to({y:305.2},0).wait(1).to({y:314.2},0).wait(1).to({y:323.3},0).wait(1).to({y:332.3},0).wait(1).to({y:341.4},0).wait(1).to({y:350.4},0).wait(1).to({y:359.5},0).to({_off:true},1).wait(610).to({_off:false,x:651.4,y:384},0).wait(2).to({y:394.9},0).wait(1).to({y:405.8},0).wait(1).to({y:416.6},0).wait(1).to({y:427.5},0).wait(1).to({y:438.4},0).wait(1).to({y:449.2},0).wait(1).to({y:460.1},0).wait(1).to({y:471},0).wait(1).to({y:481.9},0).wait(1).to({y:492.8},0).wait(1).to({y:503.6},0).wait(1).to({y:514.5},0).wait(1).to({y:525.4},0).wait(1).to({y:536.2},0).wait(1).to({y:547.1},0).wait(1).to({y:558},0).wait(1).to({y:568.9},0).wait(1).to({y:579.8},0).wait(1).to({y:590.6},0).wait(1).to({y:601.5},0).wait(1).to({y:612.4},0).wait(1).to({y:623.3},0).wait(1).to({y:634.1},0).wait(1).to({y:645},0).wait(1).to({y:655.9},0).wait(1).to({y:666.8},0).wait(1).to({y:677.6},0).wait(1).to({y:688.5},0).wait(1).to({y:699.4},0).wait(1).to({y:710.3},0).wait(1).to({y:721.1},0).wait(1).to({y:732},0).wait(1).to({y:742.9},0).wait(1).to({y:753.8},0).wait(1).to({y:764.6},0).wait(1).to({y:775.5},0).wait(1).to({y:786.4},0).wait(1).to({y:797.3},0).wait(1).to({x:659.9,y:-75},0).wait(2).to({y:-64.7},0).wait(1).to({y:-54.4},0).wait(1).to({y:-44.2},0).wait(1).to({y:-33.9},0).wait(1).to({y:-23.6},0).wait(1).to({y:-13.4},0).wait(1).to({y:-3.1},0).wait(1).to({y:7.2},0).wait(1).to({y:17.5},0).wait(1).to({y:27.8},0).wait(1).to({y:38},0).wait(1).to({y:48.3},0).wait(1).to({y:58.6},0).wait(1).to({y:68.8},0).wait(1).to({y:79.1},0).wait(1).to({y:89.4},0).wait(1).to({y:99.7},0).wait(1).to({y:110},0).wait(1).to({y:120.2},0).wait(1).to({y:130.5},0).wait(1).to({y:140.8},0).wait(1).to({y:151.1},0).wait(1).to({y:161.3},0).wait(1).to({y:171.6},0).wait(1).to({y:181.9},0).wait(1).to({y:192.2},0).wait(1).to({y:202.4},0).wait(1).to({y:212.7},0).wait(1).to({y:223},0).wait(1).to({y:233.3},0).wait(1).to({y:243.5},0).wait(1).to({y:253.8},0).wait(1).to({y:264.1},0).wait(1).to({y:274.4},0).wait(1).to({y:284.6},0).wait(1).to({y:294.9},0).wait(1).to({y:305.2},0).wait(1).to({y:315.5},0).to({_off:true},1).wait(90).to({_off:false,x:651.3,y:392.6},0).wait(2).to({y:403.2},0).wait(1).to({y:413.8},0).wait(1).to({y:424.4},0).wait(1).to({y:435},0).wait(1).to({y:445.6},0).wait(1).to({y:456.2},0).wait(1).to({y:466.8},0).wait(1).to({y:477.4},0).wait(1).to({y:488},0).wait(1).to({y:498.6},0).wait(1).to({y:509.2},0).wait(1).to({y:519.8},0).wait(1).to({y:530.5},0).wait(1).to({y:541},0).wait(1).to({y:551.7},0).wait(1).to({y:562.3},0).wait(1).to({y:572.9},0).wait(1).to({y:583.5},0).wait(1).to({y:594.1},0).wait(1).to({y:604.7},0).wait(1).to({y:615.3},0).wait(1).to({y:625.9},0).wait(1).to({y:636.5},0).wait(1).to({y:647.1},0).wait(1).to({y:657.7},0).wait(1).to({y:668.4},0).wait(1).to({y:679},0).wait(1).to({y:689.6},0).wait(1).to({y:700.2},0).wait(1).to({y:710.8},0).wait(1).to({y:721.4},0).wait(1).to({y:732},0).wait(1).to({y:742.6},0).wait(1).to({y:753.2},0).wait(1).to({y:763.8},0).wait(1).to({y:774.4},0).wait(1).to({y:785},0).wait(1).to({y:795.7},0).wait(1).to({x:643.3,y:-75},0).wait(2).to({y:-64.5},0).wait(1).to({y:-54},0).wait(1).to({y:-43.5},0).wait(1).to({y:-32.9},0).wait(1).to({y:-22.4},0).wait(1).to({y:-11.9},0).wait(1).to({y:-1.4},0).wait(1).to({y:9.1},0).wait(1).to({y:19.6},0).wait(1).to({y:30.1},0).wait(1).to({y:40.6},0).wait(1).to({y:51.1},0).wait(1).to({y:61.7},0).wait(1).to({y:72.2},0).wait(1).to({y:82.7},0).wait(1).to({y:93.2},0).wait(1).to({y:103.7},0).wait(1).to({y:114.2},0).wait(1).to({y:124.8},0).wait(1).to({y:135.3},0).wait(1).to({y:145.8},0).wait(1).to({y:156.3},0).wait(1).to({y:166.8},0).wait(1).to({y:177.3},0).wait(1).to({y:187.8},0).wait(1).to({y:198.3},0).wait(1).to({y:208.8},0).wait(1).to({y:219.4},0).wait(1).to({y:229.9},0).wait(1).to({y:240.4},0).wait(1).to({y:250.9},0).wait(1).to({y:261.4},0).wait(1).to({y:271.9},0).wait(1).to({y:282.4},0).wait(1).to({y:293},0).wait(1).to({y:303.5},0).wait(1).to({y:314},0).wait(1).to({y:324.5},0).to({_off:true},1).wait(590).to({_off:false,x:636,y:371.5},0).wait(2).to({y:382.6},0).wait(1).to({y:393.8},0).wait(1).to({y:405},0).wait(1).to({y:416.2},0).wait(1).to({y:427.4},0).wait(1).to({y:438.6},0).wait(1).to({y:449.7},0).wait(1).to({y:460.9},0).wait(1).to({y:472.1},0).wait(1).to({y:483.3},0).wait(1).to({y:494.5},0).wait(1).to({y:505.7},0).wait(1).to({y:516.9},0).wait(1).to({y:528.1},0).wait(1).to({y:539.3},0).wait(1).to({y:550.4},0).wait(1).to({y:561.6},0).wait(1).to({y:572.8},0).wait(1).to({y:584},0).wait(1).to({y:595.2},0).wait(1).to({y:606.4},0).wait(1).to({y:617.6},0).wait(1).to({y:628.7},0).wait(1).to({y:639.9},0).wait(1).to({y:651.1},0).wait(1).to({y:662.3},0).wait(1).to({y:673.5},0).wait(1).to({y:684.7},0).wait(1).to({y:695.9},0).wait(1).to({y:707.1},0).wait(1).to({y:718.2},0).wait(1).to({y:729.4},0).wait(1).to({y:740.6},0).wait(1).to({y:751.8},0).wait(1).to({y:763},0).wait(1).to({y:774.2},0).wait(1).to({y:785.4},0).wait(1).to({y:796.6},0).wait(1).to({x:643.7,y:-75},0).wait(2).to({y:-67.8},0).wait(1).to({y:-60.6},0).wait(1).to({y:-53.4},0).wait(1).to({y:-46.2},0).wait(1).to({y:-39},0).wait(1).to({y:-31.8},0).wait(1).to({y:-24.6},0).wait(1).to({y:-17.4},0).wait(1).to({y:-10.2},0).wait(1).to({y:-3.1},0).wait(1).to({y:4.1},0).wait(1).to({y:11.3},0).wait(1).to({y:18.5},0).wait(1).to({y:25.7},0).wait(1).to({y:32.9},0).wait(1).to({y:40.1},0).wait(1).to({y:47.3},0).wait(1).to({y:54.5},0).wait(1).to({y:61.7},0).wait(1).to({y:68.9},0).wait(1).to({y:76.1},0).wait(1).to({y:83.3},0).wait(1).to({y:90.5},0).wait(1).to({y:97.7},0).wait(1).to({y:104.9},0).wait(1).to({y:112.1},0).wait(1).to({y:119.3},0).wait(1).to({y:126.5},0).wait(1).to({y:133.7},0).wait(1).to({y:140.8},0).wait(1).to({y:148},0).wait(1).to({y:155.2},0).wait(1).to({y:162.4},0).wait(1).to({y:169.6},0).wait(1).to({y:176.8},0).wait(1).to({y:184},0).wait(1).to({y:191.2},0).wait(1).to({y:198.4},0).wait(1).to({y:205.6},0).wait(1).to({y:212.8},0).wait(1).to({y:220},0).wait(1).to({y:227.2},0).wait(1).to({y:234.4},0).wait(1).to({y:241.6},0).wait(1).to({y:248.8},0).wait(1).to({y:256},0).wait(1).to({y:263.2},0).wait(1).to({y:270.4},0).wait(1).to({y:277.5},0).wait(1).to({y:284.7},0).wait(1).to({y:291.9},0).wait(1).to({y:299.1},0).wait(1).to({y:306.3},0).wait(1).to({y:313.5},0).wait(1).to({y:320.7},0).wait(1).to({y:327.9},0).wait(1).to({y:335.1},0).wait(1).to({y:342.3},0).to({_off:true},1).wait(300).to({_off:false,x:632,y:391.3},0).wait(2).to({y:399.7},0).wait(1).to({y:408.2},0).wait(1).to({y:416.6},0).wait(1).to({y:425.1},0).wait(1).to({y:433.5},0).wait(1).to({y:442},0).wait(1).to({y:450.4},0).wait(1).to({y:458.9},0).wait(1).to({y:467.3},0).wait(1).to({y:475.8},0).wait(1).to({y:484.2},0).wait(1).to({y:492.7},0).wait(1).to({y:501.1},0).wait(1).to({y:509.6},0).wait(1).to({y:518},0).wait(1).to({y:526.5},0).wait(1).to({y:534.9},0).wait(1).to({y:543.4},0).wait(1).to({y:551.8},0).wait(1).to({y:560.3},0).wait(1).to({y:568.7},0).wait(1).to({y:577.2},0).wait(1).to({y:585.6},0).wait(1).to({y:594.1},0).wait(1).to({y:602.5},0).wait(1).to({y:611},0).wait(1).to({y:619.4},0).wait(1).to({y:627.9},0).wait(1).to({y:636.3},0).wait(1).to({y:644.8},0).wait(1).to({y:653.2},0).wait(1).to({y:661.7},0).wait(1).to({y:670.1},0).wait(1).to({y:678.6},0).wait(1).to({y:687},0).wait(1).to({y:695.5},0).wait(1).to({y:703.9},0).wait(1).to({y:712.4},0).wait(1).to({y:720.8},0).wait(1).to({y:729.3},0).wait(1).to({y:737.7},0).wait(1).to({y:746.2},0).wait(1).to({y:754.6},0).wait(1).to({y:763.1},0).wait(1).to({y:771.5},0).wait(1).to({y:780},0).wait(1).to({y:788.4},0).wait(1).to({y:796.9},0).to({_off:true},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(70).to({_off:false},0).wait(80).to({_off:true},1).wait(109).to({_off:false,y:413.1},0).wait(1).to({_off:true},1).wait(98).to({_off:false,x:663.6,y:430.1},0).to({_off:true},1).wait(130).to({_off:false,x:623.4,y:350},0).to({_off:true},1).wait(238).to({_off:false,x:619.5,y:367.7},0).to({_off:true},1).wait(229).to({_off:false,x:664.5,y:357.2},0).to({_off:true},1).wait(189).to({_off:false,x:667.9,y:359.1},0).to({_off:true},1).wait(689).to({_off:false,x:660.3,y:315.1},0).to({_off:true},1).wait(169).to({_off:false,x:643.4,y:324.1},0).to({_off:true},1).wait(219).to({_off:false,x:639,y:333.9},0).to({_off:true},1).wait(820));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_playbutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// playbutton
	this.btnPlayMC = new lib.PlayBtn();
	this.btnPlayMC.name = "btnPlayMC";
	this.btnPlayMC.parent = this;
	this.btnPlayMC.setTransform(649.5,418.7,1,1,0,0,0,0,0.5);
	new cjs.ButtonHelper(this.btnPlayMC, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btnPlayMC).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_playbutton, null, null);


(lib.Scene_1_Left_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Left
	this.btnLeft9 = new lib.ButtonLeft();
	this.btnLeft9.name = "btnLeft9";
	this.btnLeft9.parent = this;
	this.btnLeft9.setTransform(103.2,352.3);
	this.btnLeft9._off = true;
	new cjs.ButtonHelper(this.btnLeft9, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btnLeft9).wait(2010).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Left_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Left
	this.btnLeft8 = new lib.ButtonLeft();
	this.btnLeft8.name = "btnLeft8";
	this.btnLeft8.parent = this;
	this.btnLeft8.setTransform(101.5,355.3);
	this.btnLeft8._off = true;
	new cjs.ButtonHelper(this.btnLeft8, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btnLeft8).wait(2230).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Left_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Left
	this.btnLeft6 = new lib.ButtonLeft();
	this.btnLeft6.name = "btnLeft6";
	this.btnLeft6.parent = this;
	this.btnLeft6.setTransform(87.7,376.4);
	this.btnLeft6._off = true;
	new cjs.ButtonHelper(this.btnLeft6, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btnLeft6).wait(1150).to({_off:false},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Left_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Left
	this.btnLeft5 = new lib.ButtonLeft();
	this.btnLeft5.name = "btnLeft5";
	this.btnLeft5.parent = this;
	this.btnLeft5.setTransform(103,358.1);
	this.btnLeft5._off = true;
	new cjs.ButtonHelper(this.btnLeft5, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btnLeft5).wait(960).to({_off:false},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Left_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Left
	this.btnLeft3 = new lib.ButtonLeft();
	this.btnLeft3.name = "btnLeft3";
	this.btnLeft3.parent = this;
	this.btnLeft3.setTransform(97.1,356.1);
	this.btnLeft3._off = true;
	new cjs.ButtonHelper(this.btnLeft3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btnLeft3).wait(730).to({_off:false},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Left = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Left
	this.ButtonLeft2 = new lib.ButtonLeft();
	this.ButtonLeft2.name = "ButtonLeft2";
	this.ButtonLeft2.parent = this;
	this.ButtonLeft2.setTransform(94,367.4);
	this.ButtonLeft2._off = true;
	new cjs.ButtonHelper(this.ButtonLeft2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.ButtonLeft2).wait(491).to({_off:false},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Ex2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ex2
	this.btnEx2 = new lib.ButtonLeft();
	this.btnEx2.name = "btnEx2";
	this.btnEx2.parent = this;
	this.btnEx2.setTransform(99.4,335.1);
	this.btnEx2._off = true;
	new cjs.ButtonHelper(this.btnEx2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btnEx2).wait(3410).to({_off:false},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Ex1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Ex1
	this.btnEx1 = new lib.ButtonDown();
	this.btnEx1.name = "btnEx1";
	this.btnEx1.parent = this;
	this.btnEx1.setTransform(653,631.2);
	this.btnEx1._off = true;
	new cjs.ButtonHelper(this.btnEx1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btnEx1).wait(3150).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Down_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Down
	this.btnDown8 = new lib.ButtonDown();
	this.btnDown8.name = "btnDown8";
	this.btnDown8.parent = this;
	this.btnDown8.setTransform(641.8,534.2);
	this.btnDown8._off = true;
	new cjs.ButtonHelper(this.btnDown8, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btnDown8).wait(2230).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Down_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Down
	this.btnDown6 = new lib.ButtonDown();
	this.btnDown6.name = "btnDown6";
	this.btnDown6.parent = this;
	this.btnDown6.setTransform(668.7,623.9);
	this.btnDown6._off = true;
	new cjs.ButtonHelper(this.btnDown6, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btnDown6).wait(1150).to({_off:false},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Down_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Down
	this.btnDown5 = new lib.ButtonDown();
	this.btnDown5.name = "btnDown5";
	this.btnDown5.parent = this;
	this.btnDown5.setTransform(664.9,607.1);
	this.btnDown5._off = true;
	new cjs.ButtonHelper(this.btnDown5, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btnDown5).wait(960).to({_off:false},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Down_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Down
	this.btnDown3 = new lib.ButtonDown();
	this.btnDown3.name = "btnDown3";
	this.btnDown3.parent = this;
	this.btnDown3.setTransform(621.1,633.9);
	this.btnDown3._off = true;
	new cjs.ButtonHelper(this.btnDown3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btnDown3).wait(730).to({_off:false},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Down = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Down
	this.btnDown2 = new lib.ButtonDown();
	this.btnDown2.name = "btnDown2";
	this.btnDown2.parent = this;
	this.btnDown2.setTransform(636.4,630);
	this.btnDown2._off = true;
	new cjs.ButtonHelper(this.btnDown2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btnDown2).wait(491).to({_off:false},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Coin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2849 = function() {
		playSound("Coinwav");
	}
	this.frame_2909 = function() {
		playSound("Coinwav");
	}
	this.frame_2959 = function() {
		playSound("Coinwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2849).call(this.frame_2849).wait(60).call(this.frame_2909).wait(50).call(this.frame_2959).wait(1));

	// Coin
	this.instance = new lib.Coin_1();
	this.instance.parent = this;
	this.instance.setTransform(628.1,365.4);
	this.instance._off = true;

	this.instance_1 = new lib.Coin();
	this.instance_1.parent = this;
	this.instance_1.setTransform(600,337,0.176,0.176);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},2790).to({state:[{t:this.instance_1}]},59).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},58).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},49).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2790).to({_off:false},0).to({_off:true},59).wait(1).to({_off:false,x:628},0).wait(60).to({x:627.9},0).wait(50));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_ButtonUp4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ButtonUp4
	this.Btn4Up = new lib.ButtonUp();
	this.Btn4Up.name = "Btn4Up";
	this.Btn4Up.parent = this;
	this.Btn4Up.setTransform(633.2,81);
	new cjs.ButtonHelper(this.Btn4Up, 0, 1, 1);

	this.btnUp4_2 = new lib.ButtonUp();
	this.btnUp4_2.name = "btnUp4_2";
	this.btnUp4_2.parent = this;
	this.btnUp4_2.setTransform(660.6,84.2);
	new cjs.ButtonHelper(this.btnUp4_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.Btn4Up}]},150).to({state:[]},1).to({state:[{t:this.btnUp4_2}]},209).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_ButtonRight = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ButtonRight
	this.Btn4Right = new lib.ButtonRight();
	this.Btn4Right.name = "Btn4Right";
	this.Btn4Right.parent = this;
	this.Btn4Right.setTransform(1193,387.2);
	new cjs.ButtonHelper(this.Btn4Right, 0, 1, 1);

	this.btnRight4_2 = new lib.ButtonRight();
	this.btnRight4_2.name = "btnRight4_2";
	this.btnRight4_2.parent = this;
	this.btnRight4_2.setTransform(1196.6,395);
	new cjs.ButtonHelper(this.btnRight4_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.Btn4Right}]},150).to({state:[]},1).to({state:[{t:this.btnRight4_2}]},209).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_ButtonNext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ButtonNext
	this.btnNext = new lib.NextButton();
	this.btnNext.name = "btnNext";
	this.btnNext.parent = this;
	this.btnNext.setTransform(961.8,338.5,1,1,0,0,0,0,0.8);
	this.btnNext._off = true;
	new cjs.ButtonHelper(this.btnNext, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.btnNext).wait(129).to({_off:false},0).to({_off:true},1).wait(19).to({_off:false,regY:0,x:1031.3,y:331.3},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_ButtonDown4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// ButtonDown4
	this.Btn4Down = new lib.ButtonDown();
	this.Btn4Down.name = "Btn4Down";
	this.Btn4Down.parent = this;
	this.Btn4Down.setTransform(633.2,639);
	new cjs.ButtonHelper(this.Btn4Down, 0, 1, 1);

	this.btnDown4_2 = new lib.ButtonDown();
	this.btnDown4_2.name = "btnDown4_2";
	this.btnDown4_2.parent = this;
	this.btnDown4_2.setTransform(668.4,635.3);
	new cjs.ButtonHelper(this.btnDown4_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.Btn4Down}]},150).to({state:[]},1).to({state:[{t:this.btnDown4_2}]},209).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_btn1Right = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn1Right
	this.btnRight1 = new lib.ButtonRight();
	this.btnRight1.name = "btnRight1";
	this.btnRight1.parent = this;
	this.btnRight1.setTransform(1187.2,396.3);
	this.btnRight1._off = true;
	new cjs.ButtonHelper(this.btnRight1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btnRight1).wait(261).to({_off:false},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_btn1Down = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// btn1Down
	this.btn1Dowb = new lib.ButtonDown();
	this.btn1Dowb.name = "btn1Dowb";
	this.btn1Dowb.parent = this;
	this.btn1Dowb.setTransform(663,630);
	this.btn1Dowb._off = true;
	new cjs.ButtonHelper(this.btn1Dowb, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.btn1Dowb).wait(261).to({_off:false},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_AgainBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// AgainBtn
	this.Replaybtn1 = new lib.Replaybtn();
	this.Replaybtn1.name = "Replaybtn1";
	this.Replaybtn1.parent = this;
	this.Replaybtn1.setTransform(662.3,428.8);
	this.Replaybtn1._off = true;
	new cjs.ButtonHelper(this.Replaybtn1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.Replaybtn1).wait(3110).to({_off:false},0).wait(3).to({y:483.4},0).wait(2).to({y:450.9},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.AnimationProject2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.getNumChildren() - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		this.CharacterWalkDownMC = this.Player.CharacterWalkDownMC;
		this.CharacterWalkLeftMC = this.Player.CharacterWalkLeftMC;
		this.btnPlayMC = this.playbutton.btnPlayMC;
		this.stop();
		
		
		this.coin = 0;
		this.treasure1 = 0;
		this.treasure2 = 0;
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.btnPlayMC.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			this.gotoAndPlay(1);
		}
	}
	this.frame_1 = function() {
		this.CharacterWalkDownMC = undefined;this.CharacterWalkLeftMC = undefined;
		this.coin = 0;
		this.treasure1 = 0;
		this.treasure2 = 0;
	}
	this.frame_129 = function() {
		this.btnNext = this.ButtonNext.btnNext;
		this.stop();
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.btnNext.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_3.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_3()
		{
			this.gotoAndPlay(130);
		}
	}
	this.frame_130 = function() {
		this.btnNext = undefined;
	}
	this.frame_149 = function() {
		this.btnNext = this.ButtonNext.btnNext;
		this.stop();
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.btnNext.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_4.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_4()
		{
			this.gotoAndPlay(150);
		}
	}
	this.frame_150 = function() {
		this.btnNext = undefined;this.Btn4Down = this.ButtonDown4.Btn4Down;
		this.Btn4Up = this.ButtonUp4.Btn4Up;
		this.Btn4Right = this.ButtonRight.Btn4Right;
		this.stop();
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		//Up
		this.Btn4Up.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_2.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_2()
		{
			this.gotoAndPlay(151);
		}
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.Btn4Right.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_15.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_15()
		{
			this.gotoAndPlay(1250);
		}
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.Btn4Down.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_20.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_20()
		{
			this.gotoAndPlay(1760);
		}
	}
	this.frame_151 = function() {
		this.Btn4Right = undefined;this.Btn4Up = undefined;this.Btn4Down = undefined;
	}
	this.frame_261 = function() {
		this.btn1Dowb = this.btn1Down.btn1Dowb;
		this.btnRight1 = this.btn1Right.btnRight1;
		this.stop();
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.btn1Dowb.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_5.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_5()
		{
			this.gotoAndPlay(262);
		}
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.btnRight1.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_7.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_7()
		{/*
			if(this.coin == 0)
			{
				this.coin = 1;
				this.gotoAndPlay(150);		
			}
			else
			{
				this.gotoAndPlay(361);
			}*/
			this.gotoAndPlay(361);
		}
	}
	this.frame_262 = function() {
		this.btnRight1 = undefined;this.btn1Dowb = undefined;this.CharacterWalkDownMC = this.Player.CharacterWalkDownMC;
	}
	this.frame_300 = function() {
		this.CharacterWalkDownMC = undefined;this.CharacterWalkDownMC = this.Player.CharacterWalkDownMC;
	}
	this.frame_301 = function() {
		this.CharacterWalkDownMC = undefined;this.CharacterWalkDownMC = this.Player.CharacterWalkDownMC;
	}
	this.frame_360 = function() {
		this.CharacterWalkDownMC = undefined;this.btnDown4_2 = this.ButtonDown4.btnDown4_2;
		this.btnUp4_2 = this.ButtonUp4.btnUp4_2;
		this.btnRight4_2 = this.ButtonRight.btnRight4_2;
		this.stop();
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.btnUp4_2.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_6.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_6()
		{
			this.gotoAndPlay(151);
		}
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.btnRight4_2.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_16.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_16()
		{
			this.gotoAndPlay(1250);
		}
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.btnDown4_2.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_21.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_21()
		{
			this.gotoAndPlay(1760);
		}
	}
	this.frame_361 = function() {
		this.btnRight4_2 = undefined;this.btnUp4_2 = undefined;this.btnDown4_2 = undefined;
	}
	this.frame_419 = function() {
		if(this.coin == 0)
			{
				this.coin = 1;
				this.gotoAndPlay(2790);		
			}
			else
			{
				this.gotoAndPlay(420);
			}
	}
	this.frame_491 = function() {
		this.btnUp2 = this.Up.btnUp2;
		this.btnRight2 = this.Right.btnRight2;
		this.btnDown2 = this.Down.btnDown2;
		this.ButtonLeft2 = this.Left.ButtonLeft2;
		this.stop();
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.ButtonLeft2.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_8.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_8()
		{
			this.gotoAndPlay(492);
		}
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.btnRight2.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_9.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_9()
		{
			this.gotoAndPlay(600);
		}
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.btnDown2.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_12.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_12()
		{
			this.gotoAndPlay(865);
		}
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.btnUp2.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_36.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_36()
		{
			this.gotoAndPlay(2960);
		}
	}
	this.frame_492 = function() {
		this.ButtonLeft2 = undefined;this.btnDown2 = undefined;this.btnRight2 = undefined;this.btnUp2 = undefined;this.CharacterWalkLeftMC = this.Player.CharacterWalkLeftMC;
	}
	this.frame_550 = function() {
		this.CharacterWalkLeftMC = undefined;this.CharacterWalkLeftMC = this.Player.CharacterWalkLeftMC;
	}
	this.frame_551 = function() {
		this.CharacterWalkLeftMC = undefined;this.CharacterWalkLeftMC = this.Player.CharacterWalkLeftMC;
	}
	this.frame_599 = function() {
		this.gotoAndPlay(261);
	}
	this.frame_600 = function() {
		this.CharacterWalkLeftMC = undefined;
	}
	this.frame_730 = function() {
		this.btnDown3 = this.Down_1.btnDown3;
		this.btnLeft3 = this.Left_1.btnLeft3;
		this.stop();
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.btnLeft3.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_10.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_10()
		{/*
			if(this.coin == 0)
			{
				this.coin = 1;
				this.gotoAndPlay(150);		
			}
			else
			{
				this.gotoAndPlay(731);
			}*/
			this.gotoAndPlay(731);
		}
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.btnDown3.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_13.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_13()
		{
			this.gotoAndPlay(1050);
		}
	}
	this.frame_731 = function() {
		this.btnLeft3 = undefined;this.btnDown3 = undefined;this.CharacterWalkLeftMC = this.Player.CharacterWalkLeftMC;
	}
	this.frame_799 = function() {
		if(this.coin == 0)
			{
				this.coin = 1;
				this.gotoAndPlay(2850);		
			}
			else
			{
				this.gotoAndPlay(800);
			}
	}
	this.frame_800 = function() {
		this.CharacterWalkLeftMC = undefined;this.CharacterWalkLeftMC = this.Player.CharacterWalkLeftMC;
	}
	this.frame_801 = function() {
		this.CharacterWalkLeftMC = undefined;this.CharacterWalkLeftMC = this.Player.CharacterWalkLeftMC;
	}
	this.frame_864 = function() {
		this.gotoAndPlay(491);
	}
	this.frame_865 = function() {
		this.CharacterWalkLeftMC = undefined;this.CharacterWalkDownMC = this.Player.CharacterWalkDownMC;
	}
	this.frame_866 = function() {
		this.CharacterWalkDownMC = undefined;this.CharacterWalkDownMC = this.Player.CharacterWalkDownMC;
	}
	this.frame_910 = function() {
		this.CharacterWalkDownMC = undefined;this.CharacterWalkDownMC = this.Player.CharacterWalkDownMC;
	}
	this.frame_911 = function() {
		this.CharacterWalkDownMC = undefined;this.CharacterWalkDownMC = this.Player.CharacterWalkDownMC;
	}
	this.frame_960 = function() {
		this.CharacterWalkDownMC = undefined;this.btnUp5 = this.Up_1.btnUp5;
		this.btnRight5 = this.Right_1.btnRight5;
		this.btnDown5 = this.Down_2.btnDown5;
		this.btnLeft5 = this.Left_2.btnLeft5;
		this.stop();
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.btnUp5.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_11.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_11()
		{/*
			if(this.coin == 0)
			{
				this.coin = 1;
				this.gotoAndPlay(150);		
			}
			else
			{
				this.gotoAndPlay(961);
			}*/
			this.gotoAndPlay(961);
		}
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.btnLeft5.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_17.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_17()
		{
			this.gotoAndPlay(1380);
		}
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.btnRight5.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_18.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_18()
		{
			this.gotoAndPlay(1500);
		}
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.btnDown5.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_29.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_29()
		{
			this.gotoAndPlay(2600);
		}
	}
	this.frame_961 = function() {
		this.btnLeft5 = undefined;this.btnDown5 = undefined;this.btnRight5 = undefined;this.btnUp5 = undefined;
	}
	this.frame_1009 = function() {
		if(this.coin == 0)
			{
				this.coin = 1;
				this.gotoAndPlay(2910);		
			}
			else
			{
				this.gotoAndPlay(1010);
			}
	}
	this.frame_1049 = function() {
		this.gotoAndPlay(491);
	}
	this.frame_1050 = function() {
		this.CharacterWalkDownMC = this.Player.CharacterWalkDownMC;
	}
	this.frame_1051 = function() {
		this.CharacterWalkDownMC = undefined;this.CharacterWalkDownMC = this.Player.CharacterWalkDownMC;
	}
	this.frame_1100 = function() {
		this.CharacterWalkDownMC = undefined;this.CharacterWalkDownMC = this.Player.CharacterWalkDownMC;
	}
	this.frame_1101 = function() {
		this.CharacterWalkDownMC = undefined;this.CharacterWalkDownMC = this.Player.CharacterWalkDownMC;
	}
	this.frame_1150 = function() {
		this.CharacterWalkDownMC = undefined;this.btnUp6 = this.Up_2.btnUp6;
		this.btnRight6 = this.Right_2.btnRight6;
		this.btnDown6 = this.Down_3.btnDown6;
		this.btnLeft6 = this.Left_3.btnLeft6;
		this.stop();
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.btnUp6.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_14.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_14()
		{
			this.gotoAndPlay(1151);
		}
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.btnLeft6.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_19.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_19()
		{
			this.gotoAndPlay(1630);
		}
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.btnDown6.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_24.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_24()
		{
			this.gotoAndPlay(1930);
		}
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.btnRight6.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_44.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_44()
		{
			this.gotoAndPlay(3290);
		}
	}
	this.frame_1151 = function() {
		this.btnLeft6 = undefined;this.btnDown6 = undefined;this.btnRight6 = undefined;this.btnUp6 = undefined;
	}
	this.frame_1249 = function() {
		this.gotoAndPlay(730);
	}
	this.frame_1379 = function() {
		this.gotoAndPlay(960);
	}
	this.frame_1380 = function() {
		this.CharacterWalkLeftMC = this.Player.CharacterWalkLeftMC;
	}
	this.frame_1381 = function() {
		this.CharacterWalkLeftMC = undefined;this.CharacterWalkLeftMC = this.Player.CharacterWalkLeftMC;
	}
	this.frame_1440 = function() {
		this.CharacterWalkLeftMC = undefined;this.CharacterWalkLeftMC = this.Player.CharacterWalkLeftMC;
	}
	this.frame_1441 = function() {
		this.CharacterWalkLeftMC = undefined;this.CharacterWalkLeftMC = this.Player.CharacterWalkLeftMC;
	}
	this.frame_1499 = function() {
		this.gotoAndPlay(360);
	}
	this.frame_1500 = function() {
		this.CharacterWalkLeftMC = undefined;
	}
	this.frame_1629 = function() {
		this.gotoAndPlay(1150);
	}
	this.frame_1630 = function() {
		this.CharacterWalkLeftMC = this.Player.CharacterWalkLeftMC;
	}
	this.frame_1631 = function() {
		this.CharacterWalkLeftMC = undefined;this.CharacterWalkLeftMC = this.Player.CharacterWalkLeftMC;
	}
	this.frame_1695 = function() {
		this.CharacterWalkLeftMC = undefined;this.CharacterWalkLeftMC = this.Player.CharacterWalkLeftMC;
	}
	this.frame_1696 = function() {
		this.CharacterWalkLeftMC = undefined;this.CharacterWalkLeftMC = this.Player.CharacterWalkLeftMC;
	}
	this.frame_1759 = function() {
		this.gotoAndPlay(960);
	}
	this.frame_1760 = function() {
		this.CharacterWalkLeftMC = undefined;this.CharacterWalkDownMC = this.Player.CharacterWalkDownMC;
	}
	this.frame_1761 = function() {
		this.CharacterWalkDownMC = undefined;this.CharacterWalkDownMC = this.Player.CharacterWalkDownMC;
	}
	this.frame_1800 = function() {
		this.CharacterWalkDownMC = undefined;this.CharacterWalkDownMC = this.Player.CharacterWalkDownMC;
	}
	this.frame_1801 = function() {
		this.CharacterWalkDownMC = undefined;this.CharacterWalkDownMC = this.Player.CharacterWalkDownMC;
	}
	this.frame_1840 = function() {
		this.CharacterWalkDownMC = undefined;this.btnUp7 = this.Up_3.btnUp7;
		this.btnRight7 = this.Right_3.btnRight7;
		this.stop();
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.btnUp7.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_22.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_22()
		{
			this.gotoAndPlay(1840);
		}
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.btnRight7.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_25.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_25()
		{
			this.gotoAndPlay(2100);
		}
	}
	this.frame_1929 = function() {
		this.gotoAndPlay(360);
	}
	this.frame_1930 = function() {
		this.CharacterWalkDownMC = this.Player.CharacterWalkDownMC;
	}
	this.frame_1931 = function() {
		this.CharacterWalkDownMC = undefined;this.CharacterWalkDownMC = this.Player.CharacterWalkDownMC;
	}
	this.frame_1970 = function() {
		this.CharacterWalkDownMC = undefined;this.CharacterWalkDownMC = this.Player.CharacterWalkDownMC;
	}
	this.frame_1971 = function() {
		this.CharacterWalkDownMC = undefined;this.CharacterWalkDownMC = this.Player.CharacterWalkDownMC;
	}
	this.frame_2010 = function() {
		this.CharacterWalkDownMC = undefined;this.btnUp9 = this.Up_5.btnUp9;
		this.btnLeft9 = this.Left_5.btnLeft9;
		this.stop();
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.btnUp9.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_23.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_23()
		{
			this.gotoAndPlay(2010);
		}
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.btnLeft9.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_27.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_27()
		{
			this.gotoAndPlay(2340);
		}
	}
	this.frame_2099 = function() {
		this.gotoAndPlay(1150);
	}
	this.frame_2230 = function() {
		this.btnUp8 = this.Up_4.btnUp8;
		this.btnRight8 = this.Right_4.btnRight8;
		this.btnDown8 = this.Down_4.btnDown8;
		this.btnLeft8 = this.Left_4.btnLeft8;
		this.stop();
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.btnLeft8.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_26.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_26()
		{
			this.gotoAndPlay(2231);
		}
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.btnRight8.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_28.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_28()
		{
			this.gotoAndPlay(2470);
		}
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.btnUp8.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_30.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_30()
		{
			this.gotoAndPlay(2700);
		}
		
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.btnDown8.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_35.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_35()
		{
			this.gotoAndPlay(3000);
		}
	}
	this.frame_2231 = function() {
		this.CharacterWalkLeftMC = this.Player.CharacterWalkLeftMC;
	}
	this.frame_2290 = function() {
		this.CharacterWalkLeftMC = undefined;this.CharacterWalkLeftMC = this.Player.CharacterWalkLeftMC;
	}
	this.frame_2291 = function() {
		this.CharacterWalkLeftMC = undefined;this.CharacterWalkLeftMC = this.Player.CharacterWalkLeftMC;
	}
	this.frame_2339 = function() {
		this.gotoAndPlay(1840);
	}
	this.frame_2340 = function() {
		this.CharacterWalkLeftMC = undefined;this.CharacterWalkLeftMC = this.Player.CharacterWalkLeftMC;
	}
	this.frame_2341 = function() {
		this.CharacterWalkLeftMC = undefined;this.CharacterWalkLeftMC = this.Player.CharacterWalkLeftMC;
	}
	this.frame_2410 = function() {
		this.CharacterWalkLeftMC = undefined;this.CharacterWalkLeftMC = this.Player.CharacterWalkLeftMC;
	}
	this.frame_2411 = function() {
		this.CharacterWalkLeftMC = undefined;this.CharacterWalkLeftMC = this.Player.CharacterWalkLeftMC;
	}
	this.frame_2469 = function() {
		this.gotoAndPlay(2230);
	}
	this.frame_2470 = function() {
		this.CharacterWalkLeftMC = undefined;
	}
	this.frame_2599 = function() {
		this.gotoAndPlay(2010);
	}
	this.frame_2600 = function() {
		this.CharacterWalkDownMC = this.Player.CharacterWalkDownMC;
	}
	this.frame_2601 = function() {
		this.CharacterWalkDownMC = undefined;this.CharacterWalkDownMC = this.Player.CharacterWalkDownMC;
	}
	this.frame_2640 = function() {
		this.CharacterWalkDownMC = undefined;this.CharacterWalkDownMC = this.Player.CharacterWalkDownMC;
	}
	this.frame_2641 = function() {
		this.CharacterWalkDownMC = undefined;this.CharacterWalkDownMC = this.Player.CharacterWalkDownMC;
	}
	this.frame_2699 = function() {
		this.gotoAndPlay(2230);
	}
	this.frame_2700 = function() {
		this.CharacterWalkDownMC = undefined;
	}
	this.frame_2789 = function() {
		this.gotoAndPlay(960);
	}
	this.frame_2849 = function() {
		this.gotoAndPlay(491);
	}
	this.frame_2850 = function() {
		this.CharacterWalkLeftMC = this.Player.CharacterWalkLeftMC;
	}
	this.frame_2851 = function() {
		this.CharacterWalkLeftMC = undefined;this.CharacterWalkLeftMC = this.Player.CharacterWalkLeftMC;
	}
	this.frame_2909 = function() {
		this.gotoAndPlay(491);
	}
	this.frame_2910 = function() {
		this.CharacterWalkLeftMC = undefined;
	}
	this.frame_2959 = function() {
		this.gotoAndPlay(491);
	}
	this.frame_2999 = function() {
		if(this.treasure1 == 0)
		{
			this.treasure1 = 1;
			this.gotoAndPlay(3116);	
		}
		else
		{
			this.gotoAndPlay(3240);
		}
	}
	this.frame_3000 = function() {
		this.CharacterWalkDownMC = this.Player.CharacterWalkDownMC;
	}
	this.frame_3001 = function() {
		this.CharacterWalkDownMC = undefined;this.CharacterWalkDownMC = this.Player.CharacterWalkDownMC;
	}
	this.frame_3050 = function() {
		this.CharacterWalkDownMC = undefined;
	}
	this.frame_3109 = function() {
		if(this.coin == 1 && this.treasure1 == 0 && this.treasure2 == 0)
		{
			this.gotoAndPlay(3111);		
		}
		else if(this.coin == 1 && this.treasure1 == 1 && this.treasure2 == 0)
		{
			this.gotoAndPlay(3112);
		}
		else if(this.coin == 1 && this.treasure1 == 1 && this.treasure2 == 1)
		{
			this.gotoAndPlay(3113);
		}
		else if(this.coin == 1 && this.treasure1 == 0 && this.treasure2 == 1)
		{
			this.gotoAndPlay(3114);
		}
		else if(this.coin == 0 && this.treasure1 == 0 && this.treasure2 == 1)
		{
			this.gotoAndPlay(3115);
		}
		else
		{
			this.gotoAndPlay(3110);
		}
		/*
		if(this.coin == 1 && this.treasure1 == 1 && this.treasure2 == 0)
		{
			this.gotoAndPlay(3112);		
		}
		else
		{
			this.gotoAndPlay(3110);
		}
		
		if(this.coin == 1 && this.treasure1 == 1 && this.treasure2 == 1)
		{
			this.gotoAndPlay(3113);
		}
		else
		{
			this.gotoAndPlay(3110);
		}
		
		if(this.coin == 1 && this.treasure1 == 0 && this.treasure2 == 1)
		{
			this.gotoAndPlay(3114);
		}
		else
		{
			this.gotoAndPlay(3110);
		}
		
		if(this.coin == 0 && this.treasure1 == 0 && this.treasure2 == 1)
		{
			this.gotoAndPlay(3115);
		}
		else
		{
			this.gotoAndPlay(3110);
		}
		
		if(this.coin == 0 && this.treasure1 == 0 && this.treasure2 == 0)
		{
			this.gotoAndPlay(3110);		
		}
		else
		{
			this.gotoAndPlay(3110);
		}*/
	}
	this.frame_3110 = function() {
		this.Replaybtn1 = this.AgainBtn.Replaybtn1;
		this.stop();
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.Replaybtn1.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_34.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_34()
		{
			this.gotoAndPlay(1);
		}
	}
	this.frame_3111 = function() {
		this.Replaybtn1 = undefined;this.Replaybtn1 = this.AgainBtn.Replaybtn1;
		this.stop();
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.Replaybtn1.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_37.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_37()
		{
			this.gotoAndPlay(1);
		}
	}
	this.frame_3112 = function() {
		this.Replaybtn1 = undefined;this.Replaybtn1 = this.AgainBtn.Replaybtn1;
		this.stop();
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.Replaybtn1.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_42.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_42()
		{
			this.gotoAndPlay(1);
		}
	}
	this.frame_3113 = function() {
		this.Replaybtn1 = undefined;this.Replaybtn1 = this.AgainBtn.Replaybtn1;
		this.stop();
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.Replaybtn1.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_38.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_38()
		{
			this.gotoAndPlay(1);
		}
	}
	this.frame_3114 = function() {
		this.Replaybtn1 = undefined;this.Replaybtn1 = this.AgainBtn.Replaybtn1;
		this.stop();
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.Replaybtn1.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_39.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_39()
		{
			this.gotoAndPlay(1);
		}
	}
	this.frame_3115 = function() {
		this.Replaybtn1 = undefined;this.Replaybtn1 = this.AgainBtn.Replaybtn1;
		this.stop();
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.Replaybtn1.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_40.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_40()
		{
			this.gotoAndPlay(1);
		}
	}
	this.frame_3116 = function() {
		this.Replaybtn1 = undefined;
	}
	this.frame_3150 = function() {
		this.btnEx1 = this.Ex1.btnEx1;
		this.stop();
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.btnEx1.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_41.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_41()
		{
			this.gotoAndPlay(3151);
		}
	}
	this.frame_3239 = function() {
		this.gotoAndPlay(491);
	}
	this.frame_3289 = function() {
		this.gotoAndPlay(3150);
	}
	this.frame_3349 = function() {
		if(this.treasure2 == 0)
		{
			this.treasure2 = 1;
			this.gotoAndPlay(3350);	
		}
		else
		{
			this.gotoAndPlay(3540);
		}
	}
	this.frame_3410 = function() {
		this.btnEx2 = this.Ex2.btnEx2;
		this.stop();
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.btnEx2.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_43.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_43()
		{
			this.gotoAndPlay(3411);
		}
	}
	this.frame_3411 = function() {
		this.btnEx2 = undefined;
	}
	this.frame_3539 = function() {
		this.gotoAndPlay(1150);
	}
	this.frame_3599 = function() {
		this.___loopingOver___ = true;
		this.gotoAndPlay(3410);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(128).call(this.frame_129).wait(1).call(this.frame_130).wait(19).call(this.frame_149).wait(1).call(this.frame_150).wait(1).call(this.frame_151).wait(110).call(this.frame_261).wait(1).call(this.frame_262).wait(38).call(this.frame_300).wait(1).call(this.frame_301).wait(59).call(this.frame_360).wait(1).call(this.frame_361).wait(58).call(this.frame_419).wait(72).call(this.frame_491).wait(1).call(this.frame_492).wait(58).call(this.frame_550).wait(1).call(this.frame_551).wait(48).call(this.frame_599).wait(1).call(this.frame_600).wait(130).call(this.frame_730).wait(1).call(this.frame_731).wait(68).call(this.frame_799).wait(1).call(this.frame_800).wait(1).call(this.frame_801).wait(63).call(this.frame_864).wait(1).call(this.frame_865).wait(1).call(this.frame_866).wait(44).call(this.frame_910).wait(1).call(this.frame_911).wait(49).call(this.frame_960).wait(1).call(this.frame_961).wait(48).call(this.frame_1009).wait(40).call(this.frame_1049).wait(1).call(this.frame_1050).wait(1).call(this.frame_1051).wait(49).call(this.frame_1100).wait(1).call(this.frame_1101).wait(49).call(this.frame_1150).wait(1).call(this.frame_1151).wait(98).call(this.frame_1249).wait(130).call(this.frame_1379).wait(1).call(this.frame_1380).wait(1).call(this.frame_1381).wait(59).call(this.frame_1440).wait(1).call(this.frame_1441).wait(58).call(this.frame_1499).wait(1).call(this.frame_1500).wait(129).call(this.frame_1629).wait(1).call(this.frame_1630).wait(1).call(this.frame_1631).wait(64).call(this.frame_1695).wait(1).call(this.frame_1696).wait(63).call(this.frame_1759).wait(1).call(this.frame_1760).wait(1).call(this.frame_1761).wait(39).call(this.frame_1800).wait(1).call(this.frame_1801).wait(39).call(this.frame_1840).wait(89).call(this.frame_1929).wait(1).call(this.frame_1930).wait(1).call(this.frame_1931).wait(39).call(this.frame_1970).wait(1).call(this.frame_1971).wait(39).call(this.frame_2010).wait(89).call(this.frame_2099).wait(131).call(this.frame_2230).wait(1).call(this.frame_2231).wait(59).call(this.frame_2290).wait(1).call(this.frame_2291).wait(48).call(this.frame_2339).wait(1).call(this.frame_2340).wait(1).call(this.frame_2341).wait(69).call(this.frame_2410).wait(1).call(this.frame_2411).wait(58).call(this.frame_2469).wait(1).call(this.frame_2470).wait(129).call(this.frame_2599).wait(1).call(this.frame_2600).wait(1).call(this.frame_2601).wait(39).call(this.frame_2640).wait(1).call(this.frame_2641).wait(58).call(this.frame_2699).wait(1).call(this.frame_2700).wait(89).call(this.frame_2789).wait(60).call(this.frame_2849).wait(1).call(this.frame_2850).wait(1).call(this.frame_2851).wait(58).call(this.frame_2909).wait(1).call(this.frame_2910).wait(49).call(this.frame_2959).wait(40).call(this.frame_2999).wait(1).call(this.frame_3000).wait(1).call(this.frame_3001).wait(49).call(this.frame_3050).wait(59).call(this.frame_3109).wait(1).call(this.frame_3110).wait(1).call(this.frame_3111).wait(1).call(this.frame_3112).wait(1).call(this.frame_3113).wait(1).call(this.frame_3114).wait(1).call(this.frame_3115).wait(1).call(this.frame_3116).wait(34).call(this.frame_3150).wait(89).call(this.frame_3239).wait(50).call(this.frame_3289).wait(60).call(this.frame_3349).wait(61).call(this.frame_3410).wait(1).call(this.frame_3411).wait(128).call(this.frame_3539).wait(60).call(this.frame_3599).wait(1));

	// btn1Down_obj_
	this.btn1Down = new lib.Scene_1_btn1Down();
	this.btn1Down.name = "btn1Down";
	this.btn1Down.parent = this;
	this.btn1Down.depth = 0;
	this.btn1Down.isAttachedToCamera = 0
	this.btn1Down.isAttachedToMask = 0
	this.btn1Down.layerDepth = 0
	this.btn1Down.layerIndex = 0
	this.btn1Down.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.btn1Down).wait(262).to({_off:true},1).wait(3337));

	// btn1Right_obj_
	this.btn1Right = new lib.Scene_1_btn1Right();
	this.btn1Right.name = "btn1Right";
	this.btn1Right.parent = this;
	this.btn1Right.depth = 0;
	this.btn1Right.isAttachedToCamera = 0
	this.btn1Right.isAttachedToMask = 0
	this.btn1Right.layerDepth = 0
	this.btn1Right.layerIndex = 1
	this.btn1Right.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.btn1Right).wait(262).to({_off:true},1).wait(3337));

	// Up_obj_
	this.Up = new lib.Scene_1_Up();
	this.Up.name = "Up";
	this.Up.parent = this;
	this.Up.depth = 0;
	this.Up.isAttachedToCamera = 0
	this.Up.isAttachedToMask = 0
	this.Up.layerDepth = 0
	this.Up.layerIndex = 2
	this.Up.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Up).wait(492).to({_off:true},1).wait(3107));

	// Right_obj_
	this.Right = new lib.Scene_1_Right();
	this.Right.name = "Right";
	this.Right.parent = this;
	this.Right.depth = 0;
	this.Right.isAttachedToCamera = 0
	this.Right.isAttachedToMask = 0
	this.Right.layerDepth = 0
	this.Right.layerIndex = 3
	this.Right.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Right).wait(492).to({_off:true},1).wait(3107));

	// Down_obj_
	this.Down = new lib.Scene_1_Down();
	this.Down.name = "Down";
	this.Down.parent = this;
	this.Down.depth = 0;
	this.Down.isAttachedToCamera = 0
	this.Down.isAttachedToMask = 0
	this.Down.layerDepth = 0
	this.Down.layerIndex = 4
	this.Down.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Down).wait(492).to({_off:true},1).wait(3107));

	// Left_obj_
	this.Left = new lib.Scene_1_Left();
	this.Left.name = "Left";
	this.Left.parent = this;
	this.Left.depth = 0;
	this.Left.isAttachedToCamera = 0
	this.Left.isAttachedToMask = 0
	this.Left.layerDepth = 0
	this.Left.layerIndex = 5
	this.Left.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Left).wait(492).to({_off:true},1).wait(3107));

	// Down_obj_
	this.Down_1 = new lib.Scene_1_Down_1();
	this.Down_1.name = "Down_1";
	this.Down_1.parent = this;
	this.Down_1.depth = 0;
	this.Down_1.isAttachedToCamera = 0
	this.Down_1.isAttachedToMask = 0
	this.Down_1.layerDepth = 0
	this.Down_1.layerIndex = 6
	this.Down_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Down_1).wait(731).to({_off:true},1).wait(2868));

	// Left_obj_
	this.Left_1 = new lib.Scene_1_Left_1();
	this.Left_1.name = "Left_1";
	this.Left_1.parent = this;
	this.Left_1.depth = 0;
	this.Left_1.isAttachedToCamera = 0
	this.Left_1.isAttachedToMask = 0
	this.Left_1.layerDepth = 0
	this.Left_1.layerIndex = 7
	this.Left_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Left_1).wait(731).to({_off:true},1).wait(2868));

	// ButtonDown4_obj_
	this.ButtonDown4 = new lib.Scene_1_ButtonDown4();
	this.ButtonDown4.name = "ButtonDown4";
	this.ButtonDown4.parent = this;
	this.ButtonDown4.depth = 0;
	this.ButtonDown4.isAttachedToCamera = 0
	this.ButtonDown4.isAttachedToMask = 0
	this.ButtonDown4.layerDepth = 0
	this.ButtonDown4.layerIndex = 8
	this.ButtonDown4.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.ButtonDown4).wait(361).to({_off:true},1).wait(3238));

	// ButtonUp4_obj_
	this.ButtonUp4 = new lib.Scene_1_ButtonUp4();
	this.ButtonUp4.name = "ButtonUp4";
	this.ButtonUp4.parent = this;
	this.ButtonUp4.depth = 0;
	this.ButtonUp4.isAttachedToCamera = 0
	this.ButtonUp4.isAttachedToMask = 0
	this.ButtonUp4.layerDepth = 0
	this.ButtonUp4.layerIndex = 9
	this.ButtonUp4.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.ButtonUp4).wait(361).to({_off:true},1).wait(3238));

	// ButtonRight_obj_
	this.ButtonRight = new lib.Scene_1_ButtonRight();
	this.ButtonRight.name = "ButtonRight";
	this.ButtonRight.parent = this;
	this.ButtonRight.depth = 0;
	this.ButtonRight.isAttachedToCamera = 0
	this.ButtonRight.isAttachedToMask = 0
	this.ButtonRight.layerDepth = 0
	this.ButtonRight.layerIndex = 10
	this.ButtonRight.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.ButtonRight).wait(361).to({_off:true},1).wait(3238));

	// Up_obj_
	this.Up_1 = new lib.Scene_1_Up_1();
	this.Up_1.name = "Up_1";
	this.Up_1.parent = this;
	this.Up_1.depth = 0;
	this.Up_1.isAttachedToCamera = 0
	this.Up_1.isAttachedToMask = 0
	this.Up_1.layerDepth = 0
	this.Up_1.layerIndex = 11
	this.Up_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Up_1).wait(961).to({_off:true},1).wait(2638));

	// Right_obj_
	this.Right_1 = new lib.Scene_1_Right_1();
	this.Right_1.name = "Right_1";
	this.Right_1.parent = this;
	this.Right_1.depth = 0;
	this.Right_1.isAttachedToCamera = 0
	this.Right_1.isAttachedToMask = 0
	this.Right_1.layerDepth = 0
	this.Right_1.layerIndex = 12
	this.Right_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Right_1).wait(961).to({_off:true},1).wait(2638));

	// Down_obj_
	this.Down_2 = new lib.Scene_1_Down_2();
	this.Down_2.name = "Down_2";
	this.Down_2.parent = this;
	this.Down_2.depth = 0;
	this.Down_2.isAttachedToCamera = 0
	this.Down_2.isAttachedToMask = 0
	this.Down_2.layerDepth = 0
	this.Down_2.layerIndex = 13
	this.Down_2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Down_2).wait(961).to({_off:true},1).wait(2638));

	// Left_obj_
	this.Left_2 = new lib.Scene_1_Left_2();
	this.Left_2.name = "Left_2";
	this.Left_2.parent = this;
	this.Left_2.depth = 0;
	this.Left_2.isAttachedToCamera = 0
	this.Left_2.isAttachedToMask = 0
	this.Left_2.layerDepth = 0
	this.Left_2.layerIndex = 14
	this.Left_2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Left_2).wait(961).to({_off:true},1).wait(2638));

	// Up_obj_
	this.Up_2 = new lib.Scene_1_Up_2();
	this.Up_2.name = "Up_2";
	this.Up_2.parent = this;
	this.Up_2.depth = 0;
	this.Up_2.isAttachedToCamera = 0
	this.Up_2.isAttachedToMask = 0
	this.Up_2.layerDepth = 0
	this.Up_2.layerIndex = 15
	this.Up_2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Up_2).wait(1151).to({_off:true},1).wait(2448));

	// Right_obj_
	this.Right_2 = new lib.Scene_1_Right_2();
	this.Right_2.name = "Right_2";
	this.Right_2.parent = this;
	this.Right_2.depth = 0;
	this.Right_2.isAttachedToCamera = 0
	this.Right_2.isAttachedToMask = 0
	this.Right_2.layerDepth = 0
	this.Right_2.layerIndex = 16
	this.Right_2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Right_2).wait(1151).to({_off:true},1).wait(2448));

	// Down_obj_
	this.Down_3 = new lib.Scene_1_Down_3();
	this.Down_3.name = "Down_3";
	this.Down_3.parent = this;
	this.Down_3.depth = 0;
	this.Down_3.isAttachedToCamera = 0
	this.Down_3.isAttachedToMask = 0
	this.Down_3.layerDepth = 0
	this.Down_3.layerIndex = 17
	this.Down_3.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Down_3).wait(1151).to({_off:true},1).wait(2448));

	// Left_obj_
	this.Left_3 = new lib.Scene_1_Left_3();
	this.Left_3.name = "Left_3";
	this.Left_3.parent = this;
	this.Left_3.depth = 0;
	this.Left_3.isAttachedToCamera = 0
	this.Left_3.isAttachedToMask = 0
	this.Left_3.layerDepth = 0
	this.Left_3.layerIndex = 18
	this.Left_3.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Left_3).wait(1151).to({_off:true},1).wait(2448));

	// Up_obj_
	this.Up_3 = new lib.Scene_1_Up_3();
	this.Up_3.name = "Up_3";
	this.Up_3.parent = this;
	this.Up_3.depth = 0;
	this.Up_3.isAttachedToCamera = 0
	this.Up_3.isAttachedToMask = 0
	this.Up_3.layerDepth = 0
	this.Up_3.layerIndex = 19
	this.Up_3.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Up_3).wait(1840).to({_off:true},1).wait(1759));

	// Right_obj_
	this.Right_3 = new lib.Scene_1_Right_3();
	this.Right_3.name = "Right_3";
	this.Right_3.parent = this;
	this.Right_3.depth = 0;
	this.Right_3.isAttachedToCamera = 0
	this.Right_3.isAttachedToMask = 0
	this.Right_3.layerDepth = 0
	this.Right_3.layerIndex = 20
	this.Right_3.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Right_3).wait(1840).to({_off:true},1).wait(1759));

	// Up_obj_
	this.Up_4 = new lib.Scene_1_Up_4();
	this.Up_4.name = "Up_4";
	this.Up_4.parent = this;
	this.Up_4.depth = 0;
	this.Up_4.isAttachedToCamera = 0
	this.Up_4.isAttachedToMask = 0
	this.Up_4.layerDepth = 0
	this.Up_4.layerIndex = 21
	this.Up_4.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Up_4).wait(2230).to({_off:true},1).wait(1369));

	// Right_obj_
	this.Right_4 = new lib.Scene_1_Right_4();
	this.Right_4.name = "Right_4";
	this.Right_4.parent = this;
	this.Right_4.depth = 0;
	this.Right_4.isAttachedToCamera = 0
	this.Right_4.isAttachedToMask = 0
	this.Right_4.layerDepth = 0
	this.Right_4.layerIndex = 22
	this.Right_4.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Right_4).wait(2230).to({_off:true},1).wait(1369));

	// Down_obj_
	this.Down_4 = new lib.Scene_1_Down_4();
	this.Down_4.name = "Down_4";
	this.Down_4.parent = this;
	this.Down_4.depth = 0;
	this.Down_4.isAttachedToCamera = 0
	this.Down_4.isAttachedToMask = 0
	this.Down_4.layerDepth = 0
	this.Down_4.layerIndex = 23
	this.Down_4.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Down_4).wait(2230).to({_off:true},1).wait(1369));

	// Left_obj_
	this.Left_4 = new lib.Scene_1_Left_4();
	this.Left_4.name = "Left_4";
	this.Left_4.parent = this;
	this.Left_4.depth = 0;
	this.Left_4.isAttachedToCamera = 0
	this.Left_4.isAttachedToMask = 0
	this.Left_4.layerDepth = 0
	this.Left_4.layerIndex = 24
	this.Left_4.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Left_4).wait(2230).to({_off:true},1).wait(1369));

	// Up_obj_
	this.Up_5 = new lib.Scene_1_Up_5();
	this.Up_5.name = "Up_5";
	this.Up_5.parent = this;
	this.Up_5.depth = 0;
	this.Up_5.isAttachedToCamera = 0
	this.Up_5.isAttachedToMask = 0
	this.Up_5.layerDepth = 0
	this.Up_5.layerIndex = 25
	this.Up_5.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Up_5).wait(2010).to({_off:true},1).wait(1589));

	// Left_obj_
	this.Left_5 = new lib.Scene_1_Left_5();
	this.Left_5.name = "Left_5";
	this.Left_5.parent = this;
	this.Left_5.depth = 0;
	this.Left_5.isAttachedToCamera = 0
	this.Left_5.isAttachedToMask = 0
	this.Left_5.layerDepth = 0
	this.Left_5.layerIndex = 26
	this.Left_5.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Left_5).wait(2010).to({_off:true},1).wait(1589));

	// Ex1_obj_
	this.Ex1 = new lib.Scene_1_Ex1();
	this.Ex1.name = "Ex1";
	this.Ex1.parent = this;
	this.Ex1.depth = 0;
	this.Ex1.isAttachedToCamera = 0
	this.Ex1.isAttachedToMask = 0
	this.Ex1.layerDepth = 0
	this.Ex1.layerIndex = 27
	this.Ex1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ex1).wait(3150).to({_off:true},1).wait(449));

	// Ex2_obj_
	this.Ex2 = new lib.Scene_1_Ex2();
	this.Ex2.name = "Ex2";
	this.Ex2.parent = this;
	this.Ex2.depth = 0;
	this.Ex2.isAttachedToCamera = 0
	this.Ex2.isAttachedToMask = 0
	this.Ex2.layerDepth = 0
	this.Ex2.layerIndex = 28
	this.Ex2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Ex2).wait(3411).to({_off:true},1).wait(188));

	// ButtonNext_obj_
	this.ButtonNext = new lib.Scene_1_ButtonNext();
	this.ButtonNext.name = "ButtonNext";
	this.ButtonNext.parent = this;
	this.ButtonNext.depth = 0;
	this.ButtonNext.isAttachedToCamera = 0
	this.ButtonNext.isAttachedToMask = 0
	this.ButtonNext.layerDepth = 0
	this.ButtonNext.layerIndex = 29
	this.ButtonNext.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.ButtonNext).wait(150).to({_off:true},1).wait(3449));

	// PlayerText_obj_
	this.PlayerText = new lib.Scene_1_PlayerText();
	this.PlayerText.name = "PlayerText";
	this.PlayerText.parent = this;
	this.PlayerText.depth = 0;
	this.PlayerText.isAttachedToCamera = 0
	this.PlayerText.isAttachedToMask = 0
	this.PlayerText.layerDepth = 0
	this.PlayerText.layerIndex = 30
	this.PlayerText.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.PlayerText).wait(151).to({_off:true},1).wait(3448));

	// PlayerTextBox_obj_
	this.PlayerTextBox = new lib.Scene_1_PlayerTextBox();
	this.PlayerTextBox.name = "PlayerTextBox";
	this.PlayerTextBox.parent = this;
	this.PlayerTextBox.depth = 0;
	this.PlayerTextBox.isAttachedToCamera = 0
	this.PlayerTextBox.isAttachedToMask = 0
	this.PlayerTextBox.layerDepth = 0
	this.PlayerTextBox.layerIndex = 31
	this.PlayerTextBox.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.PlayerTextBox).wait(151).to({_off:true},1).wait(3448));

	// AgainBtn_obj_
	this.AgainBtn = new lib.Scene_1_AgainBtn();
	this.AgainBtn.name = "AgainBtn";
	this.AgainBtn.parent = this;
	this.AgainBtn.depth = 0;
	this.AgainBtn.isAttachedToCamera = 0
	this.AgainBtn.isAttachedToMask = 0
	this.AgainBtn.layerDepth = 0
	this.AgainBtn.layerIndex = 32
	this.AgainBtn.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.AgainBtn).wait(3116).to({_off:true},1).wait(483));

	// text_obj_
	this.text = new lib.Scene_1_text();
	this.text.name = "text";
	this.text.parent = this;
	this.text.depth = 0;
	this.text.isAttachedToCamera = 0
	this.text.isAttachedToMask = 0
	this.text.layerDepth = 0
	this.text.layerIndex = 33
	this.text.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.text).wait(3116).to({_off:true},1).wait(483));

	// textbox_obj_
	this.textbox = new lib.Scene_1_textbox();
	this.textbox.name = "textbox";
	this.textbox.parent = this;
	this.textbox.depth = 0;
	this.textbox.isAttachedToCamera = 0
	this.textbox.isAttachedToMask = 0
	this.textbox.layerDepth = 0
	this.textbox.layerIndex = 34
	this.textbox.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.textbox).wait(3116).to({_off:true},1).wait(483));

	// Player2_obj_
	this.Player2 = new lib.Scene_1_Player2();
	this.Player2.name = "Player2";
	this.Player2.parent = this;
	this.Player2.depth = 0;
	this.Player2.isAttachedToCamera = 0
	this.Player2.isAttachedToMask = 0
	this.Player2.layerDepth = 0
	this.Player2.layerIndex = 35
	this.Player2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Player2).wait(3052).to({regX:640.4,regY:360.6,x:640.4,y:360.6},0).wait(58).to({regX:0,regY:0,x:0,y:0},0).wait(8).to({regX:640.4,regY:360.6,x:640.4,y:360.6},0).wait(32).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:640.4,regY:360.6,x:640.4,y:360.6},0).wait(38).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:640.4,regY:360.6,x:640.4,y:360.6},0).wait(48).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:640.4,regY:360.6,x:640.4,y:360.6},0).wait(48).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:640.4,regY:360.6,x:640.4,y:360.6},0).wait(58).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:640.4,regY:360.6,x:640.4,y:360.6},0).wait(58).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:640.4,regY:360.6,x:640.4,y:360.6},0).wait(68).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:640.4,regY:360.6,x:640.4,y:360.6},0).wait(58).to({regX:0,regY:0,x:0,y:0},0).wait(2).to({regX:640.4,regY:360.6,x:640.4,y:360.6},0).wait(58));

	// Player_obj_
	this.Player = new lib.Scene_1_Player();
	this.Player.name = "Player";
	this.Player.parent = this;
	this.Player.setTransform(655.8,339.9,1,1,0,0,0,655.8,339.9);
	this.Player.depth = 0;
	this.Player.isAttachedToCamera = 0
	this.Player.isAttachedToMask = 0
	this.Player.layerDepth = 0
	this.Player.layerIndex = 36
	this.Player.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Player).wait(6).to({regX:641.1,regY:361.1,x:641.1,y:361.1},0).wait(64).to({regX:655.8,regY:339.9,x:655.8,y:339.9},0).wait(83).to({regX:641.1,regY:361.1,x:641.1,y:361.1},0).wait(57).to({regX:655.8,regY:339.9,x:655.8,y:339.9},0).wait(2).to({regX:641.1,regY:361.1,x:641.1,y:361.1},0).wait(48).to({regX:655.8,regY:339.9,x:655.8,y:339.9},0).wait(3).to({regX:641.1,regY:361.1,x:641.1,y:361.1},0).wait(37).to({regX:655.8,regY:339.9,x:655.8,y:339.9},0).wait(2).to({regX:641.1,regY:361.1,x:641.1,y:361.1},0).wait(58).to({regX:655.8,regY:339.9,x:655.8,y:339.9},0).wait(2).to({regX:641.1,regY:361.1,x:641.1,y:361.1},0).wait(58).to({regX:655.8,regY:339.9,x:655.8,y:339.9},0).wait(2).to({regX:641.1,regY:361.1,x:641.1,y:361.1},0).wait(69).to({regX:655.8,regY:339.9,x:655.8,y:339.9},0).wait(2).to({regX:641.1,regY:361.1,x:641.1,y:361.1},0).wait(57).to({regX:655.8,regY:339.9,x:655.8,y:339.9},0).wait(2).to({regX:641.1,regY:361.1,x:641.1,y:361.1},0).wait(48).to({regX:655.8,regY:339.9,x:655.8,y:339.9},0).wait(2).to({regX:641.1,regY:361.1,x:641.1,y:361.1},0).wait(58).to({regX:655.8,regY:339.9,x:655.8,y:339.9},0).wait(2).to({regX:641.1,regY:361.1,x:641.1,y:361.1},0).wait(68).to({regX:655.8,regY:339.9,x:655.8,y:339.9},0).wait(2).to({regX:641.1,regY:361.1,x:641.1,y:361.1},0).wait(68).to({regX:655.8,regY:339.9,x:655.8,y:339.9},0).wait(2).to({regX:641.1,regY:361.1,x:641.1,y:361.1},0).wait(63).to({regX:655.8,regY:339.9,x:655.8,y:339.9},0).wait(2).to({regX:641.1,regY:361.1,x:641.1,y:361.1},0).wait(43).to({regX:655.8,regY:339.9,x:655.8,y:339.9},0).wait(2).to({regX:641.1,regY:361.1,x:641.1,y:361.1},0).wait(48).to({regX:655.8,regY:339.9,x:655.8,y:339.9},0).wait(2).to({regX:641.1,regY:361.1,x:641.1,y:361.1},0).wait(48).to({regX:655.8,regY:339.9,x:655.8,y:339.9},0).wait(2).to({regX:641.1,regY:361.1,x:641.1,y:361.1},0).wait(38).to({regX:655.8,regY:339.9,x:655.8,y:339.9},0).wait(2).to({regX:641.1,regY:361.1,x:641.1,y:361.1},0).wait(48).to({regX:655.8,regY:339.9,x:655.8,y:339.9},0).wait(2).to({regX:641.1,regY:361.1,x:641.1,y:361.1},0).wait(48).to({regX:655.8,regY:339.9,x:655.8,y:339.9},0).wait(2).to({regX:641.1,regY:361.1,x:641.1,y:361.1},0).wait(48).to({regX:655.8,regY:339.9,x:655.8,y:339.9},0).wait(2).to({regX:641.1,regY:361.1,x:641.1,y:361.1},0).wait(48).to({regX:655.8,regY:339.9,x:655.8,y:339.9},0).wait(2).to({regX:641.1,regY:361.1,x:641.1,y:361.1},0).wait(48).to({regX:655.8,regY:339.9,x:655.8,y:339.9},0).wait(2).to({regX:641.1,regY:361.1,x:641.1,y:361.1},0).wait(78).to({regX:655.8,regY:339.9,x:655.8,y:339.9},0).wait(2).to({regX:641.1,regY:361.1,x:641.1,y:361.1},0).wait(58).to({regX:655.8,regY:339.9,x:655.8,y:339.9},0).wait(2).to({regX:641.1,regY:361.1,x:641.1,y:361.1},0).wait(58).to({regX:655.8,regY:339.9,x:655.8,y:339.9},0).wait(2).to({regX:641.1,regY:361.1,x:641.1,y:361.1},0).wait(58).to({regX:655.8,regY:339.9,x:655.8,y:339.9},0).wait(2).to({regX:641.1,regY:361.1,x:641.1,y:361.1},0).wait(68).to({regX:655.8,regY:339.9,x:655.8,y:339.9},0).wait(2).to({regX:641.1,regY:361.1,x:641.1,y:361.1},0).wait(63).to({regX:655.8,regY:339.9,x:655.8,y:339.9},0).wait(2).to({regX:641.1,regY:361.1,x:641.1,y:361.1},0).wait(63).to({regX:655.8,regY:339.9,x:655.8,y:339.9},0).wait(2).to({regX:641.1,regY:361.1,x:641.1,y:361.1},0).wait(38).to({regX:655.8,regY:339.9,x:655.8,y:339.9},0).wait(2).to({regX:641.1,regY:361.1,x:641.1,y:361.1},0).wait(38).to({regX:655.8,regY:339.9,x:655.8,y:339.9},0).wait(2).to({regX:641.1,regY:361.1,x:641.1,y:361.1},0).wait(38).to({regX:655.8,regY:339.9,x:655.8,y:339.9},0).wait(2).to({regX:641.1,regY:361.1,x:641.1,y:361.1},0).wait(48).to({regX:655.8,regY:339.9,x:655.8,y:339.9},0).wait(2).to({regX:641.1,regY:361.1,x:641.1,y:361.1},0).wait(38).to({regX:655.8,regY:339.9,x:655.8,y:339.9},0).wait(2).to({regX:641.1,regY:361.1,x:641.1,y:361.1},0).wait(38).to({regX:655.8,regY:339.9,x:655.8,y:339.9},0).wait(2).to({regX:641.1,regY:361.1,x:641.1,y:361.1},0).wait(48).to({regX:655.8,regY:339.9,x:655.8,y:339.9},0).wait(2).to({regX:641.1,regY:361.1,x:641.1,y:361.1},0).wait(38).to({regX:655.8,regY:339.9,x:655.8,y:339.9},0).wait(2).to({regX:641.1,regY:361.1,x:641.1,y:361.1},0).wait(68).to({regX:655.8,regY:339.9,x:655.8,y:339.9},0).wait(2).to({regX:641.1,regY:361.1,x:641.1,y:361.1},0).wait(58).to({regX:655.8,regY:339.9,x:655.8,y:339.9},0).wait(2).to({regX:641.1,regY:361.1,x:641.1,y:361.1},0).wait(58).to({regX:655.8,regY:339.9,x:655.8,y:339.9},0).wait(2).to({regX:641.1,regY:361.1,x:641.1,y:361.1},0).wait(48).to({regX:655.8,regY:339.9,x:655.8,y:339.9},0).wait(2).to({regX:641.1,regY:361.1,x:641.1,y:361.1},0).wait(68).to({regX:655.8,regY:339.9,x:655.8,y:339.9},0).wait(2).to({regX:641.1,regY:361.1,x:641.1,y:361.1},0).wait(58).to({regX:655.8,regY:339.9,x:655.8,y:339.9},0).wait(2).to({regX:641.1,regY:361.1,x:641.1,y:361.1},0).wait(58).to({regX:655.8,regY:339.9,x:655.8,y:339.9},0).wait(2).to({regX:641.1,regY:361.1,x:641.1,y:361.1},0).wait(68).to({regX:655.8,regY:339.9,x:655.8,y:339.9},0).wait(2).to({regX:641.1,regY:361.1,x:641.1,y:361.1},0).wait(38).to({regX:655.8,regY:339.9,x:655.8,y:339.9},0).wait(2).to({regX:641.1,regY:361.1,x:641.1,y:361.1},0).wait(58).to({regX:655.8,regY:339.9,x:655.8,y:339.9},0).wait(2).to({regX:641.1,regY:361.1,x:641.1,y:361.1},0).wait(48).to({regX:655.8,regY:339.9,x:655.8,y:339.9},0).wait(2).to({regX:641.1,regY:361.1,x:641.1,y:361.1},0).wait(38).to({regX:655.8,regY:339.9,x:655.8,y:339.9},0).wait(2).to({regX:641.1,regY:361.1,x:641.1,y:361.1},0).wait(58).to({regX:655.8,regY:339.9,x:655.8,y:339.9},0).wait(2).to({regX:641.1,regY:361.1,x:641.1,y:361.1},0).wait(58).to({regX:655.8,regY:339.9,x:655.8,y:339.9},0).wait(2).to({regX:641.1,regY:361.1,x:641.1,y:361.1},0).wait(48).to({regX:655.8,regY:339.9,x:655.8,y:339.9},0).wait(2).to({regX:641.1,regY:361.1,x:641.1,y:361.1},0).wait(38).to({regX:655.8,regY:339.9,x:655.8,y:339.9},0).wait(2).to({regX:641.1,regY:361.1,x:641.1,y:361.1},0).wait(48).to({regX:655.8,regY:339.9,x:655.8,y:339.9},0).to({_off:true},1).wait(549));

	// Shield_obj_
	this.Shield = new lib.Scene_1_Shield();
	this.Shield.name = "Shield";
	this.Shield.parent = this;
	this.Shield.depth = 0;
	this.Shield.isAttachedToCamera = 0
	this.Shield.isAttachedToMask = 0
	this.Shield.layerDepth = 0
	this.Shield.layerIndex = 37
	this.Shield.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Shield).wait(3410).to({_off:true},1).wait(189));

	// Coin_obj_
	this.Coin = new lib.Scene_1_Coin();
	this.Coin.name = "Coin";
	this.Coin.parent = this;
	this.Coin.depth = 0;
	this.Coin.isAttachedToCamera = 0
	this.Coin.isAttachedToMask = 0
	this.Coin.layerDepth = 0
	this.Coin.layerIndex = 38
	this.Coin.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Coin).wait(2959).to({_off:true},1).wait(640));

	// text_obj_
	this.text_1 = new lib.Scene_1_text_1();
	this.text_1.name = "text_1";
	this.text_1.parent = this;
	this.text_1.setTransform(660.4,262.9,1,1,0,0,0,660.4,262.9);
	this.text_1.depth = 0;
	this.text_1.isAttachedToCamera = 0
	this.text_1.isAttachedToMask = 0
	this.text_1.layerDepth = 0
	this.text_1.layerIndex = 39
	this.text_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.text_1).to({_off:true},1).wait(3599));

	// playbutton_obj_
	this.playbutton = new lib.Scene_1_playbutton();
	this.playbutton.name = "playbutton";
	this.playbutton.parent = this;
	this.playbutton.setTransform(649.5,423.9,1,1,0,0,0,649.5,423.9);
	this.playbutton.depth = 0;
	this.playbutton.isAttachedToCamera = 0
	this.playbutton.isAttachedToMask = 0
	this.playbutton.layerDepth = 0
	this.playbutton.layerIndex = 40
	this.playbutton.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.playbutton).to({_off:true},1).wait(3599));

	// back_obj_
	this.back = new lib.Scene_1_back();
	this.back.name = "back";
	this.back.parent = this;
	this.back.setTransform(657,335.9,1,1,0,0,0,657,335.9);
	this.back.depth = 0;
	this.back.isAttachedToCamera = 0
	this.back.isAttachedToMask = 0
	this.back.layerDepth = 0
	this.back.layerIndex = 41
	this.back.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.back).to({_off:true},1).wait(3599));

	// tempArrow_obj_
	this.tempArrow = new lib.Scene_1_tempArrow();
	this.tempArrow.name = "tempArrow";
	this.tempArrow.parent = this;
	this.tempArrow.setTransform(641.2,356,1,1,0,0,0,641.2,356);
	this.tempArrow.depth = 0;
	this.tempArrow.isAttachedToCamera = 0
	this.tempArrow.isAttachedToMask = 0
	this.tempArrow.layerDepth = 0
	this.tempArrow.layerIndex = 42
	this.tempArrow.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.tempArrow).to({_off:true},1).wait(3599));

	// background_obj_
	this.background = new lib.Scene_1_background();
	this.background.name = "background";
	this.background.parent = this;
	this.background.setTransform(640,360,1,1,0,0,0,640,360);
	this.background.depth = 0;
	this.background.isAttachedToCamera = 0
	this.background.isAttachedToMask = 0
	this.background.layerDepth = 0
	this.background.layerIndex = 43
	this.background.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.background).wait(3600));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(640,360,1280,720);
// library properties:
lib.properties = {
	id: 'AD36E9B6D9613B4D968B8305E574BCAF',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/AnimationProject2_atlas_.png?1574372297031", id:"AnimationProject2_atlas_"},
		{src:"sounds/BlueTime.mp3?1574372298293", id:"BlueTime"},
		{src:"sounds/Coinwav.mp3?1574372298293", id:"Coinwav"},
		{src:"sounds/Questionwav.mp3?1574372298293", id:"Questionwav"},
		{src:"sounds/Redwav.mp3?1574372298293", id:"Redwav"},
		{src:"sounds/Selectwav.mp3?1574372298293", id:"Selectwav"}
	],
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
an.compositions['AD36E9B6D9613B4D968B8305E574BCAF'] = {
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


// Layer depth API : 

AdobeAn.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;