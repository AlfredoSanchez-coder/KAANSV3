const topics = [
    {
        title: "Lorem, ipsum.",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil molestiae porro laboriosam tenetur, recusandae ipsam ab ipsa fuga nam culpa adipisci quidem laudantium non deleniti itaque sint asperiores laborum in!",
    },
    {
        title: "Lorem",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus error ea cumque provident minus quaerat, obcaecati voluptatem ratione exercitationem sed asperiores, nostrum maxime officiis distinctio minima eius blanditiis necessitatibus excepturi reiciendis rerum et, vel dolore neque. Magnam impedit tempore ipsum?",
    }
];

function changeTopic(topic_id) {
    console.log(topic_id);
    // Get topic
    const topic = topics[topic_id];

    // Set topic
    $("#topic_title").text(topic.title);
    $("#topic_content").text(topic.content);
}