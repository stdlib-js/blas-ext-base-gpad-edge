"use strict";var b=function(u,r){return function(){try{return r||u((r={exports:{}}).exports,r),r.exports}catch(o){throw (r=0, o)}};};var y=b(function(I,E){
function z(u,r,o,i,n,g,e,c,x){var p,q,t,v,s,a,l,f;for(p=i.data,q=e.data,t=i.accessors[0],v=e.accessors[1],l=t(p,g),a=x,f=0;f<r;f++)v(q,a,l),a+=c;for(s=g,f=0;f<u;f++)v(q,a,t(p,s)),a+=c,s+=n;for(l=t(p,s-n),f=0;f<o;f++)v(q,a,l),a+=c;return e}E.exports=z
});var d=b(function(J,m){
var P=require('@stdlib/array-base-arraylike2object/dist'),A=y();function B(u,r,o,i,n,g,e,c,x){var p,q,t,v,s,a;if(u<=0)return e;if(r<0&&(r=0),o<0&&(o=0),p=P(i),q=P(e),p.accessorProtocol||q.accessorProtocol)return A(u,r,o,p,n,g,q,c,x),e;for(s=i[g],v=x,a=0;a<r;a++)e[v]=s,v+=c;for(t=g,a=0;a<u;a++)e[v]=i[t],v+=c,t+=n;for(s=i[t-n],a=0;a<o;a++)e[v]=s,v+=c;return e}m.exports=B
});var h=b(function(K,R){
var O=require('@stdlib/strided-base-stride2offset/dist'),C=d();function D(u,r,o,i,n,g,e){var c,x;return r<0&&(r=0),o<0&&(o=0),c=O(u,n),x=O(u+r+o,e),C(u,r,o,i,n,c,g,e,x)}R.exports=D
});var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),w=h(),G=d();F(w,"ndarray",G);module.exports=w;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
