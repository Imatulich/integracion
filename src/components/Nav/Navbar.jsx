import SearchBar from "../searchbar/SearchBar";   


export default function NavBar ({onSearch}){
    return <div className="nav-container">
        <SearchBar onSearch={onSearch}/>
    </div>
}