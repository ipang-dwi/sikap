import{u as n,r,R as e,H as c,L as o,d}from"./app-a7b7108b.js";import{L as i}from"./Admin-15dc20e8.js";import{S as b}from"./sweetalert2.all-a826e817.js";function p(){const{errors:t}=n().props,[s,l]=r.useState(""),m=async a=>{a.preventDefault(),d.Inertia.post("/admin/jobs",{name:s},{onSuccess:()=>{b.fire({title:"Success!",text:"Data saved successfully!",icon:"success",showConfirmButton:!1,timer:1500})}})};return e.createElement(e.Fragment,null,e.createElement(c,null,e.createElement("title",null,"Create Kelompok Jabatan - SIKAP")),e.createElement(i,null,e.createElement(o,{href:"/admin/jobs",className:"btn btn-md btn-primary border-0 shadow",type:"button"},e.createElement("i",{className:"fa fa-long-arrow-alt-left me-2"}),"Kembali"),e.createElement("div",{className:"row mt-4"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card border-0 rounded shadow-sm border-top-success"},e.createElement("div",{className:"card-header"},e.createElement("span",{className:"font-weight-bold"},e.createElement("i",{className:"fa fa-home"})," Add New Kelompok Jabatan Name")),e.createElement("div",{className:"card-body"},e.createElement("form",{onSubmit:m},e.createElement("div",{className:"mb-3"},e.createElement("label",{className:"form-label fw-bold"},"Kelompok Jabatan Name"),e.createElement("input",{type:"text",className:"form-control",value:s,onChange:a=>l(a.target.value),placeholder:"Enter Kelompok Jabatan"})),t.name&&e.createElement("div",{className:"alert alert-danger"},t.name),e.createElement("div",null,e.createElement("button",{type:"submit",className:"btn btn-md btn-success me-2"},e.createElement("i",{className:"fa fa-save"})," ","Save"),e.createElement("button",{type:"reset",className:"btn btn-md btn-warning"},e.createElement("i",{className:"fa fa-redo"})," ","Reset"))))))))))}export{p as default};
