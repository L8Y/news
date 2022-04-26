import React from "react";

function NewsFeed(props) {
    return (
        <section className="grid">
            <div className="article_grid">

                {props.image == null ? <img className="article_image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB-pMxYjOH6uKIctos7BwcNRikwe76JtQ-L3lJmdBhf425uckRryKU01vzfgBJ_Eeih-c&usqp=CAU" alt="img from the article" /> : <img className="article_image" src={props.image} alt="Iof the article" />}
                <div className="article_content">
                    <a href={props.link} target="_blank" rel="noopener noreferrer">
                        <b className="article_title">{props.title}</b>
                    </a>
                    <p className="article_description">{props.description}</p>

                </div>

            </div>
        </section>

    );
}

export default NewsFeed;