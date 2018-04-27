

<template>
  <scroller>
    <div class="center">
      <div class="center box A">
        <div class="center box B">
          <div class="center box C">
            <div class="box D">
              <text>{{text}}</text>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="weapper">
      <div class="graph">
      <div class="circle red"></div>
      <div class="circle green"></div>
      <div class="circle blue"></div>
    </div>
    <div class="graph1">
      <div class="text">invalid</div>
        <text class="text">valid in &#60;text&#62;</text>
    </div>
  </div>
  <div style="justify-content:center">
    <text class="freestyle">黝嘿</text>
  </div>
  <div class="weapper1">
    <div class="panel">
      <text class="text1" lines="3">Weex 是一套简单易用的跨平台开发方案，能以 Web 的开发体验构建高性能、可扩展的原生应用。Vue 是一个轻量并且功能强大的渐进式前端框架。</text>
    </div>
    <div class="panel">
      <text class="text1" lines="3">Weex is an cross-platform development solution that builds high-performance, scalable native applications with a Web development experience. Vue is a lightweight and powerful progressive front-end framework. </text>
    </div>
  </div>
  <div>
    <text class="text2">          首尾有空格（直接写在模板中） </text>
    <text class="text2">{{message}}</text>
  </div>
  <div style="justify-content:center">
    <!-- 符号实体 -->
    <text class="unicode">&#9824;{{unicode}}</text>
  </div>
  <div style="justify-content:center">
    <!-- https://gw.alicdn.com/tfs/TB1KF_ybRTH8KJjy0FiXXcRsXXa-890-1186.png  ../../assets/image.png-->
    <image class="image" src="https://gw.alicdn.com/tfs/TB1KF_ybRTH8KJjy0FiXXcRsXXa-890-1186.png"></image>
  </div>
  <div class="weapper2">
    <div>
      <image class="image1" src="https://gw.alicdn.com/tfs/TB1dZ4WowoQMeJjy0FnXXb8gFXa-950-1267.jpg" resize="cover"></image>
      <text class="title">cover 封面自动裁剪</text>
    </div>
    <div>
      <image class="image1" src="https://gw.alicdn.com/tfs/TB1dZ4WowoQMeJjy0FnXXb8gFXa-950-1267.jpg" resize="contain"></image>
      <text class="title">contain 包含</text>
    </div>
    <div>
      <image class="image1" src="https://gw.alicdn.com/tfs/TB1dZ4WowoQMeJjy0FnXXb8gFXa-950-1267.jpg" resize="stretch"></image>
      <text class="title">stretch 拉伸</text>
    </div>
  </div>
  <div class="weapper3">
    <div class="screen">
      <image class="image2" src="http://img.alicdn.com/imgextra/i4/283601870/TB2SapQXBjkJKJjSspfXXc2tXXa_!!283601870-0-beehive-scenes.jpg"></image>
      <text class="title2">贴纹身</text>
    </div>
  </div>
  </scroller>
</template>
<script>
  export default {
        created:function () {

        },
        data:{
          text: "我的div",
          message: '          首尾有空格（使用数据绑定）  ',
          unicode: '\u2668'
            },
        methods:{

        }

    }
</script>

<style>
.center {
  justify-content: center;
  align-items: center;
}
.box {
  background-color: rgba(0,180, 255, 0.4);
}
.A {
  width: 700px;
  height: 700px;
}
.B {
  width: 500px;
  height: 500px;
}
.C {
  width: 300px;
  height: 300px;
}
.D {
  width: 100px;
  height: 100px;
}
.weapper {
  justify-content: center;
  align-items: center;
}
.graph {
  position: relative;
  width: 700px;
  height: 700px;
  background-color: yellow;
}
.circle {
  position: absolute;
  width: 500px;
  height: 500px;
  border-width: 4px;
  border-style: solid;
  border-radius: 250px;
}
.red {
  top: 0;
  left: 100px;
  background-color: rgba(255, 88, 88, 0.5);
  border-color: rgba(255, 88, 88, 0.7); 
}
.green {
  left: 0;
  bottom: 0;
  background-color: rgba(106, 230, 106, 0.5);
  border-color: rgba(59, 195, 59, 0.7);
}
.blue {
    right: 0;
    bottom: 0;
    background-color: rgba(53, 143, 255, 0.5);
    border-color: rgba(53, 143, 255, 0.7);
}
.graph1 {
  width: 700px;
  height: 700px;
  background-color: rgba(110,110,110,1);
}
.text {
    text-align: center;
    width: 300px;
    margin-left: 75px;
    margin-top: 75px;
    padding-top: 12px;
    padding-bottom: 12px;
    border-width: 2px;
    border-style: solid;
    border-color: #DDDDDD;
    font-size: 36px;
    color: #FF6600
  }
/*文字样式*/
.freestyle {
  color: #43B212;
  text-align: center;
  font-size: 100px;
}
.weapper1 {
  flex-direction: column;
  justify-content: center;
  background-color: yellow;

}
.panel {
    width: 600px;
    margin-left: 75px;
    border-width: 2px;
    border-style: solid;
    border-color: #BBB;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 30px;
}
.text1 {
  lines:3;
  color: #34de32;
  font-size: 32px;
}
.text2 {
  width: 600px;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-left: 75px;
  margin-top: 100px;
  border-width: 2px;
  border-style: solid;
  border-color: #BBB;
  color: #666;
  font-size: 30px;
}
.unicode {
  font-size: 180px;
  text-align: center;
}
.image {
  width: 750px;
  height: 1000px;
}
.weapper2 {
  padding: 30px;
  justify-content: center;
  align-items: center;
}
.title{
  width: 500px;
  text-align: center;
  font-size: 60px;
  color: #666;
}
.image1{
  width: 500px;
  height: 280px;
  border-color: #41B883;
  border-style: solid;
  border-width: 2px;
  background-color: #666;
}

.weapper3 {
  flex-direction: column;
  justify-content: center;
}
.screen{
  position: relative;
  left: 41px;
}
.image2 {
  width: 668px;
  height: 752px;
}
.title2 {
  position: absolute;
  bottom: 20px;
  left: 34px;
  width: 600px;
  font-size: 50px;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: rgba(0,0,0,0.5);
  text-align: center;
  color: #FFFFFF;
}
</style>





<!-- loadmore -->
<template>
  <div class="div">
    <list class = "list" @loadmore="fetch" loadmoreoffset="30">
        <cell v-for="(num, i) in lists" :key="i" :ref="'item'+i">
          <div class="panel">
            <text class="text">{{num}}</text>
          </div>
        </cell>
      </list>
      <div>
        <div class="group">
          <text @click="goto10" class="button">Go to 10</text>
          <text @click="goto20" class="button">Go to 20</text>
        </div>
      </div>
  </div>
</template>

<script>
  const modal = weex.requireModule('modal')
  const LOADMORE_COUNT = 4
  const dom = weex.requireModule('dom')
  export default {
    data () {
      return {
        lists: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
      }
    },
    methods: {
      fetch (event) {
        if (this.lists.length > 30) {
          modal.toast({ message: 'resetLoadmore', duration: 1 })

          return
        }
        modal.toast({ message: 'loadmore', duration: 1 })

        setTimeout(() => {
          const length = this.lists.length
          for (let i = length; i < length + LOADMORE_COUNT; ++i) {
            this.lists.push(i + 1)
          }
        }, 800)
      },
      goto10(count){
        const el = this.$refs.item10[0]
        dom.scrollToElement(el, {})
      },
      goto20(count){
        const el = this.$refs.item20[0]
        dom.scrollToElement(el, {})
      }
    }
  }
</script>

<style scoped>
.list {
  width: 750px;
    height: 1000px;
}
.group {
  flex-direction: row;
  justify-content: center;
    height: 60px;
}
.button {
    width: 200px;
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 40px;
    margin-left: 30px;
    margin-right: 30px;
    text-align: center;
    color: #41B883;
    border-width: 2px;
    border-style: solid;
    border-color: rgb(162, 217, 192);
    background-color: rgba(162, 217, 192, 0.2);
 }

  .panel {
    width: 600px;
    height: 250px;
    margin-left: 75px;
    margin-top: 35px;
    margin-bottom: 35px;
    flex-direction: column;
    justify-content: center;
    border-width: 2px;
    border-style: solid;
    border-color: rgb(162, 217, 192);
    background-color: rgba(162, 217, 192, 0.2);
  }
  .text {
    font-size: 100px;
    text-align: center;
    color: #41B883;
  }
</style>

<!-- list -->
<template>
  <list>
    <cell class="cell">
      <div class="panel" v-for="char in lists" :key="char">
        <text class="text"
          @appear="onappear(char)"
          @disappear="ondisappear(char)"
          >{{char}}</text>
      </div>
    </cell>
  </list>
</template>

<script>
  const modal = weex.requireModule('modal')
  export default {
    data () {
      return {
        lists: ['A', 'B', 'C', 'D']
      }
    },
    methods: {
      onappear (char) {
        modal.toast({ message: char + ' appear' })
      },
      ondisappear (char) {
        modal.toast({ message: char + ' disappear' })
      }
    }
  }
</script>

<style scoped>
  .cell {
    flex-direction: column;
    align-items: center;
  }
  .panel {
    width: 600px;
    height: 900px;
    margin: 50px;
    justify-content: center;
    border-width: 4px;
    border-style: solid;
    border-color: rgb(162, 217, 192);
    background-color: rgba(162, 217, 192, 0.4);
  }
  .text {
    font-size: 200px;
    text-align: center;
    color: #41B883;
  }
</style>

<!-- scroller -->
<template>
  <div>
    <scroller class="scroller" append="tree" offset-accuracy="10" @scroll="scrollHandler">
      <image class="image" src="https://gw.alicdn.com/tps/TB1dzanMVXXXXXQXVXXXXXXXXXX-573-412.png"></image>
      <image class="image" src="https://gw.alicdn.com/tps/TB1p9CCMVXXXXa_XFXXXXXXXXXX-450-340.png"></image>
      <image class="image" src="https://gw.alicdn.com/tps/TB1zpSiMVXXXXchXFXXXXXXXXXX-448-338.png"></image>
      <image class="image" src="https://gw.alicdn.com/tps/TB1EuGIMVXXXXcoXpXXXXXXXXXX-452-337.png"></image>
      <image class="image" src="https://gw.alicdn.com/tps/TB1dzanMVXXXXXQXVXXXXXXXXXX-573-412.png"></image>
      <image class="image" src="https://gw.alicdn.com/tps/TB1p9CCMVXXXXa_XFXXXXXXXXXX-450-340.png"></image>
      <image class="image" src="https://gw.alicdn.com/tps/TB1zpSiMVXXXXchXFXXXXXXXXXX-448-338.png"></image>
      <image class="image" src="https://gw.alicdn.com/tps/TB1EuGIMVXXXXcoXpXXXXXXXXXX-452-337.png"></image>
      <image class="image" src="https://gw.alicdn.com/tps/TB1dzanMVXXXXXQXVXXXXXXXXXX-573-412.png"></image>
      <image class="image" src="https://gw.alicdn.com/tps/TB1p9CCMVXXXXa_XFXXXXXXXXXX-450-340.png"></image>
      <image class="image" src="https://gw.alicdn.com/tps/TB1zpSiMVXXXXchXFXXXXXXXXXX-448-338.png"></image>
      <image class="image" src="https://gw.alicdn.com/tps/TB1EuGIMVXXXXcoXpXXXXXXXXXX-452-337.png"></image>
    </scroller>
    <text class = "hint">{{hint}}</text>
  </div>
</template>

<script>
  export default  {
    data: {
      eventCnt: 0,
      hint:"",
    },
    methods: {
      scrollHandler: function(e) {
        var nowCnt = this.eventCnt + 1;
        this.eventCnt = nowCnt;
        this.offsetX = e.contentOffset.x;
        this.offsetY = e.contentOffset.y;
        this.hint = "scroll event count:" + this.eventCnt + " offsetX:" + this.offsetX + " offsetY:" +this.offsetY;
      }
    }
  };
</script>

<style scoped>
  .body {
    background-color: #ffffff;
  }
  .image {
    width:600px;
    background-color:#FFFFDF;
    height:400px;
  }
  .scroller {
    width: 600px;
    height:800px;
  }

  .hint {
    position: absolute;
    width: 750px;
    height: 150px;
    top: 900px;
    left: 0px;
  }
</style>

<!-- scroller -->
<template>
  <div>
    <scroller class="scroller" scroll-direction="horizontal" @scroll="scrollHandler" offset-accuracy="10">
      <div class="panel" v-for="char in lists" :key="char">
            <text class="text">{{char}}</text>
          </div>
    </scroller>
    <scroller class="scroller1" scroll-direction="vertical" @scroll="scrollHandler" offset-accuracy="10">
      <div class="panel" v-for="char in lists" :key="char">
            <text class="text">{{char}}</text>
          </div>
    </scroller>
    <text class = "hint">{{hint}}</text>
  </div>
</template>
<script>
  const modal = weex.requireModule('modal')
  export default {
    data () {
      return {
        eventCnt: 0,
        hint:"",
        lists: ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D']
      }
    },
    methods: {
      scrollHandler: function(e) {
        var nowCnt = this.eventCnt + 1;
        this.eventCnt = nowCnt;
        this.offsetX = e.contentOffset.x;
        this.offsetY = e.contentOffset.y;
        this.hint = "scroll event count:" + this.eventCnt + " offsetX:" + this.offsetX + " offsetY:" +this.offsetY;
      }
    }
  }
</script>
<style>
.scroller {
    width: 750px;
    flex-direction: row;
    height:400px;
  }
 .scroller1 {
    width: 750px;
    flex-direction: row;
    margin-top: 40px;
    height:400px;
  }
  .panel {
    width: 600px;
    height: 300px;
    margin: 50px;
    border-width: 4px;
    border-style: solid;
    border-color: rgb(162, 217, 192);
    background-color: rgba(162, 217, 192, 0.4);
    justify-content: center;
  }
  .text {
    font-size: 100px;
    text-align: center;
    color: #41B883;
  }
  .hint {
    position: absolute;
    width: 750px;
    height: 150px;
    top: 900px;
    left: 0px;
  }
</style>


<!-- 轮播图 -->
<template>
  <div class="ccDiv">
    <slider class="size" auto-play="true">
      <div v-for="src in posters">
        <image class="size" resize="cover" :src="src"></image>
      </div>
      <indicator class="indicator"></indicator>
    </slider>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        posters: [
        'https://gw.alicdn.com/tfs/TB1wKS.h8fH8KJjy1XbXXbLdXXa-140-140.png_150x10000.jpg',
        'https://gw.alicdn.com/tfs/TB1oM1qaMvD8KJjy0FlXXagBFXa-140-140.png_150x10000.jpg',
        'https://gw.alicdn.com/tfs/TB1Oiz0b22H8KJjy0FcXXaDlFXa-140-140.png_150x10000.jpg',
        'https://gw.alicdn.com/tfs/TB1LhJzQFXXXXabXXXXXXXXXXXX-140-140.png_150x10000.jpg',
        'https://gw.alicdn.com/tfs/TB1L5upaH_I8KJjy1XaXXbsxpXa-140-140.png_150x10000.jpg'
        ]
      }
    }
  }
</script>

<style scoped>
.ccDiv{
  width: 750px;
  height: 600px;
}
.size {
  width: 750px;
  height: 600px;
justify-content:center;
}
.indicator {
position: absolute;
left: 0;
right: 0;
bottom: 0;
height: 60px;
background-color: rgba(0, 0, 0, 0.3);

itemColor: #DDDDDD;
itemSelectedColor: rgb(0, 180, 255);
}
</style>



<!-- 输入框 -->
<template>
  <scroller>
      <text class="text">oninput:txtInput {{txtInput}} txtChange:{{txtChange}} txtReturnType:{{txtReturnType}} returnKeyType:{{returnKeyType}} txtSelection:{{txtSelection}}</text>
      <div class="divcss">
        <text class="button" value="setRange" type="primary" @click="setRange"></text>
            <text class="button" value="getRange" type="primary" @click="getSelectionRange"></text>
            <text class="button" value="Focus" type="primary" @click="focus"></text>
            <text class="button" value="Blur" type="primary" @click="blur" ></text>
      </div>
    <input type="text" placeholder="done" class="input" return-key-type = "done" @change="returnKeyType" @return="onReturn" @input="oninput" ref="input1" @focus="onfocus('a')" @blur="onblur('a')" :style="{borderColor : borderDoneColor}">

    <input type="text" placeholder="请输入文字" class="input" ref="inputselection" value="123456789" @focus="onfocus('b')" @blur="onblur('b')" :style="{borderColor : borderColor}">
    <!-- 不可交互 -->

    <input type="text" placeholder="disable" class="input" disabled="true">
    <!-- 自动设置焦点 -->
    <input type="text" placeholder="autofocus" class="input" autofocus="false" @focus="onfocus" @blur="onblur" >
    <!-- 字符串限制 -->
    <input type="text" placeholder="maxlength=5" class="input" maxlength="5" @focus="onfocus" @blur="onblur">

    <!-- password -->
    <input type="password" placeholder="请输入10位以内的密码" class="input" maxlength="10" @focus="onfocus" @blur="onblur">
    <input type="tel" placeholder="tel" class="input" @focus="onfocus" @blur="onblur">
    <input type="url" placeholder="url" class="input" @focus="onfocus" @blur="onblur">
    <input type="email" placeholder="email" class="input" @focus="onfocus" @blur="onblur" >
    </scroller>
</template>

<script>
const modal = weex.requireModule('modal')
function showToast (value){
          modal.toast({
            message: value,
            duration: 2
          })
        }
  export default{
    data(){
      return {
        txtInput: "",
        txtChange: '',
        txtReturnType: "",
        returnKeyType: "",
        txtSelection: "",
        borderColor: '#41B883',
        borderDoneColor: '#41B883'

      }
    },
    methods: {
      returnKeyType(e){
        this.txtChange = e.value
      },
      onReturn(e){
        this.txtReturnType = e.value
        this.returnKeyType = e.returnKeyType
      },
      oninput(e){
        this.txtInput = e.value
      },
      focus: function () {
            this.$refs['input1'].focus();

        },
       blur: function (e) {
        this.$refs['input1'].blur();
      },
      setRange: function() {
        console.log(this.$refs["inputselection"]);
        this.$refs["inputselection"].setSelectionRange(2, 6);
      },
      getSelectionRange: function() {
        console.log(this.$refs["inputselection"]);
        var self = this;
    this.$refs["inputselection"].getSelectionRange(function(e) {
    self.txtSelection = e.selectionStart +'-' + e.selectionEnd;
    }); 
    },
    onfocus (value) {
    	if (value==='a') {
    		this.borderDoneColor = "#AF2C91"
    		this.borderColor = "#41B883"
    	} 
    	else if (value==='b') {
    		this.borderDoneColor = "#41B883"
    		this.borderColor = "#AF2C91"
    	}
      },
      onblur (event) {
      	this.borderDoneColor = "#41B883"
        this.borderColor = "#41B883"
      },
  }
}
</script>
<style scoped>
.divcss{
  flex-direction: row;
  margin-bottom: 16px;
  justify-content: space-between;
}
.button {
    font-size: 36;
    width: 150px;
    color: #41B883;
    text-align: center;
    padding-top: 10;
    padding-bottom: 10;
    border-width: 2;
    border-style: solid;
    margin-right: 20;
    border-color: rgb(162, 217, 192);
    background-color: rgba(162, 217, 192, 0.2);
  }
  .input {
    placeholder-color: #C1DFD2;
    font-size: 16wx;
    width: 600px;
    height: 40wx;
    margin-top: 50px;
    margin-left: 75px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px;
    color: #666666;
    border-width: 2px;
    border-style: solid;
    border-radius: 20wx;
    border-color: #41B883;
  }
  .text{
    font-size: 16wx;
    width: 600px;
    height: 150wx;
    margin-top: 50px;
    margin-left: 75px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px;
    color: #666666;
    border-width: 2px;
    border-style: solid;
    border-radius: 20wx;
    border-color: #41B883;
  }
</style>



<!-- 输入框 -->
<template>
  <div>
    <text class="text">txtInput :{{txtInput}} txtChange:{{txtChange}} txtReturnType:{{txtReturnType}} returnKeyType:{{returnKeyType}} focu:{{focu}}</text>
    <input type="text"
      class="input"
      @input="oninput"
      @change="onchange"
      @focus="onfocus"
      @blur="onblur"
      @return="onReturn" 
      return-key-type="done"/>
  </div>
</template>

<script>
  const modal = weex.requireModule('modal')
  export default {
    data(){
      return {
        txtInput: "",
        txtChange: '',
        txtReturnType: "",
        returnKeyType: "",
        focu: ""
      }
    },
    methods: {
      oninput (event) {
        this.txtInput = event.value + "\n"
      },
      onchange (event) {
        this.txtChange = event.value + "\n"

      },
      onfocus (event) {
        this.focu = event.timestamp + ' onfocus' + "\n"

      },
      onblur (event) {
        this.focu = event.timestamp + ' onblur' + "\n"

      },
      onReturn(event) {
        this.txtReturnType = event.value + "\n"
    this.returnKeyType = event.returnKeyType + "\n"

      }
    }
  }
</script>

<style scoped>
.text{
    font-size: 16wx;
    width: 600px;
    height: 150wx;
    margin-top: 50px;
    margin-left: 75px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px;
    color: #666666;
    border-width: 2px;
    border-style: solid;
    border-radius: 20wx;
    border-color: #41B883;
  }
  .input {
    placeholder-color: #C1DFD2;
    font-size: 16wx;
    width: 600px;
    height: 40wx;
    margin-top: 50px;
    margin-left: 75px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px;
    color: #666666;
    border-width: 2px;
    border-style: solid;
    border-radius: 20wx;
    border-color: #41B883;
  }
</style>

