import classNames from 'classnames';
import useNavigation from '../hooks/use-navigation.js';

function Link({ to, children, className, activeClassName }) {
    const { navigate, currentPath } = useNavigation();

    const classes = classNames('text-blue-500', className,
    currentPath === to && activeClassName);

    const handleClick = (evt) => {
        if (evt.ctrlKey ||evt.metaKey) {
            return;
        }
        
        evt.preventDefault();

        navigate(to);

    };

    return <a className={ classes } href={to} onClick={handleClick}>{children}</a>
}

export default Link;