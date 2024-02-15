"use strict";(self.webpackChunkone_client_main=self.webpackChunkone_client_main||[]).push([[925],{5925:(H,p,g)=>{g.r(p),g.d(p,{AuthModule:()=>j});var c=g(9808),d=g(866),s=g(2382),m=g(2340),e=g(1223),_=g(2511);function f(r,i){1&r&&(e.TgZ(0,"span",35),e._uU(1," Email is required "),e.qZA())}function h(r,i){1&r&&(e.TgZ(0,"span",35),e._uU(1," Invalid email "),e.qZA())}function v(r,i){if(1&r&&(e.TgZ(0,"div"),e.YNc(1,f,2,0,"span",34),e.YNc(2,h,2,0,"span",34),e.qZA()),2&r){const t=e.oxw(2);let o,n;e.xp6(1),e.Q6J("ngIf",null==t.loginForm||null==(o=t.loginForm.get("email"))||null==o.errors?null:o.errors.required),e.xp6(1),e.Q6J("ngIf",null==t.loginForm||null==(n=t.loginForm.get("email"))||null==n.errors?null:n.errors.invalidEmail)}}function x(r,i){if(1&r){const t=e.EpF();e.O4$(),e.TgZ(0,"svg",36),e.NdJ("click",function(){e.CHM(t);const n=e.oxw(2);return n.toggleShowPassword("EMAIL",n.showPassword)}),e._UZ(1,"path",37),e._UZ(2,"path",38),e.qZA()}}function b(r,i){if(1&r){const t=e.EpF();e.O4$(),e.TgZ(0,"svg",39),e.NdJ("click",function(){e.CHM(t);const n=e.oxw(2);return n.toggleShowPassword("EMAIL",n.showPassword)}),e._UZ(1,"path",40),e.qZA()}}function y(r,i){1&r&&(e.TgZ(0,"span",35),e._uU(1," Email is required "),e.qZA())}function w(r,i){1&r&&(e.TgZ(0,"span",35),e._uU(1," Invalid email "),e.qZA())}function Z(r,i){if(1&r&&(e.TgZ(0,"div"),e.YNc(1,y,2,0,"span",34),e.YNc(2,w,2,0,"span",34),e.qZA()),2&r){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",null==t.loginForm||null==t.loginForm.get("password").errors?null:t.loginForm.get("password").errors.required),e.xp6(1),e.Q6J("ngIf",null==t.loginForm||null==t.loginForm.get("password").errors?null:t.loginForm.get("password").errors.invalidEmail)}}function T(r,i){if(1&r){const t=e.EpF();e.TgZ(0,"div",24),e.TgZ(1,"div"),e.TgZ(2,"label",25),e._uU(3,"Your email"),e.qZA(),e._UZ(4,"input",26),e.YNc(5,v,3,2,"div",27),e.qZA(),e.TgZ(6,"div"),e.TgZ(7,"label",28),e._uU(8,"Password"),e.qZA(),e._UZ(9,"input",29),e.YNc(10,x,3,0,"svg",30),e.YNc(11,b,2,0,"svg",31),e.YNc(12,Z,3,2,"div",27),e.qZA(),e.TgZ(13,"div",32),e.TgZ(14,"button",33),e.NdJ("click",function(){return e.CHM(t),e.oxw().signIn()}),e._uU(15," Sign in"),e.qZA(),e.qZA(),e.qZA()}if(2&r){const t=e.oxw();let o;e.xp6(5),e.Q6J("ngIf",t.loginFormSubmitted&&(null==t.loginForm||null==(o=t.loginForm.get("email"))?null:o.errors)),e.xp6(5),e.Q6J("ngIf",!t.showOTP),e.xp6(1),e.Q6J("ngIf",t.showOTP),e.xp6(1),e.Q6J("ngIf",t.loginFormSubmitted&&t.loginForm.get("password").errors)}}function k(r,i){1&r&&(e.TgZ(0,"span",35),e._uU(1," Phone number is required "),e.qZA())}function A(r,i){1&r&&(e.TgZ(0,"span",35),e._uU(1," Invalid phone number "),e.qZA())}function C(r,i){if(1&r&&(e.TgZ(0,"div"),e.YNc(1,k,2,0,"span",34),e.YNc(2,A,2,0,"span",34),e.qZA()),2&r){const t=e.oxw(2);let o;e.xp6(1),e.Q6J("ngIf",null==t.loginForm||null==t.loginForm.get("phoneNumber").errors?null:t.loginForm.get("phoneNumber").errors.required),e.xp6(1),e.Q6J("ngIf",null==t.loginForm||null==(o=t.loginForm.get("phoneNumber"))||null==o.errors?null:o.errors.invalid)}}function I(r,i){1&r&&(e.TgZ(0,"span",35),e._uU(1," User not found with given phone number "),e.qZA())}function q(r,i){if(1&r){const t=e.EpF();e.O4$(),e.TgZ(0,"svg",36),e.NdJ("click",function(){e.CHM(t);const n=e.oxw(2);return n.toggleShowPassword("OTP",n.showOTP)}),e._UZ(1,"path",37),e._UZ(2,"path",38),e.qZA()}}function N(r,i){if(1&r){const t=e.EpF();e.O4$(),e.TgZ(0,"svg",39),e.NdJ("click",function(){e.CHM(t);const n=e.oxw(2);return n.toggleShowPassword("OTP",n.showOTP)}),e._UZ(1,"path",40),e.qZA()}}function F(r,i){1&r&&(e.TgZ(0,"span",35),e._uU(1," OTP invalid "),e.qZA())}function P(r,i){if(1&r){const t=e.EpF();e.TgZ(0,"div",51),e.TgZ(1,"button",52),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).sendOtp()}),e._uU(2," Send OTP "),e.qZA(),e.qZA()}if(2&r){const t=e.oxw(2);let o;e.Q6J("hidden",null==t.loginForm||null==(o=t.loginForm.get("phoneNumber"))?null:o.errors)}}function L(r,i){1&r&&(e.TgZ(0,"div",53),e.TgZ(1,"div",54),e.O4$(),e.TgZ(2,"svg",55),e._UZ(3,"path",56),e._UZ(4,"path",57),e.qZA(),e.kcU(),e.TgZ(5,"span",58),e._uU(6,"Loading..."),e.qZA(),e.qZA(),e.qZA())}function S(r,i){if(1&r){const t=e.EpF();e.TgZ(0,"div",59),e.TgZ(1,"button",60),e.NdJ("click",function(){return e.CHM(t),e.oxw(2).verifyOtp()}),e._uU(2," Verify OTP "),e.qZA(),e.qZA()}if(2&r){const t=e.oxw(2);let o;e.Q6J("hidden",!(null!=t.loginForm&&null!=(o=t.loginForm.get("phoneNumber"))&&o.errors&&t.showOTPButton))}}const U=function(r){return{"pointer-events-none":r}};function M(r,i){if(1&r){const t=e.EpF();e.TgZ(0,"div",41),e.TgZ(1,"div",42),e.TgZ(2,"label",25),e._uU(3," Phone Number "),e.qZA(),e.TgZ(4,"span",43),e.TgZ(5,"input",44),e.NdJ("input",function(n){return e.CHM(t),e.oxw().changePhoneNumber(n)}),e.qZA(),e.qZA(),e.YNc(6,C,3,2,"div",27),e.YNc(7,I,2,0,"span",34),e.qZA(),e.TgZ(8,"div",45),e.TgZ(9,"label",46),e._uU(10," OTP "),e.qZA(),e.TgZ(11,"input",47),e.NdJ("input",function(n){return e.CHM(t),e.oxw().otpValueInput(n)}),e.qZA(),e.YNc(12,q,3,0,"svg",30),e.YNc(13,N,2,0,"svg",31),e.qZA(),e.YNc(14,F,2,0,"span",34),e.YNc(15,P,3,1,"div",48),e.YNc(16,L,7,0,"div",49),e.YNc(17,S,3,1,"div",50),e.qZA()}if(2&r){const t=e.oxw();let o;e.xp6(4),e.Q6J("ngClass",e.VKq(10,U,t.otpSent)),e.xp6(2),e.Q6J("ngIf",t.loginFormSubmitted&&(null==t.loginForm||null==(o=t.loginForm.get("phoneNumber"))?null:o.errors)),e.xp6(1),e.Q6J("ngIf",t.userNotFound),e.xp6(1),e.Q6J("hidden",!t.otpSent),e.xp6(4),e.Q6J("ngIf",!t.showOTP),e.xp6(1),e.Q6J("ngIf",t.showOTP),e.xp6(1),e.Q6J("ngIf",t.otpInvalid),e.xp6(1),e.Q6J("ngIf",!t.otpSent&&!t.otpSpinner),e.xp6(1),e.Q6J("ngIf",t.otpSpinner),e.xp6(1),e.Q6J("ngIf",t.showOTPButton&&t.otpSent&&!t.otpSpinner)}}function O(r,i){if(1&r){const t=e.EpF();e.TgZ(0,"span",61),e.NdJ("click",function(){return e.CHM(t),e.oxw().toggleLoginMode("OTP")}),e._uU(1," Login with OTP. "),e.qZA()}}function J(r,i){if(1&r){const t=e.EpF();e.TgZ(0,"span",61),e.NdJ("click",function(){return e.CHM(t),e.oxw().toggleLoginMode("EMAIL")}),e._uU(1," Login with Email. "),e.qZA()}}const E=function(r){return{"pointer-events-none cursor-wait":r}},Q=[{path:"sign-in",component:(()=>{class r{constructor(t,o,n,l){this.acivatedRoute=t,this.route=o,this.router=n,this.authService=l,this.loginAs="ADMIN",this.loginMode="OTP",this.retunUrl="",this.otpValue="",this.showOTPButton=!1,this.showPassword=!1,this.showOTP=!1,this.loginFormSubmitted=!1,this.otpSent=!1,this.otpSpinner=!1,this.otpMode=!0,this.userNotFound=!1,this.otpInvalid=!1}ngOnInit(){let t=this.route.snapshot.queryParams;t.retunUrl&&(this.retunUrl=t.retunUrl),this.environment=m.N,this.buildForm(),this.acivatedRoute.queryParams.subscribe(o=>{})}toggleLoginAs(t){this.loginAs=t}toggleLoginMode(t){this.showPassword=!1,this.showOTP=!1,this.loginFormSubmitted=!1,this.loginFormSubmitted=!1,this.loginMode=t,this.buildForm(),this.otpSent=!1}toggleShowPassword(t,o){var n,l,a,u;switch(t){case"EMAIL":this.showPassword=!o,this.otpMode=!1,o?null===(n=document.getElementById("PASSWORD-INPUT"))||void 0===n||n.setAttribute("type","password"):null===(l=document.getElementById("PASSWORD-INPUT"))||void 0===l||l.setAttribute("type","text");break;case"OTP":this.showOTP=!o,this.otpMode=!0,o?null===(a=document.getElementById("OTP-INPUT"))||void 0===a||a.setAttribute("type","password"):null===(u=document.getElementById("OTP-INPUT"))||void 0===u||u.setAttribute("type","text")}}changePhoneNumber(t){var o,n,l,a,u;if(this.otpSent=!1,null===(o=null==t?void 0:t.target)||void 0===o?void 0:o.value){let B=null===(l=null===(n=null==t?void 0:t.target)||void 0===n?void 0:n.value)||void 0===l?void 0:l.length;(null==t?void 0:t.target.value[B-1].match(/^[0-9]+$/))||(t.target.value=null===(u=null===(a=null==t?void 0:t.target)||void 0===a?void 0:a.value)||void 0===u?void 0:u.slice(0,-1))}}buildForm(){let t={};switch(this.loginMode){case"OTP":t.phoneNumber=new s.NI("",[s.kI.required,this.validateMobilePhoneNumber(10)]);break;case"EMAIL":t.email=new s.NI("",[s.kI.required,this.validateEmail()]),t.password=new s.NI("",[s.kI.required])}this.loginForm=new s.cw(t)}validateMobilePhoneNumber(t){return o=>o.value?o.value.length===t?null:{invalid:!0}:null}validateEmail(){return t=>t.value?/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(t.value)?null:{invalidEmail:!0}:null}sendOtp(){var t;this.loginFormSubmitted=!0,"VALID"===(null===(t=this.loginForm)||void 0===t?void 0:t.status)&&(this.otpSpinner=!0,this.authService.sendOtp({phone:`+91${this.loginForm.value.phoneNumber}`},"").subscribe(l=>{try{l.success?(this.userNotFound=!1,this.otpSpinner=!1,this.otpSent=!0,this.userNotFound=!1,this.otpInvalid=!1):(this.userNotFound=!0,this.otpSpinner=!1,this.otpSent=!1)}catch(a){this.userNotFound=!0,this.otpSpinner=!1,this.otpSent=!1}}))}verifyOtp(){this.loginFormSubmitted=!0,this.otpSpinner=!0,this.authService.validateOtp({otp:this.otpValue,phone:`+91${this.loginForm.value.phoneNumber}`},"").subscribe(n=>{try{n.status&&this.authService.redirectUserAfterLogin(n.token)}catch(l){console.log(l,"errrrrr")}})}signIn(){this.authService.signIn("","").subscribe(n=>{})}otpValueInput(t){var o;t.target.value&&4==(null===(o=t.target.value)||void 0===o?void 0:o.length)?(this.otpValue=t.target.value,this.showOTPButton=!0,this.otpInvalid=!1,this.authService.validateOtp({otp:t.target.value,phone:`+91${this.loginForm.value.phoneNumber}`},"").subscribe(a=>{try{this.authService.redirectUserAfterLogin(a.token)}catch(u){console.log(u,"errrrrr")}})):t.target.value&&t.target.value.length>0&&4!==t.target.value.length&&(this.otpInvalid=!0,this.showOTPButton=!1)}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(d.gz),e.Y36(d.gz),e.Y36(d.F0),e.Y36(_.e))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-login"]],decls:33,vars:11,consts:[[1,"bg-gray-50","dark:bg-gray-900",3,"ngClass"],[1,"flex","flex-col","items-center","justify-center","px-6","py-8","mx-auto","md:h-screen","lg:py-0"],["href","#",1,"flex","items-center","mb-6","text-2xl","font-semibold","text-gray-900","dark:text-white"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 24 24","fill","currentColor",1,"w-8","h-8","mr-2"],["fill-rule","evenodd","d","M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm4.28 10.28a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 1 0-1.06 1.06l1.72 1.72H8.25a.75.75 0 0 0 0 1.5h5.69l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3Z","clip-rule","evenodd"],[1,"w-full","bg-white","rounded-lg","shadow","dark:border","md:mt-0","sm:max-w-md","xl:p-0","dark:bg-gray-800","dark:border-gray-700"],[1,"p-6","space-y-4","md:space-y-4","sm:p-8"],[1,"text-xl","text-center","font-bold","leading-tight","tracking-tight","text-gray-900","md:text-2xl","dark:text-white"],["action","#",1,"space-y-4","md:space-y-6",3,"formGroup"],["class","space-y-3",4,"ngIf"],["class","space-y-3 h-full",4,"ngIf"],[1,"flex","items-center","justify-between"],["class","text-sm font-medium text-primary-600 hover:underline dark:text-primary-500 cursor-pointer",3,"click",4,"ngIf"],[1,"flex","items-center","justify-between","hidden"],[1,"flex","items-start"],[1,"flex","items-center","h-5"],["id","remember","aria-describedby","remember","type","checkbox","required","",1,"w-4","h-4","border","border-gray-300","rounded","bg-gray-50","focus:ring-3","focus:ring-primary-300","dark:bg-gray-700","dark:border-gray-600","dark:focus:ring-primary-600","dark:ring-offset-gray-800"],[1,"ml-3","text-sm"],["for","remember",1,"text-gray-500","dark:text-gray-300"],["href","#",1,"text-sm","font-medium","text-primary-600","hover:underline","dark:text-primary-500"],[1,"text-sm","font-light","text-gray-500","dark:text-gray-400"],["href","#",1,"font-medium","text-primary-600","hover:underline","dark:text-primary-500"],[1,"flex","items-center","justify-center"],[1,"font-medium","text-xs","text-primary-400","dark:text-gray-400"],[1,"space-y-3"],["for","email",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["type","email","name","email","id","email","formControlName","email","placeholder","name@company.com","required","",1,"bg-gray-50","border","border-gray-300","text-gray-900","sm:text-sm","rounded-lg","focus:ring-primary-600","focus:border-primary-600","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500"],[4,"ngIf"],["for","password",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["type","password","name","password","id","PASSWORD-INPUT","placeholder","\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022","formControlName","password","required","",1,"relative","bg-gray-50","border","border-gray-300","text-gray-900","sm:text-sm","rounded-lg","focus:ring-primary-600","focus:border-primary-600","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke-width","1.5","stroke","","stroke","currentColor","class","w-6 h-6 absolute top-9 right-3 cursor-pointer",3,"click",4,"ngIf"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke-width","1.5","stroke","currentColor","class","w-6 h-6 absolute top-9 right-3 cursor-pointer",3,"click",4,"ngIf"],[1,"flex","justify-center"],["type","submit",1,"text-white","bg-gray-800","hover:bg-gray-900","focus:outline-none","focus:ring-4","focus:ring-gray-300","font-medium","rounded-lg","text-sm","px-5","py-2.5","me-2","mb-2","dark:bg-gray-800","dark:hover:bg-gray-700","dark:focus:ring-gray-700","dark:border-gray-700",3,"click"],["class","text-red-500 text-xs text-left",4,"ngIf"],[1,"text-red-500","text-xs","text-left"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke-width","1.5","stroke","","stroke","currentColor",1,"w-6","h-6","absolute","top-9","right-3","cursor-pointer",3,"click"],["stroke-linecap","round","stroke-linejoin","round","d","M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"],["stroke-linecap","round","stroke-linejoin","round","d","M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"],["xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 24 24","stroke-width","1.5","stroke","currentColor",1,"w-6","h-6","absolute","top-9","right-3","cursor-pointer",3,"click"],["stroke-linecap","round","stroke-linejoin","round","d","M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"],[1,"space-y-3","h-full"],[1,"h-full"],[1,"flex","flex-row","items-center","h-full",3,"ngClass"],["type","text","name","phone-number","id","phone-number","formControlName","phoneNumber","placeholder","Phone Number","required","",1,"bg-gray-50","border","border-gray-300","text-gray-900","sm:text-sm","rounded-lg","focus:ring-primary-600","focus:border-primary-600","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500",3,"input"],[1,"relative","items-center",3,"hidden"],["for","otp",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["type","OTP","id","OTP-INPUT","placeholder","\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022","type","password","required","",1,"bg-gray-50","border","border-gray-300","text-gray-900","sm:text-sm","rounded-lg","focus:ring-primary-600","focus:border-primary-600","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500",3,"input"],["class","flex items-center justify-start mt-2 mb-1",3,"hidden",4,"ngIf"],["class","flex justify-center items-center",4,"ngIf"],["class","flex items-center justify-start mt-2 mb-2",3,"hidden",4,"ngIf"],[1,"flex","items-center","justify-start","mt-2","mb-1",3,"hidden"],["type","submit",1,"text-white","bg-gray-800","hover:bg-gray-900","focus:outline-none","focus:ring-4","focus:ring-gray-300","font-medium","rounded-lg","text-sm","px-5","py-2","me-2","mb-2","dark:bg-gray-800","dark:hover:bg-gray-700","dark:focus:ring-gray-700","dark:border-gray-700",3,"click"],[1,"flex","justify-center","items-center"],["role","status"],["aria-hidden","true","viewBox","0 0 100 101","fill","none","xmlns","http://www.w3.org/2000/svg",1,"w-8","h-8","text-gray-200","animate-spin","dark:text-gray-600","fill-blue-600"],["d","M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z","fill","currentColor"],["d","M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z","fill","currentFill"],[1,"sr-only"],[1,"flex","items-center","justify-start","mt-2","mb-2",3,"hidden"],["type","submit",1,"py-2.5","px-5","me-2","mb-2","text-sm","font-medium","text-gray-900","focus:outline-none","bg-white","rounded-lg","border","border-gray-200","hover:bg-gray-100","hover:text-blue-700","focus:z-10","focus:ring-4","focus:ring-gray-200","dark:focus:ring-gray-700","dark:bg-gray-800","dark:text-gray-400","dark:border-gray-600","dark:hover:text-white","dark:hover:bg-gray-700",3,"click"],[1,"text-sm","font-medium","text-primary-600","hover:underline","dark:text-primary-500","cursor-pointer",3,"click"]],template:function(t,o){1&t&&(e.TgZ(0,"section",0),e.TgZ(1,"div",1),e.TgZ(2,"a",2),e.O4$(),e.TgZ(3,"svg",3),e._UZ(4,"path",4),e.qZA(),e._uU(5," One Project "),e.qZA(),e.kcU(),e.TgZ(6,"div",5),e.TgZ(7,"div",6),e.TgZ(8,"h1",7),e._uU(9," Sign in to your account "),e.qZA(),e.TgZ(10,"form",8),e.YNc(11,T,16,4,"div",9),e.YNc(12,M,18,12,"div",10),e.TgZ(13,"div",11),e.YNc(14,O,2,0,"span",12),e.YNc(15,J,2,0,"span",12),e.qZA(),e.TgZ(16,"div",13),e.TgZ(17,"div",14),e.TgZ(18,"div",15),e._UZ(19,"input",16),e.qZA(),e.TgZ(20,"div",17),e.TgZ(21,"label",18),e._uU(22,"Remember me"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(23,"a",19),e._uU(24,"Forgot password?"),e.qZA(),e.qZA(),e.TgZ(25,"p",20),e._uU(26," Don\u2019t have an account yet? "),e.TgZ(27,"a",21),e._uU(28,"Sign up"),e.qZA(),e.qZA(),e.TgZ(29,"div",22),e.TgZ(30,"p",23),e._uU(31),e.ALo(32,"titlecase"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.Q6J("ngClass",e.VKq(9,E,o.otpSpinner)),e.xp6(10),e.Q6J("formGroup",o.loginForm),e.xp6(1),e.Q6J("ngIf","EMAIL"===o.loginMode),e.xp6(1),e.Q6J("ngIf","OTP"===o.loginMode),e.xp6(2),e.Q6J("ngIf","EMAIL"===o.loginMode),e.xp6(1),e.Q6J("ngIf","OTP"===o.loginMode),e.xp6(16),e.hij(" You are logging in as ",e.lcZ(32,7,o.loginAs),". "))},directives:[c.mk,s._Y,s.JL,s.sg,c.O5,s.Fj,s.JJ,s.u,s.Q7],pipes:[c.rS],styles:[""]}),r})()}];let Y=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[d.Bz.forChild(Q)],d.Bz]}),r})(),j=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[c.ez,Y,s.u5,s.UX]]}),r})()}}]);