<template>
  <div class="container">
    <scroller class="scroller">
      <text class="text">txtoninput:{{txtoninput+"\n"}} onchange:{{txtChange+"\n"}} onfocus:{{txtonfocus+"\n"}} txtonblur:{{txtonblur+"\n"}} txtonlongpress:{{txtonlongpress+"\n"}} txtonappear:{{txtonappear+"\n"}} txtondisappear:{{txtondisappear+"\n"}} </text>
    </scroller>
    <textarea class="textarea" placeholder="type textarea" rows="3" @input="oninput" @change="onchange" @focus="onfocus" @blur="onblur" @longpress="onlongpress" @appear="onappear" @disappear="ondisappear">
    </textarea>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        txtoninput:"",
        txtChange:"",
        txtonfocus:"",
        txtonblur:"",
        txtonlongpress:"",
        txtonappear:"",
        txtondisappear:""
      }
    },
    methods: {
      oninput(event){
        this.txtoninput = event.value
      },
      onchange(event){
        this.txtChange = event.value 
      },
      onfocus(event){
        this.txtonfocus = event.timestamp 
      },
      onblur(event){
        this.txtonblur = event.timestamp 
      },
      onlongpress(event){
        this.txtonlongpress = event.type + event.timestamp
      },
      onappear(event){
        this.txtonappear = event.type + event.target + event.timestamp + event.direction
      },
      ondisappear(event){       
        this.txtondisappear = event.type + event.target + event.timestamp + event.direction
      }
    }
  }
</script>
<style>
.container{
  align-items: center;
}
.scroller{
  width: 600px;
    height: 150wx;
}
.text{
    font-size: 16wx;
    margin: 20px;
  padding: 20px;
    color: #666666;
    border-width: 2px;
    border-style: solid;
    border-radius: 20wx;
    border-color: #41B883;
  }
.textarea{
  font-size: 20wx;
  width: 650px;
  margin-top: 20px;
  padding: 20px;
  color: #666666;
  border-width: 2px;
  border-color: #41B883;
  border-style: solid;
}
</style>


<template>
  <div class="container">
    <div class="list">
      <text class="label">normal</text>
      <switch></switch>
    </div>
    <div class="list">
      <text class="label">checked</text>
      <switch checked="true"></switch>
    </div>
    <div class="list">
      <text class="label">disabled</text>
      <switch checked="true" disabled="true"></switch>
      <switch disabled="true"></switch>
    </div>
    <div class="list">
      <text class="label">onchange</text>
      <switch @change="onchange"></switch>
      <text class="label">{{txtChange}}</text>
    </div>
  </div>
</template>
<script>
export default{
    data(){
      return {
        txtoninput:"",
        txtChange: false,
        txtonfocus:"",
        txtonblur:"",
        txtonlongpress:"",
        txtonappear:"",
        txtondisappear:""
      }
    },
    methods: {
      onchange(event){
        this.txtChange = event.value 
      }
    }
  }
</script>
<style>
.container{
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.list{
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 20px;
  margin-top: 20px;
}
.label{
  font-size: 30px;
  line-height: 60px;
  color: #BBB;
  margin-left: 10px;
}
</style>

<template>
  <div container>
    <video class="video" :src="src" auto-play="true" controls="false" @start="onstart" @pause="onpause" @finish="onfinish" @fail="onfail"></video>
    <text class="info">state:{{state}}</text>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        state:"--",
        src:'../../assets/login_video.mp4'
      }
    },
    methods:{
      onstart(event){
        this.state = "onstart"
      },
      onpause(event){
        this.state = "onpause"
      },
      onfinish(event){
        this.state = "onfinish"
      },
      onfail(event){
        this.state = "onfail"
      },
    }
  }
</script>
<style scoped>
.container{
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.video {
    width: 640px;
    height: 360px;
    margin-top: 60px;
    margin-left: 60px;
  }
  .info {
    margin-top: 40px;
    font-size: 40px;
    text-align: center;
  }
</style>


<template>
  <div container>
    <text class="info">title:{{title}}</text>
    <text class="info">state:{{state}}</text>
    <web  class="web" ref="webview":src="src" @pagestart="onpagestart" @pagefinish="onfinish" @error="onerror" @receivedtitle="onreceivedtitle"></web>
    <div class="divcss">
        <text class="button" value="←←←" type="primary" @click="onback"></text>
            <text class="button" value="→→→" type="primary" @click="onnext"></text>
            <text class="button" value="reload" type="primary" @click="onreload"></text>
      </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        title: "webView",
        state:"webView",
        src:'https://www.baidu.com',
        canGoBack: false,
            canGoForward: false,
      }
    },
    methods:{
      onpagestart(event){
        this.state = event.url
      },
      onfinish(event){
        this.state ="cango: " + event.canGoBack + "cangofo" + event.canGoForward

        this.canGoForward = event.canGoForward
        this.canGoBack = event.canGoBack
        if (event.title){
        this.title = event.title  
        }
      },
      onerror(event){
        this.state = "onfail" + event.url
      },
      onback(event){
        if (this.canGoBack){
          var webView = weex.requireModule("webview")
          webView.goBack(this.$refs.webview)
        }
      },
      onnext(event){
        if (this.canGoForward){
          var webView = weex.requireModule("webview")
          webView.goForward(this.$refs.webview)
        }
      },
      onreload(event){
        var webview = weex.requireModule('webview');
            webview.reload(this.$refs.webview);
      },
      onreceivedtitle(event){
        this.title = event.title
      }
    }
  }
