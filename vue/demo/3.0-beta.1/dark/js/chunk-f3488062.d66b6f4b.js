(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f3488062"],{"131a":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"toolbar p-3"},[e("div",{staticClass:"btn-group mr-1"},[e("CButton",{attrs:{color:"light"}},[e("CIcon",{attrs:{name:"cil-envelope-closed"}})],1),e("CButton",{attrs:{color:"light"}},[e("CIcon",{attrs:{name:"cil-star"}})],1),e("CButton",{attrs:{color:"light"}},[e("CIcon",{attrs:{name:"cil-bookmark"}})],1)],1),e("div",{staticClass:"btn-group mr-1"},[e("CButton",{attrs:{color:"light"}},[e("CIcon",{attrs:{name:"cil-share"}})],1),e("CButton",{attrs:{color:"light"}},[e("CIcon",{attrs:{name:"cil-share-all"}})],1),e("CButton",{attrs:{color:"light"}},[e("CIcon",{attrs:{name:"cil-share-boxed"}})],1)],1),e("CButton",{attrs:{color:"light"}},[e("CIcon",{attrs:{name:"cil-trash"}})],1),e("LabelDropdown"),e("div",{staticClass:"btn-group float-right"},[e("CButton",{attrs:{color:"light"}},[e("CIcon",{attrs:{name:"cil-chevron-left"}})],1),e("CButton",{attrs:{color:"light"}},[e("CIcon",{attrs:{name:"cil-chevron-right"}})],1)],1)],1)},r=[],o=e("4ae7"),n={name:"MailToolbar",components:{LabelDropdown:o["a"]}},l=n,i=e("2877"),c=Object(i["a"])(l,s,r,!1,null,null,null);a["a"]=c.exports},"4aa0":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("CSidebar",{attrs:{fixed:!1,"color-scheme":"light"}},[e("CButton",{staticClass:"d-flex m-3",attrs:{to:"./compose",color:"success"}},[e("CIcon",{staticClass:"c-sidebar-nav-icon",attrs:{name:"cil-inbox"}}),t._v("New Email ")],1),e("CSidebarNav",[e("CSidebarNavItem",{attrs:{to:"./inbox",icon:"cil-inbox",name:"Inbox",badge:{text:4,color:"danger"}}}),e("CSidebarNavItem",{attrs:{icon:"cil-star",name:"Stared"}}),e("CSidebarNavItem",{attrs:{icon:"cil-paper-plane",name:"Sent"}}),e("CSidebarNavItem",{attrs:{icon:"cil-trash",name:"Trash"}}),e("CSidebarNavItem",{attrs:{icon:"cil-bookmark",name:"Important",badge:{text:5,color:"info"}}}),e("CSidebarNavItem",{attrs:{icon:"cil-inbox",name:"Spam",badge:{text:42,color:"warning"}}})],1)],1)},r=[],o={name:"EmailNav"},n=o,l=e("2877"),i=Object(l["a"])(n,s,r,!1,null,null,null);a["a"]=i.exports},"4ae7":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("CDropdown",{staticClass:"ml-1 d-inline",attrs:{color:"light"},scopedSlots:t._u([{key:"toggler-content",fn:function(){return[e("CIcon",{attrs:{name:"cil-tags"}})]},proxy:!0}])},[e("CDropdownItem",{attrs:{href:"#"}},[t._v(" Add label "),e("CBadge",{staticClass:"ml-1",attrs:{color:"danger"}},[t._v("Home")])],1),e("CDropdownItem",{attrs:{href:"#"}},[t._v(" Add label "),e("CBadge",{staticClass:"ml-1",attrs:{color:"info"}},[t._v(" Job")])],1),e("CDropdownItem",{attrs:{href:"#"}},[t._v(" Add label "),e("CBadge",{staticClass:"ml-1",attrs:{color:"success"}},[t._v(" Clients")])],1),e("CDropdownItem",{attrs:{href:"#"}},[t._v(" Add label "),e("CBadge",{staticClass:"ml-1",attrs:{color:"warning"}},[t._v(" News")])],1)],1)},r=[],o={name:"LabelDropdown"},n=o,l=e("2877"),i=Object(l["a"])(n,s,r,!1,null,null,null);a["a"]=i.exports},"9fac":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"c-email-app mb-4"},[e("div",{staticClass:"c-body"},[e("EmailNav"),e("main",{staticClass:"c-main"},[e("MailToolbar"),e("ul",{staticClass:"c-messages"},[e("InboxMessage"),e("InboxMessage",{attrs:{read:""}}),e("InboxMessage",{attrs:{read:""}}),e("InboxMessage"),e("InboxMessage",{attrs:{read:""}}),e("InboxMessage"),e("InboxMessage",{attrs:{read:""}}),e("InboxMessage",{attrs:{read:""}}),e("InboxMessage",{attrs:{read:""}}),e("InboxMessage",{attrs:{read:""}}),e("InboxMessage",{attrs:{read:""}}),e("InboxMessage"),e("InboxMessage",{attrs:{read:""}})],1)],1)],1)])},r=[],o=e("4aa0"),n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("CLink",{staticClass:"c-message",class:{"c-message-read":t.read},attrs:{to:"./message"}},[e("div",{staticClass:"c-message-actions"},[e("CIcon",{attrs:{name:"cil-star"}})],1),e("div",{staticClass:"c-message-details"},[e("div",{staticClass:"c-message-headers"},[e("div",{staticClass:"c-message-headers-from"},[t._v(t._s(t.from))]),e("div",{staticClass:"c-message-headers-date"},[t._v(t._s(t.date))]),e("div",{staticClass:"c-message-headers-subject"},[t._v(t._s(t.title))])]),e("div",{staticClass:"c-message-body"},[t._v(" "+t._s(t.description)+" ")])])])},l=[],i={name:"InboxMessage",props:{read:Boolean,description:{type:String,default:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},title:{type:String,default:"Lorem ipsum dolor sit amet."},from:{type:String,default:"Lukasz Holeczek"},date:{type:String,default:"Today, 3:47 PM"}}},c=i,d=e("2877"),m=Object(d["a"])(c,n,l,!1,null,null,null),u=m.exports,b=e("131a"),C={name:"Inbox",components:{EmailNav:o["a"],InboxMessage:u,MailToolbar:b["a"]}},g=C,v=Object(d["a"])(g,s,r,!1,null,null,null);a["default"]=v.exports}}]);
//# sourceMappingURL=chunk-f3488062.d66b6f4b.js.map