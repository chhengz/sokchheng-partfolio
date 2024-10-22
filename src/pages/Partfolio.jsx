import { Link } from "react-router-dom";

const lists = [
  {
    icon: "💼",
    title: "Experience",
    list_of_text: [
      {
        text_title: "text 1",
        text_list: [{ text: "list 1" }, { text: "list 2" }, { text: "list 3" }],
      },
      {
        text_title: "text 2",
        text_list: [{ text: "haha" }],
      },
    ],
  },
  {
    icon: "🚀",
    title: "Projects",
    list_of_text: [
      {
        text_title: "",
        text_list: [{ text: "" }],
      },
    ],
  },
  {
    icon: "🔨",
    title: "Skills",
    list_of_text: [
      {
        text_title: "",
        text_list: [{ text: "" }],
      },
    ],
  },
];

const Partfolio = () => {
  return (
    <div className="partfolio_container">
      {/* header */}
      <header>
        <div className="banner"></div>
        <div className="avatar"></div>
        <div className="name"></div>
      </header>

      {/* section image */}
      <section>
        <div>
          <div className="icon"></div>
          <p></p>
        </div>
        <div className="image">
          <img src="" alt="test" />
        </div>
      </section>

      {/* List */}
      <section>
        <div className="aboutList">
          {lists.map((list) => (
            <article key={list.title}>
              <div className="titleBox">
                <h2>
                  <div className="icon">{list.icon}</div>
                  <div className="title">{list.title}</div>
                </h2>
              </div>
              {/* text box */}
              <div className="textBox">
                {list.list_of_text.map((item, index) => (
                  <div key={index}>
                    <h3>{item.text_title}</h3>
                    <ul>
                      {item.text_list.map((textItem, textIndex) => (
                        <li key={textIndex}>{textItem.text}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <Link to={"/"}>Back Home</Link>
    </div>
  );
};

export default Partfolio;