</script>
<style scoped>
.container{
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.info {
    margin-top: 40px;
    font-size: 40px;
    text-align: center;
  }
.web{
  margin-top: 40px;
  width: 750px;
  height: 600px;
}
.divcss{
  margin-top: 40px;
  flex-direction: row;
  margin-bottom: 16px;
  justify-content: space-between;
}
.button {
    font-size: 36px;
    width: 150px;
    color: #41B883;
    text-align: center;
    padding-top: 10;
    padding-bottom: 10;
    border-width: 2;
    border-style: solid;
    margin-right: 20;
    border-color: rgb(162, 217, 192);
    background-color: rgba(162, 217, 192, 0.2);
  }
</style> 

<!-- 瀑布流 -->
<template>
	<waterfall class="page" ref="waterfall"
	v-bind:style="{padding:padding}"
	:column-width="columnWidth" :column-count="columnCount" :column-gap="columnGap"
	:show-scrollbar="showScrollbar" :scrollable="scrollable"
	@scroll="recylerScroll" @loadmore="loadmore" loadmoreoffset=3000
	>
		<refresh class="refresh" @refresh="onrefresh" @pullingdown="onpullingdown" :display="refreshing ? 'show' : 'hide'">
      	<loading-indicator class="indicator"></loading-indicator>
      	<text class="refreshText">{{refreshText}}</text>
  		</refresh>
		<header class="header" ref="header" v-if="showHeader">
			<div class="banner">
				<image class="absolute" src="https://gw.alicdn.com/tps/TB1ESN1PFXXXXX1apXXXXXXXXXX-1000-600.jpg" resize="cover"></image>
				<div class="bannerInfo">
					<image class="avatar" src="https://gw.alicdn.com/tps/TB1EP9bPFXXXXbpXVXXXXXXXXXX-150-110.jpg" resize="cover"></image>
					<text class="name">Adam Cat</text>
					<div class="titleWrap">
						<text class="title">Gemious</text>
					</div>
				</div>
				<div class="bannerPhotoWrap">
				<image class="bannerPhoto" v-for="photo in banner.photos" :src="photo.src"></image>
				</div>
			</div>
		</header>
		<header class="stickyHeader">
			<div v-if="stickyHeaderType === 'none'" class="stickyWrapper">
				<text class="stickyText">Sticky Header</text>
			</div>
			<div v-if="stickyHeaderType === 'appear'" class="stickyWrapper">
				<div class="stickyTextImageWrapper">
					<text class="stickyText">Last Appear:</text>
		          	<image class="stickyImage" :src="appearImage"></image>
				</div>
				<div class="stickyTextImageWrapper">
					<text class="stickyText">Last Disappear:</text>
          			<image class="stickyImage" :src="disappearImage"></image>
				</div>
			</div>
			<div v-if="stickyHeaderType === 'scroll'" class="stickyWrapper">
				<text class="stickyText">Content Offset:{{contentOffset}}</text>
			</div>
		</header>
		<cell v-for="(item, index) in items" :key="item.src" class="cell" ref="index">
			<div class="item" @click="onItemclick(item.behaviour, index)" @appear="itemAppear(item.src)" @disappear="itemDisappear(item.src)" >
				<text v-if="item.name" class="itemName">{{item.name}}</text>
				<image class="itemPhoto" :src="item.src"></image>
				<text v-if="item.desc" class="itemDesc">{{item.desc}}</text>
				<text v-if="item.behaviourName" class="itemClickBehaviour">{{item.behaviourName}}</text>
			</div>
		</cell>
		<header class="footer" ref="footer">
			<text class="stickyText">Footer</text>
		</header>
		<div ref="fixed" class="fixedItem" @click="scrollToNext">
			<text class="fixedText">bot</text>
		</div>
	</waterfall>
</template>


<style>
.page {
	background-color: #EFEFEF;
}
.refresh {
    height: 128;
    width: 750;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
.refreshText{
	color: #888;
	font-weight: bold;
}
.indicator {
	color: #888;
	height: 40px;
	width: 40px;
	margin-right: 30px;
}
.absolute {
	position: absolute;
	top: 0px;
	width: 750px;
	height: 377px;
}
.banner {
	height: 377px;
	flex-direction: row;
}
.bannerInfo {
	width: 270px;
	align-items: center;
	justify-content: center;
}
.avatar {
	width: 148px;
	height: 108px;
	border-radius: 54px;
	border-width: 4px;
	border-color: #FFF;
	border-bottom: 14px;
}
.name {
	font-weight: bold;
	font-size: 32px;
	color: #FFF;
	line-height: 32px;
	text-align: center;
	margin-bottom: 16px;
}
.titleWrap {
	width: 100px;
	height: 24px;
	margin-bottom: 10px;
	background-color: rgba(255, 255, 255, 0.8);
	border-radius: 12;
	justify-content: center;
	align-items: center;
}
.title {
    font-size: 20;
    color: #000000;
}
.bannerPhotoWrap {
	width: 449px;
	height: 305px;
	background-color: #FFF;
	border-radius: 12px;
	margin-top: 35px;
	padding: 12px;
	flex-direction: row;
	justify-content: space-between;
	flex-wrap: wrap;
}
.bannerPhoto {
	width: 137px;
	height: 137px;
	margin-bottom: 6px;
}
.stickyHeader {
	position: sticky;
	height: 94px;
	flex-direction: row;
	padding-bottom: 6px;
}
.stickyWrapper {
	width: 750px;
	flex-direction: row;
	background-color: #00cc99;
	justify-content: center;
	align-items: center;
	flex: 1px;
}
.stickyTextImageWrapper {
	flex: 1px;
	justify-content: center;
	align-items: center;
	flex-direction: row;
}
.stickyText {
	color: #FFF;
	font-weight: bold;
	font-size: 32px;
	margin-right: 12px;
}
.stickyImage {
	width: 64px;
	height: 64px;
	border-radius: 32px;
}
.cell {
	padding-top: 6px;
	padding-bottom: 6px;
}
.item {
	background-color: #FFF;
	align-items: center;
}
.itemName {
	font-size: 28px;
	color: #333;
	line-height: 42px;
	text-align: left;
	margin-top: 24px;
}
.itemPhoto{
	margin-top: 18px;
	width: 220px;
	height: 220px;
	margin-bottom: 18;
}
.itemDesc {
	font-size: 24px;
	margin: 12px;
	color: #999;
	line-height: 36px;
	text-align: left;
}
.itemClickBehaviour {
	font-size: 36px;
	color: #00cc99;
	line-height: 36px;
	text-align: center;
	margin-top: 6px;
	margin-left: 24px;
	margin-right: 24px;
	margin-bottom: 30px;
}
.footer {
	height: 94px;
	justify-content: center;
	align-items: center;
	background-color: #00cc99;
}
.fixedItem {
	position: fixed;
    width:120px;
    height:120px;
    background-color:#00cc99;
    right: 32px;
    bottom: 32px;
    border-radius: 60px;
    align-items: center;
    justify-content: center;
}
.fixedText {
	font-size: 32px;
	color: white;
	line-height: 32px;
}
</style>
<script>
const modal = weex.requireModule('modal')
	export default {
		data:function(){
			const items = [
			{
				src:'https://gw.alicdn.com/tps/TB1Jl1CPFXXXXcJXXXXXXXXXXXX-370-370.jpg',
				name:'Thomas Carlyle',
				desc:'Genius only means hard-working all one\'s life',
				behaviourName: 'Change width',
				behaviour: 'changeColumnWidth',
			},
			{
				src:'https://gw.alicdn.com/tps/TB1Hv1JPFXXXXa3XXXXXXXXXXXX-370-370.jpg',
	          	desc:'The man who has made up his mind to win will never say "impossible "',
	          	behaviourName: 'Change gap',
	          	behaviour: 'changeColumnGap'
	        },
	        {
		          src:'https://gw.alicdn.com/tps/TB1eNKuPFXXXXc_XpXXXXXXXXXX-370-370.jpg',
		          desc:'There is no such thing as a great talent without great will - power',
		          behaviourName: 'Change count',
		          behaviour: 'changeColumnCount'
	        },
	        {
		          src:'https://gw.alicdn.com/tps/TB1DCh8PFXXXXX7aXXXXXXXXXXX-370-370.jpg',
		          name:'Addison',
		          desc:'Cease to struggle and you cease to live',
		          behaviourName: 'Show scrollbar',
		          behaviour: 'showScrollbar',
	        },
	        {
		          src:'https://gw.alicdn.com/tps/TB1ACygPFXXXXXwXVXXXXXXXXXX-370-370.jpg',
		          desc:'A strong man will struggle with the storms of fate',
		          behaviourName: 'Listen appear',
		          behaviour: 'listenAppear',
	        },
	        {
		          src:'https://gw.alicdn.com/tps/TB1IGShPFXXXXaqXVXXXXXXXXXX-370-370.jpg',
		          name:'Ruskin',
		          desc:'Living without an aim is like sailing without a compass',
		          behaviourName: 'Set scrollable',
		          behaviour: 'setScrollable',
	        },
	        {
		          src:'https://gw.alicdn.com/tps/TB1xU93PFXXXXXHaXXXXXXXXXXX-240-240.jpg',
		          behaviourName: 'waterfall padding',
	        	  behaviour: 'setPadding',
	        },
	        {
		          src:'https://gw.alicdn.com/tps/TB19hu0PFXXXXaXaXXXXXXXXXXX-240-240.jpg',
		          name:'Balzac',
		          desc:'There is no such thing as a great talent without great will - power',
		          behaviourName: 'listen scroll',
		          behaviour: 'listenScroll',
	        },
	        {
		          src:'https://gw.alicdn.com/tps/TB1ux2vPFXXXXbkXXXXXXXXXXXX-240-240.jpg',
		          behaviourName: 'Remove cell',
		          behaviour: 'removeCell',
	        },
	        {
		          src:'https://gw.alicdn.com/tps/TB1tCCWPFXXXXa7aXXXXXXXXXXX-240-240.jpg',
		          behaviourName: 'Move cell',
		          behaviour: 'moveCell',
	        }
	        ]
	        let repeatItems = [];
	        for (let i=0; i < 3; i++) {
	        	repeatItems.push(...items)
	        }
	        return {
	        	padding: 0,
	        	refreshing:false,
	        	refreshText: '↓   pull to refresh...',
	        	columnCount: 2,
	        	columnGap: 12,
	        	columnWidth: 'auto',
	        	contentOffset: '0',
	        	showHeader: true,
	        	showScrollbar: false,
	        	scrollable: true,
	        	showStickyHeader: false,
	        	appearImage: null,
	        	disappearImage: null,
	        	stickyHeaderType: 'none',
	        	banner: {
	        		photos: [
	        		{src:'https://gw.alicdn.com/tps/TB1JyaCPFXXXXc9XXXXXXXXXXXX-140-140.jpg'},
	        		{src:'https://gw.alicdn.com/tps/TB1MwSFPFXXXXbdXXXXXXXXXXXX-140-140.jpg'},
            		{src:'https://gw.alicdn.com/tps/TB1U8avPFXXXXaDXpXXXXXXXXXX-140-140.jpg'},
            		{src:'https://gw.alicdn.com/tps/TB17Xh8PFXXXXbkaXXXXXXXXXXX-140-140.jpg'},
            		{src:'https://gw.alicdn.com/tps/TB1cTmLPFXXXXXRXXXXXXXXXXXX-140-140.jpg'},
            		{src:'https://gw.alicdn.com/tps/TB1oCefPFXXXXbVXVXXXXXXXXXX-140-140.jpg'}
	        		]
	        	},
	        	items: repeatItems
	        }
		},
		created(){
			// let self = this
   //    		setTimeout(()=>{
   //    			weex.requireModule('dom').getComponentRect(this.$refs.fixed, result=>{
   //    				const x = result.size.left
			//         const y = result.size.top
			//         const width = result.size.width
			//         const height = result.size.height
			//         self.fixedRect = `${x}|${y}|${width}|${height}`
			//     })
   //    		}, 3000)
		},
		methods: {
			recylerScroll(e){
				this.contentOffset = e.contentOffset.y
			},
			loadmore(e){
				this.$refs.waterfall.resetLoadmore()
			},
			showOrRemoveHeader(e){
				this.showHeader = !this.showHeader
			},
			onItemclick(behaviour, index){
				switch(behaviour){
					case 'changeColumnCount':
					this.changeColumnCount()
					break
					case 'changeColumnGap':
					this.changeColumnGap()
					break
					case 'changeColumnWidth':
					this.changeColumnWidth()
					break
					case 'showScrollbar':
		            this.showOrHideScrollbar()
		            break
		          	case 'listenAppear':
		            this.listenAppearAndDisappear()
		            break
		          	case 'setScrollable':
		            this.setScrollable()
		            break
		         	 case 'setPadding':
		            this.setRecyclerPadding()
		            break
		          	case 'listenScroll':
		            this.listenScrollEvent()
		            break
		          	case 'removeCell':
		            this.removeCell(index)
		            break
		          	case 'moveCell':
		            this.moveCell(index)
		            break
				}
			},
			itemAppear(src){
				this.appearImage = src
			},
			itemDisappear(src){
				this.disappearImage = src
			},
			changeColumnCount(){
				if(this.columnCount === 2){
					this.columnCount = 3
				} else {
					this.columnCount = 2
				}
			},
			changeColumnGap(){
				if(this.columnGap === 12){
					this.columnGap = 'normal'
				} else {
					this.columnGap = 12
				}
			},
			changeColumnWidth(){
				if (this.columnWidth == 'auto') {
					this.columnWidth = 600
				} else {
					this.columnWidth = 'auto'
				}
			},
			showOrHideScrollbar(){
				this.showScrollbar = !this.showScrollbar
			},
			setScrollable(){
				this.scrollable = !this.scrollable
			},
			listenAppearAndDisappear(){
				this.stickyHeaderType = (this.stickyHeaderType === 'appear' ? 'none' : 'appear')
			},
			listenScrollEvent(){
				this.stickyHeaderType = (this.stickyHeaderType === 'scroll' ? 'none' : 'scroll')
			},
			scrollToNext(){
        		weex.requireModule('dom').scrollToElement(this.$refs.footer)
			},
			setRecyclerPadding(){
				this.padding = (this.padding == 0 ? 12 : 0)
			},
			removeCell(index){
				this.items.splice(index, 1)
			},
			moveCell(index){
				if(index == 0){
					this.items.splice(this.items.length - 1, 0, this.items.splice(index, 1)[0])
				} else {
					this.items.splice(0, 0, this.items.splice(index, 1)[0])
				}
			},
			onrefresh(event){
				this.refreshing = true
		        this.refreshText = "loading..."
		        setTimeout(() => {
		          this.refreshing = false
		          this.refreshText = '↓   pull to refresh...'
		        }, 2000)
			},
			onpullingdown(event){
				if (event.pullingDistance < -64) {
		          this.refreshText = '↑   release to refresh...'
		        } else {
		          this.refreshText = '↓   pull to refresh...'
		        }
			}
		},

	}
</script>


<template>
	<recycle-list class="list" for="(item, cellIndex) in listData" switch="type">
		<cell-slot case='static'>
			<text class="text">-- static --</text>
		</cell-slot>
		<cell-slot case='dynamic'>
			<div class="card">
				<text class="card-title">{{cellIndex}}</text>
				<div class="card-bordy">
					<text class="card-label">{{item.label}}</text>
				</div>
			</div>
		</cell-slot>
	</recycle-list>
</template>
<script>
	function generateData (sentence) {
    return sentence.split('').map((type, index) => {
      if (type === '_') {
        return { type: 'static' }
      }
      return {
        type: 'dynamic',
        label: type
      }
    })
  }

	export default {
		data(){
			return {
				listData: generateData('_MAY_THE_FORCE_BE_WITH_YOU_')
			}
		}
	}
</script>
<style scoped>
.list{
	width: 750px;
}
.text{
	text-align: center;
	font-size: 50px;
	padding: 15px;
	color: #606060;
	background-color: #E8E8E8;
}
.card{
	width: 650px;
	border-width: 4px;
	border-style: solid;
	border-color: #E8E8E8;
	border-radius: 20px;
	margin: 50px;
}
.card-title{
	text-align: center;
	font-size: 40px;
	color: #888;
	background-color: #F5F5F5;
	padding: 12px;
	border-bottom-width: 2px;
	border-bottom-style: solid;
	border-bottom-color: #E0E0E0;
}
.card-bordy{
	height: 200px;
	justify-content: center;
}
.card-label{
	text-align: center;
	font-size: 100px;
	color: #1FB5FC;
}
</style>



<template>
	<recycle-list for="(img, i) in images">
		<cell-slot :key="i">
			<div>
				<text class="title" :value="i"></text>
				<image class="image" :src="img.src"/>
			</div>
		</cell-slot>
	</recycle-list>
</template>
<script>
	const dataset=[
	{ type: 'picture', src: '//gw.alicdn.com/imgextra/TB2uQAFhb_I8KJjy1XaXXbsxpXa_!!89-0-lubanu.jpg_q50.jpg' },
	{ type: 'picture', src: '//img.alicdn.com/simba/img/TB19heYdwn.PuJjSZFkSuw_lpXa.jpg_q50.jpg' },
    { type: 'picture', src: '//aecpm.alicdn.com/simba/img/TB14ab1KpXXXXclXFXXSutbFXXX.jpg_q50.jpg' },
    { type: 'picture', src: '//img.alicdn.com/imgextra/i1/174/TB2xzb0eOqAXuNjy1XdXXaYcVXa_!!174-0-luban.jpg_q50.jpg' },
    { type: 'picture', src: '//gw.alicdn.com/imgextra/TB27XSvg6nD8KJjSspbXXbbEXXa_!!12-0-lubanu.jpg_q50.jpg' },
    { type: 'picture', src: '//gw.alicdn.com/imgextra/TB2cF.xfTnI8KJjSszbXXb4KFXa_!!112-0-lubanu.jpg_q50.jpg' },
    { type: 'picture', src: '//gw.alicdn.com/imgextra/TB2ZweVg9_I8KJjy0FoXXaFnVXa_!!158-0-lubanu.jpg_q50.jpg' },
    { type: 'picture', src: '//gw.alicdn.com/imgextra/TB2O_AKctHO8KJjSZFtXXchfXXa_!!53-0-lubanu.jpg_q50.jpg' }
  ]
  export default {
  	data(){
  		let N = 10
  		const images = []
  		while(N--){
  			images.push(...dataset)
  		}
  		return {images}
  	}
  }
</script>
<style scoped>
.title {
	text-align: center;
    font-size: 40px;
    color: #888;
    padding: 10px;
    background-color: #EEE;
}
.image {
	width: 750px;
	height: 235px;
}
</style>


<template>
	<recycle-list class="list" for="(item, i) in floors" switch="type">
		<cell-slot case="floor" :key="i">
			<div class="floor">
				<text class="title">{{item.title}}</text>
				<text class="desc" lines="2">{{item.desc}}</text>
				<div class="image-section">
					<image class="image" :src="source" v-for="(source, i) in item.pictures" :key="i"/>
				</div>
				<text class="comment">{{item.count}} 人说好</text>
			</div>
		</cell-slot>
	</recycle-list>
</template>
<script>
	const dataset = [
    {
      type: 'floor',
      title: '就造专属感，给孩子寻个座椅好玩伴',
      desc: '犹记得儿时的风筝带着斑斓的色彩在天空飘过；那小河里躲迷藏的鱼虾，还待着小伙伴们一起去捕捉，如今的孩童没有了这些简单且纯粹的娱乐项目，生活在高楼城市中的他们，该当怎样度过自己的童年才是美好的？',
      pictures: [
        'https://gw.alicdn.com/tfscom/i3/48292642/TB29OtIakz_F1JjSZFkXXcCaXXa_!!48292642.jpg_250x250q90s200.jpg',
        'https://gw.alicdn.com/imgextra/i4/706778912/TB2hvwSXBvBIuJjy1zeXXbGBpXa_!!706778912-0-beehive-scenes.jpg_250x250q90s200.jpg',
        'https://gw.alicdn.com/imgextra/i3/706778912/TB2wX.fcxz9F1JjSZFsXXaCGVXa_!!706778912-0-beehive-scenes.jpg_250x250q90s200.jpg'
      ],
      count: 237,
    }, {
      type: 'floor',
      title: '睡袍穿不对，脱光也不媚！',
      desc: '“Ihatemynightgown（我讨厌我的睡袍）.”经典电影《罗马假日》中，赫本饰演的安妮公主躺在梦幻的宫廷大床上，抱怨她身上那华丽的大睡袍臃肿不便，为公主的浪漫逃逸埋下伏笔。想象一下，男朋友刚刚',
      pictures: [
        'https://gw.alicdn.com/imgextra/i3/3044653839/TB2a_nAXgsSMeJjSspdXXXZ4pXa_!!3044653839-0-daren.jpg_250x250q90s200.jpg',
        'https://gw.alicdn.com/imgextra/i1/3044653839/TB2qrPCXiERMeJjSspiXXbZLFXa_!!3044653839-0-daren.jpg_250x250q90s200.jpg',
        'https://gw.alicdn.com/imgextra/i1/3044653839/TB2ySjuXgsSMeJjSspeXXa77VXa_!!3044653839-0-beehive-scenes.jpg_250x250q90s200.jpg'
      ],
      count: 876,
    }, {
      type: 'floor',
      title: '上天入海？运动相机帮你搞定',
      desc: '现如今相机好像成为了我们每个人必不可少的装备，不管是专业的相机还是我们可拍照的手机，我们使用到它的频率也越来越高。为了追求更好的拍摄质量，人们似乎也愿意花更多的钱去购买好的拍摄装备',
      pictures: [
        'https://gw.alicdn.com/tfscom/i3/462856946/TB2VzQswB4lpuFjy1zjXXcAKpXa_!!462856946.jpg_250x250q90s200.jpg',
        'https://gw.alicdn.com/tfscom/i2/2811920170/TB2rCqHpVXXXXcZXpXXXXXXXXXX_!!2811920170.png_250x250.jpg',
        'https://gw.alicdn.com/imgextra/i4/836552381/TB2c1q3aZSfF1JjSsplXXbrKFXa_!!836552381-0-beehive-scenes.jpg_250x250q90s200.jpg'
      ],
      count: 59,
    }, {
      type: 'floor',
      title: '关于培根的那些事，教你吃得门清',
      desc: '培根一直被认为是早餐的头盘，早上烤两片面包，平底锅煎一片培根、一个鸡蛋，和生菜一起夹在面包中，有荤有素，就是一顿丰富美味的西式早餐。培根的英文名是“Bacon”，原意是烟熏的猪肋条肉，或烟熏背脊肉',
      pictures: [
        'https://gw.alicdn.com/imgextra/i2/603964020/TB24zFbarwTMeJjSszfXXXbtFXa_!!603964020-0-daren.jpg_250x250q90s200.jpg',
        'https://gw.alicdn.com/imgextra/i2/603964020/TB2txtdarsTMeJjy1zcXXXAgXXa_!!603964020-0-daren.jpg_250x250q90s200.jpg',
        'https://gw.alicdn.com/tfscom/i3/1635378022/TB2plKDbFXXXXaTXpXXXXXXXXXX-1635378022.jpg_250x250q90s200.jpg'
      ],
      count: 3576,
    }, {
      type: 'floor',
      title: '轻奢风来袭，皮艺床打造典雅居室',
      desc: '对于追求生活高品质感的小伙伴来说，皮艺家具是展现其高格调的途径之一。想要营造出奢华质感的卧室环境，大气庄重的皮床当然是不错的选择。特别是简欧风或是美式古典风格的家居环境，如果配以皮艺床简直就是点睛之笔',
      pictures: [
        'https://gw.alicdn.com/imgextra/i2/787557947/TB2erNKawoQMeJjy0FoXXcShVXa_!!787557947-0-beehive-scenes.jpg_250x250q90s200.jpg',
        'https://gw.alicdn.com/imgextra/i1/787557947/TB2KANyaBUSMeJjy1zkXXaWmpXa_!!787557947-0-beehive-scenes.jpg_250x250q90s200.jpg',
        'https://gw.alicdn.com/imgextra/i3/787557947/TB2lwdGayERMeJjy0FcXXc7opXa_!!787557947-0-beehive-scenes.jpg_250x250q90s200.jpg'
      ],
      count: 36,
    }
  ]
  export default{
  	data(){
  		let N=10
  		const floors = []
  		while(N--){
  			floors.push(...dataset)
  		}
  		return {floors}
  	}
  }
</script>>
<style scoped>
.list {
	width: 750px;
	background-color: #F5F5F5;
}
.floor {
	margin-bottom: 15px;
	background-color: #FFF;
}
.title {
	font-size: 40px;
	text-align: center;
	padding-top: 35px;
	padding-bottom: 25px;
}
.desc {
	lines:2;
	color: #999;
	font-size: 30px;
	padding-left: 30px;
	padding-right: 30px;
}
.image-section{
	flex-direction: row;
	justify-content: space-between;
	margin-top: 20px;
	margin-left: 20px;
	margin-right: 20px;
}
.image {
	width: 230px;
	height: 230px;
}
.comment{
	color: #52bfe6;
    font-size: 32px;
    text-align: right;
    padding-right: 50px;
    margin-top: 25px;
    margin-bottom: 20px;
}
</style>


<template>
	<recycle-list class="list column" for="(group, i) in lists" switch="type">
		<cell-slot case="box" class="row box large">
			<div class="column box medium" v-for="(numbers, j) in group.boxs" :key="j">
				<div class="row box small" v-for="(n, k) in numbers" :key="k">
					<text class="text">{{n}}</text>
				</div>
			</div>
		</cell-slot>
	</recycle-list>
</template>

<script>
	export default {
		data(){
			return {
				lists: [
				{type: 'box', boxs: [[1,2], [3,4], [5,6]]},
				{type: 'box', boxs: [[7,8], [9,10], [11,12]]},
				{type: 'box', boxs: [[13,14], [15,16], [17,18]]},
				]
			}
		}
	}
</script>
<style scoped>
.list {
	width: 750px;
}
.row {
	flex-direction: row;
	justify-content: space-around;
	align-items: center;
}
.column{
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
}

.box {
	border-width: 2px;
	border-style: solid;
	border-color: rgb(79, 192, 141);
	background-color: rgba(79, 192, 141, 0.2);

}
.large {
	width: 700px;
	height: 350px;
	margin: 25px;
}
.medium {
	width: 180px;
	height: 300px;
}
.small {
	width: 100px;
	height: 100px;
}
.text {
	color: rgb(79, 192, 141);
	font-size: 50px;
}
</style>


<template>
  <recycle-list for="item in list">
    <cell-slot class="center" :key="item.number">
      <div class="card center" v-if="item.number%3 === 0">
        <text class="title">A</text>
      </div>
      <div class="card center" v-else-if="item.number%3 === 1">
        <text class="title">B</text>
      </div>
      <div class="card center" v-else>
        <text class="title">C</text>
      </div>
    </cell-slot>
  </recycle-list>
</template>

<script>
  export default {
    data () {
      const N = 10
      return {
        list: Array.from({ length: N }).map((x, i) => ({
          number: i
        }))
      }
    }
  }
</script>

<style scoped>
  .center {
    justify-content: center;
    align-items: center;
  }
  .card {
    width: 600px;
    height: 200px;
    border-width: 2px;
    border-style: solid;
    border-color: #E8E8E8;
    margin: 50px;
    background-color: #F5F5F5;
  }
  .title {
    text-align: center;
    font-size: 120px;
    color: #888;
  }
</style>

<template>
  <recycle-list class="list" for="(cell, i) in counters">
  	<cell-slot>
  		<div class="counter" @appear="toast(i)">
  			<text class="output">{{cell.count}}</text>
  			<text class="button" @click="inc(i)">+</text>
  			<text class="index">index: {{i}}</text>
  		</div>
  	</cell-slot>
  </recycle-list>
</template>

<script>
  const modal = weex.requireModule('modal')
  export default {
    data () {
      let start = 1, N=100
      const counters = []
      while (N--) {
      	counters.push({count: start++})
      }
      return {counters}
    },
    methods: {
      inc(index){
      	if(this.counters[index]) {
      		this.counters[index].count++
      	}
      }
    }
  }
</script>

<style scoped>
.list {
	width: 750px;
}
  .counter {
  	position: relative;
    border-top-width: 1px;
    border-top-style: solid;
    border-top-color: #DDD;
    margin-bottom: 80px;
  }
  .index {
  	position: absolute;
  	top: 10px;
  	left: 20px;
  	color: #ff26c9;
  	font-size: 30px;
  }
  .output {
    font-size: 150px;
    text-align: center;
    padding: 50px;
    background-color: #FBFBFB;
  }
  .button {
    border-width: 2px;
    border-color: #DDD;
    font-size: 100px;
    text-align: center;
    background-color: #F5F5F5;
  }
</style>


<!-- v-once 只渲染一次 -->
<template>
  <recycle-list for="(cell, i) in counters">
    <cell-slot :key="i">
      <div class="counter">
        <text class="output" v-once>{{cell.count}}</text>
        <text class="button" @click="inc(i)">+</text>
      </div>
    </cell-slot>
  </recycle-list>
</template>

<script>
  const modal = weex.requireModule('modal')
  export default {
    data () {
      let start = 1, N=100
      const counters = []
      while (N--) {
      	counters.push({count: start++})
      }
      return {counters}
    },
    methods: {
      inc (index) {
        if (this.counters[index]) {
          this.counters[index].count++
          modal.toast({ message: 'click ' + index })
        }
      }
    }
  }
</script>

<style scoped>
  .counter {
    border-top-width: 1px;
    border-top-style: solid;
    border-top-color: #DDD;
    margin-bottom: 80px;
  }
  .output {
    font-size: 150px;
    text-align: center;
    padding: 50px;
    background-color: #FBFBFB;
  }
  .button {
    border-width: 2px;
    border-color: #DDD;
    font-size: 100px;
    text-align: center;
    background-color: #F5F5F5;
  }
</style>

<template>
	<div class="container">
		<div class="content" v-for="i in [1,2]" :key="i">
			<recycle-list class="list" for="box in boxs1" switch="type" :style="{width: size, backgroundColor: 'cyan'}" @loadmore="fetch(i)" loadmoreoffset="10" :ref="'index' + i">
				<cell-slot case="box" class="center">
					<div class="box" :style="{width: box.size, height: box.size, backgroundColor: box.color}"></div>
				</cell-slot>
			</recycle-list>
			<recycle-list class="list" for="box in boxs" switch="type" :style="{width: size}">
				<cell-slot case="box" class="center">
					<div class="box" :style="{width: box.size, height: box.size, backgroundColor: box.color}"></div>
				</cell-slot>
			</recycle-list>
		</div>
	</div>
</template>
<script>
const modal = weex.requireModule('modal')
	export default {
		data(){
			return {
				size: '360px',
				boxs : [
					{type: 'box', size: '100px', color: 'red'},
					{type: 'box', size: '150px', color: 'green'},
					{type: 'box', size: '200px', color: 'blue'},
					{type: 'box', size: '250px', color: 'yellow'},
					{type: 'box', size: '300px', color: 'pink'},
					{type: 'box', size: '350px', color: 'purple'}
				],
				boxs1:[
					{type: 'box', size: '100px', color: 'red'},
					{type: 'box', size: '150px', color: 'green'},
					{type: 'box', size: '200px', color: 'blue'},
					{type: 'box', size: '250px', color: 'yellow'},
					{type: 'box', size: '300px', color: 'pink'},
					{type: 'box', size: '350px', color: 'purple'}
				]
			}
		},
		methods: {
			fetch(index){
				if (index === 2) {
					const el = this.$refs['index2']
					this.$nextTick(() => {
						const length = this.boxs1.length
						const length1 = length + this.boxs.length
						for (var i = length; i< length + this.boxs.length; i++) {

							this.boxs1.push(this.boxs[length1 - i - 1])
						}
					})
				}
			}
		}
	}
</script>
<style scoped>
	.container {
		width: 750px;
		margin: 0px;
		flex-direction: column;
		justify-content: space-around;
	}
	.content {
		width: 750px;
		height: 600px;
		background-color: #F5F5F5;
		flex-direction: row;
	}
	.list {
		width: 750px;
	}
	.center {
		justify-content: center;
		align-items: center;
	}
	.box {
		width: 50px;
		height: 50px;
		margin: 50px;
		background-color: rgba(0, 180, 255);
	}
</style>



<template>
  <recycle-list class="list" for="(item, index) in longList" switch="type" @loadmore="loadmore">
    <cell-slot case="tab">
      <tab :tabs="item.tabs" />
    </cell-slot>
    <cell-slot case="banner">
      <banner :banners="item.banners"/>
      <!-- <image class="banner-image" :src="item.src" /> -->
    </cell-slot>
    <cell-slot case="apps">
      <app-list :apps="item.apps" />
    </cell-slot>
    <cell-slot case="card">
      <card :card="item" />
    </cell-slot>
    <cell-slot case="floor">
      <floor :floor="item" />
    </cell-slot>
  </recycle-list>
</template>

<script>
  import Tab from './Tab.vue'
  import AppList from './AppList.vue'
  import Card from './Card.vue'
  import Floor from './Floor.vue'
  import Banner from './Banner.vue'

  const dataset = {
    apps: [{
      type: 'apps',
      apps: [
        { title: '热门搭配', icon: 'https://gw.alicdn.com/tfs/TB1wKS.h8fH8KJjy1XbXXbLdXXa-140-140.png_150x10000.jpg' },
        { title: '网红大衣', icon: 'https://gw.alicdn.com/tfs/TB1oM1qaMvD8KJjy0FlXXagBFXa-140-140.png_150x10000.jpg' },
        { title: '四件套', icon: 'https://gw.alicdn.com/tfs/TB1Oiz0b22H8KJjy0FcXXaDlFXa-140-140.png_150x10000.jpg' },
        { title: '人气彩妆', icon: 'https://gw.alicdn.com/tfs/TB1LhJzQFXXXXabXXXXXXXXXXXX-140-140.png_150x10000.jpg' }
      ]
    }, {
      type: 'apps',
      apps: [
        { title: '红人新品', icon: 'https://gw.alicdn.com/tfs/TB1L5upaH_I8KJjy1XaXXbsxpXa-140-140.png_150x10000.jpg' },
        { title: '网红拖鞋', icon: 'https://gw.alicdn.com/tfs/TB1w.ocb3DD8KJjy0FdXXcjvXXa-140-140.png_150x10000.jpg' },
        { title: '腔调掌柜', icon: 'https://img.alicdn.com/tfs/TB1sWLoRVXXXXbdXXXXXXXXXXXX-140-140.png' },
        { title: '时尚新品', icon: 'https://gw.alicdn.com/tfs/TB10.R_SpXXXXbtXXXXXXXXXXXX-140-140.png' }
      ]
    }, {
      type: 'apps',
      apps: [
        { title: '潮流穿搭', icon: 'https://img.alicdn.com/tfs/TB1fRVASpXXXXXdXXXXXXXXXXXX-140-140.png' },
        { title: '暖心好物', icon: 'https://img.alicdn.com/tfs/TB1_TkdPVXXXXcJXXXXXXXXXXXX-140-140.png' },
        { title: '明星面膜', icon: 'https://img.alicdn.com/tps/TB1goZhPXXXXXXfXpXXXXXXXXXX-118-118.png_170x120Q50s50.jpg' },
        { title: '彩妆香氛', icon: 'https://img.alicdn.com/tps/TB1zUTQPXXXXXaZaXXXXXXXXXXX-118-118.png_170x120Q50s50.jpg' }
      ]
    }],
    tab: [{
      type: 'tab',
      tabs: [
        { title: '首页', icon: 'https://gw.alicdn.com/tfs/TB19YESOVXXXXaNaXXXXXXXXXXX-45-45.png' },
        { title: '耍帅', icon: 'https://gw.alicdn.com/tfs/TB1I2E9OVXXXXbFXVXXXXXXXXXX-45-45.png' },
        { title: '旅行', icon: 'https://gw.alicdn.com/tfs/TB1gUhyPXXXXXX5XXXXXXXXXXXX-45-45.png' },
        { title: '潮玩', icon: 'https://img.alicdn.com/tfs/TB1D4RzQFXXXXcoXpXXXXXXXXXX-45-45.png' },
        { title: '穿搭', icon: 'https://gw.alicdn.com/tfs/TB1N1.6OVXXXXXqaXXXXXXXXXXX-45-45.png' }
      ]
    }],
    banner: {
      type: 'banner',
      banners: [
      { type: 'banner', src: 'https://img.alicdn.com/imgextra/i4/184/TB2LPjVhMLD8KJjSszeXXaGRpXa_!!184-0-luban.jpg_q50.jpg' },
      { type: 'banner', src: 'https://aecpm.alicdn.com/simba/img/TB1CWf9KpXXXXbuXpXXSutbFXXX.jpg_q50.jpg' },
      { type: 'banner', src: 'https://aecpm.alicdn.com/simba/img/TB14ab1KpXXXXclXFXXSutbFXXX.jpg_q50.jpg' },
      { type: 'banner', src: 'https://img.alicdn.com/imgextra/i4/61/TB24IbTh3fH8KJjy1zcXXcTzpXa_!!61-0-yamato.jpg_q50.jpg' },
      { type: 'banner', src: 'https://gw.alicdn.com/imgextra/i2/145/TB24D30cMjN8KJjSZFkXXaboXXa_!!145-0-lubanu.jpg_q50.jpg' },
      { type: 'banner', src: 'https://gw.alicdn.com/imgextra/i3/161/TB2syUXcJLO8KJjSZPcXXaV0FXa_!!161-0-lubanu.jpg_q50.jpg' },
      { type: 'banner', src: 'https://gw.alicdn.com/imgextra/i4/167/TB2wrL8h26H8KJjSspmXXb2WXXa_!!167-0-lubanu.jpg_q50.jpg' },
      { type: 'banner', src: 'https://gw.alicdn.com/imgextra/i2/25/TB2GgAmhS_I8KJjy0FoXXaFnVXa_!!25-0-lubanu.jpg_q50.jpg' },
      { type: 'banner', src: 'https://gw.alicdn.com/imgextra/TB2uQAFhb_I8KJjy1XaXXbsxpXa_!!89-0-lubanu.jpg_q50.jpg' },
      { type: 'banner', src: 'https://img.alicdn.com/simba/img/TB19heYdwn.PuJjSZFkSuw_lpXa.jpg_q50.jpg' },
      { type: 'banner', src: 'https://aecpm.alicdn.com/simba/img/TB14ab1KpXXXXclXFXXSutbFXXX.jpg_q50.jpg' },
      { type: 'banner', src: 'https://img.alicdn.com/imgextra/i1/174/TB2xzb0eOqAXuNjy1XdXXaYcVXa_!!174-0-luban.jpg_q50.jpg' },
      { type: 'banner', src: 'https://gw.alicdn.com/imgextra/TB27XSvg6nD8KJjSspbXXbbEXXa_!!12-0-lubanu.jpg_q50.jpg' },
      { type: 'banner', src: 'https://gw.alicdn.com/imgextra/TB2cF.xfTnI8KJjSszbXXb4KFXa_!!112-0-lubanu.jpg_q50.jpg' },
      { type: 'banner', src: 'https://gw.alicdn.com/imgextra/TB2ZweVg9_I8KJjy0FoXXaFnVXa_!!158-0-lubanu.jpg_q50.jpg' },
      { type: 'banner', src: 'https://gw.alicdn.com/imgextra/TB2O_AKctHO8KJjSZFtXXchfXXa_!!53-0-lubanu.jpg_q50.jpg' }
    ]
    },
    floor: [
      {
        type: 'floor',
        title: '就造专属感，给孩子寻个座椅好玩伴',
        desc: '犹记得儿时的风筝带着斑斓的色彩在天空飘过；那小河里躲迷藏的鱼虾，还待着小伙伴们一起去捕捉，如今的孩童没有了这些简单且纯粹的娱乐项目，生活在高楼城市中的他们，该当怎样度过自己的童年才是美好的？',
        pictures: [
          'https://gw.alicdn.com/tfscom/i3/48292642/TB29OtIakz_F1JjSZFkXXcCaXXa_!!48292642.jpg_250x250q90s200.jpg',
          'https://gw.alicdn.com/imgextra/i4/706778912/TB2hvwSXBvBIuJjy1zeXXbGBpXa_!!706778912-0-beehive-scenes.jpg_250x250q90s200.jpg',
          'https://gw.alicdn.com/imgextra/i3/706778912/TB2wX.fcxz9F1JjSZFsXXaCGVXa_!!706778912-0-beehive-scenes.jpg_250x250q90s200.jpg'
        ],
        count: 237,
      }, {
        type: 'floor',
        title: '睡袍穿不对，脱光也不媚！',
        desc: '“Ihatemynightgown（我讨厌我的睡袍）.”经典电影《罗马假日》中，赫本饰演的安妮公主躺在梦幻的宫廷大床上，抱怨她身上那华丽的大睡袍臃肿不便，为公主的浪漫逃逸埋下伏笔。想象一下，男朋友刚刚',
        pictures: [
          'https://gw.alicdn.com/imgextra/i3/3044653839/TB2a_nAXgsSMeJjSspdXXXZ4pXa_!!3044653839-0-daren.jpg_250x250q90s200.jpg',
          'https://gw.alicdn.com/imgextra/i1/3044653839/TB2qrPCXiERMeJjSspiXXbZLFXa_!!3044653839-0-daren.jpg_250x250q90s200.jpg',
          'https://gw.alicdn.com/imgextra/i1/3044653839/TB2ySjuXgsSMeJjSspeXXa77VXa_!!3044653839-0-beehive-scenes.jpg_250x250q90s200.jpg'
        ],
        count: 876,
      }, {
        type: 'floor',
        title: '上天入海？运动相机帮你搞定',
        desc: '现如今相机好像成为了我们每个人必不可少的装备，不管是专业的相机还是我们可拍照的手机，我们使用到它的频率也越来越高。为了追求更好的拍摄质量，人们似乎也愿意花更多的钱去购买好的拍摄装备',
        pictures: [
          'https://gw.alicdn.com/tfscom/i3/462856946/TB2VzQswB4lpuFjy1zjXXcAKpXa_!!462856946.jpg_250x250q90s200.jpg',
          'https://gw.alicdn.com/tfscom/i2/2811920170/TB2rCqHpVXXXXcZXpXXXXXXXXXX_!!2811920170.png_250x250.jpg',
          'https://gw.alicdn.com/imgextra/i4/836552381/TB2c1q3aZSfF1JjSsplXXbrKFXa_!!836552381-0-beehive-scenes.jpg_250x250q90s200.jpg'
        ],
        count: 59,
      }, {
        type: 'floor',
        title: '关于培根的那些事，教你吃得门清',
        desc: '培根一直被认为是早餐的头盘，早上烤两片面包，平底锅煎一片培根、一个鸡蛋，和生菜一起夹在面包中，有荤有素，就是一顿丰富美味的西式早餐。培根的英文名是“Bacon”，原意是烟熏的猪肋条肉，或烟熏背脊肉',
        pictures: [
          'https://gw.alicdn.com/imgextra/i2/603964020/TB24zFbarwTMeJjSszfXXXbtFXa_!!603964020-0-daren.jpg_250x250q90s200.jpg',
          'https://gw.alicdn.com/imgextra/i2/603964020/TB2txtdarsTMeJjy1zcXXXAgXXa_!!603964020-0-daren.jpg_250x250q90s200.jpg',
          'https://gw.alicdn.com/tfscom/i3/1635378022/TB2plKDbFXXXXaTXpXXXXXXXXXX-1635378022.jpg_250x250q90s200.jpg'
        ],
        count: 3576,
      }, {
        type: 'floor',
        title: '轻奢风来袭，皮艺床打造典雅居室',
        desc: '对于追求生活高品质感的小伙伴来说，皮艺家具是展现其高格调的途径之一。想要营造出奢华质感的卧室环境，大气庄重的皮床当然是不错的选择。特别是简欧风或是美式古典风格的家居环境，如果配以皮艺床简直就是点睛之笔',
        pictures: [
          'https://gw.alicdn.com/imgextra/i2/787557947/TB2erNKawoQMeJjy0FoXXcShVXa_!!787557947-0-beehive-scenes.jpg_250x250q90s200.jpg',
          'https://gw.alicdn.com/imgextra/i1/787557947/TB2KANyaBUSMeJjy1zkXXaWmpXa_!!787557947-0-beehive-scenes.jpg_250x250q90s200.jpg',
          'https://gw.alicdn.com/imgextra/i3/787557947/TB2lwdGayERMeJjy0FcXXc7opXa_!!787557947-0-beehive-scenes.jpg_250x250q90s200.jpg'
        ],
        count: 36,
      }, {
        type: 'floor',
        title: '提高品质生活，从用好水开始',
        desc: '我们生活中每天都要喝水、用水，可是你真的喝到、用到好水了么？为了得到更高品质的生活，我们需要更多的好东西让我们的生活更有档次，那不如就从改变你每天都要亲密接触的水开始吧',
        pictures: [
          'https://gw.alicdn.com/imgextra/i2/1904229646/TB2dRg4dgoQMeJjy0FpXXcTxpXa_!!1904229646-2-daren.png_250x250.jpg',
          'https://gw.alicdn.com/imgextra/i1/1904229646/TB2JtOjfOAKL1JjSZFoXXagCFXa_!!1904229646-2-daren.png_250x250.jpg',
          'https://gw.alicdn.com/imgextra/i1/1904229646/TB2BSXjdwsSMeJjSspeXXa77VXa_!!1904229646-2-daren.png_250x250.jpg'
        ],
        count: 74,
      }, {
        type: 'floor',
        title: '酒鬼到了意大利，收不住的红酒心',
        desc: '意大利是一个集古典与艺术于一身的国度，这里是艺术的发源地之一，也是欧洲最早种植葡萄的国家之一。意大利的酿酒历史超过4000年，本地葡萄品种过千不止，古希腊人称其为“葡萄酒之国”',
        pictures: [
          'https://gw.alicdn.com/imgextra/i1/2872639756/TB21lwtXjihSKJjy0FiXXcuiFXa_!!2872639756-0-daren.jpg_250x250q90s200.jpg',
          'https://gw.alicdn.com/imgextra/i1/2872639756/TB2zgRJdwMPMeJjy1XdXXasrXXa_!!2872639756-0-daren.jpg_250x250q90s200.jpg',
          'https://gw.alicdn.com/imgextra/i2/2872639756/TB2Ki0NdBUSMeJjSspfXXX0VFXa_!!2872639756-0-daren.jpg_250x250q90s200.jpg'
        ],
        count: 182,
      }
    ],
    card: [
      {
        type: 'card',
        poster: 'http://gw.alicdn.com/tps/i4/1611893164/TB2t4mtXJqUQKJjSZFIXXcOkFXa_!!0-juitemmedia.jpg_320x320q80s150.jpg',
        title: '澳洲牛排10份装送刀叉酱料黄油',
        subtitle1: '送平底锅前3000仅78',
        subtitle2: '私厨经典 镇店套餐',
        got: 173,
        progress: 35,
        price: { real: 108, sale: 240.00 }
      }, {
        type: 'card',
        poster: 'http://gw.alicdn.com/tps/i2/2838892713/TB2ma39aqmgSKJjSsphXXcy1VXa_!!0-juitemmedia.jpg_320x320q80s150.jpg',
        title: 'HUAWEI P10',
        subtitle1: '买赠好礼6期免息',
        subtitle2: '6期免息',
        got: 996,
        progress: 89,
        price: { real: 3488, sale: 3488.00 }
      }, {
        type: 'card',
        poster: 'http://gw.alicdn.com/tps/i3/902257410/TB2pzypfU3IL1JjSZFMXXajrFXa_!!0-juitemmedia.jpg_320x320q80s150.jpg',
        title: '海宁真皮皮衣男绵羊皮夹克外套',
        subtitle1: '店内领券下单438',
        subtitle2: '限送500双皮手套',
        got: 296,
        progress: 16,
        price: { real: 538, sale: 3080.00 }
      }, {
        type: 'card',
        poster: 'https://gw.alicdn.com/tps/i4/0/TB2Mx3Jg4TI8KJjSspiXXbM4FXa_!!0-juitemmedia.jpg_320x320q80s150.jpg',
        title: '玛丽黛佳元气风动三色腮红正品',
        subtitle1: '满108领券立减10元',
        subtitle2: '宛若天生粉红好气色',
        got: 1457,
        progress: 61,
        price: { real: 49, sale: 69.80 }
      }, {
        type: 'card',
        poster: 'https://gw.alicdn.com/tps/i2/0/TB2i25DgN6I8KJjSszfXXaZVXXa_!!0-juitemmedia.jpg_320x320q80s150.jpg',
        title: '王小二高山脐橙，酸甜如初恋',
        subtitle1: '前3分钟半价',
        subtitle2: 'VC仓库，酸甜如初恋',
        got: 598,
        progress: 42,
        price: { real: 29.8, sale: 56.10 }
      }
    ]
  }

  // generate list data
  function createListData (order) {
    var array = []
    var list = order.split(/[\s,]+/)
    for (var i = 0; i < list.length; ++i) {
      var candidates = dataset[list[i]]
      if (candidates) {
        if (list[i] === 'banner') {
          array.push(candidates)
        }else {
          var idx = Math.floor(Math.random() * candidates.length)
          array.push(candidates[idx])
        }
      }
    }
    return array
  }
  const initial = 'tab,banner,apps,apps,card,floor,floor,floor,floor,floor,floor,floor,floor'

    // + ',tab,apps,apps,banner,card,card,banner,floor,floor,floor'
    // + ',tab,apps,apps,card,floor,card,banner,floor,floor'

  const more = 'floor,floor,floor,floor,floor,floor,floor,floor,floor,floor,floor,floor,floor,floor,floor'

    // + ',tab,apps,apps,banner,card,apps,floor,floor,card,floor'
    // + ',tab,apps,banner,card,banner,floor,card,card,floor,floor'
  
  const modal = weex.requireModule('modal')
  export default {
    components: { Tab, Banner, AppList, Card, Floor },
    data () {
      return {
        longList: createListData(initial)
      }
    },
    methods: {
      loadmore () {
        // const newData = createListData(more)
        // modal.toast({ message: `loadmore (${this.longList.length + newData.length})` })
        // setTimeout(() => {
        //   this.longList.push(...newData)
        // }, 0)
      }
    }
  }
</script>

<style scoped>
  .list {
    width: 750px;
    background-color: #EFEFEF;
  }
</style>




<template>
  <recycle-list for="(item, i) in labels">
    <cell-slot>
      <banner></banner>
    </cell-slot>
  </recycle-list>
</template>

<script>
import Banner from './Banner.vue'
  export default {
    components: {Banner},
    data () {
      return {
        labels: [
          { type: 'label' },
          { type: 'label' },
          { type: 'label' },
          { type: 'label' },
          { type: 'label' },
          { type: 'label' },
          { type: 'label' },
          { type: 'label' }
        ]
      }
    }
  }
</script>


<template>
  <recycle-list for="(item, i) in listData" switch="type">
    <cell-slot case="static">
      <text class="text">-- static --</text>
    </cell-slot>
    <cell-slot case="dynamic" @click="toggleCase(i)">
      <card :index="i" :label="item.label"></card>
    </cell-slot>
  </recycle-list>
</template>

<script>
  import Card from './Card.vue'

  function generateData (sentence) {
    return sentence.split('').map((type, index) => {
      if (type === '_') {
        return { type: 'static' }
      }
      return {
        type: 'dynamic',
        label: type
      }
    })
  }

  export default {
    components: { Card },
    data () {
      return {
        listData: generateData('_MAY_THE_FORCE_BE_WITH_YOU_')
      }
    },
    methods: {
      toggleCase (i) {
        const item = this.listData[i]
        if (item) {
          item.label = /[A-Z]/.test(item.label)
            ? item.label.toLowerCase()
            : item.label.toUpperCase()
        }
      }
    }
  }
</script>

<style scoped>
  .text {
    text-align: center;
    font-size: 50px;
    padding: 15px;
    color: #606060;
    background-color: #E8E8E8;
  }
</style>

<template>
  <recycle-list for="(item, index) in banners" switch="type">
    <cell-slot case="banner">
      <banner :banners="item.banners"/>
    </cell-slot>
  </recycle-list>
</template>
<script>
  import Banner from './Banner.vue'
  const dataset = {
        type: 'banner',
        banners: [
          { type: 'banner', src: 'https://img.alicdn.com/imgextra/i4/184/TB2LPjVhMLD8KJjSszeXXaGRpXa_!!184-0-luban.jpg_q50.jpg' },
          { type: 'banner', src: 'https://aecpm.alicdn.com/simba/img/TB1CWf9KpXXXXbuXpXXSutbFXXX.jpg_q50.jpg' },
          { type: 'banner', src: 'https://aecpm.alicdn.com/simba/img/TB14ab1KpXXXXclXFXXSutbFXXX.jpg_q50.jpg' },
          { type: 'banner', src: 'https://img.alicdn.com/imgextra/i4/61/TB24IbTh3fH8KJjy1zcXXcTzpXa_!!61-0-yamato.jpg_q50.jpg' },
          { type: 'banner', src: 'https://gw.alicdn.com/imgextra/i2/145/TB24D30cMjN8KJjSZFkXXaboXXa_!!145-0-lubanu.jpg_q50.jpg' },
          { type: 'banner', src: 'https://gw.alicdn.com/imgextra/i3/161/TB2syUXcJLO8KJjSZPcXXaV0FXa_!!161-0-lubanu.jpg_q50.jpg' },
          { type: 'banner', src: 'https://gw.alicdn.com/imgextra/i4/167/TB2wrL8h26H8KJjSspmXXb2WXXa_!!167-0-lubanu.jpg_q50.jpg' },
          { type: 'banner', src: 'https://gw.alicdn.com/imgextra/i2/25/TB2GgAmhS_I8KJjy0FoXXaFnVXa_!!25-0-lubanu.jpg_q50.jpg' },
          { type: 'banner', src: 'https://gw.alicdn.com/imgextra/TB2uQAFhb_I8KJjy1XaXXbsxpXa_!!89-0-lubanu.jpg_q50.jpg' },
          { type: 'banner', src: 'https://img.alicdn.com/simba/img/TB19heYdwn.PuJjSZFkSuw_lpXa.jpg_q50.jpg' },
          { type: 'banner', src: 'https://aecpm.alicdn.com/simba/img/TB14ab1KpXXXXclXFXXSutbFXXX.jpg_q50.jpg' },
          { type: 'banner', src: 'https://img.alicdn.com/imgextra/i1/174/TB2xzb0eOqAXuNjy1XdXXaYcVXa_!!174-0-luban.jpg_q50.jpg' },
          { type: 'banner', src: 'https://gw.alicdn.com/imgextra/TB27XSvg6nD8KJjSspbXXbbEXXa_!!12-0-lubanu.jpg_q50.jpg' },
          { type: 'banner', src: 'https://gw.alicdn.com/imgextra/TB2cF.xfTnI8KJjSszbXXb4KFXa_!!112-0-lubanu.jpg_q50.jpg' },
          { type: 'banner', src: 'https://gw.alicdn.com/imgextra/TB2ZweVg9_I8KJjy0FoXXaFnVXa_!!158-0-lubanu.jpg_q50.jpg' },
          { type: 'banner', src: 'https://gw.alicdn.com/imgextra/TB2O_AKctHO8KJjSZFtXXchfXXa_!!53-0-lubanu.jpg_q50.jpg' }
      ]
      }

      function generateData (sentence) {
        var array = []
        for (var i = 0; i < 10; i++) {
          array.push(sentence)
        }
        return array
      }
  export default {
    components: {Banner},
    data(){
      return {
        banners: generateData(dataset)
      }
    }
  }
</script>



<template>
  <recycle-list for="(cell, index) in counters">
    <cell-slot>
      <banner :start="cell.count" :index="index"/>
    </cell-slot>
  </recycle-list>
</template>

<script>
  import Banner from './Banner.vue'
  const N = 200
  export default {
    components: { Banner },
    data () {
      return {
        counters: Array.from({ length: N }).map((_, i) => ({
          count: i + 1
        }))
      }
    }
  }
</script>





<template>
  <div class="container">
    <scroller class="header">
          <text class="text1">{{tostLog}}</text>
    </scroller>
    <recycle-list for="(item, i) in listData" switch="type">
      <cell-slot case="static" :key="i">
        <text class="text">&lt; section &gt;</text>
      </cell-slot>
      <cell-slot case="dynamic" :key="i">
        <div class="box">
          <card :char="item.label"></card>
          <text class="btn" @click="remove(i)">&times;</text>
        </div>
      </cell-slot>
  </recycle-list>
  </div>
</template>

<script>
  import Card from './Card.vue'
  function generateData (sentence) {
    return sentence.split('').map((type, index) => {
      if (type === '_') {
        return { type: 'static' }
      }
      return {
        type: 'dynamic',
        label: type
      }
    })
  }
  export default {
    components: { Card },
    data () {
      return {
        listData: generateData('_WITH_GREAT_POWER_COMES_GREAT_RESPONSIBILITY_'),
        tostLog: 'ces'
      }
    },
    methods: {
      remove (i) {
        this.tostLog = this.listData[i+1] 

        if (this.listData[i-1]['type']==="static" && this.listData[i+1]['type']==="static") {
          if (this.listData.length===3) {
              this.listData.splice(i-1, 1)
          }
          this.listData.splice(i-1, 1)
          this.listData.splice(i-1, 1)
        }  else{
          this.listData.splice(i, 1)
        }
        
      }
    }
  }
</script>

<style scoped>
.container{
  width: 750px;
  justify-content: center;

}
.header{
  width: 750px;
  height: 0px;
}
.text1{
  margin: 20px;
  border-width: 2px;
  border-color: red;
}
  .box {
    margin: 50px;
    position: relative;
  }
  .btn {
    position: absolute;
    padding: 15px;
    width: 80px;
    font-size: 60px;
    right: 0px;
    top:0px;
    color: #41B883;
  }
  .text {
    text-align: center;
    font-size: 50px;
    padding: 15px;
    color: #606060;
    background-color: #E8E8E8;
  }
</style>


<template>
  <recycle-list for="(item, i) in inputs">
    <cell-slot :key="i">
      <card :start="item.start"></card>
    </cell-slot>
  </recycle-list>
</template>

<script>
  import Card from './Card.vue'
  const N = 100
  export default {
    components: { Card },
    data () {
      return {
        inputs: Array.from({ length: N }).map((_, i) => ({
          start: i + 1
        }))
      }
    }
  }
</script>



<template>
  <div class="wrapper">
    <scroller class="scroller">
      <div class="row" v-for="(name, index) in rows" :ref="'item'+index">
        <text class="text" :ref="'text'+index">{{name}}</text>
      </div>
    </scroller>
    <div class="group">
      <text @click="goto10" class="button">Go to 10</text>
      <text @click="goto20" class="button">Go to 20</text>
    </div>
  </div>
</template>

<script>
  const dom = weex.requireModule('dom')
  const modal = weex.requireModule('modal')


  export default {
    data () {
      return {
        rows: [],
        size: {
          width: 0,
          height: 0,
          top: 0,
          bottom: 0,
          left: 0,
          right: 0
        }

      }
    },
    created () {
      for (let i = 0; i < 30; i++) {
        this.rows.push('row ' + i)
      }
    },
    methods: {
      goto10 (count) {
        const el = this.$refs.item10[0]
        dom.scrollToElement(el, {})
      },
      goto20 (count) {
        const el = this.$refs.item20[0]
        dom.scrollToElement(el, { offset: 0, animated: false })
        dom.getComponentRect(el, option => {
          
          this.size = option.size
          modal.toast({ message: 'width: '+ this.size.width + 'height:  ' + this.size.height + 'top:  '  + this.size.top + 'left:  ' + this.size.left + 'right:  ' + this.size.right + '  ', duration: 5 })
      })
      }
    }
  }
</script>

<style scoped>
  .scroller {
    width: 700px;
    height: 700px;
    border-width: 3px;
    border-style: solid;
    border-color: rgb(162, 217, 192);
    margin-left: 25px;
  }
  .row {
    height: 100px;
    flex-direction: column;
    justify-content: center;
    padding-left: 30px;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: #DDDDDD;
  }
  .text {
    font-size: 45px;
    color: #666666;
  }
  .group {
    flex-direction: row;
    /*justify-content: space-around;*/
    justify-content: center;
    margin-top: 60px;
  }
  .button {
    width: 200px;
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 40px;
    margin-left: 30px;
    margin-right: 30px;
    text-align: center;
    color: #41B883;
    border-width: 2px;
    border-style: solid;
    border-color: rgb(162, 217, 192);
    background-color: rgba(162, 217, 192, 0.2);
  }
</style>





<template>
  <scroller style='align-items:center'>
    <div style='margin-top:20px'>
      <text style="color:red;font-size:50px">only support font for ttf and woff</text>
    </div>
    <text class="title2" style='margin-top:50px;width:500px'>http ttf: &#xe606;&#xe605;&#xe604;&#xe603;&#xe602;&#xe601;&#xe600;</text>
    <text class="title3" style='margin-top:50px;width:500px'>http woff: &#xe606;&#xe605;&#xe604;&#xe603;&#xe602;&#xe601;&#xe600;</text>
    
    <div style='flex-direction:row;margin-top:50px'>
      <text style='font-family:iconfont4;font-size:50;color:green'>&#xe614;&#xe612;&#xe613;</text>
      <text style='font-family:iconfont4;font-size:50;'>&#xe614;&#xe612;&#xe613;&#xe61d;&#xe714;</text>
      <text style='font-family:iconfont4;font-size:60;color:blue'>&#xe711;</text>
      <text style='font-family:iconfont4;font-size:60;color:green'>&#xe71c;&#xe60b;</text>
    </div>
    <div style='flex-direction:row;margin-top:50px'>
      <text style='font-family:iconfont4;font-size:50;color:green'>&#xe71b;</text>
      <text style='font-family:iconfont4;font-size:50;'>&#xe713;</text>
      <text style='font-family:iconfont4;font-size:60;color:blue'>&#xe714;</text>
      <text style='font-family:iconfont4;font-size:60;color:green'>&#xe71f;&#xe602;&#xe715;&#xe60a;&#xe606;&#xe717;&#xe657;&#xe654;&#xe64f;&#xe637;</text>
    </div>
    <div>
      <text style='font-family:iconfont4;font-size:100; margin-top:50px'>&#xe631;&#xe630;&#xe627;&#xe63e;&#xe649;&#xe641;&#xe643;</text>
    </div>

    <div>
      <text style='font-family:iconfont4;font-size:100;color:green;margin-top:50px'>&#xe61e;&#xe600;&#xe62b;&#xe646;</text>
      <text style='font-family:iconfont4;font-size:100;margin-top:50px'> </text>
    </div>

    <div style='flex-direction:row'>
      <text style='font-family:iconfont4;font-size:70;width:750px;color:#ffC6A9'>哈哈&#xe748;&#xe747;&#xe746;&#xe746;&#xe745;&#xe744;&#xe742;&#xe740;&#xe73f;&#xe73a;&#xe731;&#xe6e0;&#xe72c;&#xe730;&#xe740;&#xe6e1;&#xe6d7;&#xe739;&#xe73d;&#xe735;&#xe72a;&#xe6e3;&#xe738;</text>
    </div>
    
  </scroller>
  
</template>
<style>
  .title1 {
    color: red;
    font-size: 36;
    font-family: iconfont1;
  }

  .title2 {
    color: gray;
    font-size: 36;
    font-family: iconfont2;
  }

  .title3 {
    color: pink;
    font-size: 36;
    font-family: iconfont3;
  }

  .title4 {
    color: red;
    font-size: 36;
    font-family: iconfont4;
  }
</style>

<script>
  module.exports = {
    beforeCreate: function() {

      var domModule = weex.requireModule('dom');
      //目前支持ttf、woff文件，不支持svg、eot类型,moreItem at http://www.iconfont.cn/
      
      domModule.addRule('fontFace', {
        'fontFamily': "iconfont2",
        'src': "url('http://at.alicdn.com/t/font_1469606063_76593.ttf')"
      });
      domModule.addRule('fontFace', {
        'fontFamily': "iconfont3",
        'src': "url('http://at.alicdn.com/t/font_1469606522_9417143.woff')"
      });
      
        domModule.addRule('fontFace', {
        'fontFamily': "iconfont4",
        'src': "url('http://at.alicdn.com/t/font_zn5b3jswpofuhaor.ttf')"
      });


      // you can use the absolute path or the local:// scheme path
      //  domModule.addRule('fontFace', {
      //   'fontFamily': "iconfont4",
      //   'src': "url('file:///storage/emulated/0/Android/data/com.alibaba.weex/cache/http:__at.alicdn.com_t_font_1469606063_76593.ttf')"
      // });
      
    }
  }
</script>




<template>
  <scroller class="scroll">
    <text class="label">{{title}}</text>
    <text class="count">{{count}}</text>
  </scroller>
</template>

<script>
  const stream = weex.requireModule('stream')
  export default {
    data () {
      return {
        count: 'fetching...',
        title: 'Vue.js Star Count'
      }
    },
    created () {
      stream.fetch({
        method: 'GET',
        type: 'json',
        url: 'http://i.play.163.com/user/article/list/1/10'
      }, res => {
        if (res.ok) {
          this.count = JSON.stringify(res.data) + '\n状态码' + res.status + '\n状态描述' + res.statusText + '\n响应头' +  JSON.stringify(res.headers)
        } else {
          this.count = '- unknown -'
        }
      }, response => {
        this.title = '数据长度' + response.length + '\n状态码' + response.status + '\n状态' + JSON.stringify(response.readyState) + '\n状态文本' + response.statusText
      })
    }
  }
</script>

<style scoped>
.scroll {
  margin: 10px;
  justify-content: flex-start;
}  
  .label {
    color: #666;
    text-align: center;
    font-size: 60px;
  }
  .count {
    color: #41B883;
    text-align: center;
    font-size: 20px;
    margin: 20px;
  }
</style>



<template>
  <div class="wrapper">
    <div ref="test" @click="move" class="box"><text>{{translateState}}</text></div>
  </div>
</template>
<script>
const animation = weex.requireModule('animation')
const modal = weex.requireModule('modal')

export default{
  data(){
    return {
      translateState : false
    }
  },
  methods:{
    move(){
      var testEl = this.$refs.test;
      this.translateState = !this.translateState
      animation.transition(testEl, {
        styles: {

          backgroundColor: this.translateState ? '#FF6600' : '#FF2AC9',//背景颜色
          transform: this.translateState ? 'translate(250px, 600px) scale(1.5) perspective(20) rotate(90/Math.PI)' : 'translate(0px, 0px) scale(0.6) perspective(0) rotate(0/Math.PI)',//定义应用在元素上的变换类型，支持下表列出的属性
          transformOrigin: this.translateState ? 'center center': 'center center',//定义变化过程的中心点
          opacity: this.translateState ? 0.5 : 1, //透明度
        },
        duration: 800,//动画的持续时间
        timingFunction: 'ease-in-out',//描述动画执行的速度曲线
        needLayout: true,//节点动画执行时是否产生布局动画即LayoutAnimation
        delay:0 //指定请求动画操作到执行动画之间的时间间隔 (
      }, function(){
        // modal.toast({message: 'animation finished.'})
      })
    }
  }
}

</script>

<style scoped>
  .box {
    width: 250px;
    height: 250px;
    background-color: #DDD;
  }
</style>



<template>
  <div class="wrapper">
    <text class="button" @click="jump">Jump</text>
  </div>
</template>

<script>
  var navigator = weex.requireModule('navigator')
  var modal = weex.requireModule('modal')

  export default {
    methods: {
      jump (event) {
        console.log('will jump')
        navigator.push({
          url: 'http://192.168.214.77:8081/dist/components/MyList.js',
          animated: "true"
        }, event => {
          // modal.toast({ message: 'callback: ' + event })
        })
      }
    }
  };
</script>

<style scoped>
  .wrapper {
    flex-direction: column;
    justify-content: center;
  }
  .button {
    font-size: 60px;
    width: 450px;
    text-align: center;
    margin-top: 30px;
    margin-left: 150px;
    padding-top: 20px;
    padding-bottom: 20px;
    border-width: 2px;
    border-style: solid;
    color: #666666;
    border-color: #DDDDDD;
    background-color: #F5F5F5
  }
</style>

<template>
  <div class="list">
    <div class="group center">
      <div class="panel"><text class="text">{{state}}</text></div>
    </div>
    <div class="group">
      <div class="panel"><text class="text" @click="setItem">set</text></div>
      <div class="panel"><text class="text" @click="getItem">get</text></div>
      <div class="panel"><text class="text" @click="removeItem">remove</text></div>
      <div class="panel"><text class="text" @click="getAll">all</text></div>
    </div>
     <div>
      <div class="div">
        <text class="textC" @click="onItemClick">{{message}}</text>
      </div>
      <div class="div">
        <text class="textC" @click="setContent">Click to copy: {{tobecopied}}</text>
      </div>
      <div class="div">
        <text class="textC">{{title}}</text>
      </div>
      <div class="div">
        <text class="textC">value: {{value}}</text>
      </div>
      <div class="group">
        <div class="panel"><text class="text" @click="pick">Pick</text></div>
        <div class="panel"><text class="text" @click="pickTime">Pick Time</text></div>
        <div class="panel"><text class="text" @click="pickDate">Pick Date</text></div>
      </div>
    </div>
  </div>
</template>

<script>
  const storage = weex.requireModule('storage') //本地存储
  const modal = weex.requireModule('modal') //弹框
  const clipboard = weex.requireModule('clipboard') //剪贴
  const picker = weex.requireModule('picker')

  export default {
    data () {
      return {
        keys: '[]',
        length: 0,
        state: '----',
        message: 'nothing.',
        tobecopied: 'gey!',
        title: 'Time',
        value: '',
        index: -1,
        items: ['Saab', 'Volvo', 'BMW']
      }
    },
    methods: {
      setItem () {
        storage.setItem('key', 'Hanks', event => { //通过键值对的形式将数据存储到本地
          if (event.result == 'success'){
            this.state = event.result
          } else {
            this.state = '保存失败'
          }
        })
      },
      getItem () {
        storage.getItem('name', event => { //传入键名返回对应的键值
          console.log('get value:', event.data)
          if (event.result == 'success'){
            this.state = 'value: ' + event.data
          } else {
            this.state = '未获取到' + event.data
          }
          
        })
      },
      removeItem () {
        storage.removeItem('name', event => { //传入一个键名将会删除本地存储中对应的键值
          console.log('delete value:', event.data)
          this.state = 'deleted'
        })
      },
      getAll () {
        storage.getAllKeys(event => { //返回一个包含全部已存储项键名的数组
          // modal.toast({ message: event.result })
          if (event.result === 'success') {
            // this.state =  event.data.join(', ')
            storage.length(event=>{ //返回本地存储的数据中所有存储项数量的整数
              if (event.result === 'success') {
                this.state =  '获取到' + event.data+ '个数据'
              }
            })
          }
        })
      },
      onItemClick(){
        this.message = 'clicked! '
        clipboard.getString(ret => {
          if(ret.result == 'success'){
            this.message = 'text from clipboard:' + ret.data
          } else {
            this.message = 'text from clipboard: error'
          }
          
        })
      },
      setContent(){
        clipboard.setString(this.tobecopied)
      },
      pickTime(){
        this.title = 'Time'
        picker.pickTime({
          value: this.value
        }, event => {
          if (event.result === 'success') {
            this.value = event.data
          }
        })
      },
      pickDate(){
        this.title = 'Date'
        picker.pickDate({
          value: this.value,
          max: '2029-11-28',
          min: '2011-11-28'
        }, event => {
          if (event.result === 'success') {
            this.value = event.data
          }
        })
      },
      pick(){
        this.title = 'picker'
        picker.pick({
          index: this.index,
          items: this.items,
          textColor: '#ff26c9',
          selectionColor: '#d6d6d6',
          confirmTitle: '选择',
          cancelTitle: '取消',
          confirmTitleColor: '#ff26c9',
          cancelTitleColor: '#ff22cc',
          title: this.title,
          titleColor: '#ff26c9',
          titleBackgroundColor: '#d6d6d6'
        }, event => {
          if (event.result === 'success') {
            this.value = event.data
          }
        })
      }
    }
  }
</script>

<style scoped>
  .panel {
    height: 100px;
    flex-direction: column;
    justify-content: center;
    border-width: 2px;
    border-style: solid;
    border-color: rgb(162, 217, 192);
    background-color: rgba(162, 217, 192, 0.2);
  }
  .group {
    flex-direction: row;
    justify-content: space-between;
    width: 650px;
    margin-left: 50px;
    margin-top: 50px;
    margin-bottom: 50px;
  }
  .center {
    justify-content: center;
  }
  .text {
    font-size: 50px;
    text-align: center;
    padding-left: 25px;
    padding-right: 25px;
    color: #41B883;
  }
  .small {
    font-size: 32px;
    padding-left: 35px;
    padding-right: 35px;
    color: #41B883;
  }
  .div {
    align-items: center;
    width: 750px;
    height: 90px;
    padding-left: 30px;
    padding-right: 30px;

    border-bottom-width: 1px;
    border-style: solid;
    border-color: #DDDDDD;
  }
  .textC {
    width: 750px;
    height: 90px;
  }
</style>

<template>
  <div style="justify-content:center">
    <text :class="['label']"  :value="`${x} x ${y} = ?`" :style="{color: color, fontSize: fontSize}"></text>
    <text class="count" v-bind:value="x * y"></text>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        x: 42,
        y: 800,
        color:'red',
        fontSize:'50px'
      }
    }
  }
