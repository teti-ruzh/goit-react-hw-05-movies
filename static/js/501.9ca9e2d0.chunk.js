"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[501],{501:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var r=n(413),c=n(439),i=n(791),o=n(689),a=n(87),s=n(207),u="MovieInfo_thumb__5JE9O",l="MovieInfo_info__z1mCF",d=n(184),f=function(e){var t=e.overview,n=e.title,r=e.vote_average,c=e.release_date,i=e.genres,o=e.poster_path,a=Math.round(10*r),s=c.slice(0,4),f=i.flatMap((function(e){return e.name})).join(", ");return(0,d.jsxs)("div",{className:u,children:[(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w300/".concat(o),alt:n}),(0,d.jsxs)("div",{className:l,children:[(0,d.jsxs)("h2",{children:[n," (",s,")"]}),(0,d.jsxs)("p",{children:["User score: ",a,"%"]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h3",{children:"Overview"}),(0,d.jsx)("p",{children:t})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h3",{children:"Genres"}),(0,d.jsx)("p",{children:f})]})]})]})},h=n(26),v="MovieDetails_back__D7G-9",j="MovieDetails_addInfo__dNV2h",p="MovieDetails_infoLink__zQOya",m=function(){var e,t,n=(0,i.useState)(null),u=(0,c.Z)(n,2),l=u[0],m=u[1],g=(0,o.TH)(),b=(0,i.useRef)(null!==(e=null===(t=g.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/"),_=(0,o.UO)().movieId;return(0,i.useEffect)((function(){_&&s.Z.getMovieDetails(_).then((function(e){m(e)})).catch((function(e){console.log(e)}))}),[_]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(a.Link,{to:b.current,className:v,children:"Go back"}),l&&(0,d.jsx)(f,(0,r.Z)({},l)),(0,d.jsxs)("div",{children:[(0,d.jsx)("h3",{children:"Additional information"}),(0,d.jsxs)("ul",{className:j,children:[(0,d.jsx)("li",{children:(0,d.jsx)(a.Link,{to:"cast",className:p,children:"Cast"})}),(0,d.jsx)("li",{children:(0,d.jsx)(a.Link,{to:"reviews",className:p,children:"Reviews"})})]})]}),(0,d.jsx)(i.Suspense,{fallback:(0,d.jsx)(h.Z,{}),children:(0,d.jsx)(o.j3,{})})]})}},207:function(e,t,n){var r=n(243),c="f6a9a085418b1b5e9d2b715abdfccbe6",i="https://api.themoviedb.org/3/",o={getTrendingMovies:function(){return r.Z.get("".concat(i,"trending/movie/day?api_key=").concat(c)).then((function(e){return e.data.results}))},getSearchedMovie:function(e){return r.Z.get("".concat(i,"search/movie?query=").concat(e,"&api_key=").concat(c)).then((function(e){return e.data.results}))},getMovieDetails:function(e){return r.Z.get("".concat(i,"movie/").concat(e,"?api_key=").concat(c)).then((function(e){return e.data}))},getMovieCast:function(e){return r.Z.get("".concat(i,"movie/").concat(e,"/credits?api_key=").concat(c)).then((function(e){return e.data.cast}))},getMovieReviews:function(e){return r.Z.get("".concat(i,"movie/").concat(e,"/reviews?api_key=").concat(c)).then((function(e){return e.data.results}))}};t.Z=o},413:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(942);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}}}]);
//# sourceMappingURL=501.9ca9e2d0.chunk.js.map