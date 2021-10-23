import React from 'react'
import StarRatings from 'react-star-ratings';

const List = ({setType,places, isLoading,setRating,rating,type}) => {

    return (
        <>
        <div className="list">
            <h3 className="p-2 text-center">Find NearBy Resturents & Hotels </h3>
            {
                isLoading ? (
                    <>
                   {/* <div className="load">
                   <h2>Loading . . .</h2>
                   </div> */}
                   <div className="loadrow">
                   <div className="row ">
                   <div className="col-10 mx-auto">
                       <div className="loadbox">

                       </div>

                       <div className="textload">

                       </div>
                       <div className="textload mt-2">

                      </div>
                      <div className="text-center">
                          <button className="bbt m-1"></button>
                          <button className="bbt m-1"></button>
                      </div>

                   </div>
                   <div className="col-10 mx-auto">
                       <div className="loadbox">

                       </div>

                       <div className="textload">

                       </div>
                       <div className="textload mt-2">

                      </div>
                      <div className="text-center">
                          <button className="bbt m-1"></button>
                          <button className="bbt m-1"></button>
                      </div>

                   </div>
                  </div>

                   </div>
                   
                    </>
                ) : (
                    <>
            <form className="p-3">
            <div class="form-row">
            <div class="form-group col-md-6">
                 <select class="form-control" value={type} onChange={(e)=>setType(e.target.value)}>
            <option value="restaurants">Resturents</option>
            <option value="hotels">Hotels</option>
            <option value="attractions">Attractions</option>
            
            </select>
                                
                             
            </div>
            <div class="form-group col-md-6">
                 <select class="form-control" value={rating} onChange={(e) => setRating(e.target.value)}>
            <option value="1">All</option>
            <option value="3">Above 3</option>
            <option value="3.5">Above 3.5</option>
            <option value="4">Above 4</option>

            
           
            
            </select>
                                
                             
            </div>
                              
             </div>
            </form>
           
                    
            <div className="row det">
                {
                    places?.map((val,ind)=>{
                        return(
                            <>
                            <div className="col-10 mx-auto mb-4" key={ind}>
                    <div className="card p-2">
                    <img src={val.photo ? val.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'} alt="food" className="cardimg" />
                        <div className="p-2">
                            <h5>{val.name}</h5>
                            
                             {
                                 val.rating==="4.0" && <> <StarRatings rating={4} starDimension="20px" starRatedColor="orange"  starSpacing="3px" /> <span className="pl-5">{val.num_reviews} reviews</span> </>
                             }
                             {
                                 val.rating==="3.0" && <> <StarRatings rating={3} starDimension="20px" starRatedColor="orange"  starSpacing="3px" /> <span className="pl-5">{val.num_reviews} reviews</span> </>
                             }
                             {
                                 val.rating==="4.5" && <> <StarRatings rating={4.5} starDimension="20px" starRatedColor="orange"  starSpacing="3px" /> <span className="pl-5">{val.num_reviews} reviews</span> </>
                             }
                             {
                                 val.rating==="5" && <> <StarRatings rating={5} starDimension="20px" starRatedColor="orange"  starSpacing="3px" /> <span className="pl-5">{val.num_reviews} reviews</span> </>
                             }
                             {
                                 val.rating==="3.5" && <> <StarRatings rating={3.5} starDimension="20px" starRatedColor="orange"  starSpacing="3px" /> <span className="pl-5">{val.num_reviews} reviews</span> </>
                             }
                        
                            {
                                val.ranking &&  (<>  <p className="">Ranking :&nbsp; {val.ranking}</p> </>)
                            }
                            {
                                val.price &&  (<>  <p className="mg">price :&nbsp; {val.price}</p> </>)
                            }
                           
                            <div className="awd">
                                {
                                    val.awards?.map((aw,ind)=>{
                                        return(
                                            <>
                                    <div className="award" key={ind}>
                                <img src={aw.images.small} alt="award" className="awrdimg" />
                                <p>{aw.display_name}</p>
       
                                </div>
                                            </>
                                        )
                                    })
                                }
                            
                          
                            </div>
                            <div className="awd">
                            
                            {
                                    val.cuisine?.map((aw,ind)=>{
                                        return(
                                            <>
                                    <span class="badge badge-info m-1" key={ind}>{aw.name}</span>
                                            </>
                                        )
                                    })
                                }
                            </div>
                            {
                                val.email && <p>email : {val.email}</p>
                            }
                            {
                                val.address && <p>Address : {val.address}</p>
                            }
                            
                           
                            {val.phone && <p>{val.phone }</p> }


                            <div className="text-center">
                                {
                                    val.web_url && <button className="btn btn-info m-1 btn-sm" onClick={()=>window.open(val.web_url,"_blank")}>Trip Advisor</button>
                                }
                                {
                                    val.website && <button className="btn btn-info m-1 btn-sm" onClick={()=>window.open(val.website,"_blank")}>website</button>
                                }
                                
                            </div>
       
      
                        </div>
                    </div>
                </div>

                            </>
                        )

                    })
                }

            
             

            </div>


                    </>
                )
            }
            

            
        </div>
            
        </>
    )
}

export default List