</script>

<style scoped>
  .label {
    color: #666;
    text-align: center;
    border-color: #FF26C9;
    border-width: 1px;
    margin: 10px;
    font-size: 20px;
  }
  .count {
    color: #41B883;
    text-align: center;
    font-size: 100px;
    margin-top: 80px;
    margin-bottom: 100px;
  }
</style>

<template>
  <div>
    <div class="count" v-for="item of items">
      <text :class="['label']"  :style="{color: color, fontSize: fontSize}">{{item.message}}+ {{x}}</text>
    </div>
    <div class="count" v-for="(item, index) in items">
      <text :class="['label']"  :style="{color: color, fontSize: fontSize}">{{item.message}}+ {{index}}</text>
    </div>
    <div class="count" v-for="(value, key, index) in object">
      <text :class="['label']"  :style="{color: color, fontSize: fontSize}" @click="onclick(index)">{{index}}.{{key}}: {{value}}</text>
    </div>
  </div>
</template>

<script>
const modal = weex.requireModule('modal')
  export default {
    data () {
      return {
        x: 42,
        y: 800,
        color:'red',
        fontSize:'50px',
        items: [
          { message: 'Foo' },
          { message: 'Bar' }
        ],
        object: {
          firstName: 'John',
          lastName: 'Doe',
          age: 30
        }
      }
    },
    methods:{

      onclick(index){
        if (index == 1){
          modal.toast({message: '点击'})
          this.age = 50
        }
        
      }
    }
  }
