(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[980],{623:function(t,e,r){"use strict";r.r(e),r.d(e,{__N_SSG:function(){return a},default:function(){return l}});var i=r(5893),n=(r(7294),r(6675)),s=r(5345);function o(t){var e=t.mainFeaturedPost,r=t.featuredPosts,o=t.posts,a=t.category;return(0,i.jsx)(n.Z,{mainFeaturedPost:e,featuredPosts:r,children:(0,i.jsx)(s.Z,{title:"\u8a18\u4e8b\u4e00\u89a7",posts:o,category:a})})}var a=!0;function l(t){var e=t.posts,r=t.category;return(0,i.jsx)(o,{posts:e,category:r})}},5345:function(t,e,r){"use strict";r.d(e,{Z:function(){return x}});var i=r(5893),n=(r(7294),r(9586)),s=r(7272),o=r(8303),a=r(9378),l=r(8554),c=r(5022),u=r(5845),d=r(1163);function h(t){var e=t.post,r=(0,d.useRouter)();return(0,i.jsx)(n.ZP,{item:!0,xs:12,children:(0,i.jsx)(l.Z,{component:"a",onClick:function(){r.push("/blog/".concat(e.id))},children:(0,i.jsxs)(a.Z,{sx:{display:"flex",height:136},children:[(0,i.jsxs)(c.Z,{sx:{flex:1},children:[(0,i.jsx)(s.Z,{component:"h2",variant:"h5",children:e.title}),(0,i.jsx)(s.Z,{variant:"subtitle1",color:"text.secondary",children:e.date}),(0,i.jsx)(s.Z,{variant:"subtitle1",paragraph:!0,children:e.description})]}),(0,i.jsx)(u.Z,{component:"img",sx:{width:160,display:{xs:"none",sm:"block"},objectFit:"cover"},image:e.featuredImage.url,alt:e.imageLabel})]})})})}function x(t){var e=t.posts,r=t.title,a=t.category;return(0,i.jsxs)(n.ZP,{item:!0,xs:12,md:8,children:[(0,i.jsxs)(s.Z,{variant:"h6",gutterBottom:!0,children:[a&&"["+a+"]\u306b\u95a2\u3059\u308b",r]}),(0,i.jsx)(o.Z,{sx:{mb:2}}),(0,i.jsx)(n.ZP,{container:!0,spacing:4,children:e.map((function(t){return(0,i.jsx)(h,{post:t},t.title)}))})]})}},6675:function(t,e,r){"use strict";r.d(e,{Z:function(){return E}});var i=r(5893),n=r(7294),s=r(8923),o=r(9586),a=r(7642),l=r(1992),c=r(1788),u=r(8995),d=r(7272),h=r(6280),x=r(1664);function p(t){var e=t.sections,r=t.title;return(0,i.jsxs)(n.Fragment,{children:[(0,i.jsxs)(l.Z,{sx:{borderBottom:1,borderColor:"divider"},children:[(0,i.jsx)(d.Z,{component:"h2",variant:"h5",color:"inherit",align:"center",noWrap:!0,sx:{flex:1},children:(0,i.jsx)(x.default,{href:"/",passHref:!0,children:(0,i.jsx)(h.Z,{underline:"hover",children:r})})}),(0,i.jsx)(c.Z,{children:(0,i.jsx)(u.Z,{})})]}),(0,i.jsx)(l.Z,{component:"nav",variant:"dense",sx:{justifyContent:"space-between",overflowX:"auto"},children:e.map((function(t){return(0,i.jsx)(x.default,{href:"/".concat(t.url),passHref:!0,children:(0,i.jsx)(h.Z,{color:"inherit",noWrap:!0,variant:"body2",sx:{p:1,flexShrink:0},children:t.title},t.title)},t.title)}))})]})}var m=r(6112),g=r(5894);function j(t){var e=t.post;return(0,i.jsxs)(m.Z,{sx:{position:"relative",backgroundColor:"grey.800",color:"#fff",mb:4,backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundImage:"url(".concat(e.image,")")},children:[(0,i.jsx)("img",{style:{display:"none"},src:e.image,alt:e.imageText}),(0,i.jsx)(g.Z,{sx:{position:"absolute",top:0,bottom:0,right:0,left:0,backgroundColor:"rgba(0,0,0,.3)"}}),(0,i.jsx)(o.ZP,{container:!0,children:(0,i.jsx)(o.ZP,{item:!0,md:6,children:(0,i.jsxs)(g.Z,{sx:{position:"relative",p:{xs:3,md:6},pr:{md:0}},children:[(0,i.jsx)(d.Z,{component:"h1",variant:"h3",color:"inherit",gutterBottom:!0,children:e.title}),(0,i.jsx)(d.Z,{variant:"h5",color:"inherit",paragraph:!0,children:e.description}),(0,i.jsx)(x.default,{href:"/blog/".concat(e.id),passHref:!0,children:(0,i.jsx)(h.Z,{variant:"subtitle1",children:e.linkText})})]})})})]})}var f=r(9378),Z=r(8554),v=r(5022),b=r(5845),y=r(1163);function P(t){var e=t.post,r=(0,y.useRouter)();return(0,i.jsx)(o.ZP,{item:!0,xs:12,md:6,children:(0,i.jsx)(Z.Z,{component:"a",onClick:function(){r.push("/blog/".concat(e.id))},children:(0,i.jsxs)(f.Z,{sx:{display:"flex",height:160},children:[(0,i.jsxs)(v.Z,{sx:{flex:1},children:[(0,i.jsx)(d.Z,{component:"h2",variant:"h5",children:e.title}),(0,i.jsx)(d.Z,{variant:"subtitle1",color:"text.secondary",children:e.date}),(0,i.jsx)(d.Z,{variant:"subtitle1",paragraph:!0,children:e.description.substring(0,30)}),(0,i.jsx)(d.Z,{variant:"subtitle1",color:"primary"})]}),(0,i.jsx)(b.Z,{component:"img",sx:{width:160,display:{xs:"none",sm:"block"}},image:e.image,alt:e.imageLabel})]})})})}var k=r(6669);function _(t){var e=t.archives,r=t.description,n=t.social,s=t.title;return(0,i.jsxs)(o.ZP,{item:!0,xs:12,md:4,children:[(0,i.jsxs)(m.Z,{elevation:0,sx:{p:2,bgcolor:"grey.200"},children:[(0,i.jsx)(d.Z,{variant:"h6",gutterBottom:!0,children:s}),(0,i.jsx)(d.Z,{children:r})]}),(0,i.jsx)(d.Z,{variant:"h6",gutterBottom:!0,sx:{mt:3},children:"Archives"}),e.map((function(t){return(0,i.jsx)(h.Z,{display:"block",variant:"body1",href:t.url,children:t.title},t.title)})),(0,i.jsx)(d.Z,{variant:"h6",gutterBottom:!0,sx:{mt:3},children:"Social"}),n.map((function(t){return(0,i.jsx)(h.Z,{display:"block",variant:"body1",href:"#",sx:{mb:.5},children:(0,i.jsxs)(k.Z,{direction:"row",spacing:1,alignItems:"center",children:[(0,i.jsx)(t.icon,{}),(0,i.jsx)("span",{children:t.name})]})},t.name)}))]})}function w(){return(0,i.jsxs)(d.Z,{variant:"body2",sx:{color:"secondary.light"},align:"center",children:["Copyright \xa9 ",(0,i.jsx)(h.Z,{color:"inherit",href:"https://paths-are.com/",children:"Paths-are \u30d1\u30b9\u30a2 Shinkawa Shinji"})," ",(new Date).getFullYear(),"."]})}function C(t){var e=t.description,r=t.title;return(0,i.jsx)(g.Z,{component:"footer",color:"secondary.main",sx:{bgcolor:"#20232a",mt:2,py:6},children:(0,i.jsxs)(a.Z,{maxWidth:"lg",children:[(0,i.jsx)(d.Z,{variant:"h6",align:"center",gutterBottom:!0,children:r}),(0,i.jsx)(d.Z,{variant:"subtitle1",align:"center",component:"p",sx:{color:"secondary.light"},children:e}),(0,i.jsx)(w,{})]})})}var S=r(2516),B=r(3792),F=r(4704),N={title:"About",description:"Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",archives:[{title:"March 2020",url:"#"},{title:"February 2020",url:"#"},{title:"January 2020",url:"#"},{title:"November 1999",url:"#"},{title:"October 1999",url:"#"},{title:"September 1999",url:"#"},{title:"August 1999",url:"#"},{title:"July 1999",url:"#"},{title:"June 1999",url:"#"},{title:"May 1999",url:"#"},{title:"April 1999",url:"#"}],social:[{name:"GitHub",icon:S.Z},{name:"Twitter",icon:F.Z},{name:"Facebook",icon:B.Z}]},T=[{title:"Technology",url:"category/technology"},{title:"Design",url:"category/design"},{title:"Culture",url:"category/culture"},{title:"Business",url:"category/business"},{title:"Politics",url:"category/politics"},{title:"Opinion",url:"category/opinion"},{title:"Science",url:"category/science"},{title:"Health",url:"category/health"},{title:"Style",url:"category/style"},{title:"Travel",url:"category/travel"}];function E(t){var e=t.mainFeaturedPost,r=t.featuredPosts;return(0,i.jsxs)(n.Fragment,{children:[(0,i.jsx)(s.ZP,{}),(0,i.jsxs)(a.Z,{maxWidth:"lg",children:[(0,i.jsx)(p,{title:"Blog",sections:T}),(0,i.jsxs)("main",{children:[void 0!==e&&null!==e?(0,i.jsx)(j,{post:e}):null,void 0!==r&&null!==e?(0,i.jsx)(o.ZP,{container:!0,spacing:4,children:r.map((function(t){return(0,i.jsx)(P,{post:t},t.title)}))}):null,(0,i.jsxs)(o.ZP,{container:!0,spacing:5,sx:{mt:3},children:[t.children,(0,i.jsx)(_,{title:N.title,description:N.description,archives:N.archives,social:N.social})]})]})]}),(0,i.jsx)(C,{title:"\u30d1\u30b9\u30a2\u306e\u958b\u767a\u8a18\u9332",description:"\uff5e\u306b\u95a2\u3059\u308b\u60c5\u5831\u3092\u767a\u4fe1\u3057\u3066\u3044\u307e\u3059\u3002"})]})}},3717:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/category/[categoryId]",function(){return r(623)}])}},function(t){t.O(0,[777,774,888,179],(function(){return e=3717,t(t.s=e);var e}));var e=t.O();_N_E=e}]);