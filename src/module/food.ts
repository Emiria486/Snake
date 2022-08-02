// 定义食物类
class Food{
    // 定义一个元素表示十五所对应的元素
    element:HTMLElement
    constructor(){
        // 非空断言，将页面中的food元素赋值给element
        this.element=document.getElementById('food')!
        // 定义一个获取食物x轴坐标方法
    }
    get X(){
        return this.element.offsetLeft
    }
     // 定义一个获取食物Y轴坐标方法
     get Y(){
        return this.element.offsetTop
     }
    //  修改食物的位置
    change(){
        /* 
            生成一个随机位置
            生成位置最小为0，最大为舞台宽减去食物的大小290
            蛇每移动一次就是一格，一格的大小就是10，所以就要求食物的坐标必须是整十
        */
       let top=Math.round(Math.random()*29)*10
       let left=Math.round(Math.random()*29)*10
        this.element.style.left=top+'px'
        this.element.style.top=left+'px'
    }
}
export default Food