---
layout: Post
title: 开发者文档
---
---
---
---
[web开发者文档](https://developer.mozilla.org/zh-CN/)

[YY UED 前端规范指南](https://github.com/yyued/fe-guide)
### 文件
- 文件名不得含有**空格**
- 如无特殊要求，文件编码采用UTF-8**无BOM**格式(便于不同系统间修改查看)
- 缩进,一个tab采用**2**个空格符(**待定**),不应直接插入制表符，同时保证缩进层级**对齐**
#### 命名
【强制】 所有的目录与文件命名使用中横线连接多个单词；
- html和css   全部小写,横线连接
- js
  - 变量:小驼峰          maxCount
  - 常量:全大写以 **_** 隔开     MAX_COUNT
- 代码命名做到见名知意
  - 以**有实际意义**的英文单词为主
  - 避免使用拼音,若使用需注释说明含义
  - **绝对不能**使用拼音缩写
## JavaScript
### 注释
#### 文件注释
 文件注释位于文件的最前面，应包括文件的以下信息：
 - 概要说明及版本（必须）
 - 版本号（必须）
 - 作者和修改时间（必须）
   - 格式采用2020-02-19 08:00:00 (待定)
   - VSCode可以使用Insert Date String插件插入时间
 - 如引入开源组件，需声明以下内容
   - 项目地址（必须）
   - 版权声明（必须）
   - 开源协议（必须）
     - **注意**协议是否允许商用

文件注释必须全部以英文字符表示，并存在于文件的开发版本与生产版本中。例如：
#### 普通注释
 普通注释是为了帮助开发者和阅读者更好地理解程序，不会出现在API文档中。
 其中，单行注释以“//”开头；多行注释以“/*”开头，以“*/”结束。普通注释的使用需遵循以下规定。
- 总是在单行注释符后留一个空格。例如：
```
// this is comment
```
- 总是在多行注释的结束符前留一个空格（使星号对齐）。例如：
```
/*
 *
 */
```
- 不要把注释写在多行注释的开始符、结束符所在行。例如：
```
/* start
 *
end */
```
- 不要编写无意义的注释。例如：
```
// 初始化value变量为0
var value = 0;
```
- 如果某段代码有功能未实现，或者有待完善，必须添加“TODO”标记，“TODO”前后应留一个空格。例如：
```
// TODO 未处理IE6-8的兼容性
function setOpacity(node, val) {
    node.style.opacity = val;
}
```
#### 文档注释
 文档注释将会以预定格式出现在API文档中。
 它以“/**”开头，以“*/”结束，其间的每一行均以“*”开头（均与开始符的第一个“*”对齐）。
 基本的约束和普通注释相同
##### 常用注释标签说明
- @author 指示代码的作者
- @param  指定参数名和说明来描述一个函数参数
  - @argument 上面的别名
  - @param {*} [name=value] - description *为任意类型，具体根据参数类型修改,[]内为名称和默认值,无默认值直接写名称
- @returns 描述函数的返回值
- @see 创建一个HTML链接，指向指定类的描述
  - 用于多个方法调用时说明调用关系
- @version 指定发布版本
- @since 从何时开始添加的代码
###### 以下可选
- @requires 创建一个HTML链接，指向这个模块所需的指定模块
  - @module 标记一个js模块
- {@link} 创建一个HTML链接，指向指定的类。这与@see很类似，但{@link}能嵌在注释文本中
- @ignore JSDoc忽略有这个标记的函数
- @deprecated 说明这已不再是首选方法。指示一个函数已经废弃，而且在将来的代码版本中将彻底删除。要避免使用这段代码
###### 示例
```
/**
 * @author 我 2020-02-19 16:01:56
 * @version 1.0
 * @since 2020/02/18 17:54:00
 * @param {Object} employee - 员工信息
 * @param {string} employee.name - 员工姓名
 * @param {string} employee.company - 员工所属公司
 * @returns {string} 返回员工信息描述
 * @see company
 *
 */
function sayHello(employee) {
  return "Hello I'm" + employee.name+",I work for "+company(employee.company);
}

/**
 * @author 我 2020-02-19 16:02:01
 * @version 1.0
 * @since 2020/02/18 17:54:00
 * @param {string} [name=KGB] - 公司名称
 * @returns {string} 返回公司名称
 * @see sayHello
 * @todo 获取公司其余信息返回
 */
 function company(name="KGB") {
   return name
 }
```
### 代码规范
#### 命名
1. 变量命名：
  - 变量命名使用有意义的单词和驼峰式命名。
  - 临时变量使用**t**作为前缀,如tName , tTime。
  - 循环变量简写：i , j , k。
  - 全局变量使用**g**作为前缀，如gUserName , gLoginTime。
  - 常量全部字母都大写，如： PI , COPYRIGHT。
    - **注**:常量可存在于函数中，也可存在于全局。
2. 函数（方法）命名：
   - 统一使用动词或动词加名词的形式。如getVersion() , submitForm()。
   - 涉及返回逻辑值的函数可以使用is , has 等表示逻辑的词语代替动词。 内部函数前加上 ‘‘前缀。
   - 可选参数以 **opt** 开头.
3. 类（对象）命名：
  - 类名首字母大写。
  - 属性名为具有一定意义的名词。私有属性加 ““。
  - 方法名为有意义的动词[+名词]，首字母小写。私有方法加 ‘_”。
#### 代码编写
1. 明确this的指向
2. 避免使用条件复杂的三元运算符
3. 比较时采用 **===** 
   - 仅当判断 null 或 undefined 时，允许使用 **==**
4. 对于相同变量或表达式的多值条件，用 switch 代替 if。
5. 如果函数或全局中的 else 块后没有任何语句，可以删除 else。
6. 对循环内多次使用的不变值，在循环外用变量缓存。
7. 类型检测优先使用 typeof。对象类型检测使用 instanceof。null 或 undefined 的检测使用 == null。
8. 不要在一个非函数块里面声明一个函数，应该把那个函数赋给一个变 量。浏览器让你这么做，但是解析的情况是不同的。
  ```javascript
  /*bad*/
  if(currentUser){
      function test(){
          console.log('Nope.');
      }
  }
  /*good*/
  if(currentUser){
      var test = function test(){
          console.log('Yup.');
      };
  }
  ```
9. 请勿把参数命名为 arguments,这会对函数内的 arguments对象产生影响。
  ```javascript
  /*bad*/
  function nope(name, options, arguments){
    
  }
  /*good*/
  function yup(name, options, args){
      
  }
  ```
10. 不要使用保留字作为键。
  ```javascript
  /*bad*/
  var superman = {
  class:'superhero',
  default:{ clark:'kent' },
  private: true
  }
  /*good*/
  var superman = {
  klass: 'superhero',
  defaults:{ clark: 'kent' },
  hidden: true
  };
  ```
10. 当使用变量访问对象中的属性时使用中括号（俗称方括号）。
  ```javascript
  var luke = {
      jedi: true,
      age: 28
  };
  function getProp(prop){
      return luke[prop];
  }
  var isJedi = getProp('jedi');
  ```
## html
### 注释
html应尽量避免注释,需注释时需说明用意
```html
<!-- 
  @author 我 2020-02-19 16:17:12
  @description todo:说明注释规范
 -->
```
### 代码规范
1. 属性排序，按照class,id,name，其他属性排序
   - class用于标识高度可复用组件，因此排首位
   - id用于标识具体组件，因此排第二位
2. 减少标签数量（DOM元素）
3. 在HTML5规范下，布尔型属性可以在声明时不赋值
  ```html
    <input type="checkbox" value="1" checked>
  ```
### 类命名采用 [BEM](https://www.w3cplus.com/css/bem-definitions.html) 规则
  ``` html
  <!-- 不要出现 block__element__element -->
  <ul class="block--big-size"> <!-- 块、元素和修饰直接使用'--'分割 --> 
    <li class="block__element">
      <span class="block__text">文本</span> <!-- 这是可以的 -->
    </li> <!-- 块和元素直间使用 '__'分割 -->
    <li class="block__element--red-color">元素</li>
    <li class="block__element">元素</li>
    <li class="block__element">元素</li>
  </ul>
  ```
#### 语义化编程
- **TODO**：待完善
## CSS
### 注释
1. 注释格式与js的多行注释相同
2. 注释同js的规范,明确作者,版本，修改时间和文件说明
```css
/**
 * @author 我 2020-02-19 16:19:19
 * @description todo:说明注释规范
 */
```
### 代码规范
1. 按顺序排列属性
  - 位置：bottom、float、display、left、position、right、top和z-index等；
  - 大小：height、margin、padding和width等；
  - 版式：color、font、letter-spacing、line-height和text-align等；
  - 背景：background等；
  - 其它：animation和transition等。
2. 缩写属性有些属性是可以合在一块的，既精简代码，又便于阅读。
  ```css
  .test-selector-1{
    /*
    * 不推荐写法
    * padding-top: 3px;
    * padding-right: 5px;
    * padding-bottom: 3px;
    * padding-left: 5px;
    */
    padding: 3px 5px;
  }
  ```
3. 去除小数开头的0
  ```css
  .test-selector-2{
    /*
    * 不推荐写法
    * font-size: 0.5em;
    */
    font-size: .5em;
  }
  ```
4. 缩写十六进位值
  ```css
  .test-selector-3{
    /*
    * 不推荐写法
    * background-color: #00bb00;
    */
    background-color: #0b0;
  }
  ```
6. 避开!important
- **!important**会给日后的维护带来麻烦，使开发者难以查找样式问题。如果在书写时发现新样式无法复写旧样式。通常有两个原因：
  - 要么新样式写在了旧样式的前面
  - 要么新样式对应的选择器的权重比旧样式的更低。

  针对后一种情况，只要增加新样式选择器的权重值就可以完全避开这个问题，无需用到**!important**
  - **推荐的写法**：
  ```css
  .test-selector-6 .test-selector-7{
    font-size: 16px;
  }

  .test-selector-6 .test-selector-7 .test-selector-8{
    font-size: 14px;
  }
  ```
  - 不推荐的写法：
  ```css
  .test-selector-6 .test-selector-7{
    font-size: 16px;
  }

  .test-selector-8{
    font-size: 14px !important;
  }
  ```
8. 将标准属性置于底部
有些属性在部分浏览器中尚未完全标准化，每家浏览器开发商对这些属性的实现效果或许并不统一，因此目前需要在开头加入浏览器厂商的专有字符串。因此同一个属性需要写多次。
但有一条需要**注意**：将不带前置标记的属性置于最下方。
   - **推荐的写法**：
   ```css
   .test-selector-9{
   opacity: 0;
   -webkit-transition: opacity 3s;
   -moz-transition: opacity 3s;
   -ms-transition: opacity 3s;
   -o-transition: opacity 3s;
   transition: opacity 3s;
   }
   ```
   - 不推荐的写法：
   ```css
   .test-selector-9{
    opacity: 0;
    -webkit-transition: opacity 3s;
    transition: opacity 3s;
    -moz-transition: opacity 3s;
    -ms-transition: opacity 3s;
    -o-transition: opacity 3s;
   }
   ```
9. 注意标点符号每个属性独占一列。紧接样式属性的冒号，其后面要留一个半角空格。**值以分号结尾**。
  ```css
  .test-selector-10{
    /*
    * 不推荐写法
    * opacity:.5
    */
    opacity: .5;
  }
  ```
