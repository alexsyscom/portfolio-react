import React from 'react';

  export default function (props){
    let arr = props.conf;
   
    
    const contactsList = arr.map((item, index) => {
        return(
            <div className={(props.itemsModificator) ? 
            "contacts-items__item "+props.itemsModificator :
            "contacts-items__item"
            } key={index}>
                <img
                 src={item.img}
                 alt={item.alt}
                 className={props.itemImageModificator}
                />
                <a
                href={item.link}
                className={(props.itemLinkModificator) ?"contacts-items__item__link "+props.itemLinkModificator:"contacts-items__item__link"}
                >
                {item.title}
                </a>
            </div>
        )
    });
    return(
        <div className={(props.contactsModificator) ? "contacts "+props.contactsModificator: "contacts"}>
            { props.title && 
                <>
                <div className="caption">
            <h2 className="caption__title">{props.title}</h2>
                    <div className="caption__decorator"></div>
                </div>
                </>
            }
            <div className={(props.itemsModificator) ? "contacts-items "+props.itemsModificator: "contacts-items"}>
                {contactsList}
            </div>
        </div>
    )
  }