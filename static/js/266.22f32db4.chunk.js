"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[266],{858:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(413),c=n(87),o={movieImg:"MoviesGalleryItem_movieImg__zkDsJ",movieLink:"MoviesGalleryItem_movieLink__eAdc1"},i=n(184),a=function(e){var t=e.title,n=e.poster_path,r=e.link,a=e.location;return(0,i.jsx)("li",{className:o.movitThumb,children:(0,i.jsxs)(c.Link,{to:r,state:{from:a},className:o.movieLink,children:[(0,i.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(n),alt:t,className:o.movieImg}),(0,i.jsx)("p",{children:t})]})})},s="MoviesGallery_gallery__XrCR3",u=n(791),l=function(e){var t=e.movies,n=e.link,c=e.location;return(0,i.jsx)("ul",{className:s,children:t.map((function(e){return(0,u.createElement)(a,(0,r.Z)((0,r.Z)({},e),{},{key:e.id,link:"".concat(n).concat(e.id),location:c}))}))})}},266:function(e,t,n){n.r(t);var r=n(439),c=n(791),o=n(207),i=n(858),a=n(184);t.default=function(){var e=(0,c.useState)(null),t=(0,r.Z)(e,2),n=t[0],s=t[1];return(0,c.useEffect)((function(){o.Z.getTrendingMovies().then((function(e){s(e)})).catch((function(e){console.log(e)}))}),[]),(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{children:"Trending today"}),n&&(0,a.jsx)(i.Z,{movies:n,link:"movies/"})]})}},207:function(e,t,n){var r=n(243),c="f6a9a085418b1b5e9d2b715abdfccbe6",o="https://api.themoviedb.org/3/",i={getTrendingMovies:function(){return r.Z.get("".concat(o,"trending/movie/day?api_key=").concat(c)).then((function(e){return e.data.results}))},getSearchedMovie:function(e){return r.Z.get("".concat(o,"search/movie?query=").concat(e,"&api_key=").concat(c)).then((function(e){return e.data.results}))},getMovieDetails:function(e){return r.Z.get("".concat(o,"movie/").concat(e,"?api_key=").concat(c)).then((function(e){return e.data}))},getMovieCast:function(e){return r.Z.get("".concat(o,"movie/").concat(e,"/credits?api_key=").concat(c)).then((function(e){return e.data.cast}))},getMovieReviews:function(e){return r.Z.get("".concat(o,"movie/").concat(e,"/reviews?api_key=").concat(c)).then((function(e){return e.data.results}))}};t.Z=i},413:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(942);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}}}]);
//# sourceMappingURL=266.22f32db4.chunk.js.map