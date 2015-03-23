var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var EggSprite = (function (_super) {
    __extends(EggSprite, _super);
    function EggSprite() {
        _super.call(this);
        this.addChild(this.CreateEggSprite());
    }
    /// 创建一个蛋的精灵
    EggSprite.prototype.CreateEggSprite = function (x, y, r, color) {
        if (x === void 0) { x = 30; }
        if (y === void 0) { y = 30; }
        if (r === void 0) { r = 15; }
        if (color === void 0) { color = 0xfffddd; }
        var spr = new egret.Sprite();
        spr.graphics.beginFill(color);
        spr.graphics.drawCircle(x, y, r);
        spr.graphics.endFill();
        return spr;
    };
    ///  更新 鸡蛋的状态
    EggSprite.prototype.Update = function (tempEgg) {
        this.speedX = tempEgg.speedX;
        this.speenY = tempEgg.speenY;
        this.targetPoint = tempEgg.targetPoint;
    };
    EggSprite.EggTween = function (egg, time) {
        if (time === void 0) { time = 5000; }
        var tw = egret.Tween.get(egg);
        tw.to({ x: egg.targetPoint.x, y: egg.targetPoint.y }, time);
    };
    return EggSprite;
})(egret.Sprite);
EggSprite.prototype.__class__ = "EggSprite";
/*
* 屏幕上的坐标点
**/
var Point = (function () {
    function Point() {
    }
    return Point;
})();
Point.prototype.__class__ = "Point";
//# sourceMappingURL=EggSprite.js.map