(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(7),c=n.n(o),i=n(1),s=n(2),l=n(4),u=n(3),m=n(5),d=(n(14),n(15),function(t){function e(){return Object(i.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"input-group ml-3"},r.a.createElement("div",{className:"input-group-prepend"},r.a.createElement("button",{className:"btn btn-outline-secondary",type:"button",onClick:this.props.removeItem,id:this.props.index},"X")),r.a.createElement("input",{type:"text",className:"form-control-lg form-control todo",placeholder:"Type here..",style:{background:this.props.color}}))}}]),e}(a.Component)),p=function(t){function e(){return Object(i.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return r.a.createElement("div",{className:"mt-3 text-center"},r.a.createElement("button",{className:"btn btn-primary btn-danger",onClick:this.props.action},"+"))}}]),e}(a.Component);function b(){var t=255*Math.random(),e=255*Math.random(),n=255*Math.random();return"rgb(".concat(t,",").concat(e,",").concat(n,")")}var h=function(t){function e(){var t,n;Object(i.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(r)))).state={todos:[]},n.removeItem=function(t){var e=t.target.id,a=n.state.todos.slice(0),r=!0,o=!1,c=void 0;try{for(var i,s=a[Symbol.iterator]();!(r=(i=s.next()).done);r=!0){var l=i.value;if(l.id.toString()===e.toString()){a.splice(a.indexOf(l),1);break}}}catch(u){o=!0,c=u}finally{try{r||null==s.return||s.return()}finally{if(o)throw c}}n.setState({todos:a})},n.newItem=function(){var t=n.state.todos.slice(0);t.push({id:n.state.todos.length}),n.setState({todos:t})},n}return Object(m.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this;return r.a.createElement("div",{className:"container"},r.a.createElement(p,{action:this.newItem}),r.a.createElement("div",{className:"d-flex mt-4"},this.state.todos.map(function(e){return r.a.createElement(d,{color:b(),key:e.id,index:e.id,removeItem:t.removeItem})})))}}]),e}(a.Component);c.a.render(r.a.createElement(h,null),document.getElementById("root"))},8:function(t,e,n){t.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.713bdb87.chunk.js.map