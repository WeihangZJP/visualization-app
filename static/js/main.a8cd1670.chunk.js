(this["webpackJsonpgosling-react"]=this["webpackJsonpgosling-react"]||[]).push([[0],{159:function(e,t){},162:function(e,t){},171:function(e,t,n){},172:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),i=n(67),r=n.n(i),s=n(93),o=n(7),c=n(8),p=n(2),m=n(94),d="https://gene-enhancer-interaction.s3.ap-northeast-1.amazonaws.com/cell_type_enhancers/13celltypes_arcs/enhancers_region_13celltypes.csv",h={"adrenal_gland_fetal-ENCODE":"https://gene-enhancer-interaction.s3.ap-northeast-1.amazonaws.com/cell_type_enhancers/13celltypes_arcs/gene_main/adrenal_gland_fetal-ENCODE_arcs.csv","adrenal_gland-ENCODE":"https://gene-enhancer-interaction.s3.ap-northeast-1.amazonaws.com/cell_type_enhancers/13celltypes_arcs/gene_main/adrenal_gland-ENCODE_arcs.csv","astrocyte-ENCODE":"https://gene-enhancer-interaction.s3.ap-northeast-1.amazonaws.com/cell_type_enhancers/13celltypes_arcs/gene_main/astrocyte-ENCODE_arcs.csv","B_cell-ENCODE":"https://gene-enhancer-interaction.s3.ap-northeast-1.amazonaws.com/cell_type_enhancers/13celltypes_arcs/gene_main/B_cell-ENCODE_arcs.csv","bipolar_neuron_from_iPSC-ENCODE":"https://gene-enhancer-interaction.s3.ap-northeast-1.amazonaws.com/cell_type_enhancers/13celltypes_arcs/gene_main/bipolar_neuron_from_iPSC-ENCODE_arcs.csv","CD4-positive_helper_T_cell-ENCODE":"https://gene-enhancer-interaction.s3.ap-northeast-1.amazonaws.com/cell_type_enhancers/13celltypes_arcs/gene_main/CD4-positive_helper_T_cell-ENCODE_arcs.csv","CD8-positive_alpha-beta_T_cell-ENCODE":"https://gene-enhancer-interaction.s3.ap-northeast-1.amazonaws.com/cell_type_enhancers/13celltypes_arcs/gene_main/CD8-positive_alpha-beta_T_cell-ENCODE_arcs.csv","CD14-positive_monocytes-Roadmap":"https://gene-enhancer-interaction.s3.ap-northeast-1.amazonaws.com/cell_type_enhancers/13celltypes_arcs/gene_main/CD14-positive_monocytes-Roadmap_arcs.csv","CD56-positive_natural_killer_cells-Roadmap":"https://gene-enhancer-interaction.s3.ap-northeast-1.amazonaws.com/cell_type_enhancers/13celltypes_arcs/gene_main/CD56-positive_natural_killer_cells-Roadmap_arcs.csv","H1_Derived_Mesenchymal_Stem_Cells-Roadmap":"https://gene-enhancer-interaction.s3.ap-northeast-1.amazonaws.com/cell_type_enhancers/13celltypes_arcs/gene_main/H1_Derived_Mesenchymal_Stem_Cells-Roadmap_arcs.csv","skeletal_muscle_myoblast-Roadmap":"https://gene-enhancer-interaction.s3.ap-northeast-1.amazonaws.com/cell_type_enhancers/13celltypes_arcs/gene_main/skeletal_muscle_myoblast-Roadmap_arcs.csv","spinal_cord_fetal-ENCODE":"https://gene-enhancer-interaction.s3.ap-northeast-1.amazonaws.com/cell_type_enhancers/13celltypes_arcs/gene_main/spinal_cord_fetal-ENCODE_arcs.csv","transverse_colon-ENCODE":"https://gene-enhancer-interaction.s3.ap-northeast-1.amazonaws.com/cell_type_enhancers/13celltypes_arcs/gene_main/transverse_colon-ENCODE_arcs.csv"},_={"adrenal_gland_fetal-ENCODE":"https://gene-enhancer-interaction.s3.ap-northeast-1.amazonaws.com/cell_type_enhancers/13celltypes_arcs/enhancer_main/adrenal_gland_fetal-ENCODE_arcs.csv","adrenal_gland-ENCODE":"https://gene-enhancer-interaction.s3.ap-northeast-1.amazonaws.com/cell_type_enhancers/13celltypes_arcs/enhancer_main/adrenal_gland-ENCODE_arcs.csv","astrocyte-ENCODE":"https://gene-enhancer-interaction.s3.ap-northeast-1.amazonaws.com/cell_type_enhancers/13celltypes_arcs/enhancer_main/astrocyte-ENCODE_arcs.csv","B_cell-ENCODE":"https://gene-enhancer-interaction.s3.ap-northeast-1.amazonaws.com/cell_type_enhancers/13celltypes_arcs/enhancer_main/B_cell-ENCODE_arcs.csv","bipolar_neuron_from_iPSC-ENCODE":"https://gene-enhancer-interaction.s3.ap-northeast-1.amazonaws.com/cell_type_enhancers/13celltypes_arcs/enhancer_main/bipolar_neuron_from_iPSC-ENCODE_arcs.csv","CD4-positive_helper_T_cell-ENCODE":"https://gene-enhancer-interaction.s3.ap-northeast-1.amazonaws.com/cell_type_enhancers/13celltypes_arcs/enhancer_main/CD4-positive_helper_T_cell-ENCODE_arcs.csv","CD8-positive_alpha-beta_T_cell-ENCODE":"https://gene-enhancer-interaction.s3.ap-northeast-1.amazonaws.com/cell_type_enhancers/13celltypes_arcs/enhancer_main/CD8-positive_alpha-beta_T_cell-ENCODE_arcs.csv","CD14-positive_monocytes-Roadmap":"https://gene-enhancer-interaction.s3.ap-northeast-1.amazonaws.com/cell_type_enhancers/13celltypes_arcs/enhancer_main/CD14-positive_monocytes-Roadmap_arcs.csv","CD56-positive_natural_killer_cells-Roadmap":"https://gene-enhancer-interaction.s3.ap-northeast-1.amazonaws.com/cell_type_enhancers/13celltypes_arcs/enhancer_main/CD56-positive_natural_killer_cells-Roadmap_arcs.csv","H1_Derived_Mesenchymal_Stem_Cells-Roadmap":"https://gene-enhancer-interaction.s3.ap-northeast-1.amazonaws.com/cell_type_enhancers/13celltypes_arcs/enhancer_main/H1_Derived_Mesenchymal_Stem_Cells-Roadmap_arcs.csv","skeletal_muscle_myoblast-Roadmap":"https://gene-enhancer-interaction.s3.ap-northeast-1.amazonaws.com/cell_type_enhancers/13celltypes_arcs/enhancer_main/skeletal_muscle_myoblast-Roadmap_arcs.csv","spinal_cord_fetal-ENCODE":"https://gene-enhancer-interaction.s3.ap-northeast-1.amazonaws.com/cell_type_enhancers/13celltypes_arcs/enhancer_main/spinal_cord_fetal-ENCODE_arcs.csv","transverse_colon-ENCODE":"https://gene-enhancer-interaction.s3.ap-northeast-1.amazonaws.com/cell_type_enhancers/13celltypes_arcs/enhancer_main/transverse_colon-ENCODE_arcs.csv"};function y(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)"),n=window.location.search.substr(1).match(t);return null!=n?unescape(n[2]):null}var f=function(){var e=Object(a.useRef)(),t=Object(a.useState)(),n=Object(p.a)(t,2),i=(n[0],n[1]),r=Object(a.useState)([]),s=Object(p.a)(r,2),o=s[0],f=s[1];Object(a.useEffect)((function(){if(e.current)return e.current.api.subscribe("click",(function(e,t){var n=t.genomicPosition,a=t.data,l=y("celltypes");window.location.assign("https://www.hgc.jp/~weihang/temp_jump_to_gene.html?enhancerID="+a[0].enhancer_id+"&celltypes="+l),i("".concat(n.chromosome,":").concat(n.position)),f(t.data)})),e.current.api.subscribe("rangeSelect",(function(e,t){if(t&&t.genomicRange){var n=t.genomicRange;2===n.length&&i("".concat(n[0].chromosome,":").concat(n[0].position,"-").concat(n[1].chromosome,":").concat(n[1].position)),f(t.data.length>10?t.data.slice(0,10):t.data)}else i("N/A"),f([])})),function(){e.current.api.unsubscribe("click"),e.current.api.unsubscribe("rangeSelect")}}),[e]);var g=window.location.href.includes("gene"),v=.9*screen.width;if(g){var u=y("geneID"),E=y("chr"),x=y("range1"),k=y("range2"),O=y("ensem"),C=y("rangeinput"),b=y("celltypes").split(","),w="chr"+E+":"+x+"~"+k+"(GRCh38/hg38)",D=[],z={alignment:"overlay",assembly:"hg38",title:"Gene annotation",linkingId:"view1",xDomain:{chromosome:"chr"+E,interval:[parseInt(x)-parseInt(C),parseInt(k)+parseInt(C)]},data:{url:"https://server.gosling-lang.org/api/v1/tileset_info/?d=gene-annotation",type:"beddb",genomicFields:[{index:1,name:"start"},{index:2,name:"end"}],valueFields:[{index:5,name:"strand",type:"nominal"},{index:3,name:"name",type:"nominal"}],exonIntervalFields:[{index:12,name:"start"},{index:13,name:"end"}]},tracks:[{experimental:{mouseEvents:!0},dataTransform:[{type:"filter",field:"type",oneOf:["gene"]},{type:"filter",field:"strand",oneOf:["+"]}],mark:"triangleRight",x:{field:"end",type:"genomic",axis:"top"},size:{value:15}},{experimental:{mouseEvents:!0},dataTransform:[{type:"filter",field:"type",oneOf:["gene"]}],mark:"text",text:{field:"name",type:"nominal"},x:{field:"start",type:"genomic"},xe:{field:"end",type:"genomic"},style:{dy:-15}},{experimental:{mouseEvents:!0},dataTransform:[{type:"filter",field:"type",oneOf:["gene"]},{type:"filter",field:"strand",oneOf:["-"]}],mark:"triangleLeft",x:{field:"start",type:"genomic"},size:{value:15},style:{align:"right"}},{experimental:{mouseEvents:!0},dataTransform:[{type:"filter",field:"type",oneOf:["exon"]}],mark:"rect",x:{field:"start",type:"genomic"},size:{value:15},xe:{field:"end",type:"genomic"}},{experimental:{mouseEvents:!0},dataTransform:[{type:"filter",field:"type",oneOf:["gene"]},{type:"filter",field:"strand",oneOf:["+"]}],mark:"rule",x:{field:"start",type:"genomic"},strokeWidth:{value:3},xe:{field:"end",type:"genomic"},style:{linePattern:{type:"triangleRight",size:5}}},{experimental:{mouseEvents:!0},dataTransform:[{type:"filter",field:"type",oneOf:["gene"]},{type:"filter",field:"strand",oneOf:["-"]}],mark:"rule",x:{field:"start",type:"genomic"},strokeWidth:{value:3},xe:{field:"end",type:"genomic"},style:{linePattern:{type:"triangleLeft",size:5}}}],row:{field:"strand",type:"nominal",domain:["+","-"]},color:{field:"strand",type:"nominal",domain:["+","-"],range:["#7585FF","#FF8A85"]},visibility:[{operation:"less-than",measure:"width",threshold:"|xe-x|",transitionPadding:10,target:"mark"}],tooltip:[{field:"name",type:"quantitative",alt:"Gene(exon)"},{field:"strand",type:"quantitative",alt:"Strand"},{field:"start",type:"genomic",alt:"Start Position"},{field:"end",type:"genomic",alt:"End Position"}],opacity:{value:.8},width:v,height:100};D.push(z);var N,I=Object(c.a)(b);try{for(I.s();!(N=I.n()).done;){var S=N.value,T={alignment:":overlay",assembly:"hg38",linkingId:"view1",xDomain:{chromosome:"chr"+E,interval:[parseInt(x)-parseInt(C),parseInt(k)+parseInt(C)]},tracks:[{alignment:"overlay",title:"Active enhancers",experimental:{mouseEvents:!0},data:{url:d,type:"csv",chromosomeField:"chr",genomicFields:["start","end"]},tracks:[{mark:"rect",dataTransform:[{type:"filter",field:"celltype_gene",oneOf:[S+"@"+u],not:!0}],color:{field:"celltype_gene",type:"nominal",value:"black"},size:{value:60}},{mark:"rect",dataTransform:[{type:"filter",field:"celltype_gene",oneOf:[S+"@"+u]}],size:{value:60},color:{value:"#ff0000"},stroke:{value:"red"}}],tooltip:[{field:"enhancer_id",type:"quantitative",alt:"Enhancer ID"},{field:"start",type:"genomic",alt:"Start Position"},{field:"end",type:"genomic",alt:"End Position"}],x:{field:"start",type:"genomic"},xe:{field:"end",type:"genomic"},color:{field:"chr",type:"nominal",range:["black"]},stroke:{field:"chr",type:"nominal",range:["black"]},strokeWidth:{value:1},style:{background:"#F8F8F8",outline:"black",legendTitle:"left"},width:v,height:15},{alignment:"overlay",title:S,data:{url:h[S],type:"csv",chromosomeField:"chr",genomicFields:["center","TSS"]},dataTransform:[{type:"filter",field:"gene",oneOf:[u]}],tracks:[{mark:"withinLink"}],tooltip:[{field:"gene",type:"quantitative",alt:"Connected  Gene"},{field:"score",type:"quantitative",alt:"ABC score (0~1)",format:".4"},{field:"TSS",type:"genomic",alt:"Gene TSS"},{field:"center",type:"genomic",alt:"Enhancer Region Center"}],x:{field:"TSS",type:"genomic",linkingId:"view1"},xe:{field:"center",type:"genomic"},color:{field:"score",type:"quantitative"},stroke:{value:"red"},strokeWidth:{value:1},opacity:{value:1},style:{background:"#F8F8F8",outline:"black",legendTitle:"left"},width:v,height:60}]};D.push(T)}}catch(B){I.e(B)}finally{I.f()}return l.a.createElement("div",null,null,l.a.createElement("div",{id:"info",style:{backgroundColor:"salmon",height:"40px",width:screen.width,position:"fixed",zIndex:"10",padding:"10px"}},l.a.createElement("b",{style:{fontSize:"25px",left:"10px",top:"0px",position:"absolute"}},"Checked Gene: "+u),l.a.createElement("b",{style:{fontSize:"25px",left:screen.width/4,top:"0px",position:"absolute"}},"Ensembl: "+O),l.a.createElement("b",{style:{fontSize:"25px",left:2.1*screen.width/4,top:"0px",position:"absolute"}},"Locus: "+w)),l.a.createElement(m.a,{ref:e,spec:{title:"Results",style:{linkStyle:"elliptical"},views:D},experimental:{reactive:!0}}),(o.length,null))}var F=y("enhancerID");E=y("chr"),x=y("range1"),k=y("range2"),C=y("rangeinput"),b=y("celltypes").split(","),w=E+":"+x+"~"+k+"(GRCh38/hg38)",D=[];var R={alignment:":overlay",assembly:"hg38",linkingId:"view1",xDomain:{chromosome:E,interval:[parseInt(x)-parseInt(C)/2,parseInt(k)+parseInt(C)/2]},tracks:[{alignment:"overlay",title:"Enhancer annotation",data:{url:d,type:"csv",chromosomeField:"chr",genomicFields:["start","end"]},tracks:[{mark:"rect",dataTransform:[{type:"filter",field:"enhancer_id",oneOf:[F],not:!0}],color:{field:"enhancer_id",type:"nominal",value:"black"},size:{value:60}},{mark:"rect",dataTransform:[{type:"filter",field:"enhancer_id",oneOf:[F]}],size:{value:60},color:{value:"#ff0000"},stroke:{value:"red"}}],tooltip:[{field:"enhancer_id",type:"quantitative",alt:"Enhancer ID"},{field:"start",type:"genomic",alt:"Start Position"},{field:"end",type:"genomic",alt:"End Position"}],x:{field:"start",type:"genomic"},xe:{field:"end",type:"genomic"},color:{field:"chr",type:"nominal",range:["black"]},stroke:{field:"chr",type:"nominal",range:["black"]},strokeWidth:{value:1},width:v,height:100}]};D.push(R);var P,j=Object(c.a)(b);try{for(j.s();!(P=j.n()).done;){var q=P.value,G={alignment:":overlay",assembly:"hg38",linkingId:"view1",xDomain:{chromosome:E,interval:[parseInt(x)-parseInt(C)/2,parseInt(k)+parseInt(C)/2]},tracks:[{alignment:"overlay",assembly:"hg38",title:"Gene annotation",linkingId:"view1",xDomain:{chromosome:E,interval:[parseInt(x)-parseInt(C)/2,parseInt(k)+parseInt(C)/2]},data:{url:"https://server.gosling-lang.org/api/v1/tileset_info/?d=gene-annotation",type:"beddb",genomicFields:[{index:1,name:"start"},{index:2,name:"end"}],valueFields:[{index:5,name:"strand",type:"nominal"},{index:3,name:"name",type:"nominal"}],exonIntervalFields:[{index:12,name:"start"},{index:13,name:"end"}]},tracks:[{dataTransform:[{type:"filter",field:"type",oneOf:["gene"]},{type:"filter",field:"strand",oneOf:["+"]}],mark:"triangleRight",x:{field:"end",type:"genomic",axis:"top"},size:{value:5}},{dataTransform:[{type:"filter",field:"type",oneOf:["gene"]},{type:"filter",field:"strand",oneOf:["+"]}],mark:"text",text:{field:"name",type:"nominal"},x:{field:"start",type:"genomic"},xe:{field:"end",type:"genomic"},style:{dy:-8}},{dataTransform:[{type:"filter",field:"type",oneOf:["gene"]},{type:"filter",field:"strand",oneOf:["-"]}],mark:"text",text:{field:"name",type:"nominal"},x:{field:"start",type:"genomic"},xe:{field:"end",type:"genomic"},style:{dy:8}},{dataTransform:[{type:"filter",field:"type",oneOf:["gene"]},{type:"filter",field:"strand",oneOf:["-"]}],mark:"triangleLeft",x:{field:"start",type:"genomic"},size:{value:5},style:{align:"right"}},{dataTransform:[{type:"filter",field:"type",oneOf:["exon"]}],mark:"rect",x:{field:"start",type:"genomic"},size:{value:5},xe:{field:"end",type:"genomic"}},{dataTransform:[{type:"filter",field:"type",oneOf:["gene"]},{type:"filter",field:"strand",oneOf:["+"]}],mark:"rule",x:{field:"start",type:"genomic"},strokeWidth:{value:1},xe:{field:"end",type:"genomic"},style:{linePattern:{type:"triangleRight",size:2}}},{dataTransform:[{type:"filter",field:"type",oneOf:["gene"]},{type:"filter",field:"strand",oneOf:["-"]}],mark:"rule",x:{field:"start",type:"genomic"},strokeWidth:{value:1},xe:{field:"end",type:"genomic"},style:{linePattern:{type:"triangleLeft",size:2}}}],row:{field:"strand",type:"nominal",domain:["+","-"]},color:{field:"strand",type:"nominal",domain:["+","-"],range:["#7585FF","#FF8A85"]},visibility:[{operation:"less-than",measure:"width",threshold:"|xe-x|",transitionPadding:10,target:"mark"}],tooltip:[{field:"name",type:"quantitative",alt:"Gene(exon)"},{field:"strand",type:"quantitative",alt:"Strand"},{field:"start",type:"genomic",alt:"Start Position"},{field:"end",type:"genomic",alt:"End Position"}],opacity:{value:.8},width:v,height:50,style:{background:"#F8F8F8",outline:"black",legendTitle:"left",mouseOver:{color:"red"}}},{alignment:"overlay",title:q,data:{url:_[q],type:"csv",chromosomeField:"chr",genomicFields:["center","tss"]},dataTransform:[{type:"filter",field:"enhancer_id",oneOf:[F]}],tracks:[{mark:"withinLink"}],tooltip:[{field:"enhancer_id",type:"quantitative",alt:"Connected  Enhancer"},{field:"ABC.Score",type:"quantitative",alt:"ABC score (0~1)",format:".4"},{field:"tss",type:"genomic",alt:"Gene TSS"},{field:"center",type:"genomic",alt:"Enhancer Region Center"}],x:{field:"tss",type:"genomic",linkingId:"view1"},xe:{field:"center",type:"genomic"},stroke:{value:"red"},strokeWidth:{value:1},opacity:{value:1},style:{background:"#F8F8F8",outline:"black",legendTitle:"left"},width:v,height:60}]};D.push(G)}}catch(B){j.e(B)}finally{j.f()}return l.a.createElement("div",null,null,l.a.createElement("div",{id:"info",style:{backgroundColor:"green",height:"40px",width:screen.width,position:"fixed",zIndex:"10",padding:"10px"}},l.a.createElement("b",{style:{fontSize:"25px",left:"10px",top:"0px",position:"absolute"}},"Checked Enhancer: "+F),l.a.createElement("b",{style:{fontSize:"25px",left:2.1*screen.width/4,top:"0px",position:"absolute"}},"Location: "+w)),l.a.createElement(m.a,{ref:e,spec:{title:"Results",style:{linkStyle:"elliptical"},views:D},experimental:{reactive:!0}}),(o.length,null))},g={MouseEvents:a.createElement(f,null)};var v=function(){return a.createElement("div",{className:"flex flex-row h-full w-full"},a.createElement("div",{className:"flex-none border-r-[1px]"}),a.createElement("div",{className:""},a.createElement(o.c,null,a.createElement(o.a,{path:"/",element:g.MouseEvents}),Object.entries(g).map((function(e){return a.createElement(o.a,{key:e[0],path:"/".concat(e[0].replace(" ","_")),element:e[1]})})))))};n(171);r.a.render(l.a.createElement(s.a,null,l.a.createElement(v,null)),document.getElementById("root"))}},[[172,1,2]]]);
//# sourceMappingURL=main.a8cd1670.chunk.js.map