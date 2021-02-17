(function(){
    window.RussiaBlockGame=function (){
        this.row=20
        this.col=10
        this.score=0
        this.init()
        this.blockGame=new BlockGame()
        this.mapCode=new MapCode();
        this.start()
    }
    RussiaBlockGame.prototype.init = function(){
        var $table=$('<table id="table1"></table>')
        for(var i = 0 ; i<this.row;i++){
            var $tr=$('<tr></tr>')
            for (var j=0;j<this.col;j++){
                var $td=$('<td></td>')
                $td.appendTo($tr)
            }
            $tr.appendTo($table)
            
        }
        $('#app').append($table)
        $table.css('position','relative')
        $table.css('left','500px')
        document.getElementById('score').innerHTML=('目前分数为：'+(this.score).toString())
    }
    RussiaBlockGame.prototype.setColor=function(row,col,numColor){
        var color=''
        if (numColor===1) color='red'
        else if (numColor===2) color='yellow'
        else if (numColor===3) color='blue'
        else if (numColor===4) color='green'
        else if (numColor===5) color='pink'
        else if (numColor===6) color='skyblue'
        else if (numColor===7) color='purple';
        $('tr').eq(row).children('td').eq(col).css('background',color)
    }

    RussiaBlockGame.prototype.start=function(){
        var self=this
        this.timer = setInterval(function(){
            self.bindevent();
            self.blockGame.update();
            self.mapCode.render();
            self.blockGame.render();
            
         //   console.log(self.predirection)
        },1000)
        this.timer2 = setInterval(function(){
            self.bindevent();
            self.blockGame.update2();
            self.mapCode.render();
            self.blockGame.render();
         //   console.log(self.predirection)
        },300)
    }
    RussiaBlockGame.prototype.bindevent=function(){
        var self=this;
        $(document).keydown(function(event){
            switch(event.keyCode){
                case 37:
                    self.blockGame.predirection='L';
                    break;
                case 38:
                    self.blockGame.predirection='U';
                    break;
                case 39:
                    self.blockGame.predirection='R';
                    break;
    
                case 40:
                    self.blockGame.predirection='D';
                    break;
            }
        })
    }
    RussiaBlockGame.prototype.lose=function(){

        clearInterval(this.timer)
        clearInterval(this.timer2)
        alert('结束')
    }
})()
