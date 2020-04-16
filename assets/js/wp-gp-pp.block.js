!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.blockEditor}()},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t){!function(){e.exports=this.wp.blocks}()},function(e,t){!function(){e.exports=this.wp.serverSideRender}()},function(e,t,n){"use strict";n.r(t);var i=n(3),r=n(0),o=n(2),a=n(1),l=n(4),c=n.n(l),u=Object(o.withNotices)((function(e){var t=e.attributes,n=e.setAttributes,i=e.noticeOperations,l=e.noticeUI,u=t.mediaID,s=t.mediaURL,d=t.gifMethod,g=t.width,f=t.height,m=t.imageWidth,p=t.imageHeight,h=t.align,b=function(e){n({mediaID:e.id,mediaURL:e.url,width:e.width,height:e.height,imageWidth:e.width,imageHeight:e.height,gifMethod:d})},y=["image/gif"];return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(r.Fragment,null,Object(r.createElement)(a.InspectorControls,null,Object(r.createElement)(o.PanelBody,null,Object(r.createElement)(o.PanelRow,null,Object(r.createElement)(o.SelectControl,{label:"GIF Method",value:d,options:[{label:"GIF",value:"gif"},{label:"Canvas",value:"canvas"},{label:"Video",value:"video",disabled:!WP_GIF_PLAYER.ffmpegInstalled}],onChange:function(e){return n({gifMethod:e})}})),Object(r.createElement)(o.PanelRow,null,Object(r.createElement)(a.__experimentalImageSizeControl,{width:g,height:f,imageWidth:m,imageHeight:p,onChange:function(e){n(e)}})))),Object(r.createElement)(a.BlockControls,null,Object(r.createElement)(a.BlockAlignmentToolbar,{value:h,controls:["left","center","right"],onChange:function(e){return n({align:e})}}),u&&Object(r.createElement)(a.MediaReplaceFlow,{mediaID:u,mediaURL:s,allowedTypes:y,accept:"image/gif",onSelect:b})),u?Object(r.createElement)(c.a,{block:"roelmagdaleno/gif-player",attributes:t,className:"align".concat(h)}):Object(r.createElement)(a.MediaPlaceholder,{accept:"image/gif",allowedTypes:y,icon:"format-video",value:u,notices:l,labels:{title:"Insert GIF Player",instructions:"The GIF you insert will render the GIF player method selected in the plugin settings page but you can change it using the block controls."},onSelect:b,onError:function(e){i.removeAllNotices(),i.createErrorNotice(e)}})))}));Object(i.registerBlockType)("roelmagdaleno/gif-player",{title:"GIF Player",description:"Attach GIF players into your posts and pages.",category:"common",icon:"format-video",keywords:["gif","player"],attributes:{mediaID:{type:"number"},mediaURL:{type:"string"},gifMethod:{type:"string",default:WP_GIF_PLAYER.gifMethod},width:{type:"number"},height:{type:"number"},imageWidth:{type:"number"},imageHeight:{type:"number"},align:{type:"string",default:"center"}},transforms:{from:[{type:"shortcode",tag:"gif-player",attributes:{mediaID:{type:"number",shortcode:function(e){return parseInt(e.named.id)}}}}]},edit:u,save:function(){return null}})}]);