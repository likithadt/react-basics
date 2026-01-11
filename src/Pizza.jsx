exhttps://github.com/vishnukg/kitty.gitport default (props) => {
  return (
    <div className="pizza">
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <img src={props.image} />
    </div>
  );
};