</script>

<style scoped>
  .label {
    color: #666;
    text-align: center;
    border-color: #FF26C9;
    border-width: 1px;
    margin: 10px;
    font-size: 20px;
  }
  .count {
    /*flex-direction: column;*/
    color: #41B883;
  }
</style>

<template>
  <scroller class="stty">
    <text class="text" v-if="type === 1" @click="move('aaa')">aaaa{{counter}}</text>
    <text class="text" v-else-if="type === 2" @click="move('bbb', 'event')">bbbb{{counter}}</text>
    <text class="text" v-else-if="type === 3" @click="move('ccc')">ccccc{{counter}}</text>
    <text class="text" v-else @click="move('ccDiv')">not a/b/c{{counter}}</text>
  </scroller>
</template>
<script>
const modal = weex.requireModule('modal')

  export default{
    data(){
      return {
        type: 0,
        counter: '0'
      }
    },
    methods:{
      move(e, event){
        var idx = Math.floor(Math.random() * 6)
        this.type = idx
        if (e) {
          // JSON.stringify(e)
          // this.counter = '\n' + JSON.stringify(e,null,'\t')
          this.counter = '\n' + e + ' ' + this.type
        }
        if (event) {
          modal.toast({message: event})
        }
      },

        checkNo(value){

          let reg = /^[1-9]\d*$/;
          if (value) {
            if (value > 999999 || new RegExp(reg).test(value) == false) {
              setTimeout(() => {
                this.searchForm.msel.mselTotalConsumTimes =''
              }, 500)
            }
          }
        }
    }
  }
</script>
<style>
.stty {
  border-color: #ff26c9;
  border-width: 1px;
  width: 750px;
}
.text {
  margin: 10px;
  background-color: #dcdcdc;
}
</style>


<!-- 输入框 -->
<template>
  <scroller>
    <input type="number"
      class="input"
      v-model.number="output"
      @input="oninput"
      @change="onchange"
      @focus="onfocus"
      @blur="onblur"
      @return="onReturn" 
      return-key-type="done" ref="inputre"/>
    <text class="text">Input :{{txtInput}} onChange:{{txtChange}} returnType:{{txtReturnType}} returnKeyType:{{returnKeyType}} focu:{{focu}}</text>
    
  </scroller>
</template>

<script>
  const modal = weex.requireModule('modal')
  export default {
    data(){
      return {
        txtInput: "",
        txtChange: '',
        txtReturnType: "",
        returnKeyType: "",
        focu: "",
        inputText: '',
        output: 'output'
      }
    },
    methods: {
      oninput (event) {
        this.txtInput = event.value + "\n"
        // var inp = this.$refs.inputre
        // this.txtInput = JSON.stringify(inp, null, '\t')
        this.returnKeyType = this.output + "\n"

      },
      onchange (event) {
        this.txtChange = event.value + "\n"


      },
      onfocus (event) {
        this.focu = event.timestamp + ' onfocus' + "\n"

      },
      onblur (event) {
        this.focu = event.timestamp + ' onblur' + "\n"

      },
      onReturn(event) {
        this.txtReturnType = event.value + "\n"
        this.returnKeyType = event.returnKeyType + "\n"


      }
    }
  }
</script>

<style scoped>
.text{
    font-size: 16wx;
    width: 600px;
    margin: 10px;
    color: #666666;
    border-width: 2px;
    border-style: solid;
    border-radius: 20wx;
    border-color: #41B883;
  }
  .input {
    placeholder-color: #C1DFD2;
    font-size: 16wx;
    width: 600px;
    height: 40wx;
    margin-top: 50px;
    margin-left: 75px;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px;
    color: #666666;
    border-width: 2px;
    border-style: solid;
    border-radius: 20wx;
    border-color: #41B883;
  }
</style>

<template>
  <div style="justify-content:center;">
    <text class="freestyle">{{text | quote('(', ')') }}</text>
    <text class="freestyle">{{count}}</text>

  </div>
</template>

<script>
const modal = weex.requireModule('modal')
// Vue.mixin({
//   methods:{
//     toast(){
//       modal.toast({message: 'message'})
//     }
//   }
// })
Vue.mixin({
  methods: {
    inc(){this.count++;},
    square(){this.count*=2;} //不会被执行
  },
  created(){      this.count++;
},
  mounted(){      this.count++;
}
})
  function toast(){
      modal.toast({message: 'message'})
    }
  export default {
    filters: {
      quote (value, left = '"', right = '"') {
        return left + value +'a' + right
      }
    },
    data () {
      return {
        text: 'vue.js',
        count: 0
      }
    },
    mounted(){
      toast()
      this.inc()
      this.count ++
      this.square()

    },
    methods: {
      square(){ 
        this.count+=8;
      }
    }
  }
</script>

<style scoped>
  .freestyle {
    color: #41B883;
    text-align: center;
    font-size: 150px;
  }
</style>







<template>
  <div style="justify-content:center">
    <card ref="card"></card>
  </div>
</template>

<script>
  import Card from './Card.vue'
  export default {
    components: { Card },
    mounted () {
      const $poster = this.$refs.card
      if ($poster) {
        $poster.update('https://gw.alicdn.com/tfs/TB1KF_ybRTH8KJjy0FiXXcRsXXa-890-1186.png')
      }
    }
  }
</script>


<template>
  <div>
    <card :depth='124'></card>
  </div>
</template>
<script>
  import Card from './Card.vue'
  export default {
    components: {Card}
  }
</script>


<template>
  <div class="wrapper">
    <div class="robot">
      <div class="tentacle left-tentacle">
        <div class="stick"></div>
        <div class="ball"></div>
      </div>
      <div class="tentacle right-tentacle">
        <div class="stick"></div>
        <div class="ball"></div>
      </div>
      <div class="face">
        <div class="eye left-eye"></div>
        <div class="eye right-eye"></div>
        <div class="mouse"></div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .wrapper {
    justify-content: center;
    align-items: center;
  }
  .robot {
    position: relative;
    width: 700px;
    height: 600px;
  }
  .face {
    position:absolute;
    top: 194px;
    left: 100px;
    width: 500px;
    height: 260px;
    border-width: 4px;
    border-style: solid;
    border-color: rgba(241, 209, 121, 0.9);
    background-color: rgba(241, 209, 121, 0.5); 
  }
  .left-eye {
    position: absolute;
    top: 45px;
    left: 70px;
  }
  .right-eye {
    position: absolute;
    top: 45px;
    right: 70px;
  }
  .eye {
    width: 90px;
    height: 90px;
    border-radius: 45px;
    border-width: 4px;
    border-style: solid;
    border-color: rgba(255, 88, 88, 0.7);
    background-color: rgba(255, 88, 88, 0.5);
  }
  .mouse {
    position: absolute;
    bottom: 30px;
    left: 140px;
    width: 220px;
    height: 40px;
    border-width: 4px;
    border-style: solid;
    border-color: rgba(255, 88, 88, 0.7);
    background-color: rgba(255, 88, 88, 0.5);
  }
  .left-tentacle {
    position: absolute;
    top: 0;
    left: 220px;
  }
  .right-tentacle {
    position: absolute;
    top: 0;
    right: 220px;
  }
  .tentacle {
    width: 50px;
    height: 200px;
  }
  .stick {
    position: absolute;
    top: 46px;
    left: 18px;
    width: 14px;
    height: 150px;
    border-width: 4px;
    border-style: solid;
    border-color: rgba(53, 143, 255, 0.7);
    background-color: rgba(53, 143, 255, 0.5);
  }
  .ball {
    position: absolute;
    top: 0;
    width: 50px;
    height: 50px;
    border-radius: 30px;
    border-width: 4px;
    border-style: solid;
    border-color: rgba(53, 143, 255, 0.7);
    background-color: rgba(53, 143, 255, 0.5);
  }
