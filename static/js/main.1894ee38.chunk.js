(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{55:function(t,e,n){},66:function(t,e,n){"use strict";n.r(e);var c,a,r=n(0),o=n.n(r),u=n(10),s=n.n(u),i=n(5),b=n(14),l=n(7),d=n(2),j=n(6),h=n(3),f=Object(d.b)("contacts/fetchRequest"),O=Object(d.b)("contacts/fetchSucces"),p=Object(d.b)("contacts/fetchError"),m=Object(d.b)("contacts/addRequest"),v=Object(d.b)("contacts/addSucces"),x=Object(d.b)("contacts/addError"),y=Object(d.b)("contacts/deleteRequest"),g=Object(d.b)("contacts/deleteSucces"),k=Object(d.b)("contacts/deleteError"),C=Object(d.b)("contacts/cahngeFilter"),_=Object(d.c)([],(c={},Object(j.a)(c,O,(function(t,e){return e.payload})),Object(j.a)(c,v,(function(t,e){var n=e.payload;return[].concat(Object(b.a)(t),[n])})),Object(j.a)(c,g,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),c)),N=Object(d.c)("",Object(j.a)({},C,(function(t,e){return e.payload}))),w=Object(d.c)("",(a={},Object(j.a)(a,p,(function(t,e){var n=e.payload;return console.log("payload",n)})),Object(j.a)(a,x,(function(t,e){var n=e.payload;return console.log("payload",n)})),Object(j.a)(a,k,(function(t,e){var n=e.payload;return console.log("payload",n)})),a)),A=Object(h.b)({contacts:_,filter:N,error:w}),S=Object(b.a)(Object(d.d)({serializableCheck:{ignoredActions:[l.a,l.f,l.b,l.c,l.d,l.e]}})),q=Object(d.a)({reducer:{phonebook:A},middleware:S,devTools:!1}),z=n(12),D=n(13),E=n(16),F=n(15),L=n(8),R=n.n(L);R.a.defaults.baseURL="http://localhost:3000";n(55);var T=n(11),B=function(t){return t.phonebook.contacts},H=function(t){return t.phonebook.filter},J=Object(T.a)([B,H],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))})),M=n(1),Z=Object(i.b)((function(t){return{visibleContacts:J(t)}}),(function(t){return{deleteContact:function(e){return t(function(t){return function(e){e(y()),R.a.delete("/contacts/".concat(t)).then((function(){return e(g(t))})).catch((function(t){return e(k(t))}))}}(e))}}}))((function(t){var e=t.visibleContacts,n=t.deleteContact;return Object(M.jsx)("ul",{className:"phonebook__list",children:e.map((function(t){return Object(M.jsxs)("li",{className:"pnonebook__listItem",children:[Object(M.jsxs)("p",{children:[t.name," : ",t.number]}),Object(M.jsx)("button",{type:"button",onClick:function(){return n(t.id)},children:"Delete contact"})]},t.id)}))})})),I=Object(i.b)((function(t){return{value:H(t)}}),(function(t){return{changeFilter:function(e){return t(C(e))}}}))((function(t){var e=t.value,n=t.changeFilter;return Object(M.jsxs)("label",{className:"phonebook__filter",children:["Find contacts by name",Object(M.jsx)("input",{type:"text",value:e,onChange:function(t){return n(t.currentTarget.value)}})]})})),P=n(28),U=n.n(P),$=function(t){Object(E.a)(n,t);var e=Object(F.a)(n);function n(){var t;Object(z.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:""},t.updateContacts=function(e){e.preventDefault();var n=t.state,c=n.name,a=n.number;if(t.checkDuplicates(c))alert("".concat(c," \u0443\u0436\u0435 \u0432 \u0441\u043f\u0438\u0441\u043a\u0435"));else{var r={name:c,number:a,id:U.a.generate()};t.props.addContact(r),t.reset()}},t.checkDuplicates=function(e){return t.props.contacts.map((function(t){return t.name})).includes(e)},t.changeHadler=function(e){t.setState(Object(j.a)({},e.currentTarget.name,e.currentTarget.value))},t}return Object(D.a)(n,[{key:"reset",value:function(){this.setState({name:"",number:""})}},{key:"render",value:function(){return Object(M.jsxs)("form",{onSubmit:this.updateContacts,className:"phonebook_form",children:[Object(M.jsxs)("div",{className:"phonebook__inputarea",children:[Object(M.jsxs)("label",{children:[Object(M.jsx)("h2",{children:"Name"}),Object(M.jsx)("input",{value:this.state.name,type:"text",name:"name",onChange:this.changeHadler,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(M.jsxs)("label",{children:[Object(M.jsx)("h2",{children:"Number"}),Object(M.jsx)("input",{value:this.state.number,type:"tel",name:"number",onChange:this.changeHadler,pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]})]}),Object(M.jsx)("button",{type:"submit",className:"phonebook__addButton",children:"Add contact"})]})}}]),n}(r.Component),G=Object(i.b)((function(t){return{contacts:B(t)}}),(function(t){return{addContact:function(e){return t((n=e,function(t){t(m()),R.a.post("/contacts",n).then((function(e){var n=e.data;return t(v(n))})).catch((function(e){return t(x(e))}))}));var n}}}))($),K=function(t){Object(E.a)(n,t);var e=Object(F.a)(n);function n(){var t;Object(z.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={},t}return Object(D.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){return Object(M.jsxs)("div",{className:"phonebook",children:[Object(M.jsx)("h1",{className:"phonebook__titel",children:" Phonebook"}),Object(M.jsx)(G,{}),Object(M.jsx)("h2",{children:" Contacts List"}),Object(M.jsx)(I,{}),Object(M.jsx)(Z,{})]})}}]),n}(r.Component),Q=Object(i.b)(null,(function(t){return{fetchContacts:function(){return t((function(t){t(f()),R.a.get("/contacts").then((function(e){var n=e.data;return t(O(n))})).catch((function(e){return t(p(e))}))}))}}}))(K);n(65);s.a.render(Object(M.jsx)(o.a.StrictMode,{children:Object(M.jsx)(i.a,{store:q,children:Object(M.jsx)(Q,{})})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.1894ee38.chunk.js.map