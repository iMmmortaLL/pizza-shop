import React from "react";

function Sort({value, onChangeSort}){

    const [isVisible,setVisible] = React.useState(false);
    const [isDirection,setDirection] = React.useState(false);

    const list =[
        {name: "популярності",sort: "rating"},
        {name:"ціні", sort:"price"},
        {name:"алфавіту",sort: "title"}
    ]

    const onClickItem = (index) =>{
        onChangeSort (index);
        setVisible(false)
    }

    const toggleArrow = () => {
        setDirection(!isDirection);
    };

    return(
        <div className="sort">
            <div className="sort__label">
                <button  className={isDirection ? "sort__arrow__up" : "sort__arrow__down"} onClick={toggleArrow}/>

                <b>Сортувати по:</b>
                <span onClick={() => setVisible(!isVisible)}>{value.name}</span>
            </div>

            {
                isVisible && (
                    <div className="sort__popup">
                        <ul>
                            {list.map((object, index) =>(
                                <li key={index}
                                onClick={() => onClickItem(object)}
                                className={value.sort === object.sort ? "active" : ""}>
                                    {object.name}
                                </li>
                            ))
                            }
                        </ul>
                    </div>
                )
            }
        </div>
    );
}

export default Sort;