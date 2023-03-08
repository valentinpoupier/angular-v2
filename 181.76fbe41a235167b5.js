"use strict";(self.webpackChunkmain_angular_java_techni2=self.webpackChunkmain_angular_java_techni2||[]).push([[181],{5181:(M,u,i)=>{i.r(u),i.d(u,{PokeApiModule:()=>s});var d=i(6895),l=i(2386),e=i(8256),f=i(7521),p=i(433);function h(o,t){if(1&o&&(e.TgZ(0,"li"),e._uU(1),e.qZA()),2&o){const n=t.$implicit;e.xp6(1),e.hij(" ",n.type.name," ")}}class a{constructor(){this.type=[]}}function b(o,t){if(1&o&&(e.TgZ(0,"li"),e._uU(1),e.qZA()),2&o){const n=t.$implicit;e.xp6(1),e.AsE("",n.stat.name,": ",n.base_stat,"")}}a.\u0275fac=function(t){return new(t||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-poke-type"]],inputs:{type:"type"},decls:6,vars:1,consts:[[4,"ngFor","ngForOf"]],template:function(t,n){1&t&&(e._UZ(0,"br"),e.TgZ(1,"div")(2,"h4"),e._uU(3,"Type(s)"),e.qZA(),e.TgZ(4,"ul"),e.YNc(5,h,2,1,"li",0),e.qZA()()),2&t&&(e.xp6(5),e.Q6J("ngForOf",n.type))},dependencies:[d.sg]});class m{constructor(){this.stats=[]}}m.\u0275fac=function(t){return new(t||m)},m.\u0275cmp=e.Xpm({type:m,selectors:[["app-poke-stat"]],inputs:{stats:"stats"},decls:6,vars:1,consts:[[4,"ngFor","ngForOf"]],template:function(t,n){1&t&&(e._UZ(0,"br"),e.TgZ(1,"div")(2,"h4"),e._uU(3,"Stats"),e.qZA(),e.TgZ(4,"ul"),e.YNc(5,b,2,2,"li",0),e.qZA()()),2&t&&(e.xp6(5),e.Q6J("ngForOf",n.stats))},dependencies:[d.sg]});class r{constructor(t,n){this._activatedRoute=t,this._pokeService=n,this.name=""}}function k(o,t){1&o&&(e.TgZ(0,"div")(1,"h1"),e._uU(2,"Search a pokemon"),e.qZA()())}function _(o,t){if(1&o&&e._UZ(0,"app-pokemon",5),2&o){const n=e.oxw();e.Q6J("pokemon",n.pokemon)}}r.\u0275fac=function(t){return new(t||r)(e.Y36(l.gz),e.Y36(f.t))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-pokemon"]],inputs:{pokemon:"pokemon",id:"id"},decls:14,vars:7,consts:[["alt","",3,"src"],[3,"type"],[3,"stats"]],template:function(t,n){1&t&&(e._UZ(0,"br"),e.TgZ(1,"div")(2,"h1"),e._uU(3),e.qZA(),e.TgZ(4,"h4"),e._uU(5),e.qZA(),e._UZ(6,"img",0),e.TgZ(7,"h4"),e._uU(8),e.qZA(),e.TgZ(9,"h4"),e._uU(10),e.qZA(),e._UZ(11,"br")(12,"app-poke-type",1)(13,"app-poke-stat",2),e.qZA()),2&t&&(e.xp6(3),e.Oqu(n.pokemon.name),e.xp6(2),e.hij("ID: ",n.pokemon.id,""),e.xp6(1),e.Q6J("src",n.pokemon.sprites.front_default,e.LSH),e.xp6(2),e.hij("Height: ",n.pokemon.height," cm"),e.xp6(2),e.hij("Weight: ",n.pokemon.weight," kg"),e.xp6(2),e.Q6J("type",n.pokemon.types),e.xp6(1),e.Q6J("stats",n.pokemon.stats))},dependencies:[a,m],styles:['div[_ngcontent-%COMP%]{background-color:#f0f0f0;display:flex;justify-content:center;align-items:center;flex-direction:column;margin-top:20px;margin-bottom:10px}div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2em;font-weight:600;text-transform:uppercase;letter-spacing:.1em;margin-bottom:10px}div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:300px;height:40px;border:none;border-radius:5px;padding:0 10px;font-size:1.1em;font-weight:600;text-transform:uppercase;letter-spacing:.1em;margin-bottom:10px}div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:300px;height:40px;border:none;border-radius:5px;background:#bebebe;color:#000;font-size:1.2em;font-weight:600;text-transform:uppercase;letter-spacing:.1em;margin-bottom:20px;transition:.5s;z-index:1}div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;width:100%;height:0%;background:#bebebe;transition:.5s;z-index:-1}div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{color:#000}div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:before{height:180%}div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:after{content:"";position:absolute;top:0;left:0;width:0%;height:100%;background:#bebebe;transition:.5s;z-index:-1}']});class g{constructor(t){this._pokeService=t,this.id=1,this.pokemons=[]}ngOnInit(){this.getPokelist()}getPokelist(){this._pokeService.getPokemonList().subscribe({next:t=>{this.pokemons=t},error:t=>{console.log(t)}})}searchPokemon(t){this._pokeService.getPokemonById(t).subscribe({next:n=>{this.pokemon=n},error:n=>{console.log(n)}})}}g.\u0275fac=function(t){return new(t||g)(e.Y36(f.t))},g.\u0275cmp=e.Xpm({type:g,selectors:[["app-poke-search"]],decls:9,vars:4,consts:[["routerLink","../",1,"btn","btn-primary"],["type","number","min","0","max","151",3,"ngModel","ngModelChange"],[3,"disabled","click"],[4,"ngIf"],[3,"pokemon",4,"ngIf"],[3,"pokemon"]],template:function(t,n){1&t&&(e.TgZ(0,"a",0),e._uU(1,"Back"),e.qZA(),e._UZ(2,"br"),e.TgZ(3,"div")(4,"input",1),e.NdJ("ngModelChange",function(C){return n.id=C}),e.qZA(),e.TgZ(5,"button",2),e.NdJ("click",function(){return n.searchPokemon(n.id)}),e._uU(6,"Search"),e.qZA()(),e.YNc(7,k,3,0,"div",3),e.YNc(8,_,1,1,"app-pokemon",4)),2&t&&(e.xp6(4),e.Q6J("ngModel",n.id),e.xp6(1),e.Q6J("disabled",n.id<1||n.id>151),e.xp6(2),e.Q6J("ngIf",!n.pokemon),e.xp6(1),e.Q6J("ngIf",n.pokemon))},dependencies:[d.O5,l.rH,p.Fj,p.wV,p.JJ,p.qQ,p.Fd,p.On,r],styles:['a[_ngcontent-%COMP%]{color:#fff;background-color:#228b22;text-decoration:none;font-size:1.1em;font-weight:600;text-transform:uppercase;letter-spacing:.1em;position:relative;display:inline-block;padding:.5em 1em;overflow:hidden;transition:.5s;z-index:1;border-radius:5px;margin:.5em 0 .5em 10px}a[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;width:100%;height:0%;background:#bebebe;transition:.5s;z-index:-1}a[_ngcontent-%COMP%]:hover{color:#000}a[_ngcontent-%COMP%]:hover:before{height:180%}a[_ngcontent-%COMP%]:after{content:"";position:absolute;top:0;left:0;width:0%;height:100%;background:#bebebe;transition:.5s;z-index:-1}div[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-direction:column;margin-top:20px;margin-bottom:10px}div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2em;font-weight:600;text-transform:uppercase;letter-spacing:.1em;margin-bottom:10px}div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:300px;height:40px;border-radius:5px;padding:0 10px;font-size:1.1em;font-weight:600;text-transform:uppercase;letter-spacing:.1em;margin-bottom:5px}button[_ngcontent-%COMP%]{width:300px;height:40px;border:none;border-radius:5px;padding:0 10px;font-size:1.1em;font-weight:600;text-transform:uppercase;letter-spacing:.1em;margin-bottom:20px;background-color:#228b22;color:#fff}button[_ngcontent-%COMP%]:hover{background-color:#000;color:#fff}button[_ngcontent-%COMP%]:active{background-color:#720000;color:#fff}button[_ngcontent-%COMP%]:disabled{background-color:#bebebe;color:#fff;cursor:not-allowed}ul[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-direction:column;margin-top:20px;margin-bottom:20px}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-direction:column;margin-top:5px;width:100%;border:1px solid #000000;border-radius:5px;padding:0 5px;font-size:1.1em;font-weight:600;text-transform:uppercase;letter-spacing:.1em;margin-bottom:0}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100px;height:100px}']});const x=[{path:"",component:g},{path:":id",component:r}];class c{}c.\u0275fac=function(t){return new(t||c)},c.\u0275mod=e.oAB({type:c}),c.\u0275inj=e.cJS({imports:[l.Bz.forChild(x),l.Bz]});class s{}s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[d.ez,c,p.u5]})}}]);