!function(e){"function"==typeof define&&define.amd?define(["jquery","datatables.net-dt","datatables.net-fixedcolumns"],function(t){return e(t,window,document)}):"object"==typeof exports?module.exports=function(t,n){return t||(t=window),n&&n.fn.dataTable||(n=require("datatables.net-dt")(t,n).$),n.fn.dataTable.FixedColumns||require("datatables.net-fixedcolumns")(t,n),e(n,t,t.document)}:e(jQuery,window,document)}(function(e){return e.fn.dataTable});