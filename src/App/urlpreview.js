import React from 'react';

function UrlPreview(props) {
    if(!props.info||!props.info.meta) return(<div key={"urlpreviewkey"}></div>)
    return(
    <div className="cdx-block" style={{textAlign:"left",background:"grey"}} key={props.info.title+props.info.domaine}>
        <div className="link-tool" key={props.info.meta.url?props.info.meta.url:""}>
            <a className="link-tool__content link-tool__content--rendered" key={props.info.meta.url+"link"} target="_blank" rel="nofollow noopener noindex noreferrer" href={props.info.meta.url?props.info.meta.url:""}>
                <div className="link-tool__image" key={props.info.meta.image.url?props.info.meta.image.url:""} style={{backgroundImage:"url(\""+props.info.meta.image.url+"\")"}}></div>
                <div className="link-tool__title" key={props.info.meta.title}>{props.info.meta.title}</div>
                <p className="link-tool__description" key={props.info.meta.description}>{props.info.meta.description}</p>
                <span className="link-tool__anchor" key={props.info.meta.domaine}>{props.info.meta.domaine}</span>
            </a>
        </div>
    </div>)
}

export default UrlPreview;