import SearchBox from './SearchBox'

const NavBar = ({ onSearchChange, onPrefixChange }) => {
    return (
        <div className='tc'>
            <h1 className='f1'>Hello Robofriends</h1>
            <SearchBox onSearchChange={onSearchChange} />
            </div>
    )
}

export default NavBar