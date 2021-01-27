import snarkdown from "snarkdown";

export default function JsxPrinter(data) {
  return <div>{mapChildren(data)}</div>;
}
const mapChildren = (data) =>
  data &&
  data.map((item) => {
    if (item.component && components[item.component] && item.props)
      return components[item.component](item.props);
    return null;
  });

//components-------------------------------
const sectionComponent = ({ h2, text, children }) => {
  return (
    <>
      <Title>{h2}</Title>
      <Text>{text}</Text>
      {mapChildren(children)}
    </>
  );
};
const cardComponent = ({ children, title, text, link }) => (
  <>
    <Title>{title}</Title>
    <Text>{text}</Text>
    <a href={link}>{link}</a>
    {mapChildren(children)}
  </>
);
const markdownComponent = ({ children, text }) => {
  let html = snarkdown(text);
  return (
    <>
      <p dangerouslySetInnerHTML={{ __html: html }}></p>
      {mapChildren(children)}
    </>
  );
};
const rowComponent = ({ children, className }) => (
  <div className={className}>{mapChildren(children)}</div>
);
const tagComponent = ({ children, className, tag }) => {
  if (!children) return;
  if (typeof children === "string") {
    return customTag({ children, className, tag });
  }
  return children.map((child) => customTag({ children, className, tag }));
};
const Text = (props) => <p>{props.children}</p>;
const Title = (props) => <h2>{props.children}</h2>;
const customTag = ({ children, className, tag }) => {
  const CustomTag = tag;
  return <CustomTag className={className}>{children}</CustomTag>;
};

//components list---------------------------------
const components = {
  Section: sectionComponent,
  Card: cardComponent,
  Markdown: markdownComponent,
  Row: rowComponent,
  Col: rowComponent,
  Tag: tagComponent,
};