</style>


<template>
  <div class="bg"></div>
</template>

<style scoped>
  .bg {
    background-image: linear-gradient(to top, red, blue);
  }
</style>
<template>
  <div class="wrapper">
    <div class="section">
      <div class="box shadow"></div>
    </div>
    <div class="section">
      <div class="box inset-shadow"></div>
    </div>
  </div>
</template>

<style scoped>
  .wrapper {
    justify-content: space-around;
  }
  .section {
    justify-content: center;
    align-items: center;
  }
  .box {
    width: 500px;
    height: 300px;
    background-color: #F0F0F0;
  }
  .shadow {
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
    -ms-transform:rotate(7deg); 
    -webkit-transform:rotate(7deg);
    transform:rotate(8deg); 
  }
  .inset-shadow {
    box-shadow: inset 0 8px 20px rgba(0, 0, 0, 0.4);
    -ms-transform:rotate(-8deg); /* IE 9 */
    -webkit-transform:rotate(-8deg); /* Safari and Chrome */
    transform:rotate(-8deg);
  }
</style>

<template>
  <div class="wrapper">
    <div class="section">
      <div class="box shadow"></div>
    </div>
    <div class="section">
      <div class="box inset-shadow"></div>
    </div>
  </div>
</template>

<style scoped>
  .wrapper {
    justify-content: space-around;
  }
  .section {
    justify-content: center;
    align-items: center;
  }
  .box {
    width: 500px;
    height: 300px;
    background-color: #F0F0F0;
  }
  .shadow {
    box-shadow: 0 15px 70px rgba(0, 0, 0, 0.6);
  }
  .shadow:active {
    width: 600px;
    height: 400px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  }
  .inset-shadow {
    box-shadow: inset 0 8px 20px rgba(0, 0, 0, 0.2);
  }
  .inset-shadow:active {
    box-shadow: inset 0 15px 40px rgba(0, 0, 0, 0.2);
  }
</style>

<template>
  <div class="screen">      
    <div :class="['row', r%4 === 0 ? 'bold': '']" v-for="r in row" :key="r" append="tree">
      <div :class="['column', c%4 === 0 ? 'bold': '']" v-for="c in column" :key="c"></div>
    </div>
  </div>
</template>

<style scoped>
  .screen {
    position: absolute;
    width: 750px;
    top: 0;
    bottom: 0;
    background-color: #F5F5F5;
    overflow: hidden;
  }
  .row {
    width: 750px;
    height: 125px;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #E0E0E0;
    flex-direction: row;
  }
  .column {
    width: 125px;
    border-right-width: 1px;
    border-right-style: solid;
    border-right-color: #E0E0E0;
  }
  .bold {
    border-bottom-color: #CFCFCF;
    border-right-color: #CFCFCF;
  }
</style>

<script>
  export default {
    data () {
      return {
        row: Array.from({ length: 1 }).map((x,i) => i),
        column: Array.from({ length: 1 }).map((x,i) => i)
      }
    }
  }
  
</script>



<template>
  <div class="screen">
    <div :class="['row', r%2 === 0 ? 'bold': '']" v-for="r in row" :key="r" append="tree">
      <div :class="['column', (r+c)%2 === 0 ? 'grey': '']" v-for="c in column" :key="c"></div>
    </div>
  </div>
</template>

<style scoped>
  .screen {
    position: absolute;
    width: 750px;
    top: 0;
    bottom: 0;
    overflow: hidden;
  }
  .row {
    width: 750px;
    height: 25px;
    flex-direction: row;
  }
  .column {
    width: 25px;
  }
  .grey {
    background-color: #EEE;
  }
</style>

<script>
  export default {
    data () {
      return {
        row: Array.from({ length: 70 }).map((x,i) => i),
        column: Array.from({ length: 30 }).map((x,i) => i)
      }
    }
  }
  
</script>


<template>
  <div class="wrapper">
    <div class="logo">
      <div class="v outer"></div>
      <div class="v inner"></div>
      <div class="v blank"></div>
    </div>
  </div>
</template>

<style scoped>
  .wrapper {
    justify-content: center;
    align-items: center;
  }
  .logo {
    position: relative;
    width: 600px;
    height: 520px;
    margin-top: 50px;
    background-color: #FFF;
  }
  .v {
    position: absolute;
    width: 0px;
    height: 0px;
    border-style: solid;
    border-left-color: rgba(0, 0, 0, 0);
    border-right-color: rgba(0, 0, 0, 0);
    border-bottom: 0;
  }
  .outer {
    border-left-width: 300px;
    border-right-width: 300px;
    border-top-width: 520px;
    border-top-color: #41B883;
  }
  .inner {
    top: 0;
    left: 120px;
    border-left-width: 180px;
    border-right-width: 180px;
    border-top-width: 310px;
    border-top-color: #35495e;
  }
  .blank {
    top: 0;
    left: 230px;
    border-left-width: 70px;
    border-right-width: 70px;
    border-top-width: 118px;
    border-top-color: #FFF;
  }
</style>

<template>
  <div class="wrapper">
    <div class="watermelon">
      <text class="seeds">. . .</text>
    </div>
  </div>
</template>

<style scoped>
  .wrapper {
    justify-content: center;
    align-items: center;
  }
  .watermelon {
    width: 400px;
    height: 200px;
    border-color: #F3ECBB;
    border-width: 8px;
    border-top-width: 0;
    border-bottom-left-radius: 200px;
    border-bottom-right-radius: 200px;
    background-color: #FF6666;
    box-shadow: 0px 12px 0px 12px #008B00;
  }
  .seeds {
    font-size: 100px;
    text-align: center;
  }
</style>


<template>
  <scroller class="wrapper">
    <div class="header" @click="openURL('https://www.w3.org/TR/css-flexbox-1/#flex-direction-property')">
      <text class="title">flex-direction</text>
    </div>
    <div class="example-panel">
      <text class="tips">flex-direction: row;</text>
      <div class="container border" style="flex-direction:row;">
        <div class="box A"><text class="label">A</text></div>
        <div class="box B"><text class="label">B</text></div>
        <div class="box C"><text class="label">C</text></div>
      </div>
    </div>
    <div class="example-panel">
      <text class="tips">flex-direction: row-reverse;</text>
      <div class="container border" style="flex-direction:row-reverse;">
        <div class="box A"><text class="label">A</text></div>
        <div class="box B"><text class="label">B</text></div>
        <div class="box C"><text class="label">C</text></div>
      </div>
    </div>
    <div class="example-panel">
      <text class="tips">flex-direction: column;</text>
      <div class="vertical-container border" style="flex-direction:column;">
        <div class="box A"><text class="label">A</text></div>
        <div class="box B"><text class="label">B</text></div>
        <div class="box C"><text class="label">C</text></div>
      </div>
    </div>
    <div class="example-panel">
      <text class="tips">flex-direction: column-reverse;</text>
      <div class="vertical-container border" style="flex-direction:column-reverse;">
        <div class="box A"><text class="label">A</text></div>
        <div class="box B"><text class="label">B</text></div>
        <div class="box C"><text class="label">C</text></div>
      </div>
    </div>
  </scroller>
</template>

<style scoped>
  .header {
    height: 120px;
    background-color: #00B4FF;
    justify-content: center;
    margin-bottom: 60px;
  }
  .title {
    font-size: 50px;
    text-align: center;
    color: #ffffff;
    font-family: monospace;
  }
  .row {
    flex-direction: row;
  }
  .example-panel {
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
  }
  .tips {
    font-size: 30px;
    color: #888888;
    padding-bottom: 10px;
    font-family: monospace;
  }
  .border {
    border-width: 2px;
    border-style: solid;
    border-color: #888888;
  }
  .container {
    width: 600px;
    height: 200px;
  }
  .vertical-container {
    width: 300px;
    height: 450px;
  }
  .box {
    height: 120px;
    justify-content: center;
    align-items: center;
  }
  .A {
    width: 120px;
    background-color: #ff7070;
  }
  .B {
    width: 80px;
    background-color: #66b966;
  }
  .C {
    width: 180px;
    background-color: #519fff;
  }
  .label {
    font-size: 66px;
    color: #FFF;
  }
</style>

<script>
  const navigator = weex.requireModule('navigator')
  const storage = weex.requireModule('storage')
  const modal = weex.requireModule('modal')

  export default {
    methods: {
      openURL (url) {
        const hash = 'ab57ab447248c35115144736ba38521a'
        const link = WXEnvironment.platform === 'Web'
          ? `http://dotwe.org/raw/htmlVue/${hash}`
          : `http://dotwe.org/raw/dist/${hash}.bundle.wx`
        storage.setItem('CURRENT_DOCUMENT_URL', url)
        modal.toast({message: link+"`?_wx_tpl="+link})
        navigator.push({ url: `${link}?_wx_tpl=${link}` })
      }
    }
  }
</script>


<template>
  <scroller class="wrapper">
    <div class="header" @click="openURL('https://www.w3.org/TR/css-flexbox-1/#flex-wrap-property')">
      <text class="title">flex-wrap</text>
    </div>
    <div class="example-panel">
      <text class="tips">flex-wrap: nowrap;</text>
      <div class="container row" style="flex-wrap:nowrap;">
        <div class="box A"><text class="label">A</text></div>
        <div class="box B"><text class="label">B</text></div>
        <div class="box C"><text class="label">C</text></div>
        <div class="box D"><text class="label">D</text></div>
        <div class="box E"><text class="label">E</text></div>
        <div class="box F"><text class="label">F</text></div>
        <div class="box G"><text class="label">G</text></div>
      </div>
    </div>
    <div class="example-panel">
      <text class="tips">flex-wrap: wrap;</text>
      <div class="container row" style="flex-wrap:wrap;">
        <div class="box A"><text class="label">A</text></div>
        <div class="box B"><text class="label">B</text></div>
        <div class="box C"><text class="label">C</text></div>
        <div class="box D"><text class="label">D</text></div>
        <div class="box E"><text class="label">E</text></div>
        <div class="box F"><text class="label">F</text></div>
        <div class="box G"><text class="label">G</text></div>
      </div>
    </div>
    <div class="example-panel">
      <text class="tips">flex-wrap: wrap-reverse;</text>
      <div class="container row" style="flex-wrap:wrap-reverse;">
        <div class="box A"><text class="label">A</text></div>
        <div class="box B"><text class="label">B</text></div>
        <div class="box C"><text class="label">C</text></div>
        <div class="box D"><text class="label">D</text></div>
        <div class="box E"><text class="label">E</text></div>
        <div class="box F"><text class="label">F</text></div>
        <div class="box G"><text class="label">G</text></div>
      </div>
    </div>
  </scroller>
</template>

<style scoped>
  .header {
    height: 120px;
    background-color: #00B4FF;
    justify-content: center;
    margin-bottom: 60px;
  }
  .title {
    font-size: 50px;
    text-align: center;
    color: #ffffff;
    font-family: monospace;
  }
  .row {
    flex-direction: row;
  }
  .example-panel {
    align-items: center;
    margin-bottom: 50px;
  }
  .tips {
    font-size: 30px;
    color: #888888;
    padding-bottom: 10px;
    font-family: monospace;
  }
  .container {
    border-width: 2px;
    border-style: solid;
    border-color: #888888;
    width: 600px;
    height: 300px;
  }
  .box {
    height: 120px;
    justify-content: center;
    align-items: center;
  }
  .A {
    width: 120px;
    background-color: #ff7070;
  }
  .B {
    width: 80px;
    background-color: #66b966;
  }
  .C {
    width: 180px;
    background-color: #519fff;
  }
  .D {
    width: 120px;
    background-color: #ffb37d;
  }
  .E {
    width: 150px;
    background-color: #c477ff;
  }
  .F {
    width: 100px;
    background-color: #67d9fb;
  }
  .G {
    width: 120px;
    background-color: #dcde64;
  }
  .label {
    font-size: 66px;
    color: #FFF;
  }
</style>

<script>
  const navigator = weex.requireModule('navigator')
  const storage = weex.requireModule('storage')
  export default {
    methods: {
      openURL (url) {
        const hash = 'ab57ab447248c35115144736ba38521a'
        const link = WXEnvironment.platform === 'Web'
          ? `http://dotwe.org/raw/htmlVue/${hash}`
          : `http://dotwe.org/raw/dist/${hash}.bundle.wx`
        storage.setItem('CURRENT_DOCUMENT_URL', url)
        navigator.push({ url: `${link}?_wx_tpl=${link}` })
      }
    }
  }
</script>


<template>
  <scroller class="wrapper">
    <div class="header" @click="openURL('https://www.w3.org/TR/css-flexbox-1/#flex-flow-property')">
      <text class="title">flex-flow</text>
    </div>
    <div class="example-panel">
      <text class="tips">flex-flow: row;</text>
      <div class="container border" style="flex-flow:row;">
        <div class="box A"><text class="label">A</text></div>
        <div class="box B"><text class="label">B</text></div>
        <div class="box C"><text class="label">C</text></div>
        <div class="box D"><text class="label">D</text></div>
        <div class="box E"><text class="label">E</text></div>
        <div class="box F"><text class="label">F</text></div>
        <div class="box G"><text class="label">G</text></div>
      </div>
    </div>
    <div class="example-panel">
      <text class="tips">flex-flow: column;</text>
      <div class="vertical-container border" style="flex-flow:column;">
        <div class="box A"><text class="label">A</text></div>
        <div class="box B"><text class="label">B</text></div>
        <div class="box C"><text class="label">C</text></div>
        <div class="box D"><text class="label">D</text></div>
        <div class="box E"><text class="label">E</text></div>
        <div class="box F"><text class="label">F</text></div>
        <div class="box G"><text class="label">G</text></div>
      </div>
    </div>
    <div class="example-panel">
      <text class="tips">flex-flow: row wrap;</text>
      <div class="container border" style="flex-flow:row wrap;">
        <div class="box A"><text class="label">A</text></div>
        <div class="box B"><text class="label">B</text></div>
        <div class="box C"><text class="label">C</text></div>
        <div class="box D"><text class="label">D</text></div>
        <div class="box E"><text class="label">E</text></div>
        <div class="box F"><text class="label">F</text></div>
        <div class="box G"><text class="label">G</text></div>
      </div>
    </div>
    <div class="example-panel">
      <text class="tips">flex-flow: row-reverse wrap;</text>
      <div class="container border" style="flex-flow:row-reverse wrap;">
        <div class="box A"><text class="label">A</text></div>
        <div class="box B"><text class="label">B</text></div>
        <div class="box C"><text class="label">C</text></div>
        <div class="box D"><text class="label">D</text></div>
        <div class="box E"><text class="label">E</text></div>
        <div class="box F"><text class="label">F</text></div>
        <div class="box G"><text class="label">G</text></div>
      </div>
    </div>
    <div class="example-panel">
      <text class="tips">flex-flow: row-reverse nowrap;</text>
      <div class="container border" style="flex-flow:row-reverse nowrap;">
        <div class="box A"><text class="label">A</text></div>
        <div class="box B"><text class="label">B</text></div>
        <div class="box C"><text class="label">C</text></div>
        <div class="box D"><text class="label">D</text></div>
        <div class="box E"><text class="label">E</text></div>
        <div class="box F"><text class="label">F</text></div>
        <div class="box G"><text class="label">G</text></div>
      </div>
    </div>
    <div class="example-panel">
      <text class="tips">flex-flow: row wrap-reverse;</text>
      <div class="container border" style="flex-flow:row wrap-reverse;">
        <div class="box A"><text class="label">A</text></div>
        <div class="box B"><text class="label">B</text></div>
        <div class="box C"><text class="label">C</text></div>
        <div class="box D"><text class="label">D</text></div>
        <div class="box E"><text class="label">E</text></div>
        <div class="box F"><text class="label">F</text></div>
        <div class="box G"><text class="label">G</text></div>
      </div>
    </div>
    <div class="example-panel">
      <text class="tips">flex-flow: row-reverse wrap-reverse;</text>
      <div class="container border" style="flex-flow:row-reverse wrap-reverse;">
        <div class="box A"><text class="label">A</text></div>
        <div class="box B"><text class="label">B</text></div>
        <div class="box C"><text class="label">C</text></div>
        <div class="box D"><text class="label">D</text></div>
        <div class="box E"><text class="label">E</text></div>
        <div class="box F"><text class="label">F</text></div>
        <div class="box G"><text class="label">G</text></div>
      </div>
    </div>
    <div class="example-panel">
      <text class="tips">flex-flow: column wrap;</text>
      <div class="vertical-container border" style="flex-flow:column wrap;">
        <div class="box A"><text class="label">A</text></div>
        <div class="box B"><text class="label">B</text></div>
        <div class="box C"><text class="label">C</text></div>
        <div class="box D"><text class="label">D</text></div>
        <div class="box E"><text class="label">E</text></div>
        <div class="box F"><text class="label">F</text></div>
        <div class="box G"><text class="label">G</text></div>
      </div>
    </div>
    <div class="example-panel">
      <text class="tips">flex-flow: column-reverse wrap;</text>
      <div class="vertical-container border" style="flex-flow:column-reverse wrap;">
        <div class="box A"><text class="label">A</text></div>
        <div class="box B"><text class="label">B</text></div>
        <div class="box C"><text class="label">C</text></div>
        <div class="box D"><text class="label">D</text></div>
        <div class="box E"><text class="label">E</text></div>
        <div class="box F"><text class="label">F</text></div>
        <div class="box G"><text class="label">G</text></div>
      </div>
    </div>
    <div class="example-panel">
      <text class="tips">flex-flow: column-reverse nowrap;</text>
      <div class="vertical-container border" style="flex-flow:column-reverse nowrap;">
        <div class="box A"><text class="label">A</text></div>
        <div class="box B"><text class="label">B</text></div>
        <div class="box C"><text class="label">C</text></div>
        <div class="box D"><text class="label">D</text></div>
        <div class="box E"><text class="label">E</text></div>
        <div class="box F"><text class="label">F</text></div>
        <div class="box G"><text class="label">G</text></div>
      </div>
    </div>
    <div class="example-panel">
      <text class="tips">flex-flow: column wrap-reverse;</text>
      <div class="vertical-container border" style="flex-flow:column wrap-reverse;">
        <div class="box A"><text class="label">A</text></div>
        <div class="box B"><text class="label">B</text></div>
        <div class="box C"><text class="label">C</text></div>
        <div class="box D"><text class="label">D</text></div>
        <div class="box E"><text class="label">E</text></div>
        <div class="box F"><text class="label">F</text></div>
        <div class="box G"><text class="label">G</text></div>
      </div>
    </div>
    <div class="example-panel">
      <text class="tips">flex-flow: column-reverse wrap-reverse;</text>
      <div class="vertical-container border" style="flex-flow:column-reverse wrap-reverse;">
        <div class="box A"><text class="label">A</text></div>
        <div class="box B"><text class="label">B</text></div>
        <div class="box C"><text class="label">C</text></div>
        <div class="box D"><text class="label">D</text></div>
        <div class="box E"><text class="label">E</text></div>
        <div class="box F"><text class="label">F</text></div>
        <div class="box G"><text class="label">G</text></div>
      </div>
    </div>
  </scroller>
</template>

<style scoped>
  .header {
    height: 120px;
    background-color: #00B4FF;
    justify-content: center;
    margin-bottom: 60px;
  }
  .title {
    font-size: 50px;
    text-align: center;
    color: #ffffff;
    font-family: monospace;
  }
  .row {
    flex-direction: row;
  }
  .example-panel {
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
  }
  .tips {
    font-size: 30px;
    color: #888888;
    padding-bottom: 10px;
    font-family: monospace;
  }
  .border {
    border-width: 2px;
    border-style: solid;
    border-color: #888888;
  }
  .container {
    width: 600px;
    height: 300px;
    overflow: hidden;
  }
  .vertical-container {
    width: 400px;
    height: 550px;
    overflow: hidden;
  }
  .box {
    height: 120px;
    justify-content: center;
    align-items: center;
  }
  .A {
    width: 120px;
    background-color: #ff7070;
  }
  .B {
    width: 80px;
    background-color: #66b966;
  }
  .C {
    width: 180px;
    background-color: #519fff;
  }
  .D {
    width: 120px;
    background-color: #ffb37d;
  }
  .E {
    width: 150px;
    background-color: #c477ff;
  }
  .F {
    width: 100px;
    background-color: #67d9fb;
  }
  .G {
    width: 120px;
    background-color: #dcde64;
  }
  .label {
    font-size: 66px;
    color: #FFF;
  }
</style>

<script>
  const navigator = weex.requireModule('navigator')
  const storage = weex.requireModule('storage')
  export default {
    methods: {
      openURL (url) {
        const hash = 'ab57ab447248c35115144736ba38521a'
        const link = WXEnvironment.platform === 'Web'
          ? `http://dotwe.org/raw/htmlVue/${hash}`
          : `http://dotwe.org/raw/dist/${hash}.bundle.wx`
        storage.setItem('CURRENT_DOCUMENT_URL', url)
        navigator.push({ url: `${link}?_wx_tpl=${link}` })
      }
    }
  }
