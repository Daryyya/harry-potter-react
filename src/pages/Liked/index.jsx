import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../Card'
import Main from '../../Main'


const Liked = ({liked, data, like, dislike}) => {
  // let filterarr = data.filter(el => el.includes(liked));
  

  let test = data.filter((el) => liked.includes(el.name))
  console.log(test)
  return (
    <div>
        
        <Link to="/"><button>BACK</button></Link>
        <Main>
        {
          test.map((item, index) => <Card key={index} item={item} isLiked={liked?.includes(item.name)}
          like={like}
          dislike={dislike}/>)
        }
        </Main>
        

        
        </div>
  )
}

export default Liked