var timer =setInterval(
    function(){
        game.bindEvent()

        game.snake.update()

        game.snake.render()
        game.food.render()
},300);