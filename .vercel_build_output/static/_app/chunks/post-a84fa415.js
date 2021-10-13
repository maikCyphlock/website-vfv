var m=Object.defineProperty,c=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var n=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable;var i=(t,e,o)=>e in t?m(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,a=(t,e)=>{for(var o in e||(e={}))u.call(e,o)&&i(t,o,e[o]);if(n)for(var o of n(e))g.call(e,o)&&i(t,o,e[o]);return t},r=(t,e)=>c(t,h(e));import{Z as b}from"./vendor-159a1ba9.js";var f={html:`<h2 id="emphasis">Emphasis</h2>
<p><strong>This is bold text</strong></p>
<p><strong>This is bold text</strong></p>
<p><em>This is italic text</em></p>
<p><em>This is italic text</em></p>
<p><del>Strikethrough</del></p>
<h2 id="blockquotes">Blockquotes</h2>
<blockquote>
  <p>Blockquotes can also be nested\u2026</p>
  <blockquote>
    <p>\u2026by using additional greater-than signs right next to each other\u2026</p>
    <blockquote>
      <p>\u2026or with spaces between arrows.</p>
    </blockquote>
  </blockquote>
</blockquote>
<h2 id="code">Code</h2>
<p>Inline <code>code</code></p>
<p>Indented code</p>
<pre><code>// Some comments
line 1 of code
line 2 of code
line 3 of code</code></pre>
<p>Block code "fences"</p>
<pre><code>Sample text here...</code></pre>
<p>Syntax highlighting</p>
<pre><code class="js language-js">var foo = function (bar) {
  return bar++;
};

console.log(foo(5));</code></pre>
<h2 id="tables">Tables</h2>
<table>
<thead>
<tr>
<th id="option">Option</th>
<th id="description">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>data</td>
<td>path to data files to supply the data that will be passed into templates.</td>
</tr>
<tr>
<td>engine</td>
<td>engine to be used for processing templates. Handlebars is the default.</td>
</tr>
<tr>
<td>ext</td>
<td>extension to be used for dest files.</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th id="option" style="text-align:right;">Option</th>
<th id="description" style="text-align:right;">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:right;">data</td>
<td style="text-align:right;">path to data files to supply the data that will be passed into templates.</td>
</tr>
<tr>
<td style="text-align:right;">engine</td>
<td style="text-align:right;">engine to be used for processing templates. Handlebars is the default.</td>
</tr>
<tr>
<td style="text-align:right;">ext</td>
<td style="text-align:right;">extension to be used for dest files.</td>
</tr>
</tbody>
</table>
<h2 id="images">Images</h2>
<p><img src="/potrait.jpg" alt="Minion" /></p>`,metadata:{date:"2021-10-12T00:00:00.000Z",summary:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies congue erat, ut tempor felis euismod imperdiet.",title:"eventos nuevos",author:"maikol aguilar"},filename:"eventos.md",path:"/home/maikcyphlock/Escritorio/website-vfv/src/content/eventos.md"},k={html:"<p>Este es mi primer documento con formato Markdown. Lo guardamos con el nombre que quieras, por ejemplo <code>primera-prueba.md</code></p>",metadata:{date:"2021-01-18T00:00:00.000Z",summary:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies congue erat, ut tempor felis euismod imperdiet.",title:"\xA1Hola Alex Tom\xE1s!",author:"maikol aguilar"},filename:"hola.md",path:"/home/maikcyphlock/Escritorio/website-vfv/src/content/hola.md"},y={html:"<p>Este es mi primer documento con formato Markdown. Lo guardamos con el nombre que quieras, por ejemplo <code>primera-prueba.md</code></p>",metadata:{date:"2021-10-05T00:00:00.000Z",summary:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ultricies congue erat, ut tempor felis euismod imperdiet.",title:"Portuguesa dando la talla",author:"maikol aguilar"},filename:"portuguesa-semanal.md",path:"/home/maikcyphlock/Escritorio/website-vfv/src/content/portuguesa-semanal.md"},x=[f,k,y];const s=x.map(({filename:t,html:e,metadata:o})=>{const d=t.replace(/\.md$/,"");let l=new Date(o.date);const p=b(l).format("MMM Do YY");return r(a({},o),{filename:t,html:e,permalink:d,date:p})});console.log(s.reduce(t=>t>t));function w(t){return s.find(e=>e.permalink===t)}export{w as f,s as p};
