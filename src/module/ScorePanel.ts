// 定义记分牌的类
class ScorePanel{
    score=0
    level=1
    // 分数和等级所在的元素，在构造函数中进行初始化
    scoreEle:HTMLElement
    levelEle:HTMLElement
    // 设置变量限制等级
    maxLevel:number
    // 设置变量表示多少分时升级
    upScore:number
    constructor(maxLevel=10,upScore=10){
        this.scoreEle=document.getElementById('score')!
        this.levelEle=document.getElementById('level')!
        this.maxLevel=maxLevel
        this.upScore=upScore
    }
    //设置一个加分的方法
    addScore(){
        this.score++
        this.scoreEle.innerHTML=this.score+''
        // 
        if(this.score%this.upScore===0){
            this.levelup()
        }
    }
    //等级提升的方法
    levelup(){
        if(this.level<this.maxLevel){
            this.levelEle.innerHTML=++this.level+''
        }
    }
}

export default ScorePanel
