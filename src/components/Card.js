// import { Card } from "react-bootstrap"
// import Image from "./CustomImage"
// import Icon from "./Icon"
// import Link from "next/link"
// const src = require("./../../public/img/photo/benjamin-voros-260869-unsplash.jpg")

// const CardComponent = ({ data }) => {
//   return (
//     <>
//       <div className="card-item">
//         <Image
//           src={src}
//           className="card-img"
//           layout="responsive"
//           width={306}
//           height={306}
//           alt={data.title}
//           priority
//         />
//         <div className="card_item_bottom">
//           <h6 className="text-uppercase">
//             <Link href={data.link}>
//               <a className="text-dark">{data.name}</a>
//             </Link>
//           </h6>
//           <div className="card_item_bottom_desc">
//             <div>${data.price.toFixed(2)}</div>
//             <div>
//               Last
//               <Icon className="card_item_icon" icon="us-dollar-1" />
//               ${data.price.toFixed(2)}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
//   // return (
//   //   <Card style={{ border: "none", margin: "0 auto", padding: 10, paddingTop: 0 }}>
//   // <Image
//   //   src={src}
//   //   className="card-img"
//   //   layout="responsive"
//   //   width={306}
//   //   height={306}
//   //   alt={data.title}
//   //   priority
//   // />
// <Card.ImgOverlay className="d-flex align-items-center">
//   <div className="w-100 card_image_mask">
//     <div className="card_image_top">
// <div className="card_image_top_item">
//   <img
//     src="https://app.ninchanese.com/img/nincha-sit.png"
//     className="card_image_top_item_image"
//   />
//   <div className="text-capitalize">by stoic</div>
// </div>
// <div className="card_image_top_item">
//   <Icon className="card_item_icon" icon="heart-1" />
//   <div className="text-capitalize">80</div>
// </div>
//     </div>
//   </div>
// </Card.ImgOverlay>
//   // <div className="card_item_bottom">
//   //   <h6 className="text-uppercase">monkey king red suit</h6>
//   //   <div className="card_item_bottom_desc">
//   //     <div>40.00</div>
//   //     <div>
//   //       Last
//   //       <Icon className="card_item_icon" icon="us-dollar-1" />
//   //       0.8
//   //     </div>
//   //   </div>
//   // </div>
//   //   </Card>
//   // )
// }

// export default CardComponent

import { Card } from "react-bootstrap"
import Image from "./CustomImage"
import Icon from "./Icon"
import Link from "next/link"
const src = require("./../../public/img/photo/benjamin-voros-260869-unsplash.jpg")

const CardComponent = ({ data, onClick = () => {} }) => {
  return (
    <>
      <div className="card-item">
        <div className="card_item_top">
          <Image
            src={data.image}
            className="card-img"
            layout="responsive"
            width={306}
            height={306}
            alt={data.title}
            priority
          />
          <div className="card-image-mask" onClick={() => onClick(data)}  style={{cursor: 'pointer'}}>
            <div className="card-image-mask-item">
              <div className="card_image_top_item">
                {/* <Image
                  src={data.image}
                  className="card_image_top_item_image"
                  layout="responsive"
                  width={16}
                  height={16}
                  priority
                /> */}
                <img
                  src={data.author_src}
                  className="card_image_top_item_image"
                />
                <div className="text-capitalize">{data.author}</div>
              </div>
              <div className="card_image_top_item">
                {data.is_star ? (
                  <></>
                ) : (
                  <Icon className="card_item_icon" icon="heart-1" />
                )}
                <div className="text-capitalize">{data.star}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="card_item_bottom">
          <h6 className="text-uppercase" onClick={() => onClick(data)} style={{cursor: 'pointer'}}>
            <a className="text-dark">{data.name}</a>
          </h6>
          <div className="card_item_bottom_desc">
            <div>${data.price.toFixed(2)}</div>
            <div>Last ${data.last_price.toFixed(2)}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardComponent
