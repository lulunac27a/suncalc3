/*
 Copyright (c) 2011, Vladimir Agafonkin
 SunCalc is an Open Source JavaScript library for calculating sun position and sunlight phases for the given location and time.
 See https://github.com/mourner/suncalc for source code and more information.
*/
(function(){var z,A,B,C,D,E,h,i,F,l,j,b,s,m,G,t,H,u,v,I,J,K,L,w,x,y,n,g,f,M,c,N,O,P,o;i=typeof exports!=="undefined"&&exports!==null?exports:this.SunCalc={};g=Math;h=g.PI;c=g.sin;b=g.cos;N=g.tan;l=g.asin;F=g.acos;j=g.atan2;M=g.round;f=h/180;C=f*357.5291;D=f*0.98560028;z=f*1.9148;A=f*0.02;B=f*3.0E-4;E=f*102.9372;m=f*23.45;O=f*280.16;P=f*360.9856235;s=function(a){return a.valueOf()/864E5-0.5+2440588};n=function(a){return new Date((a+0.5-2440588)*864E5)};w=function(a){return C+D*(a-2451545)};v=function(a){return z*
c(a)+A*c(2*a)+B*c(3*a)};u=function(a,d){return a+E+d+h};y=function(a){return l(c(a)*c(m))};J=function(a,d){return M(a-2451545-9.0E-4-d/(2*h))};t=function(a,d,e){return 2451545.0009+(a+d)/(2*h)+e};x=function(a,d,e){return a+0.0053*c(d)+-0.0069*c(2*e)};I=function(a,d,e){return F((c(a)-c(d)*c(e))/(b(d)*b(e)))};K=function(a){return j(c(a)*b(m),b(a))};L=function(a,d){return O+P*(a-2451545)-d};H=function(a,d,e){return j(c(a),b(a)*c(d)-N(e)*b(d))};G=function(a,d,e){return l(c(d)*c(e)+b(d)*b(e)*b(a))};o=
[[-0.83,"sunrise","sunset"],[-0.3,"sunriseEnd","sunsetStart"],[-6,"dawn","dusk"],[-12,"nauticalDawn","nauticalDusk"],[-18,"night","nightEnd"],[6,"goldenHourEnd","goldenHour"]];i.addTime=function(a,d,e){return o.push([a,d,e])};i.getTimes=function(a,d,e){var c,k,b,g,h,i,l,j,p,q,m,r,e=f*-e;d*=f;a=s(a);j=J(a,e);k=t(0,e,j);a=w(k);c=v(a);c=u(a,c);h=y(c);k=x(k,a,c);p={solarNoon:n(k)};for(q=0,m=o.length;q<m;q++)r=o[q],b=r[0],l=r[1],i=r[2],b*=f,b=I(b,d,h),b=t(b,e,j),g=x(b,a,c),b=k-(g-k),p[i]=n(g),p[l]=n(b);
return p};return i.getSunPosition=function(a,d,e){var c,b,e=f*-e;d*=f;a=s(a);b=w(a);c=v(b);b=u(b,c);c=y(b);b=K(b);a=L(a,e)-b;e=H(a,d,c);d=G(a,d,c);return{azimuth:e,altitude:d}}})();