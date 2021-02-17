function Food(game){
    var self=this;
    do{
        self.row=parseInt(Math.random()*(game.row-2))+1;
        self.col=parseInt(Math.random()*(game.col-2))+1;
    }
    while ((function(){
        for (var i = 0; i< game.snake.body.length;i++){
            if(game.snake.body[i].row===self.row&&game.snake.body[i].col===self.col)
                return true
        }
        return false
    })())
    this.update;
}

Food.prototype.render=function(){
    game.seticon(this.row,this.col,'♥')
}
Food.prototype.update = function(){
    var self=this;
    game.seticon(this.row,this.col,'')
    do{
        self.row=parseInt(Math.random()*(game.row-2))+1;
        self.col=parseInt(Math.random()*(game.col-2))+1;
    }
    while ((function(){
        for (var i = 0; i< game.snake.body.length;i++){
            if(game.snake.body[i].row===self.row&&game.snake.body[i].col===self.col)
                return true
        }
        return false
    })())
}