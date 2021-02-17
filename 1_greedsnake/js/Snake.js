function Snake(){
    this.body=[
        {"row":3,"col":2},
        {"row":3,"col":3},
    ];
    this.direction='D';
    this.direction2='D';
}
Snake.prototype.update = function(){
    this.body.pop();

    switch(this.direction ){
        case'R':
        this.body.unshift({'row':this.body[0].row,'col':this.body[0].col+1});break;
        case'L':
        this.body.unshift({'row':this.body[0].row,'col':this.body[0].col-1});break;
        case'U':
        this.body.unshift({'row':this.body[0].row-1,'col':this.body[0].col});break;
        case'D':
        this.body.unshift({'row':this.body[0].row+1,'col':this.body[0].col});break;
    }
    if(this.body[0].col>game.col-2 || this.body[0].row>game.row-2 ||this.body[0].row<1 || this.body[0].col<1){
        alert("好疼~~~"+'!!最胖的蛇蛇体重是：'+(game.score)+'斤');
        this.body.shift();
        clearInterval(timer)
    }
    for (var i =1 ;i<this.body.length;i++){
        if (this.body[i].row===this.body[0].row && this.body[i].col===this.body[0].col){
            alert("好疼~~~"+'!!最胖的蛇蛇体重是：'+(game.score)+'斤');
            this.body.shift();
            clearInterval(timer)
        }
    }
    if(this.body[0].row===game.food.row && this.body[0].col===game.food.col){
        this.body.push(this.body[this.body.length-1])
        game.food.update(game);
        document.getElementById('score').innerHTML=('蛇蛇体重是：'+(++game.score)+'斤');
    }
}

Snake.prototype.render= function(){
    game.clear()
    game.setcolor (this.body[0].row,this.body[0].col,"skyblue");
    for(var i=1;i<this.body.length;i++){
        game.setcolor(this.body[i].row,this.body[i].col,'pink')
    }

}
