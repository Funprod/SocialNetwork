"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[320],{320:function(s,e,a){a.r(e),a.d(e,{default:function(){return v}});var n=a(364),i=a(8281),t={messagesContainer:"Dialogs_messagesContainer__hOaMO",dialogs:"Dialogs_dialogs__u5iKH",active:"Dialogs_active__OKiI4",messages:"Dialogs_messages__tqywT",message:"Dialogs_message__UrTFg"},r=a(1523),o=a(184),u=function(s){var e=s.id,a=s.name;return(0,o.jsx)("div",{className:t.dialog+" "+t.active,children:(0,o.jsx)(r.OL,{to:"/Dialogs/"+e,children:a})})},d=function(s){var e=s.message;return(0,o.jsx)("div",{className:t.message,children:e})},c=a(6139),g=a(704),l=a(1812),m=a(5086),f=(0,m.D)(50),h=(0,g.Z)({form:"dialogAddMessageForm"})((function(s){return(0,o.jsx)("form",{onSubmit:s.handleSubmit,children:(0,o.jsxs)("div",{children:[(0,o.jsx)(c.Z,{tagName:"textarea",component:l.N,validate:[m.C,f],name:"newMessageBody",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"}),(0,o.jsx)("button",{children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})})})),_=a(7781),j=a(2932),v=(0,_.qC)((0,n.$j)((function(s){return{dialogsPage:s.dialogsPage}}),(function(s){return{addMessage:function(e){s((0,i.k)(e))}}})),j.D)((function(s){var e=s.addMessage,a=s.dialogsPage;return(0,o.jsxs)("div",{className:t.messagesContainer,children:[(0,o.jsx)("div",{className:t.dialogs,children:a.dialogsData.map((function(s){return(0,o.jsx)(u,{name:s.name,id:s.id},s.id)}))}),(0,o.jsx)("div",{className:t.messages,children:a.messagesData.map((function(s){return(0,o.jsx)(d,{message:s.message},s.id)}))}),(0,o.jsx)(h,{onSubmit:function(s){e(s.newMessageBody)}})]})}))},2932:function(s,e,a){a.d(e,{D:function(){return c}});var n=a(8683),i=a(5987),t=a(364),r=a(9271),o=a(184),u=["isAuth"],d=function(s){return{isAuth:s.auth.isAuth}};function c(s){return(0,t.$j)(d)((function(e){var a=e.isAuth,t=(0,i.Z)(e,u);return a?(0,o.jsx)(s,(0,n.Z)({},t)):(0,o.jsx)(r.l_,{to:"/login"})}))}}}]);
//# sourceMappingURL=320.af4e657f.chunk.js.map