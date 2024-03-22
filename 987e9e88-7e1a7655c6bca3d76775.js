"use strict";(self.webpackChunkexperience_platform_apis=self.webpackChunkexperience_platform_apis||[]).push([[298],{18356:function(e,l,t){t.d(l,{T4:function(){return M},X:function(){return F},f5:function(){return q},iJ:function(){return H},mn:function(){return N},oi:function(){return E},ok:function(){return _}});var o=t(54705),n=t(54506),a=t(88763),r=t(60480),i=t(46942),s=t.n(i),d=t(7256),c=t(94087),u=t(19243),p=t(22472),g=t(12953),m=t(71052),v=t(18035),f=t(35413),h=t(77126),y=t(91101);function b(e,l){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);l&&(o=o.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),t.push.apply(t,o)}return t}function w(e){for(var l=1;l<arguments.length;l++){var t=null!=arguments[l]?arguments[l]:{};l%2?b(Object(t),!0).forEach((function(l){(0,o.A)(e,l,t[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(t,l))}))}return e}const x=/^(localhost:\d{1,5}|(\*\.|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+)|\*|(\*\.[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+))$/,Y=/^(?=[A-Za-z0-9\s]{6,}$)[A-Za-z0-9\s]*$/;var O={name:"19cme6k",styles:"margin-left:10px;color:var(--spectrum-global-color-gray-800);&:hover{color:var(--spectrum-global-color-gray-900);}"},A={name:"17fjgey",styles:"width:fit-content;margin-top:10px"},D={name:"1e43w35",styles:"color:rgb(0, 84, 182);&:hover{color:rgb(2, 101, 220);}"},C={name:"1kjtuj9",styles:"color:var(--spectrum-global-color-gray-800);margin:0"},k={name:"oq6u0f",styles:"display:flex;gap:10px"},S={name:"ftyx0c",styles:"display:flex;gap:24px;flex-direction:column;width:100%"},j={name:"1pmf9ly",styles:"border:none;padding:0;font-family:'adobe-clean';background:transparent;margin-left:10px;text-decoration:underline;color:var(--spectrum-global-color-gray-800);cursor:pointer"},z={name:"7hgi8",styles:"color:var(--spectrum-global-color-gray-800)"},P={name:"budh8k",styles:"display:flex;flex-direction:column;gap:16px"};const H=e=>{var l;let{formProps:t,credentialType:o,service:i}=e;const{0:v,1:b}=(0,a.useState)(!1),{0:B,1:T}=(0,a.useState)(!1),{0:V,1:L}=(0,a.useState)({}),{0:I,1:Z}=(0,a.useState)(""),{0:U,1:R}=(0,a.useState)(!0),{0:J,1:$}=(0,a.useState)(!1),{0:G,1:W}=(0,a.useState)([]),{0:X,1:K}=(0,a.useState)({}),{0:Q,1:ee}=(0,a.useState)(!1),{0:le,1:te}=(0,a.useState)(!1),{0:oe,1:ne}=(0,a.useState)(!1),{0:ae,1:re}=(0,a.useState)(!1),{0:ie,1:se}=(0,a.useState)(!1),{0:de,1:ce}=(0,a.useState)({}),{0:ue,1:pe}=(0,a.useState)(!0),{0:ge,1:me}=(0,a.useState)(""),{ims:ve}=(0,a.useContext)(y.Ay),fe=null==t?void 0:t[H],he=null==fe||null===(l=fe.children)||void 0===l?void 0:l.filter((e=>Object.keys(e.props).some((e=>e.startsWith("contextHelp"))))),ye=()=>{const e={},l={label:"Language",selectOptions:[]};null==fe||fe.children.forEach((t=>{let{type:o,props:a}=t;var r;o===_&&null!=a&&a.children&&(l.required=a.required||!1,(r=l.selectOptions).push.apply(r,(0,n.A)([].concat(a.children).map((e=>{let{props:{title:l,href:t}}=e;return{title:l,href:t}})))),K((e=>{var l,t;return w(w({},e),Array.isArray(a.children)?null:{Download:null===(l=a.children)||void 0===l||null===(t=l.props)||void 0===t?void 0:t.title})})));e[o]=w(w({},a),{},{required:o===F||(null==a?void 0:a.required)})})),l.selectOptions.length&&(e[q]=l,1===l.selectOptions.length&&K((e=>{var t,o;return w(w({},e),{},{Download:null===(t=l.selectOptions[0])||void 0===t?void 0:t.title,zipUrl:null===(o=l.selectOptions[0])||void 0===o?void 0:o.href})}))),W(e),(async()=>{var e;const l=null===(e=localStorage)||void 0===e?void 0:e.getItem("OrgInfo"),t=await(0,m.SA)(ce);if(null===l)1===(null==t?void 0:t.length)&&pe(!1);else if(t){const e=JSON.parse(l);pe(1!==e.orgLen),ce(e)}t||(ce({}),R(!1))})()};(0,a.useEffect)((()=>{setTimeout((()=>{se(!1)}),8e3)}),[ie]),(0,a.useEffect)((()=>{U&&T(!1)}),[U]),(0,a.useEffect)((()=>{if(!J&&U){const e=w({},X);for(const l in e)e[l]="";K(e),re(!1)}}),[J]),(0,a.useEffect)((()=>{ye()}),[]),(0,a.useEffect)((()=>{var e;if(de)if(de&&0!==(null===(e=Object.keys(de))||void 0===e?void 0:e.length))R(!0);else{var l;0===(null===(l=Object.keys(de))||void 0===l?void 0:l.length)&&(ce(void 0),R(!1))}else ce(void 0),R(!1),T(!0)}),[de]),(0,a.useEffect)((()=>{if(B){const e=w({},X);for(const l in e)e[l]="";K(e)}}),[B]),(0,a.useEffect)((()=>{var e,l,t,o;const n=null===(e=Array.from((null==fe?void 0:fe.children)||[]).filter((e=>{var l;return(null==e||null===(l=e.props)||void 0===l?void 0:l.required)||e.type===F})))||void 0===e?void 0:e.map((e=>e.type)),a=Y.test(X.CredentialName)&&(null===(l=X.CredentialName)||void 0===l?void 0:l.length)>=6,r=n.filter((e=>"AllowedOrigins"===e.name)),i=null===(t=X.AllowedOrigins)||void 0===t?void 0:t.split(",").map((e=>x.test(e.trim()))),s=!r||(null==i?void 0:i.every((e=>!0===e)))&&void 0!==X.AllowedOrigins&&0!==(null===(o=X.AllowedOrigins)||void 0===o?void 0:o.length),d=a&&s&&!0===X.Agree;ne(d)}),[X]),(0,a.useEffect)((()=>{(async()=>{if(ve&&ve.isSignedInUser()){const e=await ve.getProfile();me(null==e?void 0:e.email)}})()}),[ve]);const be=(e,l)=>{const t="Downloads"===l||"Agree"===l?e.target.checked:e.target.value;if(K((e=>w(w({},e),{},{[l]:t}))),"Download"===l&&X.Downloads){var o;const l=null==G||null===(o=G[q])||void 0===o?void 0:o.selectOptions.find((l=>l.title===e.target.value));l&&K((e=>w(w({},e),{},{zipUrl:l.href})))}},we=null==G?void 0:G[N],xe=null==G?void 0:G[F],Ye=null==G?void 0:G[E],Oe=null==G?void 0:G[_],Ae=null==G?void 0:G[q];return(0,r.Y)(a.default.Fragment,null,!le&&U&&!v&&de&&(0,r.Y)("div",{className:s()(null==fe?void 0:fe.className),css:P},(0,r.Y)("div",{css:(0,r.AH)("display:flex;flex-direction:column;gap:16px;color:var(--spectrum-global-color-gray-800);width:100%;height:100%;text-align:left;@media screen and (min-width:",m.jd,") and (max-width:",m.cp,"){padding:0;width:100%;}","")},(null==fe?void 0:fe.title)&&(0,r.Y)("h3",{className:"spectrum-Heading spectrum-Heading--sizeL"},null==fe?void 0:fe.title),(null==fe?void 0:fe.paragraph)&&(0,r.Y)("p",{className:"spectrum-Body spectrum-Body--sizeL"},null==fe?void 0:fe.paragraph),(0,r.Y)("p",{className:"spectrum-Body spectrum-Body--sizeS",css:z},"You're creating this credential in  ","developer"===(null==de?void 0:de.type)?"in your personal developer organization":(0,r.Y)("span",null,"[",(0,r.Y)("b",null,null==de?void 0:de.name),"] "),".",ue&&(0,r.Y)("button",{tabIndex:"0",css:j,onClick:()=>ee(!0)},"Change organization?"))),(0,r.Y)("div",{css:(0,r.AH)("display:flex;gap:35px;@media screen and (min-width:",m.jd,") and (max-width:",m.cp,"){flex-direction:column;padding-left:0;}","")},(0,r.Y)("div",{css:(0,r.AH)("display:flex;flex-direction:column;gap:35px;width:50%;@media screen and (min-width:",m.jd,") and (max-width:",m.cp,"){width:100%;}","")},(0,r.Y)("div",{css:S},xe&&(0,r.Y)(F,{nameProps:xe,isFormValue:he,formData:X,handleChange:be}),Ye&&(0,r.Y)(E,{originsProps:Ye,isFormValue:he,formData:X,handleChange:be}),Oe&&Ae&&(0,r.Y)(_,{downloadsProp:Oe,type:"Downloads",formData:X,handleChange:be}),X.Downloads&&Ae&&(0,r.Y)(q,{downloadProp:Ae,formData:X,isFormValue:he,handleChange:be}),(0,r.Y)("div",{css:k},(0,r.Y)("input",{type:"checkbox",checked:X.Agree,onChange:e=>be(e,"Agree")}),(0,r.Y)("p",{css:C},"By checking this box, you agree to ",(0,r.Y)("a",{href:"https://wwwimages2.adobe.com/content/dam/cc/en/legal/servicetou/Adobe-Developer-Additional-Terms_en-US_20230822.pdf",css:D,target:"_blank",rel:"noreferrer"},"Adobe Developer Terms of Use"),".")),(0,r.Y)("button",{id:"credentialButton",className:"spectrum-Button spectrum-Button--fill spectrum-Button--accent spectrum-Button--sizeM",css:A,onClick:async()=>{var e,l;const t=null===(e=window.adobeIMS)||void 0===e||null===(l=e.getTokenFromStorage())||void 0===l?void 0:l.token;t||console.log("User not logged in"),b(!0),R(!1);const n={name:X.CredentialName,platform:o,description:"created for get credential",domain:X.AllowedOrigins,services:[{sdkCode:i}]};try{var a,r,s;const e=await fetch("/console/api/organizations/"+(null==de?void 0:de.id)+"/integrations/adobeid",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+t,"x-api-key":null===(a=window)||void 0===a||null===(r=a.adobeIMS)||void 0===r||null===(s=r.adobeIdData)||void 0===s?void 0:s.client_id},body:JSON.stringify(n)}),l=await e.json();if(200===e.status)L(l),$(!0),re(!0);else if(null!=l&&l.messages){var d;re(!0),ne(!1),Z(null==l||null===(d=l.messages[0])||void 0===d?void 0:d.message),R(!0)}}catch(c){T(!0)}finally{b(!1)}},disabled:!oe},(0,r.Y)("span",{className:"spectrum-Button-label"},"Create credential")))),we?(0,r.Y)(M,{sideContent:null==we?void 0:we.children}):null),(0,r.Y)("p",{className:"spectrum-Body spectrum-Body--sizeS",css:(0,r.AH)("color:var(--spectrum-global-color-gray-800);@media screen and (min-width:",m.jd,") and (max-width:",m.cp,"){padding-left:0;}","")},"Have existing credentials?",(0,r.Y)("a",{href:"/console/",target:"_blank",rel:"noreferrer",css:O},"Go to Developer Console"))),ae&&(0,r.Y)(a.default.Fragment,null,ie?(0,r.Y)(f.y,{message:"Organization Changed",variant:"success",disable:8e3,customDisableFunction:re}):(0,r.Y)(f.y,{customDisableFunction:re,message:U&&!J?I:!B&&J&&"Your credentials were created successfully.",variant:B||U&&!J?"error":"success",disable:B||U&&!J?null:8e3})),v&&!J&&(0,r.Y)(c.R,{credentials:fe,downloadStatus:X.Downloads}),Q&&(0,r.Y)(p.Y,{setModalOpen:ee,redirectToBeta:le,setRedirectBetaProgram:te,setAlertShow:re,alertShow:ae,organizationChange:ie,setOrganization:se,setOrganizationValue:ce}),B&&!U&&!J&&(0,r.Y)(u.T,{errorMessage:null==t?void 0:t[u.T]}),J&&!U&&(0,r.Y)(d.q,{credentialProps:t,response:V,setShowCreateForm:R,setShowCredential:$,organizationName:null==de?void 0:de.name,formData:X,orgID:null==de?void 0:de.id}),le&&(0,r.Y)(g.V,{joinBeta:null==t?void 0:t[g.V]}),!U&&!de&&!B&&(0,r.Y)(h.M,{developerAccessError:null==t?void 0:t[h.M],title:null==fe?void 0:fe.title,emailID:ge}))},N=e=>{let{side:l}=e;return l};var B={name:"8sarsy",styles:"position:relative;display:inline-block;width:100%"};const F=e=>{var l,t,o;let{nameProps:n,isFormValue:a,formData:i,handleChange:s}=e;const d=!Y.test(i.CredentialName),c=0!==(null===(l=i.CredentialName)||void 0===l?void 0:l.length)&&d;return(0,r.Y)(m.CL,{isFormValue:a,fields:n,formData:i,isRed:c},(0,r.Y)("div",{css:B},(0,r.Y)("input",{type:"text",css:(0,r.AH)("padding:7px;border-radius:3px;width:97%;border:1px solid ",c?"rgb(211, 21, 16)":"var(--spectrum-global-color-gray-400)",";&::placeholder{font-style:italic;color:var(--spectrum-global-color-gray-400);}&:focus{outline:none;border-color:",c?"rgb(211, 21, 16)":"var(--spectrum-global-color-gray-400)",";}",""),value:i.CredentialName,onChange:e=>s(e,"CredentialName"),placeholder:null==n?void 0:n.placeholder,maxLength:null==n?void 0:n.range}),(0,r.Y)("span",{css:(0,r.AH)("display :",(null===(t=i.CredentialName)||void 0===t?void 0:t.length)<3&&0!==(null===(o=i.CredentialName)||void 0===o?void 0:o.length)?"block":"none",";","")},(0,r.Y)(m._0,null))))},E=e=>{var l,t;let{originsProps:o,isFormValue:n,type:a,formData:i,handleChange:s}=e;const d=null===(l=i.AllowedOrigins)||void 0===l?void 0:l.split(",").map((e=>x.test(e.trim()))),c=null==d?void 0:d.every((e=>!0===e)),u=void 0!==i.AllowedOrigins&&!c&&0!==(null===(t=i.AllowedOrigins)||void 0===t?void 0:t.length);return(0,r.Y)(m.CL,{isFormValue:n,fields:o,type:a,formData:i,isRed:u},(0,r.Y)("textarea",{css:(0,r.AH)("flex:1;padding:7px;height:50px;border-radius:3px;border:1px solid ",u?"rgb(211, 21, 16)":"var(--spectrum-global-color-gray-400)",";resize:none;width:90%;color:#4b4b4b;font-family:adobe-clean,Helvetica,Arial,sans-serif;&::placeholder{color:var(--spectrum-global-color-gray-600);font-style:italic;}&:focus{outline:none;border-color:",u?"rgb(211, 21, 16)":"var(--spectrum-global-color-gray-400)",";}&:hover{&::placeholder{color:var(--spectrum-global-color-gray-800);}}",""),value:i.AllowedOrigins,placeholder:null==o?void 0:o.placeholder,onChange:e=>s(e,"AllowedOrigins")}))};var T={name:"i92civ",styles:"cursor:pointer;display:flex;justify-content:center;align-items:center"},V={name:"18ny2tv",styles:"color:var(--spectrum-dialog-confirm-description-text-color, var(--spectrum-global-color-gray-800));margin:0"},L={name:"zatqba",styles:"display:flex;gap:10px;align-items:center"};const _=e=>{let{downloadsProp:l,handleChange:t,formData:o}=e;const{label:n,contextHelpLabelForLink:a,contextHelpLink:i,contextHelpText:s,contextHelp:d,contextHelpHeading:c}=l;return(0,r.Y)("div",{css:L},(0,r.Y)("input",{type:"checkbox",onChange:e=>t(e,"Downloads"),checked:o.Downloads}),(0,r.Y)("p",{css:V}," ",n," "),(0,r.Y)("div",{css:T},d&&(0,r.Y)(v.B,{heading:c,text:s,link:i,label:a})))};var I={name:"wd7e5h",styles:"font-style:italic;font-weight:500;font-family:'adobe-clean';padding:7px;border-radius:3px;border:1px solid #D0D0D0!important;width:100%"};const q=e=>{var l,t,o;let{downloadProp:n,formData:i,isFormValue:s,handleChange:d}=e;return(0,r.Y)(a.default.Fragment,null,(null==n||null===(l=n.selectOptions)||void 0===l?void 0:l.length)>1&&(0,r.Y)(m.CL,{isFormValue:s,fields:n},(0,r.Y)("select",{css:I,id:"selectBox",value:i.Download,onChange:e=>d(e,"Download")},(null==n||null===(t=n.selectOptions)||void 0===t?void 0:t.length)>1&&(0,r.Y)("option",{value:"",hidden:!0},"Select language for your code pickData"),null==n||null===(o=n.selectOptions)||void 0===o?void 0:o.map(((e,l)=>(0,r.Y)("option",{key:l,"data-link":e.href,value:e.title},e.title))))))},M=e=>{let{sideContent:l}=e;return(0,r.Y)(a.default.Fragment,null,(0,r.Y)("div",{css:(0,r.AH)("width:2px;background-color:#D0D0D0;@media screen and (min-width:",m.jd,") and (max-width:",m.cp,"){display:none;}","")}),(0,r.Y)("div",{css:(0,r.AH)("width:50%;@media screen and (min-width:",m.jd,") and (max-width:",m.cp,"){width:100%;}","")},(0,r.Y)(N,{side:l})))}}}]);
//# sourceMappingURL=987e9e88-7e1a7655c6bca3d76775.js.map