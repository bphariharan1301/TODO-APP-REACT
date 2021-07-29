
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
    return (
        <header className='header'>
            <h1>
                { title }
            </h1>

            {/* Dynamic button for various situation */}
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />

        </header>
    )
}

Header.defaultProps = {
    title: 'TO-DO APP',
}

Header.prototype = {
    title: PropTypes.string.isRequired,
}

export default Header
