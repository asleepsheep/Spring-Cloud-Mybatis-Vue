webpackJsonp([3],{"22DO":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("woOf"),n=s.n(i),a={name:"spec-group",props:{cid:{type:Number,default:0}},data:function(){return{groups:[],headers:[{text:"id",value:"id",align:"center",sortable:!1},{text:"组名",value:"name",align:"center",sortable:!1},{text:"操作",align:"center",sortable:!1}],show:!1,group:{name:""},isEdit:!1}},watch:{cid:function(){this.loadData()}},methods:{loadData:function(){var t=this;this.$http.get("/item/spec/groups/"+this.cid).then(function(e){var s=e.data;t.groups=s}).catch(function(){t.groups=[]})},editGroup:function(t){n()(this.group,t),this.show=!0,this.isEdit=!0},addGroup:function(){this.group={cid:this.cid},this.show=!0,this.isEdit=!1},save:function(){var t=this;this.$http({method:this.isEdit?"put":"post",url:"/item/spec/group",data:this.group}).then(function(){t.show=!1,t.$message.success("保存成功！"),t.loadData()}).catch(function(){t.$message.error("保存失败！")})},deleteGroup:function(t){var e=this;this.$message.confirm("确认要删除分组吗？").then(function(){e.$http.delete("/item/spec/group/"+t).then(function(){e.$message.success("删除成功"),e.loadData()})})},selectGroup:function(t){this.$emit("select",t)}}},o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-data-table",{staticClass:"elevation-0",attrs:{headers:t.headers,items:t.groups,"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){return[s("tr",{on:{click:function(s){t.selectGroup(e.item)}}},[s("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.id))]),t._v(" "),s("td",{staticClass:"text-xs-center"},[t._v(t._s(e.item.name))]),t._v(" "),s("td",{staticClass:"justify-center layout px-0"},[s("v-btn",{attrs:{icon:""},on:{click:function(s){s.stopPropagation(),t.editGroup(e.item)}}},[s("i",{staticClass:"el-icon-edit"})]),t._v(" "),s("v-btn",{attrs:{icon:""},on:{click:function(s){s.stopPropagation(),t.deleteGroup(e.item.id)}}},[s("i",{staticClass:"el-icon-delete"})])],1)])]}}])},[s("template",{slot:"no-data"},[t._v("\n            该分类下暂无规格组或尚未选择分类\n        ")])],2),t._v(" "),s("v-btn",{attrs:{color:"primary"},on:{click:t.addGroup}},[t._v("新增分组")]),t._v(" "),s("v-dialog",{attrs:{width:"300",height:"200"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[s("v-card",[s("v-card-text",[s("v-text-field",{attrs:{label:"分组名称："},model:{value:t.group.name,callback:function(e){t.$set(t.group,"name",e)},expression:"group.name"}})],1),t._v(" "),s("v-card-actions",[s("v-spacer"),t._v(" "),s("v-btn",{attrs:{color:"blue darken-1",flat:""},nativeOn:{click:function(e){t.show=!1}}},[t._v("取消")]),t._v(" "),s("v-btn",{attrs:{color:"blue darken-1",flat:""},nativeOn:{click:function(e){return t.save(e)}}},[t._v("保存")])],1)],1)],1)],1)},staticRenderFns:[]},c=s("VU/8")(a,o,!1,null,null,null);e.default=c.exports}});
//# sourceMappingURL=3.97cb51550762ba464dad.js.map