</script>
<template>
  <scroller class="wrapper">
    <div class="header" @click="openURL('https://www.w3.org/TR/css-flexbox-1/#order-property')">
      <text class="title">order</text>
    </div>
    <div class="example-panel">
      <text class="tips">A:_ B:_ C:_ D:_ E:_</text>
      <div class="container border row">
        <div class="box A"><text class="label">A</text></div>
        <div class="box B"><text class="label">B</text></div>
        <div class="box C"><text class="label">C</text></div>
        <div class="box D"><text class="label">D</text></div>
        <div class="box E"><text class="label">E</text></div>
      </div>
    </div>
    <div class="example-panel">
      <text class="tips">A:1 B:2 C:3 D:_ E:_</text>
      <div class="container border row">
        <div class="box A" style="order:1"><text class="label">A</text></div>
        <div class="box B" style="order:2"><text class="label">B</text></div>
        <div class="box C" style="order:3"><text class="label">C</text></div>
        <div class="box D"><text class="label">D</text></div>
        <div class="box E"><text class="label">E</text></div>
      </div>
    </div>
    <div class="example-panel">
      <text class="tips">A:4 B:1 C:2 D:1 E:_</text>
      <div class="container border row">
        <div class="box A" style="order:4"><text class="label">A</text></div>
        <div class="box B" style="order:1"><text class="label">B</text></div>
        <div class="box C" style="order:2"><text class="label">C</text></div>
        <div class="box D" style="order:1"><text class="label">D</text></div>
        <div class="box E"><text class="label">E</text></div>
      </div>
    </div>
    <div class="example-panel">
      <text class="tips">A:_ B:-1 C:-2 D:1 E:2</text>
      <div class="container border row">
        <div class="box A"><text class="label">A</text></div>
        <div class="box B" style="order:-1"><text class="label">B</text></div>
        <div class="box C" style="order:-2"><text class="label">C</text></div>
        <div class="box D" style="order:1"><text class="label">D</text></div>
        <div class="box E" style="order:2"><text class="label">E</text></div>
      </div>
    </div>
  </scroller>
</template>

<style scoped>
  .header {
    height: 120px;
    background-color: #00B4FF;
    justify-content: center;
    margin-bottom: 60px;
  }
  .title {
    font-size: 50px;
    text-align: center;
    color: #ffffff;
    font-family: monospace;
  }
  .row {
    flex-direction: row;
  }
  .example-panel {
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
  }
  .tips {
    font-size: 30px;
    color: #888888;
    padding-bottom: 10px;
    font-family: monospace;
  }
  .border {
    border-width: 2px;
    border-style: solid;
    border-color: #888888;
  }
  .container {
    width: 600px;
    height: 160px;
  }
  .vertical-container {
    width: 300px;
    height: 450px;
  }
  .box {
    height: 120px;
    justify-content: center;
    align-items: center;
  }
  .A {
    width: 120px;
    background-color: #ff7070;
  }
  .B {
    width: 80px;
    background-color: #66b966;
  }
  .C {
    width: 160px;
    background-color: #519fff;
  }
  .D {
    width: 120px;
    background-color: #ffb37d;
  }
  .E {
    width: 100px;
    background-color: #c477ff;
  }
  .label {
    font-size: 66px;
    color: #FFF;
  }
</style>

<script>
  const navigator = weex.requireModule('navigator')
  const storage = weex.requireModule('storage')
  export default {
    methods: {
      openURL (url) {
        const hash = 'ab57ab447248c35115144736ba38521a'
        const link = WXEnvironment.platform === 'Web'
          ? `http://dotwe.org/raw/htmlVue/${hash}`
          : `http://dotwe.org/raw/dist/${hash}.bundle.wx`
        storage.setItem('CURRENT_DOCUMENT_URL', url)
        navigator.push({ url: `${link}?_wx_tpl=${link}` })
      }
    }
  }
</script>
<template>
  <scroller class="wrapper">
    <div class="header" @click="openURL('https://www.w3.org/TR/css-flexbox-1/#align-self-property')">
      <text class="title">align-self</text>
    </div>
    <div class="example-panel">
      <text class="tips">align-self:</text>
      <div class="container row">
        <div class="box A" style="align-self:flex-start">
          <text class="label">auto</text>
        </div>
        <div class="box B" style="align-self:flex-start">
          <text class="label">flex-start</text>
        </div>
        <div class="box C" style="align-self:flex-end">
          <text class="label">flex-end</text>
        </div>
        <div class="box D" style="align-self:center">
          <text class="label">center</text>
        </div>
        <div class="box E" style="align-self:stretch">
          <text class="label">stretch</text>
        </div>
      </div>
    </div>
    <div class="example-panel">
      <text class="tips">align-self: baseline;</text>
      <div class="container row">
        <div class="box A" style="align-self:flex-start">
          <text class="label">auto</text>
        </div>
        <div class="box B" style="align-self:baseline">
          <text class="label" style="font-size:66px">baseline</text>
        </div>
        <div class="box C" style="align-self:baseline">
          <text class="label" style="font-size:22px">baseline</text>
        </div>
        <div class="box D" style="align-self:baseline">
          <text class="label" style="font-size:33px">baseline</text>
        </div>
      </div>
    </div>
  </scroller>
</template>

<style scoped>
  .header {
    height: 120px;
    background-color: #00B4FF;
    justify-content: center;
    margin-bottom: 60px;
  }
  .title {
    font-size: 50px;
    text-align: center;
    color: #ffffff;
    font-family: monospace;
  }
  .row {
    flex-direction: row;
    align-items: flex-start;
  }
  .example-panel {
    align-items: center;
    margin-bottom: 50px;
  }
  .tips {
    font-size: 30px;
    color: #888888;
    padding-bottom: 10px;
    font-family: monospace;
  }
  .container {
    border-width: 2px;
    border-style: solid;
    border-color: #888888;
    width: 600px;
    height: 250px;
  }
  .box {
    justify-content: center;
    align-items: center;
  }
  .A {
    background-color: #ff7070;
  }
  .B {
    background-color: #66b966;
  }
  .C {
    background-color: #519fff;
  }
  .D {
    background-color: #ffb37d;
  }
  .E {
    background-color: #c477ff;
  }
  .F {
    background-color: #67d9fb;
  }
  .G {
    background-color: #dcde64;
  }
  .label {
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 28px;
    color: #FFF;
  }
</style>

<script>
  const navigator = weex.requireModule('navigator')
  const storage = weex.requireModule('storage')
  export default {
    methods: {
      openURL (url) {
        const hash = 'ab57ab447248c35115144736ba38521a'
        const link = WXEnvironment.platform === 'Web'
          ? `http://dotwe.org/raw/htmlVue/${hash}`
          : `http://dotwe.org/raw/dist/${hash}.bundle.wx`
        storage.setItem('CURRENT_DOCUMENT_URL', url)
        navigator.push({ url: `${link}?_wx_tpl=${link}` })
      }
    }
  }
</script>


<template>
  <div>
    <div class="tabbar">
      <div class="tab active" :style="{ left: activeTab * 150 + 'px'}"></div>
      <div v-for="(tab, i) in tabs" :key="i" class="tab" @click="activeTab = i">
        <image class="icon" :src="tab.icon"></image>
        <text class="title">{{tab.title}}</text>
      </div>
    </div>
    <div class="tab-panels" :style="{ left: activeTab * -750 + 'px'}">
      <div class="panel" v-for="(panel, pi) in panels" :key="pi">
        <text class="content">{{panel.content}}</text>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        activeTab: 0,
        tabs: [{
          title: '首页',
          icon: '//gw.alicdn.com/tfs/TB19YESOVXXXXaNaXXXXXXXXXXX-45-45.png'
        }, {
          title: '耍帅',
          icon: '//gw.alicdn.com/tfs/TB1I2E9OVXXXXbFXVXXXXXXXXXX-45-45.png'
        }, {
          title: '旅行',
          icon: '//gw.alicdn.com/tfs/TB1gUhyPXXXXXX5XXXXXXXXXXXX-45-45.png'
        }, {
          title: '潮玩',
          icon: '//img.alicdn.com/tfs/TB1D4RzQFXXXXcoXpXXXXXXXXXX-45-45.png'
        }, {
          title: '穿搭',
          icon: '//gw.alicdn.com/tfs/TB1N1.6OVXXXXXqaXXXXXXXXXXX-45-45.png'
        }]
      }
    },
    computed: {
      panels () {
        return this.tabs.map(tab => ({ content: tab.title }))
      }
    }
  }
</script>

<style scoped>
  .tabbar {
    flex-direction: row;
    background-color: #FF4563;
  }
  .tab {
    height: 120px;
    width: 150px;
    justify-content: center;
    align-items: center;
  }
  .active {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgb(218, 59, 85);
    transition: left 0.2s ease-in-out;
  }
  .icon {
    width: 45px;
    height: 45px;
  }
  .title {
    font-size: 28px;
    color: #FFF;
    margin-top: 10px;
  }
  .tab-panels {
    position: relative;
    width: 3750;
    flex: 1;
    flex-direction: row;
    align-items: stretch;
    background-color: #F5F5F5;
    transition: left 0.2s ease-in-out;
  }
  .panel {
    width: 750px;
    justify-content: center;
    align-items: center;
  }
  .content {
    font-size: 100px;
    color: #707070;
  }
</style>

<template>
  <div class="wrapper">
    <list class="todo-list">
      <header class="todo-filter">
        <div :class="['btn', 'btn-filter', btn.type === chosen ? 'btn-filter-selected' : '']" v-for="(btn, x) in filterButtons" :key="x" @click="filterTodo(btn.type)">
          <text :class="['btn-text', 'btn-filter-text', btn.type === chosen ? 'btn-filter-text-selected' : '']">{{btn.title}}</text>
        </div>
      </header>
      <cell class="todo-cell" v-for="(todo, i) in filteredTodos" :key="i">
        <div :class="['todo-card', i === 0 ? 'first-todo-card' : '']">
          <div style="flex:1" @click="toggleComplete(todo)">
            <text :class="['todo-title', todo.completed ? 'todo-title-completed' : '']">{{todo.title}}</text>
          </div>
          <div class="btn btn-delete" @click="removeTodo(todo)">
            <text class="btn-text btn-delete-text">&#215;</text>
          </div>
        </div>
      </cell>
      <cell class="empty-todo-cell" v-if="!filteredTodos.length">
        <text class="tips">Empty List</text>
      </cell>
    </list>
    <div class="operations">
      <input ref="input" class="input" type="text" placeholder="type here" v-model="userInput" @return="addTodo" />
      <div class="btn btn-send" v-if="userInput" @click="addTodo">
        <text class="btn-text btn-send-text">+</text>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .wrapper {
    justify-content: space-between;
  }
  .todo-list {
    flex: 1;
    background-color: #F3F3F3;
  }
  .tips {
    text-align: center;
    color: #CCCCCC;
    font-size: 60px;
    margin-top: 200px;
  }
  .todo-filter {
    height: 90px;
    background-color: #FFFFFF;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .todo-card {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 12px;
    margin-bottom: 12px;
    margin-left: 25px;
    margin-right: 25px;
    padding-top: 45px;
    padding-bottom: 45px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 10px;
    background-color: #FFFFFF;
  }
  .first-todo-card {
    margin-top: 50px;
  }
  .btn-delete {
    width: 80px;
  }
  .btn-delete-text {
    font-family: iconfont;
    font-size: 50px;
  }
  .todo-title {
    font-size: 42px;
    color: #606060;
    padding-left: 50px;
  }
  .todo-title-completed {
    color: #BBBBBB;
    text-decoration: line-through;
  }
  .operations {
    height: 120px;
    flex: 0;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    border-top-width: 2px;
    border-top-style: solid;
    border-top-color: #DDD;
    background-color: #FFFFFF;
  }
  .input {
    width: 500px;
    height: 120px;
    padding-left: 30px;
    color: #606060;
    font-size: 40px;
  }
  .btn {
    justify-content: center;
  }
  .btn-text {
    text-align: center;
    font-size: 34px;
    color: #808080;
  }
  .btn-filter {
    width: 180px;
    height: 60px;
    border-radius: 12px;
    margin-left: 25px;
    margin-right: 25px;
    border-width: 2px;
    border-style: solid;
    border-color: transparent;
  }
  .btn-filter-selected {
    border-color: #DDD;
    background-color: #F5F5F5;
  }
  .btn-filter-selected:active {
    background-color: #E0E0E0;
  }
  .btn-filter-text {
    color: #808080;
    font-size: 30px;
  }
  .btn-filter-text-selected {
    color: #606060;
    font-weight: bold;
  }
  .btn-send {
    width: 120px;
    border-left-width: 2px;
    border-left-style: solid;
    border-left-color: #DDD;
    background-color: #F5F5F5;
  }
  .btn-send:active {
    background-color: #E0E0E0;
  }
  .btn-send-text {
    color: #808080;
    font-size: 70px;
  }
</style>

<script>
  const STORAGE_KEY = 'weex-vue-todomvc-todos'
  const storage = weex.requireModule('storage')
  const modal = weex.requireModule('modal')
  export default {
    props: {
      filterButtons:{
        type: Object,
        default: [
          { type: 'all', title: 'All' },
          { type: 'active', title: 'Todo' },
          { type: 'completed', title: 'Completed' }
        ]
      }
    },
    data () {
      return {
        chosen: 'all',
        userInput: '',
        todoList: [
        ]
      }
    },
    computed: {
      filteredTodos () {
        switch (this.chosen) {
          case 'completed': return this.todoList.filter(todo => todo.completed)
          case 'active': return this.todoList.filter(todo => !todo.completed)
          default: return this.todoList
        }
      }

    },
    watch: {
      todoList: {
        deep: true,
        handler () {
          this.saveTodoList()
        }
      }
    },
    created () {
      storage.getItem(STORAGE_KEY, event => {
        if (event.result === 'success' && event.data) {
          this.todoList = JSON.parse(event.data)
        }
      })
    },
    methods: {
      toggleComplete (todo) {
        todo.completed = !todo.completed
      },
      filterTodo (type) {
        this.chosen = type
      },
      addTodo (todo) {
        if (this.$refs.input && this.$refs.input.blur) {
          this.$refs.input.blur()
        }
        const value = this.userInput && this.userInput.trim()
        var completed = this.chosen === 'completed' 
        if (value) {
          this.todoList.push({
            completed: completed,
            title: value
          })
          this.userInput = ''
        }
      },
      removeTodo (todo) {
        this.todoList.splice(this.todoList.indexOf(todo), 1)
      },
      saveTodoList () {
        storage.setItem(STORAGE_KEY, JSON.stringify(this.todoList))
      }
    }
  }
</script>



<template>
  <div class="screen">
    <div style="align-items:center">
      <text class="title">Klotski (华容道)</text>
      <div class="operations":style="{ width: meshSize * 4 + gap * 2 + 'px' }">
          <text class="button label" @click="previous">previous</text>
          <text class="button step">{{blocks[0].title}}</text>
          <text class="button label" @click="next">next</text>
      </div>
    </div>
    <div style="position:relative">
      <div class="board" :style="wrapperStyle">
        <div v-for="(block, i) in blocks" :key="i"
          :class="[isBlock? 'block' : '', block.isBoss ? 'block-boss' : 'block-normal']"
          :style="blockStyle[i]"
          @swipe="move(block, $event)">
          <text class="name" v-once>{{block.name}}</text>
        </div>
        <div class="result" v-if="this.isWin">
          <text class="win">You Win !</text>
        </div>
      </div>
      <div class="stick" :style="stickStyle"></div>
      <div class="operations" :style="{ width: meshSize * 4 + gap * 2 + 'px' }">
        <text class="button label" @click="archive">Archive</text>
        <text class="button step">{{step}}</text>
        <text class="button label" @click="reset">Reset</text>
      </div>
    </div>
    <div style="margin-bottom:20px">
      <text class="tips">Slide the blocks, move the largest piece to the center bottom and you win!</text>
    </div>
  </div>
</template>

<script>
const initialBlockLists = [
  [
    { origin: [0, 0], size: [1, 2], name: '张\n飞', title: '横道立马'},
    { origin: [1, 0], size: [2, 2], name: '曹操', isBoss: true },
    { origin: [3, 0], size: [1, 2], name: '赵\n云' },
    { origin: [0, 2], size: [1, 2], name: '马\n超' },
    { origin: [1, 2], size: [2, 1], name: '关羽' },
    { origin: [3, 2], size: [1, 2], name: '黄\n忠' },
    { origin: [1, 3], size: [1, 1], name: '卒' },
    { origin: [0, 4], size: [1, 1], name: '卒' },
    { origin: [2, 3], size: [1, 1], name: '卒' },
    { origin: [3, 4], size: [1, 1], name: '卒' }
  ],
  [
    { origin: [0, 0], size: [1, 2], name: '张\n飞', title: '万夫莫开' },
    { origin: [1, 0], size: [2, 2], name: '曹操', isBoss: true },
    { origin: [3, 0], size: [1, 2], name: '赵\n云' },
    { origin: [0, 2], size: [1, 1], name: '卒' },
    { origin: [1, 2], size: [2, 1], name: '关羽' },
    { origin: [3, 2], size: [1, 1], name: '卒' },
    { origin: [0, 3], size: [1, 2], name: '马\n超' },
    { origin: [1, 3], size: [1, 1], name: '卒' },
    { origin: [2, 3], size: [1, 1], name: '卒' },
    { origin: [3, 3], size: [1, 2], name: '黄\n忠' },
  ],
  [
    { origin: [0, 0], size: [1, 2], name: '张\n飞', title: '一夫当关' },
    { origin: [1, 0], size: [2, 2], name: '曹操', isBoss: true },
    { origin: [3, 0], size: [1, 2], name: '赵\n云' },
    { origin: [0, 2], size: [1, 1], name: '卒' },
    { origin: [1, 2], size: [1, 1], name: '卒' },
    { origin: [2, 2], size: [1, 1], name: '卒' },
    { origin: [3, 2], size: [1, 1], name: '卒' },
    { origin: [0, 3], size: [1, 2], name: '马\n超' },
    { origin: [1, 3], size: [2, 1], name: '关羽' },
    { origin: [3, 3], size: [1, 2], name: '黄\n忠' },
  ],
  [ //一夫当关
    { origin: [0, 0], size: [2, 2], name: '曹操', isBoss: true, title: '万马奔腾'},
    { origin: [2, 0], size: [2, 1], name: '张飞' },
    { origin: [2, 1], size: [2, 1], name: '赵云' },
    { origin: [0, 2], size: [1, 1], name: '卒' },
    { origin: [0, 3], size: [1, 1], name: '卒' },
    { origin: [0, 4], size: [1, 1], name: '卒' },
    { origin: [1, 4], size: [1, 1], name: '卒' },
    { origin: [2, 2], size: [2, 1], name: '马超' },
    { origin: [1, 2], size: [1, 2], name: '关\n羽' },
    { origin: [2, 3], size: [2, 1], name: '黄忠' },
  ]
  ]
  // const initialBlocks = [//横道立马
  //   { origin: [0, 0], size: [1, 2], name: '张\n飞' },
  //   { origin: [1, 0], size: [2, 2], name: '曹操', isBoss: true },
  //   { origin: [3, 0], size: [1, 2], name: '赵\n云' },
  //   { origin: [0, 2], size: [1, 2], name: '马\n超' },
  //   { origin: [1, 2], size: [2, 1], name: '关羽' },
  //   { origin: [3, 2], size: [1, 2], name: '黄\n忠' },
  //   { origin: [1, 3], size: [1, 1], name: '卒' },
  //   { origin: [0, 4], size: [1, 1], name: '卒' },
  //   { origin: [2, 3], size: [1, 1], name: '卒' },
  //   { origin: [3, 4], size: [1, 1], name: '卒' }
  // ]
  // const initialBlocks = [
  //   { origin: [0, 0], size: [1, 2], name: '张\n飞' },
  //   { origin: [1, 0], size: [2, 2], name: '曹操', isBoss: true },
  //   { origin: [3, 0], size: [1, 2], name: '赵\n云' },
  //   { origin: [0, 2], size: [1, 1], name: '卒' },
  //   { origin: [1, 2], size: [2, 1], name: '关羽' },
  //   { origin: [3, 2], size: [1, 1], name: '卒' },
  //   { origin: [0, 3], size: [1, 2], name: '马\n超' },
  //   { origin: [1, 3], size: [1, 1], name: '卒' },
  //   { origin: [2, 3], size: [1, 1], name: '卒' },
  //   { origin: [3, 3], size: [1, 2], name: '黄\n忠' },
  // ]
  // const initialBlocks = [
  //   { origin: [0, 0], size: [1, 2], name: '张\n飞' },
  //   { origin: [1, 0], size: [2, 2], name: '曹操', isBoss: true },
  //   { origin: [3, 0], size: [1, 2], name: '赵\n云' },
  //   { origin: [0, 2], size: [1, 1], name: '卒' },
  //   { origin: [1, 2], size: [1, 1], name: '卒' },
  //   { origin: [2, 2], size: [1, 1], name: '卒' },
  //   { origin: [3, 2], size: [1, 1], name: '卒' },
  //   { origin: [0, 3], size: [1, 2], name: '马\n超' },
  //   { origin: [1, 3], size: [2, 1], name: '关羽' },
  //   { origin: [3, 3], size: [1, 2], name: '黄\n忠' },
  // ]

  // const initialBlocks = [ //一夫当关
  //   { origin: [0, 0], size: [2, 2], name: '曹操', isBoss: true },
  //   { origin: [2, 0], size: [2, 1], name: '张飞' },
  //   { origin: [2, 1], size: [2, 1], name: '赵云' },
  //   { origin: [0, 2], size: [1, 1], name: '卒' },
  //   { origin: [0, 3], size: [1, 1], name: '卒' },
  //   { origin: [0, 4], size: [1, 1], name: '卒' },
  //   { origin: [1, 4], size: [1, 1], name: '卒' },
  //   { origin: [2, 2], size: [2, 1], name: '马超' },
  //   { origin: [1, 2], size: [1, 2], name: '关\n羽' },
  //   { origin: [2, 3], size: [2, 1], name: '黄忠' },
  // ]

  function clone (object) {
    return JSON.parse(JSON.stringify(object))
  }

  const modal = weex.requireModule('modal')
  const storage = weex.requireModule('storage')
  const storageKey = 'WEEX_KLOTSKI_GAME_STATE'
  export default {
    props: {
      meshSize: { type: Number, default: 150 },
      borderWidth:  { type: Number, default: 6 },
      gap: { type: Number, default: 5 }
    },
    data () {
      return {
        step: 0,
        level: 0,
        blocks: clone(initialBlockLists[0]),
        isBlock: true
      }
    },
    created () {
      storage.getItem(storageKey, event => {
        if (event.result) {
          const state = JSON.parse(event.data)
          this.step = state.step
          this.blocks = state.blocks
          storage.removeItem(storageKey)
        }
      })
    },
    computed: {
      wrapperStyle () {
        return {
          padding: this.gap + 'px',
          borderWidth: this.borderWidth + 'px',
          width: this.meshSize * 4 + this.gap * 2 + 'px',
          height: this.meshSize * 5 + this.gap * 2 + 'px'
        }
      },
      blockStyle () {
        return this.blocks.map(block => ({
          borderWidth: this.borderWidth + 'px',
          left: block.origin[0] * this.meshSize + this.gap + 'px',
          top: block.origin[1] * this.meshSize + this.gap + 'px',
          width: block.size[0] * this.meshSize - this.gap * 2 + 'px',
          height: block.size[1] * this.meshSize - this.gap * 2 + 'px'
        }))
      },
      stickStyle () {
        return {
          width: this.meshSize * 2 + 'px',
          height: this.borderWidth + this.gap + 'px',
          left: this.meshSize + this.gap + 'px',
          top: this.meshSize * 5 + 'px',
        }
      },
      isWin () {
        const CaoCao = this.blocks.find(x => !!x.isBoss)
        return CaoCao.origin[0] === 1 && CaoCao.origin[1] === 3
      }
    },
    methods: {
      isOverlap (block, target) {
        // return false;
        return this.blocks.some(other => {
          if (other === block) return false
          const spanX = Math.max(other.origin[0] + other.size[0], target[0] + block.size[0]) - Math.min(other.origin[0], target[0])
          const spanY = Math.max(other.origin[1] + other.size[1], target[1] + block.size[1]) - Math.min(other.origin[1], target[1])
          return spanX < (other.size[0] + block.size[0]) && spanY < (other.size[1] + block.size[1])
        })
      },
      move (block, event) {
        if (this.isWin) return
        const target = block.origin.slice()
        switch (event.direction) {
          case 'left': target[0] = Math.max(target[0] - 1, 0); break
          case 'right': target[0] = Math.min(target[0] + 1, 4 - block.size[0]); break
          case 'up': target[1] = Math.max(target[1] - 1, 0); break
          case 'down': target[1] = Math.min(target[1] + 1, 5 - block.size[1]); break
        }
        // modal.toast({ message: `move ${event.direction}` })
        if (!this.isOverlap(block, target)) {
          this.step++
          block.origin = target
        } else {
          // modal.toast({ message: `Can't move to there!`, duration: 0.5 })
        }
      },
      archive () {
        const state = { step: this.step, blocks: this.blocks }
        storage.setItem(storageKey, JSON.stringify(state), event => {
          if (event.result) {
            modal.toast({ message: `Current game state is archived!` })
          }
        })
      },
      reset () {
        this.step = 0
        this.blocks = clone(initialBlockLists[this.level])
        storage.removeItem(storageKey)
      },
      next () {
        this.reset()
        this.level++
        if (this.level > initialBlockLists.length-1) {
          this.level = initialBlockLists.length-1
        }
        this.step = 0
        // var ste = JSON.stringify(this.blocks)
        // modal.toast({message: ste})
        this.blocks = clone(initialBlockLists[this.level])
        // var ste = JSON.stringify(this.blocks)
        // modal.toast({message: ste})
      },
      previous(){
        this.reset()
        this.step = 0
        this.level--
        if (this.level < 0) {
          this.level = 0
        }
        this.blocks = clone(initialBlockLists[this.level])
      }
    }
  }
