import PropTypes from 'prop-types';

function Card(props) {
    console.log(
        "siteUrl: " + props.siteUrl +
        "siteLogo: " + props.siteLogo +
        "siteName: " + props.siteName
    )
    return (
        <>
            <a href={props.siteUrl} target='_'>
                <div className='link-card'>
                    <img src={props.siteLogo} />
                    <br />
                    {props.siteName}
                </div>
            </a>
        </>
    )
}

Card.propTypes = {
    siteUrl: PropTypes.string.isRequired,
    siteLogo: PropTypes.string.isRequired,
    siteName: PropTypes.string.isRequired
}

export default Card;