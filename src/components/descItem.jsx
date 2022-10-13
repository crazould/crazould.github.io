const DescItem = ({ title, content, currIdx, viewIdx, setViewIdx }) => {
  const DescContent = content.map(({ name, date, link, desc }) => {
    return (
      <li className="content-item">
        <div className="content-title">{name}</div>
        <div className="content-date">{date}</div>
        <div className="content-info">{desc}</div>
        {link ? (
          <a className="content-link" href={link} target="_blank">
            view
          </a>
        ) : (
          ""
        )}
      </li>
    );
  });

  return (
    <li
      className={
        viewIdx === currIdx
          ? `active desc-item item-${currIdx}`
          : viewIdx !== -1
          ? "disable desc-item"
          : "desc-item"
      }
      onClick={() => {
        setViewIdx(currIdx);
      }}
    >
      {title}
      <ul className="content">{DescContent}</ul>
    </li>
  );
};

export default DescItem
