
export default function CoreConcept(props){
    const {image,title,description}=props;
    console.log(props);
    return (
      <li>
        <img src={image} />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    )
  }
  
  