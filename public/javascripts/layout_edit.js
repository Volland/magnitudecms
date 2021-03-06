var _editor;
var _active;

function init(){
  _editor = new bespin.editor.Component("editor", {
    language: "ruby"
    ,loadfromdiv: true
    ,set: {
      strictlines: "on"
    }
  });
  
  fitEditor();
  Ext.EventManager.addListener(window, "resize", fitEditor);
  Ext.fly("_haml").on("click" , function() {setEditorContent("haml");});
  Ext.fly("_sass").on("click" , function() {setEditorContent("sass");});
  Ext.fly("_form").on("submit", function(e,t) {
    e.stopEvent();
    var btn = Ext.getDom("btn");
    btn.disabled = true;
    btn.value = "saving...";
    saveLayout(btn);
  });
  setEditorContent("haml");
}

function fitEditor() {
  Ext.fly("editor").setHeight(window.innerHeight-60, true);
}
function setEditorContent(what) {
  setFieldContent(_active);
  _editor.setContent(Ext.fly(what).getValue());
  _active = what;
}
function setFieldContent(what) {
  if(what) {
    Ext.fly(what).update(_editor.getContent());
  }
}
function saveLayout(btn) {
  setFieldContent(_active);
  Ext.Ajax.request({
    url: Ext.fly("_form").getAttribute("action")
    ,form: "_form"
    ,method: "PUT"
    ,success: function(response, opts) {
      var obj = Ext.decode(response.responseText);
      console.dir(obj);
      Ext.getDom("rev").value = obj.rev;
      btn.disabled = false;
      btn.value = "save";
    }
    ,failure: function(response, opts) {
      console.log("server-side failure with status code " + response.status);
      btn.disabled = false;
      btn.value = "save";
    }
  });
}
Ext.onReady(init);
