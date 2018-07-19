<template>
    <f7-page id="signin">
        <f7-navbar title="扫一扫" back-link>
        </f7-navbar>
        <div id="cover_signin">
            <div id="top"></div>
            <div class="ocrloader">
                <em></em>
                <span></span>
            </div>
            <div id="right"></div>
            <div id="left"></div>
            <div id="bottom"></div>
        </div>
    </f7-page>
</template>

<script>

export default {
    name: 'signin',
    data() {
        return {
            
        }
    },
    methods: {
        
    },
    mounted() {
        
    }
}
</script>

<style lang="less">
    #cover_signin {
        height: 100%;
    }
    #signin {
        background: transparent;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        height: 100vh;
        position: relative;
        #top {
            position: absolute;
            width: 100%;
            height: 30%;
            top: 0;
            left: 0;
            background: rgba(0,0,0,.3);
        }
        #bottom {
            position: absolute;
            width: 100%;
            height: 30%;
            bottom: 0;
            left: 0;
            background: rgba(0,0,0,.3);
        }
        #left {
            position: absolute;
            width: 15%;
            height: 40%;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            background: rgba(0,0,0,.3);
        }
        #right {
            position: absolute;
            width: 15%;
            height: 40%;
            top: 50%;
            right: 0;
            transform: translateY(-50%);
            background: rgba(0,0,0,.3);
        }
        .ocrloader {
            margin: auto;
            width: 70%;
            height: 40%;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            padding: 10px;
            border: 1px solid rgba(0,0,0,.3);
            box-sizing: border-box;
        }
        .ocrloader span {
            // position: absolute;
            // left: 0;
            // top: 0;
            width: 95%;
            height: 2%;
            display: block;
            margin: 0 auto;
            padding: 0;
            border-top: rgba(33, 161, 33, 0.3) solid 2px;
            border-bottom: rgba(33, 161, 33, .3) solid 2px;
            border-radius: 20%;
            background-color: rgba(33, 161, 33, .6);
            z-index: -1;
            transform: translateY(135%);
            animation: move 5s linear;
            animation-iteration-count: infinite;
        }
        .ocrloader > div {
            z-index: 1;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 48%;
            backface-visibility: hidden;
        }
        .ocrloader:before,
        .ocrloader:after,
        .ocrloader em:after,
        .ocrloader em:before {
            border-color: #11ce39;
            content: "";
            position: absolute;
            width: 60px;
            height: 60px;
            border-style: solid;
            border-width: 0px;
        }
        .ocrloader:before {
            left: 0;
            top: 0;
            border-left-width: 8px;
            border-top-width: 8px;
        }
        .ocrloader:after {
            right: 0;
            top: 0;
            border-right-width: 8px;
            border-top-width: 8px;
        }
        .ocrloader em:before {
            left: 0;
            bottom: 0;
            border-left-width: 8px;
            border-bottom-width: 8px;
        }
        .ocrloader em:after {
            right: 0;
            bottom: 0;
            border-right-width: 8px;
            border-bottom-width: 8px;
        }
        @keyframes move {
            0% {
                transform: translateY(135%);
            }
            25% {
                transform: translateY(1000%);
            }
            50% {
                transform: translateY(2300%);
            }
            75% {
                transform: translateY(1000%);
            }
            100% {
                transform: translateY(135%);
            }
        }
 }
</style>


