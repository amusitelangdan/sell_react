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
const src = require("./../../public/img/photo/benjamin-voros-260869-unsplash.jpg");

// const CardComponent = ({ data, onClick = () => {} }) => {
//   return (
//     <>
//       <div className="card-item">
//         <div className="card_item_top">
//           {/* <Image
//             src={data.image}
//             className="card-img"
//             layout="responsive"
//             width={306}
//             height={306}
//             alt={data.title}
//             priority
//           /> */}
//           <img
//             src={data.image}
//             className="card-img"
//             // style={{ width: 306, height: 306 }}
//           />
//           <div
//             className="card-image-mask"
//             onClick={() => onClick(data)}
//             style={{ cursor: "pointer" }}
//           >
//             <div className="card-image-mask-item">
//               <div className="card_image_top_item">
//                 {/* <Image
//                   src={data.image}
//                   className="card_image_top_item_image"
//                   layout="responsive"
//                   width={16}
//                   height={16}
//                   priority
//                 /> */}
//                 <img
//                   src={data.author_src}
//                   className="card_image_top_item_image"
//                 />
//                 <div className="text-capitalize">{data.author}</div>
//               </div>
//               <div className="card_image_top_item">
//                 {data.is_star ? (
//                   <></>
//                 ) : (
//                   <Icon className="card_item_icon" icon="heart-1" />
//                 )}
//                 <div className="text-capitalize">{data.star}</div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="card_item_bottom">
//           <h6
//             className="text-capitalize"
//             onClick={() => onClick(data)}
//             style={{ cursor: "pointer" }}
//           >
//             <a className="text-dark">{data.name}</a>
//           </h6>
//           <div className="card_item_bottom_desc">
//             <div>${data.price.toFixed(2)}</div>
//             <div>Last ${data.last_price.toFixed(2)}</div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

const CardComponent = ({ data, onClick = () => {}, onStar= () => {} }) => {
  return (
    <>
      <section>
        <div>
          <div className="row justify-space-between py-2">
            <div className="col-12 mx-auto">
              <div className="card shadow-lg mt-4">
                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                  <a
                    className="d-block blur-shadow-image"
                    onClick={() => onClick(data)}
                    style={{ background: "#ffffff", position: "relative" }}
                  >
                    <img
                      src={data.image}
                      alt="img-blur-shadow"
                      className="img-fluid shadow border-radius-lg"
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: 10,
                        left: 0,
                        width: "100%",
                        height: "40px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        boxSizing: "border-box",
                        padding: "0 10px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          background: "rgba(0,0,0,0.1)",
                          padding: "4px 8px",
                          borderRadius: "30px",
                        }}
                      >
                        <img
                          src={data.author_src}
                          width={15}
                          height={15}
                          style={{ marginRight: 5, borderRadius: "50%" }}
                          className="card_image_top_item_image"
                        />
                        <div
                          className="text-capitalize"
                          style={{ color: "#ffffff" }}
                        >
                          {data.author}
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          background: "rgba(0,0,0,0.1)",
                          padding: "4px 8px",
                          borderRadius: "30px",
                          color: "#ffffff",
                        }}
                        onClick={async (e) => {
                          e.stopPropagation();
                          console.log(1)
                          onStar(data);
                        }}
                      >
                        {data.is_star ? (
                          <>
                          <img src={'/img/icon_like_check_@2x.png'} style={{width: 18, height: 18}}/>
                          </>
                        ) : (
                          <Icon className="card_item_icon" icon="heart-1" />
                        )}
                        <div className="text-capitalize">{data.star}</div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="card-body">
                  <h4 onClick={() => onClick(data)} style={{cursor: "pointer"}}>{data.name}</h4>
                  {/* <p>
                    One of the most beautiful and complex UI Kits built by the
                    team behind Creative Tim. That&#34;s pretty impressive.
                  </p> */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: 'space-between',
                      color: "#8a929a",
                    }}
                  >
                    <div
                      className=" icon-move-right"
                    >
                      ${data.price.toFixed(2)}
                    </div>
                    <div
                      className=" icon-move-right"
                    >
                     Last ${data.last_price.toFixed(2)}
                      <i
                        className="fas fa-arrow-right text-xs ms-1"
                        aria-hidden="true"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CardComponent
