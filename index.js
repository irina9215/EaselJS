//stage
var canvas = document.getElementById("myCanvas");
var stage = new createjs.Stage(canvas);
var myCanvasStage = {
	_drawCircle:function() {
		var circle = new createjs.Shape();
		//setStrokeStyle边框 
		circle.graphics.setStrokeStyle(5).beginStroke("rgba(0,0,0,.5)").beginFill("green").drawCircle(0, 1, 50);
		circle.x = 160;
		circle.y = 100;

		//将生成图形添加到stage中，并且调用update方法更新
		stage.addChild(circle);
		stage.update();
	},
	_drawRect:function() {
			var rect = new createjs.Shape();
			//setStrokeStyle边框 
			rect.graphics.setStrokeStyle(5).beginStroke("rgba(0,0,0,.5)").beginFill("orange").drawRect(10, 10, 100,20);
			rect.x = 220;
			rect.y = 100;

			//将生成图形添加到stage中，并且调用update方法更新
			stage.addChild(rect);
			stage.update();
	},
	_drawPolystar:function() {
			var polystar = new createjs.Shape();
			//setStrokeStyle边框 
			polystar.graphics.beginFill("orange").drawPolyStar(100,10,5,10,10,110);
			polystar.x = 330;
			polystar.y = 100;

			//将生成图形添加到stage中，并且调用update方法更新
			stage.addChild(polystar);
			stage.update();
	}
}
myCanvasStage._drawCircle();
myCanvasStage._drawRect();
myCanvasStage._drawPolystar();