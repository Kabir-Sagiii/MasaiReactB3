import { useState } from "react";

function Post(props) {
  const [posts, setPost] = useState([]);

  const getPost = async () => {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //  setPost(data)
    //   });

    var res = await fetch("https://jsonplaceholder.typicode.com/posts");
    var postInfo = await res.json();
    console.log(postInfo);
    if (postInfo.length === 0) {
    } else {
      setPost(postInfo);
    }
  };
  return (
    <div style={{ margin: "100px" }}>
      <h2>Users Posts Information</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt expedita,
        quod sequi laborum ad, delectus ex quo laudantium itaque quibusdam
        dignissimos ipsa in voluptate hic commodi est accusamus deserunt aut ab
        explicabo eum possimus culpa nobis. Necessitatibus optio cumque eveniet
        facere, minus quia soluta porro mollitia temporibus ipsa accusantium
        delectus excepturi eius assumenda, eligendi ut inventore sunt molestias
        sed commodi aliquam? Exercitationem corporis beatae sed voluptate?
        Repudiandae id explicabo tempora voluptas porro odio earum impedit? Amet
        nam at quos dicta accusamus quasi tempora provident laboriosam quae
        voluptatem cum eligendi itaque magnam, voluptatum dolorem nihil!
        Adipisci vel consectetur at cupiditate ab quas nihil, laboriosam fugit
        impedit dicta laudantium eius atque qui, ipsum eaque rem aspernatur ex
        fugiat aliquam quisquam ipsam! Numquam ipsum aut pariatur nam possimus.
        Optio odio nam sit ratione laudantium esse corporis nulla sapiente
        dolores, sed hic ipsa adipisci exercitationem, fuga ut rerum facilis
        dicta dolor. In fugiat soluta, non consequuntur delectus culpa eum
        cumque minus. Praesentium exercitationem fugiat laboriosam odit. Non ea
        sed sequi doloremque accusamus maxime iusto tempore a, iure delectus
        laboriosam aperiam vero ex ad dolorum iste. Voluptatem illum eveniet
        maxime facilis in sequi, dolore provident aperiam voluptatibus
        praesentium ducimus asperiores fugiat tenetur perferendis odio vel?
      </p>
      <button onClick={getPost}>Get Posts</button>

      <ul>
        {posts.length > 0 &&
          posts.map((post) => {
            return <li>{post.title}</li>;
          })}
      </ul>
    </div>
  );
}

export default Post;
