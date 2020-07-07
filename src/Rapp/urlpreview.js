import React from 'react';

function UrlPreview(props) {
    console.log(props)
    if(!props.info) return(<div></div>)
    return(
    <div className="cdx-block" style={{textAlign:"left"}}>
        <div className="link-tool">
            <a className="link-tool__content link-tool__content--rendered" target="_blank" rel="nofollow noindex noreferrer" href={props.info.link?props.info.link:""}>
                <div className="link-tool__image" style={{backgroundImage:"url(\""+props.info.meta.image.url+"\")"}}></div>
                <div className="link-tool__title">{props.info.meta.title}</div>
                <p className="link-tool__description">{props.info.meta.description}</p>
                <span className="link-tool__anchor">{props.info.meta.domaine}</span>
            </a>
        </div>
    </div>)
}

export default UrlPreview;