</script>

<style scoped>
  .screen {
    justify-content: space-around;
    align-items: center;
  }
  .title {
    font-size: 60px;
    color: rgb(214, 111, 30);
    text-align: center;
    font-weight: bold;
  }
  .subtitle {
    font-size: 26px;
    color: rgba(214, 111, 30, 0.8);
    text-align: center;
  }
  .tips {
    width: 600px;
    font-size: 30px;
    color: rgba(214, 111, 30, 0.8);
    text-align: center;
  }
  .board {
    position: relative;
    border-color: #B37E47;
    background-color: #EEDDCC;
  }
  .stick {
    position: absolute;
    background-color: #EEDDCC;
  }
  .result {
    position: absolute;
    background-color: rgba(26, 25, 31, 0.75);
    top: 0; bottom: 0;
    left: 0; right: 0;
    justify-content: center;
    align-items: center;
  }
  .win {
    font-size: 100px;
    font-weight: bold;
    color: #FF6666;
    text-align: center;
  }
  .block {
    position: absolute;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-style: solid;
    border-radius: 10px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
    transition-property: top,left;
    transition-duration: 0.15s;
    transition-timing-function: ease-in-out;
  }
  .block-normal {
    border-color: #B37E47;
    background-color: #D5A471;
  }
  .block-boss {
    border-color: #BB3D3D;
    background-color: #DE6457;
  }
  .operations {
    flex-direction: row;
    justify-content: space-between;
  }
  .operations {
    flex-direction: row;
    justify-content: space-between;
  }
  .button {
    padding: 10px;
    margin: 10px;
    width: 160px;
    text-align: center;
  }
  .label {
    color: #FFF;
    font-size: 30px;
    border-width: 4px;
    border-radius: 8px;
    border-color: #DE6457;
    background-color: #EA7E72;
  }
  .step {
    font-size: 42px;
    color: #DE6457;
  }
  .name {
    text-align: center;
    font-size: 50px;
    color: #FFEFE0;
  }
</style>




<template>
  <div style="padding: 5px;">
    <text class="result">{{result}}</text>
    <div class="row">
      <text class="btn" @click="onclear">AC</text>
      <text class="btn" @click="onnegative">±</text>
      <text class="btn" @click="oninput('%')">%</text>
      <text class="btn btn-operator" @click="oninput('/')">/</text>
    </div>
    <div class="row">
      <text class="btn" @click="oninput(1)">1</text>
      <text class="btn" @click="oninput(2)">2</text>
      <text class="btn" @click="oninput(3)">3</text>
      <text class="btn btn-operator" @click="oninput('*')">*</text>
    </div>
    <div class="row">
      <text class="btn" @click="oninput(4)">4</text>
      <text class="btn" @click="oninput(5)">5</text>
      <text class="btn" @click="oninput(6)">6</text>
      <text class="btn btn-operator" @click="oninput('-')">-</text>
    </div>
    <div class="row">
      <text class="btn" @click="oninput(7)">7</text>
      <text class="btn" @click="oninput(8)">8</text>
      <text class="btn" @click="oninput(9)">9</text>
      <text class="btn btn-operator" @click="oninput('+')">+</text>
    </div>
    <div class="row">
      
      <div class="btn1"><text class="btn2" @click="oninput(0)">0</text></div>
      <text class="btn" @click="oninput('.')">.</text>
      <text class="btn btn-operator" @click="oncalculate">=</text>
    </div>
  </div>
</template>
<style scoped>
  .result {
    text-align: right;
    background-color: #666;
    font-size: 40px;
    color: white;
  }
  .row {
    flex-direction: row;
  }
  .btn {
    flex: 1;
    text-align: center;
    color: #333333;
    background-color: #eee;
    font-size: 46px;
  }
  .btn:active  {
    background-color: #BFBFBF;
  }
  .btn1:active  {
    background-color: #BFBFBF;
  }
  .btn1 {
    width: 370px;
    background-color: white;
  }
  .btn2 {
    line-height: 120px;
    text-align: center;
    color: #333333;
    font-size: 46px;
    background-color: #eee;
    margin: 5px;
  }  

  .btn, .result {
    height: 120px;
    padding: 35px;
    margin: 5px;

  }
  .btn-operator {
    background-color: #669;
    font-size: 50px;
    color: white;
  }
</style>
<script>
  const OP = ['+', '-', '*', '/', '%']
  const modal = weex.requireModule('modal')
  export default{
    data(){
      return {
        shouldClear: true,
        result: '',
        inputs: []
      }
    },
    methods:{
      oninput(value){
        this.result = value
        //  if (this.shouldClear) {
        //   this.onclear()
        // }
        // this.shouldClear = false
        const inputs = this.inputs
        const lastOne = inputs.length ? inputs[inputs.length - 1] : ''
        if (OP.indexOf(lastOne) > -1 && OP.indexOf(value) > -1) {
          return
        }
        inputs.push(value)
        const buf = []
        let char = ''
        for (let i = 0; i < inputs.length; i++) {
          char = inputs[i];
          if (OP.indexOf(char) > -1) {
            char = ' ' + char + ' '
          }
          buf.push(char)
        }
        this.result = buf.join('')
      },
      oncalculate(){
        const result = eval(this.result)
        let v = result + ''
        if (v === 'Infinity' || v === '-Infinity'){
          return
        }
        this.inputs = [result]
        this.result = result
        // this.shouldClear = true
      },
      onclear(){
        this.inputs = []
        this.result = ''
      },
      onnegative(){
        this.oncalculate()
        let value = -this.result
        this.result = value
        this.inputs = [value]

      }
    }
  }
</script>


<template>
  <div class="wrapper center">
    <div class="center">
      <image class="logo" src="https://gw.alicdn.com/tfs/TB1Q9VBkRfH8KJjy1XbXXbLdXXa-3799-1615.png"/>
      <div class="btn center" @click="scan">
        <image class="scan-bg" src="https://gw.alicdn.com/tfs/TB1qnO0kLDH8KJjy1XcXXcpdXXa-900-320.png"/>
        <text class="btn-text">扫码二维码</text>
      </div>
    </div>
  </div>
</template>

<script>
  const navigator = weex.requireModule('navigator')
  const event = weex.requireModule('event')
  export default {
    methods: {
      scan () {
        try {
          event.openURL('weex://go/scan')
        } catch (e) {
          try {
            navigator.push({ url: 'weex://go/scan' })
          } catch (e) {}
        }
      }
    }
  }
</script>

<style scoped>
  .wrapper {
    background-color: #FFFFFF;
  }
  .center {
    justify-content: center;
    align-items: center;
  }
  .logo {
    width: 750px;
    height: 318px;
  }
  .btn {
    width: 450px;
    height: 160px;
    margin: 50px;
    opacity: 0.7;
  }
  .btn:active {
    opacity: 1;
  }
  .scan-bg {
    width: 450px;
    height: 160px;
    position: absolute;
    top: 0;
    left: 0;
  }
  .btn-text {
    color: #505050;
    font-size: 64px;
    text-align: center;
  }
</style>



<template>
  <div>
    <list class="wrapper">
      <cell class="header">
        <image class="poster" resize='cover' :src="currentUser.poster"></image>
        <text class="name">{{currentUser.name}}</text>
        <image class="profile" resize="cover" :src="currentUser.profile"></image>
      </cell>
      <cell class="moment" v-for="(moment, i) in moments" :key="i">
        <image class="author-profile" resize="cover" :src="moment.author.profile"></image>
        <div class="main">
          <text class="author-name link-text">{{moment.author.name}}</text>
          <text class="moment-content" :style="{lines: lines}">{{moment.content}}</text>
          <text class="moreInfo" @click="onmoreInfo" v-if="moment.content.length>50">{{moreInfo}}</text>
          <div class="moment-media" v-if="moment.media">
            <div class="moment-pictures" v-if="moment.media.pictures && moment.media.pictures.length">
              <image class="picture" v-for="(src, p) in moment.media.pictures" :key="p" resize="cover" :src="src" @click="onImageClick(src)"></image>
            </div>
            <div class="moment-share" v-if="moment.media.share">
              <image class="share-thumbnail" :src="moment.media.share.thumbnail"></image>
              <text class="share-title">{{moment.media.share.title}}</text>
            </div>
          </div>
          <text class="moreInfo location" v-if="moment.location">{{moment.location}}</text>
          <!-- 删除 评论 -->
          <div class="moment-info">
            <text class="moment-time" v-if="moment.time">{{moment.time}}</text>
            <text class="moment-operation link-text" v-if="moment.author.name === currentUser.name" @click="ondelete(i)">删除</text>
            <image class="moment-feedback" src="https://gw.alicdn.com/tfs/TB1_POLc3MPMeJjy1XcXXXpppXa-66-46.png" @click="oncommentInput(i)"></image>
          </div>
          <image class="moment-arrow" v-if="moment.likes || moment.comments" src="https://gw.alicdn.com/tfs/TB1F0OLc3oQMeJjy0FnXXb8gFXa-30-12.png"></image>
          <div class="moment-likes" v-if="moment.likes && moment.likes.length">
            <text class="like-list link-text">♡ {{moment.likes.join(', ')}}</text>
          </div>
          <div class="comment-list" v-if="moment.comments && moment.comments.length">
            <richtext class="moment-comment" v-for="(comment, x) in moment.comments" :key="x">
              <span class="comment-text link-text">{{comment.author}}</span>
              <span class="comment-text" v-if="comment.reply">@</span>
              <span class="comment-text link-text" v-if="comment.reply">{{comment.reply}}</span>
              <span class="comment-text">:&nbsp;&nbsp;</span>
              <span class="comment-text">{{comment.content}}</span>
            </richtext>
          </div>
        </div>
      </cell>
    </list>
    <div ref="fixed" class="fixedItem" v-if="isAccording">
        <image class="screenPictore" ref="img"  :style="{height: height}" @load="onresize" :src="screenPicSrc" resize="contain" @click="onhidden()"></image>
        <text class="text" @click="onSave">save</text>
    </div>
  </div>
</template>

<style scoped>
.moreInfo{
  left: 10px;
  top: 10px;
  color: #5E7EC2;
  margin-bottom: 20px;
  }
  .location {
    font-size: 20px;
  }
.divContent{
  width: 750px;
  flex-direction: column;
  justify-content: center;
  }
  .screenPictore{
    width: 750px;
    margin: 1000px;
  }
  .text {
    position: fixed;
    bottom: 20px;
    color: white;
    left: 20px;
    width: 120px;
    height: 60px;
    background-color: cyan;
    text-align: center;
    line-height: 60px;
  }
  .fixedItem {
    position: fixed;
    width: 750px;
    margin: 0px;
    background-color: rgba(0, 0, 0, 1);
    top: 0; bottom: 0;
    left: 0; right: 0;
    justify-content: center;
    align-items: center;
  }
  .header {
    height: 600px;
  }
  .poster {
    width: 750px;
    height: 520px;
    background-color: #BBB;
  }
  .profile {
    position: absolute;
    width: 185px;
    height: 185px;
    right: 40px;
    bottom: 0;
    background-color: #AAA;
    border-width: 4px;
    border-color: #F5F5F5;
  }
  .name {
    position: absolute;
    right: 250px;
    bottom: 105px;
    font-size: 36px;
    color: #FFF;
  }
  .moment {
    border-bottom-width: 1px;
    border-bottom-color: #DDD;
    padding-top: 20px;
    padding-bottom: 20px;
    flex-direction: row;
  }
  .author-profile {
    width: 95px;
    height: 95px;
    background-color: #D4D4D4;
    margin-left: 25px;
    margin-right: 15px;
  }
  .main {}
  .link-text {
    color: #5E7EC2;
    color: #576B95;
  }
  .author-name {
    font-size: 30px;
    padding-top: 8px;
    padding-bottom: 8px;
  }
  .moment-content {
    width: 580px;
    font-size: 30px;
    line-height: 40px;
    padding-top: 5px;
    padding-bottom: 18px;
    color: #353535;
    lines: 3;
    text-overflow:ellipsis;
    /*-webkit-line-clamp: 5;*/
  }
  .moment-pictures {
    flex-direction: row;
    flex-wrap:wrap;
    padding-bottom: 5px;
    padding-right: 5px;
    width: 600px;
  }
  .picture {
    width: 180px;
    margin-right: 5px;
    height: 180px;
    margin-bottom: 5px;
  }
  .moment-share {
    width: 580px;
    flex-direction: row;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 8px;
    padding-bottom: 8px;
    background-color: #EEEEEE;
  }
  .share-thumbnail {
    width: 85px;
    height: 85px;
    background-color: #DDD;
  }
  .share-title {
    font-size: 28px;
    color: #232323;
    margin-top: 25px;
    margin-left: 15px;
  }
  .moment-info {
    position: relative;
    padding-top: 20px;
    height: 50px;
    width: 580px;
    flex-direction: row;
  }
  .moment-time {
    color: #999999;
    font-size: 24px;
  }
  .moment-operation {
    margin-left: 20px;
    font-size: 24px;
  }
  .moment-feedback {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 45px;
    height: 32px;
  }
  .moment-arrow {
    width: 30px;
    height: 12px;
    margin-top: 20px;
    margin-left: 30px;
  }
  .moment-likes {
    width: 580px;
    background-color: #F2F2F2;
    padding-left: 20px;
    padding-right: 10px;
  }
  .like-list {
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 28px;
    line-height: 38px;
  }
  .comment-list {
    width: 580px;
    border-top-width: 1px;
    border-top-color: #DDD;
    background-color: #F2F2F2;
    padding-left: 20px;
    padding-right: 10px;
    padding-top: 5px;
    padding-bottom: 15px;
  }
  .moment-comment {
    padding-top: 6px;
    /* padding-bottom: 10px; */
  }
  .comment-text {
    font-size: 28px;
    line-height: 40px;
    color: #454545;
  }
</style>

<script>
  const mockMoments = [{
    author: {
      profile: 'http://img.qqzhi.com/upload/img_0_264028261D222908825_23.jpg',
      name: '孔明'
    },
    content: '精心整理，大家帮忙点个赞！',
    media: {
      share: {
        link: 'xxx',
        title: '手把手教你制作孔明灯，五分钟学会！',
        thumbnail: 'http://d9.yihaodianimg.com/N01/M08/1D/63/CgQCrlKsgAWAbKvCAAG6a3qH_po82600_380x380.jpg',
      }
    },
    location: '北京环洋大厦',
    time: '37 分钟前',
    from: '微博',
    likes: ['刘备', '黄月英', '孙尚香', '关羽', '大乔', '小乔', '貂蝉', '甄宓', '曹植', '蔡文姬', '吕布', '张春华', '赵云'],
    comments: [{
      author: '赵云',
      content: '丞相，有好多妹子给你点赞啊'
    }]
  }, {
    author: {
      profile: 'http://img.mp.itc.cn/upload/20170214/db4a4f8b20ba404ba2c8bc0f230de87b_th.jpg',
      name: '刘备'
    },
    content: '‘电子围栏’简单理解就是圈出了一个个虚拟的停车框，用户必须将车辆停在指定区域内，否则无法锁车结束行程。如果用户不将车停到规定区域，车辆就无法归还，手机app将一直计价。电子围栏”简单理解就是圈出了一个个虚拟的停车框，用户必须将车辆停在指定区域内，否则无法锁车结束行程。如果用户不将车停到规定区域，车辆就无法归还，手机app将一直计价。‘电子围栏’简单理解就是圈出了一个个虚拟的停车框，用户必须将车辆停在指定区域内，否则无法锁车结束行程。如果用户不将车停到规定区域，车辆就无法归还，手机app将一直计价。',
    location: '上海国家会展中心',
    media: {
      pictures: [
      'http://a2.att.hudong.com/87/21/19300001392461132643211668226.jpg',
      'http://upload-images.jianshu.io/upload_images/6533694-fa08245e10968665.jpg',
      'http://a2.att.hudong.com/87/21/19300001392461132643211668226.jpg', 
      'http://upload-images.jianshu.io/upload_images/6533694-fa08245e10968665.jpg',
      'http://a2.att.hudong.com/87/21/19300001392461132643211668226.jpg'],
    },
    time: '1 小时前',
    likes: ['刘禅', '孔明', '云长', '翼德', '孙权', '马超'],
    comments: [{
      author: '刘禅',
      content: '爸比，你说的太好啦，这是我的人生格言！'
    }, {
      author: '尚香♥',
      content: '哇塞好帅，图是我拍的 (ღˇ◡ˇღ)'
    }, {
      author: '刘备',
      reply: '刘禅',
      content: '以后每天早上抄十遍'
    }, {
      author: '孔明',
      content: '主公微言大义，定会被后人广为传颂 👍'
    }],
  }, {
    author: {
      profile: 'http://img307.ph.126.net/TcF7wq1cxoyqq54ubF-rXg%3D%3D/3783868111921385084.jpg',
      name: '云长'
    },
    content: '还是大哥见多识广，这些年来跟着大哥学到了很多东西，开阔了视野，感恩。',
    media: {
      pictures: ['http://upload-images.jianshu.io/upload_images/6533694-fa08245e10968665.jpg']
    },
    time: '2 小时前',
    from: '微博',
    likes: ['刘备', '孔明', '赵云'],
    comments: [{
      author: '翼德',
      content: '这是什么东西，为什么大哥没给我看过？！'
    }, {
      author: '刘备',
      reply: '翼德',
      content: '快来看，我们在三号帐篷附近'
    }]
  }]
  const modal = weex.requireModule('modal')
  const nativeApi = weex.requireModule('swifter')

  export default {
    data () {
      return {
        currentUser: {
          name: '刘备',
          profile: 'http://img.mp.itc.cn/upload/20170214/db4a4f8b20ba404ba2c8bc0f230de87b_th.jpg',
          poster: 'http://pic.fayi.com.cn/Upload/origin/123/62123.jpg'
        },
        moments: mockMoments,
        screenPicSrc: '', 
        isAccording: false,
        height: '1000px',
        moreInfo: '全文',
        lines: 3,

      }
    },
    methods: {
      onImageClick(src){
        this.isAccording = true
        this.screenPicSrc = src
      },
      onhidden(){
        this.isAccording = false
      },
      onresize(event){
        this.height = this.$getConfig().env.deviceHeight;
      },
      onSave(){
        const $image = this.$refs['img']
        $image.save(result => {
          if (result.success) {
            modal.toast({message: '保存成功'})
          } else {
            modal.toast({message: '保存失败'})
          }
        })
      },
      onmoreInfo(event){
        if (this.lines === 3) {
          this.moreInfo = '收起'
          this.lines = 100;
        } else {
          this.moreInfo = '全文'
          this.lines = 3;
        }
        
      },
      ondelete(index){
        nativeApi.printSome("这是我的一个方法", function(param) {
          modal.toast({message:param.toString()})
        })
      },
      oncommentInput(index){
        modal.toast({message:nativeApi.getNativeUrl()+''})
      }
    }
  }
</script>








