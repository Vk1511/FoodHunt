(this.webpackJsonpfoodapp=this.webpackJsonpfoodapp||[]).push([[0],{25:function(e,t,c){},44:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(6),i=c.n(s),r=(c(25),c(3)),l=c(20),d=c.n(l),j=c.p+"static/media/logo.6ce6df1b.png",o=(c(44),c(0));var b=function(e){var t=e.handleSearch;return Object(o.jsxs)("div",{className:"navbar",children:[Object(o.jsxs)("div",{className:"nav_icon",children:[Object(o.jsx)("img",{src:j,alt:"logo",className:"logo"}),Object(o.jsx)("span",{className:"site_title",children:"FoodHunt"})]}),Object(o.jsx)("div",{className:"nav_search_box",children:Object(o.jsx)("input",{type:"search",className:"search_bbox",placeholder:"Serch Recipe i.e Paneer Masala",onChange:function(e){return t(e)}})})]})},h=c.p+"static/media/search.16f37be5.svg";c(46);var u=function(e){var t=e.apiData,c=e.handleIngredients;return Object(o.jsx)("div",{className:"main_conatiner",children:0===t.length?Object(o.jsxs)("div",{className:"nodata",children:[Object(o.jsx)("img",{src:h,alt:"logo",className:"nodata_img"}),Object(o.jsx)("p",{style:{fontSize:"2rem",fontWeight:"700"},children:"Search Recipe"})]}):t.map((function(e,t){return Object(o.jsxs)("div",{className:"card_con",children:[Object(o.jsx)("div",{className:"card_image",children:Object(o.jsx)("img",{src:e.recipe.image,alt:"img",className:"card_img"})}),Object(o.jsx)("span",{className:"iteam_title",children:e.recipe.label}),Object(o.jsxs)("span",{className:"nutrients_con",children:[Object(o.jsx)("span",{className:"nutrients",children:"Nutrients"}),Object(o.jsxs)("span",{className:"nutrients_det",children:[Object(o.jsx)("span",{children:"Energy"}),Object(o.jsx)("span",{children:"Protein"}),Object(o.jsx)("span",{children:"Fat"}),Object(o.jsx)("span",{children:"Carbs"})]}),Object(o.jsxs)("span",{className:"nutrients_det_ans",children:[Object(o.jsxs)("span",{children:[Math.trunc(e.recipe.totalNutrients.ENERC_KCAL.quantity)," ","kcal"]}),Object(o.jsxs)("span",{children:[Math.trunc(e.recipe.totalNutrients.PROCNT.quantity)," g"]}),Object(o.jsxs)("span",{children:[Math.trunc(e.recipe.totalNutrients.FAT.quantity)," g"]}),Object(o.jsxs)("span",{children:[Math.trunc(e.recipe.totalNutrients.CHOCDF.quantity)," g"]})]})]}),Object(o.jsx)("span",{className:"ingredients",onClick:function(){return c(e.recipe.label,e.recipe.ingredientLines,e.recipe.url)},children:"Ingredients"})]},t)}))})},m=(c(47),c(7)),p=c.n(m),O=c.p+"static/media/close.eedac43a.svg";c(59);var x=function(e){var t=e.modal,c=e.dishName,n=e.ingredientLines,a=e.setModal,s=e.handleRecipeLink,i=e.dishURL;return p.a.setAppElement("#root"),Object(o.jsx)("div",{children:Object(o.jsxs)(p.a,{isOpen:t,className:"modal_con",children:[Object(o.jsxs)("div",{className:"modal_head",children:[Object(o.jsx)("div",{className:"title",children:c}),Object(o.jsx)("button",{className:"cls_btn",onClick:function(){return a(!t)},children:Object(o.jsx)("img",{src:O,alt:"close",className:"cls_btn_img"})})]}),Object(o.jsxs)("div",{className:"modal_content",children:[Object(o.jsxs)("div",{className:"content_head",children:["Ingredients",Object(o.jsx)("hr",{})]}),Object(o.jsx)("div",{className:"content_data",children:n.map((function(e,t){return Object(o.jsx)("ul",{children:Object(o.jsx)("li",{className:"dishingredient",children:e})},t)}))})]}),Object(o.jsxs)("div",{className:"footer",children:[Object(o.jsx)("span",{className:"play_video",onClick:function(){return window.open(i,"_blank")},children:"Read Article"}),Object(o.jsx)("span",{className:"play_video",onClick:function(){return s(c)},children:"Play Video"})]})]})})};var g=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)([]),i=Object(r.a)(s,2),l=i[0],j=i[1],h=Object(n.useState)(!1),m=Object(r.a)(h,2),p=m[0],O=m[1],g=Object(n.useState)(),N=Object(r.a)(g,2),f=N[0],v=N[1],_=Object(n.useState)(),y=Object(r.a)(_,2),C=y[0],k=y[1],S=Object(n.useState)(),w=Object(r.a)(S,2),L=w[0],F=w[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(b,{handleSearch:function(e){clearTimeout(c);var t=setTimeout((function(){d.a.get("https://api.edamam.com/search?q=".concat(e.target.value,"&app_id=4c2a518f&app_key=578f6fcfcbe465acc02994ef02bcbb40")).then((function(e){j(e.data.hits)}))}),150);a(t)}}),Object(o.jsx)(u,{apiData:l,handleIngredients:function(e,t,c){O(!p),v(e),F(t),k(c)}}),!0===p?Object(o.jsx)(x,{modal:p,dishName:f,ingredientLines:L,setModal:O,handleRecipeLink:function(e){var t=e.replace(/\s/g,"+");window.open("https://www.youtube.com/results?search_query=how+to+make+"+t,"_blank")},dishURL:C}):""]})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,61)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(g,{})}),document.getElementById("root")),N()}},[[60,1,2]]]);
//# sourceMappingURL=main.4e2d166d.chunk.js.map