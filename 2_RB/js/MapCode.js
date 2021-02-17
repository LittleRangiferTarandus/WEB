(function(){
    window.MapCode=function(){
        this.mapC=[
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0,0],
        ];
    }
    MapCode.prototype.render = function(){
        for (var i =0 ; i<russiaBlockGame.row;i++)
            for(var j=0 ; j<russiaBlockGame.col;j++)
                russiaBlockGame.setColor(i,j,this.mapC[i][j])
    }
    //消行
    MapCode.prototype.clear= function(){

        for(var i=1;i<russiaBlockGame.row;i++){
            console.log(this.mapC[i].indexOf(0))
            if(this.mapC[i].indexOf(0)==-1){
                this.mapC.splice(i,1)
                this.mapC.unshift([0,0,0,0,0,0,0,0,0,0])
                russiaBlockGame.score=russiaBlockGame.score*1.1+10
                document.getElementById('score').innerHTML=('目前分数为：'+(russiaBlockGame.score).toString())
                
            }
        }

    }
    //结束
    MapCode.prototype.over=function(){
        for(var i = 0 ; i<russiaBlockGame.col;i++){
            if (this.mapC[0][i]!=0)
                russiaBlockGame.lose()
        }
        
    }
})()