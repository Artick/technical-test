(this["webpackJsonpecomsur-cart"]=this["webpackJsonpecomsur-cart"]||[]).push([[0],{14:function(t,e,c){},16:function(t,e,c){"use strict";c.r(e);var r=c(1),s=c.n(r),i=c(8),n=c.n(i),a=(c(14),c(7)),o=c(2),d=c(3),l=c(5),j=c(4);function u(t,e){return" "+t+Number(e.toFixed(1).toLocaleString())+" "}var h=c(0),p=function(t){Object(l.a)(c,t);var e=Object(j.a)(c);function c(){return Object(o.a)(this,c),e.apply(this,arguments)}return Object(d.a)(c,[{key:"render",value:function(){var t=this,e=this.props.cartItems;return Object(h.jsxs)("div",{children:[0===e.length?Object(h.jsx)("div",{className:"cart cart-header",children:"Cart is empty"}):Object(h.jsxs)("div",{className:"cart cart-header",children:[e.length," product(s) in cart"]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"cart",children:Object(h.jsx)("ul",{className:"cart-items",children:e.map((function(e){return Object(h.jsxs)("li",{children:[Object(h.jsx)("div",{children:Object(h.jsx)("img",{src:e.imageURL,alt:e.name})}),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:e.name}),Object(h.jsxs)("div",{className:"right",children:[u(e.currency,e.price)," x ",e.count," "," ",Object(h.jsx)("button",{className:"button",onClick:function(){return t.props.removeFromCart(e)},children:"Remove"})]})]})]},e.id)}))})}),0!==e.length&&Object(h.jsx)("div",{className:"cart",children:Object(h.jsx)("div",{className:"total",children:Object(h.jsxs)("div",{children:["Total: ","$ ",e.reduce((function(t,e){return t+e.price*e.count}),0)]})})})]})]})}}]),c}(r.Component),m=function(t){Object(l.a)(c,t);var e=Object(j.a)(c);function c(){return Object(o.a)(this,c),e.apply(this,arguments)}return Object(d.a)(c,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"filter",children:[Object(h.jsxs)("div",{className:"filter-result",children:[this.props.count," Products"]}),Object(h.jsxs)("div",{className:"filter-sort",children:["Order"," ",Object(h.jsxs)("select",{value:this.props.sort,onChange:this.props.sortProducts,children:[Object(h.jsx)("option",{children:"Lastest"}),Object(h.jsx)("option",{value:"lowest",children:"Lowest"}),Object(h.jsx)("option",{value:"highest",children:"Highest"})]})]})]})}}]),c}(r.Component),b=function(t){Object(l.a)(c,t);var e=Object(j.a)(c);function c(){return Object(o.a)(this,c),e.apply(this,arguments)}return Object(d.a)(c,[{key:"render",value:function(){var t=this;return Object(h.jsx)("div",{children:Object(h.jsx)("ul",{className:"products",children:this.props.products.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsxs)("div",{className:"product",children:[Object(h.jsxs)("a",{href:"#"+e.id,children:[Object(h.jsx)("img",{src:e.imageURL,alt:e.name}),Object(h.jsx)("p",{children:e.name})]}),Object(h.jsxs)("div",{className:"product-price",children:[Object(h.jsx)("div",{children:u(e.currency,e.price)}),Object(h.jsx)("button",{onClick:function(){return t.props.addToCart(e)},className:"button primary",children:"Add to Cart"})]})]})},e.id)}))})})}}]),c}(r.Component),O=c(9),v=function(t){Object(l.a)(c,t);var e=Object(j.a)(c);function c(){var t;return Object(o.a)(this,c),(t=e.call(this)).removeFromCart=function(e){var c=t.state.cartItems.slice();t.setState({cartItems:c.filter((function(t){return t.id!==e.id}))})},t.addToCart=function(e){var c=t.state.cartItems.slice(),r=!1;c.forEach((function(t){t.id===e.id&&(t.count++,r=!0)})),r||c.push(Object(a.a)(Object(a.a)({},e),{},{count:1})),t.setState({cartItems:c})},t.sortProducts=function(e){var c=e.target.value;console.log(e.target.value),t.setState((function(e){return{sort:c,products:t.state.products.slice().sort((function(t,e){return"lowest"===c?t.price>e.price?1:-1:"highest"===c?t.price<e.price?1:-1:t.id<e.id?1:-1}))}}))},t.state={products:O.catalog,cartItems:[],price:"",sort:""},t}return Object(d.a)(c,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"grid-container",children:[Object(h.jsx)("header",{children:Object(h.jsx)("h1",{children:"Ecomsur shopping cart"})}),Object(h.jsx)("main",{children:Object(h.jsxs)("div",{className:"content",children:[Object(h.jsxs)("div",{className:"main",children:[Object(h.jsx)(m,{count:this.state.products.length,price:this.state.price,sort:this.state.sort,sortProducts:this.sortProducts}),Object(h.jsx)(b,{products:this.state.products,addToCart:this.addToCart})]}),Object(h.jsx)("div",{className:"sidebar",children:Object(h.jsx)(p,{cartItems:this.state.cartItems,removeFromCart:this.removeFromCart})})]})}),Object(h.jsx)("footer",{children:"Ecomsur technical test"})]})}}]),c}(s.a.Component);n.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("root"))},9:function(t){t.exports=JSON.parse('{"catalog":[{"id":1,"imageURL":"https://via.placeholder.com/290x370.png","name":"product A","type":"","price":250,"currency":"$"},{"id":2,"imageURL":"https://via.placeholder.com/290x370.png","name":"product B","type":"","price":350,"currency":"$"},{"id":3,"imageURL":"https://via.placeholder.com/290x370.png","name":"product C","type":"","price":200,"currency":"$"},{"id":4,"imageURL":"https://via.placeholder.com/290x370.png","name":"product D","type":"","price":500,"currency":"$"},{"id":5,"imageURL":"https://via.placeholder.com/290x370.png","name":"product D","type":"","price":100,"currency":"$"}]}')}},[[16,1,2]]]);
//# sourceMappingURL=main.35fd73fa.chunk.js.map