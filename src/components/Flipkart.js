const Flipkart = (props)=>
    {
        // style={"border: 2px solid #adadad;,align-items: center;,border-radius: 105px;,margin: 38px;"}
    return (
        <>
       
        <div className="flex items-center justify-center flex-col h-[600px] w-[500px] rounded-md text-left py-3 p-4 border-black m-[50px] border-2 border-slate-400 " >
            <img src={props.imgSrc}  className="w-[300px] h-[400px] rounded-md"/>
            <div className="flex flex-col  item-center justify-center w-[300px]">
                <div>
                    <p className="text-slate-300">Sponsored</p>
                </div>
                <div>
                    <p>veirdo</p>
                </div>
                <div>
                    <p>Men Full Sleeve Solid Hooded S..</p>
                </div>
                <div>
                   <p><span>&#8377; {props.price}</span> <span className="line-through text-slate-300"> &#8377;{props.orginalPrice}</span> <span className="text-red-300"> {props.discount} off</span></p>
                </div>

            </div>
        </div>
        </>
    )
    }

    export default Flipkart;