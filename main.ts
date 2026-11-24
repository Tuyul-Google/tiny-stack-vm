import{mkdirSync,readdirSync,readFileSync,writeFileSync}from'node:fs';
const K='!69&NSglqqqqqqqq???????:???:???q???qqqqqqqqqqqqq#((#!qqqqqqqqqqq:+qqqqqqqqqqqqqq&&5&';
function R(p,q){
 const n=p.length,D=new Int32Array(256),C=new Int32Array(64),M=new Int32Array(256),o=new Uint8Array(65536);
 let s=0,c=0,l=0,i=0,pc=0,t=0;
 const d=e=>[o.slice(0,l),e];
 for(;;){
  if(t===1e6)return d(10);
  if(pc<0||pc>=n)return d(9);
  const x=p[pc],v=K.charCodeAt(x)-33;
  if(x>83||v>79)return d(5);
  const m=v%5,u=(v/5|0)%4,w=v/20|0;
  if(pc+m>=n)return d(9);
  t++;
  const nx=pc+1+m;
  if(s<u)return d(2);
  if(s-u+w>256)return d(3);
  pc=nx;
  switch(x){
   case 0:return d(0);
   case 1:D[s++]=(p[nx-1]<<24)>>24;break;
   case 2:D[s++]=p[nx-4]|p[nx-3]<<8|p[nx-2]<<16|p[nx-1]<<24;break;
   case 3:s--;break;
   case 4:D[s]=D[s-1];s++;break;
   case 5:{const a=D[s-1];D[s-1]=D[s-2];D[s-2]=a;break;}
   case 6:D[s]=D[s-2];s++;break;
   case 7:{const a=D[s-3];D[s-3]=D[s-2];D[s-2]=D[s-1];D[s-1]=a;break;}
   case 23:D[s-1]=-D[s-1]|0;break;
   case 27:D[s-1]=~D[s-1];break;
   case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:case 26:case 28:case 29:case 30:case 32:case 33:case 34:{
    const b=D[s-1],a=D[s-2];
    let r;
    switch(x){
     case 16:r=a+b|0;break;
     case 17:r=a-b|0;break;
     case 18:r=Math.imul(a,b);break;
     case 19:if(!b)return d(4);r=a===-2147483648&&b===-1?a:a/b|0;break;
     case 20:if(!b)return d(4);r=b===-1?0:a%b|0;break;
     case 21:if(!b)return d(4);r=Math.floor((a>>>0)/(b>>>0))|0;break;
     case 22:if(!b)return d(4);r=(a>>>0)%(b>>>0)|0;break;
     case 24:r=a&b;break;
     case 25:r=a|b;break;
     case 26:r=a^b;break;
     case 28:r=a<<(b&31);break;
     case 29:r=a>>(b&31);break;
     case 30:r=a>>>(b&31)|0;break;
     case 32:r=a===b?1:0;break;
     case 33:r=a<b?1:0;break;
     case 34:r=(a>>>0)<(b>>>0)?1:0;break;
    }
    s-=2;D[s++]=r;break;
   }
   case 48:case 49:case 50:{
    const e=(p[nx-2]|p[nx-1]<<8)<<16>>16;
    let f=1;
    if(x!==48){const a=D[--s];f=x===49?a===0:a!==0;}
    if(f)pc=nx+e;
    break;
   }
   case 51:
    if(c===64)return d(7);
    C[c++]=nx;pc=p[nx-2]|p[nx-1]<<8;break;
   case 52:
    if(!c)return d(8);
    pc=C[--c];break;
   case 64:{
    const a=D[s-1];
    if(a<0||a>255)return d(6);
    D[s-1]=M[a];break;
   }
   case 65:{
    const a=D[s-1],b=D[s-2];
    if(a<0||a>255)return d(6);
    s-=2;M[a]=b;break;
   }
   case 80:{
    const a=String(D[s-1]);
    if(l+a.length>65536)return d(11);
    s--;
    for(let j=0;j<a.length;j++)o[l++]=a.charCodeAt(j);
    break;
   }
   case 81:
    if(l+1>65536)return d(11);
    o[l++]=D[--s]&255;break;
   case 82:D[s++]=i<q.length?q[i++]:-1;break;
   case 83:return d(D[--s]&255);
  }
 }
}
const I=process.env.MAKEFUN_INPUT_DIR??'/input',O=process.env.MAKEFUN_OUTPUT_DIR??'/output';
for(const d of readdirSync(I).sort()){
 const r=R(readFileSync(I+'/'+d+'/program.bin'),readFileSync(I+'/'+d+'/input.bin'));
 mkdirSync(O+'/'+d,{recursive:true});
 writeFileSync(O+'/'+d+'/stdout.bin',r[0]);
 writeFileSync(O+'/'+d+'/exit.txt',r[1]+'\n');
}
