/*
 * @Author: your name
 * @Date: 2022-01-15 18:30:52
 * @LastEditTime: 2022-01-15 19:05:52
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /sell-react-2-0(1)/src/pages/activation.js
 */
import React, { useEffect } from "react"
import { PostActivite, SetLocal } from "../api/api"
import { notification } from "antd"
import { useRouter } from "next/router"

export async function getServerSideProps(context) {
  if (context.query.tokenid) {
    return {
      props: {
        tokenid: context.query.tokenid,
      },
    }
  } else {
    return {
      props: {
        tokenid: "",
      },
    }
  }
}

const Activation = (props) => {
  const router = useRouter()
  useEffect(() => {
    if (props.tokenid) {
      postActivate(props.tokenid)
    }
  }, [])
  const postActivate = async (token) => {
    const res = await PostActivite(token)
    if (res.code === "200") {
      SetLocal("user", res.data.userid)
      router.replace("/profile")
    }

    if (res.code === "100") {
      return notification.error({
        message: res.data.msg,
        placement: "bottomRight",
      })
    }

    if (res.code === "404") {
      return notification.error({
        message: res.data ? (res.data.msg ? res.data.msg : "ERROR") : "ERROR",
        placement: "bottomRight",
      })
    }
  }
  return <></>
}

export default Activation
