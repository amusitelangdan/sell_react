/*
 * @Author: your name
 * @Date: 2022-01-12 14:55:07
 * @LastEditTime: 2022-01-12 21:19:58
 * @LastEditors: Please set LastEditors
 * @Description: api 文档
 * @FilePath: /sell-react-2-0(1)/src/api/api.js
 */
import fetch from "isomorphic-unfetch"

const baseURL = "http://45.63.15.204:8001"

export const getBanner = async () => {
  const res = await fetch(`${baseURL}/api/banner`)
  const json = await res.json()
  return json
}

export const getNfts = async (page = 1) => {
  const res = await fetch(`${baseURL}/api/nfts?page=${page}`)
  const json = await res.json()
  return json
}

export const getCollection = async (
  type = "collection",
  page = 1,
  size = 20,
  userid = ""
) => {
  const res = await fetch(
    `${baseURL}/api/nfts?type=${type}&page=${page}&size=${size}&userid=${userid}`
  )
  const json = await res.json()
  return json
}

export const GetUser = async (userid) => {
  const res = await fetch(`${baseURL}/api/get_user?userid=${userid}`)
  const json = await res.json()
  return json
}

export const PostLogin = async (email, psd) => {
  const res = await fetch(`${baseURL}/login`, {
    method: "POST",
    body: JSON.stringify({ email: email, password: psd }),
  })
  if (res.status === 200) {
    const json = await res.json()
    return json
  } else {
    alert("登录失败")
    return null
  }
}

export const PostRegister = async (src, name, email, password) => {
  const res = await fetch(`${baseURL}/register`, {
    method: "POST",
    body: JSON.stringify({ avator: src, name: name, email: email, password }),
  })
  const json = await res.json()
  return json
}

export const UpdatePsd = async (userid, old_password, new_password) => {
  const res = await fetch(`${baseURL}/api/edit_password`, {
    method: "POST",
    body: JSON.stringify({ userid, old_password, new_password }),
  })
  const json = await res.json()
  return json
}

export const UpdateUser = async (userid, email, name) => {
  const res = await fetch(`${baseURL}/api/edit_user`, {
    method: "POST",
    body: JSON.stringify({ userid, email, name }),
  })
  const json = await res.json()
  return json
}

export const GetShopDetail = async (shopid) => {
  const res = await fetch(`${baseURL}/api/shop_detail?shopid=${shopid}`)
  const json = await res.json()
  return json
}
