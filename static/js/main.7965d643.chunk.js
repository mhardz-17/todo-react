(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(8),s=a.n(c),r=(a(15),a(6)),i=a(1),l=a(2),m=a(4),d=a(3),u=a(5),p=(a(16),a(17),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.todo,t=e.id,a=e.title,n=e.completed;return o.a.createElement("li",{className:"list-group-item",style:n?h:{}},o.a.createElement("div",{className:"row justify-content-md-center"},o.a.createElement("div",{className:"col-2"},o.a.createElement("input",{type:"checkbox",onChange:this.props.changeItemStatus.bind(this,t)})),o.a.createElement("div",{className:"col-8 text-left"},a),o.a.createElement("div",{className:"col-2"},o.a.createElement("button",{className:"btn btn-sm btn-danger",onClick:this.props.deleteItem.bind(this,t)},"Delete"))))}}]),t}(n.Component)),h={color:"#13ff13"},b=p,f=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.todos.map(function(t){return o.a.createElement(b,{key:t.id,todo:t,deleteItem:e.props.deleteItem,changeItemStatus:e.props.changeItemStatus})});return o.a.createElement("div",null,e.props.todos.length>0?o.a.createElement("ul",{id:"my-todo-list",className:"list-group",style:v},t):o.a.createElement("div",null,"No Todo For Today"))}}]),t}(n.Component),v={},y=f,g=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={title:""},a.submitForm=function(e){e.preventDefault(),a.props.addItem(a.state.title),a.setState({title:""})},a.changeText=function(e){a.setState({title:e.target.value})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.submitForm},o.a.createElement("div",{className:"input-group mb-2"},o.a.createElement("input",{type:"text",className:"form-control",placeholder:"Recipient's username","aria-label":"Recipient's username","aria-describedby":"basic-addon2",value:this.state.title,onChange:this.changeText}),o.a.createElement("div",{className:"input-group-append"},o.a.createElement("button",{className:"btn btn-primary",type:"submit"},"Add Item"))))}}]),t}(n.Component),E=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={todos:[{id:1,title:"My Task 1",completed:!1},{id:2,title:"My Task 2",completed:!1},{id:3,title:"My Task 3",completed:!1},{id:4,title:"My Task 4",completed:!1}]},a.deleteItem=function(e){a.setState({todos:Object(r.a)(a.state.todos.filter(function(t){return t.id!==e}))})},a.addItem=function(e){var t=parseInt(a.state.todos.map(function(e){return e.id}).sort().pop())+1;a.setState({todos:[].concat(Object(r.a)(a.state.todos),[{id:t,title:e,completed:!1}])})},a.changeItemStatus=function(e){a.setState({todos:a.state.todos.map(function(t){return t.id===e&&(t.completed=!t.completed),t})})},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("h1",null,"My React Todo List")),o.a.createElement("section",{className:"container",style:{marginTop:"5px"}},o.a.createElement("div",{className:"row justify-content-md-center"},o.a.createElement("div",{className:"col col-lg-6",style:j},o.a.createElement(g,{addItem:this.addItem}),o.a.createElement(y,{todos:this.state.todos,deleteItem:this.deleteItem,changeItemStatus:this.changeItemStatus})))))}}]),t}(n.Component),j={},O=E;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.7965d643.chunk.js.map