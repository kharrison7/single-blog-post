const blogPost = {
  title: "The Amazing Sloth",
  meta: {
    date: "May 2, 2017"
  },
  post: {
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2e/MC_Drei-Finger-Faultier.jpg",
    content: "Sloths make very good habitats for other organisms, and a single sloth may be home to several species of moths, beetles, cockroaches, fungi, ciliates, and algae."
  },
  site: {
    name: "Wikipedia",
    url: "https://en.wikipedia.org/wiki/Sloth"
  }
};

// Start Editing Here

// Made August 2nd 2017.

// let testNode = document.getElementsByClassName("container");
// let newfile = document.createElement("h2");
// let content = document.createTextNode("The Amazing Sloth");
// testNode[0].appendChild(newfile);
// newfile.appendChild(content);
// console.log("test");


let x = document.querySelector(".container");
let c = `<article>
  <h2>${blogPost.title}</h2>
  <div class="meta">
    <span class="date">Written on ${blogPost.meta.date}</span>
  </div>
  <div class="post">
    <img src=${blogPost.post.image}>
    ${blogPost.post.content}
  </div>
  <div class="site">
    Part of this content was pulled from <a href=${blogPost.site.url}>${blogPost.site.name}</a>
  </div>
</article>`
x.innerHTML = c;
