(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(7),c=n.n(a),i=n(1),l=n(2),s=n(4),u=n(3),m=n(5),p=(n(14),n(15),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"input-group ml-3"},o.a.createElement("div",{className:"input-group-prepend"},o.a.createElement("button",{className:"btn btn-outline-secondary",type:"button",onClick:this.props.removeItem,id:this.props.index},"X")),o.a.createElement("input",{type:"text",className:"form-control-lg form-control todo",placeholder:"Type here..",style:{background:this.props.color}}))}}]),t}(r.Component)),d=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"mt-2 mx-2 text-center"},o.a.createElement("button",{className:"btn btn-primary p-2",style:{background:this.props.color},onClick:this.props.action},"+"))}}]),t}(r.Component),f=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={todos:[],colors:["white","pink","gray","green","yellow","red","blue","purple"]},n.removeItem=function(e){var t=e.target.id,r=n.state.todos.slice(0),o=!0,a=!1,c=void 0;try{for(var i,l=r[Symbol.iterator]();!(o=(i=l.next()).done);o=!0){var s=i.value;if(s.id.toString()===t.toString()){r.splice(r.indexOf(s),1);break}}}catch(u){a=!0,c=u}finally{try{o||null==l.return||l.return()}finally{if(a)throw c}}n.setState({todos:r})},n.newItem=function(e){var t=n.state.todos.slice(0);t.push({id:n.state.todos.length,color:e}),n.setState({todos:t})},n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"container-fluid"},o.a.createElement("div",{className:"d-flex justify-content-center"},this.state.colors.map(function(t){return o.a.createElement(d,{action:function(){e.newItem(t)},color:t})})),o.a.createElement("div",{className:"d-flex mt-4"},this.state.todos.map(function(t){return o.a.createElement(p,{color:t.color,key:t.id,index:t.id,removeItem:e.removeItem})})))}}]),t}(r.Component);c.a.render(o.a.createElement(f,null),document.getElementById("root"))},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.65f8d099.chunk.js.map