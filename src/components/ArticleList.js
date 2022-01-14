import React from "react";
import Article from "./Article";

function ArticleList(blogData){
    const postList = blogData.posts.map((post) => {
        return (
            <Article
            key={post.id}
            title={post.title}
            date={post.date}
            preview={post.preview}
            minutes={post.minutes}
            />
        )
    })
    return(
        <main>
            {postList}
        </main>
    )
}
export default ArticleList;


