function Game(){
    this.row=20;
    this.col=20;
    this.score=0;
    this.init();
	this.snake=new Snake(this);
    this.food=new Food(this);
}
Game.prototype.init = function(){
    this.dom=document.createElement('table');
    var tr,td;
    for (var i=0;i<this.row;i++){
        tr=document.createElement('tr');
        
        for(var j =0;j<this.col;j++){
            td=document.createElement('td');
            tr.appendChild(td);
        }
        this.dom.appendChild(tr);
    }
    document.getElementById('app').appendChild(this.dom);
    for(var i =0 ; i < this.row;i++)
        for (var j=0 ;j<this.col;j++)
            if (i===0 || i===this.row-1|| j===0 || j===this.col-1)
                  this.setcolor(i,j,'black');
    document.getElementById('score').innerHTML=('蛇蛇体重是：'+(this.score)+'斤')
    alert('喵~初始化')
               
}
//
Game.prototype.setcolor= function(row,col,color){
    this.dom.getElementsByTagName('tr')[row].getElementsByTagName('td')[col].style.background =color;
}
Game.prototype.seticon= function(row,col,icon){
    this.dom.getElementsByTagName('tr')[row].getElementsByTagName('td')[col].innerHTML = icon;
}
Game.prototype.clear= function(){
    for(var i =1 ;i<this.row-1;i++){
        for (var j =1 ; j<this.col-1;j++)
            this.setcolor(i,j,'white');
    }


}
Game.prototype.bindEvent=function(){
    var self=this;
    document.onkeydown=function(ebento){
        switch(ebento.keyCode){
            case 37:
                self.snake.direction2='L';
                break;
            case 38:
                self.snake.direction2='U';
                break;
            case 39:
                self.snake.direction2='R';
                break;

            case 40:
                self.snake.direction2='D';
                break;
        
        }
    }
    
    if ([self.snake.direction2,self.snake.direction].toString()==='R,L' || [self.snake.direction2,self.snake.direction].toString()==='L,R'
    || [self.snake.direction2,self.snake.direction].toString()==='U,D' || [self.snake.direction2,self.snake.direction].toString()==='D,U')
    return
    else self.snake.direction=self.snake.direction2;
}