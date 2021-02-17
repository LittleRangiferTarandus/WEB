(function(){
    window.BlockGame = function(){
        this.Type
        this.type
        this.Dir
        this.dir
        this.block;
        this.row=0;
        this.col=0;
        this.direction='';        
        this.predirection='';
        this.initial();
    }
    BlockGame.prototype.render = function(){
        for (var i = 0 ;i<4;i++)
            for (var j=0;j<4;j++)
               if (this.block[i][j]!=0)
                russiaBlockGame.setColor(this.row+i,this.col+j,this.block[i][j])
    }

    BlockGame.prototype.initial = function(){
        this.Type=['S','T','Z','J','L','O','I']
        this.type=this.Type[parseInt(Math.random()*this.Type.length)]
        this.Dir=BlockType[this.type].length
        this.dir= parseInt(Math.random()*this.Dir)
        this.block=BlockType[this.type][this.dir]
      //  console.log(this.block)
        
    }
    //方向键
    BlockGame.prototype.update2=function(){

        this.direction=this.predirection
        console.log(this.direction)
        if (this.direction=='D'){
            this.judgeSuperDown()
        }
        if(this.direction=='R')
            if(this.judgeRight()) this.col++
        if(this.direction=='L')
            if(this.judgeLeft()) this.col--
        if(this.direction=='U')
            if(this.judgeTurn()){
                if (this.dir+1==this.Dir){
                    this.dir=0;
                    this.block=BlockType[this.type][this.dir]
                }
                else{
                    ++this.dir;
                    this.block=BlockType[this.type][this.dir]}

            }
        this.direction=''
        this.predirection=''
    }
    //没有按方向键
    BlockGame.prototype.update=function(){
        if(this.judgeDown()){
            this.row++

        }
        else{
            this.mapRenew()
            russiaBlockGame.mapCode.clear()
            russiaBlockGame.mapCode.over()
            russiaBlockGame.blockGame=new BlockGame()
        }
    }

    //上
    BlockGame.prototype.judgeTurn=function(){
        var dirT;
        if (this.dir+1==this.Dir)
            dirT=0
        else
            dirT=this.dir+1
        for (var i=0;i<4;i++)
            for(var j=0;j<4;j++)
                if (BlockType[this.type][dirT][i][j]!=0)
                    
                    if ((russiaBlockGame.mapCode.mapC[i+this.row][j+this.col]!=0) )
                        return false
        return true
    }
    //下
    BlockGame.prototype.judgeSuperDown=function(){
        while(this.judgeDown()){
            this.row++
        }
        this.mapRenew()
        russiaBlockGame.mapCode.clear()
        russiaBlockGame.mapCode.over()
        russiaBlockGame.blockGame=new BlockGame()
    }
    //左
    BlockGame.prototype.judgeLeft=function(){
        for (var i=0;i<4;i++)
            for(var j=0;j<4;j++)
                if (this.block[i][j]!=0){
                    if(j+this.col-1<=-1) return false
                    else if ((russiaBlockGame.mapCode.mapC[i+this.row][j+this.col-1]!=0) )
                        return false
                }
        return true
    }
    //右
    BlockGame.prototype.judgeRight=function(){
        for (var i=0;i<4;i++)
            for(var j=3;j>=0;j--)
                if (this.block[i][j]!=0)
                    if(j+this.col+1>=russiaBlockGame.col) return false
                    else if ((russiaBlockGame.mapCode.mapC[i+this.row][j+this.col+1]!=0) )
                        return false
        return true
    }
    //下落
    BlockGame.prototype.judgeDown=function(){
        for (var i=0;i<4;i++)
            for(var j=3;j>=0;j--)
                if (this.block[j][i]!=0)
                    if(j+this.row+1>=russiaBlockGame.row ) return false
                    else if ((russiaBlockGame.mapCode.mapC[j+this.row+1][i+this.col]!=0) )
                        return false
        return true
    }
    //停止运动，更新地图
    BlockGame.prototype.mapRenew=function(){
        for (var i=0;i<4;i++)
            for(var j=3;j>=0;j--)
                if (this.block[j][i]!=0)
                    russiaBlockGame.mapCode.mapC[j+this.row][i+this.col]=(this.block[j][i])
    }
})()