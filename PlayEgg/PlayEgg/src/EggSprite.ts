 

class EggSprite extends egret.Sprite
{
    constructor()
    {
        super();
        this.addChild(this.CreateEggSprite());
    }
    /// 水平速度
    public speedX: number;
    /// 垂直速度
    public speenY: number;
    /// 目标坐标
    public targetPoint: Point;
    /// 创建一个蛋的精灵
    public CreateEggSprite(x:number=30,y:number=30,r:number=15,color:number=0xfffddd)
    {
        var spr: egret.Sprite = new egret.Sprite();
        spr.graphics.beginFill(color);
        spr.graphics.drawCircle(x, y, r);
        spr.graphics.endFill();
        return spr;
    }

    ///  更新 鸡蛋的状态
    public Update(tempEgg: EggSprite)
    {
        this.speedX = tempEgg.speedX;
        this.speenY = tempEgg.speenY;
        this.targetPoint = tempEgg.targetPoint;
    }

    public static EggTween(egg:EggSprite,time:number=5000)
    {
        var tw = egret.Tween.get(egg);
        tw.to({ x: egg.targetPoint.x, y: egg.targetPoint.y }, time);
    }
}


/*
* 屏幕上的坐标点
**/
class Point
{
    public x: number;
    public y: number;
}