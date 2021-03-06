import { Button } from "react-bootstrap"

const DetailInfo = ({ data }) => {
  return (
    <>
      <h1 className="mb-4" style={{ fontWeight: "bolder" }}>
        {data.shop_title}
      </h1>
      <div className="d-flex flex-column flex-sm-row align-items-sm-center justify-content-sm-between mb-4">
        <div className="d-flex detail-item-1">
          <img src={"/img/dengpao.png"} className="eye-icon" />
          <div className="text-capitalize qwerzxc">
            by {data.author ? data.author : "buy"}
          </div>
        </div>
        <div className="d-flex detail-item-1">
          <img src={"/img/eye.png"} className="eye-icon" />
          <div className="text-capitalize qwerzxc">{data.views} viewers</div>
        </div>
        <div className="d-flex detail-item-1">
          <img src={"/img/love.png"} className="eye-icon" />
          <div className="text-capitalize qwerzxc">{data.star} viewers</div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div className="text-capitalize detail-price-title qwerzxc" style={{marginTop: 0}}>current price</div>
          <div className="price-list-detail1">
            <img src={`/img/logo.png`} className="logo" />
            <div className="price2">{data.nfts_price}</div>
            <div className="price3">
              {"("}$ {data.price}
              {")"}
            </div>
          </div>
        </div>
        <Button
          variant="dark"
          size="small"
          className="mb-1"
          onClick={() => {
            window.open(data.make_an_offer)
          }}
          // style={{ marginTop: 30 }}
        >
          <img src={"/img/label1.png"} className="price4" />
          {/* <FontAwesomeIcon icon={faShoppingCart} className="me-2" /> */}
          go to make an offer
        </Button>
      </div>
    </>
  )
}

export default DetailInfo
