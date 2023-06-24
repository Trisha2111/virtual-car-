AFRAME.registerComponent("game",{
    schema:{
        gameState:{type:"string",default:"play"}
    },
    init:function(){
        var duration=40
        var timer=document.querySelector("#timer")
        this.startTimer(duration,timer)
    },
    startTimer:function(duration,timer){
        var minutes,seconds
        setInterval(() => {
            if(duration>=0){
                this.data.gameState="play"
                minutes=parseInt(duration/60)
                seconds=parseInt(duration%60)
                if(minutes<10){
                    minutes="0"+minutes
                }
                if(seconds<10){
                    seconds="0"+seconds
                }
                timer.setAttribute("text",{value:minutes+":"+seconds})
                duration-=1
            }
            else{
                this.data.gameState="gameOver"
                var cameraRig=document.querySelector("#camera-rig")
                cameraRig.setAttribute("velocity",{x:0,y:0,z:0})
                var over=document.querySelector("#over")
                over.setAttribute("visible",true)
                var speed=document.querySelector("#speed")
                speed.setAttribute("text",{value:"0"})
            }
        }, 1000);
    }
})
