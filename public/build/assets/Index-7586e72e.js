import{u as m,R as e,H as s,L as l}from"./app-655de098.js";import{L as r,h as n}from"./Admin-0e4b63c4.js";import{S as d,P as i}from"./Pagination-5848893a.js";import{D as o}from"./Delete-1acf3c38.js";import"./sweetalert2.all-570e3156.js";function N(){const{sks:a}=m().props;return console.log(a),e.createElement(e.Fragment,null,e.createElement(s,null,e.createElement("title",null,"SK - SIKAP")),e.createElement(r,null,e.createElement("div",{className:"row mt-5"},e.createElement("div",{className:"col-md-8"},e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-3 col-12 mb-2"},e.createElement(l,{href:"/admin/sks/create",className:"btn btn-md btn-primary border-0 shadow w-100",type:"button"},e.createElement("i",{className:"fa fa-plus-circle me-2"}),"Add")),e.createElement("div",{className:"col-md-9 col-12 mb-2"},e.createElement(d,{URL:"/admin/sks"}))))),e.createElement("div",{className:"row mt-2 mb-4"},e.createElement("div",{className:"col-12"},e.createElement("div",{className:"card border-0 rounded shadow-sm border-top-success"},e.createElement("div",{className:"card-header"},e.createElement("span",{className:"font-weight-bold"},e.createElement("i",{className:"fa fa-paper"})," Data SK")),e.createElement("div",{className:"card-body"},e.createElement("div",{className:"table-responsive"},e.createElement("table",{className:"table table-bordered table-striped table-hovered"},e.createElement("thead",null,e.createElement("tr",null,e.createElement("th",{scope:"col",style:{width:"5%"}},"No."),e.createElement("th",{scope:"col",style:{width:"15%"}},"Kecamatan"),e.createElement("th",{scope:"col",style:{width:"15%"}},"Jabatan"),e.createElement("th",{scope:"col",style:{width:"15%"}},"Tahun"),e.createElement("th",{scope:"col",style:{width:"15%"}},"Nama SK"),e.createElement("th",{scope:"col",style:{width:"15%"}},"Tgl SK"),e.createElement("th",{scope:"col",style:{width:"15%"}},"File SK"),e.createElement("th",{scope:"col",style:{width:"15%"}},"Actions"))),e.createElement("tbody",null,a.data.map((t,c)=>e.createElement("tr",{key:c},e.createElement("td",{className:"text-center"},++c+(a.current_page-1)*a.per_page),e.createElement("td",null,t.village.name),e.createElement("td",null,t.jabatan.name),e.createElement("td",null,t.tahun),e.createElement("td",null,t.name),e.createElement("td",null,t.tglsk),e.createElement("td",null,e.createElement("a",{className:"btn btn-success",target:"_blank",href:t.filesk},e.createElement("i",{className:"fa fa-pdf"}," ","Lihat")," ")),e.createElement("td",{className:"text-center"},e.createElement(l,{href:`/admin/sks/${t.id}`,className:"btn btn-primary btn-sm me-2"},e.createElement("i",{className:"fa fa-plus-circle"})),n(["sks.edit"])&&e.createElement(l,{href:`/admin/sks/${t.id}/edit`,className:"btn btn-primary btn-sm me-2"},e.createElement("i",{className:"fa fa-pencil-alt"})),n(["sks.delete"])&&e.createElement(o,{URL:"/admin/sks",id:t.id}))))))),e.createElement("br",null),e.createElement(i,{links:a.links,align:"end"})))))))}export{N as default};
