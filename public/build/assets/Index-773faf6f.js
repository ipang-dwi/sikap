import{u as r,R as e,H as n,L as c}from"./app-efb7c980.js";import{L as s,h as m}from"./Admin-928fbc23.js";import{S as d,P as i}from"./Pagination-d8953cd9.js";import{D as o}from"./Delete-e2a35f5c.js";import"./sweetalert2.all-b82a2d4e.js";function N(){const{villages:a}=r().props;return e.createElement(e.Fragment,null,e.createElement(n,null,e.createElement("title",null,"Kelurahan - SIKAP")),e.createElement(s,null,e.createElement("div",{className:"row mt-5"},e.createElement("div",{className:"col-md-8"},e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-3 col-12 mb-2"},e.createElement(c,{href:"/admin/villages/create",className:"btn btn-md btn-primary border-0 shadow w-100",type:"button"},e.createElement("i",{className:"fa fa-plus-circle me-2"}),"Add")),e.createElement("div",{className:"col-md-9 col-12 mb-2"},e.createElement(d,{URL:"/admin/villages"}))))),e.createElement("div",{className:"row mt-2 mb-4"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card border-0 rounded shadow-sm border-top-success"},e.createElement("div",{className:"card-header"},e.createElement("span",{className:"font-weight-bold"},e.createElement("i",{className:"fa fa-home"})," Kecamatan")),e.createElement("div",{className:"card-body"},e.createElement("div",{className:"table-responsive"},e.createElement("table",{className:"table table-bordered table-striped table-hovered"},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{scope:"col",style:{width:"5%"}},"No."),e.createElement("th",{scope:"col",style:{width:"15%"}},"Kota"),e.createElement("th",{scope:"col",style:{width:"15%"}},"Kecamatan"),e.createElement("th",{scope:"col",style:{width:"15%"}},"Kelurahan"),e.createElement("th",{scope:"col",style:{width:"15%"}},"Actions"))),e.createElement("tbody",null,a.data.map((t,l)=>e.createElement("tr",{key:l},e.createElement("td",{className:"text-center"},++l+(a.current_page-1)*a.per_page),e.createElement("td",null,t.city.name),e.createElement("td",null,t.subdistrict.name),e.createElement("td",null,t.name),e.createElement("td",{className:"text-center"},m(["subdistricts.edit"])&&e.createElement(c,{href:`/admin/villages/${t.id}/edit`,className:"btn btn-primary btn-sm me-2"},e.createElement("i",{className:"fa fa-pencil-alt"})),m(["villages.delete"])&&e.createElement(o,{URL:"/admin/villages",id:t.id}))))))),e.createElement("br",null),e.createElement(i,{links:a.links,align:"end"})))))))}export{N as default};
