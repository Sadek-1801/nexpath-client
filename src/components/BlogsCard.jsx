import { useLoaderData } from "react-router-dom";


const BlogsCard = () => {
    const post = useLoaderData()
    const { title, excerpt, date, author, content } = post;
    return (
        <div className="container mx-auto px-4 py-16 md:w-1/2">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        <p className="text-gray-600 text-sm mb-8">
          By {author} | Posted on {date}
        </p>
        <p className="text-lg mb-8">{excerpt}</p>
  
        {/* Loop through content sections */}
        {content.map((section, index) => (
          <div key={index}>
            {section.type === "paragraph" && (
              <p className="mb-8">{section.text}</p>
            )}
            {section.type === "heading" && (
              <h2 className="text-2xl font-bold mb-4">{section.text}</h2>
            )}
            {section.type === "list" && (
              <ul className="list-disc pl-4 mb-8">
                {section.items.map((item, subIndex) => (
                  <li key={subIndex}>{item}</li>
                ))}
              </ul>
            )}
            {section.type === "conclusion" && (
              <p className="text-lg font-semibold mb-8">{section.text}</p>
            )}
          </div>
        ))}
      </div>
    );
};

export default BlogsCard;