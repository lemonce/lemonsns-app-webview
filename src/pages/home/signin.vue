<template>
    <f7-page name="signin">
        <f7-navbar title="扫一扫" back-link>
            <f7-nav-right>
                <f7-link @click="getImage()">相册</f7-link>
            </f7-nav-right>
        </f7-navbar>
        <div id="cover_signin">
            <canvas id="canvas"></canvas>
        </div>
    </f7-page>
</template>

<script>

import jsQR from 'jsqr';



export default {
    name: 'signin',
    data() {
        return {
            canvasElement: null,
            canvas: null
        }
    },
    methods: {
        tick() {
            //video??
            if (video.readyState === video.HAVE_ENOUGH_DATA) {
                canvasElement.hidden = false;

                canvas.drawImage(video, 0, 0, canvasElement.width, canvasElement.height);

                const imageData = canvas.getImageData(0, 0, canvasElement.width, canvasElement.height);
                const code = jsQR(imageData.data, imageData.width, imageData.height);

                if (code) {
                    this.drawLine(code.location.topLeftCorner, code.location.topRightCorner, "#FF3B58");
                    this.drawLine(code.location.topRightCorner, code.location.bottomRightCorner, "#FF3B58");
                    this.drawLine(code.location.bottomRightCorner, code.location.bottomLeftCorner, "#FF3B58");
                    this.drawLine(code.location.bottomLeftCorner, code.location.topLeftCorner, "#FF3B58");
                } else {
                    
                }
            }

            this.requestAnimationFrame(tick);
        },
        getImage() {

        },
        drawLine(begin, end, color) {
            canvas.beginPath();
            canvas.moveTo(begin.x, begin.y);
            canvas.lineTo(end.x, end.y);
            canvas.lineWidth = 4;
            canvas.strokeStyle = color;
            canvas.stroke();
        },
        startGetQrcode() {

        }
    },
    mounted() {
        this.canvasElement = document.getElementById("canvas");
        this.canvas = canvasElement.getContext("2d");
        
        if (!window.requestAnimationFrame) {
            let lastTime = 0;

            window.requestAnimationFrame = function(callback, element) {
                let currTime = new Date().getTime();
                let timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
                let id = window.setTimeout(function() {
                    callback(currTime + timeToCall);
                }, timeToCall);

                lastTime = currTime + timeToCall;

                return id;
            };
        }

        if (!window.cancelAnimationFrame) {
            window.cancelAnimationFrame = function(id) {
                clearTimeout(id);
            };
        }

        this.startGetQrcode();
    }
}
</script>

<style lang="less">
    #cover_signin {
        background: rgba(0,0,0,.3);
        height: 100%;
    }
    #canvas {
        margin: auto;
        width: 70%;
        height: 40%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        // background: white;
        background: linear-gradient(to left, #f00, #f00) left top no-repeat, 
                linear-gradient(to bottom, #f00, #f00) left top no-repeat, 
                linear-gradient(to left, #f00, #f00) right top no-repeat,
                linear-gradient(to bottom, #f00, #f00) right top no-repeat, 
                linear-gradient(to left, #f00, #f00) left bottom no-repeat,
                linear-gradient(to bottom, #f00, #f00) left bottom no-repeat,
                linear-gradient(to left, #f00, #f00) right bottom no-repeat,
                linear-gradient(to left, #f00, #f00) right bottom no-repeat;
        background-size: 1px 20px, 20px 1px, 1px 20px, 20px 1px;
    }
</style>


