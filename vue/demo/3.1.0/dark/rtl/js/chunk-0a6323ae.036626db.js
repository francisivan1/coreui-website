(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0a6323ae"],{bd76:function(e,s,t){"use strict";var r=[{username:"Samppa Nori",registered:"2012/01/01",role:"Member",status:"Active"},{username:"Estavan Lykos",registered:"2012/02/01",role:"Staff",status:"Banned"},{username:"Chetan Mohamed",registered:"2012/02/01",role:"Admin",status:"Inactive"},{username:"Derick Maximinus",registered:"2012/03/01",role:"Member",status:"Pending"},{username:"Friderik Dávid",registered:"2012/01/21",role:"Staff",status:"Active"},{username:"Yiorgos Avraamu",registered:"2012/01/01",role:"Member",status:"Active"},{username:"Avram Tarasios",registered:"2012/02/01",role:"Staff",status:"Banned",_classes:"table-success"},{username:"Quintin Ed",registered:"2012/02/01",role:"Admin",status:"Inactive"},{username:"Enéas Kwadwo",registered:"2012/03/01",role:"Member",status:"Pending"},{username:"Agapetus Tadeáš",registered:"2012/01/21",role:"Staff",status:"Active"},{username:"Carwyn Fachtna",registered:"2012/01/01",role:"Member",status:"Active",_classes:"table-success"},{username:"Nehemiah Tatius",registered:"2012/02/01",role:"Staff",status:"Banned"},{username:"Ebbe Gemariah",registered:"2012/02/01",role:"Admin",status:"Inactive"},{username:"Eustorgios Amulius",registered:"2012/03/01",role:"Member",status:"Pending"},{username:"Leopold Gáspár",registered:"2012/01/21",role:"Staff",status:"Active"},{username:"Pompeius René",registered:"2012/01/01",role:"Member",status:"Active"},{username:"Paĉjo Jadon",registered:"2012/02/01",role:"Staff",status:"Banned"},{username:"Micheal Mercurius",registered:"2012/02/01",role:"Admin",status:"Inactive"},{username:"Ganesha Dubhghall",registered:"2012/03/01",role:"Member",status:"Pending"},{username:"Hiroto Šimun",registered:"2012/01/21",role:"Staff",status:"Active"},{username:"Vishnu Serghei",registered:"2012/01/01",role:"Member",status:"Active"},{username:"Zbyněk Phoibos",registered:"2012/02/01",role:"Staff",status:"Banned"},{username:"Einar Randall",registered:"2012/02/01",role:"Admin",status:"Inactive",_classes:"table-danger"},{username:"Félix Troels",registered:"2012/03/21",role:"Staff",status:"Active"},{username:"Aulus Agmundr",registered:"2012/01/01",role:"Member",status:"Pending"}];s["a"]=r},dc02:function(e,s,t){"use strict";t.r(s);var r=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("CRow",[t("CCol",{attrs:{col:"12",xl:"8"}},[t("transition",{attrs:{name:"slide"}},[t("CCard",[t("CCardHeader",[e._v(" Users ")]),t("CCardBody",[t("CDataTable",{attrs:{hover:"",striped:"",items:e.items,fields:e.fields,"items-per-page":5,"clickable-rows":"","active-page":e.activePage},on:{"row-clicked":e.rowClicked},scopedSlots:e._u([{key:"status",fn:function(s){return[t("td",[t("CBadge",{attrs:{color:e.getBadge(s.item.status)}},[e._v(" "+e._s(s.item.status)+" ")])],1)]}}])}),t("CPagination",{attrs:{align:"center","double-arrows":!1,"active-page":e.activePage,pages:5},on:{"update:activePage":e.pageChange}})],1)],1)],1)],1)],1)},a=[],n=t("bd76"),i={name:"Users",data:function(){return{items:n["a"],fields:[{key:"username",label:"Name",_classes:"font-weight-bold"},{key:"registered"},{key:"role"},{key:"status"}],activePage:1}},watch:{$route:{immediate:!0,handler:function(e){e.query&&e.query.page&&(this.activePage=Number(e.query.page))}}},methods:{getBadge:function(e){switch(e){case"Active":return"success";case"Inactive":return"secondary";case"Pending":return"warning";case"Banned":return"danger";default:}},rowClicked:function(e,s){this.$router.push({path:"users/".concat(s+1)})},pageChange:function(e){this.$router.push({query:{page:e}})}}},u=i,d=t("2877"),o=Object(d["a"])(u,r,a,!1,null,null,null);s["default"]=o.exports}}]);
//# sourceMappingURL=chunk-0a6323ae.036626db.js.map