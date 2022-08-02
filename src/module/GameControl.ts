import Snake from "./snake"
import Food from "./food"
import ScorePanel from "./ScorePanel"
// 游戏控制器，控制其他的所有类
class GameControl {
    snake: Snake
    food: Food
    scorePanel: ScorePanel
    // 创建一个属性来存储蛇的移动方法（也就是按键的方向）
    direction: string = ''
    // 创建一个属性用来记录游戏是否结束
    isLive: boolean = true
    constructor() {
        this.snake = new Snake()
        this.food = new Food()
        this.scorePanel = new ScorePanel()
        this.init()
    }
    // 游戏的初始化，调用后游戏即开始
    init() {
        document.addEventListener('keydown', (event) => {
            this.direction = event.key
        })
        this.run()
    }
    // 创建一个控制蛇移动的方法
    run() {
        // 根据方法（this.direction）来使位置改变
        // 向上 top减少 向下 top增加 向左left减少 向右left增加
        let X = this.snake.X
        let Y = this.snake.Y
        // 根据按键方向来修改X值和Y值
        switch (this.direction) {
            case "ArrowUp":
                Y -= 10
                break
            case "ArrowDown":
                Y += 10
                break
            case "ArrowLeft":
                X -= 10
                break
            case "ArrowRight":
                X += 10
                break
        }
        // 检查蛇是否吃到了食物
        this.checkEat(X,Y)
        // 修改蛇的X和Y值
        try {
            this.snake.X = X
            this.snake.Y = Y
        } catch (e: any) {
            // 进入catch，说明出现了异常，游戏结束，弹出一个提示信息
            alert(e.message + "game over")
            // 将isLive设置为false
            this.isLive = false
        }
        // 开启一个定时调用
        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30)
    }
    // 检查蛇是否吃到食物
    checkEat(X: number, Y: number) {
        if (X === this.food.X && Y === this.food.Y) {
            // 食物的位置要重置
            this.food.change()
            // 分数增加
            this.scorePanel.addScore()
            // 蛇要加一节
            this.snake.addBody()
        }
    }
}
export default GameControl