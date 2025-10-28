(function () {
  const example = document.getElementById('example')
  const cw1 = document.getElementById('cw1')
  const cw2 = document.getElementById('cw2')
  const cw3 = document.getElementById('cw3')
  const answer = document.getElementById('answer')

  example.addEventListener("click", function () {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(array => {
        console.log(array)
        answer.innerHTML = JSON.stringify(array);
      })
  })

  cw1.addEventListener("click", function () {
    //TODO
  })

  cw2.addEventListener("click", async function () {
      const popup = document.createElement('div');
      popup.classList.add('popup');
      const text = document.createElement('span');
      text.textContent = "Loading...";
      popup.appendChild(text);
  
      document.body.appendChild(popup);

      const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());
      console.log(posts);
      
      console.log(posts[5].userId);
      const list = posts.map(post => {
        const li = document.createElement('li');
        li.classList.add('post');

        const title = document.createElement('h3');
        const body = document.createElement('span');
        title.textContent = post.title;
        body.textContent = post.body;

        li.appendChild(title);
        li.appendChild(body);
        return li;
      });

      const ul = document.createElement('ul');
      list.forEach(li => {
        ul.appendChild(li);
      });

      answer.innerHTML = "";
      answer.appendChild(ul);
      popup.remove();
    
  })

  cw3.addEventListener("click", function () {
    //TODO
  })

})();
