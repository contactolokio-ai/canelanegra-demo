// DEMO: datos en localStorage de este navegador. En producción: Supabase (ver NOTAS.md).
const FID={K:'cn_fid_demo',
load(){try{return JSON.parse(localStorage.getItem(this.K))||null}catch(e){return null}},
db(){let d=this.load();if(!d){d={meta:10,premio:'Un capuchino o americano gratis',correo:'',clientes:{},log:[]};this.save(d)}return d},
save(d){localStorage.setItem(this.K,JSON.stringify(d))},
limpia(r){return (r||'').toUpperCase().replace(/[^0-9K]/g,'')},
valido(r){r=this.limpia(r);if(r.length<2)return false;const c=r.slice(0,-1),dv=r.slice(-1);if(!/^\d{6,8}$/.test(c))return false;let s=0,m=2;for(let i=c.length-1;i>=0;i--){s+=+c[i]*m;m=m==7?2:m+1}const e=11-s%11;return dv==(e==11?'0':e==10?'K':String(e))},
fmt(r){r=this.limpia(r);const c=r.slice(0,-1).replace(/\B(?=(\d{3})+(?!\d))/g,'.');return c+'-'+r.slice(-1)}};
