const Card = (props) => {
   return(
      <div className="bg-light-blue dib br3 pa3 ma2 grow ba bw1 b--blue shadow-5">
         <img alt="robots" src={`https://robohash.org/${props.id}?size=200x200`} />
         <div>
            <h2>{props.name}</h2>
            <p>{props.email}</p>
         </div>
      </div>
   );
}

export default Card;