const SearchBox = ({searchChange}) => {
   return (
      <div className="pa2 mb3">
         <input 
            className="pa3 ba br4 b--green bg-lightest-blue"
            type="search" 
            placeholder="Search Robots"
            onChange={searchChange} 
         />
      </div>
   )
}

export default SearchBox;