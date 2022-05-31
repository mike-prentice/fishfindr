const FishList = (props) => {
  
    const fishName = props.fishName;
  
  console.log(props, fishName);
  
    return (
    <div className="fish_list">
      {fishName.map(fish => (
        <div className="fish" key={fish.id}>
          <h2>{fish.title}</h2>
          <p>{fish.body}</p>
        </div>
      ))}
    </div>
  );
};

export default FishList;
