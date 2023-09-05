"use strict";function arf_CustomEvent(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var r=document.createEvent("CustomEvent");return r.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),r}function arf_selectpicker_bind_focus(e){var t=(e=void 0!==e&&null!=e?e:document).querySelectorAll(".arf-selectpicker-input-control"),r=t.length;if(0<r)for(var l=0;l<r;l++){var o=t[l];o.getAttribute("data-default-val");o.addEventListener("focusin",function(e){null!=this.getAttribute("data-validate-focus")&&"true"==this.getAttribute("data-validate-focus")||(this.parentNode.querySelector(".arf-selectpicker-control").click(),this.parentNode.querySelector(".arf-selectpicker-control").classList.remove("open"))}),o.addEventListener("focusout",function(e){var l;if(null!=this.getAttribute("data-validate-focus")&&"true"==this.getAttribute("data-validate-focus"))return this.removeAttribute("data-validate-focus"),!1;this.parentNode.querySelector(".arf-selectpicker-control").classList.contains("arf-has-autocomplete")||(l=this,setTimeout(function(){l.parentNode.querySelector(".arf-selectpicker-control").classList.remove("open"),l.parentNode.querySelector(".arf-selectpicker-control").classList.contains("arf-has-autocomplete")&&(l.parentNode.querySelector(".arf-selectpicker-control").querySelector("input.arf-selectpicker-autocomplete").value="");var e=ARFGetParents(l.parentNode,".arfformfield");if(0<e.length&&e[0].classList.remove("arfcurrent_field_active"),l.parentNode.querySelector(".arf-selectpicker-control").classList.remove("open_from_top"),l.parentNode.querySelector(".arf-selectpicker-control").querySelector("dd ul").style.top="",null!=l.parentNode.querySelector("dd ul li.hovered"))for(var t=l.parentNode.querySelectorAll("dd ul li.hovered").length,r=0;r<t;r++)void 0!==l.parentNode.querySelectorAll("dd ul li.hovered")[r]&&l.parentNode.querySelectorAll("dd ul li.hovered")[r].classList.remove("hovered")},200)),selected_li=0})}}function arf_init_selectpicker_keyscroll(e,keycode,el){var dl=el,dt=dl.querySelector("dt"),ul=dl.querySelector("dd ul"),nodes=jQuery(ul).find("li:visible"),li_hovered=jQuery(ul).find("li.hovered:visible")[0]||null;const evt=arf_CustomEvent("change",{bubbles:!0});var has_autocomplete=el.classList.contains("arf-has-autocomplete")||!1;if(38==keycode)arfpreventDefault(e),arfpreventDefaultForScrollKeys(e),arf_selects(ul,nodes,null===li_hovered||0===selected_li?nodes[nodes.length-1]:nodes[selected_li-1]);else if(40==keycode)arfpreventDefault(e),arfpreventDefaultForScrollKeys(e),null===li_hovered||selected_li===nodes.length-1?arf_selects(ul,nodes,nodes[0]):arf_selects(ul,nodes,nodes[selected_li+1]);else if(13==keycode){if(arfpreventDefault(e),null!==li_hovered){var value=li_hovered.getAttribute("data-value"),label=li_hovered.getAttribute("data-label"),datatype=li_hovered.getAttribute("data-type"),parent_ul=ul,data_id=parent_ul.getAttribute("data-id"),field_container=(dl.querySelector("dt span").innerHTML=label,document.getElementById(data_id).value=value,document.getElementById(data_id).setAttribute("value",value),document.getElementById(data_id).dispatchEvent(evt),li_hovered.click(),null!=document.getElementById(data_id).getAttribute("data-onchange")&&eval(document.getElementById(data_id).getAttribute("data-onchange")),null!=document.getElementById(data_id).getAttribute("data-onkeyup")&&eval(document.getElementById(data_id).getAttribute("data-onkeyup")),dl.classList.remove("open"),dl.classList.contains("arf-has-autocomplete")&&(dl.querySelector("input.arf-selectpicker-autocomplete").value=""),ARFGetParents(dl,".arfformfield"));if(0<field_container.length&&field_container[0].classList.remove("arfcurrent_field_active"),dl.classList.remove("open_from_top"),dl.querySelector("dd ul").style.top="",null!=dl.querySelector("dd ul li.hovered"))for(var selected_lis=dl.querySelectorAll("dd ul li.hovered").length,h=0;h<selected_lis;h++)void 0!==dl.querySelectorAll("dd ul li.hovered")[h]&&dl.querySelectorAll("dd ul li.hovered")[h].classList.remove("hovered");wp.hooks.doAction("arflite_set_field_type_for_outside_options",data_id,datatype)}}else if(27==keycode){var selectpicker=document.querySelector(".arf-selectpicker-control.open");if(null!==selectpicker){selectpicker.classList.remove("open"),selectpicker.classList.contains("arf-has-autocomplete")&&(selectpicker.querySelector("input.arf-selectpicker-autocomplete").value="");var field_container=ARFGetParents(selectpicker,".arfformfield");if(0<field_container.length&&field_container[0].classList.remove("arfcurrent_field_active"),selectpicker.classList.remove("open_from_top"),selectpicker.querySelector("dd ul").style.top="",null!=selectpicker.querySelector("dd ul li.hovered"))for(var selected_lis=selectpicker.querySelectorAll("dd ul li.hovered").length,h=0;h<selected_lis;h++)void 0!==selectpicker.querySelectorAll("dd ul li.hovered")[h]&&selectpicker.querySelectorAll("dd ul li.hovered")[h].classList.remove("hovered")}}else if(!has_autocomplete&&"Shift"!=e.key&&"Control"!=e.key&&"Alt"!=e.key&&"Tab"!=e.key)for(var keyPressed=e.key.toLocaleLowerCase(),searchSuccess=(keyhistory+=keyPressed,resetKeyhistory.cancel&&clearInterval(resetKeyhistory.cancel),resetKeyhistory.cancel=resetKeyhistory.start(),/^(.)\1+$/.test(keyhistory)&&(keyhistory=keyhistory.charAt(0)),!1),x=0;x<nodes.length;x++){var _node=nodes[x],_label=(null!==li_hovered&&li_hovered.classList.remove("hovered"),_node.getAttribute("data-label").toLocaleLowerCase()),_label=_label.replace(/<[^>]+>/g,""),searchSuccess=_label.stringStartsWith(keyhistory);if(searchSuccess&&!_node.classList.contains("hovered")){_node.classList.add("hovered");var el=_node,ul=el.parentNode,nodes=ul.querySelectorAll("li");arf_selects(ul,nodes,el);break}}setTimeout(function(){resetHeight()},500)}function resetHeight(){let e=document.querySelector(".arf-selectpicker-control.open");var t,r,l;null!=e&&(t=e.getBoundingClientRect().top,r=e.querySelector("dd ul").offsetHeight,l=e.offsetHeight,window.innerHeight<=l+r+t+20?(e.classList.add("open_from_top"),e.parentNode.classList.contains("material-theme")?e.querySelector("dd ul").style.top="-"+(r+l-35)+"px":e.querySelector("dd ul").style.top="-"+(r+l)+"px"):(e.classList.remove("open_from_top"),e.querySelector("dd ul").style.top=""))}function arf_selects(e,t,r){var l,o,a,t=[].indexOf.call(t,r);-1!==t&&(selected_li=t,t=r.offsetHeight,o=(l=e.scrollTop)+e.offsetHeight,a=t*selected_li,null!==document.querySelector("li.hovered")&&document.querySelector("li.hovered").classList.remove("hovered"),r.classList.add("hovered"),(a<l||o<a+t)&&(e.scrollTop=a))}function arfpreventDefault(e){(e=e||window.event).preventDefault&&e.preventDefault(),e.returnValue=!1}function arfpreventDefaultForScrollKeys(e){if({37:0,38:1,39:0,40:1}[e.keyCode])return arfpreventDefault(e),!1}function arfdisableScroll(){window.addEventListener&&window.addEventListener("wheel  DOMMouseScroll",arfpreventDefault,!1),document.onkeydown=arfpreventDefaultForScrollKeys}function arfenableScroll(){window.removeEventListener&&(window.removeEventListener("wheel",arfpreventDefault,!1),window.removeEventListener("DOMMouseScroll",arfpreventDefault,!1)),document.onkeydown=null}var keyhistory="",resetKeyhistory={start:function(){return setTimeout(function(){keyhistory=""},800)}},selected_li=(String.prototype.stringStartsWith||!function(){function e(e){if(null==this)throw new TypeError;var t=String(this);if(e&&"[object RegExp]"==n.call(e))throw new TypeError;var r=t.length,l=String(e),o=l.length,e=1<arguments.length?arguments[1]:void 0,e=e?Number(e):0,a=(e!=e&&(e=0),Math.min(Math.max(e,0),r));if(r<o+a)return!1;for(var i=-1;++i<o;)if(t.charCodeAt(a+i)!=l.charCodeAt(i))return!1;return!0}var t=function(){try{var e={},t=Object.defineProperty,r=t(e,e,e)&&t}catch(e){}return r}(),n={}.toString;t?t(String.prototype,"stringStartsWith",{value:e,configurable:!0,writable:!0}):String.prototype.stringStartsWith=e}(),0),ARFGetParents=(document.addEventListener("click",function(e){var t=document.querySelectorAll(".arf-selectpicker-control.open"),e=e.target,r=ARFGetParents(e,".arf-selectpicker-control"),l=ARFGetParents(r[0],".arf_popup_container.arfactive"),o=0<l.length&&void 0!==l[0],a=ARFGetParents(r[0],".arf_field_values_model.arfactive"),i=0<a.length&&void 0!==a[0],n=arf_CustomEvent("change",{bubbles:!0}),s=ARFGetParents(r[0],".arf_form_outer_wrapper"),c=0<s.length&&void 0!==s[0],d=!1;if(!c||0<(f=ARFGetParents(r[0],".arfformfield")).length&&void 0!==f[0]&&(d=null!=f[0].getAttribute("data-view")&&"arf_disable"==f[0].getAttribute("data-view")),0<r.length){var u=r[0];if(u.classList.contains("arf_disabled")||d)return!0;var f=ARFGetParents(e,"ul");if(u.classList.contains("open")){if(u.classList.contains("open")&&f.length<1){if(u.classList.remove("open"),u.classList.remove("open_from_top"),u.classList.contains("arf-has-autocomplete")&&(u.querySelector("input.arf-selectpicker-autocomplete").value=""),0<(L=ARFGetParents(u,".arfformfield")).length&&L[0].classList.remove("arfcurrent_field_active"),u.querySelector("dd ul").style.top="",null!=u.querySelector("dd ul li.hovered"))for(v=u.querySelectorAll("dd ul li.hovered").length,y=0;y<v;y++)void 0!==u.querySelectorAll("dd ul li.hovered")[y]&&u.querySelectorAll("dd ul li.hovered")[y].classList.remove("hovered")}else if(u.classList.contains("open")&&0<f.length&&"LI"===e.nodeName){if(e.classList.contains("arf_restricted_control"))return!0;k=e.getAttribute("data-value"),r=e.getAttribute("data-label"),m=f[0].getAttribute("data-id");if(u.querySelector("dt span").innerHTML=r,document.getElementById(m).value=k,document.getElementById(m).dispatchEvent(n),u.classList.remove("open"),u.classList.contains("arf-has-autocomplete")&&(u.querySelector("input.arf-selectpicker-autocomplete").value=""),0<(L=ARFGetParents(u,".arfformfield")).length&&L[0].classList.remove("arfcurrent_field_active"),u.classList.remove("open_from_top"),u.querySelector("dd ul").style.top="",null!=u.querySelector("dd ul li.hovered"))for(v=u.querySelectorAll("dd ul li.hovered").length,y=0;y<v;y++)void 0!==u.querySelectorAll("dd ul li.hovered")[y]&&u.querySelectorAll("dd ul li.hovered")[y].classList.remove("hovered")}}else{if(0<t.length)for(var p=0;p<t.length;p++){var h=t[p];if(0<(L=ARFGetParents(h,".arfformfield")).length&&L[0].classList.remove("arfcurrent_field_active"),h.classList.contains("arf-has-autocomplete")&&(h.querySelector("input.arf-selectpicker-autocomplete").value=""),h.classList.remove("open"),h.classList.remove("open_from_top"),h.classList.contains("arf-has-autocomplete")&&(h.querySelector("input.arf-selectpicker-autocomplete").value=""),h.querySelector("dd ul").style.top="",null!=h.querySelector("dd ul li.hovered"))for(var v=h.querySelectorAll("dd ul li.hovered").length,y=0;y<v;y++)void 0!==h.querySelectorAll("dd ul li.hovered")[y]&&h.querySelectorAll("dd ul li.hovered")[y].classList.remove("hovered")}u.querySelector("dd ul").style.height="",u.classList.add("open");d=u.offsetHeight;u.classList.contains("arf-has-autocomplete")&&jQuery(u).find("input.arf-selectpicker-autocomplete").focus();0<(L=ARFGetParents(u,".arfformfield")).length&&L[0].classList.add("arfcurrent_field_active"),c&&!i&&(e=s[0],r=(f=jQuery(u)).offset().top+f.height(),e=jQuery(f).parents(".arf_form_outer_wrapper"),n=0,S=jQuery(f).find("dd ul li:visible:first-child").outerHeight(),void 0!==e&&jQuery(f).parents().hasClass("arf_form_outer_wrapper")&&(n=e.offset().top+e.height(),jQuery(".arf_fieldset").parents().hasClass("arf_flymodal")&&(n-=S)),s=15,null!=f.attr("data-size")&&(s=f.attr("data-size")),e=jQuery(f).find("dd ul"),r=(f=n-r)<(n=S*s+(parseInt(e.css("padding-top"))+parseInt(e.css("padding-right"))+parseInt(e.css("padding-bottom"))+parseInt(e.css("padding-left"))+parseInt(e.css("margin-top"))+parseInt(e.css("margin-bottom"))))?f-30:n,u.querySelector("dd ul").style.maxHeight=r+"px");var m=u.getAttribute("data-id"),s="",e=!1;if(null!=document.getElementById(m)&&(s=document.getElementById(m).value,e="true"==document.getElementById(m).getAttribute("data-skip")),""!=s&&!e){f=u.querySelector('dd ul li[data-value="'+s+'"]');if(null!=f){for(var _=u.querySelectorAll("dd ul li"),g=0;g<_.length;g++)_[g].classList.remove("hovered");f.classList.add("hovered");n=[].indexOf.call(_,f);-1<n&&(selected_li=n)}}s==(k=jQuery("input#"+m).val())&&0<(r=-1<s.indexOf('"')?jQuery("#"+m).parent().find('dd ul li[data-value="'+s.replace(/\"/g,'\\"')+'"]'):jQuery("#"+m).parent().find('dd ul li[data-value="'+s+'"]')).length&&(e=r.position().top,Math.floor(e)>r.parent().height()&&r.parent().animate({scrollTop:r.position().top},0));var S=jQuery(u).find("dd ul li:visible:first-child").outerHeight(),f=u.getBoundingClientRect().top,n=u.querySelector("dd ul").offsetHeight,k=window.innerHeight,m=(o&&(f-=l[0].getBoundingClientRect().top,k=l[0].offsetHeight),d+n+f);i&&(k=a[0].offsetHeight),!o&&(!c||i)&&k<=m+20&&(u.classList.add("open_from_top"),u.parentNode.classList.contains("material-theme")?u.querySelector("dd ul").style.top="-"+(n+d-35)+"px":u.querySelector("dd ul").style.top="-"+(n+d)+"px"),0<ARFGetParents(u,".arf_field_option_model.arfactive, .arf_field_values_model.arfactive").length&&0<(L=ARFGetParents(u,".arfformfield.arfcurrent_field_active")).length&&L[0].classList.remove("arfcurrent_field_active"),o&&"arflite_insert_popup_modal"!=jQuery(l[0]).attr("id")&&(s=Math.ceil(n+f),Math.ceil(l[0].offsetHeight-50),e=Math.ceil(jQuery(l[0]).height()-jQuery(l[0]).offset().top)+50,250<=n&&(u.querySelector("dd ul").style.height=e-n+"px"),e<s&&(u.classList.add("open_from_top"),u.querySelector("dd ul").style.top="-"+(n+d)+"px"))}}else{var L,q=document.querySelector(".arf-selectpicker-control.open");if(null!==q)if(q.classList.remove("open"),q.classList.remove("open_from_top"),q.classList.contains("arf-has-autocomplete")&&(q.querySelector("input.arf-selectpicker-autocomplete").value=""),0<(L=ARFGetParents(q,".arfformfield")).length&&L[0].classList.remove("arfcurrent_field_active"),q.querySelector("dd ul").style.top="",null!=q.querySelector("dd ul li.hovered"))for(v=q.querySelectorAll("dd ul li.hovered").length,y=0;y<v;y++)void 0!==q.querySelectorAll("dd ul li.hovered")[y]&&q.querySelectorAll("dd ul li.hovered")[y].classList.remove("hovered")}0<jQuery(".arf_accordion_container").length&&jQuery(".arf_accordion_container").scrollLeft(0)}),function(e,t){Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),r=t.length;0<=--r&&t.item(r)!==this;);return-1<r});for(var r=[];e&&e!==document;e=e.parentNode)(!t||e.matches(t))&&r.push(e);return r});document.addEventListener("scroll",function(e){var t=document.querySelectorAll(".arf-selectpicker-control.open"),r=t.length;if(0<r)for(var l=0;l<r;l++){var o=t[l],a=o.offsetHeight,i=ARFGetParents(o,".arf_popup_container"),n=0<i.length&&void 0!==i[0],s=ARFGetParents(o,".arf_form_outer_wrapper"),s=0<s.length&&void 0!==s[0],c=o.getBoundingClientRect().top,d=o.querySelector("dd ul").offsetHeight,u=window.innerHeight;n&&(u=i[0].offsetHeight),!s&&u<=a+d+c+20?(o.classList.add("open_from_top"),o.parentNode.classList.contains("material-theme")?o.querySelector("dd ul").style.top="-"+(d+a-35)+"px":o.querySelector("dd ul").style.top="-"+(d+a)+"px"):(o.classList.remove("open_from_top"),o.querySelector("dd ul").style.top="")}}),document.onreadystatechange=function(){"complete"===document.readyState&&arf_selectpicker_bind_focus()},document.addEventListener("keydown",function(e){var t=document.querySelector(".arf-selectpicker-control.open");null!==t?(arfdisableScroll(),arf_init_selectpicker_keyscroll(e,e.keyCode,t)):arfenableScroll()}),jQuery(document).on("keydown",".arf-selectpicker-autocomplete",function(e){var t=jQuery(this);9!=e.keyCode&&"Tab"!=e.key||(t.parents(".arf-selectpicker-control").removeClass("open"),t.parents(".arf-selectpicker-control").removeClass("open_from_top"))}),jQuery(document).on("keyup",".arf-selectpicker-input-control",function(e){jQuery(this);9!=e.keyCode&&"Tab"!=e.key||jQuery(this).parent().find(".arf-selectpicker-control").addClass("open")}),jQuery(document).on("keyup",".arf-selectpicker-autocomplete",function(e){var t=jQuery(this).val().toLowerCase();jQuery(this).parents(".arf-selectpicker-control").find("dd ul li").each(function(){jQuery(this).show(),""!=t&&(-1!=jQuery(this).attr("data-label").toLowerCase().indexOf(t)?jQuery(this).show():jQuery(this).hide())})}),jQuery(document).on("focusin",".arf-selectpicker-autocomplete",function(){jQuery(this).parents(".arf-selectpicker-control").find("ul li").show(),jQuery(this).parents(".arf-selectpicker-control:not(.open)").trigger("click")}),jQuery(document).on("click",".arf-selectpicker-control:not('.multi-select') dd ul li",function(e){if(jQuery(this).hasClass("arf_restricted_control"))return!0;var arf_parent_select_id=jQuery(this).attr("data-value"),text=(null!=arf_parent_select_id&&""!=arf_parent_select_id&&jQuery(this).parents("ul").attr("data-parent-id",arf_parent_select_id),jQuery(this).html()),id=(jQuery(this).parent().parent().parent().find("dt span").html(jQuery(this).attr("data-")),jQuery(this).parent().parent().parent().find("dt span").show(),jQuery(this).parent().attr("data-id")),value=jQuery(this).attr("data-value"),column_id=jQuery(this).parent().attr("data-column"),pattern=/(.*?)(\d+_\d+)/g,string=id.replace(pattern,"$2");if(void 0!==column_id)jQuery("#main_"+column_id).find("input#"+id).val(value),jQuery("#main_"+column_id).find("input#"+id).trigger("change");else{if(-1<id.indexOf("{arF_field_id}"))return!1;jQuery("input#"+id).val(value),jQuery("input#"+id).attr("value",value);var field_type=jQuery(this).attr("data-type");jQuery("input#"+id).trigger("change"),"undefined"!=jQuery("input#"+id).attr("data-onchange")&&eval(jQuery("input#"+id).attr("data-onchange")),"undefined"!=jQuery("input#"+id).attr("data-onkeyup")&&eval(jQuery("input#"+id).attr("data-onkeyup"))}jQuery(this).parent().find("li").show(),wp.hooks.doAction("arflite_set_field_type_for_outside_options",id,jQuery(this).attr("data-type"))});